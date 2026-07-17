// app/voyage/[slug]/DestinationTabs.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DestinationTabs.tsx
"use client";

import { useRef, useState } from "react";
import type { DestinationResolue } from "@/lib/carnets";
import styles from "./carnet.module.css";
import DestinationMap, { type DestinationMapHandle } from "./DestinationMap";

export default function DestinationTabs({
  destinations,
  googleMapsApiKey,
}: {
  destinations: DestinationResolue[];
  googleMapsApiKey: string;
}) {
  const [actif, setActif] = useState(0);
  const mapHandleRef = useRef<DestinationMapHandle>(null);

  function centrerSurLeLieu(lat?: number, lng?: number, nom?: string) {
    if (typeof lat !== "number" || typeof lng !== "number") return;
    mapHandleRef.current?.centrerSur(lat, lng, nom ?? "");
    mapHandleRef.current?.scrollIntoView();
  }

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

        {(dest.hebergements ?? []).length > 0 && (
          <>
            <div className={styles.subEyebrow}>
              Hébergement{(dest.hebergements ?? []).length > 1 ? "s" : ""}
            </div>
            <div className={styles.miniGrid}>
              {(dest.hebergements ?? []).map((h, i) => {
                const aCoords = typeof h.lat === "number" && typeof h.lng === "number";
                const contenu = (
                  <>
                    {h.photo ? (
                      <img src={h.photo} alt={h.nom} onError={(e) => (e.currentTarget.style.display = "none")} />
                    ) : (
                      <div className={styles.miniCardPlaceholder} />
                    )}
                    <h4>{h.nom}</h4>
                    <div className={styles.meta}>{h.description}</div>
                    {aCoords && <span className={styles.mapsLink}>Voir sur la carte ↑</span>}
                  </>
                );
                return aCoords ? (
                  <button
                    type="button"
                    onClick={() => centrerSurLeLieu(h.lat, h.lng, h.nom)}
                    className={styles.miniCard}
                    key={i}
                  >
                    {contenu}
                  </button>
                ) : (
                  <div className={styles.miniCard} key={i}>
                    {contenu}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {dest.deroule.length > 0 && (
          <>
            <div className={styles.subEyebrow}>Déroulé</div>
            <div className={styles.dayList}>
              {dest.deroule.map((point, i) => (
                <div className={styles.dayItem} key={i}>
                  <div className={styles.time}>{point.heure}</div>
                  <div className={styles.desc}>
                    <strong>{point.titre}</strong>
                    <span>{point.detail}</span>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {dest.restaurants.length > 0 && (
          <>
            <div className={styles.subEyebrow}>
              {dest.restaurants.length} restaurant{dest.restaurants.length > 1 ? "s" : ""} recommandé{dest.restaurants.length > 1 ? "s" : ""}
            </div>
            <div className={styles.miniGrid}>
              {dest.restaurants.map((r, i) => {
                const aCoords = typeof r.lat === "number" && typeof r.lng === "number";
                const contenu = (
                  <>
                    {r.photo ? (
                      <img src={r.photo} alt={r.nom} onError={(e) => (e.currentTarget.style.display = "none")} />
                    ) : (
                      <div className={styles.miniCardPlaceholder} />
                    )}
                    <h4>{r.nom}</h4>
                    <div className={styles.meta}>{r.cuisine} · {r.prix}</div>
                    {aCoords && <span className={styles.mapsLink}>Voir sur la carte ↑</span>}
                  </>
                );
                return aCoords ? (
                  <button
                    type="button"
                    onClick={() => centrerSurLeLieu(r.lat, r.lng, r.nom)}
                    className={styles.miniCard}
                    key={i}
                  >
                    {contenu}
                  </button>
                ) : (
                  <div className={styles.miniCard} key={i}>
                    {contenu}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {dest.activites.length > 0 && (
          <>
            <div className={styles.subEyebrow}>
              {dest.activites.length} site{dest.activites.length > 1 ? "s" : ""} & activité{dest.activites.length > 1 ? "s" : ""}
            </div>
            <div className={styles.miniGrid}>
              {dest.activites.map((a, i) => {
                const aCoords = typeof a.lat === "number" && typeof a.lng === "number";
                const contenu = (
                  <>
                    {a.photo ? (
                      <img src={a.photo} alt={a.nom} onError={(e) => (e.currentTarget.style.display = "none")} />
                    ) : (
                      <div className={styles.miniCardPlaceholder} />
                    )}
                    <h4>{a.nom}</h4>
                    <div className={styles.meta}>{a.description}</div>
                    {aCoords && <span className={styles.mapsLink}>Voir sur la carte ↑</span>}
                  </>
                );
                return aCoords ? (
                  <button
                    type="button"
                    onClick={() => centrerSurLeLieu(a.lat, a.lng, a.nom)}
                    className={styles.miniCard}
                    key={i}
                  >
                    {contenu}
                  </button>
                ) : (
                  <div className={styles.miniCard} key={i}>
                    {contenu}
                  </div>
                );
              })}
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

        <DestinationMap ref={mapHandleRef} destination={dest} apiKey={googleMapsApiKey} />
      </div>
    </div>
  );
}
