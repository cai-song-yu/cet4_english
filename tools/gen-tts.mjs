#!/usr/bin/env node
/* ============================================================
   gen-tts.mjs —— 用小米 MiMo TTS 预生成课文真人朗读音频
   （离线一次性生成；站点运行时零调用、零费用风险、可公开）

   准备：
     1) 在 https://platform.xiaomimimo.com 控制台拿到 API Key
        · 按量付费 key 形如 sk-xxxxx（API Keys 页创建）
        · Token Plan 订阅 key 形如 tp-xxxxx / ttp-xxxxx（Token Plan 页获取）
          两者域名不同，本脚本按 key 前缀自动选端点，用错会 401
     2) 二选一放置 key：
          set MIMO_API_KEY=xxxx       （环境变量）
          或把 key 写进 tools/.mimo-key（已 gitignore，不会被提交）

   先试听挑音色（7 次调用）：
       node tools/gen-tts.mjs sample

   生成全部文章：
       node tools/gen-tts.mjs

   音色按篇交替（第 1 篇 Chloe 美音、第 2 篇 Mia 英式、第 3 篇又回 Chloe …）：
       node tools/gen-tts.mjs --voice Chloe,Mia --style native,british

   常用参数：
       --article 3        只生成第 3 篇（音色仍按全局篇目序轮换）
       --voice Milo       音色：Mia / Chloe（女） Milo / Dean（男）；逗号分隔=按篇轮换
       --style calm       风格：native（默认）/ calm / story / british；逗号分隔=按篇轮换
       --base URL         覆盖接口地址（默认按 key 前缀自动选：sk- 按量付费 / tp- 订阅）
       --concurrency 2    并发数（接口限流时调低）
       --force            忽略已有文件重新生成
       --dry-run          只打印计划，不发请求（不需要 key）

   生成结果写入 assets/audio/<slug>/p<N>.mp3，
   并重写 assets/audio/manifest.js（只收「整篇齐全」的文章，
   所以站内要么整篇用真人音频，要么整篇回退浏览器朗读）。
   换音色重跑时会自动识别旧文件是别的音色、重新生成，不必手动 --force。
   ============================================================ */

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, "..");
const AUDIO_DIR = path.join(ROOT, "assets", "audio");
const MANIFEST_FILE = path.join(AUDIO_DIR, "manifest.js");
const KEY_FILE = path.join(__dirname, ".mimo-key");
const ARTICLES_FILE = path.join(ROOT, "assets", "js", "articles.js");

const API_URLS = {
  payg: "https://api.xiaomimimo.com/v1/chat/completions",          /* 按量付费：sk- 开头 */
  tokenplan: "https://token-plan-cn.xiaomimimo.com/v1/chat/completions", /* Token Plan 订阅：tp- / ttp- 开头 */
  batch: "https://batch-api-cn.xiaomimimo.com/v1/chat/completions"  /* 批量推理：sk- 专用地址 */
};
const MODEL = "mimo-v2.5-tts";

/* key 前缀决定端点（官方约定）：tp-/ttp- 是订阅制，域名和 sk- 不通用，用错一律 401 */
function endpointFor(key, baseOverride) {
  if (baseOverride) return String(baseOverride).replace(/\/+$/, "") + "/chat/completions";
  return /^t{1,2}p-/i.test(key) ? API_URLS.tokenplan : API_URLS.payg;
}

/* 内置音色：英文朗读只该用英文音色（中文默认音色冰糖读英文会串味） */
const VOICES = {
  Mia: "English Female",
  Chloe: "English Female",
  Milo: "English Male",
  Dean: "English Male",
  mimo_default: "跟随集群（国内 = 冰糖，中文）"
};

/* 风格指令（user 消息）是 MiMo TTS 控口音/语感的主要手段 —— 这里决定"地道"程度 */
const STYLES = {
  native:
    "Clear, natural native American English, warm and friendly audiobook narration for English learners. " +
    "Moderate pace, relaxed yet precise articulation, natural connected speech, thought groups and intonation. " +
    "Calm, encouraging teaching tone. No exaggerated emotion.",
  calm:
    "Calm, gentle, unhurried native American English for beginner learners. Every word clearly enunciated, " +
    "short natural pauses between sense groups, patient teacher tone, steady pace.",
  story:
    "Lively storytelling voice in natural native American English. Engaging and expressive, varied intonation, " +
    "natural pauses, moderate-to-brisk pace, as if reading a story aloud to a friend.",
  british:
    "Refined, natural British English (modern RP), warm documentary narration. Moderate pace, crisp consonants, " +
    "smooth connected speech, understated and articulate tone."
};

const SAMPLE_TEXT =
  "I am not a natural early riser. Last year, my mornings were always rushed. " +
  "Every day I hit the snooze button again and again, got out of bed at the last minute, " +
  "and ran to the bus stop. Breakfast was often a piece of bread eaten on the way.";

/* ---------- 小工具 ---------- */

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
const kb = (n) => (n / 1024).toFixed(0) + "KB";

function die(msg) {
  console.error("\n✖ " + msg + "\n");
  process.exit(1);
}

function loadArgs(argv) {
  const a = {
    mode: "gen",
    article: null,
    voice: "Mia",
    style: "native",
    concurrency: 3,
    force: false,
    dryRun: false,
    base: process.env.MIMO_BASE_URL || null
  };
  for (let i = 0; i < argv.length; i++) {
    const s = argv[i];
    if (s === "sample") a.mode = "sample";
    else if (s === "--article") a.article = parseInt(argv[++i], 10);
    else if (s === "--voice") a.voice = argv[++i];
    else if (s === "--style") a.style = argv[++i];
    else if (s === "--concurrency") a.concurrency = Math.max(1, parseInt(argv[++i], 10) || 3);
    else if (s === "--base") a.base = argv[++i];
    else if (s === "--force") a.force = true;
    else if (s === "--dry-run") a.dryRun = true;
    else if (s === "-h" || s === "--help") a.mode = "help";
    else die("不认识的参数：" + s + "（用 --help 看用法）");
  }
  /* --voice / --style 支持逗号分隔的多个值，按篇目顺序轮流用：
       --voice Chloe,Mia --style native,british
     → 第 1 篇 Chloe/native，第 2 篇 Mia/british，第 3 篇又回到 Chloe/native … */
  const voices = String(a.voice).split(",").map((s) => s.trim()).filter(Boolean);
  const styles = String(a.style).split(",").map((s) => s.trim()).filter(Boolean);
  const pairs = Math.max(voices.length, styles.length);
  a.pairs = Array.from({ length: pairs }, (_, i) => ({
    voice: voices[i % voices.length],
    style: styles[i % styles.length]
  }));
  a.pairs.forEach((p) => {
    if (!VOICES[p.voice]) die("--voice 只能是：" + Object.keys(VOICES).join(" / ") + "（收到 " + p.voice + "）");
    if (!STYLES[p.style]) die("--style 只能是：" + Object.keys(STYLES).join(" / ") + "（收到 " + p.style + "）");
  });
  return a;
}

function readApiKey() {
  if (process.env.MIMO_API_KEY && process.env.MIMO_API_KEY.trim())
    return process.env.MIMO_API_KEY.trim();
  if (fs.existsSync(KEY_FILE)) {
    const v = fs.readFileSync(KEY_FILE, "utf8").trim();
    if (v) return v;
  }
  return null;
}

/* articles.js 是 window.ARTICLES = [...] 的纯数据脚本，node 里直接求值 */
function loadArticles() {
  const src = fs.readFileSync(ARTICLES_FILE, "utf8");
  const fn = new Function("window", src + "\n;return window.ARTICLES;");
  const list = fn({}) || [];
  if (!Array.isArray(list) || !list.length) die("articles.js 里没读到文章数据");
  return list;
}

/* 正文带 <span class="w-cet4" data-cn="…"> 标注，朗读只取可见英文 */
function plain(html) {
  return String(html)
    .replace(/<br\s*\/?>/gi, " ")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

/* ---------- 一次合成 ---------- */

async function synthesize(key, text, { voice, style, timeoutMs = 120000, base }) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(endpointFor(key, base), {
      method: "POST",
      signal: ctrl.signal,
      headers: { "Content-Type": "application/json", "api-key": key },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: "user", content: STYLES[style] },
          { role: "assistant", content: text }
        ],
        audio: { format: "mp3", voice }
      })
    });
    const bodyText = await res.text();
    if (!res.ok) {
      const err = new Error("HTTP " + res.status + " " + bodyText.slice(0, 200));
      err.status = res.status;
      err.fatal = res.status === 401 || res.status === 403 || res.status === 400;
      throw err;
    }
    let data;
    try { data = JSON.parse(bodyText); } catch (e) { throw new Error("响应不是 JSON：" + bodyText.slice(0, 160)); }
    const b64 = data && data.choices && data.choices[0] && data.choices[0].message
      && data.choices[0].message.audio && data.choices[0].message.audio.data;
    if (!b64) throw new Error("响应里没有音频数据：" + bodyText.slice(0, 200));
    return Buffer.from(b64, "base64");
  } finally {
    clearTimeout(timer);
  }
}

/* 带重试：限流(429)与网络抖动退避重来，鉴权类错误直接中止 */
async function synthesizeRetry(key, text, opts, { retries = 4 } = {}) {
  let lastErr;
  for (let i = 0; i <= retries; i++) {
    try {
      return await synthesize(key, text, opts);
    } catch (e) {
      lastErr = e;
      if (e && e.fatal) throw e;
      if (i === retries) break;
      const wait = 1500 * Math.pow(2, i);
      console.warn("  ↻ 重试 " + (i + 1) + "/" + retries + "（" + (e.message || e) + "）等待 " + wait + "ms");
      await sleep(wait);
    }
  }
  throw lastErr;
}

async function pool(items, limit, worker) {
  let idx = 0;
  const runners = Array.from({ length: Math.min(limit, items.length) }, async () => {
    while (idx < items.length) {
      const i = idx++;
      await worker(items[i], i);
    }
  });
  await Promise.all(runners);
}

/* ---------- 清单 ---------- */

/* 读旧清单：判断哪些篇目音色变了需要重做，也保住本次没跑的篇目 */
function readManifest() {
  try {
    const src = fs.readFileSync(MANIFEST_FILE, "utf8");
    const m = src.match(/window\.AUDIO_MANIFEST\s*=\s*(\{[\s\S]*?\});/);
    return m ? JSON.parse(m[1]) : {};
  } catch (e) { return {}; }
}

/* 收录规则：整篇齐全才进清单（站内要么整篇真人、要么整篇浏览器朗读）。
   音色 / 风格记在条目里，便于站内提示与换音色重做判断。 */
function buildManifest(articlesAll, prev) {
  const manifest = {};
  let complete = 0;
  for (const a of articlesAll) {
    const slug = a.slug || "article-" + a.id;
    const dir = path.join(AUDIO_DIR, slug);
    const files = [];
    for (let i = 1; i <= a.body.length; i++) {
      const f = path.join(dir, "p" + i + ".mp3");
      if (!fs.existsSync(f) || fs.statSync(f).size < 200) { files.length = 0; break; }
      files.push("assets/audio/" + slug + "/p" + i + ".mp3");
    }
    if (files.length === a.body.length && files.length > 0) {
      const was = prev[String(a.id)] || {};
      const voice = a.__voice || was.voice || null;
      const style = a.__style || was.style || null;
      manifest[String(a.id)] = { slug, n: files.length, voice, style, files };
      complete++;
    }
  }
  const stamp = new Date().toISOString().slice(0, 16).replace("T", " ");
  const json = JSON.stringify(manifest, null, 0);
  const out =
    "/* 由 tools/gen-tts.mjs 生成 —— 预生成真人朗读清单，请勿手改；" +
    "重新生成会覆盖本文件 */\n" +
    "window.AUDIO_MANIFEST = " + json + ";\n" +
    "/* 生成时间：" + stamp + " · 完整篇数：" + complete + "/" + articlesAll.length + " */\n";
  fs.mkdirSync(AUDIO_DIR, { recursive: true });
  fs.writeFileSync(MANIFEST_FILE, out, "utf8");
  return { manifest, complete };
}

/* ---------- 试听模式 ---------- */

async function runSample(args, key) {
  const combos = [
    { voice: "Mia", style: "native" },
    { voice: "Chloe", style: "native" },
    { voice: "Milo", style: "native" },
    { voice: "Dean", style: "native" },
    { voice: "Mia", style: "calm" },
    { voice: "Mia", style: "story" },
    { voice: "Mia", style: "british" }
  ];
  const outDir = path.join(__dirname, "samples");
  fs.mkdirSync(outDir, { recursive: true });
  console.log("端点 " + endpointFor(key, args.base));
  console.log("试听模式：生成 " + combos.length + " 个候选到 tools\\samples\\");
  let okCount = 0;
  await pool(combos, args.concurrency, async (c) => {
    const file = path.join(outDir, "sample-" + c.voice.toLowerCase() + "-" + c.style + ".mp3");
    const t0 = Date.now();
    try {
      const buf = await synthesizeRetry(key, SAMPLE_TEXT, { voice: c.voice, style: c.style, base: args.base });
      fs.writeFileSync(file, buf);
      okCount++;
      console.log("  ✔ " + path.basename(file).padEnd(26) + kb(buf.length).padStart(6) + "  " + ((Date.now() - t0) / 1000).toFixed(1) + "s");
    } catch (e) {
      console.log("  ✖ " + c.voice + "/" + c.style + "：" + (e.message || e));
    }
  });
  console.log("\n去 tools\\samples\\ 试听，选定后用全量生成：");
  console.log("  node tools/gen-tts.mjs --voice Mia --style native");
  return okCount;
}

/* ---------- 主流程 ---------- */

async function runGen(args, key) {
  const all = loadArticles();
  const articles = all.filter((a) => args.article === null || a.id === args.article);
  if (!articles.length) die("没有匹配 --article " + args.article + " 的文章");
  const prev = readManifest();

  const jobs = [];
  for (const a of articles) {
    const slug = a.slug || "article-" + a.id;
    /* 轮换按"全局篇目序"取模：单篇补做（--article 3）也拿得到它该有的音色 */
    const pair = args.pairs[all.indexOf(a) % args.pairs.length];
    a.__voice = pair.voice;
    a.__style = pair.style;
    const was = prev[String(a.id)] || {};
    const voiceChanged = !!prev[String(a.id)] &&
      (was.voice !== pair.voice || (was.style || null) !== pair.style);
    a.body.forEach((p, i) => {
      const text = plain(p);
      if (!text) return;
      jobs.push({
        id: a.id,
        slug,
        idx: i + 1,
        text,
        voice: pair.voice,
        style: pair.style,
        stale: voiceChanged,      /* 换过音色：旧文件必须重做 */
        out: path.join(AUDIO_DIR, slug, "p" + (i + 1) + ".mp3")
      });
    });
  }

  const todo = jobs.filter((j) => args.force || j.stale || !fs.existsSync(j.out));
  const rotated = args.pairs.length > 1
    ? "音色按篇交替：" + args.pairs.map((p) => p.voice + "/" + p.style).join(" ↔ ")
      + "（" + articles.map((a) => "#" + a.id + "=" + a.__voice + "/" + a.__style).join("  ") + "）"
    : "音色 " + args.pairs[0].voice + " · 风格 " + args.pairs[0].style;
  console.log("文章 " + articles.length + " 篇 · 段落 " + jobs.length + " 段 · 需生成 " + todo.length + " 段（已有 " + (jobs.length - todo.length) + " 段）");
  console.log(rotated + " · 并发 " + args.concurrency + "\n");

  if (args.dryRun) {
    todo.slice(0, 5).forEach((j) => console.log("  [dry-run] #" + j.id + " p" + j.idx + " [" + j.voice + "/" + j.style + "] → " + path.relative(ROOT, j.out) + "\n            " + j.text.slice(0, 70) + "…"));
    if (todo.length > 5) console.log("  …… 另外 " + (todo.length - 5) + " 段");
    console.log("\n[dry-run] 未发送任何请求（实际调用次数：" + todo.length + "）");
    return 0;
  }

  if (!todo.length) console.log("全部已有文件，跳过合成（要重生成加 --force）");
  if (!key && todo.length) die("没有 API Key。\n  把 key 写进 " + path.relative(ROOT, KEY_FILE) + "，\n  或先 set MIMO_API_KEY=xxxx 再运行；\n  只想看计划可用 --dry-run");

  if (todo.length) {
    console.log("端点 " + endpointFor(key, args.base) + (args.base ? "（--base 覆盖）" : ""));
  }

  let done = 0, failed = 0;
  await pool(todo, args.concurrency, async (j) => {
    const t0 = Date.now();
    try {
      const buf = await synthesizeRetry(key, j.text, { voice: j.voice, style: j.style, base: args.base });
      if (buf.length < 200) throw new Error("音频过小（" + buf.length + " 字节）");
      fs.mkdirSync(path.dirname(j.out), { recursive: true });
      fs.writeFileSync(j.out, buf);
      done++;
      console.log(
        "  [" + String(done + failed).padStart(3) + "/" + todo.length + "] #" + j.id + " p" + j.idx +
        " ✓ " + kb(buf.length).padStart(6) + "  " + ((Date.now() - t0) / 1000).toFixed(1) + "s"
      );
    } catch (e) {
      failed++;
      console.log(
        "  [" + String(done + failed).padStart(3) + "/" + todo.length + "] #" + j.id + " p" + j.idx +
        " ✖ " + (e.message || e)
      );
      if (e && e.fatal) console.log("     → 鉴权/参数错误，中止后续请求");
      if (e && e.fatal) process.exit(1);
    }
  });

  /* 只有整篇齐全的文章才进清单：站内要么整篇真人、要么整篇浏览器朗读。
     清单按"全量文章"重建，本次没跑的篇目保留原条目不丢。 */
  const { manifest, complete } = buildManifest(all, prev);
  const totalBytes = Object.values(manifest).reduce(
    (s, e) => s + e.files.reduce((x, f) => x + (fs.existsSync(path.join(ROOT, f)) ? fs.statSync(path.join(ROOT, f)).size : 0), 0), 0);

  console.log("\n生成完成：成功 " + done + " · 失败 " + failed + " · 清单收录 " + complete + "/" + all.length + " 篇");
  console.log("清单已写入 " + path.relative(ROOT, MANIFEST_FILE) + "（累计完整 " + Object.keys(manifest).length + " 篇，音频共 " + kb(totalBytes) + "）");
  if (failed) console.log("有失败段落：补齐后重跑一次即可（已有文件会自动跳过）");
  return failed;
}

(async () => {
  const args = loadArgs(process.argv.slice(2));
  if (args.mode === "help") {
    console.log(fs.readFileSync(new URL(import.meta.url), "utf8").split("*/")[0].replace(/^\/\*|^\s{3}/gm, ""));
    process.exit(0);
  }
  const key = readApiKey();
  if (args.mode === "sample") {
    if (!key) die("试听也需要 API Key：把 key 写进 " + path.relative(ROOT, KEY_FILE) + " 或 set MIMO_API_KEY=xxxx");
    const n = await runSample(args, key);
    process.exit(n ? 0 : 1);
  }
  const failed = await runGen(args, key);
  process.exit(failed ? 1 : 0);
})().catch((e) => {
  console.error("✖ " + (e && (e.stack || e.message || e)));
  process.exit(1);
});
