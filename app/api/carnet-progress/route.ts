// app/api/carnet-progress/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/carnet-progress/route.ts
//
// Route publique (accessible sans connexion, appelée depuis la page /voyage/[slug]
// par le client lui-même) qui sauvegarde sa progression (cases cochées,
// éléments personnalisés ajoutés). Le numéro de confirmation n'est JAMAIS
// envoyé ici — il reste uniquement dans le navigateur du client.
import { NextRequest, NextResponse } from "next/server";
import { getCarnet, saveCarnetProgress, type CarnetProgress } from "@/lib/carnets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slug, progress } = body as { slug: string; progress: CarnetProgress };

    if (!slug || typeof slug !== "string") {
      return NextResponse.json({ error: "Slug manquant" }, { status: 400 });
    }
    const carnet = await getCarnet(slug);
    if (!carnet) {
      return NextResponse.json({ error: "Carnet introuvable" }, { status: 404 });
    }
    if (!progress || typeof progress !== "object") {
      return NextResponse.json({ error: "Progression invalide" }, { status: 400 });
    }

    await saveCarnetProgress(slug, progress);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Erreur carnet-progress:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
