// app/voyage/[slug]/ParcoursSection.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ParcoursSection.tsx
//
// Regroupe la liste des étapes (cliquable) et la carte du trajet : cliquer
// sur une étape de la liste centre et zoome la carte sur le pin correspondant.
"use client";

import { useRef } from "react";
import type { EtapeParcours } from "@/lib/carnets";
import styles from "./carnet.module.css";
import ParcoursMap, { type ParcoursMapHandle } from "./ParcoursMap";

export default function ParcoursSection({
  parcours,
  parcoursCoords,
  apiKey,
}: {
  parcours: string[];
  parcoursCoords?: EtapeParcours[];
  apiKey: string;
}) {
  const mapHandleRef = useRef<ParcoursMapHandle>(null);
  const aUneCarte = !!parcoursCoords && parcoursCoords.length >= 2;

  return (
    <>
      <div className={styles.routeList}>
        {parcours.map((etape, i) => (
          <div
            className={styles.routeStep}
            key={i}
            onClick={aUneCarte ? () => mapHandleRef.current?.centrerSur(i) : undefined}
            style={aUneCarte ? { cursor: "pointer" } : undefined}
          >
            <div className={styles.idx}>{String(i + 1).padStart(2, "0")}</div>
            <div className={styles.name}>{etape}</div>
          </div>
        ))}
      </div>
      {aUneCarte && <ParcoursMap ref={mapHandleRef} etapes={parcoursCoords!} apiKey={apiKey} />}
    </>
  );
}
