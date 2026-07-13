// app/api/carnet-delete/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/carnet-delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { deleteCarnet } from "@/lib/carnets";

export async function POST(req: NextRequest) {
  try {
    const { slug } = await req.json();
    if (!slug) {
      return NextResponse.json({ error: "Le slug est requis" }, { status: 400 });
    }
    await deleteCarnet(slug);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur carnet-delete:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
