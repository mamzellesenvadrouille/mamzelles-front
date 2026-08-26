// lib/carnets.ts
// Système de stockage des Carnets MamZelles — carnets + destinations réutilisables
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/lib/carnets.ts

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv(); // utilise les mêmes variables d'env que tes devis

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface DeroulePoint {
  jour: string; // ex: "Jour 1" ou "Lundi 12 août"
  heure: string; // ex: "23h30"
  titre: string; // ex: "Arrivée à Malé"
  note: string; // ex: "Accueil à l'aéroport"
}

export interface Restaurant {
  nom: string;
  photo: string;
  photoPosition?: number; // cadrage vertical (0-100, défaut 50) — utilisé pour les photos paysage
  photoPositionX?: number; // cadrage horizontal (0-100, défaut 50) — utilisé pour les photos portrait
  photoOrientation?: "portrait" | "paysage"; // détectée automatiquement à l'upload
  photoPositionMobile?: number; // cadrage vertical spécifique au mobile (0-100, défaut = photoPosition)
  photoPositionXMobile?: number; // cadrage horizontal spécifique au mobile (0-100, défaut = photoPositionX)
  cuisine: string; // ex: "Fruits de mer"
  prix: "€" | "€€" | "€€€";
  commentaire?: string; // texte libre : recommandation, plat à essayer, ambiance...
  lat?: number;
  lng?: number;
}

export interface Activite {
  nom: string;
  photo: string;
  photoPosition?: number; // cadrage vertical (0-100, défaut 50) — utilisé pour les photos paysage
  photoPositionX?: number; // cadrage horizontal (0-100, défaut 50) — utilisé pour les photos portrait
  photoOrientation?: "portrait" | "paysage"; // détectée automatiquement à l'upload
  photoPositionMobile?: number; // cadrage vertical spécifique au mobile (0-100, défaut = photoPosition)
  photoPositionXMobile?: number; // cadrage horizontal spécifique au mobile (0-100, défaut = photoPositionX)
  description: string;
  lat?: number;
  lng?: number;
  lienReservation?: string; // lien d'affiliation (ex: GetYourGuide) pour réserver cette activité
  infosPratiques?: string; // texte libre : tarif, horaires, équipement nécessaire... affiché sur la carte
}

export interface Hebergement {
  nom: string;
  photo: string;
  photoPosition?: number; // cadrage vertical (0-100, défaut 50) — utilisé pour les photos paysage
  photoPositionX?: number; // cadrage horizontal (0-100, défaut 50) — utilisé pour les photos portrait
  photoOrientation?: "portrait" | "paysage"; // détectée automatiquement à l'upload
  photoPositionMobile?: number; // cadrage vertical spécifique au mobile (0-100, défaut = photoPosition)
  photoPositionXMobile?: number; // cadrage horizontal spécifique au mobile (0-100, défaut = photoPositionX)
  description: string;
  lat?: number;
  lng?: number;
}

export interface Destination {
  id: string; // slug normalisé, ex: "baa-atoll"
  nom: string;
  photo: string;
  photoPosition?: number; // position verticale de la photo (0 = haut, 50 = centre, 100 = bas), défaut 50 — utilisé pour les photos paysage
  photoPositionX?: number; // position horizontale (0-100, défaut 50) — utilisé pour les photos portrait
  photoOrientation?: "portrait" | "paysage"; // détectée automatiquement à l'upload
  photoPositionMobile?: number; // cadrage vertical spécifique au mobile (0-100, défaut = photoPosition)
  photoPositionXMobile?: number; // cadrage horizontal spécifique au mobile (0-100, défaut = photoPositionX)
  continent?: string; // ex: "Asie", pour ranger la bibliothèque de destinations
  pays?: string; // ex: "Maldives"
  lat?: number; // coordonnée GPS de la destination elle-même (météo + carte du parcours)
  lng?: number;
  resume?: string; // court résumé narratif de l'étape (2 lignes environ), affiché sous la photo dans le carnet client
  afficherConvertisseur?: boolean; // contrôle manuel : masque le convertisseur de devise même si une devise est détectée automatiquement (par défaut true)
  deroule: DeroulePoint[]; // propre à cette destination, réutilisé tel quel dans chaque carnet qui l'inclut
  hebergements?: Hebergement[];
  restaurants: Restaurant[]; // objectif 5
  activites: Activite[]; // objectif 5
  updatedAt: string;
}

export interface CarnetDestinationRef {
  destinationId: string;
  nuits: number;
  overrides?: Partial<Destination>; // si le carnet "duplique et adapte" au lieu de réutiliser tel quel
  // Sélection précise des éléments de la fiche destination à inclure dans CE carnet.
  // undefined = on inclut tout (comportement historique, rétrocompatible).
  // [] = on a explicitement choisi de n'en inclure aucun.
  hebergementsChoisis?: string[]; // noms des hébergements sélectionnés
  restaurantsChoisis?: string[]; // noms des restaurants sélectionnés
  activitesChoisies?: string[]; // noms des activités sélectionnées
}

// Une destination une fois résolue pour un carnet précis (avec son nombre de nuits pour CE voyage)
export type DestinationResolue = Destination & { nuits: number };

export interface ConseilMamZelles {
  type: "conseil" | "coup-de-coeur" | "a-eviter" | "bon-a-savoir";
  texte: string;
}

export interface BudgetLigne {
  poste: string;
  montant: number;
}

export interface ChecklistItem {
  label: string;
  coche: boolean;
  url?: string; // lien de réservation cliquable (pour "Vos réservations" surtout)
}

export interface ContactUrgence {
  label: string; // ex: "Ambulance locale", "Hôtel - réception", "Assurance voyage"
  valeur: string; // ex: numéro de téléphone ou email
}

export interface EtapeParcours {
  nom: string;
  lat: number;
  lng: number;
}

export interface DocumentVoyage {
  nom: string; // ex: "Billet d'avion aller-retour"
  url: string;
}

export interface Carnet {
  slug: string; // ex: "julie-thomas-maldives"
  client: {
    prenoms: string; // ex: "Julie & Thomas"
    typeVoyage: string; // ex: "Voyage de noces"
  };
  destination: string; // libellé général, ex: "Maldives"
  dates: { debut: string; fin: string };
  hero: { photo: string };
  bienvenue: { message: string };
  overview: { meteo: string; budget: number; decalage: string; dureeJours: number };
  meteoLat?: number; // coordonnées pour la météo en temps réel (Open-Meteo, sans clé API)
  meteoLng?: number;
  parcours: string[]; // ex: ["Paris", "Malé", "Baa Atoll", "Paris"]
  parcoursCoords?: EtapeParcours[]; // repli manuel si "villeDepart" n'est pas renseignée
  villeDepart?: EtapeParcours; // ville de départ du client
  villeRetour?: EtapeParcours; // ville de retour, si différente de la ville de départ (sinon on réutilise villeDepart)
  escales?: EtapeParcours[]; // étapes intermédiaires optionnelles (escale avion, ville de transit...), insérées entre le départ et la première destination
  destinations: CarnetDestinationRef[];
  conseils: ConseilMamZelles[];
  budget: BudgetLigne[];
  reservations: ChecklistItem[];
  checklistValise: ChecklistItem[];
  checklistVoyage?: ChecklistItem[];
  documents?: DocumentVoyage[];
  indispensables: { visa?: string; passeport?: string; vaccins?: string; assurance?: string; monnaie?: string; telephone?: string };
  contactsUrgence?: ContactUrgence[];
  // Gel automatique : une fois le voyage terminé, le contenu des destinations
  // est figé pour toujours, même si les fiches destination évoluent ensuite.
  destinationsSnapshot?: DestinationResolue[];
  figeLe?: string; // date à laquelle le gel a eu lieu, null/absent = pas encore figé
  createdAt: string;
  updatedAt: string;
}

// ─────────────────────────────────────────────
// HELPERS
// ─────────────────────────────────────────────

// Reformate n'importe quelle saisie d'heure libre ("14h", "14", "14:5", "9h5") en "14h00", "09h05"...
// pour que toutes les heures du déroulé soient alignées visuellement, peu importe comment le champ a été rempli.
export function normaliserHeure(texte: string): string {
  const t = texte.trim();
  if (!t) return "";
  const m = t.match(/(\d{1,2})\s*[h:]?\s*(\d{0,2})/i);
  if (!m) return t; // texte non reconnu, on le laisse tel quel plutôt que de le casser
  const heures = Math.min(parseInt(m[1], 10) || 0, 23);
  const minutes = Math.min(parseInt(m[2], 10) || 0, 59);
  return `${String(heures).padStart(2, "0")}h${String(minutes).padStart(2, "0")}`;
}

// Correspondance pays (français) → devise ISO. Volontairement limité aux devises
// couvertes par notre source de taux (Frankfurter/BCE, ~30 devises majeures) —
// pas de convertisseur affiché pour Maldives/Maroc/etc. faute de source fiable.
const DEVISE_PAR_PAYS: Record<string, string> = {
  "afrique du sud": "ZAR",
  "etats-unis": "USD", usa: "USD", "etats unis": "USD", canada: "CAD",
  mexique: "MXN", bresil: "BRL",
  japon: "JPY", chine: "CNY", "coree du sud": "KRW",
  inde: "INR", thailande: "THB", philippines: "PHP", indonesie: "IDR",
  bali: "IDR", malaisie: "MYR", singapour: "SGD",
  israel: "ILS", turquie: "TRY",
  "royaume-uni": "GBP", "royaume uni": "GBP", angleterre: "GBP",
  "grande-bretagne": "GBP", "grande bretagne": "GBP", ecosse: "GBP",
  "pays de galles": "GBP", suisse: "CHF", norvege: "NOK", suede: "SEK",
  danemark: "DKK", islande: "ISK", pologne: "PLN", "republique tcheque": "CZK",
  tchequie: "CZK", hongrie: "HUF", roumanie: "RON", bulgarie: "BGN",
  australie: "AUD", "nouvelle-zelande": "NZD", "nouvelle zelande": "NZD",
};

function normaliserPourRecherche(texte: string): string {
  return texte
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[-']/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function deviseDepuisPays(pays?: string): string | undefined {
  if (!pays) return undefined;
  return DEVISE_PAR_PAYS[normaliserPourRecherche(pays)];
}

// Taux de change EUR → devise, récupéré côté serveur (comme la météo) pour éviter
// tout souci de blocage réseau/CORS côté navigateur du client.
export async function getTauxDevise(devise: string): Promise<number | null> {
  try {
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?base=EUR&symbols=${devise.toUpperCase()}`,
      { next: { revalidate: 3600 } } // rafraîchi au maximum 1x/heure
    );
    if (!res.ok) return null;
    const data = await res.json();
    const taux = data?.rates?.[devise.toUpperCase()];
    return typeof taux === "number" ? taux : null;
  } catch {
    return null;
  }
}

// Version utilisée PENDANT la saisie (onChange) : ne retire jamais le tiret final,
// pour ne pas supprimer l'espace qu'on vient de taper avant le mot suivant.
export function normaliserSlugEnDirect(nom: string): string {
  return nom
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // retire les accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-/, "");
}

// Version finale (à la sauvegarde / onBlur) : nettoie aussi les tirets en bout de texte.
export function normaliserSlug(nom: string): string {
  return normaliserSlugEnDirect(nom).replace(/-$/, "");
}

// ─────────────────────────────────────────────
// SUIVI CLIENT — progression sur les réservations et checklists, partagée
// entre tous les appareils (contrairement au numéro de confirmation, qui
// reste privé au navigateur du client et n'est jamais envoyé ici).
// clé Redis : progress:{slug}
// ─────────────────────────────────────────────

export interface ProgressListe {
  coche: boolean[]; // état coché/réservé pour chaque item de base (même ordre que dans le carnet)
  custom: { label: string; coche: boolean }[]; // items ajoutés librement par le client
}

export interface CarnetProgress {
  reservations: ProgressListe;
  checklistValise: ProgressListe;
  checklistVoyage: ProgressListe;
  contactsCustom: { label: string; valeur: string }[]; // contacts d'urgence ajoutés par le client lui-même
  derouleCustom: (DeroulePoint & { destinationId: string })[]; // notes/mémento ajoutés par le client, rattachées à une destination précise
  budgetCustom: BudgetLigne[]; // lignes de budget ajoutées par le client lui-même (ex: ses propres restaurants estimés)
  lieuxAjoutes: { destinationId: string; categorie: "hebergements" | "restaurants" | "activites"; nom: string; lat: number; lng: number }[]; // hébergements/activités/restaurants ajoutés par le client lui-même, rattachés à une destination précise
  notesLibres: string; // zone de notes libres du client, privée (jamais vue côté admin)
}

function progressVide(): CarnetProgress {
  return {
    reservations: { coche: [], custom: [] },
    checklistValise: { coche: [], custom: [] },
    checklistVoyage: { coche: [], custom: [] },
    contactsCustom: [],
    derouleCustom: [],
    budgetCustom: [],
    lieuxAjoutes: [],
    notesLibres: "",
  };
}

export async function getCarnetProgress(slug: string): Promise<CarnetProgress> {
  const data = await redis.get<CarnetProgress>(`progress:${slug}`);
  if (!data) return progressVide();
  // rétrocompatibilité : anciennes progressions sauvegardées avant l'ajout de contactsCustom
  return { ...progressVide(), ...data };
}

export async function saveCarnetProgress(slug: string, progress: CarnetProgress): Promise<void> {
  // petites limites de sécurité pour éviter un abus (texte trop long, trop d'items ajoutés)
  const nettoyerListe = (l: ProgressListe): ProgressListe => ({
    coche: l.coche.slice(0, 200),
    custom: l.custom.slice(0, 100).map((c) => ({ label: String(c.label).slice(0, 200), coche: !!c.coche })),
  });
  const propre: CarnetProgress = {
    reservations: nettoyerListe(progress.reservations),
    checklistValise: nettoyerListe(progress.checklistValise),
    checklistVoyage: nettoyerListe(progress.checklistVoyage),
    contactsCustom: (progress.contactsCustom ?? []).slice(0, 50).map((c) => ({
      label: String(c.label).slice(0, 100),
      valeur: String(c.valeur).slice(0, 150),
    })),
    derouleCustom: (progress.derouleCustom ?? []).slice(0, 50).map((d) => ({
      destinationId: String(d.destinationId ?? "").slice(0, 100),
      jour: String(d.jour ?? "").slice(0, 50),
      heure: String(d.heure ?? "").slice(0, 20),
      titre: String(d.titre ?? "").slice(0, 150),
      note: String(d.note ?? "").slice(0, 300),
    })),
    budgetCustom: (progress.budgetCustom ?? []).slice(0, 30).map((b) => ({
      poste: String(b.poste ?? "").slice(0, 60),
      montant: Math.max(0, Math.min(1000000, Number(b.montant) || 0)),
    })),
    lieuxAjoutes: (progress.lieuxAjoutes ?? []).slice(0, 50).map((l) => ({
      destinationId: String(l.destinationId ?? "").slice(0, 100),
      categorie: (["hebergements", "restaurants", "activites"] as const).includes(l.categorie) ? l.categorie : "activites",
      nom: String(l.nom ?? "").slice(0, 150),
      lat: Math.max(-90, Math.min(90, Number(l.lat) || 0)),
      lng: Math.max(-180, Math.min(180, Number(l.lng) || 0)),
    })),
    notesLibres: String(progress.notesLibres ?? "").slice(0, 5000),
  };
  await redis.set(`progress:${slug}`, propre);
}

// ─────────────────────────────────────────────
// MÉTÉO EN TEMPS RÉEL — via Open-Meteo, gratuit, sans clé API
// ─────────────────────────────────────────────

export async function getMeteoActuelle(lat: number, lng: number): Promise<{ temperature: number; icone: string } | null> {
  try {
    const res = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,weather_code`,
      { next: { revalidate: 3600 } } // on rafraîchit au maximum une fois par heure
    );
    if (!res.ok) return null;
    const data = await res.json();
    const temperature = Math.round(data.current?.temperature_2m);
    const code = data.current?.weather_code;
    if (typeof temperature !== "number" || Number.isNaN(temperature)) return null;

    // Icône simple selon le code météo (norme WMO utilisée par Open-Meteo)
    let icone = "☀️";
    if (code >= 1 && code <= 3) icone = "🌤️";
    else if (code >= 45 && code <= 48) icone = "🌫️";
    else if (code >= 51 && code <= 67) icone = "🌧️";
    else if (code >= 71 && code <= 77) icone = "❄️";
    else if (code >= 80 && code <= 82) icone = "🌦️";
    else if (code >= 95) icone = "⛈️";

    return { temperature, icone };
  } catch {
    return null; // en cas d'échec, l'appelant retombe sur la valeur statique
  }
}

export async function getCarnet(slug: string): Promise<Carnet | null> {
  return await redis.get<Carnet>(`carnet:${slug}`);
}

export async function saveCarnet(carnet: Carnet): Promise<void> {
  const now = new Date().toISOString();
  const existing = await getCarnet(carnet.slug);
  const toSave: Carnet = {
    ...carnet,
    createdAt: existing?.createdAt ?? now,
    updatedAt: now,
  };
  await redis.set(`carnet:${carnet.slug}`, toSave);
  // on maintient un index pour lister tous les carnets dans l'admin
  await redis.sadd("carnets:index", carnet.slug);
}

export async function deleteCarnet(slug: string): Promise<void> {
  await redis.del(`carnet:${slug}`);
  await redis.srem("carnets:index", slug);
}

export async function listCarnets(): Promise<string[]> {
  return await redis.smembers("carnets:index");
}

// Résout un carnet avec ses destinations pleinement chargées.
//
// Comportement :
// - Voyage pas encore terminé → les destinations sont résolues "en direct"
//   depuis les fiches destination:{id}. Si tu corriges une fiche avant le
//   départ du client, le carnet se met à jour automatiquement.
// - Voyage terminé (date de fin dépassée) → le contenu est figé pour
//   toujours à la première consultation après la fin du voyage. Les
//   futures modifications des fiches destination n'affecteront plus ce
//   carnet : le client retrouve exactement ce qu'il a vécu.
export async function getCarnetComplet(slug: string) {
  const carnet = await getCarnet(slug);
  if (!carnet) return null;

  const voyageTermine = new Date(carnet.dates.fin) < new Date();

  // Déjà figé : on sert directement le snapshot, sans retoucher aux fiches destination
  if (voyageTermine && carnet.destinationsSnapshot) {
    return { ...carnet, destinationsCompletes: carnet.destinationsSnapshot };
  }

  // Sinon on résout en direct depuis les fiches destination
  const destinations = await Promise.all(
    carnet.destinations.map(async (ref): Promise<DestinationResolue | null> => {
      const base = await getDestination(ref.destinationId);
      if (!base) return null;
      const fusionne = { ...base, ...ref.overrides };
      return {
        ...fusionne,
        hebergements: ref.hebergementsChoisis
          ? (fusionne.hebergements ?? []).filter((h) => ref.hebergementsChoisis!.includes(h.nom))
          : fusionne.hebergements,
        restaurants: ref.restaurantsChoisis
          ? fusionne.restaurants.filter((r) => ref.restaurantsChoisis!.includes(r.nom))
          : fusionne.restaurants,
        activites: ref.activitesChoisies
          ? fusionne.activites.filter((a) => ref.activitesChoisies!.includes(a.nom))
          : fusionne.activites,
        nuits: ref.nuits,
      };
    })
  );
  const destinationsCompletes = destinations.filter((d): d is DestinationResolue => d !== null);

  // Voyage tout juste terminé et jamais figé : on fige maintenant, une bonne fois pour toutes
  if (voyageTermine && !carnet.destinationsSnapshot) {
    const figé: Carnet = {
      ...carnet,
      destinationsSnapshot: destinationsCompletes,
      figeLe: new Date().toISOString(),
    };
    await redis.set(`carnet:${slug}`, figé);
  }

  return { ...carnet, destinationsCompletes };
}

// ─────────────────────────────────────────────
// DESTINATIONS — clé: destination:{id}  (réutilisables entre carnets)
// ─────────────────────────────────────────────

export async function getDestination(id: string): Promise<Destination | null> {
  return await redis.get<Destination>(`destination:${id}`);
}

export async function saveDestination(dest: Omit<Destination, "id" | "updatedAt"> & { id?: string }): Promise<Destination> {
  const id = dest.id ?? normaliserSlug(dest.nom);
  const toSave: Destination = {
    ...dest,
    id,
    updatedAt: new Date().toISOString(),
  };
  await redis.set(`destination:${id}`, toSave);
  await redis.sadd("destinations:index", id);
  return toSave;
}

export async function deleteDestination(id: string): Promise<void> {
  await redis.del(`destination:${id}`);
  await redis.srem("destinations:index", id);
}

export async function listDestinations(): Promise<Destination[]> {
  const ids = await redis.smembers("destinations:index");
  if (ids.length === 0) return [];
  const destinations = await Promise.all(ids.map((id) => getDestination(id)));
  return destinations.filter((d): d is Destination => d !== null);
}
