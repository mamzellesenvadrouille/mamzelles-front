import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mamzellesenvadrouille.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://mamzellesenvadrouille.com/formules',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mamzellesenvadrouille.com/qui-sommes-nous',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://mamzellesenvadrouille.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mamzellesenvadrouille.com/visiter-madrid-en-3-jours',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mamzellesenvadrouille.com/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mamzellesenvadrouille.com/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mamzellesenvadrouille.com/visiter-marrakech',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://mamzellesenvadrouille.com/visiter-londres',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
