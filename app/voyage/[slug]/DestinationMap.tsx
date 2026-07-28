// app/voyage/[slug]/DestinationMap.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DestinationMap.tsx
"use client";

import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";
import { createRoot } from "react-dom/client";
import { Bed, Utensils, Camera } from "lucide-react";
import type { DestinationResolue } from "@/lib/carnets";
import styles from "./carnet.module.css";
import { chargerGoogleMaps } from "./googleMapsLoader";

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

const DestinationMap = forwardRef<DestinationMapHandle, { destination: DestinationResolue; apiKey: string }>(
  function DestinationMap({ destination, apiKey }, ref) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
    const markersRef = useRef<any[]>([]); // eslint-disable-line @typescript-eslint/no-explicit-any
    const infoWindowRef = useRef<any>(null); // eslint-disable-line @typescript-eslint/no-explicit-any
    const [pret, setPret] = useState(false);
    const [erreur, setErreur] = useState(false);
    const [filtres, setFiltres] = useState<Set<Categorie>>(new Set(["hebergements", "restaurants", "activites"]));

    const lieuxParCategorie: Record<Categorie, { nom: string; lat?: number; lng?: number }[]> = {
      hebergements: destination.hebergements ?? [],
      restaurants: destination.restaurants ?? [],
      activites: destination.activites ?? [],
    };

    const aDesCoordonnees = Object.values(lieuxParCategorie).some((liste) =>
      liste.some((l) => typeof l.lat === "number" && typeof l.lng === "number")
    );

    useImperativeHandle(ref, () => ({
      centrerSur(lat: number, lng: number, nom: string) {
        if (!mapInstance.current || !window.google) return;
        mapInstance.current.panTo({ lat, lng });
        mapInstance.current.setZoom(16);
        if (infoWindowRef.current) {
          infoWindowRef.current.close();
        }
        const lienMaps = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
        infoWindowRef.current = new window.google.maps.InfoWindow({
          position: { lat, lng },
          content: `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;min-width:160px;">
            <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${nom}</div>
            <a href="${lienMaps}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:none;">Voir sur Google Maps</a>
          </div>`,
        });
        infoWindowRef.current.open(mapInstance.current);
      },
      scrollIntoView() {
        wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      },
    }));

    useEffect(() => {
      if (!apiKey || !aDesCoordonnees) return;
      let annule = false;

      chargerGoogleMaps(apiKey)
        .then(() => {
          if (annule || !mapRef.current) return;

          const tousLesPoints = Object.values(lieuxParCategorie)
            .flat()
            .filter((l): l is { nom: string; lat: number; lng: number } => typeof l.lat === "number" && typeof l.lng === "number");

          if (tousLesPoints.length === 0) return;

          const centre = {
            lat: tousLesPoints.reduce((s, p) => s + p.lat, 0) / tousLesPoints.length,
            lng: tousLesPoints.reduce((s, p) => s + p.lng, 0) / tousLesPoints.length,
          };

          mapInstance.current = new window.google!.maps.Map(mapRef.current, {
            center: centre,
            zoom: 13,
            mapId: "mamzelles-carnet-map",
            disableDefaultUI: true,
            zoomControl: true,
          });

          setPret(true);
        })
        .catch(() => setErreur(true));

      return () => {
        annule = true;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [destination.id]);

    // (re)dessine les markers selon les filtres actifs
    useEffect(() => {
      if (!pret || !mapInstance.current || !window.google) return;

      markersRef.current.forEach((m) => (m.map = null));
      markersRef.current = [];

      CATEGORIES.forEach(({ key, Icon, color }) => {
        if (!filtres.has(key)) return;
        lieuxParCategorie[key].forEach((lieu) => {
          if (typeof lieu.lat !== "number" || typeof lieu.lng !== "number") return;
          const pin = document.createElement("div");
          pin.style.cssText = `background:${color};width:30px;height:30px;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 2px 6px rgba(0,0,0,.3);border:2px solid #fff;`;
          const inner = document.createElement("div");
          inner.style.cssText = "transform:rotate(45deg);display:flex;";
          createRoot(inner).render(<Icon color="#fff" size={15} strokeWidth={2} />);
          pin.appendChild(inner);
          pin.style.cursor = "pointer";

          const marker = new window.google!.maps.marker.AdvancedMarkerElement({
            map: mapInstance.current!,
            position: { lat: lieu.lat, lng: lieu.lng },
            content: pin,
          });
          marker.addListener("gmp-click", () => {
            mapInstance.current.panTo({ lat: lieu.lat, lng: lieu.lng });
            if (infoWindowRef.current) infoWindowRef.current.close();
            const lienMaps = `https://www.google.com/maps/search/?api=1&query=${lieu.lat},${lieu.lng}`;
            infoWindowRef.current = new window.google!.maps.InfoWindow({
              position: { lat: lieu.lat, lng: lieu.lng },
              content: `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;min-width:160px;">
                <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${lieu.nom}</div>
                <a href="${lienMaps}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:none;">Voir sur Google Maps</a>
              </div>`,
            });
            infoWindowRef.current.open(mapInstance.current);
          });
          markersRef.current.push(marker);
        });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pret, filtres, destination.id]);

    // Localise le visiteur (avec sa permission) et affiche un point bleu sur la carte
    useEffect(() => {
      if (!pret || !mapInstance.current || !window.google || !navigator.geolocation) return;

      navigator.geolocation.getCurrentPosition(
        (position) => {
          if (!mapInstance.current) return;
          const dot = document.createElement("div");
          dot.style.cssText = "width:16px;height:16px;border-radius:50%;background:#4285F4;border:2px solid #fff;box-shadow:0 0 0 4px rgba(66,133,244,0.25),0 1px 4px rgba(0,0,0,.3);";
          new window.google!.maps.marker.AdvancedMarkerElement({
            map: mapInstance.current,
            position: { lat: position.coords.latitude, lng: position.coords.longitude },
            content: dot,
            zIndex: 999,
          });
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

    if (!aDesCoordonnees) return null; // pas de coordonnées renseignées pour cette destination, on n'affiche rien

    return (
      <div style={{ marginTop: 40 }} ref={wrapRef}>
        <div className={styles.subEyebrow} style={{ marginBottom: 20 }}>Carte interactive</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => {
            const r = parseInt(c.color.slice(1, 3), 16);
            const g = parseInt(c.color.slice(3, 5), 16);
            const b = parseInt(c.color.slice(5, 7), 16);
            return (
              <button
                key={c.key}
                onClick={() => toggleFiltre(c.key)}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  padding: "8px 16px 8px 8px",
                  borderRadius: 24,
                  border: "1px solid #e8e0d6",
                  background: filtres.has(c.key) ? `rgba(${r}, ${g}, ${b}, 0.08)` : "#fff",
                  color: "#1a1512",
                  cursor: "pointer",
                  transition: "all .15s",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                }}
              >
                <span
                  style={{
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    background: c.color,
                    color: "#fff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <c.Icon size={12} strokeWidth={2} />
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
