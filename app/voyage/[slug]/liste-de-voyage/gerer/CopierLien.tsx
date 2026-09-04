// app/voyage/[slug]/liste-de-voyage/gerer/CopierLien.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/gerer/CopierLien.tsx
"use client";

import { useState } from "react";

export default function CopierLien({ lien }: { lien: string }) {
  const [copie, setCopie] = useState(false);

  async function copier() {
    try {
      await navigator.clipboard.writeText(lien);
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    } catch {
      // pas grave si le presse-papier est indisponible
    }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 8,
        background: "#f8f4ef",
        border: "1px solid #e6ddd1",
        borderRadius: 24,
        padding: "4px 4px 4px 16px",
      }}
    >
      <div style={{ flex: 1, fontSize: 13, color: "#8a7f74", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "left" }}>
        {lien}
      </div>
      <button
        onClick={copier}
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          background: "#1a1512",
          color: "#fff",
          border: "none",
          padding: "8px 16px",
          borderRadius: 20,
          cursor: "pointer",
          whiteSpace: "nowrap",
        }}
      >
        {copie ? "Copié !" : "Copier"}
      </button>
    </div>
  );
}
