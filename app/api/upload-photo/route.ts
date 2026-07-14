// app/api/upload-photo/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/upload-photo/route.ts
import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "Aucun fichier reçu" }, { status: 400 });
    }

    // Limite raisonnable : 8 Mo par photo
    if (file.size > 8 * 1024 * 1024) {
      return NextResponse.json({ error: "Le fichier dépasse 8 Mo" }, { status: 400 });
    }

    const nomUnique = `carnets/${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.\-_]/g, "")}`;

    const blob = await put(nomUnique, file, {
      access: "public",
    });

    return NextResponse.json({ url: blob.url });
  } catch (err) {
    console.error("Erreur upload-photo:", err);
    return NextResponse.json({ error: "Erreur serveur lors de l'upload" }, { status: 500 });
  }
}
