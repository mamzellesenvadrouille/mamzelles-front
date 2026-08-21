// app/voyage/[slug]/DestinationTabs.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DestinationTabs.tsx
"use client";

import { useRef, useState } from "react";
import { Calendar, Ticket, MapPin } from "lucide-react";
import type { DestinationResolue, DeroulePoint } from "@/lib/carnets";
import { normaliserHeure } from "@/lib/carnets";
import styles from "./carnet.module.css";
import DestinationMap, { type DestinationMapHandle } from "./DestinationMap";
import ConvertisseurDevise from "./ConvertisseurDevise";
import { deviseDepuisPays } from "@/lib/carnets";

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

// Extrait une valeur triable depuis une date au format "JJ/MM" (ex: "12/08" → 812).
// Formate automatiquement une saisie en "JJ/MM" : ne garde que les chiffres,
// insère le "/" tout seul après le 2ème chiffre, limite à 4 chiffres (JJMM).
function formaterDateJJMM(saisie: string): string {
  const chiffres = saisie.replace(/\D/g, "").slice(0, 4);
  if (chiffres.length <= 2) return chiffres;
  return `${chiffres.slice(0, 2)}/${chiffres.slice(2)}`;
}

// Même principe pour l'heure, mais plus malin : si le 1er chiffre tapé ne peut
// être que le début d'une heure à un seul chiffre (3 à 9, ex: "9h"), le "h"
// s'insère tout de suite. Si c'est 0, 1 ou 2, on attend un 2ème chiffre avant
// d'insérer le "h", car l'heure peut aller jusqu'à 2 chiffres (ex: "19h", "23h").
function formaterHeureSaisie(saisie: string): string {
  const chiffres = saisie.replace(/\D/g, "");
  if (chiffres.length === 0) return "";
  const heureCourte = chiffres[0] >= "3" && chiffres[0] <= "9";
  const tailleHeure = heureCourte ? 1 : 2;
  const limites = chiffres.slice(0, tailleHeure + 2);
  if (limites.length < tailleHeure) return limites;
  return `${limites.slice(0, tailleHeure)}h${limites.slice(tailleHeure)}`;
}

function extraireJour(texte: string): number {
  const dateMatch = texte.match(/^(\d{1,2})\s*\/\s*(\d{1,2})/);
  if (!dateMatch) return Infinity;
  const jour = parseInt(dateMatch[1], 10);
  const mois = parseInt(dateMatch[2], 10);
  return mois * 100 + jour;
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
  tauxParDestination,
  slug,
  derouleCustomInitial,
  dateDebutVoyage,
}: {
  destinations: DestinationResolue[];
  googleMapsApiKey: string;
  meteoParDestination?: ({ temperature: number; icone: string } | null)[];
  tauxParDestination?: (number | null)[];
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
          style={{
            backgroundImage: `url('${dest.photo}')`,
            backgroundPosition: `center ${dest.photoPosition ?? 50}%`,
          }}
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
          const deviseLocale = deviseDepuisPays(dest.pays);
          return (
            deviseLocale &&
            dest.afficherConvertisseur !== false && (
              <div style={{ marginTop: 16, marginBottom: 8 }}>
                <ConvertisseurDevise devise={deviseLocale} taux={tauxParDestination?.[actif] ?? null} />
              </div>
            )
          );
        })()}

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
              <div className={styles.subEyebrow}>Planning de votre séjour à {dest.nom}</div>
              <div className={styles.dayList}>
                {tousLesPoints.map((point, i) => {
                  // La date n'apparaît en gras qu'au premier point du jour concerné,
                  // pour marquer visuellement le changement de journée dans la liste.
                  const nouveauJour = i === 0 || tousLesPoints[i - 1].jour !== point.jour;
                  return (
                  <div
                    className={styles.dayItem}
                    key={i}
                    style={undefined}
                  >
                    <div className={styles.time}>
                      <span style={nouveauJour ? { fontWeight: 700 } : undefined}>{point.jour}</span>
                      {point.jour && point.heure ? " · " : ""}
                      <span style={nouveauJour ? { fontWeight: 700 } : undefined}>{point.heure}</span>
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
                  );
                })}
              </div>

              <div style={{ marginTop: 16, marginBottom: 8 }}>
                <div style={{ fontSize: 11, color: "#8a8074", marginBottom: 8, fontFamily: "Inter, sans-serif" }}>
                  Ajouter une note personnelle à votre mémento pour {dest.nom}
                </div>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 8 }}>
                  <input placeholder="JJ/MM" value={nJour} onChange={(e) => setNJour(formaterDateJJMM(e.target.value))} style={inputMemento} />
                  <input
                    placeholder="00h00"
                    value={nHeure}
                    onChange={(e) => setNHeure(formaterHeureSaisie(e.target.value))}
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
                    placeholder="Notes"
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
              Votre <em style={{ fontStyle: "italic" }}>hébergement</em>
            </div>
            <div className={styles.miniGrid}>
              {(dest.hebergements ?? []).map((h, i) => {
                const aCoords = typeof h.lat === "number" && typeof h.lng === "number";
                const contenu = (
                  <>
                    {h.photo ? (
                      <img src={h.photo} alt={h.nom} style={{ objectPosition: `center ${h.photoPosition ?? 50}%` }} onError={(e) => (e.currentTarget.style.display = "none")} />
                    ) : (
                      <div className={styles.miniCardPlaceholder} />
                    )}
                    <h4>{h.nom}</h4>
                    <div
                      className={styles.meta}
                      style={{ whiteSpace: "normal", overflow: "visible", textOverflow: "clip" }}
                    >
                      {h.description}
                    </div>
                    {aCoords && (
                      <span className={styles.mapsLink} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                        <MapPin size={12} color="#c8956c" strokeWidth={2} />
                        Voir sur la carte
                      </span>
                    )}
                  </>
                );
                return aCoords ? (
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => centrerSurLeLieu(h.lat, h.lng, h.nom)}
                    onKeyDown={(e) => e.key === "Enter" && centrerSurLeLieu(h.lat, h.lng, h.nom)}
                    className={styles.miniCard}
                    key={i}
                  >
                    {contenu}
                  </div>
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
              {dest.activites.length} site{dest.activites.length > 1 ? "s" : ""} & <em style={{ fontStyle: "italic" }}>activité{dest.activites.length > 1 ? "s" : ""}</em>
            </div>
            <div className={styles.miniGrid}>
              {dest.activites.map((a, i) => {
                const aCoords = typeof a.lat === "number" && typeof a.lng === "number";
                const partnerIndex = i % 2 === 0 ? i + 1 : i - 1;
                const ligneAUnLien = Boolean(a.lienReservation || dest.activites[partnerIndex]?.lienReservation);
                const contenu = (
                  <>
                    <div>
                      {a.photo ? (
                        <img src={a.photo} alt={a.nom} style={{ objectPosition: `center ${a.photoPosition ?? 50}%` }} onError={(e) => (e.currentTarget.style.display = "none")} />
                      ) : (
                        <div className={styles.miniCardPlaceholder} />
                      )}
                    </div>
                    <h4>{a.nom}</h4>
                    <div
                      className={styles.meta}
                      style={{ whiteSpace: "normal", overflow: "visible", textOverflow: "clip" }}
                    >
                      {a.description}
                    </div>
                    {aCoords && (
                      <span className={styles.mapsLink} style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                        <MapPin size={12} color="#c8956c" strokeWidth={2} />
                        Voir sur la carte
                      </span>
                    )}
                    {ligneAUnLien && (
                      <div style={{ height: 28, marginTop: 8 }}>
                        {a.lienReservation && (
                          <a
                            href={a.lienReservation}
                            target="_blank"
                            rel="noopener noreferrer sponsored"
                            onClick={(e) => e.stopPropagation()}
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: 4,
                              background: "#c8956c",
                              color: "#fff",
                              fontSize: 11,
                              fontWeight: 600,
                              padding: "5px 10px",
                              borderRadius: 18,
                              textDecoration: "none",
                            }}
                          >
                            <Ticket size={11} strokeWidth={2} />
                            Réserver
                          </a>
                        )}
                      </div>
                    )}
                  </>
                );
                return aCoords ? (
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
              {dest.restaurants.length} restaurant{dest.restaurants.length > 1 ? "s" : ""} <em style={{ fontStyle: "italic" }}>recommandé{dest.restaurants.length > 1 ? "s" : ""}</em>
            </div>
            <div className={styles.miniGrid}>
              {dest.restaurants.map((r, i) => {
                const aCoords = typeof r.lat === "number" && typeof r.lng === "number";
                const contenu = (
                  <>
                    {r.photo ? (
                      <img src={r.photo} alt={r.nom} style={{ objectPosition: `center ${r.photoPosition ?? 50}%` }} onError={(e) => (e.currentTarget.style.display = "none")} />
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
                  <div
                    role="button"
                    tabIndex={0}
                    onClick={() => centrerSurLeLieu(r.lat, r.lng, r.nom)}
                    onKeyDown={(e) => e.key === "Enter" && centrerSurLeLieu(r.lat, r.lng, r.nom)}
                    className={styles.miniCard}
                    key={i}
                  >
                    {contenu}
                  </div>
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
