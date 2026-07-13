// scripts/seed-carnet-test.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/scripts/seed-carnet-test.ts
//
// Insère un carnet de test complet (Julie & Thomas, Maldives) dans Redis,
// avec ses deux destinations (Malé, Baa Atoll), pour qu'on puisse voir
// /voyage/julie-thomas-maldives fonctionner avec de vraies données.
//
// Usage : npx tsx scripts/seed-carnet-test.ts

import { saveDestination, saveCarnet } from "../lib/carnets";

async function main() {
  // 1. On crée les deux fiches destination (réutilisables plus tard sur d'autres carnets)

  await saveDestination({
    nom: "Malé",
    photo: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80",
    deroule: [
      { heure: "23h30", titre: "Arrivée à Malé", detail: "Accueil à l'aéroport" },
      { heure: "09h00", titre: "Tour du marché local", detail: "Avant le transfert vers l'atoll" },
    ],
    restaurants: [
      { nom: "Symphony Lounge", photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&q=80", cuisine: "Vue sur mer", prix: "€€€" },
      { nom: "Local Market Café", photo: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80", cuisine: "Cuisine locale", prix: "€" },
      { nom: "Sea House", photo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=300&q=80", cuisine: "Fruits de mer", prix: "€€" },
      { nom: "Salsa Royal", photo: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&q=80", cuisine: "Indien-maldivien", prix: "€€" },
      { nom: "Kurumba Rooftop", photo: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=300&q=80", cuisine: "Cocktails", prix: "€€" },
    ],
    activites: [
      { nom: "Marché local", photo: "https://images.unsplash.com/photo-1518509562904-e7ef99cddff8?w=300&q=80", description: "Fruits, épices, artisanat" },
      { nom: "Mosquée du Vendredi", photo: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&q=80", description: "Visite culturelle" },
      { nom: "Musée national", photo: "https://images.unsplash.com/photo-1544644181-1484b3fdfc32?w=300&q=80", description: "Histoire des Maldives" },
      { nom: "Promenade du front de mer", photo: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=300&q=80", description: "Coucher de soleil" },
      { nom: "Île artificielle Hulhumalé", photo: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80", description: "Plage locale" },
    ],
    seDeplacer: [
      "Aéroport ↔ centre-ville : ferry public toutes les 10 minutes, ou taxi-bateau privé.",
      "Le lendemain : votre hydravion part directement du ponton de l'hôtel, aucun trajet supplémentaire.",
    ],
  });

  await saveDestination({
    nom: "Baa Atoll",
    photo: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=900&q=80",
    deroule: [
      { heure: "Jour 2", titre: "Transfert en hydravion et check-in villa", detail: "Accueil avec jus de fruits frais" },
      { heure: "Jour 4", titre: "Excursion dauphins au lever du soleil", detail: "Notre coup de cœur" },
      { heure: "Jour 11", titre: "Dernier coucher de soleil sur le ponton", detail: "Avant le retour" },
    ],
    restaurants: [
      { nom: "Ocean Grill", photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&q=80", cuisine: "Fruits de mer", prix: "€€€" },
      { nom: "Sunset Bar", photo: "https://images.unsplash.com/photo-1540541338287-41700207dee6?w=300&q=80", cuisine: "Cocktails", prix: "€€" },
      { nom: "Reef Terrace", photo: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80", cuisine: "Cuisine locale", prix: "€€" },
      { nom: "Lagoon House", photo: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=300&q=80", cuisine: "Grillades", prix: "€€€" },
      { nom: "Coral Café", photo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=300&q=80", cuisine: "Brunch", prix: "€" },
    ],
    activites: [
      { nom: "Snorkeling au reef", photo: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=300&q=80", description: "Raies manta selon saison" },
      { nom: "Sortie dauphins", photo: "https://images.unsplash.com/photo-1483683804023-6ccdb62f86ef?w=300&q=80", description: "Lever du soleil" },
      { nom: "Île déserte", photo: "https://images.unsplash.com/photo-1544644181-1484b3fdfc32?w=300&q=80", description: "Pique-nique privatisé" },
      { nom: "Spa sur pilotis", photo: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=300&q=80", description: "Soin en duo" },
      { nom: "Plongée bouteille", photo: "https://images.unsplash.com/photo-1518509562904-e7ef99cddff8?w=300&q=80", description: "Baptême ou explo" },
    ],
    seDeplacer: [
      "Sur l'île : tout se fait à pied ou en golfette électrique, gratuite sur demande à la réception.",
      "Excursions : départs en bateau directement depuis le ponton principal, billets remis à votre arrivée.",
    ],
  });

  // 2. On crée le carnet, qui référence juste les deux destinations ci-dessus

  await saveCarnet({
    slug: "julie-thomas-maldives",
    client: { prenoms: "Julie & Thomas", typeVoyage: "Voyage de noces" },
    destination: "Maldives",
    dates: { debut: "2027-09-18", fin: "2027-09-30" },
    hero: { photo: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80" },
    bienvenue: {
      message:
        "Bonjour Julie & Thomas, nous sommes tellement heureuses de vous confier votre carnet. Pendant plusieurs semaines nous avons imaginé chaque étape de ce voyage. Maintenant, il ne vous reste plus qu'à vivre cette aventure.",
    },
    overview: { meteo: "28°", budget: 3200, decalage: "+6h", dureeJours: 12 },
    parcours: ["Paris", "Malé", "Baa Atoll", "Paris"],
    destinations: [
      { destinationId: "male", nuits: 1 },
      { destinationId: "baa-atoll", nuits: 10 },
    ],
    conseils: [
      { type: "conseil", texte: "Réservez le dîner sur le ponton dès votre arrivée — les créneaux au coucher du soleil partent en quelques jours." },
      { type: "coup-de-coeur", texte: "L'excursion dauphins au lever du soleil — moins connue que celle du soir, et l'eau y est plus calme." },
      { type: "a-eviter", texte: "Le restaurant japonais du complexe est surcoté pour le prix — préférez l'Ocean Grill." },
    ],
    budget: [
      { poste: "Vols", montant: 1200 },
      { poste: "Hébergement", montant: 1400 },
      { poste: "Restaurants", montant: 400 },
      { poste: "Activités", montant: 200 },
    ],
    reservations: [
      { label: "Vol réservé", coche: false },
      { label: "Villa réservée", coche: false },
      { label: "Excursion dauphins réservée", coche: false },
      { label: "Dîner sur le ponton réservé", coche: false },
    ],
    checklistValise: [
      { label: "Passeports valides 6 mois après le retour", coche: false },
      { label: "Maillots de bain et tenues légères", coche: false },
      { label: "Crème solaire indice élevé", coche: false },
      { label: "Masque et tuba (fournis mais confort perso)", coche: false },
      { label: "Assurance voyage souscrite", coche: false },
    ],
    indispensables: {
      visa: "Visa gratuit délivré à l'arrivée pour les ressortissants français, valable 30 jours.",
      passeport: "Valide au moins 6 mois après la date de retour.",
      vaccins: "Aucun obligatoire, mise à jour des vaccins universels recommandée.",
      assurance: "Fortement recommandée, souscription à faire avant le départ.",
      monnaie: "Rufiyaa maldivienne, mais l'euro et la carte bancaire sont acceptés partout dans les complexes hôteliers.",
    },
    createdAt: "",
    updatedAt: "",
  });

  console.log("✅ Carnet de test créé : /voyage/julie-thomas-maldives");
}

main().catch((err) => {
  console.error("❌ Erreur lors du seed :", err);
  process.exit(1);
});
