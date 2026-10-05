/* 封面图下载：node tools/cover.js <id> <图片直链> "<Photo: 作者 / Pexels>"
   下载 → 校验是图片 → 压到宽 ≤1600 → 存 assets/covers/NNN.jpg */
const fs = require("fs");
const path = require("path");

const [, , id, url, credit] = process.argv;
if (!id || !url) {
  console.log("用法：node tools/cover.js <id> <url> [credit]");
  process.exit(1);
}

async function main() {
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0", Referer: "https://www.pexels.com/" } });
  if (!res.ok) {
    console.log("HTTP " + res.status);
    process.exit(1);
  }
  const type = res.headers.get("content-type") || "";
  const buf = Buffer.from(await res.arrayBuffer());
  const isJpg = buf[0] === 0xff && buf[1] === 0xd8;
  const isPng = buf[0] === 0x89 && buf[1] === 0x50;
  if (!isJpg && !isPng) {
    console.log("不是图片，content-type=" + type + "，前 16 字节=" + buf.slice(0, 16).toString("hex"));
    process.exit(1);
  }
  const out = path.join(__dirname, "..", "assets", "covers", String(id).padStart(3, "0") + (isPng ? ".png" : ".jpg"));
  fs.writeFileSync(out, buf);
  console.log("已保存 " + out + "  " + (buf.length / 1024).toFixed(0) + " KB  " + type);
  if (credit) console.log("coverCredit: " + credit);
}

main().catch((e) => {
  console.log("下载失败：" + e.message);
  process.exit(1);
});
