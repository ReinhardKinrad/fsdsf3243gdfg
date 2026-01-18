import React, { useEffect, useMemo, useState } from "react";
import Header from "./components/Header.jsx";
import PostCard from "./components/PostCard.jsx";
import PostPage from "./components/PostPage.jsx";
import { fetchPost, fetchPosts } from "./api.js";

export default function App() {
  const [query, setQuery] = useState("");
  const [tag, setTag] = useState("");
  const [posts, setPosts] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [activePost, setActivePost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");

  const emptyStateText = useMemo(() => {
    if (loading) return "Posts werden geladen…";
    if (err) return err;
    if (!posts.length) return "Nichts gefunden. Versuch einen anderen Suchbegriff.";
    return "";
  }, [loading, err, posts]);

  async function loadList(q = query, t = tag) {
    setLoading(true);
    setErr("");
    try {
      const data = await fetchPosts({ query: q, tag: t });
      setPosts(data);
    } catch (e) {
      setErr("Liste konnte nicht geladen werden. Läuft das Backend?");
    } finally {
      setLoading(false);
    }
  }

  async function openPost(id) {
    setLoading(true);
    setErr("");
    setActiveId(id);
    try {
      const data = await fetchPost(id);
      setActivePost(data);
    } catch (e) {
      setErr("Post konnte nicht geladen werden.");
      setActiveId(null);
      setActivePost(null);
    } finally {
      setLoading(false);
    }
  }

  function reset() {
    setQuery("");
    setTag("");
    setActiveId(null);
    setActivePost(null);
  }

  useEffect(() => {
    loadList("", "");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Debounce für Suche
  useEffect(() => {
    const t = setTimeout(() => {
      if (!activeId) loadList(query, tag);
    }, 300);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, tag, activeId]);

  return (
    <div className="page">
      <Header query={query} setQuery={setQuery} tag={tag} setTag={setTag} onReset={reset} />

      <main className="main">
        {!activeId && (
          <>
            <div className="topLine">
              <h1 className="h1">Aktuelle Posts</h1>
              <div className="hint">Klick auf eine Karte, um den Artikel zu öffnen</div>
            </div>

            {emptyStateText ? (
              <div className="empty">{emptyStateText}</div>
            ) : (
              <div className="grid">
                {posts.map((p) => (
                  <PostCard key={p.id} post={p} onOpen={openPost} />
                ))}
              </div>
            )}
          </>
        )}

        {activeId && activePost && (
          <PostPage
            post={activePost}
            onBack={() => {
              setActiveId(null);
              setActivePost(null);
            }}
          />
        )}
      </main>

      <footer className="footer">
        <span>Simple Blog · React + Express · Docker</span>
      </footer>
    </div>
  );
}
