/* ============================================================
   朗读音频完整性校验
   用法：node tools/check-audio.js
   检查：
     1. manifest.js 能被求值，window.AUDIO_MANIFEST 是对象
     2. 每篇已入库文章：有清单条目 ⇔ 整篇段落都有 mp3
     3. 每个 mp3 文件存在、非空、带 MPEG 帧同步头（FF Fx）
     4. 清单段数与文章正文段数一致（文章改过后音频要重做）
     5. 音色轮换符合约定：单数篇 Chloe/native、双数篇 Mia/british
   任何一条不满足退出码 1（"缺音频"只是提示，不算失败，
   因为可以先入库文章、随后补音频；但 --strict 时也判失败）。
   ============================================================ */
const fs = require("fs");
const path = require("path");
const vm = require("vm");
const { loadMain } = require("./validate");

const ROOT = path.join(__dirname, "..");
const strict = process.argv.includes("--strict");

function loadManifest() {
  const p = path.join(ROOT, "assets", "audio", "manifest.js");
  if (!fs.existsSync(p)) return null;
  const ctx = { window: {} };
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: "manifest.js" });
  return ctx.window.AUDIO_MANIFEST;
}

function mp3Ok(file) {
  const buf = fs.readFileSync(file);
  if (buf.length < 4096) return { ok: false, why: "文件过小 " + buf.length + "B" };
  /* 逐字节找第一个帧同步头 11111111 111xxxxx */
  let hit = -1;
  for (let i = 0; i < Math.min(buf.length - 1, 8192); i++) {
    if (buf[i] === 0xff && (buf[i + 1] & 0xe0) === 0xe0) { hit = i; break; }
  }
  if (hit < 0) return { ok: false, why: "找不到 MPEG 帧同步头" };
  return { ok: true, size: buf.length, offset: hit };
}

function main() {
  const A = loadMain().sort((a, b) => a.id - b.id);
  const M = loadManifest();
  if (!M) {
    console.log("✗ assets/audio/manifest.js 缺失或无法求值");
    process.exit(1);
  }
  let fail = 0, missing = 0, totalFiles = 0, totalBytes = 0;

  for (const a of A) {
    const m = M[String(a.id)];
    const nBody = a.body.length;
    if (!m) {
      missing++;
      console.log(`○ #${a.id} ${a.title}：未生成朗读音频（${nBody} 段待做）`);
      continue;
    }
    const errs = [];
    if (m.n !== nBody) errs.push(`清单段数 ${m.n} ≠ 正文段数 ${nBody}（正文改过要重做音频）`);
    if (!Array.isArray(m.files) || m.files.length !== nBody) errs.push(`files 长度 ${m.files ? m.files.length : 0} ≠ ${nBody}`);
    const wantVoice = a.id % 2 === 1 ? "Chloe" : "Mia";
    const wantStyle = a.id % 2 === 1 ? "native" : "british";
    if (m.voice !== wantVoice) errs.push(`音色 ${m.voice} ≠ 约定 ${wantVoice}（单数篇 Chloe/native、双数篇 Mia/british）`);
    if (m.style !== wantStyle) errs.push(`风格 ${m.style} ≠ 约定 ${wantStyle}`);
    (m.files || []).forEach((f, i) => {
      const full = path.join(ROOT, f);
      if (!fs.existsSync(full)) return errs.push(`缺文件 ${f}`);
      const r = mp3Ok(full);
      if (!r.ok) return errs.push(`p${i + 1} ${f}：${r.why}`);
      totalFiles++;
      totalBytes += r.size;
    });
    if (errs.length) {
      fail++;
      console.log(`✗ #${a.id} ${a.title}`);
      errs.forEach((e) => console.log("   · " + e));
    } else {
      console.log(`✓ #${a.id} ${a.title}  (${nBody} 段 · ${m.voice}/${m.style})`);
    }
  }

  const done = A.length - missing;
  console.log(`\n文章 ${A.length} 篇：有音频 ${done} 篇 / 待做 ${missing} 篇；mp3 ${totalFiles} 个、共 ${(totalBytes / 1048576).toFixed(1)} MB`);
  if (fail) {
    console.log(`失败 ${fail} 篇`);
    process.exit(1);
  }
  if (missing && strict) {
    console.log("--strict：仍有文章缺音频");
    process.exit(1);
  }
  console.log("音频完整性：通过");
}

main();
