import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Le Service Worker ne doit JAMAIS être mis en cache par le navigateur,
        // sinon les mises à jour du fichier ne sont jamais vues par les visiteurs.
        source: '/sw.js',
        headers: [
          { key: 'Cache-Control', value: 'no-cache, no-store, must-revalidate' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      { source: '/visiter-londres-en-1-semaine', destination: '/visiter-londres', permanent: true },
      { source: '/visiter-londres-en-1-semaine/', destination: '/visiter-londres', permanent: true },
      { source: '/formulaire-de-contact', destination: '/formules#formulaire', permanent: true },
      { source: '/formulaire-de-contact/', destination: '/formules#formulaire', permanent: true },
      { source: '/madrid-en-3-jours', destination: '/visiter-madrid-en-3-jours', permanent: true },
      { source: '/madrid-en-3-jours/', destination: '/visiter-madrid-en-3-jours', permanent: true },
      { source: '/que-voir-a-marrakech', destination: '/visiter-marrakech', permanent: true },
      { source: '/que-voir-a-marrakech/', destination: '/visiter-marrakech', permanent: true },
      { source: '/partir-une-semaine-a-londres', destination: '/visiter-londres', permanent: true },
      { source: '/partir-une-semaine-a-londres/', destination: '/visiter-londres', permanent: true },
      { source: '/une-semaine-a-lanzarote-road-trip-sur-lile-aux-volcans', destination: '/road-trip-a-lanzarote', permanent: true },
      { source: '/une-semaine-a-lanzarote-road-trip-sur-lile-aux-volcans/', destination: '/road-trip-a-lanzarote', permanent: true },
      { source: '/palawan-autrement-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', destination: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', permanent: true },
      { source: '/palawan-autrement-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus/', destination: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', permanent: true },
      { source: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus/', destination: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', permanent: true },
    ]
  }
};
export default nextConfig;
