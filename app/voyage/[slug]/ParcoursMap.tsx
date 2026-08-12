// app/voyage/[slug]/ParcoursMap.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ParcoursMap.tsx
//
// Carte du trajet global du voyage (départ → destination 1 → destination 2 → retour),
// avec un tracé visuel entre les étapes. Les distances affichées sont "à vol d'oiseau" :
// pas de vraie durée de trajet en avion affichée ici.
"use client";

import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import type { EtapeParcours } from "@/lib/carnets";
import styles from "./carnet.module.css";

const MAPTILER_KEY = "5Qqxke6FycyTCZ05TNMn";
const STYLE_URL = `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`;
const TILE_URL_TEMPLATE = `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`;

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
    const mapInstance = useRef<maplibregl.Map | null>(null);
    const markersRef = useRef<maplibregl.Marker[]>([]);
    const popupRef = useRef<maplibregl.Popup | null>(null);
    const vueGeneraleRef = useRef<() => void>(() => {});
    const [pret, setPret] = useState(false);
    const [erreur, setErreur] = useState(false);

    useImperativeHandle(ref, () => ({
      centrerSur(index: number) {
        const e = etapes[index];
        if (!e || !mapInstance.current) return;
        mapInstance.current.flyTo({ center: [e.lng, e.lat], zoom: 6 });
        if (popupRef.current) popupRef.current.remove();
        popupRef.current = new maplibregl.Popup({ closeOnClick: true })
          .setLngLat([e.lng, e.lat])
          .setHTML(contenuBulle(e.nom))
          .addTo(mapInstance.current);
        popupRef.current.on("close", () => vueGeneraleRef.current());
        wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      },
    }));

    useEffect(() => {
      if (etapes.length < 2 || !mapRef.current) return;
      let annule = false;

      try {
        const map = new maplibregl.Map({
          container: mapRef.current,
          style: STYLE_URL,
          center: [etapes[0].lng, etapes[0].lat],
          zoom: 3,
          attributionControl: false,
        });
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

        map.on("load", () => {
          if (annule) return;
          mapInstance.current = map;

          const bounds = new maplibregl.LngLatBounds();
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

            const marker = new maplibregl.Marker({ element: pin, anchor: "center" })
              .setLngLat([e.lng, e.lat])
              .addTo(map);

            pin.addEventListener("click", () => {
              map.flyTo({ center: [e.lng, e.lat] });
              if (popupRef.current) popupRef.current.remove();
              popupRef.current = new maplibregl.Popup({ closeOnClick: true })
                .setLngLat([e.lng, e.lat])
                .setHTML(contenuBulle(e.nom))
                .addTo(map);
              popupRef.current.on("close", () => vueGeneraleRef.current());
            });

            markersRef.current.push(marker);
          });

          setPret(true);
          precacherTuiles(etapes);
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
        <div ref={mapRef} style={{ width: "100%", height: 260, borderRadius: 4, background: "#f0ebe4", marginBottom: 16 }} />
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
