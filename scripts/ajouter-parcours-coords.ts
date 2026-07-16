// scripts/ajouter-parcours-coords.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/scripts/ajouter-parcours-coords.ts
//
// Ajoute les coordonnées GPS du parcours (Paris → Malé → Baa Atoll → Paris)
// au carnet de test, pour afficher la carte du trajet.
//
// Usage : npx tsx --env-file=.env.local scripts/ajouter-parcours-coords.ts

import { getCarnet, saveCarnet } from "../lib/carnets";

async function main() {
  const slug = "julie-thomas-maldives";
  const carnet = await getCarnet(slug);

  if (!carnet) {
    console.log(`⚠️ Carnet '${slug}' introuvable.`);
    return;
  }

  await saveCarnet({
    ...carnet,
    parcoursCoords: [
      { nom: "Paris", lat: 48.8566, lng: 2.3522 },
      { nom: "Malé", lat: 4.1755, lng: 73.5093 },
      { nom: "Baa Atoll", lat: 5.3320, lng: 73.0708 },
      { nom: "Paris", lat: 48.8566, lng: 2.3522 },
    ],
  });

  console.log("✅ Coordonnées du parcours ajoutées au carnet", slug);
}

main().catch((err) => {
  console.error("❌ Erreur :", err);
  process.exit(1);
});
