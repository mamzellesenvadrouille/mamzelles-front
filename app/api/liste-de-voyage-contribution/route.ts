// app/api/liste-de-voyage-contribution/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/liste-de-voyage-contribution/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ajouterContributionListeDeVoyage } from "@/lib/carnets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, elementId, montant } = body;

    if (!slug || !elementId || typeof montant !== "number" || montant <= 0) {
      return NextResponse.json({ error: "slug, elementId et un montant positif sont requis" }, { status: 400 });
    }

    const carnet = await ajouterContributionListeDeVoyage(slug, elementId, montant);
    if (!carnet) {
      return NextResponse.json({ error: "Carnet ou élément introuvable" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur liste-de-voyage-contribution:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
