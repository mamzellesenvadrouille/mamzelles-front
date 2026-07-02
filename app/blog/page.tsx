import type { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Blog Voyage — MamZelles en vadrouille',
  description: "Blog voyage de deux amoureuses du monde : guides complets en Europe et en Asie, bons plans, adresses coups de cœur et conseils pour préparer vos voyages.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/blog' },
  openGraph: {
    title: 'Blog Voyage — MamZelles en vadrouille',
    description: "Blog voyage de deux amoureuses du monde : guides complets en Europe et en Asie, bons plans, adresses coups de cœur et conseils pour préparer vos voyages.",
    url: 'https://mamzellesenvadrouille.com/blog',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/hero-blog.webp', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Voyage — MamZelles en vadrouille',
    description: 'Blog voyage de deux amoureuses du monde : guides complets en Europe et en Asie, bons plans, adresses coups de cœur et conseils pour préparer vos voyages.',
    images: ['https://mamzellesenvadrouille.com/hero-blog.webp'],
  },
};

const articles = [
  {
    titre: 'Palawan : de Puerto Princesa à Port Barton',
    url: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus',
    image: null,
    localImage: '/Puerto-Princesa-Port-Barton.webp',
    categorie: 'Philippines',
  },
  {
    titre: 'Palawan : Coron et El Nido, le joyau des Philippines',
    url: '/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
    image: null,
    localImage: '/El-Nido-Coron.webp',
    categorie: 'Philippines',
  },
  {
    titre: "Voyage aux Philippines : itinéraire de 3 semaines",
    url: '/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient',
    image: null,
    localImage: '/Philippines.webp',
    categorie: 'Philippines',
  },
  {
    titre: "Dormir dans le désert d'Agafay, une expérience inoubliable !",
    url: '/dormir-dans-le-desert-agafay',
    image: null,
    localImage: '/Agafay.webp',
    categorie: 'Maroc',
  },
  {
    titre: 'Marrakech, tous les secrets pour découvrir la ville rouge & son effervescence !',
    url: '/visiter-marrakech',
    image: null,
    localImage: '/Marrakech.webp',
    categorie: 'Maroc',
  },
  {
    titre: "Une semaine à Lanzarote, Road trip sur l'île aux 300 volcans !",
    url: '/road-trip-a-lanzarote',
    image: null,
    localImage: '/Lanzarote.webp',
    categorie: 'Espagne',
  },
  {
    titre: 'Visiter Madrid en 3 jours : itinéraire et bons plans',
    url: '/visiter-madrid-en-3-jours',
    image: null,
    localImage: '/Madrid.webp',
    categorie: 'Espagne',
  },
  {
    titre: "Visiter Londres : que faire en 7 jours par quartier",
    url: '/visiter-londres',
    image: null,
    localImage: '/Londres.webp',
    categorie: 'Europe',
  },
];

async function getWpImages(): Promise<Record<string, string>> {
  try {
    const slugs = [
      'palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus',
      'palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
      'itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient',
      'dormir-dans-le-desert-agafay',
      'visiter-marrakech',
      'road-trip-a-lanzarote',
      'visiter-madrid-en-3-jours',
      'visiter-londres-en-1-semaine',
    ];
    const res = await fetch(
      `https://blog.mamzellesenvadrouille.com/wp-json/wp/v2/posts?slug=${slugs.join(',')}&_embed&per_page=10`,
      { next: { revalidate: 3600 } }
    );
    if (!res.ok) return {};
    const posts = await res.json();
    const map: Record<string, string> = {};
    for (const post of posts) {
      const img = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;
      if (img) map[post.slug] = img;
    }
    return map;
  } catch {
    return {};
  }
}

export default async function BlogPage() {
  const wpImages = await getWpImages();

  const slugs = [
    'palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus',
    'palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
    'itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient',
    'dormir-dans-le-desert-agafay',
    'visiter-marrakech',
    'road-trip-a-lanzarote',
    'visiter-madrid-en-3-jours',
    'visiter-londres-en-1-semaine',
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog Voyage — MamZelles en vadrouille',
    description: "Blog voyage de deux amoureuses du monde : guides complets en Europe et en Asie, bons plans, adresses coups de cœur et conseils pour préparer vos voyages.",
    url: 'https://mamzellesenvadrouille.com/blog',
    isPartOf: {
      '@type': 'WebSite',
      name: 'MamZelles en vadrouille',
      url: 'https://mamzellesenvadrouille.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MamZelles en vadrouille',
      url: 'https://mamzellesenvadrouille.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mamzellesenvadrouille.com/icon.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          url: 'https://mamzellesenvadrouille.com/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus',
          name: 'Palawan : de Puerto Princesa à Port Barton',
        },
        {
          '@type': 'ListItem',
          position: 2,
          url: 'https://mamzellesenvadrouille.com/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
          name: 'Palawan : Coron et El Nido, le joyau des Philippines',
        },
        {
          '@type': 'ListItem',
          position: 3,
          url: 'https://mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient',
          name: 'Voyage aux Philippines : itinéraire de 3 semaines',
        },
        {
          '@type': 'ListItem',
          position: 4,
          url: 'https://mamzellesenvadrouille.com/dormir-dans-le-desert-agafay',
          name: "Dormir dans le désert d'Agafay, une expérience inoubliable !",
        },
        {
          '@type': 'ListItem',
          position: 5,
          url: 'https://mamzellesenvadrouille.com/visiter-marrakech',
          name: 'Marrakech, tous les secrets pour découvrir la ville rouge & son effervescence !',
        },
        {
          '@type': 'ListItem',
          position: 6,
          url: 'https://mamzellesenvadrouille.com/road-trip-a-lanzarote',
          name: "Une semaine à Lanzarote, Road trip sur l'île aux 300 volcans !",
        },
        {
          '@type': 'ListItem',
          position: 7,
          url: 'https://mamzellesenvadrouille.com/visiter-madrid-en-3-jours',
          name: 'Visiter Madrid en 3 jours : itinéraire et bons plans',
        },
        {
          '@type': 'ListItem',
          position: 8,
          url: 'https://mamzellesenvadrouille.com/visiter-londres',
          name: 'Visiter Londres : que faire en 7 jours par quartier',
        },
      ],
    },
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAV */}
      <section className="hero hero-blog">
        <Navbar activePage="blog" />
        <img className="hero-bg" src="/hero-blog.webp" alt="Blog voyages MamZelles en vadrouille" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Notre blog<br /><em>voyages</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Inspirations, itinéraires & bons plans<br />pour nourrir vos envies d&apos;ailleurs.</p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="blog-section">
        <div className="blog-intro">
          <p className="eyebrow-dark">Nos articles</p>
          <h2 className="home-h2">Des destinations pour <em>vous inspirer</em></h2>
        </div>
        <div className="blog-grid">
          {articles.map((article, i) => {
            const slug = slugs[i];
            const imgSrc = article.localImage || wpImages[slug] || '/home-hero.webp';
            const isExternal = article.url.startsWith('http');
            return (
              <a
                key={i}
                href={article.url}
                {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                className="blog-card"
              >
                <div className="blog-card-img-wrap">
                  <img src={imgSrc} alt={article.titre} className={`blog-card-img${article.localImage === '/Madrid.webp' ? ' madrid' : ''}`} loading="lazy" />
                  <span className="blog-card-cat">{article.categorie}</span>
                </div>
                <div className="blog-card-body">
                  <h3 className="blog-card-title">{article.titre}</h3>
                  <span className="blog-card-read">Lire l&apos;article →</span>
                </div>
              </a>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="home-cta">
        <img src="/cta.webp" alt="" className="home-cta-bg" />
        <div className="home-cta-overlay" />
        <div className="home-cta-content">
          <p className="eyebrow">Votre voyage sur mesure</p>
          <h2>Ces destinations<br />vous font <em>rêver ?</em></h2>
          <p className="home-cta-sub">Dites-nous ce que vous imaginez.<br />On s&apos;occupe du reste.</p>
          <a href="/formules#formulaire" className="btn-gold-outline-hero">Créer mon voyage</a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-col">
            <div className="footer-logo-wrap">
              <span className="footer-logo-main">MamZelles en vadrouille</span>
              <span className="footer-logo-sub">Créatrices de voyages sur mesure</span>
            </div>
          </div>
          <div className="footer-col-sep" />
          <div className="footer-col">
            <a href="https://instagram.com/mamzellesenvadrouille" target="_blank" rel="noopener noreferrer" className="footer-social-item">
              <div className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </div>
              <div className="footer-social-text">
                <span className="footer-social-label">Suivez nos aventures</span>
                <span className="footer-social-value">@mamzellesenvadrouille</span>
              </div>
            </a>
          </div>
          <div className="footer-col-sep" />
          <div className="footer-col">
            <a href="mailto:contact@mamzellesenvadrouille.com" className="footer-social-item">
              <div className="footer-social-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="footer-social-text">
                <span className="footer-social-label">Écrivez-nous</span>
                <span className="footer-social-value">contact@mamzellesenvadrouille.com</span>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 MamZelles en vadrouille — Tous droits réservés · <a href="/confidentialite" style={{ color: 'rgba(26,21,18,0.5)', fontSize: '12px', textDecoration: 'underline' }}>Politique de confidentialité</a>
        </div>
      </footer>

    </div>
  );
}
