// app/api/liste-de-voyage-reset/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/liste-de-voyage-reset/route.ts
import { NextRequest, NextResponse } from "next/server";
import { reinitialiserParticipationsListeDeVoyage } from "@/lib/carnets";

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();
    if (!slug) {
      return NextResponse.json({ error: "slug requis" }, { status: 400 });
    }

    const carnet = await reinitialiserParticipationsListeDeVoyage(slug);
    if (!carnet) {
      return NextResponse.json({ error: "Carnet introuvable" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur liste-de-voyage-reset:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
