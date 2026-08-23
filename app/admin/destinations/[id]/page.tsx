// app/admin/destinations/[id]/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/destinations/[id]/page.tsx
//
// Formulaire de création/édition d'une fiche destination.
// Pour créer une nouvelle destination, va sur /admin/destinations/nouvelle
"use client";

import { useState, useRef, use } from "react";
import { useRouter } from "next/navigation";
import type { Destination, DeroulePoint, Hebergement, Restaurant, Activite } from "@/lib/carnets";
import { normaliserHeure, deviseDepuisPays } from "@/lib/carnets";
import AdminAuthGate from "../../AdminAuthGate";
import adminStyles from "../../adminStyles";
import PhotoField from "../../PhotoField";
import LieuSearchField from "../../LieuSearchField";

const destinationVide: Omit<Destination, "id" | "updatedAt"> & { id?: string } = {
  nom: "",
  photo: "",
  deroule: [],
  hebergements: [],
  restaurants: [],
  activites: [],
};

const sectionTitle: React.CSSProperties = {
  fontFamily: "Cormorant Garamond, serif",
  fontSize: 18,
  fontWeight: 600,
  color: "#1a1512",
  marginBottom: 16,
  paddingBottom: 10,
  borderBottom: "1px solid #f0ebe4",
};
const sectionWrap: React.CSSProperties = { marginBottom: 36 };
const smallLink: React.CSSProperties = {
  marginTop: 10,
  fontSize: 12.5,
  color: "#c8956c",
  background: "none",
  border: "none",
  cursor: "pointer",
  fontFamily: "Inter, sans-serif",
  fontWeight: 500,
  letterSpacing: "0.03em",
  padding: 0,
};
const itemCard: React.CSSProperties = {
  border: "1px solid #f0ebe4",
  borderRadius: 6,
  padding: 16,
  marginBottom: 14,
  position: "relative",
};
const microLabel: React.CSSProperties = {
  fontSize: 10.5,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "#aaa",
  display: "block",
  marginBottom: 3,
};
const fieldBox: React.CSSProperties = { marginBottom: 10 };

// Convertit une saisie de coordonnée GPS en nombre, sans jamais produire NaN.
// Autorise les états intermédiaires normaux pendant la frappe (juste "-", juste
// ".", champ vide) sans planter le champ. Toute frappe invalide (une lettre,
// par exemple) est simplement ignorée — le champ garde sa dernière valeur valide.
const IGNORER = Symbol("ignorer");
function parseCoordonnee(saisie: string): number | undefined | typeof IGNORER {
  if (!/^-?\d*\.?\d*$/.test(saisie)) return IGNORER;
  if (saisie === "" || saisie === "-" || saisie === ".") return undefined;
  return Number(saisie);
}

// Formate automatiquement une saisie en "JJ/MM" : ne garde que les chiffres,
// insère le "/" tout seul après le 2ème chiffre, limite à 4 chiffres (JJMM).
function formaterDateJJMM(saisie: string): string {
  const chiffres = saisie.replace(/\D/g, "").slice(0, 4);
  if (chiffres.length <= 2) return chiffres;
  return `${chiffres.slice(0, 2)}/${chiffres.slice(2)}`;
}

// Même principe pour l'heure, mais plus malin : si le 1er chiffre tapé ne peut
// être que le début d'une heure à un seul chiffre (3 à 9, ex: "9h"), le "h"
// s'insère tout de suite. Si c'est 0, 1 ou 2, on attend un 2ème chiffre avant
// d'insérer le "h", car l'heure peut aller jusqu'à 2 chiffres (ex: "19h", "23h").
function formaterHeureSaisie(saisie: string): string {
  const chiffres = saisie.replace(/\D/g, "");
  if (chiffres.length === 0) return "";
  const heureCourte = chiffres[0] >= "3" && chiffres[0] <= "9";
  const tailleHeure = heureCourte ? 1 : 2;
  const limites = chiffres.slice(0, tailleHeure + 2);
  if (limites.length < tailleHeure) return limites;
  return `${limites.slice(0, tailleHeure)}h${limites.slice(tailleHeure)}`;
}

// Aperçu photo qu'on recadre directement en la faisant glisser à la souris
// ou au doigt, plutôt que via des curseurs séparés. Le glissement déplace
// visuellement la photo comme sur Facebook/Instagram : on tire la photo
// dans la direction où on veut voir davantage de contenu.
function CadragePhoto({
  src,
  x,
  y,
  onChange,
  width,
  height,
}: {
  src: string;
  x: number;
  y: number;
  onChange: (x: number, y: number) => void;
  width: number | string;
  height: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const dragRef = useRef<{ startX: number; startY: number; startPosX: number; startPosY: number } | null>(null);
  const [enTrainDeGlisser, setEnTrainDeGlisser] = useState(false);

  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    dragRef.current = { startX: e.clientX, startY: e.clientY, startPosX: x, startPosY: y };
    setEnTrainDeGlisser(true);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragRef.current || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const deltaX = e.clientX - dragRef.current.startX;
    const deltaY = e.clientY - dragRef.current.startY;
    // On tire la photo elle-même : glisser vers la droite doit donc
    // déplacer le cadrage vers la gauche (on soustrait le delta).
    const nouveauX = Math.min(100, Math.max(0, dragRef.current.startPosX - (deltaX / rect.width) * 100));
    const nouveauY = Math.min(100, Math.max(0, dragRef.current.startPosY - (deltaY / rect.height) * 100));
    onChange(Math.round(nouveauX), Math.round(nouveauY));
  }

  function onPointerUp(e: React.PointerEvent<HTMLDivElement>) {
    dragRef.current = null;
    setEnTrainDeGlisser(false);
    e.currentTarget.releasePointerCapture(e.pointerId);
  }

  return (
    <div
      ref={ref}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      style={{
        width,
        height,
        borderRadius: 4,
        marginTop: 6,
        backgroundImage: `url('${src}')`,
        backgroundSize: "cover",
        backgroundPosition: `${x}% ${y}%`,
        cursor: enTrainDeGlisser ? "grabbing" : "grab",
        touchAction: "none",
        userSelect: "none",
      }}
      title="Glisse la photo pour la recadrer"
    />
  );
}

export default function EditDestinationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: routeId } = use(params);
  const isNew = routeId === "nouvelle";
  const router = useRouter();

  const [dest, setDest] = useState<typeof destinationVide>(destinationVide);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [dragIndex, setDragIndex] = useState<number | null>(null);

  function charger() {
    if (isNew) return;
    fetch("/api/destination-list")
      .then((r) => r.json())
      .then((data) => {
        const found = (data.destinations ?? []).find((d: Destination) => d.id === routeId);
        if (found) setDest({ ...found, hebergements: found.hebergements ?? [] });
        setLoading(false);
      });
  }

  function update<K extends keyof typeof destinationVide>(key: K, value: (typeof destinationVide)[K]) {
    setDest((prev) => ({ ...prev, [key]: value }));
  }

  // Déplace la ligne glissée (dragIndex) directement à la position de la ligne survolée (i)
  function deposerDeroule(i: number) {
    if (dragIndex === null || dragIndex === i) {
      setDragIndex(null);
      return;
    }
    const copy = [...dest.deroule];
    const [ligne] = copy.splice(dragIndex, 1);
    copy.splice(i, 0, ligne);
    update("deroule", copy);
    setDragIndex(null);
  }

  async function enregistrer() {
    if (!dest.nom) {
      alert("Le nom de la destination est obligatoire.");
      return;
    }
    setSaving(true);
    const res = await fetch("/api/destination-save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(dest),
    });
    setSaving(false);
    if (res.ok) {
      router.push("/admin/destinations");
    } else {
      alert("Erreur lors de l'enregistrement.");
    }
  }

  function ajouterHebergement() {
    update("hebergements", [...(dest.hebergements ?? []), { nom: "", photo: "", description: "" } as Hebergement]);
  }
  function ajouterRestaurant() {
        update("restaurants", [...dest.restaurants, { nom: "", photo: "", cuisine: "", prix: "€€" } as Restaurant]);
  }
  function ajouterActivite() {
        update("activites", [...dest.activites, { nom: "", photo: "", description: "" } as Activite]);
  }
  function supprimerLigne<K extends "hebergements" | "restaurants" | "activites">(champ: K, i: number) {
    update(champ, ((dest[champ] ?? []) as unknown[]).filter((_, idx) => idx !== i) as (typeof destinationVide)[K]);
  }

  return (
    <AdminAuthGate onAuthenticated={charger} label="Destinations" redirectAfterLoginTo="/admin/destinations">
      <div style={adminStyles.wrap}>
        <div style={adminStyles.card}>
          <div style={adminStyles.header}>
            <div>
              <div style={adminStyles.logo}>MamZelles en Vadrouille</div>
              <div style={adminStyles.title}>{isNew ? "Nouvelle destination" : `Éditer : ${dest.nom}`}</div>
            </div>
          </div>

          {loading ? (
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#888" }}>Chargement...</p>
          ) : (
            <>
              <div style={sectionWrap}>
                <div style={sectionTitle}>Infos générales</div>
                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Nom de la destination</label>
                  <input style={adminStyles.input} placeholder="ex : Marrakech" value={dest.nom} onChange={(e) => update("nom", e.target.value)} />
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, marginBottom: 16 }}>
                  <div>
                    <label style={adminStyles.label}>Continent</label>
                    <input style={adminStyles.input} placeholder="ex : Asie" value={dest.continent ?? ""} onChange={(e) => update("continent", e.target.value)} />
                  </div>
                  <div>
                    <label style={adminStyles.label}>Pays</label>
                    <input style={adminStyles.input} placeholder="ex : Maldives" value={dest.pays ?? ""} onChange={(e) => update("pays", e.target.value)} />
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11.5, color: "#a8734c", marginTop: 4, marginBottom: 0 }}>
                      {deviseDepuisPays(dest.pays)
                        ? `Devise détectée : ${deviseDepuisPays(dest.pays)}`
                        : "Aucune devise détectée (zone euro ou pays non reconnu) — pas de convertisseur affiché"}
                    </p>
                    {deviseDepuisPays(dest.pays) && (
                      <label style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 6, fontFamily: "Inter, sans-serif", fontSize: 12.5, color: "#555", cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={dest.afficherConvertisseur !== false}
                          onChange={(e) => update("afficherConvertisseur", e.target.checked)}
                        />
                        Afficher le convertisseur de devise dans ce carnet
                      </label>
                    )}
                  </div>
                </div>
                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Photo</label>
                  <PhotoField
                    value={dest.photo}
                    onChange={(url, orientation) => {
                      update("photo", url);
                      if (orientation) update("photoOrientation", orientation);
                    }}
                  />
                  {dest.photo && (
                    <div style={{ marginTop: 8 }}>
                      <label style={{ ...adminStyles.label, fontSize: 12 }}>Recadrage</label>
                      <CadragePhoto
                        src={dest.photo}
                        x={dest.photoPositionX ?? 50}
                        y={dest.photoPosition ?? 50}
                        onChange={(x, y) => {
                          update("photoPositionX", x);
                          update("photoPosition", y);
                        }}
                        width="100%"
                        height={220}
                      />
                    </div>
                  )}
                </div>
                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Résumé de l&apos;étape (optionnel)</label>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12.5, color: "#888", marginTop: -2, marginBottom: 8 }}>
                    1 à 2 phrases racontant pourquoi cette étape, dans quel esprit — affiché sous la photo dans le carnet du client. Ex : « Première étape de votre voyage. Une nuit pour récupérer du vol avant de rejoindre Baa Atoll. »
                  </p>
                  <textarea
                    style={{ ...adminStyles.input, minHeight: 64, resize: "vertical", fontFamily: "Inter, sans-serif" }}
                    placeholder="ex : Première étape de votre voyage..."
                    value={dest.resume ?? ""}
                    onChange={(e) => update("resume", e.target.value)}
                  />
                </div>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Météo & position sur le parcours</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Ces coordonnées servent à afficher la météo en temps réel de cette destination, et à la positionner automatiquement sur la carte du parcours de chaque carnet qui l&apos;utilise.
                </p>
                <LieuSearchField
                  lat={dest.lat}
                  lng={dest.lng}
                  onSelect={(lieu) => {
                    update("lat", lieu.lat);
                    update("lng", lieu.lng);
                  }}
                />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                  <div>
                    <label style={microLabel}>Latitude</label>
                    <input
                      style={adminStyles.input}
                      placeholder="ex : 5.3320"
                      value={dest.lat ?? ""}
                      onChange={(e) => {
                        const v = parseCoordonnee(e.target.value);
                        if (v !== IGNORER) update("lat", v);
                      }}
                    />
                  </div>
                  <div>
                    <label style={microLabel}>Longitude</label>
                    <input
                      style={adminStyles.input}
                      placeholder="ex : 73.0708"
                      value={dest.lng ?? ""}
                      onChange={(e) => {
                        const v = parseCoordonnee(e.target.value);
                        if (v !== IGNORER) update("lng", v);
                      }}
                    />
                  </div>
                </div>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Déroulé type</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Réutilisé tel quel dans chaque carnet qui inclut cette destination. Le client peut aussi ajouter ses propres notes en mémento sur sa page.
                </p>
                {dest.deroule.map((point, i) => (
                  <div
                    key={i}
                    draggable
                    onDragStart={() => setDragIndex(i)}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => deposerDeroule(i)}
                    onDragEnd={() => setDragIndex(null)}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 10,
                      alignItems: "flex-start",
                      opacity: dragIndex === i ? 0.4 : 1,
                      background: dragIndex !== null && dragIndex !== i ? "#faf7f2" : "transparent",
                      borderRadius: 4,
                      transition: "opacity .15s, background .15s",
                    }}
                  >
                    <div
                      style={{
                        cursor: "grab",
                        color: "#c8c2b6",
                        fontSize: 16,
                        userSelect: "none",
                        padding: "6px 2px",
                        lineHeight: 1,
                      }}
                      title="Glisser pour réordonner"
                    >
                      ⠿
                    </div>
                    <input
                      style={{ ...adminStyles.input, width: 100 }}
                      placeholder="JJ/MM"
                      value={point.jour}
                      onChange={(e) => {
                        const copy = [...dest.deroule];
                        copy[i] = { ...copy[i], jour: formaterDateJJMM(e.target.value) };
                        update("deroule", copy);
                      }}
                    />
                    <input
                      style={{ ...adminStyles.input, width: 80 }}
                      placeholder="00h00"
                      value={point.heure}
                      onChange={(e) => {
                        const copy = [...dest.deroule];
                        copy[i] = { ...copy[i], heure: formaterHeureSaisie(e.target.value) };
                        update("deroule", copy);
                      }}
                      onBlur={(e) => {
                        const copy = [...dest.deroule];
                        copy[i] = { ...copy[i], heure: normaliserHeure(e.target.value) };
                        update("deroule", copy);
                      }}
                    />
                    <input
                      style={adminStyles.input}
                      placeholder="Titre"
                      value={point.titre}
                      onChange={(e) => {
                        const copy = [...dest.deroule];
                        copy[i] = { ...copy[i], titre: e.target.value };
                        update("deroule", copy);
                      }}
                    />
                    <input
                      style={adminStyles.input}
                      placeholder="Notes"
                      value={point.note}
                      onChange={(e) => {
                        const copy = [...dest.deroule];
                        copy[i] = { ...copy[i], note: e.target.value };
                        update("deroule", copy);
                      }}
                    />
                    <button
                      onClick={() => update("deroule", dest.deroule.filter((_, idx) => idx !== i))}
                      style={adminStyles.btnDelete}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => update("deroule", [...dest.deroule, { jour: "", heure: "", titre: "", note: "" } as DeroulePoint])}
                  style={smallLink}
                >
                  + Ajouter une étape
                </button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Hébergements</div>
                {(dest.hebergements ?? []).map((h, i) => (
                  <div key={i} style={itemCard}>
                    <button
                      onClick={() => supprimerLigne("hebergements", i)}
                      style={{ ...adminStyles.btnDelete, position: "absolute", top: 10, right: 10 }}
                      title="Supprimer cet hébergement"
                    >
                      ✕
                    </button>

                    <div style={fieldBox}>
                      <label style={microLabel}>Nom</label>
                      <input
                        style={adminStyles.input}
                        placeholder="ex : Soneva Fushi"
                        value={h.nom}
                        onChange={(e) => {
                          const copy = [...(dest.hebergements ?? [])];
                          copy[i] = { ...copy[i], nom: e.target.value };
                          update("hebergements", copy);
                        }}
                      />
                    </div>

                    <div style={fieldBox}>
                      <label style={microLabel}>Photo</label>
                      <PhotoField
                        value={h.photo}
                        onChange={(url, orientation) => {
                          const copy = [...(dest.hebergements ?? [])];
                          copy[i] = {
                            ...copy[i],
                            photo: url,
                            ...(orientation ? { photoOrientation: orientation } : {}),
                          };
                          update("hebergements", copy);
                        }}
                      />
                      {h.photo && (
                        <div style={{ marginTop: 8 }}>
                          <label style={{ ...microLabel, marginBottom: 4 }}>Recadrage</label>
                          <CadragePhoto
                            src={h.photo}
                            x={h.photoPositionX ?? 50}
                            y={h.photoPosition ?? 50}
                            onChange={(x, y) => {
                              const copy = [...(dest.hebergements ?? [])];
                              copy[i] = { ...copy[i], photoPositionX: x, photoPosition: y };
                              update("hebergements", copy);
                            }}
                            width={200}
                            // Ratio exact du vrai cadre affiché dans le carnet
                            // (colonne ~260px sur hauteur fixe 140px).
                            height={108}
                          />
                        </div>
                      )}
                    </div>

                    <div style={fieldBox}>
                      <label style={microLabel}>Description</label>
                      <input
                        style={adminStyles.input}
                        placeholder="ex : Villa sur pilotis, notre coup de cœur"
                        value={h.description}
                        onChange={(e) => {
                          const copy = [...(dest.hebergements ?? [])];
                          copy[i] = { ...copy[i], description: e.target.value };
                          update("hebergements", copy);
                        }}
                      />
                    </div>

                    <LieuSearchField
                      lat={h.lat}
                      lng={h.lng}
                      onSelect={(lieu) => {
                        const copy = [...(dest.hebergements ?? [])];
                        copy[i] = { ...copy[i], lat: lieu.lat, lng: lieu.lng };
                        update("hebergements", copy);
                      }}
                    />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div>
                        <label style={microLabel}>Latitude</label>
                        <input
                          style={adminStyles.input}
                          placeholder="ex : 5.3320"
                          value={h.lat ?? ""}
                          onChange={(e) => {
                            const copy = [...(dest.hebergements ?? [])];
                            const v = parseCoordonnee(e.target.value);
                            if (v === IGNORER) return;
                            copy[i] = { ...copy[i], lat: v };
                            update("hebergements", copy);
                          }}
                        />
                      </div>
                      <div>
                        <label style={microLabel}>Longitude</label>
                        <input
                          style={adminStyles.input}
                          placeholder="ex : 73.0708"
                          value={h.lng ?? ""}
                          onChange={(e) => {
                            const copy = [...(dest.hebergements ?? [])];
                            const v = parseCoordonnee(e.target.value);
                            if (v === IGNORER) return;
                            copy[i] = { ...copy[i], lng: v };
                            update("hebergements", copy);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={ajouterHebergement} style={smallLink}>+ Ajouter un hébergement</button>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12, color: "#aaa", marginTop: 6 }}>
                  Astuce : si la recherche ci-dessus ne trouve pas le lieu, tu peux toujours faire un clic droit sur Google Maps pour récupérer les coordonnées manuellement.
                </p>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>
                  Sites & activités ({dest.activites.length})
                </div>
                {dest.activites.map((a, i) => (
                  <div key={i} style={itemCard}>
                    <button
                      onClick={() => supprimerLigne("activites", i)}
                      style={{ ...adminStyles.btnDelete, position: "absolute", top: 10, right: 10 }}
                      title="Supprimer cette activité"
                    >
                      ✕
                    </button>

                    <div style={fieldBox}>
                      <label style={microLabel}>Nom</label>
                      <input
                        style={adminStyles.input}
                        placeholder="ex : Marché aux poissons"
                        value={a.nom}
                        onChange={(e) => {
                          const copy = [...dest.activites];
                          copy[i] = { ...copy[i], nom: e.target.value };
                          update("activites", copy);
                        }}
                      />
                    </div>

                    <div style={fieldBox}>
                      <label style={microLabel}>Photo</label>
                      <PhotoField
                        value={a.photo}
                        onChange={(url, orientation) => {
                          const copy = [...dest.activites];
                          copy[i] = {
                            ...copy[i],
                            photo: url,
                            ...(orientation ? { photoOrientation: orientation } : {}),
                          };
                          update("activites", copy);
                        }}
                      />
                      {a.photo && (
                        <div style={{ marginTop: 8 }}>
                          <label style={{ ...microLabel, marginBottom: 4 }}>Recadrage</label>
                          <CadragePhoto
                            src={a.photo}
                            x={a.photoPositionX ?? 50}
                            y={a.photoPosition ?? 50}
                            onChange={(x, y) => {
                              const copy = [...dest.activites];
                              copy[i] = { ...copy[i], photoPositionX: x, photoPosition: y };
                              update("activites", copy);
                            }}
                            width={200}
                            height={108}
                          />
                        </div>
                      )}
                    </div>

                    <div style={fieldBox}>
                      <label style={microLabel}>Description</label>
                      <input
                        style={adminStyles.input}
                        placeholder="ex : Marché traditionnel très animé"
                        value={a.description}
                        onChange={(e) => {
                          const copy = [...dest.activites];
                          copy[i] = { ...copy[i], description: e.target.value };
                          update("activites", copy);
                        }}
                      />
                    </div>

                    <div style={fieldBox}>
                      <label style={microLabel}>Lien de réservation (optionnel — ex : GetYourGuide)</label>
                      <input
                        style={adminStyles.input}
                        placeholder="https://www.getyourguide.fr/..."
                        value={a.lienReservation ?? ""}
                        onChange={(e) => {
                          const copy = [...dest.activites];
                          copy[i] = { ...copy[i], lienReservation: e.target.value };
                          update("activites", copy);
                        }}
                      />
                    </div>

                    <div style={fieldBox}>
                      <label style={microLabel}>Infos pratiques (optionnel — tarif, horaires, équipement...)</label>
                      <textarea
                        style={{ ...adminStyles.input, minHeight: 60, resize: "vertical", fontFamily: "inherit" }}
                        placeholder="ex : 15€/pers, prévoir chaussures fermées, ouvert 9h-18h"
                        value={a.infosPratiques ?? ""}
                        onChange={(e) => {
                          const copy = [...dest.activites];
                          copy[i] = { ...copy[i], infosPratiques: e.target.value };
                          update("activites", copy);
                        }}
                      />
                    </div>

                    <LieuSearchField
                      lat={a.lat}
                      lng={a.lng}
                      onSelect={(lieu) => {
                        const copy = [...dest.activites];
                        copy[i] = { ...copy[i], lat: lieu.lat, lng: lieu.lng };
                        update("activites", copy);
                      }}
                    />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div>
                        <label style={microLabel}>Latitude</label>
                        <input
                          style={adminStyles.input}
                          placeholder="ex : 4.1746"
                          value={a.lat ?? ""}
                          onChange={(e) => {
                            const copy = [...dest.activites];
                            const v = parseCoordonnee(e.target.value);
                            if (v === IGNORER) return;
                            copy[i] = { ...copy[i], lat: v };
                            update("activites", copy);
                          }}
                        />
                      </div>
                      <div>
                        <label style={microLabel}>Longitude</label>
                        <input
                          style={adminStyles.input}
                          placeholder="ex : 73.5088"
                          value={a.lng ?? ""}
                          onChange={(e) => {
                            const copy = [...dest.activites];
                            const v = parseCoordonnee(e.target.value);
                            if (v === IGNORER) return;
                            copy[i] = { ...copy[i], lng: v };
                            update("activites", copy);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={ajouterActivite} style={smallLink}>+ Ajouter une activité</button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>
                  Restaurants ({dest.restaurants.length})
                </div>
                {dest.restaurants.map((r, i) => (
                  <div key={i} style={itemCard}>
                    <button
                      onClick={() => supprimerLigne("restaurants", i)}
                      style={{ ...adminStyles.btnDelete, position: "absolute", top: 10, right: 10 }}
                      title="Supprimer ce restaurant"
                    >
                      ✕
                    </button>

                    <div style={fieldBox}>
                      <label style={microLabel}>Nom</label>
                      <input
                        style={adminStyles.input}
                        placeholder="ex : The Sea House"
                        value={r.nom}
                        onChange={(e) => {
                          const copy = [...dest.restaurants];
                          copy[i] = { ...copy[i], nom: e.target.value };
                          update("restaurants", copy);
                        }}
                      />
                    </div>

                    <div style={fieldBox}>
                      <label style={microLabel}>Photo</label>
                      <PhotoField
                        value={r.photo}
                        onChange={(url, orientation) => {
                          const copy = [...dest.restaurants];
                          copy[i] = {
                            ...copy[i],
                            photo: url,
                            ...(orientation ? { photoOrientation: orientation } : {}),
                          };
                          update("restaurants", copy);
                        }}
                      />
                      {r.photo && (
                        <div style={{ marginTop: 8 }}>
                          <label style={{ ...microLabel, marginBottom: 4 }}>Recadrage</label>
                          <CadragePhoto
                            src={r.photo}
                            x={r.photoPositionX ?? 50}
                            y={r.photoPosition ?? 50}
                            onChange={(x, y) => {
                              const copy = [...dest.restaurants];
                              copy[i] = { ...copy[i], photoPositionX: x, photoPosition: y };
                              update("restaurants", copy);
                            }}
                            width={200}
                            height={108}
                          />
                        </div>
                      )}
                    </div>

                    <div style={{ display: "grid", gridTemplateColumns: "1fr 90px", gap: 10, marginBottom: 10 }}>
                      <div>
                        <label style={microLabel}>Cuisine</label>
                        <input
                          style={adminStyles.input}
                          placeholder="ex : Fruits de mer"
                          value={r.cuisine}
                          onChange={(e) => {
                            const copy = [...dest.restaurants];
                            copy[i] = { ...copy[i], cuisine: e.target.value };
                            update("restaurants", copy);
                          }}
                        />
                      </div>
                      <div>
                        <label style={microLabel}>Prix</label>
                        <select
                          style={adminStyles.input}
                          value={r.prix}
                          onChange={(e) => {
                            const copy = [...dest.restaurants];
                            copy[i] = { ...copy[i], prix: e.target.value as Restaurant["prix"] };
                            update("restaurants", copy);
                          }}
                        >
                          <option value="€">€</option>
                          <option value="€€">€€</option>
                          <option value="€€€">€€€</option>
                        </select>
                      </div>
                    </div>

                    <div style={fieldBox}>
                      <label style={microLabel}>Commentaire (optionnel — recommandation, plat à essayer...)</label>
                      <textarea
                        style={{ ...adminStyles.input, minHeight: 60, resize: "vertical", fontFamily: "inherit" }}
                        placeholder="ex : Le tartare de thon est excellent, penser à réserver le soir"
                        value={r.commentaire ?? ""}
                        onChange={(e) => {
                          const copy = [...dest.restaurants];
                          copy[i] = { ...copy[i], commentaire: e.target.value };
                          update("restaurants", copy);
                        }}
                      />
                    </div>

                    <LieuSearchField
                      lat={r.lat}
                      lng={r.lng}
                      onSelect={(lieu) => {
                        const copy = [...dest.restaurants];
                        copy[i] = { ...copy[i], lat: lieu.lat, lng: lieu.lng };
                        update("restaurants", copy);
                      }}
                    />
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                      <div>
                        <label style={microLabel}>Latitude</label>
                        <input
                          style={adminStyles.input}
                          placeholder="ex : 4.1898"
                          value={r.lat ?? ""}
                          onChange={(e) => {
                            const copy = [...dest.restaurants];
                            const v = parseCoordonnee(e.target.value);
                            if (v === IGNORER) return;
                            copy[i] = { ...copy[i], lat: v };
                            update("restaurants", copy);
                          }}
                        />
                      </div>
                      <div>
                        <label style={microLabel}>Longitude</label>
                        <input
                          style={adminStyles.input}
                          placeholder="ex : 73.5295"
                          value={r.lng ?? ""}
                          onChange={(e) => {
                            const copy = [...dest.restaurants];
                            const v = parseCoordonnee(e.target.value);
                            if (v === IGNORER) return;
                            copy[i] = { ...copy[i], lng: v };
                            update("restaurants", copy);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
                <button onClick={ajouterRestaurant} style={smallLink}>+ Ajouter un restaurant</button>
              </div>

              <button onClick={enregistrer} disabled={saving} style={adminStyles.btnGold}>
                {saving ? "Enregistrement..." : "Enregistrer la destination"}
              </button>
            </>
          )}
        </div>
      </div>
    </AdminAuthGate>
  );
}
