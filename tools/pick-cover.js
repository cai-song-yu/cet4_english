/* 从任意文本（网页 HTML / 搜索结果）里抽取 Pexels 图片直链 */
const fs = require("fs");
const file = process.argv[2];
const txt = fs.readFileSync(file, "utf8").replace(/\\\//g, "/");
const urls = new Set();
for (const m of txt.matchAll(/https:\/\/images\.pexels\.com\/photos\/\d+\/[a-zA-Z0-9\-_.]+\.(?:jpe?g|png)/g)) {
  urls.add(m[0]);
}
const list = [...urls];
console.log("共 " + list.length + " 条直链");
list.slice(0, 40).forEach((u) => console.log(u));
