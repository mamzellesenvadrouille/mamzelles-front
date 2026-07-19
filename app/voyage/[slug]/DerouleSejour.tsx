// app/voyage/[slug]/DerouleSejour.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DerouleSejour.tsx
//
// Le déroulé du séjour, propre à ce carnet (pas partagé entre destinations).
// Le client peut ajouter ses propres notes/mémento, sauvegardées côté
// serveur, partagées entre tous ses appareils.
"use client";

import { useState } from "react";
import type { DeroulePoint } from "@/lib/carnets";
import styles from "./carnet.module.css";

// Extrait un numéro de jour depuis un texte libre (ex: "Jour 3" → 3, "3" → 3).
// Si rien n'est trouvé, on le pousse à la fin plutôt que de planter le tri.
function extraireJour(texte: string): number {
  const m = texte.match(/\d+/);
  return m ? parseInt(m[0], 10) : Infinity;
}

// Convertit une heure libre ("23h30", "23:30", "9h") en minutes depuis minuit, pour le tri.
function extraireMinutes(texte: string): number {
  const m = texte.match(/(\d{1,2})\s*[h:]\s*(\d{0,2})/i);
  if (!m) return 0;
  const heures = parseInt(m[1], 10) || 0;
  const minutes = parseInt(m[2], 10) || 0;
  return heures * 60 + minutes;
}

function trierChronologiquement<T extends DeroulePoint>(points: T[]): T[] {
  return [...points].sort((a, b) => {
    const jourA = extraireJour(a.jour);
    const jourB = extraireJour(b.jour);
    if (jourA !== jourB) return jourA - jourB;
    return extraireMinutes(a.heure) - extraireMinutes(b.heure);
  });
}

async function sauvegarder(slug: string, derouleCustom: DeroulePoint[]) {
  try {
    await fetch("/api/carnet-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, progress: { derouleCustom } }),
    });
  } catch {
    // pas grave si la sauvegarde échoue ponctuellement
  }
}

export default function DerouleSejour({
  deroule,
  slug,
  derouleCustomInitial,
}: {
  deroule: DeroulePoint[];
  slug: string;
  derouleCustomInitial: DeroulePoint[];
}) {
  const [custom, setCustom] = useState(derouleCustomInitial);
  const [jour, setJour] = useState("");
  const [heure, setHeure] = useState("");
  const [action, setAction] = useState("");
  const [note, setNote] = useState("");

  function ajouter() {
    if (!action.trim()) return;
    const next = [...custom, { jour: jour.trim(), heure: heure.trim(), action: action.trim(), note: note.trim() }];
    setCustom(next);
    sauvegarder(slug, next);
    setJour("");
    setHeure("");
    setAction("");
    setNote("");
  }

  function supprimer(i: number) {
    const next = custom.filter((_, idx) => idx !== i);
    setCustom(next);
    sauvegarder(slug, next);
  }

  const inputStyle: React.CSSProperties = {
    height: 38,
    padding: "0 12px",
    fontSize: 13,
    borderRadius: 3,
    fontFamily: "Inter, sans-serif",
    border: "1px solid #e8e0d6",
    outline: "none",
    background: "#fff",
    boxSizing: "border-box",
  };

  const tousLesPoints = trierChronologiquement([
    ...deroule.map((p) => ({ ...p, estAjoutee: false, indexOrigine: -1 })),
    ...custom.map((p, idx) => ({ ...p, estAjoutee: true, indexOrigine: idx })),
  ]);

  return (
    <div>
      <div className={styles.dayList}>
        {tousLesPoints.map((point, i) => (
          <div
            className={styles.dayItem}
            key={i}
            style={point.estAjoutee ? { borderLeft: "2px dashed #d8cfc0", paddingLeft: 10 } : undefined}
          >
            <div className={styles.time}>
              {point.jour}
              {point.jour && point.heure ? " · " : ""}
              {point.heure}
            </div>
            <div className={styles.desc} style={{ flex: 1 }}>
              <strong>{point.action}</strong>
              <span>{point.note}</span>
              {point.estAjoutee && <div style={{ fontSize: 10.5, color: "#c8956c", marginTop: 4 }}>Ajouté par vous</div>}
            </div>
            {point.estAjoutee && (
              <button
                onClick={() => supprimer(point.indexOrigine)}
                style={{ background: "none", border: "none", color: "#c0392b", cursor: "pointer", fontSize: 13 }}
                title="Retirer"
              >
                ✕
              </button>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        <div style={{ fontSize: 11, color: "#8a8074", marginBottom: 8, fontFamily: "Inter, sans-serif" }}>
          Ajouter une note personnelle à votre mémento
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
          <input placeholder="Jour" value={jour} onChange={(e) => setJour(e.target.value)} style={{ ...inputStyle, width: 90 }} />
          <input placeholder="Heure" value={heure} onChange={(e) => setHeure(e.target.value)} style={{ ...inputStyle, width: 80 }} />
          <input
            placeholder="Action"
            value={action}
            onChange={(e) => setAction(e.target.value)}
            style={{ ...inputStyle, flex: 1, minWidth: 140 }}
          />
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <input
            placeholder="Note (optionnel)"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && ajouter()}
            style={{ ...inputStyle, flex: 1 }}
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
    </div>
  );
}
