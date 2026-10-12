// app/api/carnet-save/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/carnet-save/route.ts
import { NextRequest, NextResponse } from "next/server";
import { saveCarnet, getCarnet, type Carnet, type Contribution } from "@/lib/carnets";

type EntreeParticipations = { montantReuni?: number; contributions?: Contribution[] };

// Reprend les participations déjà enregistrées sur le serveur pour une entrée
// (l'admin ne les modifie jamais : elles viennent des invités et des mariés).
function garderParticipations<T extends EntreeParticipations>(entree: T, existante?: EntreeParticipations): T {
  if (!existante) return entree;
  return { ...entree, montantReuni: existante.montantReuni, contributions: existante.contributions };
}

// Quand l'admin enregistre un carnet, la page renvoie la version chargée à
// l'ouverture. Sans cette fusion, une participation arrivée entre-temps
// serait effacée. On garde donc toujours, depuis le serveur : les montants et
// participations de la Liste de Voyage, et les idées de cadeaux ajoutées par les mariés.
function fusionnerParticipations(recu: Carnet, existant: Carnet): Carnet {
  const reservations = recu.reservations.map((r) =>
    garderParticipations(r, existant.reservations.find((e) => e.label === r.label))
  );

  const destinations = recu.destinations.map((d) => {
    const dExistante = existant.destinations.find((e) => e.destinationId === d.destinationId);
    if (!dExistante) return d;
    const fusionnerChamp = (champ: "listeVoyageHebergements" | "listeVoyageActivites") => {
      const actuel = d[champ];
      if (!actuel) return actuel;
      const copie: typeof actuel = {};
      for (const [nom, info] of Object.entries(actuel)) {
        copie[nom] = garderParticipations(info, dExistante[champ]?.[nom]);
      }
      return copie;
    };
    return {
      ...d,
      listeVoyageHebergements: fusionnerChamp("listeVoyageHebergements"),
      listeVoyageActivites: fusionnerChamp("listeVoyageActivites"),
    };
  });

  return {
    ...recu,
    reservations,
    destinations,
    listeVoyageCadeaux: existant.listeVoyageCadeaux,
    contributionLibreReunie: existant.contributionLibreReunie,
    contributionsLibres: existant.contributionsLibres,
  };
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Carnet;

    if (!body.slug) {
      return NextResponse.json({ error: "Le slug est requis" }, { status: 400 });
    }

    const existant = await getCarnet(body.slug);
    await saveCarnet(existant ? fusionnerParticipations(body, existant) : body);
    const saved = await getCarnet(body.slug);
    return NextResponse.json({ carnet: saved });
  } catch (err) {
    console.error("Erreur carnet-save:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
