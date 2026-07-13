// app/api/destination-save/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/destination-save/route.ts
import { NextRequest, NextResponse } from "next/server";
import { saveDestination } from "@/lib/carnets";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    if (!body.nom) {
      return NextResponse.json({ error: "Le nom est requis" }, { status: 400 });
    }
    const saved = await saveDestination(body);
    return NextResponse.json({ destination: saved });
  } catch (err) {
    console.error("Erreur destination-save:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
