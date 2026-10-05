/* 本地增强服务接口自测：node tools/api-test.js [base=http://127.0.0.1:8777]
   覆盖 ping / tts / translate / define / word-audio，打印耗时与关键字段 */
const BASE = process.argv[2] || "http://127.0.0.1:8777";

async function timed(name, fn) {
  const t0 = Date.now();
  try {
    const r = await fn();
    console.log(`✓ ${name}  ${Date.now() - t0}ms`);
    return r;
  } catch (e) {
    console.log(`✗ ${name}  ${Date.now() - t0}ms  ${e.message}`);
    return null;
  }
}

async function main() {
  await timed("GET /api/ping", async () => {
    const r = await fetch(BASE + "/api/ping");
    const j = await r.json();
    console.log("   ", JSON.stringify(j));
    if (!j.ok) throw new Error("ping failed");
    return j;
  });

  await timed("GET /api/tts（整句，真人音色）", async () => {
    const r = await fetch(BASE + "/api/tts?text=" + encodeURIComponent("A simple question is better than a silent mistake.") + "&voice=Chloe&style=native");
    const b = Buffer.from(await r.arrayBuffer());
    console.log("    HTTP", r.status, r.headers.get("x-cache"), (b.length / 1024).toFixed(0) + "KB", b.slice(0, 2).toString("hex"));
    if (r.status !== 200 || b.length < 2000) throw new Error("tts failed");
  });

  await timed("GET /api/tts（二次命中缓存）", async () => {
    const r = await fetch(BASE + "/api/tts?text=" + encodeURIComponent("A simple question is better than a silent mistake.") + "&voice=Chloe&style=native");
    const b = Buffer.from(await r.arrayBuffer());
    console.log("    HTTP", r.status, r.headers.get("x-cache"), (b.length / 1024).toFixed(0) + "KB");
    if (r.headers.get("x-cache") !== "hit") throw new Error("应命中缓存");
  });

  await timed("POST /api/translate（英译中）", async () => {
    const r = await fetch(BASE + "/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "By the time we finished, the garden looked bright and new, and I could not remember why I had stayed at home.", to: "zh" })
    });
    const j = await r.json();
    console.log("   ", JSON.stringify(j));
    if (!j.ok || !j.text) throw new Error("translate failed");
    return j;
  });

  await timed("POST /api/translate（中译英）", async () => {
    const r = await fetch(BASE + "/api/translate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: "在说不之前，先问问自己可能会发现什么。", to: "en" })
    });
    const j = await r.json();
    console.log("   ", JSON.stringify(j));
    if (!j.ok || !j.text) throw new Error("translate failed");
    return j;
  });

  await timed("GET /api/define（词）", async () => {
    const r = await fetch(BASE + "/api/define?word=hesitate");
    const j = await r.json();
    console.log("   ", JSON.stringify(j));
    if (!j.ok || !j.entry) throw new Error("define failed");
    return j;
  });

  await timed("GET /api/define（短语）", async () => {
    const r = await fetch(BASE + "/api/define?word=" + encodeURIComponent("turn down"));
    const j = await r.json();
    console.log("   ", JSON.stringify(j));
    if (!j.ok || !j.entry) throw new Error("define failed");
    return j;
  });

  await timed("GET /api/word-audio（未预生成时应 404）", async () => {
    const r = await fetch(BASE + "/api/word-audio?w=hesitate");
    console.log("    HTTP", r.status);
    return null;
  });
}

main().catch((e) => {
  console.log("自测失败：" + e.message);
  process.exit(1);
});
