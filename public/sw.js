// public/sw.js
// Service Worker : met en cache les tuiles Google Maps et les pages de carnet
// déjà visitées, pour qu'elles restent consultables sans connexion réseau.

const CACHE_NAME = "mamzelles-carnet-cache-v1";

// Domaines Google Maps dont on veut garder les tuiles/scripts en cache
const DOMAINES_MAPS = [
  "api.maptiler.com",
  "fonts.googleapis.com",
  "fonts.gstatic.com",
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((noms) =>
      Promise.all(
        noms
          .filter((nom) => nom !== CACHE_NAME)
          .map((nom) => caches.delete(nom))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const { request } = event;

  // On ne gère que les requêtes GET (jamais les POST/API d'écriture)
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  const estDomaineMaps = DOMAINES_MAPS.some((d) => url.hostname.includes(d));
  const estPageCarnet = url.pathname.startsWith("/voyage/");
  const estMemeOrigine = url.origin === self.location.origin;

  // On ne s'occupe que des tuiles Maps et des pages/ressources du carnet
  if (!estDomaineMaps && !(estMemeOrigine && (estPageCarnet || request.destination === "image" || request.destination === "script" || request.destination === "style"))) {
    return;
  }

  event.respondWith(
    caches.open(CACHE_NAME).then(async (cache) => {
      const reponseEnCache = await cache.match(request);

      // Stratégie "stale-while-revalidate" :
      // on sert immédiatement la version en cache si elle existe,
      // tout en allant chercher une version fraîche en arrière-plan pour la prochaine fois.
      const fetchPromise = fetch(request)
        .then((reponseReseau) => {
          if (reponseReseau && (reponseReseau.status === 200 || reponseReseau.type === "opaque")) {
            cache.put(request, reponseReseau.clone());
          }
          return reponseReseau;
        })
        .catch(() => reponseEnCache); // pas de réseau : on retombe sur le cache

      if (reponseEnCache) return reponseEnCache;

      // Ni cache, ni réseau disponible : on renvoie une vraie réponse d'erreur
      // (jamais "undefined", pour éviter que le navigateur plante)
      try {
        const resultat = await fetchPromise;
        if (resultat) return resultat;
      } catch (e) {
        // on tombe dans le retour ci-dessous
      }
      return new Response("Page non disponible hors connexion.", {
        status: 503,
        statusText: "Service Unavailable",
        headers: { "Content-Type": "text/plain; charset=utf-8" },
      });
    })
  );
});