/* ============================================================
   通用渲染器 —— 只写一次，所有文章共用
   新增文章时只需在 articles.js 中追加数据
   ============================================================ */

(function () {
  "use strict";

  var ARTICLES = window.ARTICLES || [];

  /* ---------- 工具 ---------- */

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function pad(n) {
    return String(n).padStart(3, "0");
  }

  function sec(no, title, note, inner) {
    return (
      '<section class="sec" id="sec-' + no + '">' +
      '<div class="sec-head"><span class="sec-no">' + no + "</span><h3>" + title + "</h3>" +
      (note ? '<span class="sec-note">' + note + "</span>" : "") +
      "</div>" + inner + "</section>"
    );
  }

  function currentRoute() {
    var h = location.hash || "";
    if (/^#\/words/.test(h)) return { name: "words" };
    var m = h.match(/^#\/(\d+)/);
    if (m) {
      var id = parseInt(m[1], 10);
      for (var i = 0; i < ARTICLES.length; i++) {
        if (ARTICLES[i].id === id) return { name: "article", a: ARTICLES[i] };
      }
      return { name: "missing", id: id };
    }
    return { name: "home" };
  }

  function currentArticle() {
    var r = currentRoute();
    return r.name === "article" ? r.a : null;
  }

  /* ---------- 本地学习数据（localStorage，全部只存在你自己的浏览器里） ---------- */

  var PROG_KEY = "reader-progress";   /* 学习进度 + 难度自评 */
  var NB_KEY = "reader-notebook";     /* 生词本 */
  var THEME_KEY = "reader-theme";     /* 深浅色 */
  var LAST_KEY = "reader-last";       /* 最近读到的篇目 */
  var TR_KEY = "reader-tr";           /* 译文是否显示 */
  var STD_KEY = "reader-std";         /* 推荐完成度勾选 */

  function loadJSON(key, fallback) {
    try {
      var v = JSON.parse(localStorage.getItem(key));
      return v === null || v === undefined ? fallback : v;
    } catch (e) { return fallback; }
  }

  function saveJSON(key, val) {
    try { localStorage.setItem(key, JSON.stringify(val)); } catch (e) {}
  }

  var progress = loadJSON(PROG_KEY, {}) || {};
  var notebook = loadJSON(NB_KEY, []) || [];

  function today() {
    var d = new Date();
    return d.getFullYear() + "-" +
      String(d.getMonth() + 1).padStart(2, "0") + "-" +
      String(d.getDate()).padStart(2, "0");
  }

  function rec(id) {
    if (!progress[id]) progress[id] = {};
    return progress[id];
  }
  function isDone(id) { return !!(progress[id] && progress[id].done); }
  function scoreOf(id) { return (progress[id] && progress[id].score) || 0; }

  function doneCount() {
    var n = 0;
    for (var k in progress) if (progress[k] && progress[k].done) n++;
    return n;
  }

  function studyDays() {
    var seen = {};
    for (var k in progress) if (progress[k] && progress[k].date) seen[progress[k].date] = 1;
    return Object.keys(seen).length;
  }

  /* ---------- 生词本 ---------- */

  function nbIndexOf(w) {
    var k = norm(w);
    for (var i = 0; i < notebook.length; i++) {
      if (norm(notebook[i].w) === k) return i;
    }
    return -1;
  }

  function nbHas(w) { return nbIndexOf(w) !== -1; }

  function nbAdd(entry) {
    if (!entry || !entry.w || nbHas(entry.w)) return false;
    entry.at = entry.at || today();
    notebook.unshift(entry);
    saveJSON(NB_KEY, notebook);
    return true;
  }

  function nbRemove(w) {
    var i = nbIndexOf(w);
    if (i === -1) return false;
    notebook.splice(i, 1);
    saveJSON(NB_KEY, notebook);
    return true;
  }

  /* ---------- 主题（深色 / 浅色 / 跟随系统） ---------- */

  function themePref() {
    var t = "";
    try { t = localStorage.getItem(THEME_KEY) || ""; } catch (e) {}
    return t === "dark" || t === "light" ? t : "auto";
  }

  function applyTheme() {
    var pref = themePref();
    var dark = pref === "dark" ||
      (pref === "auto" && window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    document.documentElement.setAttribute("data-theme", dark ? "dark" : "light");
    var btn = document.getElementById("themeBtn");
    if (btn) {
      btn.textContent = dark ? "☀" : "🌙";
      btn.title = (dark ? "切换到浅色模式" : "切换到深色模式") + "（T）";
    }
    document.querySelectorAll('meta[name="theme-color"]').forEach(function (m) {
      m.setAttribute("content", dark ? "#191714" : "#f4f2ee");
    });
  }

  function toggleTheme() {
    var dark = document.documentElement.getAttribute("data-theme") === "dark";
    try { localStorage.setItem(THEME_KEY, dark ? "light" : "dark"); } catch (e) {}
    applyTheme();
    toast(dark ? "☀ 已切换到浅色模式" : "🌙 已切换到深色模式");
  }

  /* ---------- 课程阶段（首页与侧栏共用） ---------- */

  var STAGES = [
    { name: "阶段一 · 基础", short: "基础", from: 1, to: 10,
      theme: "生活英语：日常作息、校园、习惯、购物、天气、朋友。",
      spec: "150→250 词 · 新词密度 ≤3% · 每篇 8–12 个核心词",
      out: "写作 50–60 词 · 口语 30 秒复述" },
    { name: "阶段二 · 基础过渡", short: "基础过渡", from: 11, to: 20,
      theme: "日常叙事：一次经历、社区、兼职、网络使用、家庭与一次选择。",
      spec: "250→320 词 · 新词密度 3–4.5% · 每篇 10–14 个核心词",
      out: "写作 60–80 词（观点 + 一个理由）· 口语 45 秒" },
    { name: "阶段三 · 中级", short: "中级", from: 21, to: 30,
      theme: "生活与社会：健康、消费、社交方式、时间管理、城乡差异、环保。",
      spec: "300→400 词 · 新词密度 4–6% · 引入抽象名词，开始同义替换",
      out: "写作 80–100 词（观点—理由—例子）· 口语 1 分钟" },
    { name: "阶段四 · 中级提高", short: "中级提高", from: 31, to: 45,
      theme: "科普 / 心理 / 教育 / 环境 / 城市生活 / 历史故事。",
      spec: "400→500 词 · 新词密度 5–7% · 长难句 3–5 个（嵌套、插入、倒装）",
      out: "写作 100–120 词 · 口语 1 分钟结构化表达" },
    { name: "阶段五 · 中高级", short: "中高级", from: 46, to: 60,
      theme: "经济与消费、AI 与科技、社会议题、商业案例、文化差异、职业。",
      spec: "450→550 词 · 新词密度 6–8% · 约 40% 为旧词在新语境复现",
      out: "写作 120–150 词三段式 · 口语 1.5–2 分钟 + 反驳" },
    { name: "阶段六 · CET-4强化", short: "CET-4 强化", from: 61, to: 75,
      theme: "四级真题常见题材全覆盖，限时阅读 + 限时成文。",
      spec: "500→600 词 · 高频词复现与辨析 · 长难句 4–6 个",
      out: "写作 120–150 词限时 25 分钟 · 口语 2 分钟" },
    { name: "阶段七 · 综合提高", short: "综合提高", from: 76, to: 90,
      theme: "历史、全球化、伦理、未来工作、教育公平、个人成长等立场型文章。",
      spec: "550→700 词 · 生词靠上下文猜 · 隐含意义与复杂论证",
      out: "写作 150–180 词 · 口语 2 分钟 + 让步与反驳" }
  ];

  function stageOfArticle(a) {
    for (var i = 0; i < STAGES.length; i++) {
      if (a.id >= STAGES[i].from && a.id <= STAGES[i].to) return STAGES[i];
    }
    return null;
  }

  function stageStats(s) {
    var total = s.to - s.from + 1;
    var done = 0, generated = 0, current = 0;
    ARTICLES.forEach(function (a) {
      if (a.id < s.from || a.id > s.to) return;
      generated++;
      if (isDone(a.id)) done++;
      else if (!current) current = a.id;
    });
    return { total: total, done: done, generated: generated, current: current };
  }

  /* ---------- 侧边栏 ---------- */

  function renderNav(activeId, routeName) {
    var nav = document.getElementById("nav");
    var quick = document.getElementById("quick");

    if (quick) {
      quick.innerHTML =
        '<a class="nav-item' + (routeName === "home" ? " active" : "") + '" href="#/">' +
        '<span class="no">⌂</span><span class="en">课程总览</span></a>' +
        '<a class="nav-item' + (routeName === "words" ? " active" : "") + '" href="#/words">' +
        '<span class="no">▤</span><span class="en">我的生词本</span>' +
        (notebook.length ? '<span class="nb-badge">' + notebook.length + "</span>" : "") +
        "</a>";
    }

    var html = "";
    var lastStage = "";
    var listHtml = "";
    ARTICLES.forEach(function (a) {
      if (a.stage !== lastStage) {
        listHtml += '<div class="stage-label">' + esc(a.stage) + " · " + esc(a.stageRange) + "</div>";
        lastStage = a.stage;
      }
      listHtml +=
        '<a class="nav-item' + (a.id === activeId ? " active" : "") + '" href="#/' + a.id + '">' +
        '<span class="no">' + pad(a.id) + "</span>" +
        '<span class="en">' + esc(a.title) + "</span>" +
        (isDone(a.id) ? '<span class="tick" title="已学完">✓</span>' : "") +
        "</a>";
    });
    if (listHtml) html += '<div class="stage-label">文章目录</div>' + listHtml;

    var covered = {};
    ARTICLES.forEach(function (a) { covered[a.stage] = 1; });
    var pending = STAGES.filter(function (s) { return !covered[s.name]; });
    if (pending.length) {
      html += '<div class="stage-label">计划中</div>';
      pending.forEach(function (s) {
        html += '<div class="nav-empty">第 ' + s.from + "–" + s.to + " 篇 · " + esc(s.short) + "（待生成）</div>";
      });
    }

    nav.innerHTML = html;
    document.getElementById("navFoot").innerHTML =
      "共 90 篇 · 已生成 " + ARTICLES.length + " 篇 · 已学 " + doneCount() + " 篇<br />" +
      "进度记录：course/progress.md";
  }

  /* ---------- 本文目录（TOC） ---------- */

  function renderToc() {
    var toc = document.getElementById("toc");
    if (!toc) return;
    var secs = document.querySelectorAll("#view .sec");
    var html = "";
    secs.forEach(function (s) {
      var noEl = s.querySelector(".sec-no");
      var titleEl = s.querySelector("h3");
      var no = noEl ? noEl.textContent : "";
      var title = titleEl ? titleEl.textContent : s.id;
      html +=
        '<a class="toc-item" href="javascript:void(0)" data-target="' + s.id + '" title="' + esc(title) + '">' +
        '<span class="toc-no">' + esc(no) + "</span>" +
        '<span class="toc-label">' + esc(title) + "</span></a>";
    });
    toc.innerHTML = html;

    toc.querySelectorAll(".toc-item").forEach(function (el) {
      el.addEventListener("click", function () {
        var target = document.getElementById(el.getAttribute("data-target"));
        if (target) {
          target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
        document.body.classList.remove("nav-open");
      });
    });
  }

  function spyToc() {
    var activeId = "";
    document.querySelectorAll("#view .sec").forEach(function (s) {
      if (s.getBoundingClientRect().top <= 130) activeId = s.id;
    });
    document.querySelectorAll(".toc-item").forEach(function (it) {
      it.classList.toggle("active", it.getAttribute("data-target") === activeId);
    });
  }

  /* 正文居中：交由 CSS 在「目录栏右侧的可用区域」内自然居中
     （margin auto），左右留白相等，视觉平衡；不再强制对齐窗口中心 */
  function layout() {
    var inner = document.querySelector(".main-inner");
    if (!inner) return;
    inner.style.transform = "none";
    inner.style.maxWidth = "";
  }

  function relayout() {
    layout();
  }

  /* ---------- 各板块 ---------- */

  function legend() {
    var items = [
      { c: "#1565c0", t: "CET-4 核心词" },
      { c: "#2e7d32", t: "高频短语/搭配" },
      { c: "#e65100", t: "写作表达" },
      { c: "#b3261e", t: "长难句" },
      { c: "#6a1b9a", t: "同义替换" },
      { c: "#8a7f6d", t: "复现旧词（前面学过）" }
    ];
    var h = '<div class="legend">';
    items.forEach(function (i) {
      h += '<span class="lg"><span class="dot" style="background:' + i.c + '"></span>' + i.t + "</span>";
    });
    h += '<span class="hint">正文保持纯英文，中文译文独立成段并<b>默认隐藏</b>（点 🈶 或按 <kbd>L</kbd> 显隐）· 悬停彩色词看中文释义 · 选中任意词句查词典（本地词库优先、生词自动联网，浮层里点 <b>＋存</b> 可收进生词本）· 点划旧词能查到它首次出现的篇目 · 顶栏 ▶ 朗读全文（不含译文）· 按 <kbd>?</kbd> 看快捷键</span></div>';
    return h;
  }

  function sectionArticle(a) {
    var tr = a.translation || [];
    /* 译文独立成 <p class="tr">，绝不混进英文正文，正文仍保持纯英文 */
    var ps = a.body.map(function (p, i) {
      var t = tr[i];
      /* data-pi = 段落序号：划词时按它取 translation 里的「本段译文」 */
      return '<p data-pi="' + i + '">' + p + "</p>" +
        (t ? '<p class="tr" lang="zh-CN">' + esc(t) + "</p>" : "");
    }).join("");
    var tools = tr.length
      ? '<div class="a-tools">' +
        '<button class="btn sm tr-btn" type="button" id="trToggle" aria-pressed="false">' +
        '<span class="tr-ico" aria-hidden="true">🈶</span><span class="tr-lbl">显示译文</span></button>' +
        '<span class="tr-hint">逐段对照 · 默认隐藏，建议先读完英文再看（按 <kbd>L</kbd> 也能切换）</span></div>'
      : "";
    return sec("01", "文章正文", "Article",
      '<div class="article" id="articleBody">' + tools +
      '<div class="a-title">' + esc(a.title) + "</div>" + ps + "</div>");
  }

  function sectionVocab(a) {
    var rows = a.vocabulary.map(function (v) {
      return (
        "<tr><td><span class='word'>" + esc(v.w) + "<span class='ph'>" + esc(v.ph) +
        (v.pos ? " <span class='pos'>" + esc(v.pos) + "</span>" : "") + "</span></span></td>" +
        "<td>" + esc(v.cn) + "</td>" +
        "<td>" + esc(v.col) + "</td>" +
        "<td><span class='ex'>" + esc(v.ex) + "</span></td></tr>"
      );
    }).join("");
    return sec("02", "核心词汇", "Vocabulary",
      '<table class="t-vocab"><thead><tr><th>Word</th><th>中文</th><th>常见搭配（含意思）</th><th>例句</th></tr></thead><tbody>' + rows + "</tbody></table>");
  }

  function sectionPhrases(a) {
    var rows = a.phrases.map(function (p) {
      return (
        "<tr><td><span class='en'>" + esc(p.en) + "</span></td>" +
        "<td>" + esc(p.cn) + "</td>" +
        "<td><span class='ex'>" + esc(p.ex) + "</span></td></tr>"
      );
    }).join("");
    return sec("03", "高频短语与固定搭配", "Collocations",
      '<table class="t-phrase"><thead><tr><th>搭配</th><th>中文意思</th><th>简单例句</th></tr></thead><tbody>' + rows + "</tbody></table>");
  }

  function sectionWriting(a) {
    var cards = a.writings.map(function (w) {
      var alts = w.alts.map(function (x) {
        return '<span class="alt"><code>' + esc(x.t) + "</code>" + (x.n ? " — " + esc(x.n) : "") + "</span>";
      }).join("");
      return (
        '<div class="wcard"><p class="expr">' + esc(w.expr) + "</p><dl>" +
        "<dt>中文</dt><dd>" + esc(w.cn) + "</dd>" +
        "<dt>含义</dt><dd>" + esc(w.meaning) + "</dd>" +
        "<dt>语境</dt><dd>" + esc(w.context) + "</dd>" +
        "<dt>替换表达</dt><dd>" + alts + "</dd>" +
        "<dt>正式程度</dt><dd>" + esc(w.register) + "</dd>" +
        "<dt>例句</dt><dd>" + esc(w.example) + "</dd>" +
        "</dl></div>"
      );
    }).join("");
    return sec("04", "写作表达", "For Writing", cards);
  }

  function sectionSentences(a) {
    var cards = a.sentences.map(function (s) {
      var pts = s.points.map(function (p) { return "<li>" + p + "</li>"; }).join("");
      return '<div class="sent-card"><p class="sent-text">' + esc(s.text) + "</p><ul>" + pts + "</ul></div>";
    }).join("");
    return sec("05", "重点句子解析", "Sentence Analysis", cards);
  }

  function sectionQuestions(a) {
    var items = a.questions.map(function (q) {
      return '<div class="q-item"><p class="q-en">' + esc(q.en) + '</p><p class="q-cn">' + esc(q.cn) + "</p></div>";
    }).join("");

    var hasAns = a.questions.some(function (q) { return q.ans; });
    var ansBox = "";
    if (hasAns) {
      var lis = a.questions.map(function (q) {
        return "<li>" + esc(q.ans || "—") +
          (q.ansCn ? '<span class="zh">' + esc(q.ansCn) + "</span>" : "") + "</li>";
      }).join("");
      ansBox =
        '<div class="ans-bar">' +
        '<button class="ans-btn" id="ansBtn" type="button">显示参考答案</button>' +
        '<span class="ans-tip">建议先自己作答、再对照</span></div>' +
        '<div class="q-answers" id="qAnswers" hidden><ol>' + lis + "</ol></div>";
    }

    return sec("06", "阅读理解训练", "Reading Comprehension",
      '<div class="q-list">' + items + "</div>" + ansBox);
  }

  function sectionTasks(a) {
    var t = a.writingTask;
    var hints = t.hints.map(function (h) { return "<li><b>" + esc(h) + "</b></li>"; }).join("");
    var w =
      '<div class="task"><span class="task-tag">Writing</span>' +
      '<p class="task-en">' + esc(t.en) + "</p>" +
      "<ul>" + hints + "</ul>" +
      '<div class="req">' + esc(t.hintCn) + "<br />" + esc(t.req) + "</div></div>";

    var s = a.speakingTask;
    var pts = s.points.map(function (p) { return "<li>" + esc(p) + "</li>"; }).join("");
    var sp =
      '<div class="task speaking"><span class="task-tag">Speaking</span>' +
      '<p class="task-en">' + esc(s.en) + "</p>" +
      '<div class="req">' + esc(s.pointCn) + "</div><br />" +
      "<ul>" + pts + "</ul>" +
      '<div class="req">参考骨架：<span class="skeleton">' + esc(s.skeleton) + "</span></div></div>";

    return sec("07", "输出任务", "Output", '<div class="task-grid">' + w + sp + "</div>");
  }

  function sectionFocus(a) {
    var items = a.focus.map(function (f, i) {
      return '<li data-n="' + (i + 1) + '">' + f + "</li>";
    }).join("");
    return sec("08", "本篇学习重点", "Key Takeaways", '<ul class="focus-list">' + items + "</ul>");
  }

  /* 推荐完成度：本篇「学到什么程度才算过关」的达标线 + 可勾选自评（localStorage 记忆） */
  function sectionStandard(a) {
    var s = a.standard;
    if (!s || !s.items || !s.items.length) return "";
    var saved = (loadJSON(STD_KEY, {})[a.id] || []).map(Number);
    var items = s.items.map(function (it, i) {
      var on = saved.indexOf(i) !== -1;
      var cls = it.lvl === "必达" ? "must" : it.lvl === "建议" ? "rec" : "bonus";
      return '<label class="std-item ' + cls + (on ? " on" : "") + '">' +
        '<input type="checkbox" data-std="' + i + '"' + (on ? " checked" : "") + " />" +
        '<span class="std-lvl">' + esc(it.lvl) + "</span>" +
        '<span class="std-k">' + esc(it.k) + "</span>" +
        '<span class="std-v">' + esc(it.v) + "</span></label>";
    }).join("");
    return sec("09", "推荐完成度", "Mastery Bar",
      '<div class="std" id="stdBox" data-id="' + a.id + '">' +
      '<div class="std-top"><span class="std-time">⏱ 建议用时' + esc(s.time) + "</span>" +
      '<span class="std-goal">达标线：' + esc(s.bar) + "</span></div>" +
      '<div class="std-prog"><span class="std-track"><i id="stdFill"></i></span>' +
      '<span class="std-pct" id="stdPct">0 / ' + s.items.length + "</span>" +
      '<button class="btn sm" type="button" id="stdReset">清空勾选</button></div>' +
      '<div class="std-list">' + items + "</div></div>");
  }

  /* ---------- 首页：课程总览 ---------- */

  function renderHome() {
    var total = ARTICLES.length;
    var done = doneCount();
    var pct = total ? Math.round((done / total) * 100) : 0;

    /* 「继续学习」：最近读过的那篇，否则第一篇没学完的 */
    var last = 0;
    try { last = parseInt(localStorage.getItem(LAST_KEY) || "0", 10) || 0; } catch (e) {}
    var target = null;
    if (last) {
      for (var i = 0; i < ARTICLES.length; i++) if (ARTICLES[i].id === last) target = ARTICLES[i];
    }
    if (!target) {
      for (var j = 0; j < ARTICLES.length; j++) {
        if (!isDone(ARTICLES[j].id)) { target = ARTICLES[j]; break; }
      }
    }
    if (!target) target = ARTICLES[0] || null;

    var hero =
      '<header class="home-hero">' +
      '<div class="hero-main">' +
      '<div class="kicker">English Reading Course · 90 Days</div>' +
      "<h2>90 篇递进式英语阅读训练</h2>" +
      '<p class="lede">从 CET-4 约 400 分出发，用 90 篇难度稳步上升的文章，把「读懂 → 记住 → 会用」完整走一遍。' +
      "每篇含核心词汇、高频搭配、写作表达、长难句解析、阅读理解与输出任务；" +
      "内置划词查词、全文朗读、生词本与学习进度，全部离线可用。</p>" +
      '<div class="hero-actions">' +
      (target
        ? '<a class="btn primary" href="#/' + target.id + '">' +
          (last && target.id === last ? "▶ 继续学习：" : "▶ 开始学习：") +
          pad(target.id) + " " + esc(target.title) + "</a>"
        : "") +
      '<a class="btn ghost-light" href="#/words">📒 生词本（' + notebook.length + "）</a>" +
      '<button class="btn ghost-light" type="button" id="homeHelp">? 快捷键与帮助</button>' +
      "</div>" +
      "</div>" +
      '<div class="ring" style="--pct:' + pct + '"><div class="ring-txt">' +
      '<span class="ring-num">' + pct + '%</span><span class="ring-cap">已学完</span></div></div>' +
      "</header>";

    var curStage = null;
    for (var s = 0; s < STAGES.length; s++) {
      var st0 = stageStats(STAGES[s]);
      if (st0.generated && st0.done < st0.generated) { curStage = STAGES[s]; break; }
    }

    var stats =
      '<div class="stat-grid">' +
      '<div class="stat"><div class="v">' + done + "<small>/ " + total + " 篇</small></div><div class=\"k\">已学完</div></div>" +
      '<div class="stat"><div class="v">' + studyDays() + "<small>天</small></div><div class=\"k\">学习天数</div></div>" +
      '<div class="stat"><div class="v">' + notebook.length + "<small>词</small></div><div class=\"k\">生词本</div></div>" +
      '<div class="stat"><div class="v stage-name">' + esc(curStage ? curStage.short : done === total ? "已完成" : "—") +
      "</div><div class=\"k\">当前阶段</div></div>" +
      "</div>";

    var stageCards = STAGES.map(function (s) {
      var st = stageStats(s);
      var p = Math.round((st.done / st.total) * 100);
      var state = "", cls = "";
      if (st.generated === st.total && st.done === st.total) { state = "✓ 阶段已完成"; cls = " done"; }
      else if (st.current) { state = "进行中 · 第 " + st.current + " 篇"; cls = " now"; }
      else if (st.generated) { state = "已生成 · 待学习"; }
      else { state = "待生成"; }
      return '<div class="stage-card' + (cls === " now" ? " now" : "") + '">' +
        '<div class="sc-head"><span class="sc-no">' + s.from + "–" + s.to + "</span>" +
        "<h4>" + esc(s.name) + '</h4><span class="sc-range">' + esc(s.spec.split(" · ")[0]) + "</span></div>" +
        '<p class="sc-theme">' + esc(s.theme) + "<br />" + esc(s.spec) + "</p>" +
        '<div class="bar"><i style="width:' + p + '%"></i></div>' +
        '<div class="sc-foot"><span>' + esc(s.out) + '</span><span class="sc-state' + cls + '">' + state + "</span></div>" +
        "</div>";
    }).join("");

    var cards = ARTICLES.map(function (a) {
      var sc = scoreOf(a.id);
      return '<a class="a-card" href="#/' + a.id + '">' +
        (isDone(a.id) ? '<span class="done-flag">✓ 已学</span>' : "") +
        '<div class="thumb">' +
        (a.cover ? '<img src="' + esc(a.cover) + '" alt="" loading="lazy" />' : "") +
        '<span class="num">' + pad(a.id) + "</span></div>" +
        '<div class="body"><div class="en">' + esc(a.title) + "</div>" +
        '<div class="cn">' + esc(a.titleCn) + "</div>" +
        '<div class="tags">' + (a.meta || []).slice(0, 3).map(function (m) {
          return '<span class="tag">' + esc(m.k) + " " + esc(m.v) + "</span>";
        }).join("") + "</div></div>" +
        (sc ? '<span class="score-flag">难度自评 ' + sc + " / 5</span>" : "") +
        "</a>";
    }).join("");
    cards +=
      '<div class="a-card pending"><div class="thumb"><span class="num">' +
      (ARTICLES.length ? pad(ARTICLES[ARTICLES.length - 1].id + 1) : "001") +
      '+</span></div><div class="body"><div class="en">后续篇目</div>' +
      '<div class="cn">按路线图逐篇生成，节点篇含阶段复盘</div></div></div>';

    var guides = [
      { i: "🔍", h: "划词查词",
        p: "在正文里选中任意单词或短语，立刻弹出音标、词性、中文释义、搭配与例句。课程内词汇<b>离线秒查</b>，生词自动联网补全并缓存。点 <b>＋存</b> 一键收进生词本。" },
      { i: "🔊", h: "全文朗读",
        p: "顶栏 <b>▶</b> 逐句朗读正文并高亮当前段，支持暂停 / 停止与 0.8×–1.5× 语速。用浏览器内置语音合成，零依赖零费用；<b>跟着读</b>比只听更有效。" },
      { i: "📒", h: "生词本",
        p: "查到的生词随手存下，保留音标、释义、例句与来源篇目，可发音、可删除、可导出 TXT。建议每次复习先过一遍生词本再开新篇。" },
      { i: "📈", h: "学习进度",
        p: "每篇读完点「<b>标记为已学</b>」，再给一个 1–5 的<b>难度自评</b>——这是调整后续难度的唯一依据。进度存在本地浏览器，首页随时看完成度。" }
    ].map(function (g) {
      return '<div class="guide"><div class="g-ico">' + g.i + "</div><h4>" + g.h + "</h4><p>" + g.p + "</p></div>";
    }).join("");

    var flow = [
      "通读文章，不查词，先猜意思（8–10 分钟）",
      "完成阅读理解题，先自己作答、再对照参考答案（5 分钟）",
      "对照标注与词汇表精读，把生词存进生词本（15 分钟）",
      "完成写作任务，尽量用本篇新学的词和句式（15–20 分钟）",
      "完成口语任务，30 秒–2 分钟复述或陈述（2–3 分钟）",
      "标记已学 + 难度自评 1–5，记下卡住的地方"
    ].map(function (t, i) {
      return '<li data-n="' + (i + 1) + '">' + esc(t) + "</li>";
    }).join("");

    return (
      hero + stats +
      sec("01", "学习路线", "Roadmap",
        '<div class="stage-grid">' + stageCards + "</div>" +
        '<p class="nb-note">难度只按 5 个维度（篇幅 / 新词密度 / 句子复杂度 / 抽象程度 / 任务难度）中的 1–2 个上升，避免「突然变难」的断层。你的难度自评会直接决定下一篇怎么调。</p>') +
      sec("02", "篇目总览", "Articles", '<div class="a-grid">' + cards + "</div>") +
      sec("03", "使用说明", "How To Use", '<div class="guide-grid">' + guides + "</div>") +
      sec("04", "每日流程", "Daily Routine",
        '<ul class="focus-list">' + flow + "</ul>" +
        '<p class="nb-note">每天 1 篇、约 45–60 分钟；每周末 10 分钟周复盘。90 篇只是路线不是刻度，进度可以慢，但反馈不能少。</p>')
    );
  }

  /* ---------- 生词本页 ---------- */

  function renderWords() {
    var top =
      '<div class="nb-head">' +
      '<div class="nb-count"><b>' + notebook.length + "</b> 个词" +
      '<span style="margin-left:10px">保存在本地浏览器，可随时导出</span></div>' +
      '<button class="btn sm" type="button" id="nbExport">⤓ 导出 TXT</button>' +
      '<button class="btn sm" type="button" id="nbCopy">⧉ 复制</button>' +
      '<button class="btn sm danger" type="button" id="nbClear">清空</button>' +
      "</div>";

    if (!notebook.length) {
      return sec("01", "我的生词本", "Notebook", top +
        '<div class="empty"><span class="e-ico">📒</span>' +
        "生词本还是空的。<br />读文章时<b>选中任意词句</b>，在弹出的浮层里点 <b>＋存</b>，<br />" +
        "生词就会带着音标、释义、例句和来源篇目存到这里。</div>");
    }

    var items = notebook.map(function (it) {
      return '<div class="nb-item">' +
        "<div>" +
        "<div><span class=\"nb-word\">" + esc(it.w) + "</span>" +
        (it.ph ? '<span class="nb-ph">' + esc(it.ph) + "</span>" : "") +
        (it.pos ? '<span class="nb-pos">' + esc(it.pos) + "</span>" : "") +
        "</div>" +
        (it.cn ? '<div class="nb-cn">' + esc(it.cn) + "</div>" : "") +
        (it.en ? '<div class="nb-en">' + esc(it.en) + "</div>" : "") +
        (it.col ? '<div class="nb-ex"><b>搭配</b>' + esc(it.col) + "</div>" : "") +
        (it.ex ? '<div class="nb-ex"><b>例句</b>' + esc(it.ex) + "</div>" : "") +
        '<div class="nb-from">来源：' + esc(it.from || "手动收录") + " · 收录于 " + esc(it.at || "") + "</div>" +
        "</div>" +
        '<div class="nb-acts">' +
        '<button class="btn sm" type="button" data-say="' + esc(it.w) + '" title="朗读这个词">🔊</button>' +
        '<button class="btn sm danger" type="button" data-del="' + esc(it.w) + '" title="从生词本移除">✕</button>' +
        "</div></div>";
    }).join("");

    return sec("01", "我的生词本", "Notebook", top + '<div class="nb-list">' + items + "</div>");
  }

  /* ---------- 文章页：学习进度条 ---------- */

  function studyBar(a) {
    var done = isDone(a.id);
    var sc = scoreOf(a.id);
    var r = progress[a.id] || {};
    var btns = [1, 2, 3, 4, 5].map(function (n) {
      return '<button type="button" data-score="' + n + '" class="' + (sc === n ? "on" : "") +
        '" title="' + ["太简单", "偏简单", "刚好", "偏难", "太难"][n - 1] + '">' + n + "</button>";
    }).join("");

    return (
      '<div class="study-bar" id="studyBar">' +
      "<div><span class=\"sb-label\">学习状态</span>" +
      '<span class="sb-state' + (done ? " done" : "") + '" id="sbState">' +
      (done ? "✓ 已学完" + (r.date ? " · " + esc(r.date) : "") : "未标记") + "</span></div>" +
      "<div><span class=\"sb-label\">难度自评</span>" +
      '<span class="score" id="sbScore">' + btns + "</span></div>" +
      '<div class="sb-spacer"></div>' +
      '<button class="btn sm" type="button" id="sbToggle">' + (done ? "撤销标记" : "✓ 标记为已学") + "</button>" +
      '<button class="btn sm" type="button" id="toWords">📒 生词本' +
      (notebook.length ? "（" + notebook.length + "）" : "") + "</button>" +
      "</div>"
    );
  }

  /* ---------- 未生成篇目 ---------- */

  function renderMissing(id) {
    return (
      '<div class="empty"><span class="e-ico">🚧</span>' +
      "第 " + pad(id) + " 篇还没有生成。<br />课程按路线图逐篇推进、每篇生成后都会做难度校准。<br />" +
      '先从 <a href="#/' + (ARTICLES[0] ? ARTICLES[0].id : 1) + '" style="color:var(--accent);font-weight:600">第 ' +
      (ARTICLES[0] ? pad(ARTICLES[0].id) : "001") + " 篇</a> 开始吧。</div>"
    );
  }

  /* ---------- 整页 ---------- */

  function renderArticle(a) {
    var idx = ARTICLES.indexOf(a);
    var prev = ARTICLES[idx - 1];
    var next = ARTICLES[idx + 1];

    var chips = a.meta.map(function (m) {
      return '<span class="chip">' + esc(m.k) + "：<b>" + esc(m.v) + "</b></span>";
    }).join("");
    chips = '<span class="chip">阶段：<b>' + esc(a.stage) + "</b></span>" + chips;

    var pager =
      '<nav class="pager">' +
      (prev
        ? '<a href="#/' + prev.id + '"><div class="p-dir">← 上一篇</div><div class="p-title">' + pad(prev.id) + " " + esc(prev.title) + "</div></a>"
        : '<a class="disabled" href="#/"><div class="p-dir">← 上一篇</div><div class="p-title">已是第一篇</div></a>') +
      (next
        ? '<a class="next" href="#/' + next.id + '"><div class="p-dir">下一篇 →</div><div class="p-title">' + pad(next.id) + " " + esc(next.title) + "</div></a>"
        : '<a class="next disabled" href="#/"><div class="p-dir">下一篇 →</div><div class="p-title">已是最后一篇</div></a>') +
      "</nav>";

    return (
      '<header class="hero' + (a.cover ? "" : " no-cover") + '">' +
      (a.cover ? '<img src="' + esc(a.cover) + '" alt="' + esc(a.title) + '" />' : "") +
      '<div class="shade"></div>' +
      (a.cover ? '<span class="credit">' + esc(a.coverCredit) + "</span>" : "") +
      '<div class="hero-text">' +
      '<div class="kicker">No. ' + pad(a.id) + " · " + esc(a.stage) + "</div>" +
      "<h2>" + esc(a.title) + "</h2>" +
      '<div class="subtitle">' + esc(a.titleCn) + "</div>" +
      "</div></header>" +
      '<div class="chips">' + chips + "</div>" +
      studyBar(a) +
      legend() +
      sectionArticle(a) +
      sectionVocab(a) +
      sectionPhrases(a) +
      sectionWriting(a) +
      sectionSentences(a) +
      sectionQuestions(a) +
      sectionTasks(a) +
      sectionFocus(a) +
      sectionStandard(a) +
      pager
    );
  }

  /* ---------- 路由 ---------- */

  function rerenderKeepScroll() {
    var y = window.scrollY;
    route();
    window.scrollTo(0, y);
  }

  function route() {
    var r = currentRoute();
    var view = document.getElementById("view");

    hidePop();
    stopTts();

    if (r.name === "home") {
      view.innerHTML = renderHome();
      document.getElementById("topTitle").textContent = "英语阅读课程 · 课程总览";
      document.title = "英语阅读课程 · 90 篇递进训练";
      bindHome();
    } else if (r.name === "words") {
      view.innerHTML = renderWords();
      document.getElementById("topTitle").textContent = "我的生词本";
      document.title = "我的生词本 · 英语阅读课程";
      bindWords();
    } else if (r.name === "missing") {
      view.innerHTML = renderMissing(r.id);
      document.getElementById("topTitle").textContent = "第 " + pad(r.id) + " 篇 · 待生成";
      document.title = "待生成 · 英语阅读课程";
    } else {
      view.innerHTML = renderArticle(r.a);
      document.getElementById("topTitle").textContent = pad(r.a.id) + " " + r.a.title;
      document.title = pad(r.a.id) + " " + r.a.title + " · 英语阅读课程";
      try { localStorage.setItem(LAST_KEY, String(r.a.id)); } catch (e) {}
      bindAnswers();
      bindStudyBar(r.a);
      bindArticle(r.a);
    }

    var tocLabel = document.getElementById("tocLabel");
    if (tocLabel) tocLabel.textContent = r.name === "article" ? "本文目录" : "本页目录";

    renderNav(r.a ? r.a.id : 0, r.name);
    renderToc();
    window.scrollTo(0, 0);
    document.body.classList.remove("nav-open");
    updateNextBtn();
    updateTtsUi();
    fixImages();
    layout();
    spyToc();
  }

  /* 封面图缺失或加载失败时，退回到渐变底，绝不出现破图图标 */
  function fixImages() {
    document.querySelectorAll("#view img").forEach(function (img) {
      var hero = img.closest ? img.closest(".hero") : null;
      function fail() {
        if (hero) {
          hero.classList.add("no-cover");
          var cr = hero.querySelector(".credit");
          if (cr) cr.remove();
        }
        img.remove();
      }
      img.addEventListener("error", fail);
      /* 封面是立即加载的，已失败过的图（缓存 404）不会再触发 error，这里补查一次。
         首页卡片是 loading="lazy"，未进视口时个别浏览器也会上报 complete=true /
         naturalWidth=0，所以补查只对封面做，免得误删还没开始加载的缩略图。 */
      if (hero && img.complete && img.naturalWidth === 0) fail();
    });
  }

  /* ---------- 页面内交互绑定 ---------- */

  function bindHome() {
    var h = document.getElementById("homeHelp");
    if (h) h.addEventListener("click", openModal);
  }

  function refreshStudyBar(a) {
    var done = isDone(a.id);
    var sc = scoreOf(a.id);
    var st = document.getElementById("sbState");
    if (st) {
      st.className = "sb-state" + (done ? " done" : "");
      st.textContent = done ? "✓ 已学完" + (progress[a.id].date ? " · " + progress[a.id].date : "") : "未标记";
    }
    var tg = document.getElementById("sbToggle");
    if (tg) tg.textContent = done ? "撤销标记" : "✓ 标记为已学";
    var scBox = document.getElementById("sbScore");
    if (scBox) {
      scBox.querySelectorAll("button").forEach(function (b) {
        b.classList.toggle("on", parseInt(b.getAttribute("data-score"), 10) === sc);
      });
    }
    var tw = document.getElementById("toWords");
    if (tw) tw.textContent = "📒 生词本" + (notebook.length ? "（" + notebook.length + "）" : "");
    renderNav(a.id, "article");
  }

  function bindStudyBar(a) {
    var tg = document.getElementById("sbToggle");
    if (tg) tg.addEventListener("click", function () {
      var r = rec(a.id);
      if (r.done) { r.done = false; r.date = ""; toast("已撤销「已学」标记"); }
      else { r.done = true; r.date = today(); toast("✓ 已标记为学完 · " + r.date); }
      saveJSON(PROG_KEY, progress);
      refreshStudyBar(a);
    });

    var scBox = document.getElementById("sbScore");
    if (scBox) scBox.querySelectorAll("button").forEach(function (b) {
      b.addEventListener("click", function () {
        var n = parseInt(b.getAttribute("data-score"), 10);
        var r = rec(a.id);
        r.score = (r.score === n) ? 0 : n;
        saveJSON(PROG_KEY, progress);
        toast(r.score
          ? "难度自评 " + r.score + " / 5 · " + ["太简单", "偏简单", "刚好", "偏难", "太难"][r.score - 1]
          : "已清除难度自评");
        refreshStudyBar(a);
      });
    });

    var tw = document.getElementById("toWords");
    if (tw) tw.addEventListener("click", function () { location.hash = "#/words"; });
  }

  function nbAsText() {
    var lines = ["我的生词本 · " + today() + " · 共 " + notebook.length + " 个词", ""];
    notebook.forEach(function (it, i) {
      lines.push((i + 1) + ". " + it.w + (it.ph ? "  " + it.ph : "") + (it.pos ? "  " + it.pos : ""));
      if (it.cn) lines.push("   " + it.cn);
      if (it.en) lines.push("   " + it.en);
      if (it.col) lines.push("   搭配：" + it.col);
      if (it.ex) lines.push("   例句：" + it.ex);
      lines.push("   来源：" + (it.from || "手动收录") + " · 收录于 " + (it.at || ""));
      lines.push("");
    });
    return lines.join("\r\n");
  }

  /* 译文显隐 + 推荐完成度勾选 */
  function bindArticle(a) {
    var tb = document.getElementById("trToggle");

    function syncTr() {
      if (!tb) return;
      var on = document.body.classList.contains("tr-on");
      tb.setAttribute("aria-pressed", on ? "true" : "false");
      tb.classList.toggle("on", on);
      var lbl = tb.querySelector(".tr-lbl");
      if (lbl) lbl.textContent = on ? "隐藏译文" : "显示译文";
      var ico = tb.querySelector(".tr-ico");
      if (ico) ico.textContent = on ? "🈚" : "🈶";
    }

    if (tb) {
      syncTr();
      tb.addEventListener("click", function () {
        var on = !document.body.classList.contains("tr-on");
        document.body.classList.toggle("tr-on", on);
        try { localStorage.setItem(TR_KEY, on ? "1" : "0"); } catch (e) {}
        syncTr();
      });
    }

    var box = document.getElementById("stdBox");
    if (!box) return;
    var id = box.getAttribute("data-id");

    function inputs() { return box.querySelectorAll("input[data-std]"); }

    function refreshStd() {
      var n = 0;
      inputs().forEach(function (c) { if (c.checked) n++; });
      var total = inputs().length;
      var pct = total ? Math.round((n / total) * 100) : 0;
      var fill = document.getElementById("stdFill");
      var pctEl = document.getElementById("stdPct");
      if (fill) fill.style.width = pct + "%";
      if (pctEl) pctEl.textContent = n + " / " + total + " · " + pct + "%";
      box.classList.toggle("all-done", total > 0 && n === total);
    }

    function persist() {
      var list = [];
      inputs().forEach(function (c) {
        if (c.checked) list.push(parseInt(c.getAttribute("data-std"), 10));
      });
      var all = loadJSON(STD_KEY, {});
      all[id] = list;
      saveJSON(STD_KEY, all);
      refreshStd();
    }

    box.addEventListener("change", function (e) {
      var t = e.target;
      if (!t || !t.getAttribute || t.getAttribute("data-std") === null) return;
      var li = t.closest ? t.closest(".std-item") : null;
      if (li) li.classList.toggle("on", t.checked);
      persist();
    });

    var rst = document.getElementById("stdReset");
    if (rst) {
      rst.addEventListener("click", function () {
        inputs().forEach(function (c) {
          c.checked = false;
          var li = c.closest ? c.closest(".std-item") : null;
          if (li) li.classList.remove("on");
        });
        persist();
      });
    }

    refreshStd();
  }

  /* 快捷键 L —— 只在有译文的文章页生效 */
  function toggleTranslation() {
    var tb = document.getElementById("trToggle");
    if (tb) tb.click();
  }

  function bindWords() {
    var view = document.getElementById("view");

    view.querySelectorAll("[data-del]").forEach(function (b) {
      b.addEventListener("click", function () {
        var w = b.getAttribute("data-del");
        nbRemove(w);
        toast("已移除：" + w);
        rerenderKeepScroll();
      });
    });

    view.querySelectorAll("[data-say]").forEach(function (b) {
      b.addEventListener("click", function () { saySmart(b.getAttribute("data-say"), "", false); });
    });

    var ex = document.getElementById("nbExport");
    if (ex) ex.addEventListener("click", function () {
      if (!notebook.length) { toast("生词本还是空的"); return; }
      try {
        var blob = new Blob(["\ufeff" + nbAsText()], { type: "text/plain;charset=utf-8" });
        var a = document.createElement("a");
        a.href = URL.createObjectURL(blob);
        a.download = "生词本-" + today() + ".txt";
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setTimeout(function () { URL.revokeObjectURL(a.href); }, 2000);
        toast("已导出 " + notebook.length + " 个词");
      } catch (e) {
        toast("导出失败，请改用「复制」");
      }
    });

    var cp = document.getElementById("nbCopy");
    if (cp) cp.addEventListener("click", function () {
      var text = nbAsText();
      function fallback() {
        var ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.opacity = "0";
        document.body.appendChild(ta);
        ta.select();
        var ok = false;
        try { ok = document.execCommand("copy"); } catch (e) {}
        document.body.removeChild(ta);
        toast(ok ? "已复制到剪贴板" : "复制失败，请手动选中导出");
      }
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(function () {
          toast("已复制到剪贴板");
        }, fallback);
      } else fallback();
    });

    var cl = document.getElementById("nbClear");
    if (cl) cl.addEventListener("click", function () {
      if (!notebook.length) { toast("生词本已经是空的"); return; }
      if (!window.confirm("确定清空生词本？共 " + notebook.length + " 个词，此操作不可撤销。")) return;
      notebook = [];
      saveJSON(NB_KEY, notebook);
      toast("生词本已清空");
      rerenderKeepScroll();
    });
  }

  /* ---------- 答案显隐 ---------- */

  function bindAnswers() {
    var btn = document.getElementById("ansBtn");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var box = document.getElementById("qAnswers");
      var hidden = box.hasAttribute("hidden");
      if (hidden) {
        box.removeAttribute("hidden");
        btn.textContent = "隐藏参考答案";
      } else {
        box.setAttribute("hidden", "");
        btn.textContent = "显示参考答案";
      }
    });
  }

  /* ---------- 划词查词（本地词库，零网络请求） ---------- */

  var DICT = Object.create(null);

  function norm(s) {
    return String(s)
      .replace(/\s+/g, " ")
      .replace(/^[\s"'“”‘’.,;:!?()…\[\]【】]+|[\s"'“”‘’.,;:!?()…\[\]【】]+$/g, "")
      .toLowerCase()
      .trim();
  }

  function dictAdd(key, entry) {
    key = norm(key);
    if (!key) return;
    var old = DICT[key];
    if (!old) { DICT[key] = entry; return; }
    /* 合并：优先保留信息更全的字段（词汇表 > 短语表 > 正文注释） */
    ["ph", "pos", "cn", "col", "ex", "from"].forEach(function (f) {
      if (!old[f] && entry[f]) old[f] = entry[f];
    });
  }

  function buildDict() {
    ARTICLES.forEach(function (a) {
      (a.vocabulary || []).forEach(function (v) {
        dictAdd(v.w, { w: v.w, ph: v.ph, pos: v.pos, cn: v.cn, col: v.col, ex: v.ex, from: pad(a.id) + " · 核心词汇" });
      });
      (a.phrases || []).forEach(function (p) {
        var entry = { w: p.en, cn: p.cn, ex: p.ex, from: pad(a.id) + " · 短语搭配" };
        dictAdd(p.en, entry);
        /* "make time (for …)" 这类条目再登记一个去括号的基础形式 */
        var base = p.en.replace(/\s*\([^)]*\)\s*$/, "").trim();
        if (base && base !== p.en) {
          var e2 = { w: base, cn: p.cn, ex: p.ex, from: pad(a.id) + " · 短语搭配" };
          dictAdd(base, e2);
        }
      });
      (a.body || []).forEach(function (html) {
        var re = /<span\b([^>]*)>([\s\S]*?)<\/span>/g;
        var m;
        while ((m = re.exec(html))) {
          var cn = (m[1].match(/data-cn="([^"]*)"/) || [])[1];
          if (!cn) continue;
          var text = m[2].replace(/<[^>]+>/g, "").trim();
          dictAdd(text, { w: text, cn: cn, from: pad(a.id) + " · 正文注释" });
        }
      });
    });
  }

  function lookup(sel) {
    var key = norm(sel);
    if (!key) return null;
    if (DICT[key]) return DICT[key];
    /* 稍长的选区（如选中 "make time for exercise"）回退到前缀短语 */
    var words = key.split(" ");
    if (words.length > 1 && words.length <= 6) {
      for (var n = words.length - 1; n >= 1; n--) {
        var k2 = words.slice(0, n).join(" ");
        if (DICT[k2]) return DICT[k2];
      }
    }
    return null;
  }

  /* ---------- 在线词典 / 翻译数据源 ----------
     本地服务 tools/serve.js（http://127.0.0.1:8777，key 只留在服务里）：
     /api/ping 探活 → /api/define 词库 · /api/translate 模型翻译 · /api/tts MiMo 真人音色。
     双击 index.html（file://）也能打到 127.0.0.1（服务带 CORS）；服务没跑就走免费通道。 */

  var API_BASE = "http://127.0.0.1:8777";
  var NET_TIMEOUT = 6500;
  /* 模型翻译与合成朗读要给足时间：/api/translate、/api/tts 冷缓存实测 3.6s–10s+，
     用 NET_TIMEOUT 会「明明有服务却退回 MyMemory / 浏览器语音」 */
  var LONG_TIMEOUT = 15000;
  var PING_TIMEOUT = 2500;
  var CACHE_KEY = "reader-dict-cache";
  var CACHE_MAX = 600;
  var TR_CACHE_KEY = "reader-tr-cache";
  var TR_CACHE_MAX = 300;

  function readStore(key) {
    try { return JSON.parse(localStorage.getItem(key)) || {}; } catch (e) { return {}; }
  }

  var dictCache = readStore(CACHE_KEY);
  var trCache = readStore(TR_CACHE_KEY);

  /* 缓存按插入顺序淘汰；词典与翻译各写各的 localStorage 键 */
  function cachePut(store, persistKey, max, key, val) {
    store[key] = val;
    var keys = Object.keys(store);
    if (keys.length > max) {
      keys.slice(0, keys.length - max).forEach(function (k) { delete store[k]; });
    }
    try { localStorage.setItem(persistKey, JSON.stringify(store)); } catch (e) {}
  }

  /* 本地服务探测：启动打一次 /api/ping（2.5s 超时）；没起来就在第一次划词时再试一次，
     服务后开也能用上。结果只缓存在内存里。 */
  var svc = { ok: false, checked: false, busy: false, wantRetry: false, selRetried: false, tts: false, voices: [] };

  function probeService() {
    if (svc.busy) { svc.wantRetry = true; return; }
    svc.busy = true;
    fetchJson(API_BASE + "/api/ping", function (err, j) {
      svc.busy = false;
      svc.checked = true;
      if (!err && j && j.ok) {
        svc.ok = true;
        svc.tts = !!j.tts;
        svc.voices = j.voices || [];
      } else {
        svc.ok = false;
      }
      if (svc.wantRetry) { svc.wantRetry = false; probeService(); return; }
      if (popState) renderPop();   /* 浮层还开着：刷新「服务未运行」提示行 */
    }, PING_TIMEOUT);
  }

  /* JSONP：有道接口不带 CORS 头，只能走 <script> 回调 */
  function jsonp(url, done) {
    var cb = "_dicCb" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
    var sc = document.createElement("script");
    var timer = null, settled = false;
    function fin(err, data) {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      try { delete window[cb]; } catch (e) { window[cb] = undefined; }
      if (sc.parentNode) sc.parentNode.removeChild(sc);
      done(err, data);
    }
    window[cb] = function (data) { fin(null, data); };
    sc.onerror = function () { fin(new Error("script error")); };
    timer = setTimeout(function () { fin(new Error("timeout")); }, NET_TIMEOUT);
    sc.src = url + (url.indexOf("?") === -1 ? "?" : "&") + "callback=" + cb;
    document.head.appendChild(sc);
  }

  function fetchJson(url, done, timeout) {
    if (!window.fetch) return done(new Error("no fetch"));
    var settled = false;
    function fin(err, data) {
      if (settled) return;
      settled = true;
      done(err, data);
    }
    setTimeout(function () { fin(new Error("timeout")); }, timeout || NET_TIMEOUT);
    window.fetch(url).then(function (r) {
      if (!r.ok) throw new Error("http " + r.status);
      return r.json();
    }).then(function (j) { fin(null, j); }).catch(function (e) { fin(e); });
  }

  function postJson(url, body, done, timeout) {
    if (!window.fetch) return done(new Error("no fetch"));
    var settled = false;
    function fin(err, data) {
      if (settled) return;
      settled = true;
      done(err, data);
    }
    setTimeout(function () { fin(new Error("timeout")); }, timeout || NET_TIMEOUT);
    window.fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).then(function (r) {
      if (!r.ok) throw new Error("http " + r.status);
      return r.json();
    }).then(function (j) { fin(null, j); }).catch(function (e) { fin(e); });
  }

  /* 二进制（mp3）：服务失败时返回 JSON {ok:false,error}，这里一并识别成失败 */
  function fetchBin(url, done, timeout) {
    if (!window.fetch) return done(new Error("no fetch"));
    var settled = false;
    function fin(err, blob) {
      if (settled) return;
      settled = true;
      done(err, blob);
    }
    setTimeout(function () { fin(new Error("timeout")); }, timeout || NET_TIMEOUT);
    window.fetch(url).then(function (r) {
      if (!r.ok) throw new Error("http " + r.status);
      var ct = (r.headers && r.headers.get && r.headers.get("content-type")) || "";
      if (/json/i.test(ct)) {
        return r.json().then(function (j) { throw new Error((j && j.error) || "tts failed"); });
      }
      return r.blob ? r.blob() : null;
    }).then(function (b) { fin(null, b); }).catch(function (e) { fin(e); });
  }

  function netYoudao(q, done) {
    jsonp("https://dict.youdao.com/suggest?num=5&doctype=json&q=" + encodeURIComponent(q), function (err, data) {
      if (err) return done(err);
      var entries = (data && data.data && data.data.entries) || [];
      var list = [];
      entries.forEach(function (e) { if (e && e.explain) list.push({ term: e.entry || q, explain: e.explain }); });
      if (!list.length) return done(new Error("empty"));
      var main = null;
      for (var i = 0; i < list.length; i++) {
        if (norm(list[i].term) === norm(q)) { main = list[i]; break; }
      }
      done(null, main || list[0]);
    });
  }

  function netDictApi(q, done) {
    fetchJson("https://api.dictionaryapi.dev/api/v2/entries/en/" + encodeURIComponent(q), function (err, data) {
      if (err) return done(err);
      var d = Array.isArray(data) ? data[0] : null;
      if (!d) return done(new Error("empty"));
      var ph = "", audio = "";
      (d.phonetics || []).forEach(function (p) {
        if (!ph && p.text) ph = p.text;
        if (!audio && p.audio) audio = p.audio;
      });
      var m = (d.meanings || [])[0] || {};
      var def0 = (m.definitions || [])[0] || {};
      if (!def0.definition && !ph) return done(new Error("empty"));
      done(null, { w: d.word, ph: ph, pos: m.partOfSpeech || "", en: def0.definition || "", ex: def0.example || "", audio: audio });
    });
  }

  /* MyMemory 免费翻译：整句 / 短语的兜底通道（to=zh 英译中，to=en 中译英） */
  function netMyMemory(q, to, done) {
    var pair = to === "en" ? "zh-CN%7Cen" : "en%7Czh-CN";
    fetchJson("https://api.mymemory.translated.net/get?langpair=" + pair + "&q=" + encodeURIComponent(q), function (err, data) {
      if (err) return done(err);
      var t = data && data.responseData && data.responseData.translatedText;
      if (!t || /INVALID|LIMIT EXCEEDED|QUERY LENGTH/i.test(String(t))) return done(new Error("empty"));
      done(null, String(t));
    });
  }

  /* 本地服务词库：词 / 短语都查，比免费接口准得多（音标 / 词性 / 中文 / 搭配 / 例句） */
  function netDefine(word, done) {
    fetchJson(API_BASE + "/api/define?word=" + encodeURIComponent(word), function (err, j) {
      if (err) return done(err);
      if (!j || !j.ok || !j.entry) return done(new Error("empty"));
      var e = j.entry;
      done(null, {
        w: e.w || word, ph: e.ph || "", pos: e.pos || "",
        cn: e.cn || "", col: e.col || "", ex: e.ex || "",
        src: "本地服务词库"
      });
    });
  }

  /* ---------- 划词浮层 ---------- */

  var pop = null;
  var popState = null;   /* 当前浮层：{ key, q, rect, data, settled } */

  function ensurePop() {
    if (pop) return pop;
    pop = document.createElement("div");
    pop.className = "word-pop";
    pop.setAttribute("hidden", "");
    document.body.appendChild(pop);
    /* 点浮层内部不触发关闭 */
    ["mousedown", "mouseup", "touchstart", "touchend"].forEach(function (ev) {
      pop.addEventListener(ev, function (e) { e.stopPropagation(); });
    });
    return pop;
  }

  function hidePop() {
    popState = null;
    if (pop) pop.setAttribute("hidden", "");
    if (sayState && sayState.pop) stopSay();   /* 浮层里的发音跟着关掉 */
  }

  function applyPatch(st, patch) {
    var d = st.data;
    ["w", "ph", "pos", "cn", "col", "ex", "en", "audio"].forEach(function (k) {
      if (patch[k] && !d[k]) d[k] = patch[k];
    });
    if (patch.src && d.src !== patch.src) {
      d.src = d.src ? d.src + " · " + patch.src : patch.src;
    }
  }

  /* ---------- 划词三种模式 ----------
     word      1 个词
     phrase    2–6 个词
     sentence  >6 个词，或以 . ? ! 结尾
     选中内容上限 300 字符，超过直接不弹浮层。 */
  var MAX_SEL = 300;

  function selWords(t) {
    var m = String(t).match(/[A-Za-z0-9'’\-]+|[\u3400-\u4dbf\u4e00-\u9fff]/g);
    return m ? m.length : 0;
  }

  function selMode(t) {
    t = String(t).trim();
    if (!t) return "word";
    if (/[.?!][\s"'”’)\]]*$/.test(t)) return "sentence";
    var n = selWords(t);
    if (n > 6) return "sentence";
    return n >= 2 ? "phrase" : "word";
  }

  function hasCJK(s) { return /[\u3400-\u4dbf\u4e00-\u9fff\uf900-\ufaff]/.test(String(s)); }

  function truncate(s, n) {
    s = String(s);
    return s.length > n ? s.slice(0, n) + "…" : s;
  }

  /* 选区所在的正文段落 → 本篇 translation 里的「本段译文」（离线、即时、零请求） */
  function paraTrFor(node) {
    var el = node && node.nodeType !== 1 ? node.parentNode : node;
    var p = el && el.closest ? el.closest("#articleBody p") : null;
    if (!p || (p.classList && p.classList.contains("tr"))) return "";
    var a = currentArticle();
    var tr = (a && a.translation) || [];
    if (!tr.length) return "";
    var idx = p.getAttribute && p.getAttribute("data-pi") !== null ? parseInt(p.getAttribute("data-pi"), 10) : -1;
    if (!(idx >= 0)) {
      var ps = document.querySelectorAll("#articleBody p:not(.tr)");
      idx = Array.prototype.indexOf.call(ps, p);
    }
    return idx >= 0 && tr[idx] ? tr[idx] : "";
  }

  /* 整句翻译：本地服务 /api/translate 优先，不可用回退 MyMemory；结果进 reader-tr-cache */
  function translateText(text, to, done) {
    var k = to + "|" + norm(text);
    if (trCache[k]) { done(null, trCache[k], "翻译缓存"); return; }
    var finished = false;
    function fin(err, t, src) {
      if (finished) return;
      finished = true;
      if (!err && t) cachePut(trCache, TR_CACHE_KEY, TR_CACHE_MAX, k, String(t));
      done(err, t, src);
    }
    function mymemory() {
      netMyMemory(text, to, function (e2, t) {
        if (!e2 && t) fin(null, t, "MyMemory 机器翻译");
        else fin(new Error("translate failed"));
      });
    }
    if (svc.ok) {
      postJson(API_BASE + "/api/translate", { text: text, to: to }, function (err, j) {
        if (!err && j && j.ok && j.text) fin(null, String(j.text), to === "en" ? "本地模型翻译（中→英）" : "本地模型翻译");
        else mymemory();
      }, LONG_TIMEOUT);
    } else {
      mymemory();
    }
  }

  /* word 模式：本地词库已在外层命中 → /api/define → 有道 suggest → Free Dictionary */
  function onlineWord(st, key) {
    var pending = 1;

    function settle() {
      pending--;
      if (pending > 0) return;
      if (!st.data.cn && !st.data.en) st.data.failed = true;
      st.settled = true;
      if (st.data.cn || st.data.en) {
        cachePut(dictCache, CACHE_KEY, CACHE_MAX, key, {
          w: st.data.w, ph: st.data.ph, pos: st.data.pos, cn: st.data.cn,
          col: st.data.col, en: st.data.en, ex: st.data.ex,
          audio: st.data.audio, src: st.data.src
        });
      }
      if (st === popState) renderPop();
    }

    function refresh() { if (st === popState) renderPop(); }

    /* Free Dictionary：音标 / 英文释义 / 词典发音，一直并行 */
    pending++;
    netDictApi(key, function (err, r) {
      if (!err && r) applyPatch(st, { w: r.w, ph: r.ph, pos: r.pos, en: r.en, ex: r.ex, audio: r.audio, src: "Free Dictionary" });
      refresh();
      settle();
    });

    /* 中文释义：本地服务词库优先，没有再走有道 suggest（两者只算一个 pending） */
    pending++;
    function youdao() {
      netYoudao(key, function (err, main) {
        if (!err && main) applyPatch(st, { cn: main.explain, w: main.term, src: "有道词典" });
        refresh();
        settle();
      });
    }
    if (svc.ok) {
      netDefine(key, function (err, e) {
        if (!err && e && e.cn) {
          applyPatch(st, e);
          refresh();
          settle();
        } else {
          youdao();
        }
      });
    } else {
      youdao();
    }

    settle();
  }

  /* phrase / sentence 模式：本段译文（离线） + 整句翻译；phrase 再补一条本地服务词条 */
  function onlinePhrase(st, key) {
    var pending = 1;

    function refresh() { if (st === popState) renderPop(); }

    function settle() {
      pending--;
      if (pending > 0) return;
      st.settled = true;
      if (st.mode === "phrase" && st.data.cn) {
        cachePut(dictCache, CACHE_KEY, CACHE_MAX, key, {
          w: st.data.w, ph: st.data.ph, pos: st.data.pos, cn: st.data.cn,
          col: st.data.col, en: st.data.en, ex: st.data.ex,
          audio: st.data.audio, src: st.data.src
        });
      }
      refresh();
    }

    if (st.mode === "phrase" && !st.data.cn && svc.ok) {
      pending++;
      netDefine(key, function (err, e) {
        if (!err && e && e.cn) applyPatch(st, e);
        refresh();
        settle();
      });
    }

    pending++;
    translateText(st.q, hasCJK(st.q) ? "en" : "zh", function (err, t, src) {
      if (!err && t) { st.tr = t; st.trSrc = src; }
      else st.trFailed = true;
      refresh();
      settle();
    });

    settle();
  }

  function renderPop() {
    if (!popState) return;
    var p = ensurePop();
    var st = popState;
    var d = st.data;
    var rect = st.rect;
    var isWord = st.mode === "word";
    var head = isWord ? (d.w || st.q) : st.q;
    var saveKey = head;
    var playing = !!sayState.via && sayState.key === st.key;

    p.setAttribute("data-mode", st.mode);

    var h =
      '<div class="wp-head">' +
      '<span class="wp-word" title="' + esc(st.q) + '">' + esc(isWord ? head : truncate(head, 46)) + "</span>" +
      (isWord && d.ph ? '<span class="wp-ph">' + esc(d.ph) + "</span>" : "") +
      (isWord && d.pos ? '<span class="wp-pos">' + esc(d.pos) + "</span>" : "") +
      '<button class="wp-btn wp-say' + (playing ? " playing" : "") + '" type="button" title="朗读（真人发音优先，再点停止）">' +
      (playing ? "⏹ 停" : "🔊 读") + "</button>" +
      (st.mode === "sentence" ? "" :
        '<button class="wp-btn wp-nb' + (nbHas(saveKey) ? " saved" : "") + '" type="button" title="加入 / 移出生词本">' +
        (nbHas(saveKey) ? "✓ 已存" : "＋ 存") + "</button>") +
      '<button class="wp-btn wp-x" type="button" title="关闭">✕</button>' +
      "</div>";

    if (d.cn) h += '<div class="wp-cn">' + esc(d.cn) + "</div>";
    if (d.en) h += '<div class="wp-en">' + esc(d.en) + "</div>";
    if (d.col) h += '<div class="wp-row"><b>搭配</b>' + esc(d.col) + "</div>";
    if (d.ex) h += '<div class="wp-row"><b>例句</b><span class="wp-ex">' + esc(d.ex) + "</span></div>";

    /* 短语 / 整句：本段译文（离线、即时） + 整句翻译 */
    if (!isWord) {
      if (st.paraTr) h += '<div class="wp-row wp-para"><b>本段译文</b><span class="wp-zh">' + esc(st.paraTr) + "</span></div>";
      if (st.tr) h += '<div class="wp-row wp-tr"><b>整句翻译</b><span class="wp-zh">' + esc(st.tr) + "</span></div>";
      else if (st.trFailed) h += '<div class="wp-row wp-tr"><b>整句翻译</b><span class="wp-zh wp-miss">翻译失败（离线或接口限流），点 🔊 仍可发音</span></div>';
      else h += '<div class="wp-load">🌐 整句翻译中…</div>';
    }

    if (isWord && !d.cn && !d.en) {
      h += st.settled
        ? '<div class="wp-cn wp-miss">联网查询失败</div><div class="wp-tip">可能是离线或接口限流，点 🔊 仍可发音；稍后重新划词可重试</div>'
        : '<div class="wp-load">🌐 查询中…</div>';
    } else if (isWord && !st.settled) {
      h += '<div class="wp-load">🌐 补充中…</div>';
    }

    /* 来源行：查到的东西 + 实际用上的发音通道 */
    var parts = [];
    if (d.src) parts.push(d.src);
    if (st.trSrc) parts.push(st.trSrc);
    if (st.paraTr) parts.push("本篇逐段译文");
    if (st.saySrc) parts.push("发音：" + st.saySrc);
    if (parts.length) h += '<div class="wp-src">来源：' + esc(parts.join(" · ")) + "</div>";
    if (svc.checked && !svc.ok) {
      h += '<div class="wp-tip wp-svc">本地服务未运行：发音与翻译走免费通道（运行 node tools/serve.js 可启用 MiMo 真人音色与模型翻译）</div>';
    }

    p.innerHTML = h;
    p.removeAttribute("hidden");

    var w = p.offsetWidth, hgt = p.offsetHeight;
    var left = rect.left + rect.width / 2 - w / 2;
    left = Math.max(10, Math.min(left, window.innerWidth - w - 10));
    var top = rect.bottom + 10;
    if (top + hgt > window.innerHeight - 10) top = Math.max(10, rect.top - hgt - 10);
    p.style.left = left + "px";
    p.style.top = top + "px";

    p.querySelector(".wp-say").addEventListener("click", function () { saySmart(st.q, d.audio, true); });
    p.querySelector(".wp-x").addEventListener("click", hidePop);

    var nbBtn = p.querySelector(".wp-nb");
    if (nbBtn) nbBtn.addEventListener("click", function () {
      if (nbHas(saveKey)) {
        nbRemove(saveKey);
        nbBtn.textContent = "＋ 存";
        nbBtn.classList.remove("saved");
        toast("已从生词本移除：" + saveKey);
      } else {
        nbAdd({
          w: saveKey, ph: d.ph || "", pos: d.pos || "", cn: d.cn || "",
          en: d.en || "", col: d.col || "", ex: d.ex || "",
          from: d.src || "划词收录"
        });
        nbBtn.textContent = "✓ 已存";
        nbBtn.classList.add("saved");
        toast("已加入生词本：" + saveKey);
      }
      var rr = currentRoute();
      renderNav(rr.a ? rr.a.id : 0, rr.name);
      var tw = document.getElementById("toWords");
      if (tw) tw.textContent = "📒 生词本" + (notebook.length ? "（" + notebook.length + "）" : "");
    });
  }

  function showPop(text, rect, entry, paraTr) {
    var key = norm(text);
    var mode = selMode(text);
    var data = entry
      ? { w: entry.w, ph: entry.ph, pos: entry.pos, cn: entry.cn, col: entry.col, ex: entry.ex, src: entry.from }
      : {};
    stopSay();
    popState = {
      key: key, q: text, mode: mode, rect: rect,
      paraTr: mode === "word" ? "" : (paraTr || ""),
      data: data, settled: !!data.cn,
      tr: "", trSrc: "", trFailed: false, saySrc: ""
    };
    renderPop();

    if (mode === "word") {
      if (data.cn) return;   /* 本地词条已够用，不联网 */
      var cached = dictCache[key];
      if (cached) {
        applyPatch(popState, cached);
        popState.settled = true;
        renderPop();
        return;
      }
      onlineWord(popState, key);
      return;
    }

    /* phrase / sentence：本段译文已即时显示，整句翻译接着走 */
    onlinePhrase(popState, key);
  }

  /* 选区矩形：老浏览器 / 异常环境下退回元素矩形，保证浮层总能弹出 */
  function rangeRect(range) {
    var zero = { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 };
    try {
      if (range && typeof range.getBoundingClientRect === "function") {
        return range.getBoundingClientRect() || zero;
      }
      if (range && typeof range.getClientRects === "function") {
        var rects = range.getClientRects();
        if (rects && rects.length) return rects[0];
      }
      var el = range && range.startContainer;
      if (el && el.nodeType !== 1) el = el.parentNode;
      if (el && typeof el.getBoundingClientRect === "function") return el.getBoundingClientRect() || zero;
    } catch (e) {}
    return zero;
  }

  function onSelect() {
    var sel = window.getSelection();
    if (!sel || sel.isCollapsed || !sel.rangeCount) { hidePop(); return; }
    var text = String(sel.toString ? sel.toString() : "");
    if (!text.trim() && sel.getRangeAt) text = String(sel.getRangeAt(0).toString() || "");
    text = text.replace(/\s+/g, " ").trim();
    if (!text || text.length > MAX_SEL) { hidePop(); return; }
    var node = sel.anchorNode;
    var view = document.getElementById("view");
    if (!view || !node || !(node === view || view.contains(node))) { hidePop(); return; }
    /* 服务可能是后开的：第一次划词时再探一次 */
    if (!svc.ok && svc.checked && !svc.selRetried) {
      svc.selRetried = true;
      probeService();
    }
    var mode = selMode(text);
    showPop(
      text,
      rangeRect(sel.getRangeAt(0)),
      mode === "sentence" ? null : lookup(text),
      paraTrFor(node)
    );
  }

  document.addEventListener("mouseup", function (e) {
    if (pop && pop.contains(e.target)) return;
    setTimeout(onSelect, 0);
  });
  document.addEventListener("touchend", function (e) {
    if (pop && pop.contains(e.target)) return;
    setTimeout(onSelect, 120);
  }, { passive: true });
  document.addEventListener("mousedown", function (e) {
    if (pop && pop.contains(e.target)) return;
    hidePop();
  });

  /* ---------- 朗读（Web Speech API，零依赖） ---------- */

  var synth = window.speechSynthesis || null;
  var RATE_KEY = "reader-tts-rate";
  var RATES = [0.8, 1, 1.2, 1.5];
  var tts = { queue: [], i: 0, curEl: null, playing: false, paused: false, pauseHard: false, audioFell: false, gen: 0, rate: 1 };

  var _rate = parseFloat(localStorage.getItem(RATE_KEY));
  if (RATES.indexOf(_rate) !== -1) tts.rate = _rate;

  /* ---------- 预生成真人音频 ----------
     tools/gen-tts.mjs 用 MiMo TTS 离线生成整篇 mp3（assets/audio/manifest.js 列出可用篇目）。
     走原生 <audio>：暂停 / 停止 / 变速 100% 可靠，且完全不依赖浏览器语音引擎与网络；
     没有清单、清单过期或某段音频放不出来时，自动退回上面的 Web Speech 路径。 */
  var curAudio = null;   /* 正在播放的预生成音频；null 表示当前走语音合成 */

  function audioEntry() {
    var r = currentRoute();
    if (r.name !== "article" || !window.AUDIO_MANIFEST) return null;
    var e = window.AUDIO_MANIFEST[String(r.a.id)];
    if (!e || !e.files || !e.files.length) return null;
    return e;
  }

  function killAudio() {
    var a = curAudio;
    curAudio = null;
    if (!a) return;
    a.onended = null;
    a.onerror = null;
    try { a.pause(); } catch (e) {}
    try { a.currentTime = 0; } catch (e) {}
  }

  /* 音色候选：本地音色优先。
     ⚠ Chrome 的 Google 网络音色在国内不可达，会静默失败（高亮走但无声），
       因此 localService === false 的网络音色一律降权，且失败时逐个降级重试。 */
  function voiceCandidates() {
    if (!synth || !synth.getVoices) return [];
    var vs = [];
    try { vs = synth.getVoices() || []; } catch (e) { vs = []; }
    var scored = [];
    vs.forEach(function (v) {
      var lang = v.lang || "";
      if (!/^en/i.test(lang)) return;
      var s = 0;
      if (v.localService !== false) s += 5; else s -= 4;
      if (/-US/i.test(lang)) s += 2;
      if (/microsoft/i.test(v.name)) s += 2;
      if (/natural|neural/i.test(v.name)) s += 2;
      scored.push({ v: v, s: s });
    });
    scored.sort(function (a, b) { return b.s - a.s; });
    return scored.map(function (x) { return x.v; });
  }

  function bestVoice() {
    var c = voiceCandidates();
    return c.length ? c[0] : null;
  }

  /* ---------- 状态提示条（让"没声音"变成可见的原因） ---------- */

  var toastEl = null, toastTimer = null;

  function toast(msg) {
    if (!toastEl) {
      toastEl = document.createElement("div");
      toastEl.className = "t-toast";
      document.body.appendChild(toastEl);
    }
    toastEl.textContent = msg;
    toastEl.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { toastEl.classList.remove("show"); }, 3600);
  }

  function clearHighlight() {
    document.querySelectorAll("#view .article p.reading").forEach(function (el) {
      el.classList.remove("reading");
    });
  }

  function highlight(el) {
    clearHighlight();
    if (!el) return;
    el.classList.add("reading");
    var r = el.getBoundingClientRect();
    if (r.top < 80 || r.bottom > window.innerHeight - 24) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }

  function splitSentences(t) {
    var m = String(t).match(/[^.!?]+[.!?]+["'”’)\]]*\s*|[^.!?]+$/g);
    var out = [];
    (m || [t]).forEach(function (s) { s = s.trim(); if (s) out.push(s); });
    return out.length ? out : [];
  }

  function buildQueue(ps) {
    var q = [];
    ps.forEach(function (el) {
      splitSentences(el.textContent || "").forEach(function (s) {
        q.push({ el: el, text: s });
      });
    });
    return q;
  }

  /* 预生成音频队列：一段一句子 → 一段一整段（原文留着，音频坏了可原地退回朗读） */
  function buildAudioQueue(ps, files) {
    var q = [];
    for (var i = 0; i < ps.length; i++) {
      q.push({ el: ps[i], text: (ps[i].textContent || "").trim(), url: files[i] });
    }
    return q;
  }

  /* 逐句朗读：音色按候选顺序降级，出错原因上浮到提示条 */
  function speakItem(item, attempt) {
    if (tts.paused) return;                 /* 暂停中冻结：续读由 resumeTts 负责触发 */
    var cands = voiceCandidates();
    var v = cands[attempt] || null;
    var u = new SpeechSynthesisUtterance(item.text);
    if (v) { u.voice = v; u.lang = v.lang; } else { u.lang = "en-US"; }
    u.rate = tts.rate;
    var g = tts.gen;
    u.onend = function () { if (g === tts.gen && !tts.paused) advance(); };
    u.onerror = function (e) {
      if (g !== tts.gen || tts.paused) return;   /* 暂停期间的结束/中断事件一律不推进队列 */
      var err = (e && e.error) || "";
      var retriable = /voice-unavailable|language-unavailable|synthesis-failed|not-allowed/.test(err);
      if (retriable && attempt < 3 && attempt + 1 < Math.max(cands.length, 2)) {
        toast("音色不可用（" + err + "），换下一个音色重试");
        setTimeout(function () { if (g === tts.gen) speakItem(item, attempt + 1); }, 60);
        return;
      }
      if (err && err !== "interrupted" && err !== "canceled") toast("朗读出错：" + err);
      advance();
    };
    clearStopWatch();          /* 已开读：解除停止补刀 */
    synth.speak(u);
    try { synth.resume(); } catch (e) {}
  }

  /* 单段预生成音频；放不出来（404 / 自动播放被拒）就地退回语音合成，不打断整篇 */
  var audioBlocked = false;   /* 一旦被浏览器拦过一次，本篇后面直接走语音合成，避免逐段试错 */

  /* 音频不可用时的统一去处：能朗读就朗读，读不了就跳过，绝不卡住队列 */
  function afterAudioFail(item, msg) {
    var canSpeak = !!synth && typeof SpeechSynthesisUtterance !== "undefined";
    if (msg && !tts.audioFell) {
      tts.audioFell = true;
      toast(msg + (canSpeak ? "，改用浏览器朗读" : "，且浏览器不支持语音合成"));
    }
    if (canSpeak) speakItem(item, 0);
    else advance();
  }

  function playAudioItem(item) {
    if (audioBlocked) { afterAudioFail(item, null); return; }
    var g = tts.gen;
    var a;
    try { a = new Audio(item.url); } catch (e) { afterAudioFail(item, "这段音频放不出来"); return; }
    curAudio = a;
    a.playbackRate = tts.rate;
    var fell = false;
    function fallback(msg) {
      if (fell || g !== tts.gen || tts.paused) return;
      fell = true;
      if (curAudio === a) curAudio = null;
      item.url = null;
      afterAudioFail(item, msg);
    }
    a.onended = function () { if (g === tts.gen && !tts.paused) advance(); };
    a.onerror = function () { fallback("这段音频放不出来"); };
    clearStopWatch();           /* 已开读：解除停止补刀 */
    var p;
    try { p = a.play(); } catch (e) { fallback("这段音频放不出来"); return; }
    if (p && p.catch) p.catch(function () {
      audioBlocked = true;
      fallback("浏览器拦了音频自动播放");
    });
  }

  function advance() { tts.i++; speakNext(); }

  function playArticle() {
    var entry = audioEntry();
    var haveSynth = !!synth && typeof SpeechSynthesisUtterance !== "undefined";
    if (!haveSynth && !entry) {
      toast("当前浏览器不支持语音合成，请用 Chrome / Edge 打开");
      return;
    }
    var ps = document.querySelectorAll("#view .article p:not(.tr)");
    if (!ps.length) return;
    /* 清单段数和正文对不上（文章改过了）→ 这篇退回语音合成 */
    if (entry && entry.files.length !== ps.length) entry = null;
    clearStopWatch();
    clearPauseWatch();
    tts.pauseHard = false;
    tts.audioFell = false;
    audioBlocked = false;
    killAudio();                        /* 上一轮的预生成音频必须掐掉 */
    var restarting = haveSynth && (synth.speaking || synth.pending);
    if (restarting) synth.cancel();
    var queue = entry ? buildAudioQueue(ps, entry.files) : buildQueue(ps);
    if (!queue.length) return;
    tts.queue = queue;
    tts.i = 0;
    tts.curEl = null;
    tts.playing = true;
    tts.paused = false;
    tts.gen++;
    updateTtsUi();
    var v = bestVoice();
    toast(entry
      ? "▶ 真人朗读 · " + ps.length + " 段 · MiMo 音色" + (entry.voice ? " " + entry.voice : "")
      : "▶ 开始朗读 · " + ps.length + " 段 · 音色：" + (v ? v.name : "系统默认"));
    if (restarting) {
      /* 刚 cancel() 完立刻 speak 可能被 Chrome 吞掉，稍等一帧 */
      var g = tts.gen;
      setTimeout(function () { if (g === tts.gen) speakNext(); }, 120);
    } else {
      /* 在用户点击的调用栈内直接开读，规避 Chrome 手势限制 */
      speakNext();
    }
  }

  function speakNext() {
    if (!tts.playing || tts.paused) return;
    if (tts.i >= tts.queue.length) { finishTts(); return; }
    var item = tts.queue[tts.i];
    if (item.el !== tts.curEl) { tts.curEl = item.el; highlight(item.el); }
    if (item.url) playAudioItem(item); else speakItem(item, 0);
  }

  function finishTts() {
    killAudio();                     /* 预生成音频：清掉引用，避免残留计时器推进队列 */
    tts.playing = false;
    tts.paused = false;
    tts.pauseHard = false;
    clearPauseWatch();
    tts.queue = [];
    tts.i = 0;
    tts.curEl = null;
    clearHighlight();
    updateTtsUi();
  }

  /* ---------- 暂停 / 继续 ----------
     "暂停不灵敏"的三个真实成因，逐一堵死：
     ① 暂停期间当前句若触发 onend/onerror，我们自己的队列会自动读下一句，
        还顺手调 resume() —— 表现为"点了暂停却继续读"。→ 暂停中队列全程冻结。
     ② Chrome 的 pause() 偶发被完全忽略。→ 反复请求直到引擎确认（synth.paused），
        300ms 仍不确认就硬 cancel() 兜底（声音必须停；继续时从本句重读）。
     ③ 点了没反馈 / 继续后没声音。→ 点击即出提示条；继续时若引擎 150ms 内
        没在读，看门狗手动续上当前句。 */
  var pauseTimer = 0;

  function clearPauseWatch() {
    if (pauseTimer) { clearInterval(pauseTimer); pauseTimer = 0; }
  }

  function togglePause() {
    if (!tts.playing) return;
    if (tts.paused) resumeTts(); else pauseTts();
  }

  function pauseTts() {
    if (!tts.playing || tts.paused) return;
    tts.paused = true;
    tts.pauseHard = false;
    updateTtsUi();
    toast("⏸ 已暂停");
    if (curAudio) {
      try { curAudio.pause(); } catch (e) {}
      return;                        /* 预生成音频：原生 pause，没有"被忽略"一说 */
    }
    if (!synth) return;
    try { synth.pause(); } catch (e) {}
    var tries = 0;
    clearPauseWatch();
    pauseTimer = setInterval(function () {
      if (!tts.paused || synth.paused) { clearPauseWatch(); return; }   /* 已确认暂停或已点继续 */
      if (++tries >= 5) {                                              /* 300ms 仍不生效 → 硬停 */
        clearPauseWatch();
        tts.pauseHard = true;
        try { synth.cancel(); } catch (e) {}
        toast("⏸ 已暂停（继续时从本句重读）");
        return;
      }
      try { synth.pause(); } catch (e) {}
    }, 60);
  }

  function resumeTts() {
    if (!tts.paused) return;
    clearPauseWatch();
    tts.paused = false;
    var hard = tts.pauseHard;
    tts.pauseHard = false;
    updateTtsUi();
    toast("▶ 继续朗读");
    if (!tts.playing) return;

    if (curAudio) {
      /* 预生成音频：从原位置继续，无延迟、不重读 */
      try {
        var p = curAudio.play();
        if (p && p.catch) p.catch(function () { if (tts.playing && !tts.paused) speakNext(); });
      } catch (e) { speakNext(); }
      return;
    }

    if (!hard && synth.paused) {
      /* 引擎正常暂停过：交给它继续，150ms 还没读就手动续（防 resume 静默失效） */
      try { synth.resume(); } catch (e) {}
      setTimeout(function () {
        if (tts.playing && !tts.paused && !synth.speaking && !synth.pending) speakNext();
      }, 150);
    } else if (!synth.speaking && !synth.pending) {
      /* 硬停过 / 引擎已空：直接从当前句续读 */
      speakNext();
    }
    /* 若引擎其实还在读（pause 被忽略但还没到硬停），什么都不用做，避免叠读 */
  }

  /* Chrome 的 cancel() 偶发不生效（暂停后停止尤其常见），表现为"按了停止声音还在读"：
     停止后连打 cancel() 直到引擎真正空闲；一旦重新开读立即解除补刀，避免误杀新朗读。 */
  var stopWatch = 0;

  function clearStopWatch() {
    if (stopWatch) { clearInterval(stopWatch); stopWatch = 0; }
  }

  function armStopWatch() {
    clearStopWatch();
    var tries = 0;
    stopWatch = setInterval(function () {
      try { synth.cancel(); } catch (e) {}
      tries++;
      if (tries >= 15 || (!synth.speaking && !synth.pending)) clearStopWatch();
    }, 60);
  }

  function stopTts() {
    var wasPlaying = tts.playing;
    killAudio();                     /* 预生成音频：原生停止，必定生效 */
    if (!synth) { finishTts(); if (wasPlaying) toast("⏹ 已停止朗读"); return; }
    clearPauseWatch();
    /* 暂停态下直接 cancel 可能被吞，先恢复再取消 */
    if (tts.paused) { try { synth.resume(); } catch (e) {} }
    tts.paused = false;
    try { synth.cancel(); } catch (e) {}
    tts.gen++;
    finishTts();
    armStopWatch();
    if (wasPlaying) toast("⏹ 已停止朗读");
  }

  function sayWord(text) {
    if (!synth || typeof SpeechSynthesisUtterance === "undefined") {
      toast("当前浏览器不支持语音合成");
      return;
    }
    stopTts();
    var g = tts.gen;
    setTimeout(function () {
      if (g !== tts.gen) return;
      speakItem({ el: null, text: text }, 0);
    }, 120);
  }

  /* ---------- 浮层发音链 ----------
     ① window.WORD_AUDIO 词表真人发音（预生成 mp3）→ ② 本地服务 /api/tts MiMo 真人音色
     → ③ 词典自带 mp3 → ④ 浏览器朗读。mp3 一律走原生 <audio>，再点一次同一按钮即停止。 */

  var SAY_VOICE = "Chloe";   /* MiMo 音色：Mia / Chloe / Milo / Dean */
  var SAY_STYLE = "native";
  var curSay = null;                                 /* 正在播放的 <audio> */
  var sayState = { key: "", via: "", pop: false };   /* 当前发音：文本 key + 实际通道 */

  function stopSay() {
    if (!sayState || !sayState.via) return;
    var via = sayState.via;
    var s = curSay;
    sayState.key = "";
    sayState.via = "";
    sayState.pop = false;
    curSay = null;
    if (s && s.el) {
      s.el.onended = null;
      s.el.onerror = null;
      try { s.el.pause(); } catch (e) {}
      try { if (s.url && String(s.url).indexOf("blob:") === 0) URL.revokeObjectURL(s.url); } catch (e) {}
    }
    if (via === "浏览器朗读") stopTts();
  }

  /* 原生 <audio> 播一条 mp3；放不出来（404 / 自动播放被拒）就回调 done(false) 走下一档 */
  function playSayAudio(url, key, done) {
    var el;
    try { el = new Audio(url); } catch (e) { done(false); return; }
    var settled = false;
    function fin(ok) {
      if (settled) return;
      settled = true;
      if (!ok) {
        el.onended = null;
        el.onerror = null;
        done(false);
        return;
      }
      curSay = { key: key, el: el, url: url };
      done(true);
    }
    el.onended = function () { if (curSay && curSay.el === el) curSay = null; };
    el.onerror = function () { fin(false); };
    var pr;
    try { pr = el.play(); } catch (e) { fin(false); return; }
    if (pr && pr.then) pr.then(function () { fin(true); }, function () { fin(false); });
    else fin(true);   /* 老浏览器不返回 Promise：按已开播处理 */
  }

  /* MiMo 真人音色：/api/tts 取 mp3（服务端自带磁盘缓存），再用 <audio> 播 */
  function sayViaTts(text, key, done) {
    var url = API_BASE + "/api/tts?text=" + encodeURIComponent(text) +
      "&voice=" + encodeURIComponent(SAY_VOICE) +
      "&style=" + encodeURIComponent(SAY_STYLE);
    fetchBin(url, function (err, blob) {
      if (err) { done(false); return; }
      var u = url;
      try {
        if (blob && window.URL && URL.createObjectURL) u = URL.createObjectURL(blob);
      } catch (e) {}
      playSayAudio(u, key, done);
    }, LONG_TIMEOUT);
  }

  function saySmart(text, audio, fromPop) {
    var key = norm(text);
    /* 再点一次同一按钮 = 停止 */
    if (sayState.via && sayState.key === key) {
      stopSay();
      if (popState) renderPop();
      return;
    }
    stopSay();
    if (tts.playing) stopTts();   /* 别和全文朗读叠着响 */

    var steps = [];
    var wa = window.WORD_AUDIO;
    if (wa && wa[key]) steps.push({ url: wa[key], via: "词表真人发音" });
    if (svc.ok) steps.push({ tts: true, via: "MiMo 真人音色" });
    if (audio) steps.push({ url: audio, via: "词典发音" });

    function setVia(via) {
      sayState.key = key;
      sayState.via = via;
      sayState.pop = !!fromPop;
      if (popState && popState.key === key) {
        popState.saySrc = via;
        renderPop();
      }
    }

    var i = 0;
    function next() {
      if (i >= steps.length) {
        /* 兜底：浏览器朗读 */
        if (synth && typeof SpeechSynthesisUtterance !== "undefined") {
          setVia("浏览器朗读");
          sayWord(text);
        } else {
          toast("没有可用的发音通道（浏览器不支持语音合成）");
        }
        return;
      }
      var s = steps[i++];
      if (s.tts) {
        sayViaTts(text, key, function (ok) { if (ok) setVia(s.via); else next(); });
        return;
      }
      playSayAudio(s.url, key, function (ok) { if (ok) setVia(s.via); else next(); });
    }
    next();
  }

  function rateLabel() {
    return tts.rate + "×";
  }

  function updateTtsUi() {
    var play = document.getElementById("ttsPlay");
    var pause = document.getElementById("ttsPause");
    var stop = document.getElementById("ttsStop");
    var rate = document.getElementById("ttsRate");
    if (!play) return;

    /* 首页 / 生词本没有正文可读：朗读按钮整体置灰 */
    var onArticle = !!document.querySelector("#view .article p");
    if (!onArticle && !tts.playing) {
      [play, pause, stop, rate].forEach(function (b) {
        if (b) { b.disabled = true; b.title = "进入文章后可朗读正文"; }
      });
      return;
    }

    if ((!synth || typeof SpeechSynthesisUtterance === "undefined") && !audioEntry()) {
      /* 保持 ▶ 可点：点击时用提示条说明原因，比灰按钮更直观 */
      if (play) { play.disabled = false; play.title = "当前浏览器不支持语音合成（建议用 Chrome / Edge）"; }
      if (rate) rate.title = "当前浏览器不支持语音合成（建议用 Chrome / Edge）";
      return;
    }
    play.disabled = tts.playing;
    pause.disabled = !tts.playing;
    stop.disabled = !tts.playing;
    rate.disabled = false;
    pause.innerHTML = tts.paused
      ? '▶<span class="tts-lbl"> 继续</span>'
      : '⏸<span class="tts-lbl"> 暂停</span>';
    rate.textContent = rateLabel();
    rate.title = "朗读语速 " + rateLabel() + "（点击切换）";
  }

  /* ---------- 字号 ---------- */

  var FS_KEY = "reader-fs";
  var FS_MIN = 17, FS_MAX = 25;

  function applyFs() {
    var fs = parseInt(localStorage.getItem(FS_KEY), 10) || 20;
    document.documentElement.style.setProperty("--fs-article", fs + "px");
    return fs;
  }

  function changeFs(d) {
    var fs = applyFs() + d;
    if (fs < FS_MIN) fs = FS_MIN;
    if (fs > FS_MAX) fs = FS_MAX;
    localStorage.setItem(FS_KEY, fs);
    applyFs();
  }

  /* ---------- 侧边栏 ---------- */

  var SID_KEY = "reader-side";

  function toggleSide() {
    if (window.matchMedia("(max-width: 960px)").matches) {
      document.body.classList.toggle("nav-open");
    } else {
      document.body.classList.toggle("side-collapsed");
      localStorage.setItem(SID_KEY, document.body.classList.contains("side-collapsed") ? "1" : "0");
    }
    relayout();
  }

  /* ---------- 帮助弹窗（快捷键 + 工具说明） ---------- */

  var modalEl = null;

  var SHORTCUTS = [
    { k: ["←", "→"], d: "上一篇 / 下一篇（在首页按 → 直接进入待学篇目）" },
    { k: ["H"], d: "回到课程总览" },
    { k: ["W"], d: "打开我的生词本" },
    { k: ["T"], d: "切换深色 / 浅色模式" },
    { k: ["L"], d: "显示 / 隐藏本篇译文" },
    { k: ["+", "−"], d: "放大 / 缩小正文字号" },
    { k: ["Esc"], d: "关闭浮层与弹窗 / 停止朗读" },
    { k: ["?"], d: "打开 / 关闭本帮助" },
    { k: ["Tab"], d: "按两次可聚焦到侧边栏目录" }
  ];

  function ensureModal() {
    if (modalEl) return modalEl;
    modalEl = document.createElement("div");
    modalEl.className = "modal";
    modalEl.setAttribute("hidden", "");

    var keys = SHORTCUTS.map(function (s) {
      return '<div class="kbd-row"><span class="kr-keys">' +
        s.k.map(function (x) { return "<kbd>" + esc(x) + "</kbd>"; }).join("") +
        '</span><span class="kr-desc">' + esc(s.d) + "</span></div>";
    }).join("");

    var tools = [
      ["🔍 划词查词", "选中正文里任意词句即弹出音标 / 释义 / 搭配 / 例句。课程内词汇离线秒查，生词自动联网并缓存到本地，浮层里的 ＋存 一键收进生词本。"],
      ["🔊 全文朗读", "顶栏 ▶ 逐句朗读并高亮当前段，支持暂停、停止与 0.8×–1.5× 语速。切篇或按 Esc 自动停止。译文不参与朗读。"],
      ["🈶 逐段译文", "每篇的中文译文独立成段、默认隐藏，点正文上方的 🈶 按钮或按 L 显隐（跨篇记忆）。译文永远不混进英文正文，先读原文、卡住再对照。"],
      ["🎯 推荐完成度", "每篇末尾的第 09 板块给出「学到什么程度才算过关」的 7 条达标线：必达 4 条（词汇 / 长难句 / 阅读题 / 写作）、建议 2 条（搭配 / 口语）、加分 1 条。逐条勾选，进度条算出完成度，状态跨页记忆。"],
      ["📝 写作 / 口语任务", "每篇末尾都有输出任务：写作迁移给句式骨架，口语任务给复述要点。写完、说完再标记已学，才算完成一篇。"],
      ["📈 难度自评", "读完给 1–5 分（太简单 → 太难）。这个数字是后续篇目难度调整的唯一依据，不用客气，如实打分。"]
    ].map(function (t) {
      return '<div class="guide"><h4 style="margin-top:0">' + esc(t[0]) + "</h4><p>" + esc(t[1]) + "</p></div>";
    }).join("");

    modalEl.innerHTML =
      '<div class="m-box">' +
      "<h3>快捷键与使用帮助</h3>" +
      '<p class="m-sub">这个阅读器按「读懂 → 记住 → 会用」设计。学习进度、生词本、字号与主题都保存在<b>你自己的浏览器</b>里（localStorage），不上传、不需要账号；换浏览器或清理站点数据会丢失，重要内容请用生词本的「导出」备份。</p>' +
      "<h4>快捷键</h4>" +
      '<div class="kbd-list">' + keys + "</div>" +
      "<h4>核心工具</h4>" +
      '<div class="guide-grid">' + tools + "</div>" +
      '<div style="margin-top:24px"><button class="btn primary" type="button" data-close>知道了</button></div>' +
      "</div>";

    document.body.appendChild(modalEl);
    modalEl.addEventListener("click", function (e) {
      if (e.target === modalEl || (e.target.closest && e.target.closest("[data-close]"))) closeModal();
    });
    return modalEl;
  }

  function openModal() {
    ensureModal().removeAttribute("hidden");
  }

  function closeModal() {
    if (modalEl && !modalEl.hasAttribute("hidden")) {
      modalEl.setAttribute("hidden", "");
      return true;
    }
    return false;
  }

  function toggleModal() {
    if (!closeModal()) openModal();
  }

  /* ---------- 翻页 ---------- */

  function go(delta) {
    var r = currentRoute();
    if (r.name === "article") {
      var idx = ARTICLES.indexOf(r.a) + delta;
      if (idx >= 0 && idx < ARTICLES.length) location.hash = "#/" + ARTICLES[idx].id;
      return;
    }
    /* 首页 / 生词本：→ 直接进入第一篇没学完的 */
    if (delta > 0 && ARTICLES.length) {
      var next = null;
      for (var i = 0; i < ARTICLES.length; i++) {
        if (!isDone(ARTICLES[i].id)) { next = ARTICLES[i]; break; }
      }
      location.hash = "#/" + (next || ARTICLES[0]).id;
    }
  }

  function updateNextBtn() {
    var btn = document.getElementById("nextBtn");
    if (!btn) return;
    var r = currentRoute();
    if (r.name === "article") {
      btn.disabled = ARTICLES.indexOf(r.a) >= ARTICLES.length - 1;
      btn.textContent = "下一篇 →";
      btn.title = "下一篇（→ 方向键）";
    } else {
      btn.disabled = !ARTICLES.length;
      btn.textContent = "开始学习 →";
      btn.title = "进入第一篇未完成的文章（→ 方向键）";
    }
    btn.style.opacity = btn.disabled ? ".5" : "1";
  }

  /* ---------- 事件 ---------- */

  var toggle = document.getElementById("navToggle");
  if (toggle) toggle.addEventListener("click", toggleSide);

  var scrim = document.getElementById("scrim");
  if (scrim) scrim.addEventListener("click", function () { document.body.classList.remove("nav-open"); });

  var fUp = document.getElementById("fontUp");
  if (fUp) fUp.addEventListener("click", function () { changeFs(1); });
  var fDown = document.getElementById("fontDown");
  if (fDown) fDown.addEventListener("click", function () { changeFs(-1); });

  var nextBtn = document.getElementById("nextBtn");
  if (nextBtn) nextBtn.addEventListener("click", function () { go(1); });

  var themeBtn = document.getElementById("themeBtn");
  if (themeBtn) themeBtn.addEventListener("click", toggleTheme);

  var helpBtn = document.getElementById("helpBtn");
  if (helpBtn) helpBtn.addEventListener("click", toggleModal);

  var topTitle = document.getElementById("topTitle");
  if (topTitle) {
    topTitle.addEventListener("click", function () { location.hash = "#/"; });
    topTitle.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); location.hash = "#/"; }
    });
  }

  var ttsPlay = document.getElementById("ttsPlay");
  if (ttsPlay) ttsPlay.addEventListener("click", playArticle);
  var ttsPause = document.getElementById("ttsPause");
  if (ttsPause) ttsPause.addEventListener("click", togglePause);
  var ttsStop = document.getElementById("ttsStop");
  if (ttsStop) ttsStop.addEventListener("click", stopTts);
  var ttsRate = document.getElementById("ttsRate");
  if (ttsRate) {
    ttsRate.addEventListener("click", function () {
      var i = (RATES.indexOf(tts.rate) + 1) % RATES.length;
      tts.rate = RATES[i];
      localStorage.setItem(RATE_KEY, String(tts.rate));
      updateTtsUi();
      if (curAudio) curAudio.playbackRate = tts.rate;               /* 预生成音频：原生即时变速 */
      else if (tts.playing && !tts.paused) { stopTts(); playArticle(); } /* 语音合成：新语速从头读 */
    });
  }

  var toTop = document.getElementById("toTop");
  if (toTop) {
    toTop.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  window.addEventListener("scroll", function () {
    hidePop();
    spyToc();
    if (toTop) toTop.classList.toggle("show", window.scrollY > 500);
  }, { passive: true });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      if (closeModal()) return;
      hidePop();
      stopTts();
      return;
    }
    if (e.key === "?" || e.key === "？" || (e.key === "/" && e.shiftKey)) {
      e.preventDefault();
      toggleModal();
      return;
    }

    if (e.target && /INPUT|TEXTAREA|SELECT/.test(e.target.tagName)) return;
    if (e.target && e.target.isContentEditable) return;
    if (e.metaKey || e.ctrlKey || e.altKey) return;
    /* 弹窗打开时不响应页面级快捷键 */
    if (modalEl && !modalEl.hasAttribute("hidden")) return;

    if (e.key === "ArrowLeft") { go(-1); return; }
    if (e.key === "ArrowRight") { go(1); return; }
    if (e.key === "+" || e.key === "=") { changeFs(1); return; }
    if (e.key === "-" || e.key === "_") { changeFs(-1); return; }

    var k = (e.key || "").toLowerCase();
    if (k === "h") { location.hash = "#/"; return; }
    if (k === "w") { location.hash = "#/words"; return; }
    if (k === "t") { toggleTheme(); return; }
    if (k === "l") { toggleTranslation(); return; }
  });

  window.addEventListener("hashchange", route);

  window.addEventListener("resize", relayout);
  window.addEventListener("load", relayout);

  /* ---------- 启动 ---------- */

  buildDict();
  applyFs();
  applyTheme();
  if (localStorage.getItem(SID_KEY) === "1") {
    document.body.classList.add("side-collapsed");
  }
  /* 译文显示状态跨篇记忆 */
  if (localStorage.getItem(TR_KEY) === "1") {
    document.body.classList.add("tr-on");
  }
  route();
  updateTtsUi();
  probeService();   /* 本地服务探活：没起来就走免费通道，第一次划词时还会再试一次 */
  if (synth) {
    bestVoice(); /* 触发 Chrome 异步加载音色列表 */
    if (typeof synth.onvoiceschanged !== "undefined") {
      synth.onvoiceschanged = function () { bestVoice(); };
    }
  }
  /* 跟随系统切换深浅色（仅当用户没有手动固定时） */
  if (window.matchMedia) {
    var mq = window.matchMedia("(prefers-color-scheme: dark)");
    var onScheme = function () { if (themePref() === "auto") applyTheme(); };
    if (mq.addEventListener) mq.addEventListener("change", onScheme);
    else if (mq.addListener) mq.addListener(onScheme);
  }
})();
