/* 极简静态服务：node tools/serve.js [端口=8777]
   仅供本地预览与浏览器冒烟验证使用。 */
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..");
const PORT = +(process.argv[2] || 8777);
const TYPES = {
  ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8", ".json": "application/json; charset=utf-8",
  ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".png": "image/png", ".svg": "image/svg+xml",
  ".mp3": "audio/mpeg", ".ico": "image/x-icon", ".md": "text/plain; charset=utf-8"
};

http.createServer((req, res) => {
  let p = decodeURIComponent((req.url || "/").split("?")[0]);
  if (p === "/") p = "/index.html";
  const file = path.join(ROOT, p.replace(/\//g, path.sep));
  if (!file.startsWith(ROOT)) {
    res.writeHead(403);
    return res.end("forbidden");
  }
  fs.readFile(file, (err, buf) => {
    if (err) {
      res.writeHead(404);
      return res.end("not found");
    }
    res.writeHead(200, { "Content-Type": TYPES[path.extname(file).toLowerCase()] || "application/octet-stream", "Cache-Control": "no-store" });
    res.end(buf);
  });
}).listen(PORT, "127.0.0.1", () => console.log("http://127.0.0.1:" + PORT));
