// app/api/destination-list/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/destination-list/route.ts
import { NextResponse } from "next/server";
import { listDestinations } from "@/lib/carnets";

export async function GET() {
  try {
    const destinations = await listDestinations();
    return NextResponse.json({ destinations });
  } catch (err) {
    console.error("Erreur destination-list:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
