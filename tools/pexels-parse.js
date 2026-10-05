/* 解析 Pexels 搜索页的 __NEXT_DATA__：node tools/pexels-parse.js <html文件> [关键词过滤] [数量] */
const fs = require("fs");
const file = process.argv[2];
const filter = (process.argv[3] || "").toLowerCase();
const N = +(process.argv[4] || 20);
const txt = fs.readFileSync(file, "utf8");

const m = /<script id="__NEXT_DATA__"[^>]*>([\s\S]*?)<\/script>/.exec(txt);
if (!m) {
  console.log("没找到 __NEXT_DATA__");
  process.exit(1);
}
const data = JSON.parse(m[1]);
const items = (((data.props || {}).pageProps || {}).initialData || {}).data || [];
console.log("data 条目 " + items.length);

const rows = [];
for (const it of items) {
  if (it.type !== "photo") continue;
  const a = it.attributes || {};
  const user = a.user || {};
  const author = [user.first_name, user.last_name].filter(Boolean).join(" ").trim() || user.username || user.slug || "";
  const row = {
    id: it.id,
    slug: a.slug || "",
    desc: a.description || a.alt || "",
    author,
    url: (a.image && (a.image.large || a.image.medium)) || ""
  };
  rows.push(row);
}
const hit = rows.filter((r) => !filter || (r.desc + " " + r.slug).toLowerCase().includes(filter));
console.log("照片 " + rows.length + " 张" + (filter ? "，命中关键词 " + hit.length + " 张" : "") + "\n");
(hit.length ? hit : rows).slice(0, N).forEach((r, i) => {
  console.log(`${i + 1}. [${r.id}] ${r.desc || r.slug}`);
  console.log(`   作者：${r.author}   ${r.url}`);
});
if (rows.length) console.log("\n样例字段：" + JSON.stringify(rows[0]).slice(0, 400));
