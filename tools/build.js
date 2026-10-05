/* ============================================================
   把 build/parts/*.json 里的新文章并入 assets/js/articles.js
   用法：
     node tools/build.js           校验并入库全部分片
     node tools/build.js --dry     只校验，不写入
   流程：校验（tools/validate.js，零错误才放行）→ 追加到 articles.js 末尾
        → 往返比对（写入后重新求值，与期望数据完全一致）→ 分片移到 build/done/
   ============================================================ */
const fs = require("fs");
const vm = require("vm");
const path = require("path");
const { loadMain, validateArticle } = require("./validate");

const ROOT = path.join(__dirname, "..");
const MAIN = path.join(ROOT, "assets", "js", "articles.js");
const PARTS = path.join(ROOT, "build", "parts");
const DONE = path.join(ROOT, "build", "done");

/* ---------- JS 字面量输出（与 articles.js 现有风格一致） ---------- */
function esc(s) {
  return String(s).replace(/\\/g, "\\\\").replace(/'/g, "\\'");
}
function emit(v, ind) {
  const pad = " ".repeat(ind);
  const pad2 = " ".repeat(ind + 2);
  if (v === null) return "null";
  if (typeof v === "number" || typeof v === "boolean") return String(v);
  if (typeof v === "string") return "'" + esc(v) + "'";
  if (Array.isArray(v)) {
    if (!v.length) return "[]";
    return "[\n" + v.map((x) => pad2 + emit(x, ind + 2)).join(",\n") + "\n" + pad + "]";
  }
  if (typeof v === "object") {
    const keys = Object.keys(v);
    if (!keys.length) return "{}";
    return "{\n" + keys.map((k) => pad2 + k + ": " + emit(v[k], ind + 2)).join(",\n") + "\n" + pad + "}";
  }
  throw new Error("无法序列化：" + typeof v);
}

function deepEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

function main() {
  const dry = process.argv.includes("--dry");
  if (!fs.existsSync(PARTS)) {
    console.log("build/parts/ 不存在，没有待入库分片");
    return;
  }
  const files = fs.readdirSync(PARTS).filter((f) => f.endsWith(".json")).sort();
  if (!files.length) {
    console.log("build/parts/ 为空，没有待入库分片");
    return;
  }

  /* 1. 读取全部分片 */
  const pending = [];
  for (const f of files) {
    const raw = JSON.parse(fs.readFileSync(path.join(PARTS, f), "utf8"));
    const arr = Array.isArray(raw) ? raw : [raw];
    arr.forEach((a) => pending.push({ a, file: f }));
    console.log(`读入 ${f}：${arr.length} 篇`);
  }

  /* 2. 校验（上下文 = 已入库 + 全部分片，按 id 排序） */
  const existing = loadMain();
  const all = [...existing, ...pending.map((p) => p.a)].sort((x, y) => x.id - y.id);
  let fail = 0;
  for (const p of pending) {
    const prev = all.filter((x) => x.id < p.a.id);
    const r = validateArticle(p.a, prev);
    const tag = `#${p.a.id} ${p.a.title || "?"} (${p.file})`;
    if (r.errs.length) {
      fail++;
      console.log("✗ " + tag);
      r.errs.forEach((e) => console.log("   · " + e));
    } else {
      console.log("✓ " + tag);
    }
    r.warn.forEach((w) => console.log("   ⚠ " + w));
  }
  if (fail) {
    console.log(`\n${fail} 篇未通过校验，拒绝入库`);
    process.exit(1);
  }

  /* 3. 顺序与重复检查 */
  const ids = pending.map((p) => p.a.id);
  const dupInParts = ids.filter((x, i) => ids.indexOf(x) !== i);
  if (dupInParts.length) {
    console.log("分片里有重复 id：" + [...new Set(dupInParts)].join(", "));
    process.exit(1);
  }
  const dupInMain = ids.filter((x) => existing.some((e) => e.id === x));
  if (dupInMain.length) {
    console.log("这些 id 已入库：" + dupInMain.join(", "));
    process.exit(1);
  }
  const nextId = Math.max(0, ...existing.map((e) => e.id)) + 1;
  for (const p of pending) {
    if (p.a.id !== nextId + pending.indexOf(p)) {
      console.log(`id 应连续：期望 ${nextId + pending.indexOf(p)}，实际 ${p.a.id}`);
      process.exit(1);
    }
  }

  /* 4. 追加写入 */
  const expected = all;
  if (dry) {
    console.log(`\n[dry] 将入库 ${pending.length} 篇（#${ids[0]}–#${ids[ids.length - 1]}），未写入`);
    return;
  }
  const src = fs.readFileSync(MAIN, "utf8");
  const cut = src.lastIndexOf("\n];");
  if (cut < 0) {
    console.log("articles.js 结尾异常，找不到 \n];");
    process.exit(1);
  }
  const block = pending.map((p) => emit(p.a, 2)).join(",\n");
  const out = src.slice(0, cut) + ",\n" + block + src.slice(cut);
  fs.writeFileSync(MAIN, out, "utf8");

  /* 5. 往返比对 */
  const after = loadMain();
  if (!deepEqual(after, expected)) {
    console.log("⚠ 写入后数据与期望不一致！请立即 git checkout 恢复后反馈");
    process.exit(1);
  }
  console.log(`\n已入库 ${pending.length} 篇（#${ids[0]}–#${ids[ids.length - 1]}），共 ${after.length} 篇；往返比对一致`);

  /* 6. 分片归档 */
  fs.mkdirSync(DONE, { recursive: true });
  for (const p of pending) {
    const src2 = path.join(PARTS, p.file);
    if (fs.existsSync(src2)) fs.renameSync(src2, path.join(DONE, p.file));
  }
  console.log("分片已归档到 build/done/");
}

main();
