// scripts/ajouter-deroule-carnet.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/scripts/ajouter-deroule-carnet.ts
//
// Reconstitue le déroulé du séjour au niveau du carnet (Malé puis Baa Atoll),
// maintenant que le déroulé n'est plus stocké sur les fiches destination.
//
// Usage : npx tsx --env-file=.env.local scripts/ajouter-deroule-carnet.ts

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
    deroule: [
      { jour: "Jour 1", heure: "23h30", action: "Arrivée à Malé", note: "Accueil à l'aéroport" },
      { jour: "Jour 2", heure: "09h00", action: "Tour du marché local", note: "Avant le transfert vers l'atoll" },
      { jour: "Jour 2", heure: "14h00", action: "Transfert vers Baa Atoll", note: "Hydravion depuis Malé" },
      { jour: "Jour 3", heure: "10h00", action: "Snorkeling à Hanifaru Bay", note: "Réserve UNESCO, raies manta" },
      { jour: "Jour 12", heure: "12h00", action: "Retour vers Malé", note: "Puis vol retour vers Paris" },
    ],
  });

  console.log("✅ Déroulé ajouté au carnet", slug);
}

main().catch((err) => {
  console.error("❌ Erreur :", err);
  process.exit(1);
});
