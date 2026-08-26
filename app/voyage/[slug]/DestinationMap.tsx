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
type FiltreCarte = Categorie | "tous";
type Lieu = { nom: string; lat?: number; lng?: number; infosPratiques?: string };

const CATEGORIES: { key: Categorie; label: string; Icon: typeof Bed; color: string }[] = [
  { key: "hebergements", label: "Hôtels", Icon: Bed, color: "#7d4e6b" },
  { key: "activites", label: "Sites & activités", Icon: Camera, color: "#7a9e7e" },
  { key: "restaurants", label: "Restaurants", Icon: Utensils, color: "#c8956c" },
];

export interface DestinationMapHandle {
  centrerSur: (lat: number, lng: number, nom?: string, categorie?: "hebergements" | "restaurants" | "activites") => void;
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
function positionValide(l: Lieu & { estAjoutee?: boolean }): l is { nom: string; lat: number; lng: number; infosPratiques?: string; estAjoutee?: boolean } {
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

// Pré-charge les tuiles hors-ligne pour TOUTE la zone englobant les lieux de
// la destination (pas juste un petit carré autour d'un seul point) — avec une
// marge tout autour, pour que la carte reste utilisable même si le visiteur
// se balade un peu en dehors des pins exacts (rue voisine, chemin de plage...).
function precacherTuiles(points: { lat: number; lng: number }[]) {
  if (points.length === 0) return;
  const zooms = [12, 13, 14, 15, 16];

  const lats = points.map((p) => p.lat);
  const lngs = points.map((p) => p.lng);
  const latMin = Math.min(...lats);
  const latMax = Math.max(...lats);
  const lngMin = Math.min(...lngs);
  const lngMax = Math.max(...lngs);

  // Marge tout autour de la zone (environ 20% de son étendue, avec un
  // minimum pour les destinations où tous les points sont très proches).
  const margeLat = Math.max((latMax - latMin) * 0.25, 0.01);
  const margeLng = Math.max((lngMax - lngMin) * 0.25, 0.01);

  zooms.forEach((zoom) => {
    const { x: xMin, y: yMax } = latLngVersTuile(latMin - margeLat, lngMin - margeLng, zoom);
    const { x: xMax, y: yMin } = latLngVersTuile(latMax + margeLat, lngMax + margeLng, zoom);

    for (let x = xMin; x <= xMax; x++) {
      for (let y = yMin; y <= yMax; y++) {
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

const DestinationMap = forwardRef<
  DestinationMapHandle,
  {
    destination: DestinationResolue;
    apiKey?: string;
    lieuxAjoutes?: { categorie: Categorie; nom: string; lat: number; lng: number }[];
  }
>(
  function DestinationMap({ destination, lieuxAjoutes }, ref) {
    const wrapRef = useRef<HTMLDivElement>(null);
    const mapRef = useRef<HTMLDivElement>(null);
    const mapInstance = useRef<import("leaflet").Map | null>(null);
    const markersParCle = useRef<Map<string, import("leaflet").Marker>>(new Map());
    const leafletRef = useRef<typeof import("leaflet") | null>(null);
    const [pret, setPret] = useState(false);
    const [erreur, setErreur] = useState(false);
    const [filtreActif, setFiltreActif] = useState<FiltreCarte>("hebergements");
    // Mémorise un lieu à atteindre dès que ses pins seront (re)créés — utile
    // quand on clique sur une fiche d'une catégorie différente de celle
    // actuellement affichée sur la carte : il faut d'abord basculer le
    // filtre, laisser les nouveaux pins se dessiner, puis voler dessus.
    const cibleEnAttenteRef = useRef<{ lat: number; lng: number } | null>(null);

    // Les lieux ajoutés par le client viennent s'ajouter à ceux définis
    // dans l'admin, catégorie par catégorie — même pin, même comportement,
    // seule la bulle indique "Ajouté par vous".
    const lieuxParCategorie: Record<Categorie, (Lieu & { estAjoutee?: boolean })[]> = {
      hebergements: [
        ...(destination.hebergements ?? []),
        ...(lieuxAjoutes ?? []).filter((l) => l.categorie === "hebergements").map((l) => ({ ...l, estAjoutee: true })),
      ],
      restaurants: [
        ...(destination.restaurants ?? []),
        ...(lieuxAjoutes ?? []).filter((l) => l.categorie === "restaurants").map((l) => ({ ...l, estAjoutee: true })),
      ],
      activites: [
        ...(destination.activites ?? []),
        ...(lieuxAjoutes ?? []).filter((l) => l.categorie === "activites").map((l) => ({ ...l, estAjoutee: true })),
      ],
    };

    const aDesCoordonnees = Object.values(lieuxParCategorie).some((liste) => liste.some(positionValide));

    // Vole vers un lieu et ouvre sa bulle. Ferme d'abord toute autre bulle
    // ouverte.
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

    useImperativeHandle(ref, () => ({
      centrerSur(lat: number, lng: number, _nom?: string, categorie?: Categorie) {
        if (categorie && categorie !== filtreActif && filtreActif !== "tous") {
          cibleEnAttenteRef.current = { lat, lng };
          setFiltreActif(categorie);
          return;
        }
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

      // Par défaut, la carte s'ouvre centrée sur l'hébergement plutôt que
      // sur la moyenne de tous les lieux — c'est le point de repère le
      // plus utile pour se situer en arrivant sur la carte.
      const hebergementValide = lieuxParCategorie.hebergements.find(positionValide);
      const centre = hebergementValide
        ? { lat: hebergementValide.lat, lng: hebergementValide.lng }
        : {
            lat: tousLesPoints.reduce((s, p) => s + p.lat, 0) / tousLesPoints.length,
            lng: tousLesPoints.reduce((s, p) => s + p.lng, 0) / tousLesPoints.length,
          };
      let annule = false;

      import("leaflet")
        .then((mod) => {
          if (annule || !mapRef.current) return;
          const L = mod.default;
          leafletRef.current = L;

          const map = L.map(mapRef.current, {
            center: [centre.lat, centre.lng],
            zoom: 14,
            attributionControl: false,
            zoomControl: false,
          });

          // Boutons +/- explicitement en haut à droite, pour rester cohérent
          // avec la position utilisée sur les autres cartes du site (le
          // positionnement par défaut de Leaflet est en haut à gauche).
          L.control.zoom({ position: "topright" }).addTo(map);

          // Sur les écrans Retina/HiDPI (Mac, iPhone récents...), une tuile
          // normale est affichée agrandie par le système, donc légèrement
          // floue. MapTiler fournit des tuiles "@2x" en haute résolution
          // spécialement conçues pour ces écrans — Leaflet sait détecter
          // automatiquement ce type d'écran via L.Browser.retina.
          const suffixeRetina = L.Browser.retina ? "@2x" : "";
          L.tileLayer(TILE_URL_TEMPLATE.replace("{z}/{x}/{y}.png", `{z}/{x}/{y}${suffixeRetina}.png`), {
            maxZoom: 19,
            tileSize: 512,
            zoomOffset: -1,
            crossOrigin: true,
            detectRetina: false, // on gère nous-mêmes le suffixe @2x ci-dessus
            // Garde plus de tuiles voisines en mémoire pendant le zoom,
            // pour réduire les zones vides/floues pendant le chargement.
            keepBuffer: 4,
          }).addTo(map);

          precacherTuiles(tousLesPoints);
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

    // Recadre la carte sur l'ensemble des pins visibles : zoom serré si un
    // seul lieu, vue élargie englobant tous les points sinon. "tous" prend en
    // compte les 3 catégories à la fois. Séparée de la création des pins
    // pour pouvoir être appelée directement au clic sur un bouton de filtre
    // déjà actif (qui ne redéclenche pas le useEffect ci-dessous, puisque la
    // valeur de filtreActif ne change pas).
    function recadrerSurCategorie(filtre: FiltreCarte) {
      const map = mapInstance.current;
      const L = leafletRef.current;
      if (!map || !L) return;

      const pointsValides =
        filtre === "tous"
          ? Object.values(lieuxParCategorie).flat().filter(positionValide)
          : lieuxParCategorie[filtre].filter(positionValide);

      if (pointsValides.length === 1) {
        map.flyTo([pointsValides[0].lat, pointsValides[0].lng], 15);
      } else if (pointsValides.length > 1) {
        const bounds = L.latLngBounds(pointsValides.map((p) => [p.lat, p.lng]));
        map.flyToBounds(bounds, { padding: [32, 32], maxZoom: 15 });
      }
    }

    // (re)dessine les pins de la catégorie active (ou des 3 à la fois en
    // mode "tous"), et recadre la carte pour bien les montrer dans leur
    // ensemble : zoom serré si un seul lieu (ex : l'hébergement), vue
    // élargie englobant tous les points s'il y en a plusieurs (ex : les
    // activités éparpillées sur plusieurs îles).
    useEffect(() => {
      if (!pret || !mapInstance.current || !leafletRef.current) return;
      const map = mapInstance.current;
      const L = leafletRef.current;

      markersParCle.current.forEach((m) => m.remove());
      markersParCle.current = new Map();

      const categoriesAAfficher =
        filtreActif === "tous" ? CATEGORIES : CATEGORIES.filter((c) => c.key === filtreActif);

      categoriesAAfficher.forEach(({ key, Icon, color }) => {
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
          const ajouteHtml = lieu.estAjoutee
            ? `<div style="font-size:11px;color:#c8956c;font-style:italic;margin-bottom:6px;">Ajouté par vous</div>`
            : "";

          const marker = L.marker([lat, lng], { icon: creerIconePin(L, Icon, color) })
            .addTo(map)
            .bindPopup(
              `<div style="font-family:Inter,sans-serif;font-size:13px;padding:2px 4px;min-width:160px;max-width:240px;">
                <div style="font-weight:600;font-size:14px;margin-bottom:6px;">${escapeHtml(lieu.nom)}</div>
                ${ajouteHtml}
                ${infosHtml}
                <a href="${lienMaps}" target="_blank" rel="noopener noreferrer" style="color:#1a73e8;text-decoration:none;">Voir sur Google Maps</a>
              </div>`
            );

          marker.on("click", () => allerVers(lat, lng));

          markersParCle.current.set(clePourLieu(lat, lng), marker);
        });
      });

      if (cibleEnAttenteRef.current) {
        const { lat, lng } = cibleEnAttenteRef.current;
        cibleEnAttenteRef.current = null;
        allerVers(lat, lng);
      } else {
        recadrerSurCategorie(filtreActif);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pret, filtreActif, destination.id]);

    // Localise le visiteur (avec sa permission) et affiche un point bleu sur
    // la carte, qui se déplace en direct pendant qu'il se balade (watchPosition
    // au lieu d'un simple relevé unique) — utile pour suivre sa position
    // pendant une excursion, pas juste au chargement de la page.
    useEffect(() => {
      if (!pret || !mapInstance.current || !leafletRef.current || !navigator.geolocation) return;
      const L = leafletRef.current;
      const map = mapInstance.current;
      let markerPosition: import("leaflet").Marker | null = null;

      const idSuivi = navigator.geolocation.watchPosition(
        (position) => {
          if (!mapInstance.current) return;
          const { latitude, longitude } = position.coords;

          if (markerPosition) {
            markerPosition.setLatLng([latitude, longitude]);
          } else {
            const icone = L.divIcon({
              html: `<div style="width:16px;height:16px;border-radius:50%;background:#4285F4;border:2px solid #fff;box-shadow:0 0 0 4px rgba(66,133,244,0.25),0 1px 4px rgba(0,0,0,.3);"></div>`,
              className: "",
              iconSize: [16, 16],
              iconAnchor: [8, 8],
            });
            markerPosition = L.marker([latitude, longitude], { icon: icone }).addTo(map);
          }
        },
        () => {},
        { enableHighAccuracy: true, timeout: 8000 }
      );

      return () => {
        navigator.geolocation.clearWatch(idSuivi);
        markerPosition?.remove();
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pret, destination.id]);

    if (!aDesCoordonnees) return null;

    return (
      <div style={{ marginTop: 40 }} ref={wrapRef}>
        <div className={styles.subEyebrow} style={{ marginBottom: 20 }}>Carte interactive</div>
        <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap", alignItems: "center" }}>
          {CATEGORIES.map((c) => {
            const actif = filtreActif === c.key;
            return (
              <button
                key={c.key}
                onClick={() => {
                  cibleEnAttenteRef.current = null;
                  if (filtreActif === c.key) {
                    recadrerSurCategorie(c.key);
                  } else {
                    setFiltreActif(c.key);
                  }
                }}
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13.5,
                  padding: "8px 16px 8px 10px",
                  borderRadius: 24,
                  border: actif ? "1px solid #d8d2c6" : "1px solid #e8e0d6",
                  background: actif ? "#fff" : "none",
                  color: actif ? "#1a1512" : "#6b6459",
                  fontWeight: actif ? 600 : 400,
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
                    background: c.color,
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
        <div style={{ position: "relative" }}>
          <div
            ref={mapRef}
            style={{ width: "100%", height: 320, borderRadius: 4, background: "#f0ebe4", position: "relative", overflow: "hidden" }}
          />
          <button
            onClick={() => {
              cibleEnAttenteRef.current = null;
              if (filtreActif === "tous") {
                recadrerSurCategorie("tous");
              } else {
                setFiltreActif("tous");
              }
            }}
            title="Vue générale (hôtels, activités et restaurants)"
            style={{
              position: "absolute",
              // Juste sous les boutons +/- de zoom (en haut à droite), pour
              // regrouper tous les contrôles de la carte au même endroit.
              top: 88,
              right: 10,
              zIndex: 400, // au-dessus des tuiles Leaflet, sous les popups
              width: 34,
              height: 34,
              borderRadius: 4,
              border: "2px solid rgba(0,0,0,.2)",
              background: "#fff",
              boxShadow: "0 1px 5px rgba(0,0,0,.15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              color: filtreActif === "tous" ? "#c8956c" : "#6b6459",
            }}
          >
            <Compass size={16} strokeWidth={2} />
          </button>
        </div>
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
