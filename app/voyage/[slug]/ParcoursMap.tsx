// app/voyage/[slug]/ParcoursMap.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ParcoursMap.tsx
//
// Carte du trajet global du voyage (départ → destination 1 → destination 2 → retour),
// avec un tracé visuel entre les étapes. Les distances affichées sont "à vol d'oiseau" :
// Google Maps ne calcule pas de vrais temps de trajet en avion, seulement en
// voiture/marche/transports en commun — donc pas de durée réelle affichée ici.
"use client";

import { useEffect, useRef, useState } from "react";
import type { EtapeParcours } from "@/lib/carnets";
import styles from "./carnet.module.css";

declare global {
  interface Window {
    google?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    __mamzellesMapsCallback?: () => void;
  }
}

let scriptChargement: Promise<void> | null = null;

function chargerGoogleMaps(apiKey: string): Promise<void> {
  if (window.google?.maps) return Promise.resolve();
  if (scriptChargement) return scriptChargement;
  scriptChargement = new Promise((resolve) => {
    window.__mamzellesMapsCallback = () => resolve();
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=marker&callback=__mamzellesMapsCallback&loading=async`;
    script.async = true;
    document.head.appendChild(script);
  });
  return scriptChargement;
}

// Distance à vol d'oiseau entre deux points (formule de Haversine), en km
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

export default function ParcoursMap({ etapes, apiKey }: { etapes: EtapeParcours[]; apiKey: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [pret, setPret] = useState(false);
  const [erreur, setErreur] = useState(false);

  useEffect(() => {
    if (!apiKey || etapes.length < 2) return;
    let annule = false;

    chargerGoogleMaps(apiKey)
      .then(() => {
        if (annule || !mapRef.current || !window.google) return;

        const bounds = new window.google.maps.LatLngBounds();
        etapes.forEach((e) => bounds.extend({ lat: e.lat, lng: e.lng }));

        const map = new window.google.maps.Map(mapRef.current, {
          mapId: "mamzelles-parcours-map",
          disableDefaultUI: true,
          zoomControl: true,
        });
        map.fitBounds(bounds, 40);

        // Ligne pointillée reliant les étapes dans l'ordre
        new window.google.maps.Polyline({
          path: etapes.map((e) => ({ lat: e.lat, lng: e.lng })),
          geodesic: true,
          strokeColor: "#c8956c",
          strokeOpacity: 0,
          icons: [
            {
              icon: { path: "M 0,-1 0,1", strokeOpacity: 1, scale: 3 },
              offset: "0",
              repeat: "12px",
            },
          ],
          map,
        });

        // Un pin numéroté par étape
        etapes.forEach((e, i) => {
          const pin = document.createElement("div");
          pin.style.cssText =
            "background:#1a1512;color:#fff;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-family:Inter,sans-serif;font-size:12px;font-weight:600;border:2px solid #fff;box-shadow:0 2px 6px rgba(0,0,0,.3);";
          pin.textContent = String(i + 1);
          new window.google.maps.marker.AdvancedMarkerElement({
            map,
            position: { lat: e.lat, lng: e.lng },
            content: pin,
            title: e.nom,
          });
        });

        setPret(true);
      })
      .catch(() => setErreur(true));

    return () => {
      annule = true;
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
    <div style={{ marginTop: 24 }}>
      <div ref={mapRef} style={{ width: "100%", height: 260, borderRadius: 4, background: "#f0ebe4", marginBottom: 16 }} />
      {erreur && (
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#c0392b", marginBottom: 12 }}>
          La carte n&apos;a pas pu se charger.
        </p>
      )}
      {pret && (
        <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
          {segments.map((s, i) => (
            <div key={i} className={styles.meta} style={{ fontSize: 12.5 }}>
              {s.de} → {s.a} · environ {s.km.toLocaleString("fr-FR")} km à vol d&apos;oiseau
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
