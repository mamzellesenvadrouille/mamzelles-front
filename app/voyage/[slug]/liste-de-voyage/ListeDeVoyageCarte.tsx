// app/voyage/[slug]/liste-de-voyage/ListeDeVoyageCarte.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/ListeDeVoyageCarte.tsx
//
// Le montant tapé ici n'est jamais envoyé nulle part : c'est juste un repère
// pour l'invité avant qu'il clique. Le vrai paiement se fait entièrement sur
// OnParticipe, MamZelles n'a aucune connexion technique avec cette plateforme,
// donc aucun montant réel collecté n'est connu ni affiché ici.
"use client";

import { useState } from "react";
import type { ElementListeDeVoyage } from "@/lib/carnets";

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
        border: "1px solid #e6ddd1",
        borderRadius: 4,
        padding: "18px 20px",
        marginBottom: 12,
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, marginBottom: 14 }}>
        <div>
          <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 500, color: "#1a1512", marginBottom: 4 }}>
            {item.nom}
          </h3>
          {item.description && <div style={{ fontSize: 14, color: "#8a7f74" }}>{item.description}</div>}
        </div>
        {item.prixIndicatif != null && (
          <div style={{ fontSize: 14, fontWeight: 600, color: "#1a1512", whiteSpace: "nowrap", textAlign: "right", marginTop: 5 }}>
            {item.prixIndicatif} €<span style={{ display: "block", fontSize: 11.5, fontWeight: 400, color: "#a89a8c" }}>prix indicatif</span>
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
            border: "1px solid #e6ddd1",
            borderRadius: 4,
            background: "#f8f4ef",
            color: "#1a1512",
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
            background: "#c8956c",
            color: "#fff",
            padding: "10px 18px",
            borderRadius: 4,
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          Participer
        </a>
      </div>
    </div>
  );
}
