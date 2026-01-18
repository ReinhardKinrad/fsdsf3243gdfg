const API_URL = import.meta.env.VITE_API_URL || "http://localhost:8080";

export async function fetchPosts({ query = "", tag = "" } = {}) {
  const url = new URL(`${API_URL}/posts`);
  if (query) url.searchParams.set("query", query);
  if (tag) url.searchParams.set("tag", tag);

  const res = await fetch(url);
  if (!res.ok) throw new Error("Posts konnten nicht geladen werden");
  return res.json();
}

export async function fetchPost(id) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  if (!res.ok) throw new Error("Post konnte nicht geladen werden");
  return res.json();
}
