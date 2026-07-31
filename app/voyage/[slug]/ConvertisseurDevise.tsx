// app/voyage/[slug]/ConvertisseurDevise.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ConvertisseurDevise.tsx
//
// Petit convertisseur EUR → devise locale. Le taux est récupéré côté SERVEUR
// (dans page.tsx, via getTauxDevise) et transmis ici tout prêt — ce composant
// ne fait plus aucun appel réseau lui-même, juste un calcul en direct pendant
// que le client tape un montant. Ça évite tout souci de blocage réseau/CORS
// côté navigateur, qui causait l'affichage qui "apparaissait puis disparaissait".
"use client";

import { useState } from "react";

export default function ConvertisseurDevise({ devise, taux }: { devise: string; taux: number | null }) {
  const [montant, setMontant] = useState("100");

  if (taux === null) return null;

  const montantNum = parseFloat(montant.replace(",", ".")) || 0;
  const converti = montantNum * taux;

  return (
    <div
      style={{
        background: "#fff",
        border: "1px solid #e8e0d6",
        borderRadius: 10,
        padding: "16px 20px",
        display: "flex",
        alignItems: "center",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
        <input
          type="text"
          inputMode="decimal"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          style={{
            width: 80,
            height: 36,
            padding: "0 10px",
            fontSize: 14,
            fontFamily: "Inter, sans-serif",
            border: "1px solid #e8e0d6",
            borderRadius: 4,
            outline: "none",
            boxSizing: "border-box",
          }}
        />
        <span style={{ fontSize: 13, color: "#8a8074", fontFamily: "Inter, sans-serif" }}>EUR</span>
      </div>
      <span style={{ color: "#c8956c" }}>=</span>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontStyle: "italic", color: "#a8734c" }}>
        {converti.toLocaleString("fr-FR", { maximumFractionDigits: 2 })} {devise}
      </div>
    </div>
  );
}
