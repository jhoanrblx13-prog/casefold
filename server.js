import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json());
app.use(express.static(path.join(root, "public")));
app.post("/api", (req, res) => {
  const text = String(req.body.text || "");
  const title = text.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase());
  res.json({ upper: text.toUpperCase(), lower: text.toLowerCase(), title });
});
app.listen(process.env.PORT || 8123);
