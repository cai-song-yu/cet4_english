#!/usr/bin/env node
/* ============================================================
   gen-words.mjs —— 预生成课程词表 / 短语的真人发音
   用途：划词浮层里点 🔊，课程内的词与短语**离线**就能用 MiMo 真人音色读出来，
        不依赖本地服务（服务在时则任何文本都能读，见 tools/serve.js）。
   用法：
     node tools/gen-words.mjs               补齐所有缺的词条（词 + 短语）
     node tools/gen-words.mjs --words       只做单词
     node tools/gen-words.mjs --phrases     只做短语
     node tools/gen-words.mjs --limit 20    只做前 20 个（试跑）
     node tools/gen-words.mjs --force       忽略已生成的文件重做
     node tools/gen-words.mjs --dry-run     只打印计划
   产出：
     assets/audio/words/<词条>.mp3
     assets/audio/words/manifest.js   window.WORD_AUDIO = { 规范化词条: 路径, ... }
   音色与所属篇目一致：单数篇 Chloe/native、双数篇 Mia/british（与课文朗读统一）。
   ============================================================ */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import vm from "node:vm";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const KEY_FILE = path.join(__dirname, ".mimo-key");
const WORDS_DIR = path.join(ROOT, "assets", "audio", "words");
const MANIFEST = path.join(WORDS_DIR, "manifest.js");

const API_URLS = {
  payg: "https://api.xiaomimimo.com/v1/chat/completions",
  tokenplan: "https://token-plan-cn.xiaomimimo.com/v1/chat/completions"
};
const MODEL = "mimo-v2.5-tts";
const STYLES = {
  native:
    "Clear, natural native American English, warm and friendly audiobook narration for English learners. " +
    "Moderate pace, relaxed yet precise articulation, natural connected speech, thought groups and intonation. " +
    "Calm, encouraging teaching tone. No exaggerated emotion.",
  british:
    "Clear, natural British English (RP), warm and friendly audiobook narration for English learners. " +
    "Moderate pace, precise articulation, natural connected speech and intonation. Calm, encouraging teaching tone. No exaggerated emotion."
};
const VOICE_FOR = { native: "Chloe", british: "Mia" };

function endpointFor(key) {
  return /^t{1,2}p-/i.test(key) ? API_URLS.tokenplan : API_URLS.payg;
}
function readKey() {
  if (process.env.MIMO_API_KEY) return process.env.MIMO_API_KEY.trim();
  try {
    return fs.readFileSync(KEY_FILE, "utf8").trim();
  } catch (e) {
    return "";
  }
}
/* 与 app.js 的 norm() 保持一致：折叠空白、去首尾标点、转小写 */
function norm(s) {
  return String(s)
    .replace(/\s+/g, " ")
    .replace(/^[\s"'“”‘’.,;:!?()…\[\]【】]+|[\s"'“”‘’.,;:!?()…\[\]【】]+$/g, "")
    .toLowerCase()
    .trim();
}
function fileName(key) {
  const s = key.replace(/[^a-z0-9]+/gi, "-").replace(/^-+|-+$/g, "").toLowerCase();
  return (s || "x") + ".mp3";
}
function baseForm(en) {
  return String(en).replace(/\s*\([^)]*\)\s*$/, "").trim();
}
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- 收集词条 ---------- */
function collect() {
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(path.join(ROOT, "assets", "js", "articles.js"), "utf8"), ctx);
  const A = ctx.window.ARTICLES.slice().sort((a, b) => a.id - b.id);
  const items = [];
  const seen = new Set();
  const push = (text, kind, id) => {
    const key = norm(text);
    if (!key || seen.has(key)) return;
    seen.add(key);
    const style = id % 2 === 1 ? "native" : "british";
    items.push({ key, text: key, kind, id, style, voice: VOICE_FOR[style] });
  };
  for (const a of A) {
    for (const v of a.vocabulary || []) push(v.w, "word", a.id);
  }
  for (const a of A) {
    for (const p of a.phrases || []) {
      push(p.en, "phrase", a.id);
      const b = baseForm(p.en);
      if (b && b !== p.en) push(b, "phrase", a.id);
    }
  }
  return items;
}

/* ---------- 一次合成 ---------- */
async function synthesize(key, text, { voice, style, timeoutMs = 60000 }) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(endpointFor(key), {
      method: "POST",
      signal: ctrl.signal,
      headers: { "Content-Type": "application/json", "api-key": key },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "user", content: STYLES[style] || STYLES.native },
          { role: "assistant", content: text }
        ],
        audio: { format: "mp3", voice }
      })
    });
    const bodyText = await res.text();
    if (!res.ok) {
      const e = new Error("HTTP " + res.status + " " + bodyText.slice(0, 160));
      e.fatal = res.status === 401 || res.status === 403 || res.status === 400;
      throw e;
    }
    const data = JSON.parse(bodyText);
    const b64 = data && data.choices && data.choices[0] && data.choices[0].message
      && data.choices[0].message.audio && data.choices[0].message.audio.data;
    if (!b64) throw new Error("响应里没有音频数据");
    return Buffer.from(b64, "base64");
  } finally {
    clearTimeout(timer);
  }
}

async function main() {
  const argv = process.argv.slice(2);
  const has = (f) => argv.includes(f);
  const val = (f, d) => {
    const i = argv.indexOf(f);
    return i >= 0 && argv[i + 1] ? argv[i + 1] : d;
  };
  const onlyWords = has("--words"), onlyPhrases = has("--phrases");
  const limit = +val("--limit", "0");
  const dry = has("--dry-run");

  let items = collect();
  if (onlyWords) items = items.filter((x) => x.kind === "word");
  if (onlyPhrases) items = items.filter((x) => x.kind === "phrase");
  fs.mkdirSync(WORDS_DIR, { recursive: true });

  const todo = items.filter((x) => has("--force") || !fs.existsSync(path.join(WORDS_DIR, fileName(x.key))));
  const list = limit ? todo.slice(0, limit) : todo;
  console.log(`词条 ${items.length} 个 · 待生成 ${todo.length} 个 · 本次 ${list.length} 个`);
  if (dry) {
    list.slice(0, 30).forEach((x) => console.log(`  ${x.kind} ${x.text}  → ${fileName(x.key)}  ${x.voice}/${x.style}`));
    return;
  }
  const key = readKey();
  if (!key) {
    console.log("缺少 API key：写入 tools/.mimo-key 或设置 MIMO_API_KEY");
    process.exit(1);
  }

  const conc = +val("--concurrency", "3");
  let done = 0, fail = 0, idx = 0;
  async function worker() {
    while (idx < list.length) {
      const it = list[idx++];
      const out = path.join(WORDS_DIR, fileName(it.key));
      let ok = false;
      for (let att = 0; att < 3 && !ok; att++) {
        try {
          const buf = await synthesize(key, it.text, { voice: it.voice, style: it.style });
          fs.writeFileSync(out, buf);
          ok = true;
          done++;
          console.log(`  [${done + fail}/${list.length}] ${it.text}  ${(buf.length / 1024).toFixed(0)}KB  ${it.voice}/${it.style}`);
        } catch (e) {
          if (e.fatal) {
            console.log("  鉴权类错误，中止：" + e.message);
            process.exit(1);
          }
          if (att === 2) {
            fail++;
            console.log(`  ✗ ${it.text}：${e.message}`);
          } else {
            await sleep(1500 * Math.pow(2, att));
          }
        }
      }
    }
  }
  await Promise.all(Array.from({ length: Math.min(conc, Math.max(1, list.length)) }, worker));

  /* 重写清单：把磁盘上全部词条登记进去 */
  const manifest = {};
  for (const it of items) {
    const f = fileName(it.key);
    if (fs.existsSync(path.join(WORDS_DIR, f))) {
      manifest[it.key] = "assets/audio/words/" + f;
    }
  }
  const n = Object.keys(manifest).length;
  fs.writeFileSync(
    MANIFEST,
    "/* 由 tools/gen-words.mjs 生成 —— 课程词表真人发音清单，请勿手改；重新生成会覆盖本文件 */\n" +
      "window.WORD_AUDIO = " + JSON.stringify(manifest) + ";\n" +
      "/* 词条 " + n + " 个 · 生成时间 " + new Date().toLocaleString("zh-CN") + " */\n",
    "utf8"
  );
  console.log(`\n成功 ${done} · 失败 ${fail} · 清单词条 ${n} 个 → ${path.relative(ROOT, MANIFEST)}`);
  process.exit(fail ? 1 : 0);
}

main().catch((e) => {
  console.log("失败：" + e.message);
  process.exit(1);
});
