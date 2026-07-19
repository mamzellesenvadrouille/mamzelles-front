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
      { nom: "The Sea House", cuisine: "Fruits de mer, vue sur l'océan", prix: "€€" as const, lat: 4.1898, lng: 73.5295, photo: "https://images.unsplash.com/photo-1650435489945-96b2b19b943b?w=400&q=80" },
      { nom: "Sala Thai Restaurant", cuisine: "Thaïlandais", prix: "€€" as const, lat: 4.1770, lng: 73.5108, photo: "https://images.unsplash.com/photo-1675150277436-9c7348972c11?w=400&q=80" },
      { nom: "Mr. Octopus", cuisine: "Fruits de mer, italien", prix: "€€" as const, lat: 4.1748, lng: 73.5091, photo: "https://images.unsplash.com/photo-1768578987473-a194c94225ca?w=400&q=80" },
      { nom: "Seagull Café", cuisine: "Petit-déjeuner, desserts", prix: "€" as const, lat: 4.1735, lng: 73.5085, photo: "https://images.unsplash.com/photo-1613187869034-fa8e42b2ab1c?w=400&q=80" },
      { nom: "Symphony Restaurant", cuisine: "Chinois, fruits de mer", prix: "€€€" as const, lat: 4.1741, lng: 73.5099, photo: "https://images.unsplash.com/photo-1583475020831-fb4fbb497315?w=400&q=80" },
    ];
    // Vrais sites et activités existants à Malé
    const activitesMale = [
      { nom: "Marché aux poissons de Malé", description: "Marché traditionnel très animé, la vraie vie locale", lat: 4.1746, lng: 73.5088, photo: "https://images.unsplash.com/photo-1654366725056-abf08ac625d9?w=400&q=80" },
      { nom: "Grande Mosquée du Vendredi (Hukuru Miskiy)", description: "Mosquée en pierre de corail du 17e siècle", lat: 4.1752, lng: 73.5097, photo: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=400&q=80" },
      { nom: "Musée National des Maldives", description: "Collection d'objets royaux et historiques", lat: 4.1759, lng: 73.5104, photo: "https://images.unsplash.com/photo-1696694139314-e0e5962b8dc0?w=400&q=80" },
      { nom: "Sultan Park", description: "Ancien jardin royal, havre de verdure en pleine ville", lat: 4.1757, lng: 73.5102, photo: "https://images.unsplash.com/photo-1605541780223-4750e0666ca2?w=400&q=80" },
      { nom: "Monument du Tsunami", description: "Mémorial en hommage aux victimes de 2004", lat: 4.1720, lng: 73.5145, photo: "https://images.unsplash.com/photo-1685389213849-088712cbd3fe?w=400&q=80" },
    ];
    await saveDestination({
      id: "male",
      nom: male.nom,
      photo: male.photo,
      deroule: male.deroule,
      hebergements: [
        { nom: "Hulhule Island Hotel", photo: "https://images.unsplash.com/photo-1586500036706-41963de24d8b?w=300&q=80", description: "Idéal pour une nuit avant le transfert vers l'atoll", lat: 4.1919, lng: 73.5285 },
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
      { nom: "Fresh in the Garden", cuisine: "Végétarien, produits du potager", prix: "€€€" as const, lat: 5.3312, lng: 73.0722, photo: "https://images.unsplash.com/photo-1675150277436-9c7348972c11?w=400&q=80" },
      { nom: "Overwater", cuisine: "Fruits de mer sur pilotis", prix: "€€€" as const, lat: 5.3327, lng: 73.0715, photo: "https://images.unsplash.com/photo-1650435489945-96b2b19b943b?w=400&q=80" },
      { nom: "So Starlight", cuisine: "Cinéma flottant et dîner", prix: "€€€" as const, lat: 5.3305, lng: 73.0730, photo: "https://images.unsplash.com/photo-1583475020831-fb4fbb497315?w=400&q=80" },
      { nom: "Baa Atoll Restaurant", cuisine: "International, buffet", prix: "€€" as const, lat: 5.3318, lng: 73.0708, photo: "https://images.unsplash.com/photo-1768578987473-a194c94225ca?w=400&q=80" },
      { nom: "Roots", cuisine: "Bio, sans gluten", prix: "€€" as const, lat: 5.3298, lng: 73.0718, photo: "https://images.unsplash.com/photo-1613187869034-fa8e42b2ab1c?w=400&q=80" },
    ];
    // Vraies attractions et sites de Baa Atoll (réserve de biosphère UNESCO)
    const activitesBaa = [
      { nom: "Hanifaru Bay", description: "Snorkeling avec raies manta et requins-baleines, réserve UNESCO", lat: 5.2830, lng: 73.0330, photo: "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=400&q=80" },
      { nom: "Dharavandhoo", description: "Île locale, point de départ pour Hanifaru Bay", lat: 5.1667, lng: 73.0500, photo: "https://images.unsplash.com/photo-1512100254544-47340ba56b5d?w=400&q=80" },
      { nom: "Thulhaadhoo", description: "Île connue pour son artisanat traditionnel en laque", lat: 5.2333, lng: 72.9833, photo: "https://images.unsplash.com/photo-1605541780223-4750e0666ca2?w=400&q=80" },
      { nom: "Eydhafushi", description: "Capitale administrative de l'atoll de Baa", lat: 5.1050, lng: 73.0700, photo: "https://images.unsplash.com/photo-1696694139314-e0e5962b8dc0?w=400&q=80" },
      { nom: "Récif de Kihaadhuffaru", description: "Site de plongée réputé pour ses tombants coralliens", lat: 5.3500, lng: 73.0500, photo: "https://images.unsplash.com/photo-1654366725056-abf08ac625d9?w=400&q=80" },
    ];
    await saveDestination({
      id: "baa-atoll",
      nom: baaAtoll.nom,
      photo: baaAtoll.photo,
      deroule: baaAtoll.deroule,
      hebergements: [
        { nom: "Soneva Fushi", photo: "https://images.unsplash.com/photo-1601999705946-fbf42c3c6c66?w=300&q=80", description: "Villa sur pilotis, notre coup de cœur pour ce voyage", lat: 5.3320, lng: 73.0708 },
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
