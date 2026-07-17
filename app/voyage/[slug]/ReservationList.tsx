// app/voyage/[slug]/ReservationList.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ReservationList.tsx
//
// Contrairement à CheckList (simple case à cocher), ici le client note
// lui-même son numéro de confirmation une fois qu'il a réservé — c'est ce
// texte qui fait foi, pas juste un clic. Sauvegardé dans son navigateur
// (localStorage), donc ça reste à chaque fois qu'il revient sur son carnet.
"use client";

import { useState, useEffect } from "react";
import type { ChecklistItem } from "@/lib/carnets";
import styles from "./carnet.module.css";

export default function ReservationList({ items, storageKey }: { items: ChecklistItem[]; storageKey: string }) {
  const [confirmations, setConfirmations] = useState<string[]>(items.map(() => ""));
  const [champFocus, setChampFocus] = useState<number | null>(null);

  useEffect(() => {
    try {
      const sauvegarde = localStorage.getItem(storageKey);
      if (sauvegarde) {
        const valeurs: string[] = JSON.parse(sauvegarde);
        if (Array.isArray(valeurs) && valeurs.length === items.length) {
          setConfirmations(valeurs);
        }
      }
    } catch {
      // localStorage indisponible : on continue sans persistance
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  function majConfirmation(i: number, valeur: string) {
    setConfirmations((prev) => {
      const next = prev.map((v, idx) => (idx === i ? valeur : v));
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // pas grave si ça échoue, l'affichage reste correct pour la session en cours
      }
      return next;
    });
  }

  return (
    <div className={styles.checkList}>
      {items.map((item, i) => {
        const reserve = confirmations[i]?.trim().length > 0;
        return (
          <div key={i} className={`${styles.checkItem} ${reserve ? styles.checked : ""}`} style={{ flexDirection: "column", alignItems: "stretch", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <div className={styles.checkBox} />
              <div className={styles.checkLabel} style={{ flex: 1, textDecoration: "none", color: "#1a1512" }}>{item.label}</div>
              {item.url && (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: 12.5, color: "#c8956c", fontWeight: 500, whiteSpace: "nowrap" }}
                >
                  Réserver →
                </a>
              )}
            </div>
            <input
              type="text"
              placeholder="Numéro de confirmation (une fois réservé)"
              value={confirmations[i] ?? ""}
              onChange={(e) => majConfirmation(i, e.target.value)}
              onFocus={() => setChampFocus(i)}
              onBlur={() => setChampFocus(null)}
              style={{
                marginLeft: 32,
                padding: "6px 10px",
                fontSize: 13,
                borderRadius: 3,
                fontFamily: "Inter, sans-serif",
                background: "#fff",
                outline: "none",
                WebkitAppearance: "none",
                border: champFocus === i ? "1px solid #c8956c" : "1px solid #e8e0d6",
                boxShadow: champFocus === i ? "0 0 0 1px #c8956c" : "none",
              }}
            />
          </div>
        );
      })}
    </div>
  );
}
