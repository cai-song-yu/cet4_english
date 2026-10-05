/* 测 Openverse API（CC 授权图，免 key）：node tools/openverse.js "<关键词>" [数量] */
const [, , q, nArg] = process.argv;
const N = +(nArg || 8);
async function main() {
  const url = "https://api.openverse.org/v1/images/?q=" + encodeURIComponent(q) + "&page_size=" + N + "&license_type=all-cc&mature=false";
  const res = await fetch(url, { headers: { "User-Agent": "course-site/1.0" } });
  console.log("HTTP " + res.status);
  const data = await res.json();
  console.log("total:", data.result_count);
  for (const r of (data.results || []).slice(0, N)) {
    console.log(`- [${r.id}] ${(r.title || "").slice(0, 70)}`);
    console.log(`  作者：${r.creator || "?"}（${r.source || ""}）  授权：${r.license} ${r.license_version || ""}`);
    console.log(`  ${r.url}`);
  }
}
main().catch((e) => console.log("失败：" + e.message));
