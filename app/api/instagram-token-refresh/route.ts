// app/api/instagram-token-refresh/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/instagram-token-refresh/route.ts
//
// Renouvelle automatiquement le token Instagram (valable 60 jours) et le stocke
// dans Redis, pour que tu n'aies jamais à le faire manuellement.
// Déclenché automatiquement chaque mois par un Cron Job Vercel (voir vercel.json).

import { NextResponse } from "next/server";
import { Redis } from "@upstash/redis";

const redis = Redis.fromEnv();
const TOKEN_KEY = "instagram:access_token";

export async function GET(request: Request) {
  // Sécurité : vérifie que l'appel vient bien de Vercel Cron, pas de n'importe qui
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
  }

  try {
    // On récupère le token actuel : d'abord Redis, sinon la variable d'environnement
    // (utile la toute première fois, avant que Redis n'ait jamais stocké de token).
    const currentToken =
      (await redis.get<string>(TOKEN_KEY)) || process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!currentToken) {
      return NextResponse.json(
        { error: "Aucun token Instagram disponible pour le renouvellement" },
        { status: 500 }
      );
    }

    const url = `https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${currentToken}`;
    const res = await fetch(url);

    if (!res.ok) {
      const errText = await res.text();
      console.error("Erreur renouvellement token Instagram:", errText);
      return NextResponse.json(
        { error: "Échec du renouvellement du token" },
        { status: 502 }
      );
    }

    const data = await res.json();
    const newToken = data.access_token;

    // On sauvegarde le nouveau token dans Redis, avec une expiration de 65 jours
    // par sécurité (un peu plus que les 60 jours réels de validité Instagram).
    await redis.set(TOKEN_KEY, newToken, { ex: 60 * 60 * 24 * 65 });

    console.log("✅ Token Instagram renouvelé avec succès");
    return NextResponse.json({ success: true, expiresIn: data.expires_in });
  } catch (err) {
    console.error("Erreur lors du renouvellement:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
