// lib/acces-carnet.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/lib/acces-carnet.ts
//
// Code d'accès d'un carnet : protège le carnet et la page "Gérer" de la
// Liste de Voyage (la Liste de Voyage des invités reste ouverte à tous).
// Une fois le bon code entré, un cookie le retient un an sur l'appareil.
// L'admin connectée (badge admin) peut toujours tout voir sans code.
import { cookies } from "next/headers";
import type { Carnet } from "@/lib/carnets";
import { COOKIE_ADMIN, badgeAdminValide, empreinte } from "@/lib/badge-admin";

export const DUREE_ACCES_CARNET = 60 * 60 * 24 * 365; // 1 an

export function nomCookieCarnet(slug: string) {
  return `mz_carnet_${slug}`;
}

// Ignore les espaces et les minuscules : "k7m 2qx" = "K7M2QX"
export function normaliserCode(code: string) {
  return code.replace(/\s+/g, "").toUpperCase();
}

export async function jetonCarnet(slug: string, code: string) {
  return empreinte(`mz-carnet:${slug}:${normaliserCode(code)}`);
}

export async function accesCarnetAutorise(carnet: Pick<Carnet, "slug" | "codeAcces">): Promise<boolean> {
  if (!carnet.codeAcces?.trim()) return true; // pas de code : carnet ouvert, comme avant
  const jar = await cookies();
  if (await badgeAdminValide(jar.get(COOKIE_ADMIN)?.value)) return true;
  const jeton = jar.get(nomCookieCarnet(carnet.slug))?.value;
  return !!jeton && jeton === (await jetonCarnet(carnet.slug, carnet.codeAcces));
}
