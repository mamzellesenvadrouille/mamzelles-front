// app/voyage/[slug]/googleMapsLoader.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/googleMapsLoader.ts
//
// Chargement partagé du script Google Maps, utilisé à la fois par
// DestinationMap et ParcoursMap. Avant, chaque composant chargeait son
// propre script séparément, ce qui causait un double chargement et des
// avertissements "already defined" dans la console.

declare global {
  interface Window {
    google?: any; // eslint-disable-line @typescript-eslint/no-explicit-any
    __mamzellesMapsCallback?: () => void;
  }
}

let scriptChargement: Promise<void> | null = null;

export function chargerGoogleMaps(apiKey: string): Promise<void> {
  if (window.google?.maps) return Promise.resolve();
  if (scriptChargement) return scriptChargement;

  scriptChargement = new Promise((resolve) => {
    window.__mamzellesMapsCallback = () => resolve();
    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=marker&callback=__mamzellesMapsCallback&loading=async`;
    script.async = true;
    document.head.appendChild(script);
  });
  return scriptChargement;
}
