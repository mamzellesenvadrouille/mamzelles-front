// app/admin/carnets/[slug]/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/carnets/[slug]/page.tsx
//
// Formulaire de création/édition d'un carnet.
// Pour créer un nouveau carnet, va sur /admin/carnets/nouveau
"use client";

import { useState, use } from "react";
import { useRouter } from "next/navigation";
import type { Carnet, Destination, CarnetDestinationRef, ConseilMamZelles, BudgetLigne, ChecklistItem, ContactUrgence } from "@/lib/carnets";
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
  parcoursCoords: [],
  destinations: [],
  conseils: [],
  budget: [],
  reservations: [
    { label: "Vol aller réservé", coche: false },
    { label: "Vol retour réservé", coche: false },
    { label: "Train réservé", coche: false },
    { label: "Location de voiture réservée", coche: false },
    { label: "Transfert aéroport ↔ hôtel réservé", coche: false },
    { label: "Hébergement Destination 1 réservé", coche: false },
    { label: "Hébergement Destination 2 réservé", coche: false },
    { label: "Excursion principale réservée", coche: false },
    { label: "Restaurant(s) coup de cœur réservé(s)", coche: false },
  ],
  checklistValise: [
    // Uniquement des objets physiques à mettre dans le sac
    { label: "Passeport et visa (si applicable)", coche: false },
    { label: "Attestation d'assurance voyage (imprimée ou sur le téléphone)", coche: false },
    { label: "Billets d'avion / e-tickets", coche: false },
    { label: "Photocopies des papiers importants", coche: false },
    { label: "Carte bancaire internationale + un peu d'espèces", coche: false },
    { label: "Adaptateur de prise électrique", coche: false },
    { label: "Batterie externe et chargeurs", coche: false },
    { label: "Trousse à pharmacie de base (antidouleur, pansements...)", coche: false },
    { label: "Crème solaire indice élevé", coche: false },
    { label: "Répulsif anti-moustiques", coche: false },
    { label: "Maillots de bain", coche: false },
    { label: "Tenues légères et confortables", coche: false },
    { label: "Une tenue plus habillée pour le soir", coche: false },
    { label: "Chapeau ou casquette", coche: false },
    { label: "Lunettes de soleil", coche: false },
    { label: "Chaussures de marche confortables", coche: false },
    { label: "Sandales / tongs", coche: false },
    { label: "Nécessaire de toilette", coche: false },
    { label: "Masque et tuba personnels (confort)", coche: false },
    { label: "Sac étanche pour excursions", coche: false },
    { label: "Livre ou liseuse pour la détente", coche: false },
  ],
  checklistVoyage: [
    // Uniquement des démarches/actions à faire, rien à emporter
    { label: "Vérifier la validité du passeport (6 mois après retour)", coche: false },
    { label: "Faire la demande de visa si nécessaire", coche: false },
    { label: "Vérifier les vaccins recommandés", coche: false },
    { label: "Souscrire une assurance voyage", coche: false },
    { label: "Prévenir la banque du voyage (paiements à l'étranger)", coche: false },
    { label: "Activer un forfait data international ou une carte SIM locale", coche: false },
    { label: "Télécharger les cartes hors-ligne (Google Maps, Maps.me)", coche: false },
    { label: "Vérifier la météo de la destination avant de faire la valise", coche: false },
    { label: "Faire garder les animaux / arroser les plantes", coche: false },
    { label: "Suspendre ou rediriger le courrier", coche: false },
    { label: "Enregistrer les numéros d'urgence sur place", coche: false },
    { label: "Prévenir un proche des dates et du lieu du voyage", coche: false },
    { label: "Faire le check-in en ligne du vol", coche: false },
  ],
  indispensables: { visa: "", passeport: "", vaccins: "", assurance: "", monnaie: "" },
  contactsUrgence: [],
  documents: [],
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

  function toggleItemChoisi(
    destinationId: string,
    champ: "hebergementsChoisis" | "restaurantsChoisis" | "activitesChoisies",
    nom: string,
    tousLesNoms: string[]
  ) {
    update(
      "destinations",
      carnet.destinations.map((d) => {
        if (d.destinationId !== destinationId) return d;
        const actuel = d[champ] ?? tousLesNoms; // undefined = tout est sélectionné par défaut
        const nouveau = actuel.includes(nom) ? actuel.filter((n) => n !== nom) : [...actuel, nom];
        return { ...d, [champ]: nouveau };
      })
    );
  }

  function ajouterConseil() {
    update("conseils", [...carnet.conseils, { type: "conseil", texte: "" } as ConseilMamZelles]);
  }
  function ajouterBudgetLigne() {
    update("budget", [...carnet.budget, { poste: "", montant: 0 } as BudgetLigne]);
  }
  function ajouterCheckItem(champ: "reservations" | "checklistValise" | "checklistVoyage") {
    update(champ, [...(carnet[champ] ?? []), { label: "", coche: false } as ChecklistItem]);
  }
  function ajouterContactUrgence() {
    update("contactsUrgence", [...(carnet.contactsUrgence ?? []), { label: "", valeur: "" } as ContactUrgence]);
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
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Ville de départ</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Renseigne juste la ville de départ du client — les étapes du parcours (destinations incluses dans ce carnet) et leur carte se construisent ensuite automatiquement, dans l&apos;ordre où tu as ajouté les destinations ci-dessus.
                </p>
                <div style={{ display: "flex", gap: 8 }}>
                  <input
                    style={{ ...adminStyles.input, flex: 2 }}
                    placeholder="ex : Paris"
                    value={carnet.villeDepart?.nom ?? ""}
                    onChange={(e) => update("villeDepart", { ...(carnet.villeDepart ?? { lat: 0, lng: 0 }), nom: e.target.value })}
                  />
                  <input
                    style={{ ...adminStyles.input, flex: 1 }}
                    placeholder="Latitude"
                    value={carnet.villeDepart?.lat ?? ""}
                    onChange={(e) => update("villeDepart", { ...(carnet.villeDepart ?? { nom: "", lng: 0 }), lat: Number(e.target.value) })}
                  />
                  <input
                    style={{ ...adminStyles.input, flex: 1 }}
                    placeholder="Longitude"
                    value={carnet.villeDepart?.lng ?? ""}
                    onChange={(e) => update("villeDepart", { ...(carnet.villeDepart ?? { nom: "", lat: 0 }), lng: Number(e.target.value) })}
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
                  const nomsHebergements = (d.hebergements ?? []).map((h) => h.nom);
                  const nomsRestaurants = d.restaurants.map((r) => r.nom);
                  const nomsActivites = d.activites.map((a) => a.nom);
                  return (
                    <div key={d.id} style={{ borderBottom: "1px solid #f0ebe4", padding: "10px 0" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "Inter, sans-serif", fontSize: 14 }}>
                        <input type="checkbox" checked={!!ref} onChange={() => toggleDestination(d.id)} />
                        <span style={{ flex: 1, fontWeight: 500 }}>{d.nom}</span>
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

                      {ref && (
                        <div style={{ marginTop: 10, marginLeft: 26, display: "flex", flexDirection: "column", gap: 12 }}>
                          {nomsHebergements.length > 0 && (
                            <div>
                              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", color: "#aaa", marginBottom: 6 }}>
                                Hébergements à inclure dans ce carnet
                              </div>
                              {nomsHebergements.map((nom) => {
                                const coche = (ref.hebergementsChoisis ?? nomsHebergements).includes(nom);
                                return (
                                  <label key={nom} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, marginBottom: 4, cursor: "pointer" }}>
                                    <input
                                      type="checkbox"
                                      checked={coche}
                                      onChange={() => toggleItemChoisi(d.id, "hebergementsChoisis", nom, nomsHebergements)}
                                    />
                                    {nom}
                                  </label>
                                );
                              })}
                            </div>
                          )}

                          {nomsRestaurants.length > 0 && (
                            <div>
                              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", color: "#aaa", marginBottom: 6 }}>
                                Restaurants à inclure dans ce carnet
                              </div>
                              {nomsRestaurants.map((nom) => {
                                const coche = (ref.restaurantsChoisis ?? nomsRestaurants).includes(nom);
                                return (
                                  <label key={nom} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, marginBottom: 4, cursor: "pointer" }}>
                                    <input
                                      type="checkbox"
                                      checked={coche}
                                      onChange={() => toggleItemChoisi(d.id, "restaurantsChoisis", nom, nomsRestaurants)}
                                    />
                                    {nom}
                                  </label>
                                );
                              })}
                            </div>
                          )}

                          {nomsActivites.length > 0 && (
                            <div>
                              <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", color: "#aaa", marginBottom: 6 }}>
                                Sites & activités à inclure dans ce carnet
                              </div>
                              {nomsActivites.map((nom) => {
                                const coche = (ref.activitesChoisies ?? nomsActivites).includes(nom);
                                return (
                                  <label key={nom} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, marginBottom: 4, cursor: "pointer" }}>
                                    <input
                                      type="checkbox"
                                      checked={coche}
                                      onChange={() => toggleItemChoisi(d.id, "activitesChoisies", nom, nomsActivites)}
                                    />
                                    {nom}
                                  </label>
                                );
                              })}
                            </div>
                          )}
                        </div>
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
                <div style={sectionTitle}>Vos réservations</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Un lien de réservation par ligne (Skyscanner, Booking.com, site de l&apos;hôtel...). Le client coche automatiquement en cliquant dessus.
                </p>
                {carnet.reservations.map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <input
                      style={{ ...adminStyles.input, flex: 1 }}
                      placeholder="ex : Vol aller Paris → Malé"
                      value={item.label}
                      onChange={(e) => {
                        const copy = [...carnet.reservations];
                        copy[i] = { ...copy[i], label: e.target.value };
                        update("reservations", copy);
                      }}
                    />
                    <input
                      style={{ ...adminStyles.input, flex: 1 }}
                      placeholder="Lien de réservation (optionnel)"
                      value={item.url ?? ""}
                      onChange={(e) => {
                        const copy = [...carnet.reservations];
                        copy[i] = { ...copy[i], url: e.target.value };
                        update("reservations", copy);
                      }}
                    />
                    <button
                      onClick={() => update("reservations", carnet.reservations.filter((_, idx) => idx !== i))}
                      style={adminStyles.btnDelete}
                    >
                      ✕
                    </button>
                  </div>
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
                <div style={sectionTitle}>Checklist voyage</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Les démarches à faire avant le départ (papiers, banque, maison...), à ne pas confondre avec la valise.
                </p>
                {(carnet.checklistVoyage ?? []).map((item, i) => (
                  <input
                    key={i}
                    style={{ ...adminStyles.input, marginBottom: 10 }}
                    value={item.label}
                    onChange={(e) => {
                      const copy = [...(carnet.checklistVoyage ?? [])];
                      copy[i] = { ...copy[i], label: e.target.value };
                      update("checklistVoyage", copy);
                    }}
                  />
                ))}
                <button onClick={() => ajouterCheckItem("checklistVoyage")} style={smallLink}>+ Ajouter</button>
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

              <div style={sectionWrap}>
                <div style={sectionTitle}>Contacts d&apos;urgence</div>
                {(carnet.contactsUrgence ?? []).map((c, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10 }}>
                    <input
                      style={adminStyles.input}
                      placeholder="Ex : Ambulance locale, Hôtel - réception, Assurance..."
                      value={c.label}
                      onChange={(e) => {
                        const copy = [...(carnet.contactsUrgence ?? [])];
                        copy[i] = { ...copy[i], label: e.target.value };
                        update("contactsUrgence", copy);
                      }}
                    />
                    <input
                      style={{ ...adminStyles.input, width: 200 }}
                      placeholder="Numéro ou email"
                      value={c.valeur}
                      onChange={(e) => {
                        const copy = [...(carnet.contactsUrgence ?? [])];
                        copy[i] = { ...copy[i], valeur: e.target.value };
                        update("contactsUrgence", copy);
                      }}
                    />
                  </div>
                ))}
                <button onClick={ajouterContactUrgence} style={smallLink}>+ Ajouter un contact</button>
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
