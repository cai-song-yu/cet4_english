/* ============================================================
   划词查词 / 划词翻译浮层 · jsdom 冒烟测试
   运行：node tools/smoke.js
   全程无网络、不依赖本地服务：fetch / speechSynthesis / Audio 全部用假实现注入。
   覆盖：
     ① 三种模式判定（word / phrase / sentence）
     ② word 模式本地词库命中即时显示（零网络请求）
     ③ sentence 模式显示「本段译文」
     ④ 服务可用时走 /api/translate 与 /api/tts
     ⑤ 服务不可用时回退 MyMemory 与 speechSynthesis
     ⑥ 选区 > 300 字符不弹浮层
     ⑦ 词表发音命中时用 WORD_AUDIO（且不再打 /api/tts）
     ⑧ 生词本 ＋存 / 移出 不回归
     ⑨ 课文朗读按钮不回归
   ============================================================ */
"use strict";

const fs = require("fs");
const path = require("path");
const { JSDOM, VirtualConsole } = require("jsdom");

const ROOT = path.join(__dirname, "..");
const SRC_APP = fs.readFileSync(path.join(ROOT, "assets", "js", "app.js"), "utf8");
const SRC_ARTICLES = fs.readFileSync(path.join(ROOT, "assets", "js", "articles.js"), "utf8");
const SRC_HTML = fs
  .readFileSync(path.join(ROOT, "index.html"), "utf8")
  .replace(/<script[\s\S]*?<\/script>\s*/g, "");

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* 与 app.js 的 esc() / norm() 保持一致 */
function esc(s) {
  return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function norm(s) {
  return String(s)
    .replace(/\s+/g, " ")
    .replace(/^[\s"'“”‘’.,;:!?()…\[\]【】]+|[\s"'“”‘’.,;:!?()…\[\]【】]+$/g, "")
    .toLowerCase()
    .trim();
}

function assert(cond, msg) {
  if (!cond) throw new Error(msg);
}

/* ---------- 假 fetch 的响应体 ---------- */

function jsonRes(obj) {
  return {
    ok: true,
    status: 200,
    headers: { get: (n) => (/content-type/i.test(n) ? "application/json" : null) },
    json: () => Promise.resolve(obj),
    blob: () => Promise.resolve({ size: 8 })
  };
}

function audioRes() {
  return {
    ok: true,
    status: 200,
    headers: { get: (n) => (/content-type/i.test(n) ? "audio/mpeg" : null) },
    json: () => Promise.resolve({}),
    blob: () => Promise.resolve({ size: 2048 })
  };
}

/* 本地服务全通：ping / define / translate / tts */
function serviceFetch() {
  return function (url) {
    if (/\/api\/ping/.test(url)) {
      return Promise.resolve(jsonRes({ ok: true, hasKey: true, tts: true, chat: true, voices: ["Mia", "Chloe", "Milo", "Dean"], wordsAudio: false }));
    }
    if (/\/api\/define/.test(url)) {
      return Promise.resolve(jsonRes({ ok: true, entry: { w: "x", ph: "/x/", pos: "n.", cn: "服务词库释义", col: "搭配", ex: "例句" }, cached: false }));
    }
    if (/\/api\/translate/.test(url)) {
      return Promise.resolve(jsonRes({ ok: true, text: "这是模型翻译", model: "mimo-v2.5", cached: false }));
    }
    if (/\/api\/tts/.test(url)) return Promise.resolve(audioRes());
    return Promise.reject(new Error("no route: " + url));
  };
}

/* 本地服务没跑、外网只剩 MyMemory */
function offlineFetch(mmText) {
  return function (url) {
    if (/mymemory/.test(url)) return Promise.resolve(jsonRes({ responseData: { translatedText: mmText } }));
    return Promise.reject(new Error("offline: " + url));
  };
}

/* ---------- 环境启动：真 index.html 骨架 + 真 articles.js + 真 app.js ---------- */

function boot(opts) {
  opts = opts || {};
  const vc = new VirtualConsole();
  vc.on("jsdomError", () => {});
  vc.on("error", () => {});
  vc.on("warn", () => {});

  const dom = new JSDOM(SRC_HTML, {
    url: "https://reader.local/",
    runScripts: "outside-only",
    pretendToBeVisual: true,
    virtualConsole: vc
  });
  const w = dom.window;

  w.scrollTo = function () {};
  w.Element.prototype.scrollIntoView = w.Element.prototype.scrollIntoView || function () {};
  if (!w.matchMedia) {
    w.matchMedia = function () {
      return { matches: false, media: "", addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} };
    };
  }
  let blobN = 0;
  w.URL.createObjectURL = function () { return "blob:fake-" + ++blobN; };
  w.URL.revokeObjectURL = function () {};

  const calls = { fetch: [], audio: [], speak: [], cancel: 0 };

  /* 假 <audio>：记录 play() 过的地址 */
  w.Audio = function (url) {
    const el = {
      src: String(url),
      playbackRate: 1,
      onended: null,
      onerror: null,
      pause() {},
      play() {
        calls.audio.push(el);
        return opts.audioPlayReject ? Promise.reject(new Error("blocked")) : Promise.resolve();
      }
    };
    return el;
  };

  /* 假 speechSynthesis */
  function FakeUtter(t) { this.text = t; }
  w.SpeechSynthesisUtterance = FakeUtter;
  w.speechSynthesis = {
    speaking: false,
    pending: false,
    paused: false,
    getVoices() { return [{ name: "Fake Voice", lang: "en-US", localService: true }]; },
    speak(u) { calls.speak.push(u); this.speaking = true; },
    cancel() { calls.cancel++; this.speaking = false; this.pending = false; this.paused = false; },
    pause() { this.paused = true; },
    resume() { this.paused = false; }
  };

  /* 假 fetch：记录全部请求 */
  w.fetch = function (url, init) {
    const u = String(url);
    calls.fetch.push({ url: u, init: init || null });
    return (opts.fetch || offlineFetch("兜底译文"))(u, init);
  };

  w.eval(SRC_ARTICLES);
  if (opts.wordAudio) w.WORD_AUDIO = opts.wordAudio;
  w.eval(SRC_APP);

  const doc = w.document;

  return {
    w,
    doc,
    calls,
    close() { try { w.close(); } catch (e) {} },

    async go(hash) {
      w.location.hash = hash;
      w.dispatchEvent(new w.Event("hashchange"));
      await sleep(20);   /* 让 jsdom 自己那发 hashchange 也落定 */
    },

    addP(id, text) {
      const p = doc.createElement("p");
      p.id = id;
      p.textContent = text;
      doc.getElementById("view").appendChild(p);
      return p;
    },

    selectText(el, text) {
      const walker = doc.createTreeWalker(el, w.NodeFilter.SHOW_TEXT);
      let n;
      while ((n = walker.nextNode())) {
        const i = n.data.indexOf(text);
        if (i >= 0) {
          const r = doc.createRange();
          r.setStart(n, i);
          r.setEnd(n, i + text.length);
          const sel = w.getSelection();
          sel.removeAllRanges();
          sel.addRange(r);
          return true;
        }
      }
      return false;
    },

    selectAll(el) {
      const r = doc.createRange();
      r.selectNodeContents(el);
      const sel = w.getSelection();
      sel.removeAllRanges();
      sel.addRange(r);
    },

    mouseup() {
      doc.dispatchEvent(new w.MouseEvent("mouseup", { bubbles: true, view: w }));
    },

    pop() { return doc.querySelector(".word-pop"); },
    popHtml() {
      const p = this.pop();
      return p ? p.innerHTML : "";
    },
    popMode() {
      const p = this.pop();
      return p ? p.getAttribute("data-mode") : null;
    },
    visible() {
      const p = this.pop();
      return !!p && !p.hasAttribute("hidden");
    },
    fetches(re) {
      return calls.fetch.filter((f) => re.test(f.url));
    },
    firstArticle() {
      return w.ARTICLES[0];
    },
    /* 词汇表里第一个干净的单词 */
    pickWord() {
      const v = this.firstArticle().vocabulary.find((x) => /^[A-Za-z-]+$/.test(x.w));
      if (!v) throw new Error("文章里没有可用的单词词条");
      return v;
    }
  };
}

/* ---------- 用例 ---------- */

const tests = [];

/* ① 三种模式判定 */
tests.push({
  name: "① 三种模式判定（1 词 / 2–6 词 / >6 词 或 .?! 结尾）",
  async run() {
    const h = boot({ fetch: serviceFetch() });
    try {
      const v = h.pickWord();
      await h.go("#/" + h.firstArticle().id);

      const pWord = h.addP("t-word", v.w);
      h.selectText(pWord, v.w);
      h.mouseup();
      await sleep(20);
      assert(h.visible(), "单词选区应弹出浮层");
      assert(h.popMode() === "word", "1 个词应判为 word，实际：" + h.popMode());
      assert(h.popHtml().includes("wp-nb"), "word 模式应有 ＋存 按钮");
      assert(!h.popHtml().includes("wp-tr"), "word 模式不应出现「整句翻译」行");

      const pPhrase = h.addP("t-phrase", "turn down the offer");
      h.selectText(pPhrase, "turn down the offer");
      h.mouseup();
      await sleep(20);
      assert(h.popMode() === "phrase", "4 个词应判为 phrase，实际：" + h.popMode());
      assert(h.popHtml().includes("wp-nb"), "phrase 模式应有 ＋存 按钮");
      assert(h.popHtml().includes("整句翻译"), "phrase 模式应有「整句翻译」行");

      const pSent = h.addP("t-sent", "one two three four five six seven");
      h.selectText(pSent, "one two three four five six seven");
      h.mouseup();
      await sleep(20);
      assert(h.popMode() === "sentence", "7 个词应判为 sentence，实际：" + h.popMode());

      const pDot = h.addP("t-dot", "Hello there my friend.");
      h.selectText(pDot, "Hello there my friend.");
      h.mouseup();
      await sleep(20);
      assert(h.popMode() === "sentence", "以 . 结尾应判为 sentence，实际：" + h.popMode());
      assert(!h.popHtml().includes("wp-nb"), "sentence 模式不应显示存按钮");
    } finally {
      h.close();
    }
  }
});

/* ② word 模式本地词库命中即时显示 */
tests.push({
  name: "② word 本地词库命中即时显示（零网络请求）",
  async run() {
    const h = boot({ fetch: offlineFetch("不应被用到") });   /* 断网也要能查 */
    try {
      const v = h.pickWord();
      await h.go("#/" + h.firstArticle().id);
      const cell = h.doc.querySelector("#view .t-vocab .word");
      assert(cell, "词汇表应渲染出来");
      assert(h.selectText(cell, v.w), "应能在词汇表里选中 " + v.w);
      h.mouseup();
      await sleep(20);
      assert(h.visible(), "本地命中应立刻弹出浮层");
      assert(h.popMode() === "word", "应为 word 模式");
      const html = h.popHtml();
      assert(html.includes(esc(v.cn)), "应显示本地词库的中文释义：" + esc(v.cn));
      const from = String(h.firstArticle().id).padStart(3, "0") + " · 核心词汇";
      assert(html.includes(esc(from)), "来源行应写明篇目与出处：" + from);
      assert(!h.popHtml().includes("查询中"), "本地命中不应显示「查询中」");
      await sleep(30);
      assert(h.fetches(/api\/define/).length === 0, "本地命中不该再打 /api/define");
      assert(h.fetches(/dictionaryapi|youdao/).length === 0, "本地命中不该走免费词典");
    } finally {
      h.close();
    }
  }
});

/* ③ sentence 模式显示「本段译文」 */
tests.push({
  name: "③ sentence 模式显示「本段译文」（离线、按段落序号映射 translation）",
  async run() {
    const h = boot({ fetch: serviceFetch() });
    try {
      const a = h.firstArticle();
      await h.go("#/" + a.id);
      const p0 = h.doc.querySelector("#articleBody p[data-pi='0']");
      assert(p0, "正文第一段应带 data-pi");
      h.selectAll(p0);
      h.mouseup();
      await sleep(20);
      assert(h.visible(), "整段选区应弹出浮层");
      assert(h.popMode() === "sentence", "整段应判为 sentence，实际：" + h.popMode());
      const html = h.popHtml();
      assert(html.includes("本段译文"), "应有「本段译文」行");
      assert(html.includes(esc(a.translation[0])), "本段译文应等于 translation[0]");
      assert(html.includes("本篇逐段译文"), "来源行应写明本篇逐段译文");

      /* 第二段也应映射到 translation[1] */
      const p1 = h.doc.querySelector("#articleBody p[data-pi='1']");
      if (p1 && a.translation[1]) {
        h.selectAll(p1);
        h.mouseup();
        await sleep(20);
        assert(h.popHtml().includes(esc(a.translation[1])), "第二段应映射到 translation[1]");
      }
    } finally {
      h.close();
    }
  }
});

/* ④ 服务可用：/api/translate 与 /api/tts */
tests.push({
  name: "④ 服务可用时走 /api/translate（to=zh / to=en）与 /api/tts（MiMo 真人音色）",
  async run() {
    const h = boot({ fetch: serviceFetch() });
    try {
      const a = h.firstArticle();
      await h.go("#/" + a.id);

      /* 英文整句 → /api/translate to=zh */
      const p0 = h.doc.querySelector("#articleBody p[data-pi='0']");
      h.selectAll(p0);
      h.mouseup();
      await sleep(30);
      const zhCalls = h.fetches(/\/api\/translate/).map((f) => JSON.parse(f.init.body));
      assert(zhCalls.some((b) => b.to === "zh"), "英文选区应请求 to=zh");
      assert(zhCalls.some((b) => b.to === "zh" && b.text === p0.textContent.replace(/\s+/g, " ").trim()), "应把整句原文送去翻译");
      assert(h.popHtml().includes("这是模型翻译"), "应显示模型翻译结果");
      assert(h.popHtml().includes("本地模型翻译"), "来源行应写明本地模型翻译");

      /* 中文选区 → to=en */
      const pz = h.addP("t-zh", "在说不之前，先问问自己可能会发现什么。");
      h.selectText(pz, pz.textContent);
      h.mouseup();
      await sleep(30);
      const enCalls = h.fetches(/\/api\/translate/).map((f) => JSON.parse(f.init.body));
      assert(enCalls.some((b) => b.to === "en"), "中文选区应请求 to=en");

      /* 发音 → /api/tts（voice=Chloe&style=native），来源行标注 MiMo 真人音色 */
      const say = h.doc.querySelector(".word-pop .wp-say");
      assert(say, "浮层应有 🔊 按钮");
      say.dispatchEvent(new h.w.MouseEvent("click", { bubbles: true }));
      await sleep(40);
      const ttsCalls = h.fetches(/\/api\/tts/);
      assert(ttsCalls.length === 1, "应打一次 /api/tts");
      assert(/voice=Chloe/.test(ttsCalls[0].url) && /style=native/.test(ttsCalls[0].url), "TTS 参数应为 Chloe / native：" + ttsCalls[0].url);
      assert(h.calls.audio.some((el) => String(el.src).indexOf("blob:") === 0), "应把 mp3 交给原生 <audio> 播放");
      assert(h.popHtml().includes("发音：MiMo 真人音色"), "来源行应写明发音通道");
      assert(h.calls.speak.length === 0, "有真人音色时不该用浏览器朗读");

      /* 同一句再划一次：翻译命中 reader-tr-cache，不重复请求 */
      const before = h.fetches(/\/api\/translate/).length;
      h.selectAll(p0);
      h.mouseup();
      await sleep(30);
      assert(h.fetches(/\/api\/translate/).length === before, "同一句应命中翻译缓存，不再打 /api/translate");
      assert(h.popHtml().includes("翻译缓存"), "来源行应写明翻译缓存");
    } finally {
      h.close();
    }
  }
});

/* ⑤ 服务不可用：回退 MyMemory 与 speechSynthesis */
tests.push({
  name: "⑤ 服务不可用时回退 MyMemory 翻译与 speechSynthesis 发音",
  async run() {
    const h = boot({ fetch: offlineFetch("MyMemory整句译文") });
    try {
      const a = h.firstArticle();
      await h.go("#/" + a.id);
      const p0 = h.doc.querySelector("#articleBody p[data-pi='0']");
      const text = p0.textContent.replace(/\s+/g, " ").trim();
      h.selectAll(p0);
      h.mouseup();
      await sleep(40);
      assert(h.visible(), "断网也应弹出浮层");
      const html = h.popHtml();
      assert(html.includes("本段译文"), "断网时本段译文照样显示");
      assert(html.includes("MyMemory整句译文"), "应回退到 MyMemory 翻译");
      assert(html.includes("MyMemory 机器翻译"), "来源行应写明 MyMemory");
      assert(html.includes("本地服务未运行"), "应显示本地服务未运行的轻提示");
      assert(h.fetches(/\/api\/translate/).length === 0, "服务不可用时不该再打 /api/translate");

      /* 发音：词表 / 服务 / 词典都没有 → 浏览器朗读 */
      const say = h.doc.querySelector(".word-pop .wp-say");
      say.dispatchEvent(new h.w.MouseEvent("click", { bubbles: true }));
      await sleep(300);
      assert(h.calls.speak.some((u) => u.text === text), "应退回 speechSynthesis 朗读选中内容");
      assert(h.popHtml().includes("发音：浏览器朗读"), "来源行应写明浏览器朗读");
      assert(h.calls.audio.length === 0, "没有 mp3 可播时不该造 <audio>");
    } finally {
      h.close();
    }
  }
});

/* ⑥ >300 字符不弹浮层 */
tests.push({
  name: "⑥ 选区 > 300 字符不弹浮层，≤ 300 正常弹",
  async run() {
    const h = boot({ fetch: serviceFetch() });
    try {
      await h.go("#/" + h.firstArticle().id);

      const pLong = h.addP("t-long", "a".repeat(301));
      h.selectText(pLong, pLong.textContent);
      h.mouseup();
      await sleep(20);
      assert(!h.visible(), "301 字符不应弹浮层");

      const pOk = h.addP("t-ok", "a".repeat(300));
      h.selectText(pOk, pOk.textContent);
      h.mouseup();
      await sleep(20);
      assert(h.visible(), "300 字符应当照常弹浮层");
    } finally {
      h.close();
    }
  }
});

/* ⑦ 词表发音 WORD_AUDIO */
tests.push({
  name: "⑦ 词表发音命中时用 WORD_AUDIO（优先级高于 /api/tts）",
  async run() {
    const h = boot({ fetch: serviceFetch() });
    try {
      const v = h.pickWord();
      const key = norm(v.w);
      /* 清单是懒读的：随时可注入 */
      h.w.WORD_AUDIO = { [key]: "assets/audio/words/" + key + ".mp3" };
      await h.go("#/" + h.firstArticle().id);
      const cell = h.doc.querySelector("#view .t-vocab .word");
      assert(h.selectText(cell, v.w), "应能选中 " + v.w);
      h.mouseup();
      await sleep(20);
      const say = h.doc.querySelector(".word-pop .wp-say");
      say.dispatchEvent(new h.w.MouseEvent("click", { bubbles: true }));
      await sleep(40);
      assert(h.calls.audio.some((el) => el.src === "assets/audio/words/" + key + ".mp3"), "应播放词表 mp3：" + "assets/audio/words/" + key + ".mp3");
      assert(h.fetches(/\/api\/tts/).length === 0, "词表命中时不该打 /api/tts");
      assert(h.calls.speak.length === 0, "词表命中时不该用浏览器朗读");
      assert(h.popHtml().includes("发音：词表真人发音"), "来源行应写明词表真人发音");

      /* 再点一次 = 停止（按钮变回 🔊 读） */
      const say2 = h.doc.querySelector(".word-pop .wp-say");
      say2.dispatchEvent(new h.w.MouseEvent("click", { bubbles: true }));
      await sleep(20);
      assert(h.doc.querySelector(".word-pop .wp-say").textContent.includes("🔊"), "再点一次应停止并回到 🔊 读");
    } finally {
      h.close();
    }
  }
});

/* ⑧ 生词本按钮 */
tests.push({
  name: "⑧ 生词本 ＋存 / 移出不回归",
  async run() {
    const h = boot({ fetch: serviceFetch() });
    try {
      const v = h.pickWord();
      await h.go("#/" + h.firstArticle().id);
      const cell = h.doc.querySelector("#view .t-vocab .word");
      h.selectText(cell, v.w);
      h.mouseup();
      await sleep(20);
      const nb = h.doc.querySelector(".word-pop .wp-nb");
      assert(nb, "word 模式应有生词本按钮");
      assert(nb.textContent.includes("＋ 存"), "未收录时应显示 ＋ 存");

      nb.dispatchEvent(new h.w.MouseEvent("click", { bubbles: true }));
      await sleep(10);
      let saved = JSON.parse(h.w.localStorage.getItem("reader-notebook") || "[]");
      assert(saved.length === 1 && saved[0].w === v.w, "＋存 后生词本应有这个词");
      assert(h.doc.querySelector(".word-pop .wp-nb").textContent.includes("✓ 已存"), "按钮应变成 ✓ 已存");
      assert((h.doc.getElementById("toWords") || {}).textContent?.includes("（1）"), "生词本徽标应显示计数");

      h.doc.querySelector(".word-pop .wp-nb").dispatchEvent(new h.w.MouseEvent("click", { bubbles: true }));
      await sleep(10);
      saved = JSON.parse(h.w.localStorage.getItem("reader-notebook") || "[]");
      assert(saved.length === 0, "再点一次应移出");
      assert(h.doc.querySelector(".word-pop .wp-nb").textContent.includes("＋ 存"), "按钮应回到 ＋ 存");
    } finally {
      h.close();
    }
  }
});

/* ⑨ 课文朗读按钮 */
tests.push({
  name: "⑨ 课文朗读按钮（▶ / ⏹）不回归",
  async run() {
    const h = boot({ fetch: offlineFetch("x") });
    try {
      await h.go("#/" + h.firstArticle().id);
      const play = h.doc.getElementById("ttsPlay");
      const stop = h.doc.getElementById("ttsStop");
      assert(play && stop, "顶栏朗读按钮应存在");
      play.dispatchEvent(new h.w.MouseEvent("click", { bubbles: true }));
      await sleep(200);
      assert(h.calls.speak.length >= 1, "点 ▶ 应开始逐句朗读正文");
      assert(play.disabled, "朗读中 ▶ 应置灰");
      assert(!stop.disabled, "朗读中 ⏹ 应可用");

      stop.dispatchEvent(new h.w.MouseEvent("click", { bubbles: true }));
      await sleep(50);
      assert(!play.disabled, "停止后 ▶ 应恢复可点");
      assert(h.calls.cancel > 0, "停止应 cancel 语音合成");
    } finally {
      h.close();
    }
  }
});

/* ---------- 跑 ---------- */

(async function main() {
  let pass = 0;
  const failed = [];
  for (const t of tests) {
    try {
      await t.run();
      pass++;
      console.log("✓ " + t.name);
    } catch (e) {
      failed.push(t);
      console.log("✗ " + t.name);
      console.log("    " + (e && e.message ? e.message : e));
    }
  }
  console.log("\n" + pass + "/" + tests.length + " 通过" + (failed.length ? "，失败 " + failed.length + " 条" : "，全部通过"));
  process.exit(failed.length ? 1 : 0);
})();
