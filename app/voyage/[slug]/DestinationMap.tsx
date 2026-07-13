// app/voyage/[slug]/DestinationMap.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DestinationMap.tsx
"use client";

import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";
import { createRoot } from "react-dom/client";
import { Bed, Utensils, Camera } from "lucide-react";
import type { DestinationResolue } from "@/lib/carnets";
import styles from "./carnet.module.css";

type Categorie = "hebergements" | "restaurants" | "activites";

const CATEGORIES: { key: Categorie; label: string; Icon: typeof Bed; color: string }[] = [
  { key: "hebergements", label: "Hôtels", Icon: Bed, color: "#7d4e6b" },
  { key: "restaurants", label: "Restaurants", Icon: Utensils, color: "#c8956c" },
  { key: "activites", label: "Activités", Icon: Camera, color: "#7a9e7e" },
];

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
        infoWindowRef.current = new window.google.maps.InfoWindow({
          position: { lat, lng },
          content: `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;">${nom}</div>`,
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
            title: lieu.nom,
          });
          marker.addListener("gmp-click", () => {
            mapInstance.current.panTo({ lat: lieu.lat, lng: lieu.lng });
            if (infoWindowRef.current) infoWindowRef.current.close();
            infoWindowRef.current = new window.google!.maps.InfoWindow({
              position: { lat: lieu.lat, lng: lieu.lng },
              content: `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;">${lieu.nom}</div>`,
            });
            infoWindowRef.current.open(mapInstance.current);
          });
          markersRef.current.push(marker);
        });
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pret, filtres, destination.id]);

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
        <div className={styles.subEyebrow}>Carte interactive</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => toggleFiltre(c.key)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 12.5,
                padding: "6px 14px",
                borderRadius: 20,
                border: filtres.has(c.key) ? `1px solid ${c.color}` : "1px solid #e0dcd4",
                background: filtres.has(c.key) ? c.color : "#fff",
                color: filtres.has(c.key) ? "#fff" : "#8a8074",
                cursor: "pointer",
                transition: "all .15s",
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
              }}
            >
              <c.Icon size={14} strokeWidth={2} />
              {c.label}
            </button>
          ))}
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
