import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Notre Blog Voyages | MamZelles en vadrouille',
  description: 'Inspirations, itinéraires et bons plans voyage par MamZelles en vadrouille. Découvrez nos articles sur les Philippines, le Maroc, l\'Espagne et bien plus.',
};

const articles = [
  {
    titre: 'Palawan : De Puerto Princesa à Port Barton, hors des sentiers battus',
    url: 'https://mamzellesenvadrouille.com/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus/',
    image: 'https://mamzellesenvadrouille.com/wp-content/uploads/2024/01/port-barton.jpg',
    localImage: null,
    categorie: 'Philippines',
  },
  {
    titre: 'Palawan : Entre El Nido & Coron, découvrez le joyau des Philippines !',
    url: 'https://mamzellesenvadrouille.com/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines/',
    image: null,
    localImage: null,
    categorie: 'Philippines',
  },
  {
    titre: 'Itinéraire Philippines : 3 semaines pour découvrir la perle de l\'Orient !',
    url: 'https://mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient/',
    image: null,
    localImage: '/Philippines.jpg',
    categorie: 'Philippines',
  },
  {
    titre: 'Dormir dans le désert d\'Agafay, une expérience inoubliable !',
    url: 'https://mamzellesenvadrouille.com/dormir-dans-le-desert-agafay/',
    image: null,
    localImage: '/Agafay.jpg',
    categorie: 'Maroc',
  },
  {
    titre: 'Marrakech, tous les secrets pour découvrir la ville rouge & son effervescence !',
    url: 'https://mamzellesenvadrouille.com/visiter-marrakech/',
    image: null,
    localImage: null,
    categorie: 'Maroc',
  },
  {
    titre: 'Une semaine à Lanzarote, Road trip sur l\'île aux 300 volcans !',
    url: 'https://mamzellesenvadrouille.com/road-trip-a-lanzarote/',
    image: null,
    localImage: null,
    categorie: 'Espagne',
  },
  {
    titre: '3 jours à Madrid : découvrez les lieux incontournables de la capitale espagnole !',
    url: 'https://mamzellesenvadrouille.com/visiter-madrid-en-3-jours/',
    image: null,
    localImage: '/Madrid.jpg',
    categorie: 'Espagne',
  },
  {
    titre: 'Visiter Londres en 1 semaine : l\'essentiel par quartier, infos pratiques & bons plans',
    url: 'https://mamzellesenvadrouille.com/visiter-londres-en-1-semaine/',
    image: null,
    localImage: null,
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
      `https://mamzellesenvadrouille.com/wp-json/wp/v2/posts?slug=${slugs.join(',')}&_embed&per_page=10`,
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

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* NAV */}
      <section className="hero hero-blog">
        <nav className="nav">
          <div className="logo">
            <span className="logo-main">MamZelles en vadrouille</span>
            <span className="logo-sub">Créatrices de voyages sur mesure</span>
          </div>
          <div className="nav-links">
            <a href="/">Accueil</a>
            <a href="/formules">Nos formules</a>
            <a href="/blog" className="nav-active">Notre blog voyages</a>
            <a href="/qui-sommes-nous">Qui sommes-nous ?</a>
          </div>
          <a href="/formules#formulaire" className="nav-cta">Contact</a>
        </nav>
        <img className="hero-bg" src="/hero-blog.jpg" alt="" />
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
            const imgSrc = article.localImage || wpImages[slug] || '/home-hero.jpg';
            return (
              <a
                key={i}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="blog-card"
              >
                <div className="blog-card-img-wrap">
                  <img src={imgSrc} alt="" className="blog-card-img" loading="lazy" />
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
        <img src="/cta.jpg" alt="" className="home-cta-bg" />
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
          © 2026 MamZelles en vadrouille — Tous droits réservés
        </div>
      </footer>

    </div>
  );
}
