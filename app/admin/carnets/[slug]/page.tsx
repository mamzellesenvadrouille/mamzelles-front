// app/admin/carnets/[slug]/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/carnets/[slug]/page.tsx
//
// Formulaire de création/édition d'un carnet.
// Pour créer un nouveau carnet, va sur /admin/carnets/nouveau
"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import type { Carnet, Destination, CarnetDestinationRef, ConseilMamZelles, BudgetLigne, ChecklistItem } from "@/lib/carnets";
import AdminAuthGate from "../../AdminAuthGate";
import adminStyles from "../../adminStyles";

const carnetVide: Carnet = {
  slug: "",
  client: { prenoms: "", typeVoyage: "" },
  destination: "",
  dates: { debut: "", fin: "" },
  hero: { photo: "" },
  bienvenue: { message: "" },
  overview: { meteo: "", budget: 0, decalage: "", dureeJours: 0 },
  parcours: [],
  destinations: [],
  conseils: [],
  budget: [],
  reservations: [],
  checklistValise: [],
  indispensables: { visa: "", passeport: "", vaccins: "", assurance: "", monnaie: "" },
  createdAt: "",
  updatedAt: "",
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

export default function EditCarnetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const isNew = slug === "nouveau";
  const router = useRouter();

  const [carnet, setCarnet] = useState<Carnet>(carnetVide);
  const [destinationsDispo, setDestinationsDispo] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  function chargerDonnees() {
    fetch("/api/destination-list")
      .then((r) => r.json())
      .then((data) => setDestinationsDispo(data.destinations ?? []));

    if (!isNew) {
      fetch("/api/carnet-list")
        .then((r) => r.json())
        .then((data) => {
          const found = (data.carnets ?? []).find((c: Carnet) => c.slug === slug);
          if (found) setCarnet(found);
          setLoading(false);
        });
    }
  }

  function update<K extends keyof Carnet>(key: K, value: Carnet[K]) {
    setCarnet((prev) => ({ ...prev, [key]: value }));
  }

  function updateNested<P extends keyof Carnet>(parent: P, key: string, value: unknown) {
    setCarnet((prev) => ({ ...prev, [parent]: { ...(prev[parent] as object), [key]: value } }));
  }

  async function enregistrer() {
    if (!carnet.slug) {
      alert("Le slug (identifiant du lien) est obligatoire.");
      return;
    }
    setSaving(true);
    const res = await fetch("/api/carnet-save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carnet),
    });
    setSaving(false);
    if (res.ok) {
      router.push("/admin/carnets");
    } else {
      alert("Erreur lors de l'enregistrement.");
    }
  }

  function toggleDestination(id: string) {
    const existe = carnet.destinations.find((d) => d.destinationId === id);
    if (existe) {
      update("destinations", carnet.destinations.filter((d) => d.destinationId !== id));
    } else {
      const nouvelleRef: CarnetDestinationRef = { destinationId: id, nuits: 1 };
      update("destinations", [...carnet.destinations, nouvelleRef]);
    }
  }

  function updateNuits(id: string, nuits: number) {
    update(
      "destinations",
      carnet.destinations.map((d) => (d.destinationId === id ? { ...d, nuits } : d))
    );
  }

  function ajouterConseil() {
    update("conseils", [...carnet.conseils, { type: "conseil", texte: "" } as ConseilMamZelles]);
  }
  function ajouterBudgetLigne() {
    update("budget", [...carnet.budget, { poste: "", montant: 0 } as BudgetLigne]);
  }
  function ajouterCheckItem(champ: "reservations" | "checklistValise") {
    update(champ, [...carnet[champ], { label: "", coche: false } as ChecklistItem]);
  }

  return (
    <AdminAuthGate onAuthenticated={chargerDonnees} label="Carnets" redirectAfterLoginTo="/admin/carnets">
      <div style={adminStyles.wrap}>
        <div style={adminStyles.card}>
          <div style={adminStyles.header}>
            <div>
              <div style={adminStyles.logo}>MamZelles en vadrouille</div>
              <div style={adminStyles.title}>{isNew ? "Nouveau carnet" : `Éditer : ${carnet.client.prenoms}`}</div>
            </div>
          </div>

          {loading ? (
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#888" }}>Chargement...</p>
          ) : (
            <>
              <div style={sectionWrap}>
                <div style={sectionTitle}>Infos générales</div>

                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Slug (identifiant du lien)</label>
                  <input style={adminStyles.input} placeholder="ex : julie-thomas-maldives" value={carnet.slug} disabled={!isNew} onChange={(e) => update("slug", e.target.value)} />
                </div>

                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Prénoms du client</label>
                  <input style={adminStyles.input} value={carnet.client.prenoms} onChange={(e) => updateNested("client", "prenoms", e.target.value)} />
                </div>

                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Type de voyage</label>
                  <input style={adminStyles.input} placeholder="ex : Voyage de noces" value={carnet.client.typeVoyage} onChange={(e) => updateNested("client", "typeVoyage", e.target.value)} />
                </div>

                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Destination générale</label>
                  <input style={adminStyles.input} placeholder="ex : Maldives" value={carnet.destination} onChange={(e) => update("destination", e.target.value)} />
                </div>

                <div style={{ display: "flex", gap: 16 }}>
                  <div style={{ ...adminStyles.field, flex: 1 }}>
                    <label style={adminStyles.label}>Date de début</label>
                    <input type="date" style={adminStyles.input} value={carnet.dates.debut} onChange={(e) => updateNested("dates", "debut", e.target.value)} />
                  </div>
                  <div style={{ ...adminStyles.field, flex: 1 }}>
                    <label style={adminStyles.label}>Date de fin</label>
                    <input type="date" style={adminStyles.input} value={carnet.dates.fin} onChange={(e) => updateNested("dates", "fin", e.target.value)} />
                  </div>
                </div>

                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Photo hero (URL)</label>
                  <input style={adminStyles.input} value={carnet.hero.photo} onChange={(e) => updateNested("hero", "photo", e.target.value)} />
                </div>

                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Message de bienvenue</label>
                  <textarea style={{ ...adminStyles.textarea, minHeight: 80 }} value={carnet.bienvenue.message} onChange={(e) => updateNested("bienvenue", "message", e.target.value)} />
                </div>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Vue d&apos;ensemble</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div style={adminStyles.field}>
                    <label style={adminStyles.label}>Météo</label>
                    <input style={adminStyles.input} placeholder="ex : 28°" value={carnet.overview.meteo} onChange={(e) => updateNested("overview", "meteo", e.target.value)} />
                  </div>
                  <div style={adminStyles.field}>
                    <label style={adminStyles.label}>Budget prévu (€)</label>
                    <input type="number" style={adminStyles.input} value={carnet.overview.budget} onChange={(e) => updateNested("overview", "budget", Number(e.target.value))} />
                  </div>
                  <div style={adminStyles.field}>
                    <label style={adminStyles.label}>Décalage horaire</label>
                    <input style={adminStyles.input} value={carnet.overview.decalage} onChange={(e) => updateNested("overview", "decalage", e.target.value)} />
                  </div>
                  <div style={adminStyles.field}>
                    <label style={adminStyles.label}>Durée (jours)</label>
                    <input type="number" style={adminStyles.input} value={carnet.overview.dureeJours} onChange={(e) => updateNested("overview", "dureeJours", Number(e.target.value))} />
                  </div>
                </div>
                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Parcours (une étape par ligne)</label>
                  <textarea
                    style={{ ...adminStyles.textarea, minHeight: 60 }}
                    placeholder={"Paris\nMalé\nBaa Atoll\nParis"}
                    value={carnet.parcours.join("\n")}
                    onChange={(e) => update("parcours", e.target.value.split("\n").filter(Boolean))}
                  />
                </div>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Destinations incluses</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Sélectionne parmi tes fiches destination existantes.
                </p>
                {destinationsDispo.length === 0 && (
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888" }}>Aucune fiche destination pour l&apos;instant.</p>
                )}
                {destinationsDispo.map((d) => {
                  const ref = carnet.destinations.find((r) => r.destinationId === d.id);
                  return (
                    <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "10px 0", borderBottom: "1px solid #f0ebe4", fontFamily: "Inter, sans-serif", fontSize: 14 }}>
                      <input type="checkbox" checked={!!ref} onChange={() => toggleDestination(d.id)} />
                      <span style={{ flex: 1 }}>{d.nom}</span>
                      {ref && (
                        <input
                          type="number"
                          style={{ ...adminStyles.input, width: 90 }}
                          value={ref.nuits}
                          onChange={(e) => updateNuits(d.id, Number(e.target.value))}
                          placeholder="nuits"
                        />
                      )}
                    </div>
                  );
                })}
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Conseils MamZelles</div>
                {carnet.conseils.map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <select
                      style={{ ...adminStyles.input, width: 160 }}
                      value={c.type}
                      onChange={(e) => {
                        const copy = [...carnet.conseils];
                        copy[i] = { ...copy[i], type: e.target.value as ConseilMamZelles["type"] };
                        update("conseils", copy);
                      }}
                    >
                      <option value="conseil">Notre conseil</option>
                      <option value="coup-de-coeur">Coup de cœur</option>
                      <option value="a-eviter">À éviter</option>
                    </select>
                    <input
                      style={adminStyles.input}
                      value={c.texte}
                      onChange={(e) => {
                        const copy = [...carnet.conseils];
                        copy[i] = { ...copy[i], texte: e.target.value };
                        update("conseils", copy);
                      }}
                    />
                  </div>
                ))}
                <button onClick={ajouterConseil} style={smallLink}>+ Ajouter un conseil</button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Budget</div>
                {carnet.budget.map((b, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <input
                      style={adminStyles.input}
                      placeholder="Poste (ex : Vols)"
                      value={b.poste}
                      onChange={(e) => {
                        const copy = [...carnet.budget];
                        copy[i] = { ...copy[i], poste: e.target.value };
                        update("budget", copy);
                      }}
                    />
                    <input
                      type="number"
                      style={{ ...adminStyles.input, width: 130 }}
                      placeholder="Montant"
                      value={b.montant}
                      onChange={(e) => {
                        const copy = [...carnet.budget];
                        copy[i] = { ...copy[i], montant: Number(e.target.value) };
                        update("budget", copy);
                      }}
                    />
                  </div>
                ))}
                <button onClick={ajouterBudgetLigne} style={smallLink}>+ Ajouter une ligne</button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Checklist réservations</div>
                {carnet.reservations.map((item, i) => (
                  <input
                    key={i}
                    style={{ ...adminStyles.input, marginBottom: 10 }}
                    value={item.label}
                    onChange={(e) => {
                      const copy = [...carnet.reservations];
                      copy[i] = { ...copy[i], label: e.target.value };
                      update("reservations", copy);
                    }}
                  />
                ))}
                <button onClick={() => ajouterCheckItem("reservations")} style={smallLink}>+ Ajouter</button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Checklist valise</div>
                {carnet.checklistValise.map((item, i) => (
                  <input
                    key={i}
                    style={{ ...adminStyles.input, marginBottom: 10 }}
                    value={item.label}
                    onChange={(e) => {
                      const copy = [...carnet.checklistValise];
                      copy[i] = { ...copy[i], label: e.target.value };
                      update("checklistValise", copy);
                    }}
                  />
                ))}
                <button onClick={() => ajouterCheckItem("checklistValise")} style={smallLink}>+ Ajouter</button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Indispensables</div>
                {(["visa", "passeport", "vaccins", "assurance", "monnaie"] as const).map((champ) => (
                  <div style={adminStyles.field} key={champ}>
                    <label style={adminStyles.label}>{champ}</label>
                    <input style={adminStyles.input} value={carnet.indispensables[champ]} onChange={(e) => updateNested("indispensables", champ, e.target.value)} />
                  </div>
                ))}
              </div>

              <button onClick={enregistrer} disabled={saving} style={adminStyles.btnGold}>
                {saving ? "Enregistrement..." : "Enregistrer le carnet"}
              </button>
            </>
          )}
        </div>
      </div>
    </AdminAuthGate>
  );
}
