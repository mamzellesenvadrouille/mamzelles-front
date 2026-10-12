// app/api/liste-de-voyage-contribution/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/liste-de-voyage-contribution/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ajouterContributionListeDeVoyage, modifierContributionListeDeVoyage, getCarnet } from "@/lib/carnets";
import { accesCarnetAutorise } from "@/lib/acces-carnet";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, elementId, montant, prenom } = body;

    if (!slug || !elementId || typeof montant !== "number" || montant <= 0 || !prenom || !prenom.trim()) {
      return NextResponse.json({ error: "slug, elementId, un montant positif et un prénom sont requis" }, { status: 400 });
    }

    const carnet = await ajouterContributionListeDeVoyage(slug, elementId, montant, prenom);
    if (!carnet) {
      return NextResponse.json({ error: "Carnet ou élément introuvable" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur liste-de-voyage-contribution:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

// Modification par les mariés (page /liste-de-voyage/gerer) : cocher "reçu",
// ou corriger le montant d'une participation (0 = la retirer).
export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, elementId, index, montant, recu } = body;

    const montantValide = montant === undefined || (typeof montant === "number" && Number.isFinite(montant) && montant >= 0);
    const recuValide = recu === undefined || typeof recu === "boolean";
    if (!slug || !elementId || !Number.isInteger(index) || index < 0 || !montantValide || !recuValide || (montant === undefined && recu === undefined)) {
      return NextResponse.json({ error: "Paramètres invalides" }, { status: 400 });
    }

    // Réservé aux mariés : même code d'accès que le carnet
    const carnetActuel = await getCarnet(slug);
    if (!carnetActuel || !(await accesCarnetAutorise(carnetActuel))) {
      return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
    }

    const carnet = await modifierContributionListeDeVoyage(slug, elementId, index, { montant, recu });
    if (!carnet) {
      return NextResponse.json({ error: "Participation introuvable" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur liste-de-voyage-contribution (PATCH):", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
