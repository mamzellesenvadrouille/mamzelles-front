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

    navigator.serviceWorker.register("/sw.js").catch(() => {
      // échec silencieux : le site continue de fonctionner normalement,
      // simplement sans le cache hors-ligne
    });
  }, []);

  return null;
}
