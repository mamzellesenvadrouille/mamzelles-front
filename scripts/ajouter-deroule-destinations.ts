// scripts/ajouter-deroule-destinations.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/scripts/ajouter-deroule-destinations.ts
//
// Reconstitue le déroulé type sur les fiches destination Malé et Baa Atoll,
// maintenant que le déroulé est de nouveau au niveau destination (pas carnet).
//
// Usage : npx tsx --env-file=.env.local scripts/ajouter-deroule-destinations.ts

import { getDestination, saveDestination } from "../lib/carnets";

async function main() {
  // ─── Malé ───
  const male = await getDestination("male");
  if (male) {
    await saveDestination({
      ...male,
      deroule: [
        { jour: "Jour 1", heure: "23h30", titre: "Arrivée à Malé", note: "Accueil à l'aéroport" },
        { jour: "Jour 2", heure: "09h00", titre: "Tour du marché local", note: "Avant le transfert vers l'atoll" },
        { jour: "Jour 2", heure: "14h00", titre: "Transfert vers l'atoll", note: "Hydravion depuis Malé" },
      ],
    });
    console.log("✅ Déroulé ajouté à Malé");
  } else {
    console.log("⚠️ Destination 'male' introuvable");
  }

  // ─── Baa Atoll ───
  const baaAtoll = await getDestination("baa-atoll");
  if (baaAtoll) {
    await saveDestination({
      ...baaAtoll,
      deroule: [
        { jour: "Jour 3", heure: "10h00", titre: "Snorkeling à Hanifaru Bay", note: "Réserve UNESCO, raies manta" },
        { jour: "Jour 6", heure: "19h00", titre: "Dîner sur le ponton", note: "Coucher de soleil, réservation recommandée" },
        { jour: "Jour 12", heure: "12h00", titre: "Retour vers Malé", note: "Puis vol retour vers Paris" },
      ],
    });
    console.log("✅ Déroulé ajouté à Baa Atoll");
  } else {
    console.log("⚠️ Destination 'baa-atoll' introuvable");
  }
}

main().catch((err) => {
  console.error("❌ Erreur :", err);
  process.exit(1);
});
