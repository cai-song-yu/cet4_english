/* 读图片尺寸：node tools/imgsize.js <文件或目录>
   目录模式下打印每张图的尺寸，并标出可疑的占位图（<20KB 或 <300px） */
const fs = require("fs");
const path = require("path");

function jpeg(buf) {
  let i = 2;
  while (i < buf.length - 9) {
    if (buf[i] !== 0xff) { i++; continue; }
    const m = buf[i + 1];
    if (m >= 0xc0 && m <= 0xcf && m !== 0xc4 && m !== 0xc8 && m !== 0xcc) {
      return { h: buf.readUInt16BE(i + 5), w: buf.readUInt16BE(i + 7) };
    }
    i += 2 + buf.readUInt16BE(i + 2);
  }
  return null;
}
function png(buf) {
  return buf.length < 24 ? null : { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
}
function sizeOf(file) {
  const b = fs.readFileSync(file);
  const dim = b[0] === 0x89 ? png(b) : jpeg(b);
  return { kb: Math.round(b.length / 1024), dim };
}

const target = process.argv[2];
const files = fs.existsSync(target) && fs.statSync(target).isDirectory()
  ? fs.readdirSync(target).filter((f) => /\.(jpe?g|png)$/i.test(f)).map((f) => path.join(target, f))
  : [target];

let bad = 0;
for (const f of files) {
  const { kb, dim } = sizeOf(f);
  const ok = kb >= 20 && dim && dim.w >= 300 && dim.h >= 200;
  if (!ok) bad++;
  console.log(`${ok ? "✓" : "✗"} ${path.basename(f)}  ${kb}KB  ${dim ? dim.w + "x" + dim.h : "无法解析"}`);
}
console.log(`\n${files.length} 张，可疑 ${bad} 张`);
process.exit(bad ? 1 : 0);
