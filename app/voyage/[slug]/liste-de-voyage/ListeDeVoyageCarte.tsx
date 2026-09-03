// app/voyage/[slug]/liste-de-voyage/ListeDeVoyageCarte.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/ListeDeVoyageCarte.tsx
//
// Le montant tapé ici n'est jamais envoyé nulle part : c'est juste un repère
// pour l'invité avant qu'il clique. Le vrai paiement se fait entièrement sur
// OnParticipe, MamZelles n'a aucune connexion technique avec cette plateforme.
"use client";

import { useState } from "react";
import type { ElementListeDeVoyage } from "@/lib/carnets";

const GOLD = "#c8956c";
const DARK = "#1a1512";
const LINE = "#e6ddd1";

export default function ListeDeVoyageCarte({
  item,
  onParticipeUrl,
}: {
  item: ElementListeDeVoyage;
  onParticipeUrl: string;
}) {
  const [montant, setMontant] = useState("");

  return (
    <div
      style={{
        background: "#fffdfa",
        border: `1px solid ${LINE}`,
        borderRadius: 4,
        padding: "18px 20px",
        marginBottom: 12,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
        <div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 500, color: DARK, marginBottom: 4 }}>
            {item.nom}
          </h3>
          {item.description && <div style={{ fontSize: 14, color: "#8a7f74" }}>{item.description}.</div>}
        </div>
        {item.prixIndicatif != null && (
          <div style={{ fontSize: 14, fontWeight: 600, color: DARK, whiteSpace: "nowrap", textAlign: "right" }}>
            {item.prixIndicatif} €
          </div>
        )}
      </div>

      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <input
          type="number"
          placeholder="Montant (€)"
          value={montant}
          onChange={(e) => setMontant(e.target.value)}
          style={{
            flex: 1,
            fontFamily: "Inter, sans-serif",
            fontSize: 14,
            padding: "9px 12px",
            border: `1px solid ${LINE}`,
            borderRadius: 4,
            background: "#f8f4ef",
            color: DARK,
            outline: "none",
          }}
        />
        <a
          href={onParticipeUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 8,
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            fontWeight: 600,
            letterSpacing: "0.01em",
            background: GOLD,
            color: "#fff",
            padding: "9px 18px 9px 14px",
            borderRadius: 24,
            whiteSpace: "nowrap",
            textDecoration: "none",
            boxShadow: "0 3px 10px rgba(200, 149, 108, 0.3)",
          }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
            <path
              d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7ZM12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
              stroke="#fff"
              strokeWidth={1.6}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Participer
        </a>
      </div>
    </div>
  );
}
