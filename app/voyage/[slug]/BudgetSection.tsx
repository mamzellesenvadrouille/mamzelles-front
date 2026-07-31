// app/voyage/[slug]/BudgetSection.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/BudgetSection.tsx
//
// Affiche le budget saisi par l'agence (postes qu'elle maîtrise : vols,
// activités, visites...) + permet au client d'ajouter ses propres lignes
// (ex : son estimation perso de restaurants). Sauvegardé côté serveur,
// partagé entre tous ses appareils.
"use client";

import { useState } from "react";
import type { BudgetLigne } from "@/lib/carnets";
import styles from "./carnet.module.css";

async function sauvegarder(slug: string, budgetCustom: BudgetLigne[]) {
  try {
    await fetch("/api/carnet-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, progress: { budgetCustom } }),
    });
  } catch {
    // pas grave si la sauvegarde échoue ponctuellement
  }
}

export default function BudgetSection({
  budget,
  slug,
  budgetCustomInitial,
}: {
  budget: BudgetLigne[];
  slug: string;
  budgetCustomInitial: BudgetLigne[];
}) {
  const [custom, setCustom] = useState<BudgetLigne[]>(budgetCustomInitial);
  const [nPoste, setNPoste] = useState("");
  const [nMontant, setNMontant] = useState("");

  function ajouter() {
    const montant = parseFloat(nMontant.replace(",", "."));
    if (!nPoste.trim() || !montant || montant <= 0) return;
    const next = [...custom, { poste: nPoste.trim(), montant: Math.round(montant) }];
    setCustom(next);
    sauvegarder(slug, next);
    setNPoste("");
    setNMontant("");
  }

  function supprimer(i: number) {
    const next = custom.filter((_, idx) => idx !== i);
    setCustom(next);
    sauvegarder(slug, next);
  }

  const toutesLesLignes = [...budget.map((l) => ({ ...l, ajoutee: false })), ...custom.map((l) => ({ ...l, ajoutee: true }))];
  const total = toutesLesLignes.reduce((s, l) => s + l.montant, 0);

  return (
    <div>
      <div className={styles.budgetList}>
        {toutesLesLignes.map((ligne, i) => {
          const pct = total > 0 ? Math.round((ligne.montant / total) * 100) : 0;
          const indexCustom = ligne.ajoutee ? i - budget.length : -1;
          return (
            <div className={styles.budgetRow} key={i}>
              <div className={styles.top}>
                <span className={styles.label}>
                  {ligne.poste}
                  {ligne.ajoutee && (
                    <span style={{ fontSize: 10.5, color: "#c8956c", fontStyle: "italic", marginLeft: 8 }}>
                      Ajouté par vous
                    </span>
                  )}
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <span className={styles.amount}>{ligne.montant.toLocaleString("fr-FR")} €</span>
                  {ligne.ajoutee && (
                    <button
                      onClick={() => supprimer(indexCustom)}
                      style={{ background: "none", border: "none", color: "#c0392b", cursor: "pointer", fontSize: 13 }}
                      title="Retirer"
                    >
                      ✕
                    </button>
                  )}
                </span>
              </div>
              <div className={styles.budgetTrack} style={{ height: 16, borderRadius: 8, position: "relative" }}>
                <div
                  className={styles.budgetFill}
                  style={{ width: `${pct}%`, borderRadius: 8 }}
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className={styles.budgetTotal}>
        <span className={styles.label}>Total</span>
        <span className={styles.amount}>{total.toLocaleString("fr-FR")} €</span>
      </div>

      <div style={{ marginTop: 24, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Dépenses (ex : Restaurants)"
          value={nPoste}
          onChange={(e) => setNPoste(e.target.value)}
          style={{
            flex: 1,
            minWidth: 140,
            height: 38,
            padding: "0 12px",
            fontSize: 13,
            borderRadius: 3,
            fontFamily: "Inter, sans-serif",
            border: "1px solid #e8e0d6",
            outline: "none",
            background: "#fff",
            boxSizing: "border-box",
          }}
        />
        <input
          type="text"
          inputMode="decimal"
          placeholder="Montant (€)"
          value={nMontant}
          onChange={(e) => setNMontant(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ajouter()}
          style={{
            width: 110,
            height: 38,
            padding: "0 12px",
            fontSize: 13,
            borderRadius: 3,
            fontFamily: "Inter, sans-serif",
            border: "1px solid #e8e0d6",
            outline: "none",
            background: "#fff",
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={ajouter}
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#fff",
            background: "#c8956c",
            border: "none",
            height: 38,
            padding: "0 12px",
            margin: 0,
            borderRadius: 3,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxSizing: "border-box",
            WebkitAppearance: "none",
            appearance: "none",
            lineHeight: "normal",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}
