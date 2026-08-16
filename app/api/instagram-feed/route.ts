// app/api/instagram-feed/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/instagram-feed/route.ts
//
// Récupère les derniers posts Instagram. Le token est lu depuis Redis en priorité
// (mis à jour automatiquement tous les mois), avec la variable d'environnement
// comme solution de secours pour le tout premier appel.

import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

export const revalidate = 1800; // cache 30 minutes

const redis = Redis.fromEnv();
const TOKEN_KEY = "instagram:access_token";

export async function GET() {
  const userId = process.env.INSTAGRAM_USER_ID;

  if (!userId) {
    return NextResponse.json(
      { error: "Configuration Instagram manquante (INSTAGRAM_USER_ID)" },
      { status: 500 }
    );
  }

  const token =
    (await redis.get<string>(TOKEN_KEY)) || process.env.INSTAGRAM_ACCESS_TOKEN;

  if (!token) {
    return NextResponse.json(
      { error: "Configuration Instagram manquante (token)" },
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

    const posts = (data.data || []).map((p: {
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
