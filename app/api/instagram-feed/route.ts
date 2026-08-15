// app/api/instagram-feed/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/instagram-feed/route.ts
//
// Récupère les derniers posts Instagram directement depuis l'API officielle Meta,
// avec mise en cache de 30 min pour éviter de spammer l'API à chaque visite.

import { NextResponse } from "next/server";

export const revalidate = 1800; // cache 30 minutes

export async function GET() {
  const token = process.env.INSTAGRAM_ACCESS_TOKEN;
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!token || !userId) {
    return NextResponse.json(
      { error: "Configuration Instagram manquante" },
      { status: 500 }
    );
  }

  try {
    const fields = "id,caption,media_type,media_url,thumbnail_url,permalink,timestamp";
    const url = `https://graph.instagram.com/${userId}/media?fields=${fields}&limit=12&access_token=${token}`;

    const res = await fetch(url, { next: { revalidate: 1800 } });

    if (!res.ok) {
      const errText = await res.text();
      console.error("Erreur API Instagram:", errText);
      return NextResponse.json(
        { error: "Impossible de récupérer les posts Instagram" },
        { status: 502 }
      );
    }

    const data = await res.json();

    // On ne garde que les posts avec une image/vidéo affichable
    const posts = (data.data || [])
      .filter((p: { media_type: string }) => p.media_type !== "VIDEO" || true) // les vidéos passent aussi via thumbnail
      .map((p: {
        id: string;
        caption?: string;
        media_type: string;
        media_url: string;
        thumbnail_url?: string;
        permalink: string;
        timestamp: string;
      }) => ({
        id: p.id,
        caption: p.caption ?? "",
        mediaType: p.media_type,
        // Pour les vidéos/reels, media_url pointe vers la vidéo elle-même :
        // on utilise thumbnail_url si dispo pour l'affichage en grille.
        imageUrl: p.media_type === "VIDEO" ? (p.thumbnail_url ?? p.media_url) : p.media_url,
        permalink: p.permalink,
        timestamp: p.timestamp,
      }));

    return NextResponse.json({ posts });
  } catch (err) {
    console.error("Erreur fetch Instagram:", err);
    return NextResponse.json(
      { error: "Erreur serveur lors de la récupération Instagram" },
      { status: 500 }
    );
  }
}
