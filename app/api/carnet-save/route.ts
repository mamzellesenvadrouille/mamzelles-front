// app/api/carnet-save/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/carnet-save/route.ts
import { NextRequest, NextResponse } from "next/server";
import { saveCarnet, getCarnet, type Carnet } from "@/lib/carnets";

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as Carnet;

    if (!body.slug) {
      return NextResponse.json({ error: "Le slug est requis" }, { status: 400 });
    }

    await saveCarnet(body);
    const saved = await getCarnet(body.slug);
    return NextResponse.json({ carnet: saved });
  } catch (err) {
    console.error("Erreur carnet-save:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
