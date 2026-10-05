/* 回填封面署名：node tools/credit.js build/credits.json
   credits.json：{ "11": "Photo: Zack Gilbert / Pexels", ... }
   原理：articles.js 里按 id 顺序每篇恰有一条 coverCredit；
   把占位值（Photo: 待补 / Pexels）按出现顺序替换成对应篇目的署名。 */
const fs = require("fs");
const path = require("path");
const vm = require("vm");

const ROOT = path.join(__dirname, "..");
const MAIN = path.join(ROOT, "assets", "js", "articles.js");
const PLACEHOLDER = "Photo: 待补 / Pexels";

const credits = JSON.parse(fs.readFileSync(process.argv[2], "utf8"));
const ctx = { window: {} };
vm.createContext(ctx);
vm.runInContext(fs.readFileSync(MAIN, "utf8"), ctx, { filename: "articles.js" });
const A = ctx.window.ARTICLES;

let text = fs.readFileSync(MAIN, "utf8");
let patched = 0;
for (const a of A) {
  const want = credits[String(a.id)];
  if (!want) continue;
  if (a.coverCredit !== PLACEHOLDER) {
    console.log(`跳过 #${a.id}：coverCredit 已是「${a.coverCredit}」`);
    continue;
  }
  const i = text.indexOf(PLACEHOLDER);
  if (i < 0) {
    console.log(`找不到占位串，停在 #${a.id}`);
    process.exit(1);
  }
  text = text.slice(0, i) + want + text.slice(i + PLACEHOLDER.length);
  patched++;
}
fs.writeFileSync(MAIN, text, "utf8");
console.log(`已回填 ${patched} 条 coverCredit`);
