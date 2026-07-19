// app/voyage/[slug]/CheckList.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/CheckList.tsx
//
// Checklist cochable dont la progression est sauvegardée côté serveur
// (partagée entre tous les appareils du client), avec possibilité pour le
// client d'ajouter ses propres lignes.
"use client";

import { useState } from "react";
import type { ChecklistItem } from "@/lib/carnets";
import styles from "./carnet.module.css";

interface ProgressListe {
  coche: boolean[];
  custom: { label: string; coche: boolean }[];
}

async function sauvegarder(slug: string, listeType: string, progress: ProgressListe) {
  try {
    await fetch("/api/carnet-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, progress: { [listeType]: progress } }),
    });
  } catch {
    // pas grave si la sauvegarde échoue ponctuellement, l'affichage reste correct pour la session en cours
  }
}

export default function CheckList({
  items,
  slug,
  listeType,
  progressInitiale,
}: {
  items: ChecklistItem[];
  storageKey?: string; // conservé pour compatibilité, plus utilisé
  slug: string;
  listeType: "checklistValise" | "checklistVoyage" | "reservations";
  progressInitiale: ProgressListe;
}) {
  const [coches, setCoches] = useState<boolean[]>(
    progressInitiale.coche.length === items.length ? progressInitiale.coche : items.map((i) => i.coche)
  );
  const [custom, setCustom] = useState<{ label: string; coche: boolean }[]>(progressInitiale.custom ?? []);
  const [nouveauLabel, setNouveauLabel] = useState("");

  function sync(nextCoches: boolean[], nextCustom: typeof custom) {
    sauvegarder(slug, listeType, { coche: nextCoches, custom: nextCustom });
  }

  function toggle(i: number) {
    setCoches((prev) => {
      const next = prev.map((v, idx) => (idx === i ? !v : v));
      sync(next, custom);
      return next;
    });
  }

  function toggleCustom(i: number) {
    setCustom((prev) => {
      const next = prev.map((c, idx) => (idx === i ? { ...c, coche: !c.coche } : c));
      sync(coches, next);
      return next;
    });
  }

  function ajouter() {
    if (!nouveauLabel.trim()) return;
    const next = [...custom, { label: nouveauLabel.trim(), coche: false }];
    setCustom(next);
    sync(coches, next);
    setNouveauLabel("");
  }

  function supprimerCustom(i: number) {
    const next = custom.filter((_, idx) => idx !== i);
    setCustom(next);
    sync(coches, next);
  }

  return (
    <div className={styles.checkList}>
      {items.map((item, i) => (
        <div
          key={`base-${i}`}
          className={`${styles.checkItem} ${coches[i] ? styles.checked : ""}`}
          onClick={() => toggle(i)}
        >
          <div className={styles.checkBox} />
          <div className={styles.checkLabel}>{item.label}</div>
        </div>
      ))}

      {custom.map((item, i) => (
        <div
          key={`custom-${i}`}
          className={`${styles.checkItem} ${item.coche ? styles.checked : ""}`}
          style={{ display: "flex", alignItems: "center" }}
        >
          <div onClick={() => toggleCustom(i)} style={{ display: "flex", alignItems: "center", gap: "var(--s3)", flex: 1, cursor: "pointer" }}>
            <div className={styles.checkBox} />
            <div className={styles.checkLabel}>{item.label}</div>
          </div>
          <button
            onClick={() => supprimerCustom(i)}
            style={{ background: "none", border: "none", color: "#c0392b", cursor: "pointer", fontSize: 13, padding: "0 4px" }}
            title="Retirer"
          >
            ✕
          </button>
        </div>
      ))}

      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <input
          type="text"
          placeholder="Ajouter un élément à votre liste..."
          value={nouveauLabel}
          onChange={(e) => setNouveauLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ajouter()}
          style={{
            flex: 1,
            padding: "8px 12px",
            fontSize: 13,
            borderRadius: 3,
            fontFamily: "Inter, sans-serif",
            border: "1px solid #e8e0d6",
            outline: "none",
          }}
        />
        <button
          onClick={ajouter}
          style={{
            fontSize: 12.5,
            fontWeight: 600,
            color: "#fff",
            background: "#c8956c",
            border: "none",
            padding: "0 18px",
            borderRadius: 3,
            cursor: "pointer",
          }}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}
