// app/voyage/[slug]/CheckList.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/CheckList.tsx
//
// Checklist cochable dont l'état est sauvegardé dans le navigateur du
// visiteur (localStorage), pour survivre au rechargement de page.
// "storageKey" doit être unique par carnet + par liste (ex: réservations
// vs checklist valise), pour que les deux ne se marchent pas dessus.
"use client";

import { useState, useEffect } from "react";
import type { ChecklistItem } from "@/lib/carnets";
import styles from "./carnet.module.css";

export default function CheckList({ items, storageKey }: { items: ChecklistItem[]; storageKey: string }) {
  const [coches, setCoches] = useState<boolean[]>(items.map((i) => i.coche));

  // Au montage, on relit ce que le visiteur avait déjà coché lors de sa dernière visite
  useEffect(() => {
    try {
      const sauvegarde = localStorage.getItem(storageKey);
      if (sauvegarde) {
        const valeurs: boolean[] = JSON.parse(sauvegarde);
        // sécurité : si la liste a changé de taille depuis la sauvegarde, on ignore
        if (Array.isArray(valeurs) && valeurs.length === items.length) {
          setCoches(valeurs);
        }
      }
    } catch {
      // localStorage indisponible (navigation privée stricte, etc.) : on continue sans persistance
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [storageKey]);

  function toggle(i: number) {
    setCoches((prev) => {
      const next = prev.map((v, idx) => (idx === i ? !v : v));
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // pas grave si ça échoue, l'affichage reste correct pour la session en cours
      }
      return next;
    });
  }

  function marquerReserve(i: number) {
    setCoches((prev) => {
      const next = prev.map((v, idx) => (idx === i ? true : v));
      try {
        localStorage.setItem(storageKey, JSON.stringify(next));
      } catch {
        // pas grave si ça échoue
      }
      return next;
    });
  }

  return (
    <div className={styles.checkList}>
      {items.map((item, i) => (
        <div
          key={i}
          className={`${styles.checkItem} ${coches[i] ? styles.checked : ""}`}
          onClick={() => toggle(i)}
        >
          <div className={styles.checkBox} />
          <div className={styles.checkLabel}>{item.label}</div>
          {item.url && (
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.stopPropagation();
                marquerReserve(i);
              }}
              style={{ marginLeft: "auto", fontSize: 12.5, color: "#c8956c", fontWeight: 500, whiteSpace: "nowrap" }}
            >
              Réserver →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}
