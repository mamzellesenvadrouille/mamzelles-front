// proxy.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/proxy.ts (à la racine du projet, à côté de "app")
//
// Protège les fonctions de l'admin : elles refusent tout appel qui n'a pas
// le "badge" remis à la connexion admin (voir lib/badge-admin.ts).
// Si vous ajoutez une nouvelle fonction réservée à l'admin, ajoutez-la à la
// liste "matcher" tout en bas.
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { COOKIE_ADMIN, badgeAdminValide } from "@/lib/badge-admin";

export async function proxy(request: NextRequest) {
  // Le formulaire de contact du site doit rester public : seul l'envoi (POST)
  // est libre, la lecture / modification / suppression des demandes est réservée à l'admin.
  if (request.nextUrl.pathname === "/api/contact" && request.method === "POST") {
    return NextResponse.next();
  }

  if (await badgeAdminValide(request.cookies.get(COOKIE_ADMIN)?.value)) {
    return NextResponse.next();
  }

  return NextResponse.json({ error: "Non autorisé" }, { status: 401 });
}

export const config = {
  matcher: [
    "/api/carnet-list",
    "/api/carnet-save",
    "/api/carnet-delete",
    "/api/liste-de-voyage-reset",
    "/api/destination-list",
    "/api/destination-save",
    "/api/destination-delete",
    "/api/devis-list",
    "/api/devis-save",
    "/api/proposition-save",
    "/api/checkout",
    "/api/facture",
    "/api/contact",
    "/api/upload-photo",
    "/api/lieu-search",
  ],
};
