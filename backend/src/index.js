import express from "express";
import cors from "cors";
import { posts } from "./data.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => res.json({ ok: true }));

// GET /posts?query=...&tag=...
app.get("/posts", (req, res) => {
  const query = (req.query.query || "").toString().toLowerCase().trim();
  const tag = (req.query.tag || "").toString().toLowerCase().trim();

  let result = [...posts];

  if (tag) {
    result = result.filter((p) => p.tags.some((t) => t.toLowerCase() === tag));
  }
  if (query) {
    result = result.filter((p) => {
      const hay = `${p.title} ${p.excerpt} ${p.content} ${p.author?.name}`.toLowerCase();
      return hay.includes(query);
    });
  }

  // Liste ohne kompletten content
  res.json(
    result
      .map(({ content, ...rest }) => rest)
      .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1))
  );
});

app.get("/posts/:id", (req, res) => {
  const post = posts.find((p) => p.id === req.params.id);
  if (!post) return res.status(404).json({ message: "Nicht gefunden" });
  res.json(post);
});

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Backend läuft auf Port ${port}`);
});
