import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/visiter-madrid-en-3-jours', destination: 'https://blog.mamzellesenvadrouille.com/visiter-madrid-en-3-jours', permanent: true },
      { source: '/visiter-madrid-en-3-jours/', destination: 'https://blog.mamzellesenvadrouille.com/visiter-madrid-en-3-jours/', permanent: true },
      { source: '/dormir-dans-le-desert-agafay', destination: 'https://blog.mamzellesenvadrouille.com/dormir-dans-le-desert-agafay', permanent: true },
      { source: '/dormir-dans-le-desert-agafay/', destination: 'https://blog.mamzellesenvadrouille.com/dormir-dans-le-desert-agafay/', permanent: true },
      { source: '/visiter-marrakech', destination: 'https://blog.mamzellesenvadrouille.com/visiter-marrakech', permanent: true },
      { source: '/visiter-marrakech/', destination: 'https://blog.mamzellesenvadrouille.com/visiter-marrakech/', permanent: true },
      { source: '/road-trip-a-lanzarote', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote', permanent: true },
      { source: '/road-trip-a-lanzarote/', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote/', permanent: true },
      { source: '/visiter-londres-en-1-semaine', destination: 'https://blog.mamzellesenvadrouille.com/visiter-londres-en-1-semaine', permanent: true },
      { source: '/visiter-londres-en-1-semaine/', destination: 'https://blog.mamzellesenvadrouille.com/visiter-londres-en-1-semaine/', permanent: true },
      { source: '/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient', destination: 'https://blog.mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient', permanent: true },
      { source: '/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient/', destination: 'https://blog.mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient/', permanent: true },
      { source: '/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines', destination: 'https://blog.mamzellesenvadrouille.com/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines', permanent: true },
      { source: '/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines/', destination: 'https://blog.mamzellesenvadrouille.com/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines/', permanent: true },
      { source: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', destination: 'https://blog.mamzellesenvadrouille.com/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', permanent: true },
      { source: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus/', destination: 'https://blog.mamzellesenvadrouille.com/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus/', permanent: true },
      { source: '/travel-planner-voyage-sur-mesure', destination: 'https://blog.mamzellesenvadrouille.com/travel-planner-voyage-sur-mesure', permanent: true },
      { source: '/travel-planner-voyage-sur-mesure/', destination: 'https://blog.mamzellesenvadrouille.com/travel-planner-voyage-sur-mesure/', permanent: true },
      { source: '/destinations/:path*', destination: 'https://blog.mamzellesenvadrouille.com/destinations/:path*', permanent: true },
      { source: '/formulaire-de-contact', destination: '/formules#formulaire', permanent: true },
      { source: '/formulaire-de-contact/', destination: '/formules#formulaire', permanent: true },
    ]
  }
};

export default nextConfig;