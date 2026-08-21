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
import { Map as MapLibreMap, Marker, setWorkerUrl } from "maplibre-gl";
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
}: {
  onSelect: (lieu: Resultat) => void;
  placeholder?: string;
  lat?: number;
  lng?: number;
}) {
  const [saisie, setSaisie] = useState(
    typeof lat === "number" && typeof lng === "number" ? "Position enregistrée" : ""
  );
  const [resultats, setResultats] = useState<Resultat[]>([]);
  const [recherche, setRecherche] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const [lieuChoisi, setLieuChoisi] = useState<Resultat | null>(
    typeof lat === "number" && typeof lng === "number" ? { nom: "Position enregistrée", lat, lng } : null
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
    if (!lieuChoisi || !mapRef.current) return;

    const map = new MapLibreMap({
      container: mapRef.current,
      style: STYLE_URL,
      center: [lieuChoisi.lng, lieuChoisi.lat],
      zoom: 16,
      attributionControl: false,
    });
    mapInstance.current = map;

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
    setLieuChoisi(null);
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
    setSaisie(r.nom);
    setLieuChoisi(r);
    setResultats([]);
    setOuvert(false);
  }

  return (
    <div ref={wrapRef} style={{ position: "relative", marginBottom: 10 }}>
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
          background: "#fffaf3",
          boxSizing: "border-box",
        }}
        placeholder={placeholder ?? "🔍 Rechercher un lieu..."}
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
      {lieuChoisi && (
        <div style={{ marginTop: 8 }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11.5, color: "#a8734c", marginBottom: 6 }}>
            📍 {lieuChoisi.nom === "Position enregistrée" ? "Position actuelle — vérifie qu'elle est bien placée, ou fais-la glisser pour ajuster." : "Vérifie que le pin est bien sur le bâtiment — fais-le glisser si besoin."}
          </p>
          <div
            ref={mapRef}
            style={{ width: "100%", height: 180, borderRadius: 4, background: "#f0ebe4", position: "relative", overflow: "hidden" }}
          />
        </div>
      )}
    </div>
  );
}
