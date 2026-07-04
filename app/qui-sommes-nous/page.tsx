import type { Metadata } from 'next';
import InstagramFeed from './InstagramFeed';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Travel Planners & Voyage sur Mesure | MamZelles en vadrouille',
  description: "Amélie & Laurie, travel planners et créatrices de voyages sur mesure. Vanlife et escapades autour du monde — le voyage comme une façon de vivre.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/qui-sommes-nous' },
  openGraph: {
    title: 'Travel Planners & Voyage sur Mesure | MamZelles en vadrouille',
    description: "Amélie & Laurie, travel planners et créatrices de voyages sur mesure. Vanlife et escapades autour du monde — le voyage comme une façon de vivre.",
    url: 'https://mamzellesenvadrouille.com/qui-sommes-nous',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/hero-nous.webp', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Travel Planners & Voyage sur Mesure | MamZelles en vadrouille',
    description: "Amélie & Laurie, travel planners et créatrices de voyages sur mesure. Vanlife et escapades autour du monde — le voyage comme une façon de vivre.",
    images: ['https://mamzellesenvadrouille.com/hero-nous.webp'],
  },
};

export default function QuiSommesNous() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    name: 'Travel Planners & Voyage sur Mesure | MamZelles en vadrouille',
    description: "Amélie & Laurie, travel planners et créatrices de voyages sur mesure. Vanlife et escapades autour du monde — le voyage comme une façon de vivre.",
    url: 'https://mamzellesenvadrouille.com/qui-sommes-nous',
    mainEntity: {
      '@type': 'Organization',
      name: 'MamZelles en vadrouille',
      url: 'https://mamzellesenvadrouille.com',
      foundingLocation: 'Antibes, France',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mamzellesenvadrouille.com/icon.png',
      },
    },
  };

  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="hero qsn-hero">
        <Navbar activePage="qui-sommes-nous" />
        <img className="hero-bg" src="/hero-nous.webp" alt="Amélie et Laurie, travel planners MamZelles en vadrouille" loading="eager" />
        <div className="hero-overlay" />
        <div className="qsn-hero-content">
          <h1 className="qsn-hero-h1">Le voyage<br />comme une façon<br /><em>de vivre.</em></h1>
          <div className="hero-rule" />
          <p className="qsn-hero-sub">MamZelles en vadrouille, c&apos;est avant tout<span className="qsn-m-br"></span>une histoire de vie,<span className="qsn-dt-br"></span> de voyages et de moments<span className="qsn-m-br"></span>partagés depuis plus de 13 ans.</p>
        </div>
      </section>

      {/* NOTRE HISTOIRE */}
      <section className="qsn-histoire">
        <div className="qsn-histoire-photos">
          <img src="/nous.webp" alt="Amélie et Laurie" loading="lazy" className="qsn-histoire-img" />
          <img src="/nous-et-aladdin.webp" alt="Nous et Aladdin" loading="lazy" className="qsn-histoire-img-2" />
        </div>
        <div className="qsn-histoire-left">
          <p className="eyebrow-dark">Notre histoire</p>
          <h2 className="qsn-histoire-h2">Une rencontre,<br />une <em>évidence.</em></h2>
          <div className="home-rule" />
          <p className="qsn-histoire-text">Nous nous sommes rencontrées il y a plus de 13 ans dans un foyer d&rsquo;accueil d&rsquo;urgence où nous travaillions toutes les deux comme éducatrices spécialisées. Depuis, nous avançons ensemble dans la vie comme dans les voyages, avec la même vision de l&rsquo;amour, les mêmes valeurs et cette envie profonde de profiter pleinement de chaque instant.</p>
          <p className="qsn-histoire-text">Aujourd&rsquo;hui, nous vivons à Antibes avec notre bébé poilu Aladdin de<br />15 ans, toujours prêt à nous suivre dans nos vadrouilles.</p>
          <p className="qsn-histoire-text">Quelques mois seulement après notre rencontre, nous partions pour Londres pour notre tout premier voyage à deux. Un départ qui a marqué le début d&rsquo;une longue série d&rsquo;aventures, de découvertes et de souvenirs aux quatre coins du monde.</p>
          <p className="qsn-histoire-text">Au fil des années, les voyages sont devenus une véritable partie de notre équilibre. Ils nourrissent cette envie constante d&rsquo;explorer, de s&rsquo;émerveiller et d&rsquo;apprécier les moments les plus simples.</p>

        </div>
      </section>

      {/* VANLIFE */}
      <section className="qsn-vanlife">
        <div className="qsn-vanlife-img-wrap">
          <img src="/Elisabeth.webp" alt="Notre vanlife en France et Espagne" loading="lazy" className="qsn-vanlife-img" />
        </div>
        <div className="qsn-vanlife-content">
          <div className="qsn-vanlife-eyebrow">
            <span className="eyebrow-dark">Le voyage autrement</span>
          </div>
          <h2 className="qsn-vanlife-h2">La vanlife, entre liberté<br /><em>et simplicité.</em></h2>
          <p className="qsn-vanlife-text">Il y a 3 ans, nous avons aménagé un fourgon pour partir autrement. Avec notre chien Aladdin, nous avons parcouru les routes de France et d&rsquo;Espagne, portées par le goût de l&rsquo;évasion, des découvertes et de la liberté.</p>
          <p className="qsn-vanlife-text">Pas d&rsquo;itinéraire figé, très peu de plans. Juste le plaisir de ralentir, de vivre dehors, de suivre notre rythme et de nous laisser porter au fil des rencontres et des paysages.</p>
          <p className="qsn-vanlife-text">La vanlife nous a appris à apprécier la simplicité, l&rsquo;instant présent et ces petits moments qui rendent un voyage inoubliable.</p>
        </div>
      </section>

      {/* INSPIRATIONS */}
      <section className="qsn-inspi">
        <div className="qsn-inspi-left">
          <p className="eyebrow-dark">Ce qui nous anime</p>
          <h2 className="qsn-inspi-h2">Notre vision <em>du voyage</em></h2>
          <p className="qsn-inspi-text">Nous aimons les voyages vrais, ceux qui laissent une trace. Prendre le temps, sortir des sentiers battus, rencontrer, se laisser surprendre et profiter de chaque instant.</p>
          <p className="qsn-inspi-text">Pour nous, voyager ne se résume pas à découvrir de nouveaux lieux, mais à s&rsquo;imprégner de l&rsquo;atmosphère d&rsquo;un endroit, toujours avec respect pour ses cultures, sa nature et ses habitants.</p>
          <p className="qsn-inspi-text">C&rsquo;est cette vision du voyage que nous mettons au cœur de chaque itinéraire que nous créons pour vous.</p>
        </div>
        <div className="qsn-inspi-photos">
          <img src="/inspi-1.webp" alt="Inspiration voyage" className="qsn-inspi-img" />
          <img src="/inspi-2.webp" alt="Inspiration voyage" className="qsn-inspi-img" />
          <img src="/inspi-3.webp" alt="Inspiration voyage" className="qsn-inspi-img" />
        </div>
      </section>

      <InstagramFeed />

      {/* MERCI */}
      <section className="qsn-merci">
        <img src="/sunset-qui-sommes-nous.webp" alt="" className="qsn-merci-bg" />
        <div className="qsn-merci-overlay" />
        <div className="qsn-merci-card">
          <h2 className="qsn-merci-h2">On a hâte de voyager <em>avec vous</em></h2>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
  );
}
