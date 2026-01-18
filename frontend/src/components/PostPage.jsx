import React from "react";

function renderMarkdownLike(text) {
  // Sehr einfacher "Markdown-like" Renderer:
  // - ### Überschriften
  // - Listen mit "- "
  // - Leerzeilen -> Absatzabstand
  const lines = text.split("\n");
  const out = [];
  let list = [];

  const flushList = () => {
    if (list.length) {
      out.push(
        <ul key={`ul-${out.length}`} className="contentList">
          {list.map((li, idx) => (
            <li key={idx}>{li}</li>
          ))}
        </ul>
      );
      list = [];
    }
  };

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trimEnd();

    if (line.startsWith("- ")) {
      list.push(line.slice(2));
      continue;
    } else {
      flushList();
    }

    if (line.startsWith("### ")) {
      out.push(
        <h3 key={`h3-${i}`} className="contentH3">
          {line.slice(4)}
        </h3>
      );
      continue;
    }

    if (line.trim() === "") {
      out.push(<div key={`sp-${i}`} style={{ height: 10 }} />);
      continue;
    }

    out.push(
      <p key={`p-${i}`} className="contentP">
        {line}
      </p>
    );
  }

  flushList();
  return out;
}

export default function PostPage({ post, onBack }) {
  return (
    <div className="postPage">
      <button className="btn ghost" onClick={onBack}>
        ← Zurück
      </button>

      <div className="postHero" style={{ backgroundImage: `url(${post.cover})` }}>
        <div className="postHeroOverlay">
          <h1 className="postTitle">{post.title}</h1>
          <div className="postMeta">
            <span>
              {post.author?.name} · {post.author?.role}
            </span>
            <span>·</span>
            <span>{new Date(post.createdAt).toLocaleDateString("de-DE")}</span>
            <span>·</span>
            <span>{post.readingMinutes} Min Lesezeit</span>
          </div>
          <div className="tags">
            {post.tags.map((t) => (
              <span key={t} className="tag solid">#{t}</span>
            ))}
          </div>
        </div>
      </div>

      <div className="postContent">{renderMarkdownLike(post.content)}</div>
    </div>
  );
}
