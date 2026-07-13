// app/admin/destinations/[id]/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/destinations/[id]/page.tsx
//
// Formulaire de création/édition d'une fiche destination.
// Pour créer une nouvelle destination, va sur /admin/destinations/nouvelle
"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import type { Destination, DeroulePoint, Restaurant, Activite } from "@/lib/carnets";
import AdminAuthGate from "../../AdminAuthGate";
import adminStyles from "../../adminStyles";

const destinationVide: Omit<Destination, "id" | "updatedAt"> & { id?: string } = {
  nom: "",
  photo: "",
  deroule: [],
  restaurants: [],
  activites: [],
  seDeplacer: [],
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

export default function EditDestinationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: routeId } = use(params);
  const isNew = routeId === "nouvelle";
  const router = useRouter();

  const [dest, setDest] = useState<typeof destinationVide>(destinationVide);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  function charger() {
    if (isNew) return;
    fetch("/api/destination-list")
      .then((r) => r.json())
      .then((data) => {
        const found = (data.destinations ?? []).find((d: Destination) => d.id === routeId);
        if (found) setDest(found);
        setLoading(false);
      });
  }

  function update<K extends keyof typeof destinationVide>(key: K, value: (typeof destinationVide)[K]) {
    setDest((prev) => ({ ...prev, [key]: value }));
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

  function ajouterDeroule() {
    update("deroule", [...dest.deroule, { heure: "", titre: "", detail: "" } as DeroulePoint]);
  }
  function ajouterRestaurant() {
    if (dest.restaurants.length >= 5) return;
    update("restaurants", [...dest.restaurants, { nom: "", photo: "", cuisine: "", prix: "€€" } as Restaurant]);
  }
  function ajouterActivite() {
    if (dest.activites.length >= 5) return;
    update("activites", [...dest.activites, { nom: "", photo: "", description: "" } as Activite]);
  }
  function ajouterConseilDeplacement() {
    update("seDeplacer", [...dest.seDeplacer, ""]);
  }
  function supprimerLigne<K extends "deroule" | "restaurants" | "activites" | "seDeplacer">(champ: K, i: number) {
    update(champ, (dest[champ] as unknown[]).filter((_, idx) => idx !== i) as (typeof destinationVide)[K]);
  }

  return (
    <AdminAuthGate onAuthenticated={charger} label="Destinations">
      <div style={adminStyles.wrap}>
        <div style={adminStyles.card}>
          <div style={adminStyles.header}>
            <div>
              <div style={adminStyles.logo}>MamZelles en vadrouille</div>
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
                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Photo (URL)</label>
                  <input style={adminStyles.input} value={dest.photo} onChange={(e) => update("photo", e.target.value)} />
                </div>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Déroulé type</div>
                {dest.deroule.map((point, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                    <input
                      style={{ ...adminStyles.input, width: 90 }}
                      placeholder="ex : Jour 2"
                      value={point.heure}
                      onChange={(e) => {
                        const copy = [...dest.deroule];
                        copy[i] = { ...copy[i], heure: e.target.value };
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
                      placeholder="Détail"
                      value={point.detail}
                      onChange={(e) => {
                        const copy = [...dest.deroule];
                        copy[i] = { ...copy[i], detail: e.target.value };
                        update("deroule", copy);
                      }}
                    />
                    <button onClick={() => supprimerLigne("deroule", i)} style={adminStyles.btnDelete}>✕</button>
                  </div>
                ))}
                <button onClick={ajouterDeroule} style={smallLink}>+ Ajouter une étape</button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>
                  Restaurants ({dest.restaurants.length}/5)
                </div>
                {dest.restaurants.map((r, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                    <input
                      style={adminStyles.input}
                      placeholder="Nom"
                      value={r.nom}
                      onChange={(e) => {
                        const copy = [...dest.restaurants];
                        copy[i] = { ...copy[i], nom: e.target.value };
                        update("restaurants", copy);
                      }}
                    />
                    <input
                      style={adminStyles.input}
                      placeholder="Photo (URL)"
                      value={r.photo}
                      onChange={(e) => {
                        const copy = [...dest.restaurants];
                        copy[i] = { ...copy[i], photo: e.target.value };
                        update("restaurants", copy);
                      }}
                    />
                    <input
                      style={{ ...adminStyles.input, width: 130 }}
                      placeholder="Cuisine"
                      value={r.cuisine}
                      onChange={(e) => {
                        const copy = [...dest.restaurants];
                        copy[i] = { ...copy[i], cuisine: e.target.value };
                        update("restaurants", copy);
                      }}
                    />
                    <select
                      style={{ ...adminStyles.input, width: 80 }}
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
                    <button onClick={() => supprimerLigne("restaurants", i)} style={adminStyles.btnDelete}>✕</button>
                  </div>
                ))}
                {dest.restaurants.length < 5 && (
                  <button onClick={ajouterRestaurant} style={smallLink}>+ Ajouter un restaurant</button>
                )}
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>
                  Sites & activités ({dest.activites.length}/5)
                </div>
                {dest.activites.map((a, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                    <input
                      style={adminStyles.input}
                      placeholder="Nom"
                      value={a.nom}
                      onChange={(e) => {
                        const copy = [...dest.activites];
                        copy[i] = { ...copy[i], nom: e.target.value };
                        update("activites", copy);
                      }}
                    />
                    <input
                      style={adminStyles.input}
                      placeholder="Photo (URL)"
                      value={a.photo}
                      onChange={(e) => {
                        const copy = [...dest.activites];
                        copy[i] = { ...copy[i], photo: e.target.value };
                        update("activites", copy);
                      }}
                    />
                    <input
                      style={adminStyles.input}
                      placeholder="Description"
                      value={a.description}
                      onChange={(e) => {
                        const copy = [...dest.activites];
                        copy[i] = { ...copy[i], description: e.target.value };
                        update("activites", copy);
                      }}
                    />
                    <button onClick={() => supprimerLigne("activites", i)} style={adminStyles.btnDelete}>✕</button>
                  </div>
                ))}
                {dest.activites.length < 5 && (
                  <button onClick={ajouterActivite} style={smallLink}>+ Ajouter une activité</button>
                )}
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Comment se déplacer</div>
                {dest.seDeplacer.map((conseil, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <input
                      style={adminStyles.input}
                      value={conseil}
                      onChange={(e) => {
                        const copy = [...dest.seDeplacer];
                        copy[i] = e.target.value;
                        update("seDeplacer", copy);
                      }}
                    />
                    <button onClick={() => supprimerLigne("seDeplacer", i)} style={adminStyles.btnDelete}>✕</button>
                  </div>
                ))}
                <button onClick={ajouterConseilDeplacement} style={smallLink}>+ Ajouter un conseil</button>
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
