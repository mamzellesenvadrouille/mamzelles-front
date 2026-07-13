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
    // Vrais restaurants existants à Malé
    const restosMale = [
      { nom: "The Sea House", cuisine: "Fruits de mer, vue sur l'océan", prix: "€€" as const, lat: 4.1898, lng: 73.5295, photo: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&q=80" },
      { nom: "Sala Thai Restaurant", cuisine: "Thaïlandais", prix: "€€" as const, lat: 4.1770, lng: 73.5108, photo: "https://images.unsplash.com/photo-1559847844-5315695dadae?w=400&q=80" },
      { nom: "Mr. Octopus", cuisine: "Fruits de mer, italien", prix: "€€" as const, lat: 4.1748, lng: 73.5091, photo: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&q=80" },
      { nom: "Seagull Café", cuisine: "Petit-déjeuner, desserts", prix: "€" as const, lat: 4.1735, lng: 73.5085, photo: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&q=80" },
      { nom: "Symphony Restaurant", cuisine: "Chinois, fruits de mer", prix: "€€€" as const, lat: 4.1741, lng: 73.5099, photo: "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=400&q=80" },
    ];
    // Vrais sites et activités existants à Malé
    const activitesMale = [
      { nom: "Marché aux poissons de Malé", description: "Marché traditionnel très animé, la vraie vie locale", lat: 4.1746, lng: 73.5088, photo: "https://images.unsplash.com/photo-1595475207225-428b62bda831?w=400&q=80" },
      { nom: "Grande Mosquée du Vendredi (Hukuru Miskiy)", description: "Mosquée en pierre de corail du 17e siècle", lat: 4.1752, lng: 73.5097, photo: "https://images.unsplash.com/photo-1564769662533-4f00a87b4056?w=400&q=80" },
      { nom: "Musée National des Maldives", description: "Collection d'objets royaux et historiques", lat: 4.1759, lng: 73.5104, photo: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=400&q=80" },
      { nom: "Sultan Park", description: "Ancien jardin royal, havre de verdure en pleine ville", lat: 4.1757, lng: 73.5102, photo: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=80" },
      { nom: "Monument du Tsunami", description: "Mémorial en hommage aux victimes de 2004", lat: 4.1720, lng: 73.5145, photo: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?w=400&q=80" },
    ];
    await saveDestination({
      id: "male",
      nom: male.nom,
      photo: male.photo,
      deroule: male.deroule,
      hebergements: [
        { nom: "Hulhule Island Hotel", photo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=300&q=80", description: "Idéal pour une nuit avant le transfert vers l'atoll", lat: 4.1919, lng: 73.5285 },
      ],
      restaurants: male.restaurants.map((r, i) => ({ ...r, ...restosMale[i] })),
      activites: male.activites.map((a, i) => ({ ...a, ...activitesMale[i] })),
      seDeplacer: male.seDeplacer,
    });
    console.log("✅ Malé mise à jour avec de vrais lieux et coordonnées");
  } else {
    console.log("⚠️ Destination 'male' introuvable, rien à mettre à jour");
  }

  // ─── Baa Atoll ───
  const baaAtoll = await getDestination("baa-atoll");
  if (baaAtoll) {
    // Vrais restaurants du resort Soneva Fushi (Kunfunadhoo island)
    const restosBaa = [
      { nom: "Fresh in the Garden", cuisine: "Végétarien, produits du potager", prix: "€€€" as const, lat: 5.3312, lng: 73.0722 },
      { nom: "Overwater", cuisine: "Fruits de mer sur pilotis", prix: "€€€" as const, lat: 5.3327, lng: 73.0715 },
      { nom: "So Starlight", cuisine: "Cinéma flottant et dîner", prix: "€€€" as const, lat: 5.3305, lng: 73.0730 },
      { nom: "Baa Atoll Restaurant", cuisine: "International, buffet", prix: "€€" as const, lat: 5.3318, lng: 73.0708 },
      { nom: "Roots", cuisine: "Bio, sans gluten", prix: "€€" as const, lat: 5.3298, lng: 73.0718 },
    ];
    // Vraies attractions et sites de Baa Atoll (réserve de biosphère UNESCO)
    const activitesBaa = [
      { nom: "Hanifaru Bay", description: "Snorkeling avec raies manta et requins-baleines, réserve UNESCO", lat: 5.2830, lng: 73.0330 },
      { nom: "Dharavandhoo", description: "Île locale, point de départ pour Hanifaru Bay", lat: 5.1667, lng: 73.0500 },
      { nom: "Thulhaadhoo", description: "Île connue pour son artisanat traditionnel en laque", lat: 5.2333, lng: 72.9833 },
      { nom: "Eydhafushi", description: "Capitale administrative de l'atoll de Baa", lat: 5.1050, lng: 73.0700 },
      { nom: "Récif de Kihaadhuffaru", description: "Site de plongée réputé pour ses tombants coralliens", lat: 5.3500, lng: 73.0500 },
    ];
    await saveDestination({
      id: "baa-atoll",
      nom: baaAtoll.nom,
      photo: baaAtoll.photo,
      deroule: baaAtoll.deroule,
      hebergements: [
        { nom: "Soneva Fushi", photo: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=300&q=80", description: "Villa sur pilotis, notre coup de cœur pour ce voyage", lat: 5.3320, lng: 73.0708 },
      ],
      restaurants: baaAtoll.restaurants.map((r, i) => ({ ...r, ...restosBaa[i] })),
      activites: baaAtoll.activites.map((a, i) => ({ ...a, ...activitesBaa[i] })),
      seDeplacer: baaAtoll.seDeplacer,
    });
    console.log("✅ Baa Atoll mise à jour avec de vrais lieux et coordonnées");
  } else {
    console.log("⚠️ Destination 'baa-atoll' introuvable, rien à mettre à jour");
  }
}

main().catch((err) => {
  console.error("❌ Erreur :", err);
  process.exit(1);
});
