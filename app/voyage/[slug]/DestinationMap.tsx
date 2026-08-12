// app/voyage/[slug]/DestinationMap.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DestinationMap.tsx
"use client";

import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";
import { createRoot } from "react-dom/client";
import * as maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Bed, Utensils, Camera } from "lucide-react";
import type { DestinationResolue } from "@/lib/carnets";
import styles from "./carnet.module.css";

const MAPTILER_KEY = "5Qqxke6FycyTCZ05TNMn";
const STYLE_URL = `https://api.maptiler.com/maps/streets-v2/style.json?key=${MAPTILER_KEY}`;
const TILE_URL_TEMPLATE = `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`;

type Categorie = "hebergements" | "restaurants" | "activites";

const CATEGORIES: { key: Categorie; label: string; Icon: typeof Bed; color: string }[] = [
  { key: "hebergements", label: "Hôtels", Icon: Bed, color: "#7d4e6b" },
  { key: "activites", label: "Sites & activités", Icon: Camera, color: "#7a9e7e" },
  { key: "restaurants", label: "Restaurants", Icon: Utensils, color: "#c8956c" },
];

export interface DestinationMapHandle {
  centrerSur: (lat: number, lng: number, nom: string) => void;
  scrollIntoView: () => void;
}

function escapeHtml(texte: string): string {
  return texte
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Convertit lat/lng + niveau de zoom en coordonnées de tuile (x, y), standard slippy map
function latLngVersTuile(lat: number, lng: number, zoom: number) {
  const n = Math.pow(2, zoom);
  const x = Math.floor(((lng + 180) / 360) * n);
  const latRad = (lat * Math.PI) / 180;
  const y = Math.floor(
    ((1 - Math.log(Math.tan(latRad) + 1 / Math.cos(latRad)) / Math.PI) / 2) * n
  );
  return { x, y };
}

// Pré-télécharge (donc met en cache via le Service Worker) toutes les tuiles
// dans un rayon fixe autour du centre, pour plusieurs niveaux de zoom.
// Se lance automatiquement dès que la page est ouverte avec du réseau.
function precacherTuiles(centre: { lat: number; lng: number }) {
  const zooms = [11, 12, 13, 14, 15];
  const rayonTuiles = 2; // nombre de tuiles autour du centre à chaque niveau

  zooms.forEach((zoom) => {
    const { x: cx, y: cy } = latLngVersTuile(centre.lat, centre.lng, zoom);
    for (let dx = -rayonTuiles; dx <= rayonTuiles; dx++) {
      for (let dy = -rayonTuiles; dy <= rayonTuiles; dy++) {
        const x = cx + dx;
        const y = cy + dy;
        const url = TILE_URL_TEMPLATE.replace("{z}", String(zoom))
          .replace("{x}", String(x))
          .replace("{y}", String(y));
        // Simple fetch : le Service Worker intercepte et met en cache automatiquement
        fetch(url, { mode: "cors" }).catch(() => {
          // pas grave si une tuile échoue, on continue les autres
        });
      }
    }
  });
}

const DestinationMap = forwardRef<DestinationMapHandle, { destination: DestinationResolue; apiKey?: string }>(
  function DestinationMap({ destination }, ref) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<maplibregl.Map | null>(null);
    const markersRef = useRef<maplibregl.Marker[]>([]);
    const popupRef = useRef<maplibregl.Popup | null>(null);
    const vueGeneraleRef = useRef<() => void>(() => {});
    const [pret, setPret] = useState(false);
    const [erreur, setErreur] = useState(false);
    const [filtres, setFiltres] = useState<Set<Categorie>>(new Set(["hebergements", "restaurants", "activites"]));

    const lieuxParCategorie: Record<Categorie, { nom: string; lat?: number; lng?: number; infosPratiques?: string }[]> = {
      hebergements: destination.hebergements ?? [],
      restaurants: destination.restaurants ?? [],
      activites: destination.activites ?? [],
    };

    const aDesCoordonnees = Object.values(lieuxParCategorie).some((liste) =>
      liste.some((l) => typeof l.lat === "number" && typeof l.lng === "number")
    );

    useImperativeHandle(ref, () => ({
      centrerSur(lat: number, lng: number, nom: string) {
        if (!mapInstance.current) return;
        mapInstance.current.flyTo({ center: [lng, lat], zoom: 16 });
        if (popupRef.current) popupRef.current.remove();

        const lienMaps = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        const activiteCorrespondante = lieuxParCategorie.activites.find(
          (a) => a.lat === lat && a.lng === lng
        );
        const infosHtml = activiteCorrespondante?.infosPratiques
          ? `<div style="font-size:12.5px;color:#5a5248;margin-bottom:8px;line-height:1.5;white-space:pre-line;">${escapeHtml(activiteCorrespondante.infosPratiques)}</div>`
          : "";
        popupRef.current = new maplibregl.Popup({ closeOnClick: true })
          .setLngLat([lng, lat])
          .setHTML(
            `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;min-width:160px;max-width:240px;">
              <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${nom}</div>
              ${infosHtml}
              <a href="${lienMaps}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:none;">Voir sur Google Maps</a>
            </div>`
          )
          .addTo(mapInstance.current);
        popupRef.current.on("close", () => vueGeneraleRef.current());
      },
      scrollIntoView() {
        wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      },
    }));

    useEffect(() => {
      if (!aDesCoordonnees || !mapRef.current) return;
      let annule = false;

      const tousLesPoints = Object.values(lieuxParCategorie)
        .flat()
        .filter((l): l is { nom: string; lat: number; lng: number } => typeof l.lat === "number" && typeof l.lng === "number");

      if (tousLesPoints.length === 0) return;

      const centre = {
        lat: tousLesPoints.reduce((s, p) => s + p.lat, 0) / tousLesPoints.length,
        lng: tousLesPoints.reduce((s, p) => s + p.lng, 0) / tousLesPoints.length,
      };

      try {
        const map = new maplibregl.Map({
          container: mapRef.current,
          style: STYLE_URL,
          center: [centre.lng, centre.lat],
          zoom: 13,
          attributionControl: false,
        });
        map.addControl(new maplibregl.NavigationControl({ showCompass: false }), "top-right");

        map.on("load", () => {
          if (annule) return;
          mapInstance.current = map;
          vueGeneraleRef.current = () => map.flyTo({ center: [centre.lng, centre.lat], zoom: 13 });
          setPret(true);

          // Correctif : force MapLibre à recalculer la taille de son conteneur,
          // au cas où celui-ci n'avait pas encore sa taille finale au moment de l'init.
          setTimeout(() => map.resize(), 100);

          // Dès que la carte est chargée avec du réseau, on télécharge en arrière-plan
          // toutes les tuiles de la zone pour qu'elles restent dispo hors connexion.
          precacherTuiles(centre);
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
    }, [destination.id]);

    // (re)dessine les markers selon les filtres actifs
    useEffect(() => {
      if (!pret || !mapInstance.current) return;

      markersRef.current.forEach((m) => m.remove());
      markersRef.current = [];

      CATEGORIES.forEach(({ key, Icon, color }) => {
        if (!filtres.has(key)) return;
        lieuxParCategorie[key].forEach((lieu) => {
          if (typeof lieu.lat !== "number" || typeof lieu.lng !== "number") return;
          const lat = lieu.lat;
          const lng = lieu.lng;
          const pin = document.createElement("div");
          pin.style.cssText = `background:${color};width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.3);border:2px solid #fff;cursor:pointer;`;
          const inner = document.createElement("div");
          inner.style.cssText = "transform:rotate(45deg);display:flex;";
          pin.appendChild(inner);
          createRoot(inner).render(<Icon color="#fff" size={15} strokeWidth={2} />);

          const marker = new maplibregl.Marker({ element: pin, anchor: "bottom" })
            .setLngLat([lng, lat])
            .addTo(mapInstance.current!);

          pin.addEventListener("click", () => {
            mapInstance.current!.flyTo({ center: [lng, lat], zoom: 16 });
            if (popupRef.current) popupRef.current.remove();
            const lienMaps = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
            const infosHtml =
              key === "activites" && lieu.infosPratiques
                ? `<div style="font-size:12.5px;color:#5a5248;margin-bottom:8px;line-height:1.5;white-space:pre-line;">${escapeHtml(lieu.infosPratiques)}</div>`
                : "";
            popupRef.current = new maplibregl.Popup({ closeOnClick: true })
              .setLngLat([lng, lat])
              .setHTML(
                `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;min-width:160px;max-width:240px;">
                  <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${lieu.nom}</div>
                  ${infosHtml}
                  <a href="${lienMaps}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:none;">Voir sur Google Maps</a>
                </div>`
              )
              .addTo(mapInstance.current!);
            popupRef.current.on("close", () => vueGeneraleRef.current());
          });

          markersRef.current.push(marker);
        });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pret, filtres, destination.id]);

    // Localise le visiteur (avec sa permission) et affiche un point bleu sur la carte
    useEffect(() => {
      if (!pret || !mapInstance.current || !navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!mapInstance.current) return;
          const dot = document.createElement("div");
          dot.style.cssText = "width:16px;height:16px;border-radius:50%;background:#4285F4;border:2px solid #fff;box-shadow:0 0 0 4px rgba(66,133,244,0.25),0 1px 4px rgba(0,0,0,.3);";
          new maplibregl.Marker({ element: dot })
            .setLngLat([position.coords.longitude, position.coords.latitude])
            .addTo(mapInstance.current);
        },
        () => {
          // permission refusée ou position indisponible : on ignore silencieusement
        },
        { enableHighAccuracy: true, timeout: 8000 }
      );
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pret, destination.id]);

    function toggleFiltre(cat: Categorie) {
      setFiltres((prev) => {
        const next = new Set(prev);
        if (next.has(cat)) next.delete(cat);
        else next.add(cat);
        return next;
      });
    }

    if (!aDesCoordonnees) return null;

    return (
      <div style={{ marginTop: 40 }} ref={wrapRef}>
        <div className={styles.subEyebrow} style={{ marginBottom: 20 }}>Carte interactive</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => {
            const actif = filtres.has(c.key);
            return (
              <button
                key={c.key}
                onClick={() => toggleFiltre(c.key)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  padding: "8px 16px 8px 10px",
                  borderRadius: 24,
                  border: actif ? "1px solid #e8e0d6" : "1px solid #d8d2c6",
                  background: actif ? "#fff" : "none",
                  color: actif ? "#1a1512" : "#6b6459",
                  cursor: "pointer",
                  transition: "all .2s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 20,
                    height: 20,
                    borderRadius: "50%",
                    background: actif ? c.color : "#c8c2b6",
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <c.Icon size={11} strokeWidth={2} />
                </span>
                {c.label}
              </button>
            );
          })}
        </div>
        <div
          ref={mapRef}
          style={{ width: "100%", height: 320, borderRadius: 4, background: "#f0ebe4" }}
        />
        {erreur && (
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#c0392b", marginTop: 8 }}>
            La carte n&apos;a pas pu se charger.
          </p>
        )}
      </div>
    );
  }
);

export default DestinationMap;
