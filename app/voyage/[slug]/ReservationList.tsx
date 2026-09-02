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
  storageKey: string;
  slug: string;
  listeType: "reservations";
  progressInitiale: ProgressListe;
}) {
  const [coches, setCoches] = useState<boolean[]>(
    progressInitiale.coche.length === items.length ? progressInitiale.coche : items.map(() => false)
  );
  const [custom, setCustom] = useState<{ label: string; coche: boolean }[]>(progressInitiale.custom ?? []);
  const [nouveauLabel, setNouveauLabel] = useState("");

  const [confirmations, setConfirmations] = useState<string[]>(items.map(() => ""));
  const [confirmationsCustom, setConfirmationsCustom] = useState<string[]>(custom.map(() => ""));
  const [champFocus, setChampFocus] = useState<string | null>(null);
  const [editionForcee, setEditionForcee] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const sauvegarde = localStorage.getItem(storageKey);
      if (sauvegarde) {
        const valeurs: { base: string[]; custom: string[] } = JSON.parse(sauvegarde);
        if (Array.isArray(valeurs.base) && valeurs.base.length === items.length) setConfirmations(valeurs.base);
        if (Array.isArray(valeurs.custom)) setConfirmationsCustom(valeurs.custom);
      }
    } catch {
      // localStorage indisponible
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
    // on ne bascule PAS en mode "Réservé" pendant la frappe, seulement une fois terminé (voir confirmerChamp)
  }

  function confirmerChamp(i: number) {
    const valeur = confirmations[i] ?? "";
    const nextCoches = coches.map((v, idx) => (idx === i ? valeur.trim().length > 0 : v));
    setCoches(nextCoches);
    sync(nextCoches, custom);
  }

  function majConfirmationCustom(i: number, valeur: string) {
    const next = confirmationsCustom.map((v, idx) => (idx === i ? valeur : v));
    setConfirmationsCustom(next);
    sauvegarderConfirmationsLocal(confirmations, next);
    // on ne bascule PAS en mode "Réservé" pendant la frappe, seulement une fois terminé (voir confirmerChampCustom)
  }

  function confirmerChampCustom(i: number) {
    const valeur = confirmationsCustom[i] ?? "";
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

  const totalItems = items.length + custom.length;
  const totalReserves = coches.filter(Boolean).length + custom.filter((c) => c.coche).length;
  const pourcentage = totalItems > 0 ? Math.round((totalReserves / totalItems) * 100) : 0;

  function carte(
    label: string,
    url: string | undefined,
    reserve: boolean,
    valeurConfirmation: string,
    onChangeConfirmation: (v: string) => void,
    onConfirmer: () => void,
    cleFocus: string,
    ajoutee: boolean,
    onSupprimer?: () => void
  ) {
    const enEdition = champFocus === cleFocus || editionForcee.has(cleFocus) || !reserve;
    return (
      <div
        style={{
          background: "#fff",
          borderRadius: 8,
          padding: "14px 16px",
          border: "none",
        }}
      >
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 14, marginBottom: reserve ? 0 : 8, flexWrap: "wrap" }}>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 600, fontSize: 19, color: "#1a1512", flex: 1, minWidth: 140 }}>
            {label}
          </div>
          {url && !reserve && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                color: "#fff",
                background: "#c8956c",
                padding: "6px 12px",
                borderRadius: 3,
                whiteSpace: "nowrap",
                textDecoration: "none",
                flexShrink: 0,
                marginTop: 3,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
              Réserver
            </a>
          )}
          {url && reserve && (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                fontSize: 10.5,
                fontWeight: 600,
                color: "#fff",
                background: "#c8956c",
                padding: "6px 12px",
                borderRadius: 3,
                whiteSpace: "nowrap",
                textDecoration: "none",
                flexShrink: 0,
                marginTop: 3,
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><path d="M15 3h6v6"/><path d="M10 14 21 3"/></svg>
              Lien de réservation
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
        {!enEdition ? (
          <div
            onClick={() => setEditionForcee((prev) => new Set(prev).add(cleFocus))}
            style={{ fontSize: 11.5, color: "#7a9e7e", fontWeight: 600, cursor: "pointer" }}
            title="Cliquer pour modifier"
          >
            Réservé{valeurConfirmation ? ` · ${valeurConfirmation}` : ""} <span style={{ color: "#a8a29a", fontWeight: 500 }}>(modifier)</span>
          </div>
        ) : (
          <input
            type="text"
            placeholder="Numéro de confirmation"
            value={valeurConfirmation}
            onChange={(e) => onChangeConfirmation(e.target.value)}
            onFocus={() => setChampFocus(cleFocus)}
            onKeyDown={(e) => e.key === "Enter" && e.currentTarget.blur()}
            onBlur={() => {
              setChampFocus(null);
              onConfirmer();
              setEditionForcee((prev) => {
                const next = new Set(prev);
                next.delete(cleFocus);
                return next;
              });
            }}
            style={{
              border: "none",
              borderBottom: champFocus === cleFocus ? "1px solid #c8956c" : "1px solid #eee",
              fontSize: 12,
              padding: "3px 0",
              width: "100%",
              color: "#666",
              background: "transparent",
              outline: "none",
              fontFamily: "Inter, sans-serif",
            }}
          />
        )}
        {ajoutee && <div style={{ fontSize: 10.5, color: "#c8956c", fontStyle: "italic", marginTop: 6 }}>Ajouté par vous</div>}
      </div>
    );
  }

  return (
    <div>
      <div style={{ marginBottom: 20 }}>
        <div style={{ fontSize: 12, color: "#8a8074", marginBottom: 6, fontFamily: "Inter, sans-serif" }}>
          {totalReserves} sur {totalItems} réservée{totalReserves > 1 ? "s" : ""}
        </div>
        <div style={{ height: 3, background: "#e8e0d6", borderRadius: 2, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pourcentage}%`, background: "#c8956c", transition: "width .3s" }} />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {items.map((item, i) => (
          <div key={`base-${i}`}>
            {carte(item.label, item.url, coches[i] ?? false, confirmations[i] ?? "", (v) => majConfirmation(i, v), () => confirmerChamp(i), `base-${i}`, false)}
          </div>
        ))}
        {custom.map((item, i) => (
          <div key={`custom-${i}`}>
            {carte(
              item.label,
              undefined,
              item.coche,
              confirmationsCustom[i] ?? "",
              (v) => majConfirmationCustom(i, v),
              () => confirmerChampCustom(i),
              `custom-${i}`,
              true,
              () => supprimerCustom(i)
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 8 }}>
        <input
          type="text"
          placeholder="Ajouter votre propre réservation..."
          value={nouveauLabel}
          onChange={(e) => setNouveauLabel(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ajouter()}
          style={{
            flex: 1,
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
