// scripts/ajouter-coordonnees-test.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/scripts/ajouter-coordonnees-test.ts
//
// Ajoute des coordonnées GPS réelles (Maldives) aux destinations Malé et
// Baa Atoll déjà créées, + un hébergement pour chacune, pour tester la
// carte interactive avec un vrai rendu.
//
// Usage : npx tsx --env-file=.env.local scripts/ajouter-coordonnees-test.ts

import { getDestination, saveDestination } from "../lib/carnets";

async function main() {
  // ─── Malé ───
  const male = await getDestination("male");
  if (male) {
    await saveDestination({
      id: "male",
      nom: male.nom,
      photo: male.photo,
      deroule: male.deroule,
      hebergements: [
        { nom: "Hulhule Island Hotel", photo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&q=80", description: "Idéal pour une nuit avant le transfert vers l'atoll", lat: 4.1919, lng: 73.5285 },
      ],
      restaurants: male.restaurants.map((r, i) => ({
        ...r,
        lat: 4.1755 + i * 0.002,
        lng: 73.5093 + i * 0.0015,
      })),
      activites: male.activites.map((a, i) => ({
        ...a,
        lat: 4.1748 - i * 0.0015,
        lng: 73.5089 + i * 0.002,
      })),
      seDeplacer: male.seDeplacer,
    });
    console.log("✅ Malé mise à jour avec des coordonnées");
  } else {
    console.log("⚠️ Destination 'male' introuvable, rien à mettre à jour");
  }

  // ─── Baa Atoll ───
  const baaAtoll = await getDestination("baa-atoll");
  if (baaAtoll) {
    await saveDestination({
      id: "baa-atoll",
      nom: baaAtoll.nom,
      photo: baaAtoll.photo,
      deroule: baaAtoll.deroule,
      hebergements: [
        { nom: "Soneva Fushi", photo: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=300&q=80", description: "Villa sur pilotis, notre coup de cœur pour ce voyage", lat: 5.3320, lng: 73.0708 },
      ],
      restaurants: baaAtoll.restaurants.map((r, i) => ({
        ...r,
        lat: 5.3320 + i * 0.003,
        lng: 73.0708 - i * 0.002,
      })),
      activites: baaAtoll.activites.map((a, i) => ({
        ...a,
        lat: 5.3280 - i * 0.002,
        lng: 73.0750 + i * 0.0025,
      })),
      seDeplacer: baaAtoll.seDeplacer,
    });
    console.log("✅ Baa Atoll mise à jour avec des coordonnées");
  } else {
    console.log("⚠️ Destination 'baa-atoll' introuvable, rien à mettre à jour");
  }
}

main().catch((err) => {
  console.error("❌ Erreur :", err);
  process.exit(1);
});
