// app/api/liste-de-voyage-cadeaux/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/liste-de-voyage-cadeaux/route.ts
import { NextRequest, NextResponse } from "next/server";
import { ajouterCadeauListeDeVoyage, supprimerCadeauListeDeVoyage } from "@/lib/carnets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, nom, description, prixIndicatif, url } = body;

    if (!slug || !nom) {
      return NextResponse.json({ error: "slug et nom sont requis" }, { status: 400 });
    }

    const carnet = await ajouterCadeauListeDeVoyage(slug, { nom, description, prixIndicatif, url });
    if (!carnet) {
      return NextResponse.json({ error: "Carnet introuvable" }, { status: 404 });
    }
    return NextResponse.json({ listeVoyageCadeaux: carnet.listeVoyageCadeaux });
  } catch (err) {
    console.error("Erreur liste-de-voyage-cadeaux POST:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, id } = body;

    if (!slug || !id) {
      return NextResponse.json({ error: "slug et id sont requis" }, { status: 400 });
    }

    const carnet = await supprimerCadeauListeDeVoyage(slug, id);
    if (!carnet) {
      return NextResponse.json({ error: "Carnet introuvable" }, { status: 404 });
    }
    return NextResponse.json({ listeVoyageCadeaux: carnet.listeVoyageCadeaux });
  } catch (err) {
    console.error("Erreur liste-de-voyage-cadeaux DELETE:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
