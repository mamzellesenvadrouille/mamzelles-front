// lib/carnets.ts
// Système de stockage des Carnets MamZelles — carnets + destinations réutilisables
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/lib/carnets.ts

import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv(); // utilise les mêmes variables d'env que tes devis

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface DeroulePoint {
  heure: string; // ex: "23h30" ou "Jour 4"
  titre: string;
  detail: string;
}

export interface Restaurant {
  nom: string;
  photo: string;
  cuisine: string; // ex: "Fruits de mer"
  prix: "€" | "€€" | "€€€";
  lat?: number;
  lng?: number;
}

export interface Activite {
  nom: string;
  photo: string;
  description: string;
  lat?: number;
  lng?: number;
}

export interface Hebergement {
  nom: string;
  photo: string;
  description: string;
  lat?: number;
  lng?: number;
}

export interface Destination {
  id: string; // slug normalisé, ex: "baa-atoll"
  nom: string;
  photo: string;
  deroule: DeroulePoint[];
  hebergements?: Hebergement[];
  restaurants: Restaurant[]; // objectif 5
  activites: Activite[]; // objectif 5
  seDeplacer: string[]; // liste de conseils pratiques
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
  type: "conseil" | "coup-de-coeur" | "a-eviter";
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
  parcours: string[]; // ex: ["Paris", "Malé", "Baa Atoll", "Paris"]
  parcoursCoords?: EtapeParcours[]; // mêmes étapes, mais avec coordonnées GPS pour la carte du trajet
  destinations: CarnetDestinationRef[];
  conseils: ConseilMamZelles[];
  budget: BudgetLigne[];
  reservations: ChecklistItem[];
  checklistValise: ChecklistItem[];
  checklistVoyage?: ChecklistItem[];
  documents?: DocumentVoyage[];
  indispensables: { visa: string; passeport: string; vaccins: string; assurance: string; monnaie: string };
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

export function normaliserSlug(nom: string): string {
  return nom
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // retire les accents
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

// ─────────────────────────────────────────────
// CARNETS — clé: carnet:{slug}
// ─────────────────────────────────────────────

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
