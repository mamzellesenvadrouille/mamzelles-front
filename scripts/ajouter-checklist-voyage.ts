// scripts/ajouter-checklist-voyage.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/scripts/ajouter-checklist-voyage.ts
//
// Ajoute la checklist voyage de base au carnet de test (créé avant que
// cette fonctionnalité existe, donc jamais préremplie automatiquement).
//
// Usage : npx tsx --env-file=.env.local scripts/ajouter-checklist-voyage.ts

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
    checklistVoyage: [
      { label: "Vérifier la validité du passeport (6 mois après retour)", coche: false },
      { label: "Faire la demande de visa si nécessaire", coche: false },
      { label: "Vérifier les vaccins recommandés", coche: false },
      { label: "Souscrire une assurance voyage", coche: false },
      { label: "Prévenir la banque du voyage (paiements à l'étranger)", coche: false },
      { label: "Activer un forfait data international ou une carte SIM locale", coche: false },
      { label: "Télécharger les cartes hors-ligne (Google Maps, Maps.me)", coche: false },
      { label: "Faire des photocopies / photos des papiers importants", coche: false },
      { label: "Vérifier la météo de la destination avant de faire la valise", coche: false },
      { label: "Réserver le transport aéroport (aller et retour)", coche: false },
      { label: "Faire garder les animaux / arroser les plantes", coche: false },
      { label: "Suspendre ou rediriger le courrier", coche: false },
      { label: "Vérifier les prises électriques du pays (adaptateur nécessaire ?)", coche: false },
      { label: "Enregistrer les numéros d'urgence sur place", coche: false },
      { label: "Prévenir un proche des dates et du lieu du voyage", coche: false },
      { label: "Faire le check-in en ligne du vol", coche: false },
    ],
  });

  console.log("✅ Checklist voyage ajoutée au carnet", slug);
}

main().catch((err) => {
  console.error("❌ Erreur :", err);
  process.exit(1);
});
