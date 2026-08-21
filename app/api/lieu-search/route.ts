// app/api/lieu-search/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/lieu-search/route.ts
//
// Recherche de lieu pour l'admin (auto-complétion des coordonnées GPS d'un
// hébergement/restaurant/activité). Appelle Google Places API côté serveur,
// pour que la clé ne soit jamais visible dans le code envoyé au navigateur.

import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const q = req.nextUrl.searchParams.get("q");
  if (!q || q.trim().length < 3) {
    return NextResponse.json({ resultats: [] });
  }

  const cle = process.env.GOOGLE_MAPS_API_KEY;
  if (!cle) {
    return NextResponse.json({ error: "Clé Google Maps manquante côté serveur" }, { status: 500 });
  }

  try {
    const res = await fetch("https://places.googleapis.com/v1/places:searchText", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Goog-Api-Key": cle,
        "X-Goog-FieldMask": "places.displayName,places.location,places.formattedAddress",
      },
      body: JSON.stringify({ textQuery: q }),
    });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Erreur Google Places:", errText);
      return NextResponse.json({ error: "Erreur lors de la recherche" }, { status: 502 });
    }

    const data = await res.json();
    const resultats = (data.places ?? [])
      .filter((p: { location?: { latitude: number; longitude: number } }) => p.location)
      .map((p: {
        displayName?: { text: string };
        formattedAddress?: string;
        location: { latitude: number; longitude: number };
      }) => ({
        nom: p.formattedAddress
          ? `${p.displayName?.text ?? ""} — ${p.formattedAddress}`
          : p.displayName?.text ?? "",
        lat: p.location.latitude,
        lng: p.location.longitude,
      }));

    return NextResponse.json({ resultats });
  } catch (err) {
    console.error("Erreur lieu-search:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
