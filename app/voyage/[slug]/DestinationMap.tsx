// app/voyage/[slug]/DestinationMap.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DestinationMap.tsx
"use client";

import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";
import { createRoot } from "react-dom/client";
import { Map as MapLibreMap, NavigationControl, Marker, Popup, setWorkerUrl } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import { Bed, Utensils, Camera, Compass } from "lucide-react";
import type { DestinationResolue } from "@/lib/carnets";
import styles from "./carnet.module.css";

// Fix : le worker interne de MapLibre a besoin de son fichier compagnon
// (maplibre-gl-shared.mjs) juste à côté de lui. On les sert tous les deux
// depuis /public, à un chemin statique fixe, pour qu'ils restent toujours ensemble.
if (typeof window !== "undefined") {
  setWorkerUrl("/maplibre-gl-worker.mjs");
}

const MAPTILER_KEY = "5Qqxke6FycyTCZ05TNMn";
// "hybrid" = vraie photo satellite avec les noms de lieux/routes en
// superposition — contrairement au fond vectoriel "streets", il n'y a plus
// de contour terre/mer simplifié qui peut se tromper : c'est une vraie
// photo aérienne, donc plus jamais de pin qui "tombe dans l'eau" à tort.
const STYLE_URL = `https://api.maptiler.com/maps/hybrid/style.json?key=${MAPTILER_KEY}`;
const TILE_URL_TEMPLATE = `https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${MAPTILER_KEY}`;

type Categorie = "hebergements" | "restaurants" | "activites";
type Lieu = { nom: string; lat?: number; lng?: number; infosPratiques?: string };

const CATEGORIES: { key: Categorie; label: string; Icon: typeof Bed; color: string }[] = [
  { key: "hebergements", label: "Hôtels", Icon: Bed, color: "#7d4e6b" },
  { key: "activites", label: "Sites & activités", Icon: Camera, color: "#7a9e7e" },
  { key: "restaurants", label: "Restaurants", Icon: Utensils, color: "#c8956c" },
];

export interface DestinationMapHandle {
  centrerSur: (lat: number, lng: number, nom?: string) => void;
  scrollIntoView: () => void;
}

function escapeHtml(texte: string): string {
  return texte
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Une position est valide si c'est un vrai nombre, pas NaN, et dans les
// bornes géographiques réelles. typeof NaN === "number", donc on doit
// exclure NaN explicitement.
function positionValide(l: Lieu): l is { nom: string; lat: number; lng: number; infosPratiques?: string } {
  return (
    typeof l.lat === "number" &&
    typeof l.lng === "number" &&
    !Number.isNaN(l.lat) &&
    !Number.isNaN(l.lng) &&
    Math.abs(l.lat) <= 90 &&
    Math.abs(l.lng) <= 180
  );
}

function clePourLieu(lat: number, lng: number) {
  return `${lat},${lng}`;
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

function precacherTuiles(centre: { lat: number; lng: number }) {
  const zooms = [11, 12, 13, 14, 15];
  const rayonTuiles = 2;

  zooms.forEach((zoom) => {
    const { x: cx, y: cy } = latLngVersTuile(centre.lat, centre.lng, zoom);
    for (let dx = -rayonTuiles; dx <= rayonTuiles; dx++) {
      for (let dy = -rayonTuiles; dy <= rayonTuiles; dy++) {
        const x = cx + dx;
        const y = cy + dy;
        const url = TILE_URL_TEMPLATE.replace("{z}", String(zoom))
          .replace("{x}", String(x))
          .replace("{y}", String(y));
        fetch(url, { mode: "cors" }).catch(() => {});
      }
    }
  });
}

const DestinationMap = forwardRef<DestinationMapHandle, { destination: DestinationResolue; apiKey?: string }>(
  function DestinationMap({ destination }, ref) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<MapLibreMap | null>(null);
    // Une seule Marker par lieu, chacune avec SA PROPRE bulle attachée une
    // fois pour toutes (pattern officiel MapLibre : marker.setPopup()).
    // Plus de bulle partagée recréée à chaque clic.
    const markersParCle = useRef<Map<string, Marker>>(new Map());
    const centreGeneralRef = useRef<{ lat: number; lng: number } | null>(null);
    const [pret, setPret] = useState(false);
    const [erreur, setErreur] = useState(false);
    const [filtres, setFiltres] = useState<Set<Categorie>>(new Set(["hebergements", "restaurants", "activites"]));

    const lieuxParCategorie: Record<Categorie, Lieu[]> = {
      hebergements: destination.hebergements ?? [],
      restaurants: destination.restaurants ?? [],
      activites: destination.activites ?? [],
    };

    const aDesCoordonnees = Object.values(lieuxParCategorie).some((liste) => liste.some(positionValide));

    // Vole vers un lieu et ouvre SA bulle (déjà attachée à son marker).
    // Ferme d'abord toute autre bulle ouverte, sans jamais déclencher de
    // recentrage automatique — ça, c'est désormais le rôle exclusif du
    // bouton "Vue générale".
    function allerVers(lat: number, lng: number) {
      const map = mapInstance.current;
      const marker = markersParCle.current.get(clePourLieu(lat, lng));
      if (!map || !marker) return;

      markersParCle.current.forEach((m) => {
        if (m !== marker) m.getPopup()?.isOpen() && m.togglePopup();
      });

      map.flyTo({ center: [lng, lat], zoom: 16 });
      if (!marker.getPopup()?.isOpen()) marker.togglePopup();
    }

    function vueGenerale() {
      const map = mapInstance.current;
      const centre = centreGeneralRef.current;
      if (!map || !centre) return;
      markersParCle.current.forEach((m) => m.getPopup()?.isOpen() && m.togglePopup());
      map.flyTo({ center: [centre.lng, centre.lat], zoom: 13 });
    }

    useImperativeHandle(ref, () => ({
      centrerSur(lat: number, lng: number) {
        allerVers(lat, lng);
      },
      scrollIntoView() {
        wrapRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
      },
    }));

    // Création de la carte (une seule fois par destination)
    useEffect(() => {
      if (!aDesCoordonnees || !mapRef.current) return;
      let annule = false;

      const tousLesPoints = Object.values(lieuxParCategorie).flat().filter(positionValide);
      if (tousLesPoints.length === 0) return;

      const centre = {
        lat: tousLesPoints.reduce((s, p) => s + p.lat, 0) / tousLesPoints.length,
        lng: tousLesPoints.reduce((s, p) => s + p.lng, 0) / tousLesPoints.length,
      };
      centreGeneralRef.current = centre;

      try {
        const map = new MapLibreMap({
          container: mapRef.current,
          style: STYLE_URL,
          center: [centre.lng, centre.lat],
          zoom: 13,
          attributionControl: false,
        });
        map.addControl(new NavigationControl({ showCompass: false }), "top-right");

        map.on("load", () => {
          if (annule) return;
          mapInstance.current = map;
          precacherTuiles(centre);
        });

        // "idle" garantit que la carte est totalement stabilisée (style
        // chargé, tuiles rendues, projection correcte) avant qu'on pose les
        // pins — sinon ils peuvent apparaître décalés jusqu'au premier
        // zoom/déplacement.
        map.once("idle", () => {
          if (annule) return;
          setPret(true);
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

    // Le reste de la page (photos qui chargent, etc.) peut légèrement
    // déplacer/redimensionner le conteneur de la carte APRÈS son
    // initialisation. Sans resynchronisation continue, les pins restent
    // calés sur l'ancienne position du conteneur et semblent "décalés",
    // alors que les bulles (recalculées à chaque ouverture) restent
    // justes. On observe le conteneur en continu et on resynchronise
    // MapLibre à chaque changement réel.
    useEffect(() => {
      if (!mapRef.current) return;
      const observer = new ResizeObserver(() => {
        mapInstance.current?.resize();
      });
      observer.observe(mapRef.current);

      // Filet de sécurité supplémentaire : si des images plus haut sur la
      // page finissent de charger et poussent la carte vers le bas sans
      // changer sa taille, ResizeObserver ne le détecte pas. On force une
      // dernière resynchronisation quand toute la page est chargée.
      const surChargementComplet = () => mapInstance.current?.resize();
      window.addEventListener("load", surChargementComplet);

      return () => {
        observer.disconnect();
        window.removeEventListener("load", surChargementComplet);
      };
    }, []);

    // (re)dessine les pins selon les filtres actifs — chaque pin porte sa
    // propre bulle, attachée une seule fois via setPopup (pattern officiel).
    useEffect(() => {
      if (!pret || !mapInstance.current) return;

      markersParCle.current.forEach((m) => m.remove());
      markersParCle.current = new Map();

      CATEGORIES.forEach(({ key, Icon, color }) => {
        if (!filtres.has(key)) return;
        lieuxParCategorie[key].forEach((lieu) => {
          if (!positionValide(lieu)) {
            if (lieu.lat !== undefined || lieu.lng !== undefined) {
              console.warn(`[Carte] Coordonnées invalides pour "${lieu.nom}" :`, lieu.lat, lieu.lng);
            }
            return;
          }
          const { lat, lng } = lieu;

          const pin = document.createElement("div");
          pin.style.cssText = "position:relative;width:30px;height:39px;cursor:pointer;";
          pin.innerHTML = `
            <svg width="30" height="39" viewBox="0 0 30 39" style="position:absolute;top:0;left:0;filter:drop-shadow(0 2px 4px rgba(0,0,0,.3));">
              <path d="M15 1C7.8 1 2 6.8 2 14c0 10.5 13 24 13 24s13-13.5 13-24C28 6.8 22.2 1 15 1z" fill="${color}" stroke="#fff" stroke-width="2"/>
            </svg>
          `;
          const iconSlot = document.createElement("div");
          iconSlot.style.cssText = "position:absolute;top:0;left:0;width:30px;height:28px;display:flex;align-items:center;justify-content:center;pointer-events:none;";
          pin.appendChild(iconSlot);
          createRoot(iconSlot).render(<Icon color="#fff" size={15} strokeWidth={2} />);

          const lienMaps = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
          const infosHtml =
            key === "activites" && lieu.infosPratiques
              ? `<div style="font-size:12.5px;color:#5a5248;margin-bottom:8px;line-height:1.5;white-space:pre-line;">${escapeHtml(lieu.infosPratiques)}</div>`
              : "";
          // anchor: "bottom" fixe la bulle TOUJOURS au-dessus du pin, quelle
          // que soit sa taille — sans ça, MapLibre bascule automatiquement
          // la bulle (au-dessus/en dessous/à gauche/à droite) pour éviter
          // qu'elle déborde du cadre, ce qui donnait l'impression que le pin
          // et la bulle étaient "décalés" uniquement sur les bulles plus
          // grandes (activités avec infos pratiques), jamais sur les
          // petites (hébergements).
          const popup = new Popup({ closeOnClick: false, offset: 18, anchor: "bottom" }).setHTML(
            `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;min-width:160px;max-width:240px;">
              <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${escapeHtml(lieu.nom)}</div>
              ${infosHtml}
              <a href="${lienMaps}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:none;">Voir sur Google Maps</a>
            </div>`
          );

          const marker = new Marker({ element: pin, anchor: "bottom" })
            .setLngLat([lng, lat])
            .setPopup(popup)
            .addTo(mapInstance.current!);

          // Le clic sur le pin ouvre sa bulle ET vole dessus — comportement
          // identique au clic sur la fiche correspondante (allerVers).
          pin.addEventListener("click", () => allerVers(lat, lng));

          markersParCle.current.set(clePourLieu(lat, lng), marker);
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
          new Marker({ element: dot })
            .setLngLat([position.coords.longitude, position.coords.latitude])
            .addTo(mapInstance.current);
        },
        () => {},
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
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
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
          {/* Retour explicite à la vue générale : plus aucun effet de bord
              caché lié à la fermeture d'une bulle, on demande clairement. */}
          <button
            onClick={vueGenerale}
            title="Revenir à la vue générale"
            style={{
              marginLeft: "auto",
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              padding: "8px 14px",
              borderRadius: 24,
              border: "1px solid #d8d2c6",
              background: "none",
              color: "#6b6459",
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
            }}
          >
            <Compass size={13} strokeWidth={2} />
            Vue générale
          </button>
        </div>
        <div
          ref={mapRef}
          style={{ width: "100%", height: 320, borderRadius: 4, background: "#f0ebe4", position: "relative", overflow: "hidden" }}
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
