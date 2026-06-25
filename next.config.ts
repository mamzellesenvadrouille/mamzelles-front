import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/road-trip-a-lanzarote', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote', permanent: true },
      { source: '/road-trip-a-lanzarote/', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote/', permanent: true },
      { source: '/visiter-londres-en-1-semaine', destination: '/visiter-londres', permanent: true },
      { source: '/visiter-londres-en-1-semaine/', destination: '/visiter-londres/', permanent: true },
      { source: '/formulaire-de-contact', destination: '/formules#formulaire', permanent: true },
      { source: '/formulaire-de-contact/', destination: '/formules#formulaire', permanent: true },
      { source: '/madrid-en-3-jours', destination: '/visiter-madrid-en-3-jours', permanent: true },
      { source: '/madrid-en-3-jours/', destination: '/visiter-madrid-en-3-jours/', permanent: true },
      { source: '/que-voir-a-marrakech', destination: '/visiter-marrakech', permanent: true },
      { source: '/que-voir-a-marrakech/', destination: '/visiter-marrakech', permanent: true },
      { source: '/partir-une-semaine-a-londres', destination: '/visiter-londres', permanent: true },
      { source: '/partir-une-semaine-a-londres/', destination: '/visiter-londres/', permanent: true },
      { source: '/une-semaine-a-lanzarote-road-trip-sur-lile-aux-volcans', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote', permanent: true },
      { source: '/une-semaine-a-lanzarote-road-trip-sur-lile-aux-volcans/', destination: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote/', permanent: true },
      { source: '/palawan-autrement-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', destination: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus', permanent: true },
      { source: '/palawan-autrement-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus/', destination: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus/', permanent: true },
    ]
  }
};

export default nextConfig;
