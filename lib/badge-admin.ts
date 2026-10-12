// lib/badge-admin.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/lib/badge-admin.ts
//
// "Badge" de l'admin : une empreinte du mot de passe admin, remise dans un
// cookie sécurisé quand on se connecte. Toutes les fonctions de l'admin
// vérifient ce cookie (voir proxy.ts). Changer ADMIN_PASSWORD sur Vercel
// invalide automatiquement tous les anciens badges.

export const COOKIE_ADMIN = "mz_admin";
export const DUREE_BADGE_ADMIN = 60 * 60 * 24 * 30; // 30 jours, renouvelé à chaque connexion

export async function empreinte(texte: string): Promise<string> {
  const donnees = new TextEncoder().encode(texte);
  const hash = await crypto.subtle.digest("SHA-256", donnees);
  return Array.from(new Uint8Array(hash))
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function badgeAdminAttendu(): Promise<string | null> {
  const motDePasse = process.env.ADMIN_PASSWORD;
  if (!motDePasse) return null;
  return empreinte(`mz-admin:${motDePasse}`);
}

export async function badgeAdminValide(valeurCookie: string | undefined): Promise<boolean> {
  if (!valeurCookie) return false;
  const attendu = await badgeAdminAttendu();
  return attendu !== null && valeurCookie === attendu;
}
