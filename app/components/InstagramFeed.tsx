// app/components/InstagramFeed.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/components/InstagramFeed.tsx
//
// Affiche une grille des derniers posts Instagram, dans le style du site
// (mêmes coins arrondis, mêmes couleurs que le reste).

"use client";

import { useEffect, useState } from "react";

interface InstagramPost {
  id: string;
  caption: string;
  mediaType: string;
  imageUrl: string;
  permalink: string;
  timestamp: string;
}

export default function InstagramFeed() {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    fetch("/api/instagram-feed")
      .then((r) => r.json())
      .then((data) => {
        if (data.posts) {
          setPosts(data.posts);
        } else {
          setErreur(true);
        }
      })
      .catch(() => setErreur(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "40px 0", fontFamily: "Arial, sans-serif", color: "#888", fontSize: 13 }}>
        Chargement du feed Instagram...
      </div>
    );
  }

  if (erreur || posts.length === 0) {
    return null; // on masque simplement le bloc plutôt que d'afficher une erreur moche
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
        gap: 12,
        maxWidth: 1000,
        margin: "0 auto",
      }}
    >
      {posts.slice(0, 9).map((post) => (
        <a
          key={post.id}
          href={post.permalink}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            position: "relative",
            display: "block",
            aspectRatio: "1 / 1",
            borderRadius: 6,
            overflow: "hidden",
            textDecoration: "none",
          }}
        >
          <img
            src={post.imageUrl}
            alt={post.caption.slice(0, 60) || "Post Instagram MamZelles en Vadrouille"}
            loading="lazy"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
              transition: "transform .3s",
            }}
          />
        </a>
      ))}
    </div>
  );
}
