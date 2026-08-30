// app/voyage/[slug]/ParcoursMap.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ParcoursMap.tsx
//
// Carte du trajet global du voyage (départ → destination 1 → destination 2 → retour),
// avec un tracé visuel entre les étapes. Les distances affichées sont "à vol d'oiseau" :
// pas de vraie durée de trajet en avion affichée ici.
"use client";

import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";
import { Map as MapLibreMap, NavigationControl, Marker, Popup, LngLatBounds, setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { EtapeParcours } from "@/lib/carnets";
import styles from "./carnet.module.css";

// Fix : même correction que DestinationMap.tsx (voir ce fichier pour l'explication complète).
if (typeof window !== "undefined") {
  setWorkerUrl("/maplibre-gl-worker.mjs");
}

// ⚠️⚠️⚠️ SOLUTION TEMPORAIRE — REVENIR À MAPTILER APRÈS LE 12 SEPTEMBRE 2026 ⚠️⚠️⚠️
// Clé MapTiler invalidée par leur équipe (quota gratuit dépassé), jusqu'au
// 12/09/2026. En attendant, on construit un style MapLibre "maison" avec
// des tuiles OpenStreetMap standard (gratuit, sans clé), au lieu du vrai
// style vectoriel MapTiler.
//
// POUR REVENIR À MAPTILER, remplacer STYLE_URL_OU_OBJET par :
// const STYLE_URL = `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`;
// (et utiliser `style: STYLE_URL` au lieu de `style: STYLE_URL_OU_OBJET`
// dans le new MapLibreMap plus bas). Chercher aussi "SOLUTION D'URGENCE"
// pour le préchargement hors-ligne, désactivé plus bas dans ce fichier.
const MAPTILER_KEY = "5Qqxke6FycyTCZ05TNMn"; // gardée en mémoire, prête pour le retour
const STYLE_URL_OU_OBJET = {
  version: 8 as const,
  sources: {
    osm: {
      type: "raster" as const,
      tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
      tileSize: 256,
      attribution: "&copy; OpenStreetMap contributors",
    },
  },
  layers: [{ id: "osm", type: "raster" as const, source: "osm" }],
};
const TILE_URL_TEMPLATE = `https://tile.openstreetmap.org/{z}/{x}/{y}.png`;

function distanceKm(a: EtapeParcours, b: EtapeParcours): number {
  const R = 6371;
  const dLat = ((b.lat - a.lat) * Math.PI) / 180;
  const dLng = ((b.lng - a.lng) * Math.PI) / 180;
  const lat1 = (a.lat * Math.PI) / 180;
  const lat2 = (b.lat * Math.PI) / 180;
  const x = Math.sin(dLat / 2) ** 2 + Math.sin(dLng / 2) ** 2 * Math.cos(lat1) * Math.cos(lat2);
  const c = 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x));
  return Math.round(R * c);
}

function contenuBulle(nom: string): string {
  return `<div style="font-family:Inter,sans-serif;padding:2px 4px;">
    <span style="font-weight:600;font-size:14px;">${nom}</span>
  </div>`;
}

function latLngVersTuile(lat: number, lng: number, zoom: number) {
  const n = Math.pow(2, zoom);
  const x = Math.floor(((lng + 180) / 360) * n);
  const latRad = (lat * Math.PI) / 180;
  const y = Math.floor(
    ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n
  );
  return { x, y };
}

// Pré-télécharge les tuiles autour de CHAQUE étape du parcours (pas juste le centre global),
// pour que toute la zone de chaque destination soit disponible hors-ligne.
function precacherTuiles(etapes: EtapeParcours[]) {
  const zooms = [5, 6, 11, 13];
  const rayonTuiles = 2;

  etapes.forEach((etape) => {
    zooms.forEach((zoom) => {
      const { x: cx, y: cy } = latLngVersTuile(etape.lat, etape.lng, zoom);
      for (let dx = -rayonTuiles; dx <= rayonTuiles; dx++) {
        for (let dy = -rayonTuiles; dy <= rayonTuiles; dy++) {
          const url = TILE_URL_TEMPLATE.replace("{z}", String(zoom))
            .replace("{x}", String(cx + dx))
            .replace("{y}", String(cy + dy));
          fetch(url, { mode: "cors" }).catch(() => {});
        }
      }
    });
  });
}

export interface ParcoursMapHandle {
  centrerSur: (index: number) => void;
}

const ParcoursMap = forwardRef<ParcoursMapHandle, { etapes: EtapeParcours[]; apiKey?: string }>(
  function ParcoursMap({ etapes }, ref) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<MapLibreMap | null>(null);
    const markersRef = useRef<Marker[]>([]);
    const popupRef = useRef<Popup | null>(null);
    const vueGeneraleRef = useRef<() => void>(() => {});
    const activeIndexRef = useRef<number | null>(null);
    const [pret, setPret] = useState(false);
    const [erreur, setErreur] = useState(false);

    // Comportement unique, quel que soit le point d'entrée (liste ou pin direct) :
    // - clic sur une étape différente de celle déjà active → zoome dessus (zoom 6)
    // - clic sur l'étape déjà active → revient à la vue d'ensemble
    function basculerEtape(index: number) {
      const e = etapes[index];
      if (!e || !mapInstance.current) return;

      if (popupRef.current) {
        popupRef.current.remove();
        popupRef.current = null;
      }

      if (activeIndexRef.current === index) {
        // Déjà sur cette étape : on revient à la vue d'ensemble
        activeIndexRef.current = null;
        vueGeneraleRef.current();
        return;
      }

      activeIndexRef.current = index;
      mapInstance.current.flyTo({ center: [e.lng, e.lat], zoom: 6 });
      popupRef.current = new Popup({ closeOnClick: true })
        .setLngLat([e.lng, e.lat])
        .setHTML(contenuBulle(e.nom))
        .addTo(mapInstance.current);
      popupRef.current.on("close", () => {
        // Fermeture manuelle de la bulle (clic ailleurs sur la carte) : on considère
        // qu'on n'est plus "focus" sur cette étape, sans forcer de dézoom automatique.
        activeIndexRef.current = null;
      });
    }

    useImperativeHandle(ref, () => ({
      centrerSur(index: number) {
        basculerEtape(index);
        wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      },
    }));

    useEffect(() => {
      if (etapes.length < 2 || !mapRef.current) return;
      let annule = false;

      try {
        const map = new MapLibreMap({
          container: mapRef.current,
          style: STYLE_URL_OU_OBJET,
          center: [etapes[0].lng, etapes[0].lat],
          zoom: 3,
          attributionControl: false,
        });
        map.addControl(new NavigationControl({ showCompass: false }), "top-right");

        map.on("load", () => {
          if (annule) return;
          mapInstance.current = map;

          // Correctif : force MapLibre à recalculer la taille de son conteneur.
          setTimeout(() => map.resize(), 100);

          const bounds = new LngLatBounds();
          etapes.forEach((e) => bounds.extend([e.lng, e.lat]));
          map.fitBounds(bounds, { padding: 40 });
          vueGeneraleRef.current = () => map.fitBounds(bounds, { padding: 40 });

          map.addSource("trajet", {
            type: "geojson",
            data: {
              type: "Feature",
              properties: {},
              geometry: {
                type: "LineString",
                coordinates: etapes.map((e) => [e.lng, e.lat]),
              },
            },
          });
          map.addLayer({
            id: "trajet-ligne",
            type: "line",
            source: "trajet",
            paint: {
              "line-color": "#c8956c",
              "line-width": 2,
              "line-dasharray": [2, 2],
            },
          });

          etapes.forEach((e, i) => {
            const pin = document.createElement("div");
            pin.style.cssText =
              "background:#c8956c;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-style:normal;font-size:12px;font-weight:600;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3);cursor:pointer;";
            pin.textContent = String(i + 1);

            const marker = new Marker({ element: pin, anchor: "center" })
              .setLngLat([e.lng, e.lat])
              .addTo(map);

            pin.addEventListener("click", () => {
              basculerEtape(i);
            });

            markersRef.current.push(marker);
          });

          setPret(true);
          // ⚠️ SOLUTION D'URGENCE — préchargement désactivé pendant l'usage
          // d'OpenStreetMap (leur politique interdit explicitement le
          // téléchargement en masse/hors-ligne). Décommenter la ligne
          // ci-dessous après le retour à MapTiler le 12/09.
          // precacherTuiles(etapes);
        });

        map.on("error", () => setErreur(true));
      } catch {
        setErreur(true);
      }

      return () => {
        annule = true;
        mapInstance.current?.remove();
        mapInstance.current = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [etapes.map((e) => e.nom).join("-")]);

    if (etapes.length < 2) return null;

    const segments = etapes.slice(1).map((e, i) => ({
      de: etapes[i].nom,
      a: e.nom,
      km: distanceKm(etapes[i], e),
    }));

    return (
      <div style={{ marginTop: 24 }} ref={wrapRef}>
        <div ref={mapRef} style={{ width: "100%", height: 260, borderRadius: 4, background: "#f0ebe4", marginBottom: 16, position: "relative", overflow: "hidden" }} />
        {erreur && (
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#c0392b", marginBottom: 12 }}>
            La carte n&apos;a pas pu se charger.
          </p>
        )}
        {pret && (
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 32 }}>
            {segments.map((s, i) => (
              <div key={i} className={styles.meta} style={{ fontSize: 12.5 }}>
                {s.de} → {s.a} · environ {s.km.toLocaleString("fr-FR")}{"\u00A0"}km à vol d&apos;oiseau
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

export default ParcoursMap;
