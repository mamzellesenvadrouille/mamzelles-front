// app/voyage/[slug]/ConvertisseurDevise.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ConvertisseurDevise.tsx
//
// Petit convertisseur EUR → devise locale, taux en temps réel via l'API
// gratuite Frankfurter (pas de clé nécessaire, comme Open-Meteo pour la météo).
// N'est affiché par la page appelante que si la destination a une devise
// différente de l'euro renseignée.
"use client";

import { useEffect, useState } from "react";

export default function ConvertisseurDevise({ devise }: { devise: string }) {
  const [taux, setTaux] = useState<number | null>(null);
  const [erreur, setErreur] = useState(false);
  const [montant, setMontant] = useState("100");

  useEffect(() => {
    let annule = false;
    fetch(`https://api.frankfurter.dev/v1/latest?base=EUR&symbols=${devise}`)
      .then((res) => res.json())
      .then((data) => {
        if (annule) return;
        const t = data?.rates?.[devise];
        if (typeof t === "number") setTaux(t);
        else setErreur(true);
      })
      .catch(() => !annule && setErreur(true));
    return () => {
      annule = true;
    };
  }, [devise]);

  if (erreur) return null;

  const montantNum = parseFloat(montant.replace(",", ".")) || 0;
  const converti = taux ? montantNum * taux : null;

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
        {taux === null ? "…" : converti!.toLocaleString("fr-FR", { maximumFractionDigits: 2 })} {devise}
      </div>
    </div>
  );
}
