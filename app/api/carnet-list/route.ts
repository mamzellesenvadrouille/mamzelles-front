// app/api/carnet-list/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/carnet-list/route.ts
import { NextResponse } from "next/server";
import { listCarnets, getCarnet } from "@/lib/carnets";

export async function GET() {
  try {
    const slugs = await listCarnets();
    const carnets = await Promise.all(slugs.map((s) => getCarnet(s)));
    return NextResponse.json({ carnets: carnets.filter(Boolean) });
  } catch (err) {
    console.error("Erreur carnet-list:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
