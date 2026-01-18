import React from "react";

export default function PostCard({ post, onOpen }) {
  return (
    <article className="card" onClick={() => onOpen(post.id)} role="button" tabIndex={0}>
      <div
        className="cover"
        style={{ backgroundImage: `url(${post.cover})` }}
        aria-hidden="true"
      />
      <div className="cardBody">
        <h2 className="cardTitle">{post.title}</h2>
        <p className="cardExcerpt">{post.excerpt}</p>

        <div className="meta">
          <span>
            {post.author?.name} · {post.author?.role}
          </span>
          <span>·</span>
          <span>{new Date(post.createdAt).toLocaleDateString("de-DE")}</span>
          <span>·</span>
          <span>{post.readingMinutes} Min</span>
        </div>

        <div className="tags">
          {post.tags.map((t) => (
            <span key={t} className="tag">#{t}</span>
          ))}
        </div>
      </div>
    </article>
  );
}
