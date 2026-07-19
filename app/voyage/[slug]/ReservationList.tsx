// app/voyage/[slug]/ReservationList.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ReservationList.tsx
//
// L'état "réservé" (coché) est sauvegardé côté serveur, partagé entre tous
// les appareils du client. Le numéro de confirmation, lui, reste UNIQUEMENT
// dans le navigateur (localStorage) — jamais envoyé au serveur, donc jamais
// visible depuis l'admin. Le client peut aussi ajouter ses propres lignes.
"use client";

import { useState, useEffect } from "react";
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
    // pas grave si la sauvegarde échoue ponctuellement
  }
}

export default function ReservationList({
  items,
  storageKey,
  slug,
  listeType,
  progressInitiale,
}: {
  items: ChecklistItem[];
  storageKey: string; // clé localStorage pour les numéros de confirmation (privés, jamais envoyés au serveur)
  slug: string;
  listeType: "reservations";
  progressInitiale: ProgressListe;
}) {
  const [coches, setCoches] = useState<boolean[]>(
    progressInitiale.coche.length === items.length ? progressInitiale.coche : items.map(() => false)
  );
  const [custom, setCustom] = useState<{ label: string; coche: boolean }[]>(progressInitiale.custom ?? []);
  const [nouveauLabel, setNouveauLabel] = useState("");

  // Numéros de confirmation : uniquement en local, jamais synchronisés
  const [confirmations, setConfirmations] = useState<string[]>(items.map(() => ""));
  const [confirmationsCustom, setConfirmationsCustom] = useState<string[]>(custom.map(() => ""));
  const [champFocus, setChampFocus] = useState<string | null>(null);

  useEffect(() => {
    try {
      const sauvegarde = localStorage.getItem(storageKey);
      if (sauvegarde) {
        const valeurs: { base: string[]; custom: string[] } = JSON.parse(sauvegarde);
        if (Array.isArray(valeurs.base) && valeurs.base.length === items.length) setConfirmations(valeurs.base);
        if (Array.isArray(valeurs.custom)) setConfirmationsCustom(valeurs.custom);
      }
    } catch {
      // localStorage indisponible : on continue sans persistance locale
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  function sauvegarderConfirmationsLocal(base: string[], customVals: string[]) {
    try {
      localStorage.setItem(storageKey, JSON.stringify({ base, custom: customVals }));
    } catch {
      // pas grave
    }
  }

  function sync(nextCoches: boolean[], nextCustom: typeof custom) {
    sauvegarder(slug, listeType, { coche: nextCoches, custom: nextCustom });
  }

  function majConfirmation(i: number, valeur: string) {
    const next = confirmations.map((v, idx) => (idx === i ? valeur : v));
    setConfirmations(next);
    sauvegarderConfirmationsLocal(next, confirmationsCustom);
    // dès qu'un numéro est tapé, on marque "réservé" côté serveur (juste le statut, jamais le texte)
    const nextCoches = coches.map((v, idx) => (idx === i ? valeur.trim().length > 0 : v));
    setCoches(nextCoches);
    sync(nextCoches, custom);
  }

  function majConfirmationCustom(i: number, valeur: string) {
    const next = confirmationsCustom.map((v, idx) => (idx === i ? valeur : v));
    setConfirmationsCustom(next);
    sauvegarderConfirmationsLocal(confirmations, next);
    const nextCustom = custom.map((c, idx) => (idx === i ? { ...c, coche: valeur.trim().length > 0 } : c));
    setCustom(nextCustom);
    sync(coches, nextCustom);
  }

  function ajouter() {
    if (!nouveauLabel.trim()) return;
    const nextCustom = [...custom, { label: nouveauLabel.trim(), coche: false }];
    setCustom(nextCustom);
    setConfirmationsCustom([...confirmationsCustom, ""]);
    sync(coches, nextCustom);
    setNouveauLabel("");
  }

  function supprimerCustom(i: number) {
    const nextCustom = custom.filter((_, idx) => idx !== i);
    const nextConf = confirmationsCustom.filter((_, idx) => idx !== i);
    setCustom(nextCustom);
    setConfirmationsCustom(nextConf);
    sauvegarderConfirmationsLocal(confirmations, nextConf);
    sync(coches, nextCustom);
  }

  function ligne(
    label: string,
    url: string | undefined,
    reserve: boolean,
    valeurConfirmation: string,
    onChangeConfirmation: (v: string) => void,
    cleFocus: string,
    onSupprimer?: () => void
  ) {
    return (
      <div
        className={styles.checkItem}
        style={{ flexDirection: "column", alignItems: "stretch", gap: 10, cursor: "default" }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}>
          <span
            style={{
              fontSize: 10.5,
              fontWeight: 600,
              letterSpacing: "0.05em",
              textTransform: "uppercase",
              padding: "3px 10px",
              borderRadius: 12,
              whiteSpace: "nowrap",
              background: reserve ? "#c8956c" : "transparent",
              color: reserve ? "#fff" : "#a8734c",
              border: reserve ? "none" : "1px solid #c8956c",
            }}
          >
            {reserve ? "Réservé ✓" : "À réserver"}
          </span>
          <div className={styles.checkLabel} style={{ flex: 1, textDecoration: "none", color: "#1a1512", minWidth: 160 }}>
            {label}
          </div>
          {url && !reserve && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 12.5,
                fontWeight: 600,
                color: "#fff",
                background: "#c8956c",
                padding: "8px 16px",
                borderRadius: 20,
                whiteSpace: "nowrap",
                textDecoration: "none",
              }}
            >
              Réserver maintenant →
            </a>
          )}
          {url && reserve && (
            <a href={url} target="_blank" rel="noopener noreferrer" style={{ fontSize: 12, color: "#a8a29a", whiteSpace: "nowrap" }}>
              Voir la réservation →
            </a>
          )}
          {onSupprimer && (
            <button
              onClick={onSupprimer}
              style={{ background: "none", border: "none", color: "#c0392b", cursor: "pointer", fontSize: 13 }}
              title="Retirer"
            >
              ✕
            </button>
          )}
        </div>
        <input
          type="text"
          placeholder="Numéro de confirmation (une fois réservé)"
          value={valeurConfirmation}
          onChange={(e) => onChangeConfirmation(e.target.value)}
          onFocus={() => setChampFocus(cleFocus)}
          onBlur={() => setChampFocus(null)}
          style={{
            padding: "6px 10px",
            fontSize: 13,
            borderRadius: 3,
            fontFamily: "Inter, sans-serif",
            background: "#fff",
            outline: "none",
            WebkitAppearance: "none",
            border: champFocus === cleFocus ? "1px solid #c8956c" : "1px solid #e8e0d6",
            boxShadow: champFocus === cleFocus ? "0 0 0 1px #c8956c" : "none",
          }}
        />
      </div>
    );
  }

  return (
    <div className={styles.checkList}>
      {items.map((item, i) =>
        <div key={`base-${i}`}>
          {ligne(item.label, item.url, coches[i] ?? false, confirmations[i] ?? "", (v) => majConfirmation(i, v), `base-${i}`)}
        </div>
      )}

      {custom.map((item, i) => (
        <div key={`custom-${i}`}>
          {ligne(
            item.label,
            undefined,
            item.coche,
            confirmationsCustom[i] ?? "",
            (v) => majConfirmationCustom(i, v),
            `custom-${i}`,
            () => supprimerCustom(i)
          )}
        </div>
      ))}

      <div style={{ display: "flex", gap: 8, marginTop: 16 }}>
        <input
          type="text"
          placeholder="Ajouter votre propre réservation (ex : location de kayak)..."
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
