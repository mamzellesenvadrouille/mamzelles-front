// app/voyage/[slug]/DestinationTabs.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DestinationTabs.tsx
"use client";

import { useState } from "react";
import type { DestinationResolue } from "@/lib/carnets";
import styles from "./carnet.module.css";
import DestinationMap from "./DestinationMap";

export default function DestinationTabs({
  destinations,
  googleMapsApiKey,
}: {
  destinations: DestinationResolue[];
  googleMapsApiKey: string;
}) {
  const [actif, setActif] = useState(0);

  if (destinations.length === 0) return null;
  const dest = destinations[actif];

  return (
    <div>
      <div className={styles.destTabs}>
        {destinations.map((d, i) => (
          <button
            key={d.id}
            className={`${styles.destTab} ${i === actif ? styles.destTabActive : ""}`}
            onClick={() => setActif(i)}
          >
            {d.nom}
          </button>
        ))}
      </div>

      <div>
        <div
          className={styles.destPhoto}
          style={{ backgroundImage: `url('${dest.photo}')` }}
        >
          <div>
            <div className={styles.destDays}>{dest.nuits} nuit{dest.nuits > 1 ? "s" : ""}</div>
            <h3>{dest.nom}</h3>
          </div>
        </div>

        {dest.deroule.length > 0 && (
          <>
            <div className={styles.subEyebrow}>Déroulé</div>
            {dest.deroule.map((point, i) => (
              <div className={styles.dayItem} key={i}>
                <div className={styles.time}>{point.heure}</div>
                <div className={styles.desc}>
                  <strong>{point.titre}</strong>
                  <span>{point.detail}</span>
                </div>
              </div>
            ))}
          </>
        )}

        {dest.restaurants.length > 0 && (
          <>
            <div className={styles.subEyebrow}>
              {dest.restaurants.length} restaurant{dest.restaurants.length > 1 ? "s" : ""} recommandé{dest.restaurants.length > 1 ? "s" : ""}
            </div>
            <div className={styles.miniGrid}>
              {dest.restaurants.map((r, i) => (
                <div className={styles.miniCard} key={i}>
                  <img src={r.photo} alt={r.nom} />
                  <h4>{r.nom}</h4>
                  <div className={styles.meta}>{r.cuisine} · {r.prix}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {dest.activites.length > 0 && (
          <>
            <div className={styles.subEyebrow}>
              {dest.activites.length} site{dest.activites.length > 1 ? "s" : ""} & activité{dest.activites.length > 1 ? "s" : ""}
            </div>
            <div className={styles.miniGrid}>
              {dest.activites.map((a, i) => (
                <div className={styles.miniCard} key={i}>
                  <img src={a.photo} alt={a.nom} />
                  <h4>{a.nom}</h4>
                  <div className={styles.meta}>{a.description}</div>
                </div>
              ))}
            </div>
          </>
        )}

        {dest.seDeplacer.length > 0 && (
          <>
            <div className={styles.subEyebrow}>Comment se déplacer</div>
            <div className={styles.practicalBox}>
              {dest.seDeplacer.map((conseil, i) => (
                <p key={i}>{conseil}</p>
              ))}
            </div>
          </>
        )}

        <DestinationMap destination={dest} apiKey={googleMapsApiKey} />
      </div>
    </div>
  );
}
