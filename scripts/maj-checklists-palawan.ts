// scripts/maj-checklists-palawan.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/scripts/maj-checklists-palawan.ts
//
// Remplace les checklists valise/voyage du carnet Palawan par la base
// universelle récemment mise en place dans l'admin. Ne touche à rien
// d'autre (destinations, conseils, indispensables, etc.).
//
// Usage : npx tsx --env-file=.env.local scripts/maj-checklists-palawan.ts

import { getCarnet, saveCarnet } from "../lib/carnets";

async function main() {
  const slug = "camille-hugo-palawan";
  const carnet = await getCarnet(slug);

  if (!carnet) {
    console.log(`⚠️ Carnet '${slug}' introuvable.`);
    return;
  }

  await saveCarnet({
    ...carnet,
    checklistValise: [
      { label: "Passeport et visa si nécessaire", coche: false },
      { label: "Assurance voyage", coche: false },
      { label: "Billets / e-tickets", coche: false },
      { label: "Copies des documents importants", coche: false },
      { label: "Carte bancaire + espèces", coche: false },
      { label: "Moyen de paiement de secours (2e carte bancaire, par exemple)", coche: false },
      { label: "Adaptateur", coche: false },
      { label: "Batterie externe + chargeurs", coche: false },
      { label: "Trousse à pharmacie", coche: false },
      { label: "Nécessaire de toilette", coche: false },
      { label: "Lunettes de vue / lentilles et nécessaire associé", coche: false },
      { label: "Vêtements adaptés au climat et aux activités", coche: false },
      { label: "Vêtements de nuit", coche: false },
      { label: "Sous-vêtements et chaussettes", coche: false },
      { label: "Chaussures adaptées", coche: false },
      { label: "Une tenue plus habillée", coche: false },
      { label: "Gourde réutilisable", coche: false },
      { label: "Petit sac à dos / sac de journée", coche: false },
      { label: "Sac pour le linge sale", coche: false },
      { label: "Livre / liseuse", coche: false },
    ],
    checklistVoyage: [
      { label: "Vérifier la validité des documents d'identité selon les exigences du pays", coche: false },
      { label: "Vérifier les conditions d'entrée et de séjour (visa, autorisation électronique, durée de séjour...)", coche: false },
      { label: "Vérifier les recommandations sanitaires et vaccins éventuels selon la destination", coche: false },
      { label: "Souscrire une assurance voyage", coche: false },
      { label: "Faire des copies numériques des documents importants et les stocker dans un espace accessible hors ligne", coche: false },
      { label: "Prévenir la banque du voyage", coche: false },
      { label: "Vérifier les limites et frais bancaires à l'étranger", coche: false },
      { label: "Prévoir une solution pour les données mobiles à l'étranger", coche: false },
      { label: "Télécharger les cartes et documents utiles hors ligne", coche: false },
      { label: "Télécharger les applications utiles (compagnie aérienne, transport, traduction, etc.)", coche: false },
      { label: "Vérifier les conditions de conduite si location de voiture / road trip (permis international, assurance, etc.)", coche: false },
      { label: "Réserver ou confirmer les transferts / transports nécessaires", coche: false },
      { label: "Vérifier les réservations d'hébergement et d'activités", coche: false },
      { label: "Vérifier les horaires et modalités d'arrivée du premier hébergement", coche: false },
      { label: "Vérifier la météo et adapter les bagages", coche: false },
      { label: "Vérifier les règles concernant les médicaments si traitement personnel", coche: false },
      { label: "Enregistrer les numéros d'urgence locaux", coche: false },
      { label: "Prévenir un proche des dates et du lieu du voyage", coche: false },
      { label: "Faire le check-in en ligne", coche: false },
    ],
  });

  console.log(`✅ Checklists remplacées par la base universelle pour le carnet '${slug}'.`);
}

main();
