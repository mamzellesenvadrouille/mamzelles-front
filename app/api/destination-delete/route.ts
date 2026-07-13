// app/api/destination-delete/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/destination-delete/route.ts
import { NextRequest, NextResponse } from "next/server";
import { deleteDestination } from "@/lib/carnets";

export async function POST(req: NextRequest) {
  try {
    const { id } = await req.json();
    if (!id) {
      return NextResponse.json({ error: "L'id est requis" }, { status: 400 });
    }
    await deleteDestination(id);
    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Erreur destination-delete:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
