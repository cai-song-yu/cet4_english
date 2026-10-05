/* 审阅单篇数据：node tools/review.js build/parts/012.json [--all]
   默认打印正文（标注用 «» 标出）、译文、题目；--all 连词表/短语/达标线一起打 */
const fs = require("fs");
const vm = require("vm");
const path = require("path");

const file = process.argv[2];
const all = process.argv.includes("--all");
let d;
if (/^\d+$/.test(file)) {
  /* 传篇号则从 articles.js 里取已入库文章 */
  const { loadMain } = require("./validate");
  d = loadMain().find((a) => a.id === +file);
  if (!d) {
    console.log("articles.js 里没有第 " + file + " 篇");
    process.exit(1);
  }
} else {
  d = JSON.parse(fs.readFileSync(file, "utf8"));
}
if (Array.isArray(d)) d = d[0];

const mark = (s) => s
  .replace(/<span class="w-rev">/g, "«灰:")
  .replace(/<span class="w-sentence">/g, "«句:")
  .replace(/<span class="([a-z0-9-]+)"[^>]*>/g, "«")
  .replace(/<\/span>/g, "»");

console.log(`# ${d.id} ${d.title} / ${d.titleCn}   (${d.stage})`);
console.log("\n=== 正文 ===");
d.body.forEach((p, i) => console.log(`${i + 1}. ${mark(p)}\n`));
console.log("=== 译文 ===");
d.translation.forEach((t, i) => console.log(`${i + 1}. ${t}`));
console.log("\n=== 阅读题 ===");
d.questions.forEach((q, i) => {
  console.log(`${i + 1}. ${q.en}`);
  console.log(`   ${q.cn}`);
  console.log(`   答：${q.ans} ｜ ${q.ansCn}`);
});
if (all) {
  console.log("\n=== 词表 ===");
  d.vocabulary.forEach((v) => console.log(`- ${v.w} ${v.ph} ${v.pos} ｜ ${v.cn} ｜ ${v.col} ｜ ${v.ex}`));
  console.log("\n=== 短语 ===");
  d.phrases.forEach((p) => console.log(`- ${p.en} — ${p.cn} ｜ ${p.ex}`));
  console.log("\n=== 写作表达 ===");
  d.writings.forEach((w) => {
    console.log(`- ${w.expr} — ${w.cn}`);
    console.log(`   ${w.meaning}`);
    console.log(`   语境：${w.context} ｜ 正式度：${w.register}`);
    w.alts.forEach((x) => console.log(`   ≈ ${x.t} ${x.n}`));
    console.log(`   例：${w.example}`);
  });
  console.log("\n=== 长难句 ===");
  d.sentences.forEach((s) => {
    console.log(`- ${s.text}`);
    s.points.forEach((p) => console.log(`   · ${p}`));
  });
  console.log("\n=== 输出任务 ===");
  console.log("写作：" + d.writingTask.en);
  console.log("  提示：" + d.writingTask.hints.join(" / "));
  console.log("  " + d.writingTask.hintCn + " ｜ " + d.writingTask.req);
  console.log("口语：" + d.speakingTask.en);
  console.log("  " + d.speakingTask.points.join(" / ") + " ｜ " + d.speakingTask.pointCn);
  console.log("  骨架：" + d.speakingTask.skeleton);
  console.log("\n=== 学习重点 ===");
  d.focus.forEach((f, i) => console.log(`${i + 1}. ${f.replace(/<[^>]+>/g, "")}`));
  console.log("\n=== 达标线 ===");
  console.log(`${d.standard.time} ｜ ${d.standard.bar}`);
  d.standard.items.forEach((it) => console.log(`- [${it.lvl}] ${it.k}：${it.v}`));
}
