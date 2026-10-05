/* ============================================================
   articles.js 结构与质量校验器
   用法：
     node tools/validate.js            校验 assets/js/articles.js 全部文章
     node tools/validate.js part.json  校验单篇数据文件（生成中间产物）
   规则来源：course/style-guide.md + course/roadmap.md + 现有 1–10 篇实测基线
   策略：第 1–10 篇是已验收的存量数据，跨篇引用类问题降级为「legacy」警告；
        第 11 篇起全部规则严格生效。
   ============================================================ */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const ROOT = path.join(__dirname, "..");

/* ---------- 分阶段硬性区间（生成时必须遵守） ---------- */
const STAGES = [
  {
    test: (id) => id <= 10,
    name: "阶段一 · 基础", range: "第 1–10 篇",
    words: [195, 270], vocab: [8, 10], density: [1.5, 3.0],
    marks: { "w-cet4": [7, 9], "w-phrase": [3, 4], "w-writing": [1, 2], "w-sentence": [1, 1], "w-synonym": [0, 1], "w-rev": [0, 10] },
    sent: [1, 1], writeWords: [50, 60], stdTime: [25, 35]
  },
  {
    test: (id) => id <= 20,
    name: "阶段二 · 基础过渡", range: "第 11–20 篇",
    words: [250, 325], vocab: [10, 14], density: [3.0, 4.5],
    marks: { "w-cet4": [9, 12], "w-phrase": [3, 5], "w-writing": [2, 3], "w-sentence": [1, 2], "w-synonym": [0, 1], "w-rev": [4, 8] },
    sent: [2, 3], writeWords: [60, 80], stdTime: [25, 35]
  },
  {
    test: (id) => id <= 30,
    name: "阶段三 · 中级", range: "第 21–30 篇",
    words: [300, 405], vocab: [12, 18], density: [4.0, 6.0],
    marks: { "w-cet4": [12, 16], "w-phrase": [4, 5], "w-writing": [2, 3], "w-sentence": [2, 3], "w-synonym": [1, 2], "w-rev": [5, 9] },
    sent: [2, 3], writeWords: [80, 100], stdTime: [30, 40]
  },
  {
    test: (id) => id <= 40,
    name: "阶段四 · 中级提高", range: "第 31–40 篇",
    words: [400, 510], vocab: [15, 20], density: [5.0, 7.0],
    marks: { "w-cet4": [13, 18], "w-phrase": [4, 6], "w-writing": [2, 4], "w-sentence": [3, 5], "w-synonym": [1, 3], "w-rev": [5, 10] },
    sent: [3, 5], writeWords: [100, 120], stdTime: [35, 45]
  },
  {
    test: () => true,
    name: "阶段五 · 综合提高", range: "第 41–50 篇",
    words: [505, 665], vocab: [16, 24], density: [5.5, 7.5],
    marks: { "w-cet4": [14, 20], "w-phrase": [5, 7], "w-writing": [3, 4], "w-sentence": [4, 6], "w-synonym": [2, 4], "w-rev": [8, 14] },
    sent: [4, 6], writeWords: [120, 150], stdTime: [45, 60]
  }
];
const stageOf = (id) => STAGES.find((s) => s.test(id));

const ALLOWED_SPAN = ["w-cet4", "w-phrase", "w-writing", "w-sentence", "w-synonym", "w-rev"];
const NEEDS_CN = ["w-cet4", "w-phrase", "w-writing", "w-synonym"];
const POS_RE = /^(n|v|vt|vi|adj|adv|conj|prep|pron|num|aux|modal v|art)\.(\/(n|v|vt|vi|adj|adv|conj|prep|pron|num|aux|modal v|art)\.)*$/;
const CN = /[\u4e00-\u9fff]/;
const EN_WORD = /[A-Za-z]{4,}/;

/* ---------- 文本工具 ---------- */
function stripAttrs(html) {
  return String(html).replace(/\s*data-cn="[^"]*"/g, "");
}
function plain(html) {
  return stripAttrs(html).replace(/<[^>]+>/g, "");
}
function jpegSize(buf) {
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) { i++; continue; }
    const m = buf[i + 1];
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}
function pngSize(buf) {
  if (buf.length < 24) return null;
  return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}
function countMarks(html) {
  const out = {};
  for (const m of String(html).matchAll(/class="([a-z0-9-]+)"/g)) out[m[1]] = (out[m[1]] || 0) + 1;
  return out;
}
function spans(html) {
  const out = [];
  for (const m of String(html).matchAll(/<span class="([a-z0-9-]+)"([^>]*)>(.*?)<\/span>/g)) {
    out.push({ cls: m[1], attrs: m[2], text: plain(m[3]) });
  }
  return out;
}

/* ---------- 词形归一（lemma 近似） ---------- */
const IRREGULAR = {
  was: "be", were: "be", is: "be", are: "be", been: "be", am: "be",
  went: "go", gone: "go", goes: "go",
  made: "make", took: "take", taken: "take", got: "get", gave: "give", given: "give",
  spent: "spend", bought: "buy", thought: "think", taught: "teach", brought: "bring",
  felt: "feel", kept: "keep", left: "leave", lost: "lose", met: "meet", paid: "pay",
  put: "put", ran: "run", said: "say", sold: "sell", sent: "send", sat: "sit",
  slept: "sleep", spoke: "speak", spoken: "speak", stood: "stand", told: "tell",
  won: "win", wrote: "write", written: "write", drove: "drive", eaten: "eat",
  drank: "drink", drunk: "drink", began: "begin", begun: "begin", broke: "break",
  broken: "break", chose: "choose", chosen: "choose", came: "come", did: "do",
  done: "do", found: "find", heard: "hear", held: "hold", knew: "know",
  known: "know", meant: "mean", rose: "rise", risen: "rise", saw: "see",
  seen: "see", showed: "show", shown: "show", sang: "sing", sung: "sing",
  swam: "swim", swum: "swim", understood: "understand", wore: "wear", worn: "wear",
  fell: "fall", fallen: "fall", flew: "fly", flown: "fly", grew: "grow", grown: "grow",
  hid: "hide", hidden: "hide", rode: "ride", ridden: "ride", shook: "shake",
  shaken: "shake", threw: "throw", thrown: "throw", woke: "wake", woken: "wake",
  drew: "draw", drawn: "draw", built: "build", cut: "cut", let: "let", set: "set",
  read: "read", hurt: "hurt", cost: "cost", sought: "seek", stuck: "stick"
};
function stems(word) {
  const w = String(word).toLowerCase().replace(/[^a-z]/g, "");
  if (!w) return [];
  const out = new Set([w]);
  if (IRREGULAR[w]) out.add(IRREGULAR[w]);
  const rules = [
    [/ies$/, (s) => s.slice(0, -3) + "y"],
    [/ves$/, (s) => s.slice(0, -3) + "f"],
    [/es$/, (s) => s.slice(0, -2)],
    [/s$/, (s) => s.slice(0, -1)],
    [/ied$/, (s) => s.slice(0, -3) + "y"],
    [/ed$/, (s) => s.slice(0, -2)],
    [/ed$/, (s) => s.slice(0, -1)],
    [/ed$/, (s) => s.slice(0, -3)],
    [/ing$/, (s) => s.slice(0, -3)],
    [/ing$/, (s) => s.slice(0, -3) + "e"],
    [/ing$/, (s) => s.slice(0, -4)],
    [/ly$/, (s) => s.slice(0, -2)],
    [/est$/, (s) => s.slice(0, -3)],
    [/er$/, (s) => s.slice(0, -2)],
    [/ness$/, (s) => s.slice(0, -4)],
    [/ful$/, (s) => s.slice(0, -3)],
    [/ment$/, (s) => s.slice(0, -4)],
    [/tion$/, (s) => s.slice(0, -3) + "te"]
  ];
  for (const [re, fn] of rules) if (re.test(w)) out.add(fn(w));
  return [...out].filter((x) => x.length > 1);
}
function sameLemma(a, b) {
  const sa = stems(a), sb = stems(b);
  return sa.some((x) => sb.includes(x));
}

/* ---------- 短语归一（代词 / 括号 / 省略号折叠） ---------- */
const FOLD = {
  my: "POSS", your: "POSS", his: "POSS", her: "POSS", their: "POSS", our: "POSS", its: "POSS", one: "POSS",
  me: "OBJ", you: "OBJ", him: "OBJ", them: "OBJ", us: "OBJ", it: "OBJ",
  sb: "SB", somebody: "SB", someone: "SB",
  sth: "STH", something: "STH",
  is: "BE", am: "BE", are: "BE", was: "BE", were: "BE", be: "BE", been: "BE"
};
function phraseTokens(s) {
  return String(s).toLowerCase()
    .replace(/[’']/g, "'")
    .replace(/\([^)]*\)/g, " ")
    .replace(/\.{2,}|…/g, " ")
    .replace(/[^a-z' ]/g, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map((t) => FOLD[t] || t);
}
function isSubsequence(small, big) {
  let i = 0;
  for (const t of big) {
    if (i < small.length && (t === small[i] || sameLemma(t, small[i]))) i++;
  }
  return i === small.length;
}
function phraseHit(markedText, list) {
  const mt = phraseTokens(markedText);
  return list.some((en) => {
    const pt = phraseTokens(en);
    if (!pt.length || !mt.length) return false;
    return isSubsequence(mt, pt) || isSubsequence(pt, mt);
  });
}

const inBand = (n, [lo, hi]) => n >= lo && n <= hi;

/* ---------- 单篇校验 ---------- */
function validateArticle(a, prevArticles, opts = {}) {
  const errs = [];
  const warn = [];
  const legacy = a.id <= 10; /* 存量文章：跨篇引用类问题降级 */
  const E = (m) => errs.push(m);
  const X = (m) => (legacy ? warn.push("legacy：" + m) : errs.push(m));
  const W = (m) => warn.push(m);
  const id = a.id;
  const st = stageOf(id);
  const node = id % 10 === 0;

  /* 顶层字段 */
  for (const k of ["id", "slug", "title", "titleCn", "stage", "stageRange", "meta", "cover", "coverCredit",
    "body", "translation", "vocabulary", "phrases", "writings", "sentences", "questions",
    "writingTask", "speakingTask", "focus", "standard"]) {
    if (a[k] === undefined || a[k] === null) E(`缺少字段 ${k}`);
  }
  if (errs.length) return { errs, warn };

  if (a.stage !== st.name) E(`stage 应为「${st.name}」，实际「${a.stage}」`);
  if (a.stageRange !== st.range) E(`stageRange 应为「${st.range}」，实际「${a.stageRange}」`);
  const wantSlug = String(id).padStart(3, "0") + "-" + a.title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  if (a.slug !== wantSlug) E(`slug 应为「${wantSlug}」，实际「${a.slug}」`);
  if (a.cover !== `assets/covers/${String(id).padStart(3, "0")}.jpg`) E(`cover 应为 assets/covers/${String(id).padStart(3, "0")}.jpg，实际 ${a.cover}`);
  else {
    const cf = path.join(ROOT, a.cover);
    if (!fs.existsSync(cf)) W(`封面文件不存在：${a.cover}（前端会用渐变底降级）`);
    else {
      const cb = fs.readFileSync(cf);
      /* 1x1 占位图（Pexels 限流时会返回 160 字节的空 JPEG）要当成缺图 */
      const dim = /jpe?g$/.test(cf) ? jpegSize(cb) : pngSize(cb);
      if (cb.length < 20000 || !dim || dim.w < 300 || dim.h < 200) {
        E(`封面图无效：${a.cover}（${(cb.length / 1024).toFixed(0)}KB${dim ? " " + dim.w + "x" + dim.h : ""}），需重新下载`);
      }
    }
  }
  if (!a.coverCredit || !/^Photo: /.test(a.coverCredit)) W(`coverCredit 建议为「Photo: 作者 / 站点」：${a.coverCredit}`);
  if (!CN.test(a.titleCn)) E("titleCn 缺中文");

  /* meta */
  const metaMap = {};
  for (const m of a.meta) metaMap[m.k] = m.v;
  for (const k of ["篇幅", "新词密度", "长难句", "阅读题"]) if (!(k in metaMap)) E(`meta 缺 ${k}`);
  const bodyText = plain(a.body.join(" "));
  const wordCount = bodyText.split(/\s+/).filter(Boolean).length;
  const mw = /约 (\d+) 词/.exec(metaMap["篇幅"] || "");
  if (!mw) E(`meta 篇幅 应为「约 N 词」，实际「${metaMap["篇幅"]}」`);
  else if (Math.abs(+mw[1] - wordCount) > Math.max(12, wordCount * 0.08)) E(`meta 篇幅 ${mw[1]} 词与实测 ${wordCount} 词差距过大`);
  const md = /约 ([\d.]+)%/.exec(metaMap["新词密度"] || "");
  if (!md) E(`meta 新词密度 应为「约 N%」，实际「${metaMap["新词密度"]}」`);
  else if (!inBand(+md[1], st.density)) E(`meta 新词密度 ${md[1]}% 超出阶段区间 ${st.density[0]}–${st.density[1]}%`);
  const ms = /(\d+) 处/.exec(metaMap["长难句"] || "");
  if (!ms || +ms[1] !== a.sentences.length) E(`meta 长难句 应为「${a.sentences.length} 处」，实际「${metaMap["长难句"]}」`);
  const mq = /(\d+) 题/.exec(metaMap["阅读题"] || "");
  if (!mq || +mq[1] !== a.questions.length) E(`meta 阅读题 应为「${a.questions.length} 题」，实际「${metaMap["阅读题"]}」`);

  /* 篇幅 / 词表规模 */
  if (!inBand(wordCount, st.words)) E(`正文 ${wordCount} 词，超出阶段区间 ${st.words[0]}–${st.words[1]}`);
  if (!inBand(a.vocabulary.length, st.vocab)) E(`核心词 ${a.vocabulary.length} 个，超出阶段区间 ${st.vocab[0]}–${st.vocab[1]}`);

  /* 正文纯净 + 标注 */
  a.body.forEach((p, i) => {
    if (typeof p !== "string") return E(`body[${i}] 不是字符串`);
    const clean = stripAttrs(p);
    if (CN.test(clean)) E(`body[${i}] 混入中文：${clean.slice(0, 40)}…`);
    if (/<\/?(b|i|u|br|p|div|table|a)\b/i.test(clean.replace(/<\/?span/gi, ""))) E(`body[${i}] 出现 span 之外的标签`);
    const opens = (p.match(/<span/g) || []).length, closes = (p.match(/<\/span>/g) || []).length;
    if (opens !== closes) E(`body[${i}] span 标签未配平（${opens} 开 / ${closes} 闭）`);
    for (const s of spans(p)) {
      if (!ALLOWED_SPAN.includes(s.cls)) E(`body[${i}] 未知标注类 ${s.cls}`);
      if (NEEDS_CN.includes(s.cls) && !/data-cn="[^"]+"/.test(s.attrs)) E(`body[${i}] ${s.cls} 缺 data-cn：${s.text}`);
      if (s.cls === "w-sentence" && /data-cn/.test(s.attrs)) E(`body[${i}] w-sentence 不要写 data-cn`);
      if (s.cls === "w-rev" && /data-cn/.test(s.attrs)) E(`body[${i}] w-rev 不要写 data-cn`);
      if (/class=/.test(s.attrs)) E(`body[${i}] span 内嵌 span`);
      if (!s.text.trim()) E(`body[${i}] 空标注`);
    }
  });
  const marks = countMarks(a.body.join(""));
  for (const [cls, band] of Object.entries(st.marks)) {
    const n = marks[cls] || 0;
    if (!inBand(n, band)) E(`标注 ${cls} = ${n} 处，超出阶段区间 ${band[0]}–${band[1]}`);
  }

  /* 译文 */
  if (a.translation.length !== a.body.length) E(`translation ${a.translation.length} 段 ≠ body ${a.body.length} 段`);
  a.translation.forEach((t, i) => {
    if (typeof t !== "string") return E(`translation[${i}] 不是字符串`);
    if (!CN.test(t)) E(`translation[${i}] 没有中文`);
    const m = EN_WORD.exec(t);
    if (m) E(`translation[${i}] 含英文单词：${m[0]}`);
  });

  /* 词汇表 */
  const ownWords = new Set(a.vocabulary.map((v) => v.w.toLowerCase()));
  a.vocabulary.forEach((v, i) => {
    for (const k of ["w", "ph", "pos", "cn", "col", "ex"]) if (!v[k]) E(`vocabulary[${i}] 缺 ${k}`);
    if (v.w && /\s/.test(v.w.trim())) W(`vocabulary[${i}] w 含空格（应为单词）：${v.w}`);
    if (v.ph && !/^\//.test(v.ph)) E(`vocabulary[${i}] ph 应以 / 开头：${v.ph}`);
    if (v.pos && !POS_RE.test(v.pos.trim())) E(`vocabulary[${i}] pos 不规范：${v.pos}`);
    if (v.col && !CN.test(v.col)) E(`vocabulary[${i}] col 缺中文意思`);
    if (v.col && !/—/.test(v.col)) E(`vocabulary[${i}] col 应含「—」分隔搭配与意思`);
    if (v.ex && CN.test(v.ex)) E(`vocabulary[${i}] ex 混入中文`);
    if (v.w && !bodyText.toLowerCase().split(/\s+/).some((t) => sameLemma(t, v.w))) X(`vocabulary[${i}] ${v.w} 未在正文中出现`);
  });
  const dup = a.vocabulary.map((v) => v.w.toLowerCase()).filter((w, i, arr) => arr.indexOf(w) !== i);
  if (dup.length) E(`vocabulary 重复词：${[...new Set(dup)].join(", ")}`);

  /* 短语表 */
  if (a.phrases.length < 8 || a.phrases.length > 14) E(`phrases ${a.phrases.length} 条，应在 8–14 条`);
  a.phrases.forEach((p, i) => {
    for (const k of ["en", "cn", "ex"]) if (!p[k]) E(`phrases[${i}] 缺 ${k}`);
    if (p.cn && !CN.test(p.cn)) E(`phrases[${i}] cn 缺中文`);
    if (p.ex && CN.test(p.ex)) E(`phrases[${i}] ex 混入中文`);
    if (p.en && CN.test(p.en)) E(`phrases[${i}] en 混入中文`);
  });

  /* 写作表达 */
  if (a.writings.length !== 2) E(`writings 应为 2 条，实际 ${a.writings.length}`);
  a.writings.forEach((w, i) => {
    for (const k of ["expr", "cn", "meaning", "context", "alts", "register", "example"]) if (!w[k]) E(`writings[${i}] 缺 ${k}`);
    if (w.alts && (w.alts.length < 2 || w.alts.length > 3)) E(`writings[${i}] alts 应 2–3 条，实际 ${w.alts && w.alts.length}`);
    (w.alts || []).forEach((x, j) => { if (!x.t) E(`writings[${i}].alts[${j}] 缺 t`); if (x.n === undefined) E(`writings[${i}].alts[${j}] 缺 n`); });
    if (w.example && CN.test(w.example)) E(`writings[${i}] example 混入中文`);
  });

  /* 长难句解析 */
  if (!inBand(a.sentences.length, st.sent)) E(`sentences ${a.sentences.length} 条，超出阶段区间 ${st.sent[0]}–${st.sent[1]}`);
  a.sentences.forEach((s, i) => {
    if (!s.text) E(`sentences[${i}] 缺 text`);
    if (!s.points || s.points.length < 3 || s.points.length > 5) E(`sentences[${i}] points 应 3–5 条，实际 ${s.points && s.points.length}`);
    if (s.text && !bodyText.includes(plain(s.text))) X(`sentences[${i}] 句子未出现在正文中：${String(s.text).slice(0, 40)}`);
    (s.points || []).forEach((p, j) => { if (!CN.test(p)) E(`sentences[${i}].points[${j}] 应为中文讲解`); });
  });

  /* 阅读题 */
  if (a.questions.length !== 5) E(`questions 应为 5 题，实际 ${a.questions.length}`);
  a.questions.forEach((q, i) => {
    for (const k of ["en", "cn", "ans", "ansCn"]) if (!q[k]) E(`questions[${i}] 缺 ${k}`);
    if (q.cn && !CN.test(q.cn)) E(`questions[${i}] cn 缺中文`);
    if (q.ansCn && !CN.test(q.ansCn)) E(`questions[${i}] ansCn 缺中文`);
  });

  /* 输出任务 */
  const wt = a.writingTask, sp = a.speakingTask;
  if (!wt.en || !wt.hintCn || !wt.req) E("writingTask 缺 en/hintCn/req");
  if (!wt.hints || wt.hints.length < 2 || wt.hints.length > 4) E(`writingTask.hints 应 2–4 条，实际 ${wt.hints && wt.hints.length}`);
  const ww = /(\d+)[–-](\d+) words/.exec(wt.en || "");
  if (!ww) E(`writingTask.en 应含词数区间（如 60–80 words）：${wt.en}`);
  else if (+ww[1] !== st.writeWords[0] || +ww[2] !== st.writeWords[1]) E(`writingTask 词数应为 ${st.writeWords[0]}–${st.writeWords[1]} words，实际 ${ww[0]}`);
  if (!sp.en || !sp.pointCn || !sp.skeleton) E("speakingTask 缺 en/pointCn/skeleton");
  if (!sp.points || sp.points.length < 2 || sp.points.length > 4) E(`speakingTask.points 应 2–4 条，实际 ${sp.points && sp.points.length}`);

  /* 学习重点 */
  const wantFocus = node ? 7 : 5;
  if (a.focus.length !== wantFocus) E(`focus 应为 ${wantFocus} 条（${node ? "节点篇" : "常规篇"}），实际 ${a.focus.length}`);
  a.focus.forEach((f, i) => { if (!CN.test(f)) E(`focus[${i}] 应以中文为主`); });
  if (!a.focus.some((f) => f.includes("新授核心词"))) E("focus 缺「新授核心词」条目");
  if (id > 1 && !a.focus.some((f) => f.includes("本篇复现"))) E("focus 缺「本篇复现的旧词」条目");
  if (node && id > 1 && !a.focus.some((f) => f.includes("本阶段复盘"))) E("节点篇 focus 缺「⭐ 本阶段复盘」条目");

  /* 推荐完成度 */
  const std = a.standard;
  if (!std.time || !std.bar || !std.items) return { errs, warn, wordCount, marks };
  const tm = /(\d+) 分钟/.exec(std.time);
  if (!tm) E(`standard.time 应为「约 N 分钟」，实际「${std.time}」`);
  else if (!inBand(+tm[1], st.stdTime)) E(`standard.time ${tm[1]} 分钟，超出阶段区间 ${st.stdTime[0]}–${st.stdTime[1]}`);
  if (std.items.length !== 7) E(`standard.items 应 7 条，实际 ${std.items.length}`);
  const ks = ["词汇", "搭配", "长难句", "阅读题", "写作", "口语"];
  const lvs = ["必达", "建议", "必达", "必达", "必达", "建议", "加分"];
  std.items.forEach((it, i) => {
    if (i < 6 && it.k !== ks[i]) E(`standard.items[${i}].k 应为「${ks[i]}」，实际「${it.k}」`);
    if (i === 6 && !["复现", "结构"].includes(it.k)) E(`standard.items[6].k 应为「复现」或「结构」，实际「${it.k}」`);
    if (it.lvl !== lvs[i]) E(`standard.items[${i}].lvl 应为「${lvs[i]}」，实际「${it.lvl}」`);
    if (!it.v || !CN.test(it.v)) E(`standard.items[${i}].v 缺中文`);
  });
  if (id === 1 && std.items[6] && std.items[6].k !== "结构") E("第 1 篇加分项应为「结构」");
  if (id !== 1 && std.items[6] && std.items[6].k !== "复现") E(`第 ${id} 篇加分项应为「复现」`);
  const revCount = marks["w-rev"] || 0;
  const hasNum = (txt, n) => new RegExp(`(^|\\D)${n}(\\D|$)`).test(txt);
  const numChecks = [
    [0, a.vocabulary.length, `应含实际词表条数 ${a.vocabulary.length}`],
    [1, a.phrases.length, `应含实际搭配条数 ${a.phrases.length}`],
    [3, a.questions.length, `应含实际题数 ${a.questions.length}`]
  ];
  for (const [idx, n, msg] of numChecks) {
    const it = std.items[idx];
    if (it && !hasNum(it.v, n)) E(`standard.items[${idx}]（${it.k}）${msg}`);
  }
  const it6 = std.items[6];
  if (it6 && it6.k === "复现" && !hasNum(it6.v, revCount)) E(`standard.items[6] 复现条目应含实际灰点数 ${revCount}`);

  /* 标注与表格的对应关系 */
  const taughtBefore = new Set();
  const phraseBefore = [];
  for (const p of prevArticles || []) {
    for (const v of p.vocabulary) taughtBefore.add(v.w.toLowerCase());
    for (const ph of p.phrases) phraseBefore.push(String(ph.en));
  }
  const ownPhraseList = a.phrases.map((p) => p.en);
  const ownWritingExpr = a.writings.map((w) => String(w.expr).toLowerCase().replace(/\s*[.…]+$/, ""));
  for (const s of spans(a.body.join(""))) {
    const t = s.text.toLowerCase().trim();
    if (s.cls === "w-rev") {
      if (ownWords.has(t)) X(`w-rev「${t}」是本篇新授词，应改用 w-cet4`);
      const byWord = [...taughtBefore].some((w) => sameLemma(t, w));
      const byPhrase = phraseHit(t, phraseBefore);
      const containsOld = t.split(/\s+/).some((tok) => [...taughtBefore].some((w) => sameLemma(tok, w)));
      if (!byWord && !byPhrase && !containsOld) X(`w-rev「${t}」不是此前文章教过的词/短语，无法算复现`);
    }
    if (s.cls === "w-cet4") {
      if (!ownWords.has(t) && ![...ownWords].some((w) => sameLemma(t, w))) X(`w-cet4「${t}」不在本篇 vocabulary 里`);
    }
    if (s.cls === "w-phrase") {
      if (!phraseHit(t, ownPhraseList)) X(`w-phrase「${t}」不在本篇 phrases 里`);
    }
    if (s.cls === "w-writing") {
      const hit = ownWritingExpr.some((e) => e === t || t.startsWith(e) || e.startsWith(t));
      if (!hit) W(`w-writing「${t}」与 writings.expr 不一致（data-cn 已解释，可接受）`);
    }
    if (s.cls === "w-synonym" && !/[＝=]/.test(s.attrs)) W(`w-synonym「${t}」建议在 data-cn 里写明同义词（＝ xxx）`);
  }

  return { errs, warn, wordCount, marks };
}

/* ---------- 读取数据 ---------- */
function loadMain() {
  const p = path.join(ROOT, "assets", "js", "articles.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: "articles.js" });
  return ctx.window.ARTICLES;
}

/* ---------- 主流程 ----------
   校验时的「上下文」= articles.js 里已入库的文章 + build/parts/ 下所有待入库分片，
   这样一批里前后篇的复现关系也能被正确识别。 */
function collectAll(extra) {
  const items = [];
  for (const a of loadMain()) items.push({ a, src: "articles.js" });
  const dir = path.join(ROOT, "build", "parts");
  if (fs.existsSync(dir)) {
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith(".json")).sort()) {
      const o = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
      (Array.isArray(o) ? o : [o]).forEach((a) => items.push({ a, src: "parts/" + f }));
    }
  }
  for (const a of extra || []) items.push({ a, src: "argv" });
  items.sort((x, y) => x.a.id - y.a.id);
  /* 同 id 以 argv 为准 */
  const seen = new Map();
  for (const it of items) if (!seen.has(it.a.id) || it.src === "argv") seen.set(it.a.id, it);
  return [...seen.values()].sort((x, y) => x.a.id - y.a.id);
}

function main() {
  const arg = process.argv[2];
  let targets, label;
  const all = collectAll(arg ? (Array.isArray(JSON.parse(fs.readFileSync(arg, "utf8"))) ? JSON.parse(fs.readFileSync(arg, "utf8")) : [JSON.parse(fs.readFileSync(arg, "utf8"))]) : null);
  if (arg) {
    const ids = new Set(all.filter((x) => x.src === "argv").map((x) => x.a.id));
    targets = all.filter((x) => ids.has(x.a.id));
    label = arg;
  } else {
    targets = all;
    label = "articles.js + build/parts";
  }
  let fail = 0, warns = 0;
  targets.forEach((it) => {
    const a = it.a;
    const prev = all.filter((x) => x.a.id < a.id).map((x) => x.a);
    const r = validateArticle(a, prev);
    const tag = `#${a.id} ${a.title || "?"}  [${it.src}]`;
    if (r.errs.length) {
      fail++;
      console.log(`✗ ${tag}`);
      r.errs.forEach((e) => console.log("   · " + e));
    } else {
      console.log(`✓ ${tag}  (${r.wordCount} 词 · 词${a.vocabulary.length} · 短语${a.phrases.length} · ${JSON.stringify(r.marks)})`);
    }
    r.warn.forEach((w) => { warns++; console.log("   ⚠ " + w); });
  });
  console.log(`\n${label}：${targets.length} 篇，失败 ${fail} 篇，警告 ${warns} 条`);
  process.exit(fail ? 1 : 0);
}

if (require.main === module) main();

module.exports = { loadMain, validateArticle, stageOf, plain, spans, countMarks, stems, sameLemma, phraseTokens, phraseHit };
