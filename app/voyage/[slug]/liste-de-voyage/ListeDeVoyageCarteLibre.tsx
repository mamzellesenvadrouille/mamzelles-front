// app/voyage/[slug]/liste-de-voyage/ListeDeVoyageCarteLibre.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/ListeDeVoyageCarteLibre.tsx
"use client";

import { useState } from "react";

const GOLD = "#c8956c";
const DARK = "#1a1512";
const LINE = "#e6ddd1";

export default function ListeDeVoyageCarteLibre({
  slug,
  onParticipeUrl,
  montantReuniInitial,
}: {
  slug: string;
  onParticipeUrl: string;
  montantReuniInitial: number;
}) {
  const [montant, setMontant] = useState("");
  const [prenom, setPrenom] = useState("");
  const [prenomManquant, setPrenomManquant] = useState(false);
  const [montantReuni, setMontantReuni] = useState(montantReuniInitial);
  const [enCours, setEnCours] = useState(false);

  async function participer() {
    if (!prenom.trim()) {
      setPrenomManquant(true);
      return;
    }
    const valeur = Number(montant);
    const nouvelOnglet = window.open("", "_blank", "noopener,noreferrer");

    if (valeur > 0) {
      setEnCours(true);
      try {
        await fetch("/api/liste-de-voyage-contribution", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ slug, elementId: "libre", montant: valeur, prenom: prenom.trim() || undefined }),
        });
        setMontantReuni((prev) => prev + valeur);
        setMontant("");
        setPrenom("");
      } catch {
        // pas grave
      } finally {
        setEnCours(false);
      }
    }

    if (nouvelOnglet) nouvelOnglet.location.href = onParticipeUrl;
    else window.open(onParticipeUrl, "_blank", "noopener,noreferrer");
  }

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #fff 0%, #f8f4ef 100%)",
        border: `1px solid ${LINE}`,
        borderRadius: 4,
        padding: "18px 20px",
        marginBottom: 12,
      }}
    >
      <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 500, color: DARK, marginBottom: 4 }}>
        Un montant libre
      </h3>
      <div style={{ fontSize: 14, color: "#8a7f74", marginBottom: 14 }}>Pour rendre notre voyage encore plus beau.</div>

      <div style={{ fontSize: 13.5, color: DARK, marginBottom: 12 }}>
        <strong>{montantReuni} €</strong> déjà réunis
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <input
          type="text"
          placeholder="Prénom / Nom"
          value={prenom}
          onChange={(e) => {
            setPrenom(e.target.value);
            if (prenomManquant) setPrenomManquant(false);
          }}
          style={{
            flex: 1,
            height: 36,
            boxSizing: "border-box",
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            padding: "0 12px",
            border: prenomManquant ? `1.5px solid ${GOLD}` : `1px solid ${LINE}`,
            borderRadius: 4,
            background: prenomManquant ? "#fdf6ee" : "#f8f4ef",
            color: DARK,
            outline: "none",
          }}
        />
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          type="number"
          placeholder="Montant (€)"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          style={{
            flex: 1,
            height: 36,
            boxSizing: "border-box",
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            padding: "0 12px",
            border: `1px solid ${LINE}`,
            borderRadius: 4,
            background: "#f8f4ef",
            color: DARK,
            outline: "none",
          }}
        />
        <button
          onClick={participer}
          disabled={enCours}
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 6,
            height: 36,
            boxSizing: "border-box",
            fontFamily: "Inter, sans-serif",
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: "0.01em",
            background: GOLD,
            color: "#fff",
            border: "none",
            padding: "0 14px 0 11px",
            borderRadius: 20,
            whiteSpace: "nowrap",
            cursor: "pointer",
            boxShadow: "0 3px 10px rgba(200, 149, 108, 0.3)",
            opacity: enCours ? 0.7 : 1,
          }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7ZM12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
              stroke="#fff"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          {enCours ? "..." : "Participer"}
        </button>
      </div>
    </div>
  );
}
