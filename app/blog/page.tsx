import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import NewsletterForm from '../components/NewsletterForm';

export const metadata: Metadata = {
  title: 'Blog Voyage — MamZelles en Vadrouille',
  description: "Blog voyage de deux amoureuses du monde : guides complets en Europe et en Asie, bons plans, adresses coups de cœur et conseils pour préparer vos voyages.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/blog' },
  openGraph: {
    title: 'Blog Voyage — MamZelles en Vadrouille',
    description: "Blog voyage de deux amoureuses du monde : guides complets en Europe et en Asie, bons plans, adresses coups de cœur et conseils pour préparer vos voyages.",
    url: 'https://mamzellesenvadrouille.com/blog',
    siteName: 'MamZelles en Vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/hero-blog.webp', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog Voyage — MamZelles en Vadrouille',
    description: 'Blog voyage de deux amoureuses du monde : guides complets en Europe et en Asie, bons plans, adresses coups de cœur et conseils pour préparer vos voyages.',
    images: ['https://mamzellesenvadrouille.com/hero-blog.webp'],
  },
};

const articles = [
  {
    titre: '4 jours à Berlin — Entre mémoire, liberté et contre-culture',
    url: '/visiter-berlin-en-4-jours',
    image: null,
    localImage: '/related/Berlin-article.webp',
    categorie: 'Allemagne',
  },
  {
    titre: "Lanzarote — Une semaine sur l'île aux 300 volcans",
    url: '/road-trip-a-lanzarote',
    image: null,
    localImage: '/related/Lanzarote-article.webp',
    categorie: 'Espagne',
  },
  {
    titre: '3 jours à Madrid — Les incontournables de la capitale espagnole',
    url: '/visiter-madrid-en-3-jours',
    image: null,
    localImage: '/related/Madrid-article.webp',
    categorie: 'Espagne',
  },
  {
    titre: "Londres — L'essentiel en une semaine",
    url: '/visiter-londres',
    image: null,
    localImage: '/related/Londres-article.webp',
    categorie: 'Europe',
  },
  {
    titre: "Agafay — Une nuit dans le désert de Marrakech",
    url: '/dormir-dans-le-desert-agafay',
    image: null,
    localImage: '/related/Agafay-article.webp',
    categorie: 'Maroc',
  },
  {
    titre: 'Marrakech — La ville rouge, entre tradition et effervescence',
    url: '/visiter-marrakech',
    image: null,
    localImage: '/related/Marrakech-article.webp',
    categorie: 'Maroc',
  },
  {
    titre: "Itinéraire Philippines — 3 semaines pour découvrir la perle de l'Orient",
    url: '/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient',
    image: null,
    localImage: '/related/Philippines-articles.webp',
    categorie: 'Philippines',
  },
  {
    titre: 'Palawan — El Nido & Coron, le joyau des Philippines',
    url: '/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
    image: null,
    localImage: '/related/Palawan-article.webp',
    categorie: 'Philippines',
  },
  {
    titre: 'Palawan — De Puerto Princesa à Port Barton',
    url: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus',
    image: null,
    localImage: '/related/Port-Barton-article.webp',
    categorie: 'Philippines',
  },
];

export default async function BlogPage() {

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Blog Voyage — MamZelles en Vadrouille',
    description: "Blog voyage de deux amoureuses du monde : guides complets en Europe et en Asie, bons plans, adresses coups de cœur et conseils pour préparer vos voyages.",
    url: 'https://mamzellesenvadrouille.com/blog',
    isPartOf: {
      '@type': 'WebSite',
      name: 'MamZelles en Vadrouille',
      url: 'https://mamzellesenvadrouille.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MamZelles en Vadrouille',
      url: 'https://mamzellesenvadrouille.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mamzellesenvadrouille.com/icon.png',
      },
    },
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: articles.map((a, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        url: `https://mamzellesenvadrouille.com${a.url}`,
        name: a.titre,
      })),
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
        <img className="hero-bg" src="/hero-blog.webp" alt="Blog voyages MamZelles en Vadrouille" />
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
            const imgSrc = article.localImage || '/home-hero.webp';
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

      {/* NEWSLETTER */}
      <NewsletterForm />

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
      <Footer />

    </div>
  );
}
