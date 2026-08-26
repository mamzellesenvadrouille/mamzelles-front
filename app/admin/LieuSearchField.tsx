// app/admin/LieuSearchField.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/LieuSearchField.tsx
//
// Champ de recherche de lieu : tape un nom d'établissement, une liste de
// résultats apparaît (via Google Places, la plus complète pour les petits
// établissements locaux type hôtels/restaurants). Une fois un résultat choisi,
// une petite carte de vérification apparaît avec un pin déplaçable — Google
// Places renvoie parfois une position légèrement décalée (adresse
// administrative plutôt que position réelle du bâtiment), donc on laisse
// toujours la possibilité d'ajuster visuellement avant validation.
//
// La recherche passe par la route interne /api/lieu-search : la clé Google
// reste entièrement côté serveur, jamais visible dans le code du navigateur.
"use client";

import { useState, useRef, useEffect } from "react";
import { Map as MapLibreMap, Marker, NavigationControl, setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

if (typeof window !== "undefined") {
  setWorkerUrl("/maplibre-gl-worker.mjs");
}

const MAPTILER_KEY = "5Qqxke6FycyTCZ05TNMn";
const STYLE_URL = `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`;

interface Resultat {
  nom: string;
  lat: number;
  lng: number;
}

export default function LieuSearchField({
  onSelect,
  placeholder,
  lat,
  lng,
  nomAffiche,
  onNomAffiche,
  afficherCarte = true,
}: {
  onSelect: (lieu: Resultat) => void;
  placeholder?: string;
  lat?: number;
  lng?: number;
  // Nom affiché librement modifiable, distinct du nom trouvé par la
  // recherche — permet d'écrire "Paris" plutôt que l'adresse complète
  // renvoyée par Google Places, sans toucher aux coordonnées.
  nomAffiche?: string;
  onNomAffiche?: (nom: string) => void;
  // Carte de vérification affichée par défaut (utile dans l'admin pour
  // ajuster précisément) — désactivable pour un usage plus léger (ex :
  // ajout de lieu par le client sur le carnet public).
  afficherCarte?: boolean;
}) {
  const [saisie, setSaisie] = useState("");
  const [resultats, setResultats] = useState<Resultat[]>([]);
  const [recherche, setRecherche] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const [lieuChoisi, setLieuChoisi] = useState<Resultat | null>(
    typeof lat === "number" && typeof lng === "number" && !(lat === 0 && lng === 0)
      ? { nom: "Position enregistrée", lat, lng }
      : null
  );
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstance = useRef<MapLibreMap | null>(null);
  const markerInstance = useRef<Marker | null>(null);

  useEffect(() => {
    function onClickDehors(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOuvert(false);
      }
    }
    document.addEventListener("mousedown", onClickDehors);
    return () => document.removeEventListener("mousedown", onClickDehors);
  }, []);

  // Initialise la petite carte de vérification dès qu'un lieu est choisi
  useEffect(() => {
    if (!afficherCarte || !lieuChoisi || !mapRef.current) return;

    const map = new MapLibreMap({
      container: mapRef.current,
      style: STYLE_URL,
      center: [lieuChoisi.lng, lieuChoisi.lat],
      zoom: 16,
      attributionControl: false,
    });
    mapInstance.current = map;

    // Boutons +/- pour zoomer/dézoomer, en plus du pin déplaçable — utile
    // pour affiner visuellement la position avant de valider (zoomer pour
    // voir précisément le bâtiment, dézoomer pour se repérer dans la rue).
    map.addControl(new NavigationControl({ showCompass: false }), "top-right");

    map.on("load", () => {
      setTimeout(() => map.resize(), 50);
    });

    const marker = new Marker({ color: "#c8956c", draggable: true })
      .setLngLat([lieuChoisi.lng, lieuChoisi.lat])
      .addTo(map);

    marker.on("dragend", () => {
      const pos = marker.getLngLat();
      const miseAJour = { nom: lieuChoisi.nom, lat: pos.lat, lng: pos.lng };
      setLieuChoisi(miseAJour);
      onSelect(miseAJour);
    });

    markerInstance.current = marker;

    return () => {
      map.remove();
      mapInstance.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lieuChoisi?.nom]);

  function handleChange(valeur: string) {
    setSaisie(valeur);
    if (timerRef.current) clearTimeout(timerRef.current);

    if (valeur.trim().length < 3) {
      setResultats([]);
      setOuvert(false);
      return;
    }

    // On attend 400ms après la dernière frappe avant de lancer la recherche,
    // pour ne pas surcharger l'API à chaque lettre tapée.
    timerRef.current = setTimeout(async () => {
      setRecherche(true);
      try {
        const res = await fetch(`/api/lieu-search?q=${encodeURIComponent(valeur)}`);
        const data = await res.json();
        const items: Resultat[] = data.resultats ?? [];
        setResultats(items);
        setOuvert(items.length > 0);
      } catch {
        setResultats([]);
      } finally {
        setRecherche(false);
      }
    }, 400);
  }

  function choisir(r: Resultat) {
    onSelect(r);
    setSaisie("");
    setLieuChoisi(r);
    setResultats([]);
    setOuvert(false);
  }

  return (
    <div ref={wrapRef} style={{ position: "relative", marginBottom: 10 }}>
      <style>{`.lieu-search-input::placeholder { color: #1a1512; opacity: 1; }`}</style>
      {onNomAffiche && lieuChoisi && (
        <div style={{ marginBottom: 10 }}>
          <label style={{ display: "block", fontSize: 10.5, textTransform: "uppercase", letterSpacing: "0.06em", color: "#8a8074", marginBottom: 4, fontFamily: "Inter, sans-serif" }}>
            Nom affiché (modifiable librement)
          </label>
          <input
            style={{
              width: "100%",
              height: 36,
              padding: "0 12px",
              fontSize: 13,
              borderRadius: 4,
              fontFamily: "Inter, sans-serif",
              border: "1px solid #d8cdbc",
              outline: "none",
              background: "#fff",
              boxSizing: "border-box",
            }}
            placeholder="ex : Paris"
            value={nomAffiche ?? ""}
            onChange={(e) => onNomAffiche(e.target.value)}
          />
        </div>
      )}
      <div style={{ position: "relative" }}>
        <svg
          width="16"
          height="20"
          viewBox="0 0 32 32"
          style={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", pointerEvents: "none" }}
        >
          <circle cx="16" cy="11" r="7" fill="#c8956c" />
          <line x1="16" y1="18" x2="16" y2="28" stroke="#c8956c" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
        <input
          className="lieu-search-input"
          style={{
            width: "100%",
            height: 36,
            padding: "0 12px 0 32px",
            fontSize: 13,
            borderRadius: 4,
            fontFamily: "Inter, sans-serif",
            border: "1px solid #d8cdbc",
            outline: "none",
            background: "#fff",
            boxSizing: "border-box",
          }}
          placeholder="Entrer le nom du lieu..."
          value={saisie}
          onChange={(e) => handleChange(e.target.value)}
          onFocus={() => resultats.length > 0 && setOuvert(true)}
        />
        {recherche && (
          <span style={{ position: "absolute", right: 10, top: 8, fontSize: 11, color: "#aaa", fontFamily: "Inter, sans-serif" }}>
            ...
          </span>
        )}
        {ouvert && resultats.length > 0 && (
          <div
            style={{
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              zIndex: 20,
              background: "#fff",
              border: "1px solid #e8e0d6",
              borderRadius: 4,
              marginTop: 2,
              boxShadow: "0 4px 12px rgba(0,0,0,.08)",
              maxHeight: 220,
              overflowY: "auto",
            }}
          >
          {resultats.map((r, i) => (
            <button
              key={i}
              onClick={() => choisir(r)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "8px 12px",
                fontSize: 12.5,
                fontFamily: "Inter, sans-serif",
                color: "#1a1512",
                background: "none",
                border: "none",
                borderBottom: i < resultats.length - 1 ? "1px solid #f0ebe4" : "none",
                cursor: "pointer",
              }}
            >
              {r.nom}
            </button>
          ))}
        </div>
      )}
      </div>
      {afficherCarte && lieuChoisi && (
        <div style={{ marginTop: 8 }}>
          <div
            ref={mapRef}
            style={{ width: "100%", height: 180, borderRadius: 4, background: "#f0ebe4", position: "relative", overflow: "hidden" }}
          />
        </div>
      )}
    </div>
  );
}
