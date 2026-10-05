/* ============================================================
   本地增强服务：静态站 + MiMo 词典 / 翻译 / 发音代理
   用法：
     node tools/serve.js            起在 http://127.0.0.1:8777
     node tools/serve.js 9000       指定端口
   为什么要它：
     · 划词发音要用你的 MiMo 音色 —— 浏览器不能持有 API key，
       只能由本机服务代发请求，key 永远只在 tools/.mimo-key 里；
     · 划词翻译 / 查词用 MiMo 模型，质量远好于免费机器翻译；
     · 不跑服务时站点功能不减：自动回退到免费接口与浏览器语音合成。
   接口（全部带 CORS，file:// 直接打开的页面也能调）：
     GET  /api/ping                  健康检查 + 能力位
     GET  /api/tts?text=&voice=&style=   真人朗读 mp3（磁盘缓存）
     POST /api/translate  {text,to}  整句翻译（磁盘缓存）
     GET  /api/define?word=          查词：音标/词性/中文/搭配/例句（磁盘缓存）
     GET  /api/word-audio?w=         预生成的课程词表发音（assets/audio/words/）
   缓存放在 build/cache/（已 gitignore），同一段文本只花一次 token。
   ============================================================ */
const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const ROOT = path.join(__dirname, "..");
const KEY_FILE = path.join(__dirname, ".mimo-key");
const CACHE = path.join(ROOT, "build", "cache");
const WORDS_DIR = path.join(ROOT, "assets", "audio", "words");
const PORT = +(process.argv[2] || 8777);

const API_URLS = {
  payg: "https://api.xiaomimimo.com/v1",
  tokenplan: "https://token-plan-cn.xiaomimimo.com/v1"
};
const TTS_MODEL = "mimo-v2.5-tts";
const TTS_VOICES = ["Mia", "Chloe", "Milo", "Dean"];
const TTS_STYLES = {
  native: "Clear, natural native American English, warm and friendly audiobook narration for English learners. Moderate pace, relaxed yet precise articulation, natural connected speech, thought groups and intonation. Calm, encouraging teaching tone. No exaggerated emotion.",
  calm: "Calm, gentle, unhurried native American English for beginner learners. Every word clearly enunciated, short natural pauses between sense groups, patient teacher tone, steady pace.",
  british: "Clear, natural British English (RP), warm and friendly audiobook narration for English learners. Moderate pace, precise articulation, natural connected speech and intonation. Calm, encouraging teaching tone. No exaggerated emotion."
};

const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg", ".ico": "image/x-icon", ".md": "text/plain; charset=utf-8"
};

/* ---------- key 与端点 ---------- */
function readKey() {
  if (process.env.MIMO_API_KEY) return process.env.MIMO_API_KEY.trim();
  try {
    return fs.readFileSync(KEY_FILE, "utf8").trim();
  } catch (e) {
    return "";
  }
}
function apiBase(key) {
  if (process.env.MIMO_BASE_URL) return String(process.env.MIMO_BASE_URL).replace(/\/+$/, "");
  return /^t{1,2}p-/i.test(key) ? API_URLS.tokenplan : API_URLS.payg;
}

/* ---------- 缓存 ---------- */
function cacheFile(kind, key, ext) {
  const dir = path.join(CACHE, kind);
  fs.mkdirSync(dir, { recursive: true });
  return path.join(dir, crypto.createHash("sha1").update(key).digest("hex").slice(0, 24) + ext);
}
function cacheGet(kind, key, ext) {
  const f = cacheFile(kind, key, ext);
  if (!fs.existsSync(f)) return null;
  return { file: f, buf: fs.readFileSync(f) };
}
function cachePut(kind, key, ext, buf) {
  fs.writeFileSync(cacheFile(kind, key, ext), buf);
}

/* ---------- MiMo 调用 ---------- */
async function mimoChat(key, messages, { model, temperature = 0.2, timeoutMs = 20000 }) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(apiBase(key) + "/chat/completions", {
      method: "POST",
      signal: ctrl.signal,
      headers: { "Content-Type": "application/json", "api-key": key },
      body: JSON.stringify({ model, messages, temperature })
    });
    const text = await res.text();
    if (!res.ok) {
      const e = new Error("HTTP " + res.status + " " + text.slice(0, 160));
      e.status = res.status;
      throw e;
    }
    const data = JSON.parse(text);
    return (data.choices && data.choices[0] && data.choices[0].message && data.choices[0].message.content) || "";
  } finally {
    clearTimeout(timer);
  }
}

async function mimoTts(key, text, { voice = "Chloe", style = "native", timeoutMs = 60000 }) {
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(apiBase(key) + "/chat/completions", {
      method: "POST",
      signal: ctrl.signal,
      headers: { "Content-Type": "application/json", "api-key": key },
      body: JSON.stringify({
        model: TTS_MODEL,
        messages: [
          { role: "user", content: TTS_STYLES[style] || TTS_STYLES.native },
          { role: "assistant", content: text }
        ],
        audio: { format: "mp3", voice }
      })
    });
    const bodyText = await res.text();
    if (!res.ok) {
      const e = new Error("HTTP " + res.status + " " + bodyText.slice(0, 160));
      e.status = res.status;
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

/* 聊天模型：启动时问一次 /models，挑一个非 TTS 的模型（可用 MIMO_CHAT_MODEL 指定） */
let chatModel = process.env.MIMO_CHAT_MODEL || "";
async function resolveChatModel(key) {
  if (chatModel) return chatModel;
  try {
    const ctrl = new AbortController();
    const t = setTimeout(() => ctrl.abort(), 15000);
    const res = await fetch(apiBase(key) + "/models", {
      headers: { "api-key": key }, signal: ctrl.signal
    });
    clearTimeout(t);
    const data = await res.json();
    const ids = ((data && data.data) || []).map((m) => m.id).filter((i) => !/tts|embed|audio|asr/i.test(i));
    /* 浮层查词/翻译要"快"：优先 flash（1–2s），其次 pro（更准但 7–25s），
       需要更高质量可设 MIMO_CHAT_MODEL=mimo-v2.5-pro 覆盖 */
    const pick = ids.find((i) => /mimo/i.test(i) && /flash/i.test(i))
      || ids.find((i) => /mimo/i.test(i) && /pro/i.test(i))
      || ids.find((i) => /mimo/i.test(i))
      || ids[0];
    chatModel = pick || "mimo-v2.6-pro";
    console.log("聊天模型：" + chatModel + "（可用：" + ids.slice(0, 8).join(", ") + "）");
  } catch (e) {
    chatModel = "mimo-v2.6-pro";
    console.log("取模型列表失败（" + e.message + "），默认用 " + chatModel);
  }
  return chatModel;
}

/* ---------- 提示词 ---------- */
function dictPrompt(word) {
  return [
    { role: "system", content: "你是英语学习词典。只输出 JSON，不要任何解释、不要代码块。字段：w（词或短语原形）、ph（音标，用 / / 包住，没有则空串）、pos（词性如 n. / v. / adj.，短语则空串）、cn（中文释义，简明）、col（常见搭配 2–4 条，格式严格为「搭配 — 中文意思」，多条用「；」分隔）、ex（一句地道英文例句）。释义面向中国英语学习者。" },
    { role: "user", content: word }
  ];
}
function translatePrompt(text, to) {
  const dir = to === "en" ? "把中文翻成自然地道的英文" : "把英文翻成自然流畅的现代汉语";
  return [
    { role: "system", content: "你是英汉翻译。" + dir + "。只输出译文本身，不要解释、不要引号、不要原文。保留原文的语气与句子节奏，不要逐词硬译。" },
    { role: "user", content: text }
  ];
}
function parseJsonLoose(s) {
  const m = /[\{][\s\S]*[\}]/.exec(String(s));
  if (!m) return null;
  try {
    return JSON.parse(m[0]);
  } catch (e) {
    try {
      return JSON.parse(m[0].replace(/,\s*([}\]])/g, "$1"));
    } catch (e2) {
      return null;
    }
  }
}

/* ---------- HTTP ---------- */
function cors(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}
function json(res, code, obj) {
  cors(res);
  res.writeHead(code, { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store" });
  res.end(JSON.stringify(obj));
}
function readBody(req) {
  return new Promise((resolve) => {
    let n = 0;
    const chunks = [];
    req.on("data", (c) => {
      n += c.length;
      if (n > 200000) { req.destroy(); resolve(""); return; }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", () => resolve(""));
  });
}

async function handleApi(req, res, u) {
  const key = readKey();
  if (u.pathname === "/api/ping") {
    return json(res, 200, {
      ok: true, hasKey: !!key, tts: !!key, chat: !!key,
      voices: TTS_VOICES, wordsAudio: fs.existsSync(path.join(WORDS_DIR, "manifest.js"))
    });
  }

  if (u.pathname === "/api/tts") {
    const text = (u.searchParams.get("text") || "").trim();
    const voice = TTS_VOICES.includes(u.searchParams.get("voice")) ? u.searchParams.get("voice") : "Chloe";
    const style = TTS_STYLES[u.searchParams.get("style")] ? u.searchParams.get("style") : "native";
    if (!text) return json(res, 400, { ok: false, error: "missing text" });
    if (text.length > 1200) return json(res, 400, { ok: false, error: "text too long" });
    if (!key) return json(res, 503, { ok: false, error: "no api key（tools/.mimo-key）" });
    const ck = voice + "|" + style + "|" + text;
    const hit = cacheGet("tts", ck, ".mp3");
    if (hit) {
      cors(res);
      res.writeHead(200, { "Content-Type": "audio/mpeg", "X-Cache": "hit" });
      return res.end(hit.buf);
    }
    try {
      const buf = await mimoTts(key, text, { voice, style });
      cachePut("tts", ck, ".mp3", buf);
      cors(res);
      res.writeHead(200, { "Content-Type": "audio/mpeg", "X-Cache": "miss" });
      return res.end(buf);
    } catch (e) {
      return json(res, 502, { ok: false, error: String(e.message || e) });
    }
  }

  if (u.pathname === "/api/translate") {
    const body = req.method === "POST" ? JSON.parse((await readBody(req)) || "{}") : {};
    const text = (body.text || u.searchParams.get("text") || "").trim();
    const to = body.to === "en" ? "en" : "zh";
    if (!text) return json(res, 400, { ok: false, error: "missing text" });
    if (text.length > 2000) return json(res, 400, { ok: false, error: "text too long" });
    const ck = to + "|" + text;
    const hit = cacheGet("translate", ck, ".json");
    if (hit) return json(res, 200, { ok: true, text: JSON.parse(hit.buf.toString("utf8")).text, cached: true });
    if (!key) return json(res, 503, { ok: false, error: "no api key（tools/.mimo-key）" });
    try {
      const model = await resolveChatModel(key);
      const out = (await mimoChat(key, translatePrompt(text, to), { model })).trim();
      if (!out) return json(res, 502, { ok: false, error: "empty translation" });
      cachePut("translate", ck, ".json", Buffer.from(JSON.stringify({ text: out })));
      return json(res, 200, { ok: true, text: out, model, cached: false });
    } catch (e) {
      return json(res, 502, { ok: false, error: String(e.message || e) });
    }
  }

  if (u.pathname === "/api/define") {
    const word = (u.searchParams.get("word") || "").trim();
    if (!word) return json(res, 400, { ok: false, error: "missing word" });
    if (word.length > 60) return json(res, 400, { ok: false, error: "word too long" });
    const hit = cacheGet("define", word, ".json");
    if (hit) return json(res, 200, { ok: true, entry: JSON.parse(hit.buf.toString("utf8")), cached: true });
    if (!key) return json(res, 503, { ok: false, error: "no api key（tools/.mimo-key）" });
    try {
      const model = await resolveChatModel(key);
      const out = await mimoChat(key, dictPrompt(word), { model });
      const entry = parseJsonLoose(out) || { w: word, cn: (out || "").slice(0, 120), ph: "", pos: "", col: "", ex: "" };
      entry.w = entry.w || word;
      /* 与课程词表格式对齐：音标包 / /，搭配写成「搭配 — 中文意思」 */
      if (entry.ph) entry.ph = "/" + String(entry.ph).replace(/^\/+|\/+$/g, "") + "/";
      if (entry.col) {
        entry.col = String(entry.col).split(/[；;]/).map((s) => s.trim()).filter(Boolean).map((s) => {
          s = s.replace(/^[—\-–]+\s*/, "");            /* 去掉开头的破折号 */
          if (!/[—\-–]/.test(s)) {                     /* 没有分隔符则在首个中文前补一条 */
            const m = /[\u4e00-\u9fff]/.exec(s);
            if (m) s = s.slice(0, m.index).trim() + " — " + s.slice(m.index).trim();
          }
          return s;
        }).join("；");
      }
      cachePut("define", word, ".json", Buffer.from(JSON.stringify(entry)));
      return json(res, 200, { ok: true, entry, model, cached: false });
    } catch (e) {
      return json(res, 502, { ok: false, error: String(e.message || e) });
    }
  }

  if (u.pathname === "/api/word-audio") {
    const w = (u.searchParams.get("w") || "").trim();
    const f = path.join(WORDS_DIR, w + ".mp3");
    if (!w || !f.startsWith(WORDS_DIR) || !fs.existsSync(f)) {
      return json(res, 404, { ok: false, error: "not pre-generated" });
    }
    cors(res);
    res.writeHead(200, { "Content-Type": "audio/mpeg", "X-Cache": "hit" });
    return res.end(fs.readFileSync(f));
  }

  return json(res, 404, { ok: false, error: "unknown api" });
}

http.createServer(async (req, res) => {
  const u = new URL(req.url, "http://127.0.0.1");
  if (req.method === "OPTIONS") {
    cors(res);
    res.writeHead(204);
    return res.end();
  }
  if (u.pathname.startsWith("/api/")) {
    try {
      await handleApi(req, res, u);
    } catch (e) {
      json(res, 500, { ok: false, error: String(e.message || e) });
    }
    return;
  }

  /* 静态文件 */
  let p = decodeURIComponent(u.pathname);
  if (p === "/") p = "/index.html";
  const file = path.join(ROOT, p.replace(/\//g, path.sep));
  if (!file.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("forbidden");
  }
  fs.readFile(file, (err, buf) => {
    if (err) {
      res.writeHead(404);
      return res.end("not found");
    }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(buf);
  });
}).listen(PORT, "127.0.0.1", () => {
  const key = readKey();
  console.log("本地增强服务：http://127.0.0.1:" + PORT);
  console.log("  MiMo key：" + (key ? "已读取（" + key.slice(0, 3) + "…）" : "未配置（tools/.mimo-key 或 MIMO_API_KEY）"));
  console.log("  能力：/api/ping /api/tts /api/translate /api/define /api/word-audio");
  console.log("  缓存：" + path.relative(ROOT, CACHE));
});
