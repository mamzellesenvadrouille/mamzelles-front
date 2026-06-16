import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/dormir-dans-le-desert-agafay', destination: 'https://blog.mamzellesenvadrouille.com/dormir-dans-le-desert-agafay', permanent: true },
      { source: '/dormir-dans-le-desert-agafay/', destination: 'https://blog.mamzellesenvadrouille.com/dormir-dans-le-desert-agafay/', permanent: true },
      { source: '/visiter-marrakech', destination: 'https://blog.mamzellesenvadrouille.com/visiter-marrakech', permanent: true },
      { source: '/visiter-marrakech/', destination: 'https://blog.mamzellesenvadrouille.com/visiter-marrakech/', permanent: true },
      { source: '/road-trip-a-lanzarote', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote', permanent: true },
      { source: '/road-trip-a-lanzarote/', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote/', permanent: true },
      { source: '/visiter-londres-en-1-semaine', destination: 'https://blog.mamzellesenvadrouille.com/visiter-londres-en-1-semaine', permanent: true },
      { source: '/visiter-londres-en-1-semaine/', destination: 'https://blog.mamzellesenvadrouille.com/visiter-londres-en-1-semaine/', permanent: true },
      { source: '/destinations/:path*', destination: 'https://blog.mamzellesenvadrouille.com/destinations/:path*', permanent: true },
      { source: '/formulaire-de-contact', destination: '/formules#formulaire', permanent: true },
      { source: '/formulaire-de-contact/', destination: '/formules#formulaire', permanent: true },
      { source: '/madrid-en-3-jours', destination: '/visiter-madrid-en-3-jours', permanent: true },
      { source: '/madrid-en-3-jours/', destination: '/visiter-madrid-en-3-jours/', permanent: true },
      { source: '/que-voir-a-marrakech', destination: 'https://blog.mamzellesenvadrouille.com/visiter-marrakech', permanent: true },
      { source: '/que-voir-a-marrakech/', destination: 'https://blog.mamzellesenvadrouille.com/visiter-marrakech/', permanent: true },
      { source: '/partir-une-semaine-a-londres', destination: 'https://blog.mamzellesenvadrouille.com/visiter-londres-en-1-semaine', permanent: true },
      { source: '/partir-une-semaine-a-londres/', destination: 'https://blog.mamzellesenvadrouille.com/visiter-londres-en-1-semaine/', permanent: true },
      { source: '/une-semaine-a-lanzarote-road-trip-sur-lile-aux-volcans', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote', permanent: true },
      { source: '/une-semaine-a-lanzarote-road-trip-sur-lile-aux-volcans/', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote/', permanent: true },
      { source: '/palawan-autrement-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', destination: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', permanent: true },
      { source: '/palawan-autrement-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus/', destination: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus/', permanent: true },
    ]
  }
};

export default nextConfig;
