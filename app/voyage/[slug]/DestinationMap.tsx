// app/voyage/[slug]/DestinationMap.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/DestinationMap.tsx
"use client";

import { useEffect, useImperativeHandle, useRef, useState, forwardRef } from "react";
import { createRoot } from "react-dom/client";
import type L from "leaflet";
import "leaflet/dist/leaflet.css";
import { Bed, Utensils, Camera, Compass } from "lucide-react";
import type { DestinationResolue } from "@/lib/carnets";
import styles from "./carnet.module.css";

const MAPTILER_KEY = "5Qqxke6FycyTCZ05TNMn";
// Même fond de carte MapTiler qu'avant (mêmes couleurs, même style) — seul
// le moteur qui positionne les pins change (Leaflet au lieu de MapLibre),
// pour corriger un bug de repositionnement reconnu et non résolu côté
// MapLibre (issues GitHub #2190 et #6925).
const TILE_URL_TEMPLATE = `https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=${MAPTILER_KEY}`;

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

function creerIconePin(L: typeof import("leaflet"), Icon: typeof Bed, color: string) {
  const container = document.createElement("div");
  container.style.cssText = "width:30px;height:39px;";
  container.innerHTML = `
    <svg width="30" height="39" viewBox="0 0 30 39" style="filter:drop-shadow(0 2px 4px rgba(0,0,0,.3));">
      <path d="M15 1C7.8 1 2 6.8 2 14c0 10.5 13 24 13 24s13-13.5 13-24C28 6.8 22.2 1 15 1z" fill="${color}" stroke="#fff" stroke-width="2"/>
    </svg>
  `;
  const iconSlot = document.createElement("div");
  iconSlot.style.cssText = "position:absolute;top:0;left:0;width:30px;height:28px;display:flex;align-items:center;justify-content:center;pointer-events:none;";
  container.style.position = "relative";
  container.appendChild(iconSlot);
  createRoot(iconSlot).render(<Icon color="#fff" size={15} strokeWidth={2} />);

  return L.divIcon({
    html: container,
    className: "",
    iconSize: [30, 39],
    // Ancre en bas-centre : la pointe de la goutte touche exactement la
    // coordonnée, comme anchor:"bottom" sous MapLibre.
    iconAnchor: [15, 39],
    popupAnchor: [0, -39],
  });
}

const DestinationMap = forwardRef<DestinationMapHandle, { destination: DestinationResolue; apiKey?: string }>(
  function DestinationMap({ destination }, ref) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<import("leaflet").Map | null>(null);
    const markersParCle = useRef<Map<string, import("leaflet").Marker>>(new Map());
    const leafletRef = useRef<typeof import("leaflet") | null>(null);
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

    // Vole vers un lieu et ouvre sa bulle. Ferme d'abord toute autre bulle
    // ouverte. Le retour à la vue générale reste exclusivement le rôle du
    // bouton "Vue générale" — jamais un effet de bord caché.
    function allerVers(lat: number, lng: number) {
      const map = mapInstance.current;
      const marker = markersParCle.current.get(clePourLieu(lat, lng));
      if (!map || !marker) return;

      markersParCle.current.forEach((m) => {
        if (m !== marker) m.closePopup();
      });

      map.flyTo([lat, lng], 16);
      marker.openPopup();
    }

    function vueGenerale() {
      const map = mapInstance.current;
      const centre = centreGeneralRef.current;
      if (!map || !centre) return;
      markersParCle.current.forEach((m) => m.closePopup());
      map.flyTo([centre.lat, centre.lng], 13);
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

      const tousLesPoints = Object.values(lieuxParCategorie).flat().filter(positionValide);
      if (tousLesPoints.length === 0) return;

      const centre = {
        lat: tousLesPoints.reduce((s, p) => s + p.lat, 0) / tousLesPoints.length,
        lng: tousLesPoints.reduce((s, p) => s + p.lng, 0) / tousLesPoints.length,
      };
      centreGeneralRef.current = centre;
      let annule = false;

      import("leaflet")
        .then((mod) => {
          if (annule || !mapRef.current) return;
          const L = mod.default;
          leafletRef.current = L;

          const map = L.map(mapRef.current, {
            center: [centre.lat, centre.lng],
            zoom: 13,
            attributionControl: false,
            zoomControl: true,
          });

          L.tileLayer(TILE_URL_TEMPLATE, {
            maxZoom: 19,
            tileSize: 512,
            zoomOffset: -1,
            crossOrigin: true,
            // Garde plus de tuiles voisines en mémoire pendant le zoom,
            // pour réduire les zones vides/floues pendant le chargement.
            keepBuffer: 4,
          }).addTo(map);

          precacherTuiles(centre);
          mapInstance.current = map;
          setPret(true);
        })
        .catch(() => setErreur(true));

      return () => {
        annule = true;
        mapInstance.current?.remove();
        mapInstance.current = null;
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [destination.id]);

    // Leaflet a besoin d'être prévenu explicitement si son conteneur change
    // de taille après l'initialisation (ex : des photos plus haut sur la
    // page finissent de charger et déplacent la carte) — sinon les calculs
    // de position internes restent basés sur l'ancienne taille.
    useEffect(() => {
      if (!mapRef.current) return;
      const observer = new ResizeObserver(() => {
        mapInstance.current?.invalidateSize();
      });
      observer.observe(mapRef.current);

      const surChargementComplet = () => mapInstance.current?.invalidateSize();
      window.addEventListener("load", surChargementComplet);

      return () => {
        observer.disconnect();
        window.removeEventListener("load", surChargementComplet);
      };
    }, []);

    // (re)dessine les pins selon les filtres actifs
    useEffect(() => {
      if (!pret || !mapInstance.current || !leafletRef.current) return;
      const map = mapInstance.current;
      const L = leafletRef.current;

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

          const lienMaps = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
          const infosHtml =
            key === "activites" && lieu.infosPratiques
              ? `<div style="font-size:12.5px;color:#5a5248;margin-bottom:8px;line-height:1.5;white-space:pre-line;">${escapeHtml(lieu.infosPratiques)}</div>`
              : "";

          const marker = L.marker([lat, lng], { icon: creerIconePin(L, Icon, color) })
            .addTo(map)
            .bindPopup(
              `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;min-width:160px;max-width:240px;">
                <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${escapeHtml(lieu.nom)}</div>
                ${infosHtml}
                <a href="${lienMaps}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:none;">Voir sur Google Maps</a>
              </div>`
            );

          marker.on("click", () => allerVers(lat, lng));

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
          if (!mapInstance.current || !leafletRef.current) return;
          const L = leafletRef.current;
          const icone = L.divIcon({
            html: `<div style="width:16px;height:16px;border-radius:50%;background:#4285F4;border:2px solid #fff;box-shadow:0 0 0 4px rgba(66,133,244,0.25),0 1px 4px rgba(0,0,0,.3);"></div>`,
            className: "",
            iconSize: [16, 16],
            iconAnchor: [8, 8],
          });
          L.marker([position.coords.latitude, position.coords.longitude], { icon: icone }).addTo(mapInstance.current);
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
