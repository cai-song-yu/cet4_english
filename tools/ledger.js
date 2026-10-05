/* ============================================================
   已教词汇池（复现机制用）：把此前文章的核心词 / 短语整理成清单
   用法：
     node tools/ledger.js              全部已入库文章
     node tools/ledger.js 11           只看第 1–10 篇（生成第 11 篇时的复现词池）
     node tools/ledger.js 11 15        生成 11–15 篇这批时的复现词池
   ============================================================ */
const { loadMain } = require("./validate");

const all = loadMain().sort((a, b) => a.id - b.id);
const upTo = process.argv[2] ? +process.argv[2] - 1 : all[all.length - 1].id;
const pool = all.filter((a) => a.id <= upTo);

const words = [];
for (const a of pool) for (const v of a.vocabulary) words.push(`${v.w}(${a.id})`);
const phrases = [];
for (const a of pool) for (const p of a.phrases) phrases.push(p.en);

console.log(`# 复现词池（第 1–${upTo} 篇已教，共 ${pool.length} 篇）`);
console.log(`\n## 核心词 ${words.length} 个 —— 词(篇号)`);
console.log(words.join(", "));
console.log(`\n## 短语 ${phrases.length} 条`);
console.log(phrases.join(" / "));
console.log(`\n## 分篇明细`);
for (const a of pool) {
  console.log(`- 第 ${a.id} 篇 ${a.title}：${a.vocabulary.map((v) => v.w).join(", ")}`);
}
