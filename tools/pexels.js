/* Pexels 搜索：node tools/pexels.js "<关键词>" [数量]
   抓搜索页 → 抽出图片直链 + 描述 + 作者，打印候选清单 */
const [, , query, nArg] = process.argv;
const N = +(nArg || 12);

async function main() {
  const url = "https://www.pexels.com/search/" + encodeURIComponent(query) + "/";
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)" } });
  console.log("HTTP " + res.status + "  " + url);
  const html = (await res.text()).replace(/\\\//g, "/");

  /* 每张照片在页面里是一个卡片：<img> 的 src + alt（属性顺序不固定） */
  const out = [];
  const seen = new Set();
  for (const m of html.matchAll(/<img\b[^>]*>/g)) {
    const tag = m[0];
    const src = /src="(https:\/\/images\.pexels\.com\/photos\/(\d+)\/[^"?]+)[^"]*"/.exec(tag);
    if (!src) continue;
    const id = src[2];
    if (seen.has(id)) continue;
    const alt = /alt="([^"]*)"/.exec(tag);
    seen.add(id);
    out.push({ id, url: src[1], alt: alt ? alt[1] : "" });
  }
  /* 作者：页面里摄影师链接 pexels.com/@slug */
  const authors = {};
  for (const m of html.matchAll(/pexels\.com\/@([a-z0-9\-]+)\/?"/g)) authors[m[1]] = true;

  console.log("候选 " + out.length + " 张，作者 " + Object.keys(authors).length + " 人\n");
  out.slice(0, N).forEach((o, i) => console.log(`${i + 1}. [${o.id}] ${o.alt || "(无描述)"}\n   ${o.url}`));
  console.log("\n作者候选：" + Object.keys(authors).slice(0, 25).join(", "));
}

main().catch((e) => {
  console.log("抓取失败：" + e.message);
  process.exit(1);
});
