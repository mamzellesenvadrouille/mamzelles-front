// scripts/nettoyer-libelles-reservations.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/scripts/nettoyer-libelles-reservations.ts
//
// Retire "réservé/réservée/réservé(s)" en fin de libellé des réservations
// existantes (le badge "À réserver / Réservé ✓" suffit maintenant, plus
// besoin que ce soit répété dans le texte).
//
// Usage : npx tsx --env-file=.env.local scripts/nettoyer-libelles-reservations.ts

import { getCarnet, saveCarnet } from "../lib/carnets";

async function main() {
  const slug = "julie-thomas-maldives";
  const carnet = await getCarnet(slug);

  if (!carnet) {
    console.log(`⚠️ Carnet '${slug}' introuvable.`);
    return;
  }

  const nettoyer = (label: string) =>
    label
      .replace(/\s*réservé\(s\)\s*$/i, "")
      .replace(/\s*réservée\s*$/i, "")
      .replace(/\s*réservé\s*$/i, "")
      .trim();

  const reservationsNettoyees = carnet.reservations.map((r) => ({
    ...r,
    label: nettoyer(r.label),
  }));

  console.log("Avant → Après :");
  carnet.reservations.forEach((r, i) => {
    console.log(`  "${r.label}" → "${reservationsNettoyees[i].label}"`);
  });

  await saveCarnet({ ...carnet, reservations: reservationsNettoyees });

  console.log("✅ Libellés nettoyés pour le carnet", slug);
}

main().catch((err) => {
  console.error("❌ Erreur :", err);
  process.exit(1);
});
