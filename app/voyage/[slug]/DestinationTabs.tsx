// app/voyage/[slug]/DestinationTabs.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DestinationTabs.tsx
"use client";

import { useRef, useState } from "react";
import { Calendar, Ticket, MapPin } from "lucide-react";
import type { DestinationResolue, DeroulePoint } from "@/lib/carnets";
import { normaliserHeure } from "@/lib/carnets";
import styles from "./carnet.module.css";
import DestinationMap, { type DestinationMapHandle } from "./DestinationMap";

async function sauvegarderDerouleCustom(slug: string, derouleCustom: (DeroulePoint & { destinationId: string })[]) {
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

// Extrait un numéro de jour depuis un texte libre (ex: "Jour 3" → 3). Sinon, poussé à la fin.
function extraireJour(texte: string): number {
  const m = texte.match(/\d+/);
  return m ? parseInt(m[0], 10) : Infinity;
}
function extraireMinutes(texte: string): number {
  const m = texte.match(/(\d{1,2})\s*[h:]\s*(\d{0,2})/i);
  if (!m) return 0;
  return (parseInt(m[1], 10) || 0) * 60 + (parseInt(m[2], 10) || 0);
}
function trierChronologiquement<T extends DeroulePoint>(points: T[]): T[] {
  return [...points].sort((a, b) => {
    const jourA = extraireJour(a.jour);
    const jourB = extraireJour(b.jour);
    if (jourA !== jourB) return jourA - jourB;
    return extraireMinutes(a.heure) - extraireMinutes(b.heure);
  });
}

const inputMemento: React.CSSProperties = {
  height: 38,
  padding: "0 12px",
  fontSize: 13,
  borderRadius: 3,
  fontFamily: "Inter, sans-serif",
  border: "1px solid #e8e0d6",
  outline: "none",
  background: "#fff",
  boxSizing: "border-box",
  width: 90,
};

const boutonMemento: React.CSSProperties = {
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
};

export default function DestinationTabs({
  destinations,
  googleMapsApiKey,
  meteoParDestination,
  slug,
  derouleCustomInitial,
  dateDebutVoyage,
}: {
  destinations: DestinationResolue[];
  googleMapsApiKey: string;
  meteoParDestination?: ({ temperature: number; icone: string } | null)[];
  slug: string;
  derouleCustomInitial: (DeroulePoint & { destinationId: string })[];
  dateDebutVoyage?: string;
}) {
  const [actif, setActif] = useState(0);
  const mapHandleRef = useRef<DestinationMapHandle>(null);
  const [derouleCustom, setDerouleCustom] = useState(derouleCustomInitial);
  const [nJour, setNJour] = useState("");
  const [nHeure, setNHeure] = useState("");
  const [nTitre, setNTitre] = useState("");
  const [nNote, setNNote] = useState("");

  // Calcule les dates d'arrivée/départ de chaque étape à partir de la date de
  // début du voyage et du nombre de nuits cumulé des étapes précédentes.
  const datesParDestination = (() => {
    if (!dateDebutVoyage) return [];
    let curseur = new Date(dateDebutVoyage);
    return destinations.map((d) => {
      const arrivee = new Date(curseur);
      const depart = new Date(curseur);
      depart.setDate(depart.getDate() + d.nuits);
      curseur = new Date(depart);
      return { arrivee, depart };
    });
  })();

  function formatCourt(date: Date): string {
    return date.toLocaleDateString("fr-FR", { day: "numeric", month: "short" });
  }

  function ajouterNoteDeroule(destinationId: string) {
    if (!nTitre.trim()) return;
    const next = [...derouleCustom, { destinationId, jour: nJour.trim(), heure: nHeure.trim(), titre: nTitre.trim(), note: nNote.trim() }];
    setDerouleCustom(next);
    sauvegarderDerouleCustom(slug, next);
    setNJour("");
    setNHeure("");
    setNTitre("");
    setNNote("");
  }

  function supprimerNoteDeroule(index: number) {
    const next = derouleCustom.filter((_, i) => i !== index);
    setDerouleCustom(next);
    sauvegarderDerouleCustom(slug, next);
  }

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
            {d.nom} · {d.nuits} nuit{d.nuits > 1 ? "s" : ""}
          </button>
        ))}
      </div>

      <div>
        {datesParDestination[actif] && (
          <div className={styles.destDatesLine}>
            <Calendar size={14} color="#c8956c" strokeWidth={2} style={{ marginRight: 8, verticalAlign: "-2px" }} />
            Arrivée le {formatCourt(datesParDestination[actif].arrivee)} · Départ le {formatCourt(datesParDestination[actif].depart)}
          </div>
        )}

        <div
          className={styles.destPhoto}
          style={{ backgroundImage: `url('${dest.photo}')` }}
        />

        <div className={styles.destInfoRow}>
          <h3 className={styles.destName}>{dest.nom}</h3>
          {meteoParDestination?.[actif] && (
            <div className={styles.destWeather}>
              {meteoParDestination[actif]!.temperature} °C {meteoParDestination[actif]!.icone}
            </div>
          )}
        </div>

        {dest.resume && (
          <p className={styles.destResume}>{dest.resume}</p>
        )}

        {(() => {
          const notesDeCetteDestination = derouleCustom
            .map((n, idx) => ({ ...n, indexOrigine: idx }))
            .filter((n) => n.destinationId === dest.id);
          const tousLesPoints = trierChronologiquement([
            ...dest.deroule.map((p) => ({ ...p, estAjoutee: false, indexOrigine: -1 })),
            ...notesDeCetteDestination.map((p) => ({ ...p, estAjoutee: true })),
          ]);
          return (
            <>
              <div className={styles.subEyebrow}>Déroulé</div>
              <div className={styles.dayList}>
                {tousLesPoints.map((point, i) => (
                  <div
                    className={styles.dayItem}
                    key={i}
                    style={undefined}
                  >
                    <div className={styles.time}>
                      {point.jour}
                      {point.jour && point.heure ? " · " : ""}
                      {point.heure}
                    </div>
                    <div className={styles.desc} style={{ flex: 1 }}>
                      <strong>{point.titre}</strong>
                      <span>{point.note}</span>
                      {point.estAjoutee && <div style={{ fontSize: 10.5, color: "#c8956c", fontStyle: "italic", marginTop: 4 }}>Ajouté par vous</div>}
                    </div>
                    {point.estAjoutee && (
                      <button
                        onClick={() => supprimerNoteDeroule(point.indexOrigine)}
                        style={{ background: "none", border: "none", color: "#c0392b", cursor: "pointer", fontSize: 13 }}
                        title="Retirer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 16, marginBottom: 8 }}>
                <div style={{ fontSize: 11, color: "#8a8074", marginBottom: 8, fontFamily: "Inter, sans-serif" }}>
                  Ajouter une note personnelle à votre mémento pour {dest.nom}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                  <input placeholder="Jour" value={nJour} onChange={(e) => setNJour(e.target.value)} style={inputMemento} />
                  <input
                    placeholder="Heure"
                    value={nHeure}
                    onChange={(e) => setNHeure(e.target.value)}
                    onBlur={(e) => setNHeure(normaliserHeure(e.target.value))}
                    style={{ ...inputMemento, width: 80 }}
                  />
                  <input
                    placeholder="Titre"
                    value={nTitre}
                    onChange={(e) => setNTitre(e.target.value)}
                    style={{ ...inputMemento, flex: 1, minWidth: 140 }}
                  />
                </div>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    placeholder="Note (optionnel)"
                    value={nNote}
                    onChange={(e) => setNNote(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && ajouterNoteDeroule(dest.id)}
                    style={{ ...inputMemento, flex: 1 }}
                  />
                  <button onClick={() => ajouterNoteDeroule(dest.id)} style={boutonMemento}>
                    Ajouter
                  </button>
                </div>
              </div>
            </>
          );
        })()}

        {(dest.hebergements ?? []).length > 0 && (
          <>
            <div className={styles.sectionLabelBig}>
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
                    {aCoords && (
                      <span className={styles.mapsLink} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                        <MapPin size={12} color="#c8956c" strokeWidth={2} />
                        Voir sur la carte
                      </span>
                    )}
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

        {dest.activites.length > 0 && (
          <>
            <div className={styles.sectionLabelBig}>
              {dest.activites.length} site{dest.activites.length > 1 ? "s" : ""} & activité{dest.activites.length > 1 ? "s" : ""}
            </div>
            <div className={styles.miniGrid}>
              {dest.activites.map((a, i) => {
                const aCoords = typeof a.lat === "number" && typeof a.lng === "number";
                const contenu = (
                  <>
                    <div style={{ position: "relative" }}>
                      {a.photo ? (
                        <img src={a.photo} alt={a.nom} onError={(e) => (e.currentTarget.style.display = "none")} />
                      ) : (
                        <div className={styles.miniCardPlaceholder} />
                      )}
                      {a.lienReservation && (
                        <a
                          href={a.lienReservation}
                          target="_blank"
                          rel="noopener noreferrer sponsored"
                          onClick={(e) => e.stopPropagation()}
                          style={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 5,
                            background: "#c8956c",
                            color: "#fff",
                            fontSize: 11.5,
                            fontWeight: 600,
                            padding: "6px 12px",
                            borderRadius: 20,
                            textDecoration: "none",
                            boxShadow: "0 2px 6px rgba(26,21,18,.25)",
                          }}
                        >
                          <Ticket size={13} strokeWidth={2} />
                          Réserver
                        </a>
                      )}
                    </div>
                    <h4>{a.nom}</h4>
                    <div className={styles.meta}>{a.description}</div>
                    {aCoords && (
                      <span className={styles.mapsLink} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                        <MapPin size={12} color="#c8956c" strokeWidth={2} />
                        Voir sur la carte
                      </span>
                    )}
                  </>
                );
                return aCoords ? (
                  a.lienReservation ? (
                    <div
                      role="button"
                      tabIndex={0}
                      onClick={() => centrerSurLeLieu(a.lat, a.lng, a.nom)}
                      onKeyDown={(e) => e.key === "Enter" && centrerSurLeLieu(a.lat, a.lng, a.nom)}
                      className={styles.miniCard}
                      key={i}
                    >
                      {contenu}
                    </div>
                  ) : (
                    <button
                      type="button"
                      onClick={() => centrerSurLeLieu(a.lat, a.lng, a.nom)}
                      className={styles.miniCard}
                      key={i}
                    >
                      {contenu}
                    </button>
                  )
                ) : (
                  <div className={styles.miniCard} key={i}>
                    {contenu}
                  </div>
                );
              })}
            </div>
          </>
        )}

        {dest.restaurants.length > 0 && (
          <>
            <div className={styles.sectionLabelBig}>
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
                    {aCoords && (
                      <span className={styles.mapsLink} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                        <MapPin size={12} color="#c8956c" strokeWidth={2} />
                        Voir sur la carte
                      </span>
                    )}
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

        <DestinationMap ref={mapHandleRef} destination={dest} apiKey={googleMapsApiKey} />
      </div>
    </div>
  );
}
