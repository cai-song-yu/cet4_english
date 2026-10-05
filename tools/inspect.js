/* 现有文章数据体检：输出标注密度、字段规模，供制定校验规则用 */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

function loadArticles() {
  const p = path.join(__dirname, "..", "assets", "js", "articles.js");
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: "articles.js" });
  return ctx.window.ARTICLES;
}

function countClasses(html) {
  const out = {};
  for (const m of html.matchAll(/class="([a-z0-9-]+)"/g)) out[m[1]] = (out[m[1]] || 0) + 1;
  return out;
}

function plain(html) {
  return html.replace(/<[^>]+>/g, "");
}

if (require.main === module) {
  const A = loadArticles();
  console.log("count", A.length);
  for (const a of A) {
    const body = a.body.join("");
    const words = plain(body).split(/\s+/).filter(Boolean).length;
    console.log(
      a.id,
      "| words", words,
      "| marks", JSON.stringify(countClasses(body)),
      "| voc", a.vocabulary.length,
      "| ph", a.phrases.length,
      "| wr", a.writings.length,
      "| sent", a.sentences.length,
      "| q", a.questions.length,
      "| focus", a.focus.length
    );
    console.log("   meta:", a.meta.map((m) => m.k + "=" + m.v).join(" / "));
    console.log("   std :", a.standard.items.map((i) => i.k + "(" + i.lvl + ")").join(" / "));
  }
  const led = {};
  for (const a of A) for (const v of a.vocabulary) (led[v.w] = led[v.w] || []).push(a.id);
  console.log("vocabulary total", Object.keys(led).length);
  console.log(Object.keys(led).join(", "));
}

module.exports = { loadArticles, countClasses, plain };
