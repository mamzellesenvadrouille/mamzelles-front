// app/admin/carnets/[slug]/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/carnets/[slug]/page.tsx
//
// Formulaire de création/édition d'un carnet.
// Pour créer un nouveau carnet, va sur /admin/carnets/nouveau
"use client";

import { useState, useEffect, useRef, use } from "react";
import { useRouter } from "next/navigation";
import type { Carnet, Destination, CarnetDestinationRef, ConseilMamZelles, BudgetLigne, ChecklistItem, ContactUrgence } from "@/lib/carnets";
import { normaliserSlug, normaliserSlugEnDirect } from "@/lib/carnets";
import tzlookup from "tz-lookup";
import AdminAuthGate from "../../AdminAuthGate";
import adminStyles from "../../adminStyles";
import LieuSearchField from "../../LieuSearchField";

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
    { label: "Vol aller", coche: false },
    { label: "Vol retour", coche: false },
    { label: "Train", coche: false },
    { label: "Location de voiture", coche: false },
    { label: "Transfert aéroport ↔ hôtel", coche: false },
    { label: "Hébergement Destination 1", coche: false },
    { label: "Hébergement Destination 2", coche: false },
    { label: "Excursion principale", coche: false },
    { label: "Restaurant(s) coup de cœur", coche: false },
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

// Calcule le décalage horaire réel entre la ville de départ et la première
// destination du carnet, à la date de début du voyage — ce qui permet de
// tenir compte automatiquement de l'heure d'été/hiver (le décalage n'est
// pas le même en été et en hiver pour beaucoup de destinations).
function decalageEnHeures(date: Date, fuseau: string): number {
  const enUTC = new Date(date.toLocaleString("en-US", { timeZone: "UTC" }));
  const enFuseau = new Date(date.toLocaleString("en-US", { timeZone: fuseau }));
  return (enFuseau.getTime() - enUTC.getTime()) / 3600000;
}

function calculerDecalageHoraire(carnet: Carnet, destinationsDispo: Destination[]): string | null {
  const depart = carnet.villeDepart;
  if (!depart || typeof depart.lat !== "number" || typeof depart.lng !== "number") return null;

  const premiereRef = carnet.destinations[0];
  if (!premiereRef) return null;
  const destination = destinationsDispo.find((d) => d.id === premiereRef.destinationId);
  if (!destination || typeof destination.lat !== "number" || typeof destination.lng !== "number") return null;

  if (!carnet.dates?.debut) return null;
  const dateVoyage = new Date(carnet.dates.debut);
  if (Number.isNaN(dateVoyage.getTime())) return null;

  try {
    const fuseauDepart = tzlookup(depart.lat, depart.lng);
    const fuseauDestination = tzlookup(destination.lat, destination.lng);
    const diff = decalageEnHeures(dateVoyage, fuseauDestination) - decalageEnHeures(dateVoyage, fuseauDepart);
    const arrondi = Math.round(diff);
    return arrondi >= 0 ? `+${arrondi}h` : `${arrondi}h`;
  } catch {
    return null;
  }
}

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
const microLabel: React.CSSProperties = {
  fontSize: 10.5,
  textTransform: "uppercase",
  letterSpacing: "0.06em",
  color: "#aaa",
  display: "block",
  marginBottom: 8,
};
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
  const [reinitialisation, setReinitialisation] = useState(false);
  const [dragIndexDest, setDragIndexDest] = useState<number | null>(null);
  const [dragIndexConseil, setDragIndexConseil] = useState<number | null>(null);
  const [dragIndexBudget, setDragIndexBudget] = useState<number | null>(null);
  const [dragIndexValise, setDragIndexValise] = useState<number | null>(null);
  const [dragIndexVoyage, setDragIndexVoyage] = useState<number | null>(null);

  function deposerDestination(i: number) {
    if (dragIndexDest === null || dragIndexDest === i) {
      setDragIndexDest(null);
      return;
    }
    const copy = [...carnet.destinations];
    const [ref] = copy.splice(dragIndexDest, 1);
    copy.splice(i, 0, ref);
    update("destinations", copy);
    setDragIndexDest(null);
  }

  function deposerConseil(i: number) {
    if (dragIndexConseil === null || dragIndexConseil === i) {
      setDragIndexConseil(null);
      return;
    }
    const copy = [...carnet.conseils];
    const [c] = copy.splice(dragIndexConseil, 1);
    copy.splice(i, 0, c);
    update("conseils", copy);
    setDragIndexConseil(null);
  }

  function deposerBudget(i: number) {
    if (dragIndexBudget === null || dragIndexBudget === i) {
      setDragIndexBudget(null);
      return;
    }
    const copy = [...carnet.budget];
    const [b] = copy.splice(dragIndexBudget, 1);
    copy.splice(i, 0, b);
    update("budget", copy);
    setDragIndexBudget(null);
  }

  function deposerValise(i: number) {
    if (dragIndexValise === null || dragIndexValise === i) {
      setDragIndexValise(null);
      return;
    }
    const copy = [...carnet.checklistValise];
    const [item] = copy.splice(dragIndexValise, 1);
    copy.splice(i, 0, item);
    update("checklistValise", copy);
    setDragIndexValise(null);
  }

  function deposerVoyage(i: number) {
    if (dragIndexVoyage === null || dragIndexVoyage === i) {
      setDragIndexVoyage(null);
      return;
    }
    const copy = [...(carnet.checklistVoyage ?? [])];
    const [item] = copy.splice(dragIndexVoyage, 1);
    copy.splice(i, 0, item);
    update("checklistVoyage", copy);
    setDragIndexVoyage(null);
  }

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

  // Remplit automatiquement "Budget prévu" et "Décalage horaire" dès que
  // les données sont chargées, mais UNE SEULE FOIS et SEULEMENT si le champ
  // est encore vide — pour ne jamais écraser une valeur déjà ajustée à la
  // main, ni recalculer sans cesse à chaque frappe.
  const autoRempliRef = useRef(false);
  useEffect(() => {
    if (autoRempliRef.current || loading || destinationsDispo.length === 0) return;

    if (!carnet.overview.budget && carnet.budget.length > 0) {
      const somme = carnet.budget.reduce((s, l) => s + (l.montant || 0), 0);
      if (somme > 0) updateNested("overview", "budget", somme);
    }
    if (!carnet.overview.decalage) {
      const decalage = calculerDecalageHoraire(carnet, destinationsDispo);
      if (decalage) updateNested("overview", "decalage", decalage);
    }
    autoRempliRef.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, destinationsDispo, carnet.villeDepart, carnet.destinations, carnet.budget]);

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

  async function reinitialiserParticipations() {
    if (!carnet.slug) return;
    if (!confirm("Remettre à zéro toutes les participations (montants et prénoms) de la Liste de Voyage ?")) return;
    setReinitialisation(true);
    const res = await fetch("/api/liste-de-voyage-reset", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug: carnet.slug }),
    });
    setReinitialisation(false);
    if (res.ok) {
      alert("Participations réinitialisées. Recharge la page pour voir le résultat.");
    } else {
      alert("Erreur lors de la réinitialisation.");
    }
  }

  function toggleDestination(id: string) {
    const existe = carnet.destinations.find((d) => d.destinationId === id);
    if (existe) {
      update("destinations", carnet.destinations.filter((d) => d.destinationId !== id));
    } else {
      const nouvelleRef: CarnetDestinationRef = { destinationId: id, nuits: 1 };
      const nextDestinations = [...carnet.destinations, nouvelleRef];
      update("destinations", nextDestinations);
      if (!carnet.destination.trim()) {
        const noms = nextDestinations
          .map((ref) => destinationsDispo.find((d) => d.id === ref.destinationId)?.nom)
          .filter((nom): nom is string => !!nom);
        if (noms.length > 0) update("destination", noms.join(" & "));
      }
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

  function toggleOffrable(
    destinationId: string,
    champ: "listeVoyageHebergements" | "listeVoyageActivites",
    nom: string
  ) {
    update(
      "destinations",
      carnet.destinations.map((d) => {
        if (d.destinationId !== destinationId) return d;
        const actuel = d[champ] ?? {};
        const entree = actuel[nom] ?? {};
        return { ...d, [champ]: { ...actuel, [nom]: { ...entree, offrable: !entree.offrable } } };
      })
    );
  }

  function updatePrixOffrable(
    destinationId: string,
    champ: "listeVoyageHebergements" | "listeVoyageActivites",
    nom: string,
    prix: number
  ) {
    update(
      "destinations",
      carnet.destinations.map((d) => {
        if (d.destinationId !== destinationId) return d;
        const actuel = d[champ] ?? {};
        const entree = actuel[nom] ?? {};
        return { ...d, [champ]: { ...actuel, [nom]: { ...entree, prixIndicatif: prix } } };
      })
    );
  }

  function ligneDestination(d: Destination) {
    const ref = carnet.destinations.find((r) => r.destinationId === d.id);
    const nomsHebergements = (d.hebergements ?? []).map((h) => h.nom);
    const nomsRestaurants = d.restaurants.map((r) => r.nom);
    const nomsActivites = d.activites.map((a) => a.nom);
    return (
      <div key={d.id} style={{ padding: "4px 0" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12, fontFamily: "Inter, sans-serif", fontSize: 14 }}>
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

        {ref && (
          <div style={{ marginTop: 10, marginLeft: 26, display: "flex", flexDirection: "column", gap: 12 }}>
            {nomsHebergements.length > 0 && (
              <div>
                <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "0.05em", color: "#aaa", marginBottom: 6 }}>
                  Hébergements à inclure dans ce carnet
                </div>
                {nomsHebergements.map((nom) => {
                  const coche = (ref.hebergementsChoisis ?? nomsHebergements).includes(nom);
                  const offrableInfo = ref.listeVoyageHebergements?.[nom];
                  return (
                    <div key={nom} style={{ marginBottom: 4 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={coche}
                          onChange={() => toggleItemChoisi(d.id, "hebergementsChoisis", nom, nomsHebergements)}
                        />
                        {nom}
                      </label>
                      {coche && (
                        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, color: "#a08d6c", marginLeft: 24, marginTop: 3, cursor: "pointer" }}>
                          <input
                            type="checkbox"
                            checked={!!offrableInfo?.offrable}
                            onChange={() => toggleOffrable(d.id, "listeVoyageHebergements", nom)}
                          />
                          Offrable (Liste de Voyage)
                          {offrableInfo?.offrable && (
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                              <input
                                type="number"
                                placeholder="Prix indicatif"
                                style={{ ...adminStyles.input, width: 100 }}
                                value={offrableInfo?.prixIndicatif ?? ""}
                                onChange={(e) => updatePrixOffrable(d.id, "listeVoyageHebergements", nom, Number(e.target.value))}
                              />
                              €
                            </span>
                          )}
                        </label>
                      )}
                    </div>
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
                  const offrableInfo = ref.listeVoyageActivites?.[nom];
                  return (
                    <div key={nom} style={{ marginBottom: 4 }}>
                      <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, cursor: "pointer" }}>
                        <input
                          type="checkbox"
                          checked={coche}
                          onChange={() => toggleItemChoisi(d.id, "activitesChoisies", nom, nomsActivites)}
                        />
                        {nom}
                      </label>
                      {coche && (
                        <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 11.5, color: "#a08d6c", marginLeft: 24, marginTop: 3, cursor: "pointer" }}>
                          <input
                            type="checkbox"
                            checked={!!offrableInfo?.offrable}
                            onChange={() => toggleOffrable(d.id, "listeVoyageActivites", nom)}
                          />
                          Offrable (Liste de Voyage)
                          {offrableInfo?.offrable && (
                            <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                              <input
                                type="number"
                                placeholder="Prix indicatif"
                                style={{ ...adminStyles.input, width: 100 }}
                                value={offrableInfo?.prixIndicatif ?? ""}
                                onChange={(e) => updatePrixOffrable(d.id, "listeVoyageActivites", nom, Number(e.target.value))}
                              />
                              €
                            </span>
                          )}
                        </label>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}
      </div>
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
              <div style={adminStyles.logo}>MamZelles en Vadrouille</div>
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
                  <input style={adminStyles.input} placeholder="ex : julie-thomas-maldives" value={carnet.slug} disabled={!isNew} onChange={(e) => update("slug", normaliserSlugEnDirect(e.target.value))} onBlur={(e) => update("slug", normaliserSlug(e.target.value))} />
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

                {carnet.hero.photo && (
                  <div style={adminStyles.field}>
                    <label style={adminStyles.label}>Cadrage desktop de la photo hero (haut / bas)</label>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12.5, color: "#888", marginTop: -6, marginBottom: 12 }}>
                      Sur ordinateur, la photo occupe toute la largeur de l&apos;écran : ce réglage permet de remonter ou descendre le cadrage vertical (utile si un visage ou un élément important est coupé).
                    </p>
                    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: 280,
                          height: 160,
                          borderRadius: 8,
                          flexShrink: 0,
                          backgroundImage: `url('${carnet.hero.photo}')`,
                          backgroundSize: "cover",
                          backgroundPosition: `center ${carnet.hero.photoPosition ?? 50}%`,
                          border: "1px solid #e8e0d6",
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <label style={{ ...adminStyles.label, fontSize: 10.5 }}>Position verticale ({carnet.hero.photoPosition ?? 50}%)</label>
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={carnet.hero.photoPosition ?? 50}
                          onChange={(e) => updateNested("hero", "photoPosition", Number(e.target.value))}
                          style={{ width: "100%" }}
                        />
                        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 11, color: "#aaa", marginTop: 4 }}>0 = cadré en haut · 100 = cadré en bas</p>
                      </div>
                    </div>
                  </div>
                )}

                {carnet.hero.photo && (
                  <div style={adminStyles.field}>
                    <label style={adminStyles.label}>Cadrage mobile de la photo hero</label>
                    <p style={{ fontFamily: "Inter, sans-serif", fontSize: 12.5, color: "#888", marginTop: -6, marginBottom: 12 }}>
                      Sur ordinateur, la photo reste toujours centrée. Ce réglage n&apos;affecte que l&apos;affichage sur téléphone (écrans étroits) — l’aperçu ci-dessous simule un écran de téléphone.
                    </p>
                    <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
                      <div
                        style={{
                          width: 160,
                          height: 280,
                          borderRadius: 8,
                          flexShrink: 0,
                          backgroundImage: `url('${carnet.hero.photo}')`,
                          backgroundSize: "cover",
                          backgroundPosition: `${carnet.hero.photoPositionXMobile ?? 50}% center`,
                          border: "1px solid #e8e0d6",
                        }}
                      />
                      <div style={{ flex: 1 }}>
                        <label style={{ ...adminStyles.label, fontSize: 10.5 }}>Position horizontale ({carnet.hero.photoPositionXMobile ?? 50}%)</label>
                        <input
                          type="range"
                          min={0}
                          max={100}
                          value={carnet.hero.photoPositionXMobile ?? 50}
                          onChange={(e) => updateNested("hero", "photoPositionXMobile", Number(e.target.value))}
                          style={{ width: "100%" }}
                        />
                      </div>
                    </div>
                  </div>
                )}

                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Message de bienvenue</label>
                  <textarea style={{ ...adminStyles.textarea, minHeight: 80 }} value={carnet.bienvenue.message} onChange={(e) => updateNested("bienvenue", "message", e.target.value)} />
                </div>
              </div>

              <div style={{ ...sectionWrap, marginBottom: 16 }}>
                <div style={sectionTitle}>Vue d&apos;ensemble</div>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 16 }}>
                  <div style={adminStyles.field}>
                    <label style={adminStyles.label}>Budget prévu (€)</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <input type="number" style={adminStyles.input} value={carnet.overview.budget} onChange={(e) => updateNested("overview", "budget", Number(e.target.value))} />
                      <button
                        type="button"
                        onClick={() => updateNested("overview", "budget", carnet.budget.reduce((somme, ligne) => somme + (ligne.montant || 0), 0))}
                        style={{ ...adminStyles.btnLinks, alignSelf: "flex-start" }}
                        title="Reprendre la somme des lignes de budget détaillées plus bas"
                      >
                        = Somme
                      </button>
                    </div>
                    {carnet.budget.length > 0 && (
                      <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11.5, color: "#888", marginTop: 4 }}>
                        Somme actuelle des lignes détaillées : {carnet.budget.reduce((s, l) => s + (l.montant || 0), 0)} €
                      </div>
                    )}
                  </div>
                  <div style={adminStyles.field}>
                    <label style={adminStyles.label}>Décalage horaire</label>
                    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                      <input style={adminStyles.input} value={carnet.overview.decalage} onChange={(e) => updateNested("overview", "decalage", e.target.value)} />
                      <button
                        type="button"
                        onClick={() => {
                          const decalage = calculerDecalageHoraire(carnet, destinationsDispo);
                          if (decalage) updateNested("overview", "decalage", decalage);
                          else alert("Impossible de calculer : il faut la ville de départ ET au moins une destination avec des coordonnées, ainsi qu'une date de début de voyage.");
                        }}
                        style={{ ...adminStyles.btnLinks, alignSelf: "flex-start" }}
                        title="Calculer à partir de la ville de départ, la première destination, et la date du voyage (heure d'été/hiver prise en compte)"
                      >
                        ⟳ Calculer
                      </button>
                    </div>
                  </div>
                  <div style={adminStyles.field}>
                    <label style={adminStyles.label}>Durée (jours)</label>
                    <input type="number" style={adminStyles.input} value={carnet.overview.dureeJours} onChange={(e) => updateNested("overview", "dureeJours", Number(e.target.value))} />
                  </div>
                </div>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Départ, escales & retour</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Renseigne la ville de départ/retour du client, et ajoute d&apos;éventuelles escales (transit avion, ville de passage, ou même une destination du carnet si tu veux qu&apos;elle apparaisse sur cette carte). Cette carte du trajet est indépendante des destinations cochées ci-dessous (onglets Hôtels/Activités/Restaurants) — pour qu&apos;un lieu apparaisse ici, ajoute-le explicitement en escale.
                </p>
                <label style={microLabel}>Ville de départ</label>
                <div style={{ marginBottom: 20 }}>
                  <LieuSearchField
                    placeholder="ex : Paris"
                    lat={carnet.villeDepart?.lat}
                    lng={carnet.villeDepart?.lng}
                    nomAffiche={carnet.villeDepart?.nom}
                    onNomAffiche={(nom) => update("villeDepart", { ...carnet.villeDepart!, nom })}
                    onSelect={(lieu) => update("villeDepart", { ...lieu, nom: carnet.villeDepart?.nom || lieu.nom })}
                  />
                </div>

                <label style={microLabel}>Escales (facultatif)</label>
                {(carnet.escales ?? []).map((etape, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, marginBottom: 10, alignItems: "flex-start" }}>
                    <div style={{ flex: 1 }}>
                      <LieuSearchField
                        placeholder="ex : Dubaï (transit)"
                        lat={etape.lat}
                        lng={etape.lng}
                        nomAffiche={etape.nom}
                        onNomAffiche={(nom) => {
                          const copy = [...(carnet.escales ?? [])];
                          copy[i] = { ...copy[i], nom };
                          update("escales", copy);
                        }}
                        onSelect={(lieu) => {
                          const copy = [...(carnet.escales ?? [])];
                          copy[i] = { ...lieu, nom: copy[i]?.nom || lieu.nom };
                          update("escales", copy);
                        }}
                      />
                    </div>
                    <button
                      onClick={() => update("escales", (carnet.escales ?? []).filter((_, idx) => idx !== i))}
                      style={adminStyles.btnDelete}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => update("escales", [...(carnet.escales ?? []), { nom: "", lat: 0, lng: 0 }])}
                  style={{ ...smallLink, marginBottom: 20, display: "inline-block" }}
                >
                  + Ajouter une escale
                </button>

                <label style={microLabel}>Ville de retour</label>
                <div>
                  <LieuSearchField
                    placeholder="ex : Paris"
                    lat={carnet.villeRetour?.lat}
                    lng={carnet.villeRetour?.lng}
                    nomAffiche={carnet.villeRetour?.nom}
                    onNomAffiche={(nom) => update("villeRetour", { ...carnet.villeRetour!, nom })}
                    onSelect={(lieu) => update("villeRetour", { ...lieu, nom: carnet.villeRetour?.nom || lieu.nom })}
                  />
                </div>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Destinations incluses</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Sélectionne parmi tes fiches destination existantes.
                </p>

                {carnet.destinations.length > 0 && (
                  <div style={{ marginBottom: 20 }}>
                    <label style={microLabel}>Ordre dans le carnet (glisse pour réordonner)</label>
                    {carnet.destinations.map((ref, i) => {
                      const d = destinationsDispo.find((x) => x.id === ref.destinationId);
                      return (
                        <div
                          key={ref.destinationId}
                          onDragOver={(e) => e.preventDefault()}
                          onDrop={() => deposerDestination(i)}
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: 8,
                            padding: "8px 10px",
                            marginBottom: 6,
                            border: "1px solid #f0ebe4",
                            borderRadius: 4,
                            opacity: dragIndexDest === i ? 0.4 : 1,
                            background: dragIndexDest !== null && dragIndexDest !== i ? "#faf7f2" : "#fff",
                            transition: "opacity .15s, background .15s",
                          }}
                        >
                          <span
                            draggable
                            onDragStart={() => setDragIndexDest(i)}
                            onDragEnd={() => setDragIndexDest(null)}
                            style={{ cursor: "grab", color: "#c8c2b6", fontSize: 16, userSelect: "none", lineHeight: 1 }}
                            title="Glisser pour réordonner"
                          >
                            ⠿
                          </span>
                          <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}>
                            {i + 1}. {d?.nom ?? ref.destinationId}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                )}

                {destinationsDispo.length === 0 && (
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888" }}>Aucune fiche destination pour l&apos;instant.</p>
                )}
                {(() => {
                  const trie = [...destinationsDispo].sort((a, b) => {
                    const ca = a.continent?.trim() || "Non classé";
                    const cb = b.continent?.trim() || "Non classé";
                    if (ca !== cb) return ca === "Non classé" ? 1 : cb === "Non classé" ? -1 : ca.localeCompare(cb);
                    const pa = a.pays?.trim() || "Non classé";
                    const pb = b.pays?.trim() || "Non classé";
                    if (pa !== pb) return pa === "Non classé" ? 1 : pb === "Non classé" ? -1 : pa.localeCompare(pb);
                    return a.nom.localeCompare(b.nom);
                  });
                  let continentPrecedent = "";
                  let paysPrecedent = "";
                  return trie.map((d) => {
                    const continent = d.continent?.trim() || "Non classé";
                    const pays = d.pays?.trim() || "Non classé";
                    const afficherContinent = continent !== continentPrecedent;
                    const afficherPays = afficherContinent || pays !== paysPrecedent;
                    continentPrecedent = continent;
                    paysPrecedent = pays;

                    const entete = (afficherContinent || afficherPays) && (
                      <div key={`entete-${continent}-${pays}`}>
                        {afficherContinent && (
                          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 700, fontStyle: "italic", color: "#1a1512", marginTop: 20, marginBottom: 6 }}>
                            {continent}
                          </div>
                        )}
                        {afficherPays && (
                          <div style={{ fontFamily: "Inter, sans-serif", fontSize: 11, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "#a8734c", marginTop: 18, marginBottom: 6 }}>
                            {pays}
                          </div>
                        )}
                      </div>
                    );
                    return (
                      <div key={d.id}>
                        {entete}
                        {ligneDestination(d)}
                      </div>
                    );
                  });
                })()}
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Conseils MamZelles</div>
                {carnet.conseils.map((c, i) => (
                  <div
                    key={i}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => deposerConseil(i)}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 10,
                      alignItems: "center",
                      opacity: dragIndexConseil === i ? 0.4 : 1,
                      background: dragIndexConseil !== null && dragIndexConseil !== i ? "#faf7f2" : "transparent",
                      borderRadius: 4,
                      transition: "opacity .15s, background .15s",
                    }}
                  >
                    <span
                      draggable
                      onDragStart={() => setDragIndexConseil(i)}
                      onDragEnd={() => setDragIndexConseil(null)}
                      style={{ cursor: "grab", color: "#c8c2b6", fontSize: 16, userSelect: "none", lineHeight: 1, flexShrink: 0 }}
                      title="Glisser pour réordonner"
                    >
                      ⠿
                    </span>
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
                      <option value="bon-a-savoir">Bon à savoir</option>
                    </select>
                    <input
                      style={{ ...adminStyles.input, flex: 1 }}
                      value={c.texte}
                      onChange={(e) => {
                        const copy = [...carnet.conseils];
                        copy[i] = { ...copy[i], texte: e.target.value };
                        update("conseils", copy);
                      }}
                    />
                    <button
                      onClick={() => update("conseils", carnet.conseils.filter((_, idx) => idx !== i))}
                      style={adminStyles.btnDelete}
                      title="Supprimer ce conseil"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button onClick={ajouterConseil} style={smallLink}>+ Ajouter un conseil</button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Budget</div>
                {carnet.budget.map((b, i) => (
                  <div
                    key={i}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => deposerBudget(i)}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 10,
                      alignItems: "center",
                      opacity: dragIndexBudget === i ? 0.4 : 1,
                      background: dragIndexBudget !== null && dragIndexBudget !== i ? "#faf7f2" : "transparent",
                      borderRadius: 4,
                      transition: "opacity .15s, background .15s",
                    }}
                  >
                    <span
                      draggable
                      onDragStart={() => setDragIndexBudget(i)}
                      onDragEnd={() => setDragIndexBudget(null)}
                      style={{ cursor: "grab", color: "#c8c2b6", fontSize: 16, userSelect: "none", lineHeight: 1, flexShrink: 0 }}
                      title="Glisser pour réordonner"
                    >
                      ⠿
                    </span>
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
                    <button
                      onClick={() => update("budget", carnet.budget.filter((_, idx) => idx !== i))}
                      style={adminStyles.btnDelete}
                      title="Supprimer cette ligne"
                    >
                      ✕
                    </button>
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
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      marginBottom: 10,
                      paddingBottom: i < carnet.reservations.length - 1 ? 10 : 0,
                      borderBottom: i < carnet.reservations.length - 1 ? "1px solid #f0ebe3" : "none",
                    }}
                  >
                    <div style={{ display: "flex", gap: 8 }}>
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
                    <label style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12.5, fontFamily: "Inter, sans-serif", color: "#666", cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        checked={!!item.offrable}
                        onChange={(e) => {
                          const copy = [...carnet.reservations];
                          copy[i] = { ...copy[i], offrable: e.target.checked };
                          update("reservations", copy);
                        }}
                      />
                      Offrable (Liste de Voyage)
                      {item.offrable && (
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 4, marginLeft: 4 }}>
                          <input
                            type="number"
                            placeholder="Prix indicatif"
                            style={{ ...adminStyles.input, width: 110 }}
                            value={item.prixIndicatif ?? ""}
                            onChange={(e) => {
                              const copy = [...carnet.reservations];
                              copy[i] = { ...copy[i], prixIndicatif: Number(e.target.value) };
                              update("reservations", copy);
                            }}
                          />
                          €
                        </span>
                      )}
                    </label>
                  </div>
                ))}
                <button onClick={() => ajouterCheckItem("reservations")} style={smallLink}>+ Ajouter</button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Liste de Voyage</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Uniquement pour les voyages de noces. Le lien de cagnotte (OnParticipe ou équivalent) que les invités utiliseront pour participer, quel que soit l&apos;élément qu&apos;ils choisissent.
                </p>
                <div style={adminStyles.field}>
                  <label style={adminStyles.label}>Lien de la cagnotte</label>
                  <input
                    style={adminStyles.input}
                    placeholder="https://www.onparticipe.fr/..."
                    value={carnet.onParticipeUrl ?? ""}
                    onChange={(e) => update("onParticipeUrl", e.target.value)}
                  />
                </div>
                {carnet.onParticipeUrl && (
                  <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                    <a
                      href={`/voyage/${carnet.slug}/liste-de-voyage`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#c8956c", fontWeight: 600 }}
                    >
                      Voir la Liste de Voyage →
                    </a>
                    <button
                      onClick={reinitialiserParticipations}
                      disabled={reinitialisation}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: "#b0554a",
                        background: "none",
                        border: "1px solid #e3c4bd",
                        borderRadius: 4,
                        padding: "6px 12px",
                        cursor: "pointer",
                      }}
                    >
                      {reinitialisation ? "..." : "Réinitialiser les participations (test)"}
                    </button>
                  </div>
                )}
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Indispensables</div>
                {([
                  ["passeport", "Passeport"],
                  ["visa", "Visa"],
                  ["vaccins", "Vaccins"],
                  ["monnaie", "Monnaie"],
                  ["assurance", "Assurance"],
                  ["telephone", "Téléphone / Internet"],
                ] as const).map(([champ, label]) => (
                  <div style={adminStyles.field} key={champ}>
                    <label style={adminStyles.label}>{label}</label>
                    <div style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                      <textarea
                        style={{ ...adminStyles.input, flex: 1, minHeight: 60, resize: "vertical", fontFamily: "inherit" }}
                        value={carnet.indispensables[champ] ?? ""}
                        onChange={(e) => updateNested("indispensables", champ, e.target.value)}
                      />
                      {carnet.indispensables[champ] && (
                        <button
                          onClick={() => updateNested("indispensables", champ, "")}
                          style={adminStyles.btnDelete}
                          title="Vider ce champ — il disparaît alors de l'affichage public"
                        >
                          ✕
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Checklist voyage</div>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: 13, color: "#888", marginTop: -8, marginBottom: 16 }}>
                  Les démarches à faire avant le départ (papiers, banque, maison...), à ne pas confondre avec la valise.
                </p>
                {(carnet.checklistVoyage ?? []).map((item, i) => (
                  <div
                    key={i}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => deposerVoyage(i)}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 10,
                      alignItems: "center",
                      opacity: dragIndexVoyage === i ? 0.4 : 1,
                      background: dragIndexVoyage !== null && dragIndexVoyage !== i ? "#faf7f2" : "transparent",
                      borderRadius: 4,
                      transition: "opacity .15s, background .15s",
                    }}
                  >
                    <span
                      draggable
                      onDragStart={() => setDragIndexVoyage(i)}
                      onDragEnd={() => setDragIndexVoyage(null)}
                      style={{ cursor: "grab", color: "#c8c2b6", fontSize: 16, userSelect: "none", lineHeight: 1, flexShrink: 0 }}
                      title="Glisser pour réordonner"
                    >
                      ⠿
                    </span>
                    <input
                      style={{ ...adminStyles.input, flex: 1 }}
                      value={item.label}
                      onChange={(e) => {
                        const copy = [...(carnet.checklistVoyage ?? [])];
                        copy[i] = { ...copy[i], label: e.target.value };
                        update("checklistVoyage", copy);
                      }}
                    />
                    <button
                      onClick={() => update("checklistVoyage", (carnet.checklistVoyage ?? []).filter((_, idx) => idx !== i))}
                      style={adminStyles.btnDelete}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button onClick={() => ajouterCheckItem("checklistVoyage")} style={smallLink}>+ Ajouter</button>
              </div>

              <div style={sectionWrap}>
                <div style={sectionTitle}>Checklist valise</div>
                {carnet.checklistValise.map((item, i) => (
                  <div
                    key={i}
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={() => deposerValise(i)}
                    style={{
                      display: "flex",
                      gap: 8,
                      marginBottom: 10,
                      alignItems: "center",
                      opacity: dragIndexValise === i ? 0.4 : 1,
                      background: dragIndexValise !== null && dragIndexValise !== i ? "#faf7f2" : "transparent",
                      borderRadius: 4,
                      transition: "opacity .15s, background .15s",
                    }}
                  >
                    <span
                      draggable
                      onDragStart={() => setDragIndexValise(i)}
                      onDragEnd={() => setDragIndexValise(null)}
                      style={{ cursor: "grab", color: "#c8c2b6", fontSize: 16, userSelect: "none", lineHeight: 1, flexShrink: 0 }}
                      title="Glisser pour réordonner"
                    >
                      ⠿
                    </span>
                    <input
                      style={{ ...adminStyles.input, flex: 1 }}
                      value={item.label}
                      onChange={(e) => {
                        const copy = [...carnet.checklistValise];
                        copy[i] = { ...copy[i], label: e.target.value };
                        update("checklistValise", copy);
                      }}
                    />
                    <button
                      onClick={() => update("checklistValise", carnet.checklistValise.filter((_, idx) => idx !== i))}
                      style={adminStyles.btnDelete}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button onClick={() => ajouterCheckItem("checklistValise")} style={smallLink}>+ Ajouter</button>
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
