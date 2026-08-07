export type Article = {
  slug: string;
  title: string;
  category: string;
  image: string;
  // Toujours proposé en priorité avec ces slugs (relation forte, ex: articles qui se complètent)
  pinnedWith?: string[];
  // Jamais proposé avec ces slugs (ex: contenu déjà lié dans le corps de l'article)
  excludedWith?: string[];
};

export const articles: Article[] = [
  {
    slug: 'visiter-madrid-en-3-jours',
    title: 'Visiter Madrid en 3 jours : itinéraire et bons plans',
    category: 'Espagne',
    image: '/related/Madrid-article.webp',
  },
  {
    slug: 'visiter-londres',
    title: 'Visiter Londres : que faire en 7 jours par quartier',
    category: 'Angleterre',
    image: '/related/Londres-article.webp',
  },
  {
    slug: 'road-trip-a-lanzarote',
    title: "Que faire à Lanzarote ? Road trip d'une semaine",
    category: 'Espagne',
    image: '/related/Lanzarote-article.webp',
  },
  {
    slug: 'visiter-marrakech',
    title: 'Visiter Marrakech : notre guide complet',
    category: 'Maroc',
    image: '/related/Marrakech-article.webp',
    pinnedWith: ['dormir-dans-le-desert-agafay'],
  },
  {
    slug: 'dormir-dans-le-desert-agafay',
    title: "Agafay : dormir dans le désert, notre expérience inoubliable",
    category: 'Maroc',
    image: '/related/Agafay-article.webp',
    pinnedWith: ['visiter-marrakech'],
  },
  {
    slug: 'itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient',
    title: "Itinéraire Philippines : 3 semaines pour découvrir la perle de l'Orient",
    category: 'Philippines',
    image: '/related/Philippines-articles.webp',
    excludedWith: [
      'palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
      'palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus',
    ],
  },
  {
    slug: 'palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
    title: 'Palawan : Coron et El Nido, le joyau des Philippines',
    category: 'Philippines',
    image: '/related/Palawan-article.webp',
    pinnedWith: ['palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus'],
    excludedWith: ['itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient'],
  },
  {
    slug: 'palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus',
    title: 'Palawan : de Puerto Princesa à Port Barton, hors des sentiers battus',
    category: 'Philippines',
    image: '/related/Port-Barton-article.webp',
    pinnedWith: ['palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines'],
    excludedWith: ['itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient'],
  },
  {
    slug: 'visiter-berlin-en-4-jours',
    title: 'Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses',
    category: 'Allemagne',
    image: '/related/Berlin-article.webp',
  },
];
