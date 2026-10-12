// app/api/carnet-acces/route.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/api/carnet-acces/route.ts
//
// Vérifie le code d'accès d'un carnet et, s'il est bon, le retient un an
// sur l'appareil (cookie sécurisé).
import { NextRequest, NextResponse } from "next/server";
import { getCarnet } from "@/lib/carnets";
import { DUREE_ACCES_CARNET, jetonCarnet, nomCookieCarnet, normaliserCode } from "@/lib/acces-carnet";

export async function POST(req: NextRequest) {
  try {
    const { slug, code } = await req.json();
    if (!slug || typeof slug !== "string" || !code || typeof code !== "string") {
      return NextResponse.json({ error: "Code manquant" }, { status: 400 });
    }

    const carnet = await getCarnet(slug);
    const bonCode = !!carnet?.codeAcces?.trim() && normaliserCode(code) === normaliserCode(carnet.codeAcces);

    if (!carnet || !bonCode) {
      // Petite pause pour freiner quelqu'un qui essaierait des codes au hasard
      await new Promise((r) => setTimeout(r, 800));
      return NextResponse.json({ error: "Code incorrect" }, { status: 401 });
    }

    const res = NextResponse.json({ ok: true });
    res.cookies.set(nomCookieCarnet(slug), await jetonCarnet(slug, carnet.codeAcces!), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: DUREE_ACCES_CARNET,
    });
    return res;
  } catch (err) {
    console.error("Erreur carnet-acces:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
