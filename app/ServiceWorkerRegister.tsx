// app/ServiceWorkerRegister.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/ServiceWorkerRegister.tsx
//
// Active le Service Worker qui met en cache les cartes et pages de carnet
// pour qu'elles restent consultables hors connexion.
"use client";

import { useEffect } from "react";

export default function ServiceWorkerRegister() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    // On n'active JAMAIS le Service Worker en local (localhost) :
    // ça évite toute interférence pendant le développement/débogage.
    if (window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1") {
      // On désenregistre aussi tout ancien Service Worker qui traînerait de tests précédents
      navigator.serviceWorker.getRegistrations().then((regs) => {
        regs.forEach((reg) => reg.unregister());
      });
      return;
    }

    navigator.serviceWorker.register("/sw.js").catch(() => {
      // échec silencieux : le site continue de fonctionner normalement,
      // simplement sans le cache hors-ligne
    });
  }, []);

  return null;
}
