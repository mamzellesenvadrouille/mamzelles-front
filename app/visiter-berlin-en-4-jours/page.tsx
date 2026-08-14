import type { Metadata } from 'next';
import './berlin.css';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';
import PratiqueOnglets from '../components/PratiqueOnglets';
import Footer from '../components/Footer';
import ArticlesLies from '../components/ArticlesLies';

export const metadata: Metadata = {
  title: "Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses",
  description: "Que faire à Berlin en 4 jours ? Prenzlauer Berg, East Side Gallery, Kreuzberg, Teufelsberg… notre parcours détaillé, avec toutes nos pépites locales.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/visiter-berlin-en-4-jours' },
  openGraph: {
    title: "Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses",
    description: "Notre itinéraire complet pour visiter Berlin en 4 jours, entre mémoire, histoire, street art et contre-culture, avec tous nos bons plans pratiques.",
    url: 'https://mamzellesenvadrouille.com/visiter-berlin-en-4-jours',
    siteName: 'MamZelles en Vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/Berlin.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR',
    type: 'article',
    authors: ['MamZelles en Vadrouille'],
  },
};

export default function VisiterBerlinPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses',
    description: "Que faire à Berlin en 4 jours ? Prenzlauer Berg, East Side Gallery, Kreuzberg, Teufelsberg… notre parcours détaillé, avec toutes nos pépites locales.",
    image: 'https://mamzellesenvadrouille.com/Berlin.webp',
    datePublished: '2026-08-01',
    dateModified: '2026-08-01',
    author: {
      '@type': 'Organization',
      name: 'MamZelles en Vadrouille',
      url: 'https://mamzellesenvadrouille.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MamZelles en Vadrouille',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mamzellesenvadrouille.com/icon.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': 'https://mamzellesenvadrouille.com/visiter-berlin-en-4-jours',
    },
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* HERO */}
      <section className="hero hero-article" style={{ overflowX: 'hidden' }}>
        <Navbar activePage="blog" />
        <img className="hero-bg" src="/Berlin.webp" alt="Visiter Berlin en 4 jours" style={{objectPosition: 'center 43%'}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>4 jours à Berlin<br /><em>Entre mémoire, liberté et contre-culture</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Une capitale libre, brute et vibrante qui bouscule<br className="desktop-only-br" /> toutes les idées reçues. Notre itinéraire complet<span className="desktop-only-inline">, jour par jour</span>.</p>
        </div>
      </section>

    </div>

      {/* BANDEAU EN BREF */}
      <div className="article-bref-bar">
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>4 jours</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <span>Mai à sept.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"/></svg>
          <span>120-160 €/j/pers.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M14.8 9a2 2 0 0 0-2-1.5h-1.6a2 2 0 0 0 0 4h1.6a2 2 0 0 1 0 4H11a2 2 0 0 1-2-1.5"/><line x1="12" y1="6" x2="12" y2="18"/></svg>
          <span>Euro (€)</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Allemand, Anglais</span>
        </div>
      </div>

      {/* COUP DE COEUR */}
      <div className="article-coup-de-coeur">
        <div className="article-cdcr-header">
          <span className="article-cdcr-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#c8956c" stroke="#c8956c" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </span>
          <h2>Pourquoi nous avons adoré Berlin</h2>
        </div>
        <div className="article-cdcr-grid">
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre quartier coup de cœur</span><span className="article-cdcr-value">→ Prenzlauer Berg</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le spot le plus iconique</span><span className="article-cdcr-value">→ L’East Side Gallery</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le moment le plus magique</span><span className="article-cdcr-value">→ Le sunset à Teufelsberg</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">À tester<br className="tablet-only-br" /> sans hésiter</span><span className="article-cdcr-value">→ L’Hôtel Oderberger &amp; sa piscine</span></div>
        </div>
      </div>

      <div className="article-layout article-berlin">
        <main className="article-main">

          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title"><svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)" stroke="none" style={{marginRight:'8px', verticalAlign:'middle'}}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>Sommaire de l’article</h2>
            <ul className="article-toc-list">
              <li><a href="#jour-1-prenzlauer-berg">Jour 1 - Prenzlauer Berg &amp; l’île aux Musées</a></li>
              <li><a href="#jour-2-berlin-est">Jour 2 - Holzmarkt, East Side Gallery, Kreuzberg &amp; Tempelhof</a></li>
              <li><a href="#jour-3-centre-historique">Jour 3 - Cœur historique et politique, jusqu’à Teufelsberg</a></li>
              <li><a href="#jour-4-mauerpark">Jour 4 - Mauerpark &amp; derniers instants</a></li>
              <li><a href="#pratique">Informations pratiques</a></li>
            </ul>
          </nav>

          {/* INTRO */}
          <section className="article-section">
          <p className="article-intro">Pour mes 40 ans, ma femme m’a offert un cadeau dont je me souviendrai longtemps : un week-end surprise à Berlin. Je ne savais rien. Absolument rien. Elle avait tout organisé, tout anticipé : les valises, les sacs, les trajets en train et en avion, l’hôtel.</p>
          <p>Depuis quelque temps, on parlait de découvrir Berlin, intriguées par cette ville à la réputation si particulière. Mais on était très loin de s’attendre à ça. Berlin nous a complètement happées, bousculées, fascinées. Une ville libre, contrastée, surprenante, brute, vibrante… et profondément marquante !</p>
          </section>

          {/* JOUR 1 */}
          <section id="jour-1-prenzlauer-berg" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 1</span>
              <h2>Une journée pleine de surprises et de belles découvertes</h2>
            </div>
            <p>Nous sommes parties à 8h du matin. Ma femme m’a fait croire que nous prenions la voiture pour deux heures de route, mais en réalité, elle avait tout prévu...</p>
            <p>Direction la gare d’Antibes. Nous montons dans le train, cap vers l’Italie, sans que je sache encore où nous allons. En arrivant à la gare Nice Saint-Augustin, je comprends enfin : nous allons prendre l’avion. Une fois à l’aéroport, elle me révèle la destination surprise en m’offrant le guide de Berlin. Une annonce aussi inattendue qu’excitante !</p>
            <p>C’est parti pour quatre jours et trois nuits dans une ville qui allait nous surprendre bien plus que nous l’imaginions.</p>
            <h3>Arrivée à Berlin</h3>
            <p>Une fois arrivées à l’aéroport de Berlin, il faut encore rejoindre le centre-ville. Direction le terminal 1 pour prendre le train <strong>S-Bahn</strong> vers la gare centrale, la <strong>Hauptbahnhof (HBF)</strong>. Comptez 5 € par personne pour un ticket valable deux heures, largement suffisant pour rejoindre le centre.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/080.webp" alt="Arrivée à Berlin S-Bahn" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/081.webp" alt="Arrivée à Berlin S-Bahn" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/091.webp" alt="Arrivée à Berlin S-Bahn" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>À ce moment-là, je me laisse complètement porter, je ne sais absolument pas où nous allons. Ma femme me laisse simplement entendre qu’elle nous a réservé un petit hôtel. En sortant de la gare côté <strong>Europaplatz</strong>, nous prenons le tram <strong>M10</strong>, qui se trouve juste en face (S+U Berlin Hauptbahnhof), direction U <strong>Eberswalder Straße</strong>, le nord-est de Berlin.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/082.webp" alt="Tram M10 Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="/berlin-photos/083.webp" alt="Tram M10 Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>En sortant du tram, dans ce quartier, on est tout de suite plongées dans l’ambiance. Il y a du monde partout, des vélos, des trams, des bus qui passent sans arrêt… ça bouge dans tous les sens. On ressent immédiatement l’énergie de Berlin !</p>
            <h3>Prenzlauer Berg</h3>
            <p><strong>Prenzlauer Berg</strong> est situé dans l’ancien Berlin-Est. Il a gardé son architecture historique avec ses beaux immeubles anciens, ses grandes avenues bordées de grands arbres et ses places pleines de cafés et de terrasses.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/005.webp" alt="Prenzlauer Berg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/006.webp" alt="Prenzlauer Berg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>Aujourd’hui, il est considéré comme l’un des quartiers les plus agréables où séjourner à Berlin. On y trouve une ambiance locale et une vie de quartier authentiques : des petits restaurants, des coffee shops, des boutiques indépendantes, des marchés, mais aussi une vraie énergie urbaine.</p>
            <h4>Rüyam Gemüse Kebab, le meilleur de Berlin</h4>
            <p>Il est 15 heures quand nous débarquons dans le quartier de <strong>Prenzlauer Berg</strong> pour rejoindre notre hôtel. Nous n’avons toujours pas déjeuné. En chemin, nous tombons sur <strong>Rüyam Gemüse Kebab</strong>. Une véritable institution à Berlin ! Pas le choix que de s’y arrêter...</p>
            <p>Ici, on ne parle pas d’un kebab classique. Leur spécialité, le Gemüse Kebab : un mélange de viande grillée, de légumes rôtis (pommes de terre, poivrons…), de crudités ultra fraîches, de feta, d’une sauce maison à l’ail et épicée, le tout dans un pain croustillant !</p>
            <p>Kebabs avalés, nous poursuivons notre chemin vers l’hôtel.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/001.webp" alt="Rüyam Gemüse Kebab Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/002.webp" alt="Rüyam Gemüse Kebab Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour manger</span>
                  <span className="article-resto-tag">Street-food</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://www.google.com/maps/search/?api=1&query=R%C3%BCyam+Gem%C3%BCse+Kebab+Sch%C3%B6nhauser+Allee+44A+Berlin" target="_blank" className="article-resto-link-desktop">Rüyam Gemüse Kebab</a><a href="https://maps.app.goo.gl/jSrAKK6pASg2ErYn8?g_st=ic" target="_blank" className="article-resto-link-mobile">Rüyam Gemüse Kebab</a></p>
                  <p className="article-resto-sub">Kebab légendaire · Prenzlauer Berg</p>
                  <p>Copieux. Laurie n’a même pas réussi à finir le sien. Tellement bon, à tester absolument ! C’est le genre d’adresse où il y a souvent la queue, mais où l’attente fait presque partie de l’expérience.</p>
                </div>
              </div>
            </div>
            <h4>Hôtel Oderberger, notre pépite berlinoise</h4>
            <p>Wouahou… Mon Amour, c’est là qu’on va dormir ?</p>
            <p>En arrivant devant l’hôtel, on est tout de suite surprises par le bâtiment. La façade de l’<strong>Oderberger</strong> a beaucoup de charme, avec son style ancien et son côté hors du temps. Un charme berlinois un peu brut mais raffiné à la fois. On sent immédiatement le cachet du lieu et l’histoire qui l’accompagne.</p>
            <p>En y entrant, on a l’impression d’être dans un ancien bâtiment public majestueux, transformé en un lieu design, sans qu’il ait perdu son âme. Les murs et éléments historiques ont été conservés. Les chambres et les espaces communs sont très contemporains : bois, lignes épurées, lumière tamisée, minimalisme chic sans être prétentieux. On est loin du palace classique... C’est un luxe discret, presque industriel, avec un mélange d’histoire et de modernité. Ça donne déjà le ton du séjour !</p>
            <div className="article-gallery-4">
              <img src="/berlin-photos/095.webp" alt="Hôtel Oderberger Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/096.webp" alt="Hôtel Oderberger Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/097.webp" alt="Hôtel Oderberger Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/098.webp" alt="Hôtel Oderberger Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-tip-with-gallery">
              <div className="article-tip-with-gallery-row">
                <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                <div><strong className="article-tip-with-gallery-title">Bon à savoir</strong><p>L’hôtel est installé dans un ancien bain public du début des années 1900, à une époque où beaucoup d’appartements n’avaient pas encore de salle de bain. Fermé en 1986, il est resté abandonné pendant des décennies avant une restauration monumentale. Aujourd’hui, le joyau de l’hôtel Oderberger, c’est son bassin <strong style={{whiteSpace: 'nowrap', color: 'var(--dark)'}}>néo-Renaissance</strong>, avec ses mosaïques, ses colonnes, et surtout sa verrière.</p></div>
              </div>
              <div className="article-gallery-2" style={{marginTop: '16px', marginLeft: '32px', marginRight: '32px'}}>
                <img src="/berlin-photos/093.webp" alt="Piscine Hôtel Oderberger Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
                <img src="/berlin-photos/094.webp" alt="Piscine Hôtel Oderberger Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              </div>
              <div className="article-tip-with-gallery-row" style={{marginTop: '16px'}}>
                <span className="article-tip-icon" style={{visibility: 'hidden'}}><svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 2"/></svg></span>
                <p style={{fontSize: '13px', color: '#555', lineHeight: '1.9', margin: 0}}>La piscine est accessible à tous (même sans être client) : vous pouvez <a href="https://pretix.eu/oderberger/oderberger/" target="_blank" rel="noopener noreferrer" className="article-link">réserver un créneau</a> pour y venir nager mais aussi pour privatiser l’endroit.</p>
              </div>
            </div>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>Pour dormir</span>
                  <span className="article-resto-tag">★★★★</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://www.google.com/maps/search/?api=1&query=Hotel+Oderberger+Oderberger+Stra%C3%9Fe+57+Berlin" target="_blank" className="article-resto-link-desktop">Hôtel Oderberger</a><a href="https://maps.app.goo.gl/GrimFYRiRZyooVA27?g_st=ic" target="_blank" className="article-resto-link-mobile">Hôtel Oderberger</a></p>
                  <p className="article-resto-sub">Oderberger Straße 57, 10435 Berlin · Prenzlauer Berg</p>
                </div>
              </div>
            </div>
            <p>Après notre installation dans notre magnifique chambre, trop excitées de découvrir cette ville, nous partons directement pour une petite balade dans le quartier autour de l’hôtel, avant de rejoindre tranquillement le centre de Berlin.</p>
            <h4>Un détour par le Kulturbrauerei</h4>
            <p>Nous commençons notre balade par le <strong>Kulturbrauerei</strong>, qui se trouve à deux pas de l’hôtel. C’est un immense ancien complexe de brasserie en briques rouges reconverti en lieu culturel. Derrière ses façades industrielles se cache un lieu vivant, très berlinois où se mêlent bars, restaurants, supérettes, cinéma, et marchés ou concerts en plein air selon les jours. L’endroit est franchement sympa pour boire un verre dans une ambiance locale, un peu industrielle-chic, loin du Berlin trop « carte postale » des quartiers touristiques.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/003.webp" alt="Kulturbrauerei Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/004.webp" alt="Kulturbrauerei Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <h4>Flânerie sur Kastanienallee</h4>
            <p>Nous continuons ensuite vers <strong>Kastanienallee</strong>, l’une des rues les plus agréables du quartier de Prenzlauer Berg, également à quelques minutes à pied de notre hôtel. Cafés cool, jolies boutiques, friperies, restos et terrasses se succèdent dans une ambiance berlinoise à la fois branchée et décontractée. Un petit côté bobo-chic mais franchement sympa pour se balader sans regarder l’heure.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/007.webp" alt="Kastanienallee Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/008.webp" alt="Kastanienallee Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <h4>Au pied du Wasserturm</h4>
            <p>Non loin de là, nous prenons la direction du <strong>Wasserturm</strong>, le <strong>plus ancien château d’eau</strong> de Berlin, construit au XIXe siècle. Véritable symbole du quartier, il veille sur les jolies rues résidentielles environnantes et apporte une ambiance plus calme, presque village, au cœur de la ville. Juste derrière, se trouve un petit parc. Comme des gosses, un petit tour de tourniquet et c’est reparti !</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/009.webp" alt="Wasserturm Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/010.webp" alt="Wasserturm Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <h4>Pause douceur à Kollwitzplatz</h4>
            <p>Nous poursuivons ensuite vers <strong>Kollwitzplatz</strong>, une charmante place au cœur de Prenzlauer Berg. Ici, l’ambiance est plus douce. C’est une place arborée, bordée de jolies façades, avec des terrasses pleines de vie et un petit parc où traînent familles et Berlinois. On découvre ici un Berlin plus calme, presque un esprit de village au cœur de la ville. Attention, allergiques s’abstenir... On a rarement vu autant de pollen au mètre carré qu’ici !</p>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U2 jusqu’à la station Eberswalder Straße.</p></div>
                </div>
              </div>
            </div>
            <h3>Mitte</h3>
            <h4>Haus Schwarzenberg, l’esprit alternatif</h4>
            <p>En descendant vers le centre-ville, nous tombons sur <strong>Haus Schwarzenberg</strong>. Et là, changement total d’ambiance : une cour cachée derrière un porche discret, avec un petit bar sur la gauche. L’atmosphère est immédiatement plus alternative, très Berlin underground. Les murs sont couverts de street art, de graffitis, de collages.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/011.webp" alt="Haus Schwarzenberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/012.webp" alt="Haus Schwarzenberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>En avançant dans la cour, sur la droite, on trouve un distributeur appelé <strong>art-o-mat</strong>. Contre quelques euros, on repart avec une mini œuvre artistique (illustration, photo, badge, mini sculpture, etc.), souvent unique ou en série limitée. Ce sont d’anciens distributeurs à cigarettes reconvertis, très répandus à Berlin dans les quartiers alternatifs.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/013.webp" alt="Art-o-mat Haus Schwarzenberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/014.webp" alt="Art-o-mat Haus Schwarzenberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/015.webp" alt="Art-o-mat Haus Schwarzenberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>On s’installe en terrasse pour boire un verre et prendre le temps de profiter de cette ambiance hors du temps. Au fond de la cour, un autre bar et quelques petites boutiques : un petit monde à part, en plein centre-ville.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/016.webp" alt="Haus Schwarzenberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/017.webp" alt="Haus Schwarzenberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <h4>Direction Hackescher Markt</h4>
            <p>C’est reparti ! Nous rejoignons et traversons <strong>Hackescher Markt</strong>. C’est un coin très vivant du centre de Berlin. Un véritable lieu de vie où se mêlent habitants, artistes, touristes et Berlinois venus profiter des nombreux cafés, restaurants et boutiques.</p>
            <p>Le quartier est surtout connu pour les <strong>Hackesche Höfe</strong>. Bon, on ne va pas vous le cacher, on les a loupées. C’est en rédigeant cet article qu’on a découvert leur existence. C’est un ensemble de cours intérieures restaurées parmi les plus belles de la ville. Derrière les façades discrètes se cacheraient des galeries d’art, des ateliers, des boutiques originales et de charmants cafés. En même temps, il y a tellement de choses à voir à Berlin !</p>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À ne pas manquer</strong><p>En se promenant dans Berlin, on remarque parfois de petites plaques en laiton incrustées dans le sol, devant certaines maisons. Elles sont appelées <strong>Stolpersteine</strong>. C’est assez touchant de savoir qu’elles sont là pour rendre hommage aux victimes du nazisme ayant vécu à ces adresses avant d’être déportées ou persécutées. Sur chaque plaque figurent un nom, une date ainsi que quelques informations sur son destin. Une façon discrète mais profondément émouvante de faire vivre la mémoire, directement dans les rues de la ville. Elles sont présentes notamment à Prenzlauer Berg, Mitte, Kreuzberg, ou encore Charlottenburg.</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="/berlin-photos/018.webp" alt="Stolpersteine Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/019.webp" alt="Stolpersteine Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">S-Bahn</span><p>Lignes S3, S5, S7 ou S9 jusqu’à la station Hackescher Markt.</p></div>
                </div>
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U8 jusqu’à la station Weinmeisterstraße.</p></div>
                </div>
              </div>
            </div>
            <h3>James-Simon-Park</h3>
            <h4>Coucher de soleil sur la Spree</h4>
            <p>Nous sommes à quelques minutes à pied de <strong>James-Simon-Park</strong> et <strong>Monbijou Park</strong>. Ils sont côte à côte. Ces deux parcs sont au bord de la <strong>Spree</strong>, la rivière qui traverse Berlin.</p>
            <p>L’endroit est super sympa. Ambiance détendue, locale, avec des gens qui traînent en groupe, qui jouent de la gratte, qui dansent, qui boivent un coup...</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>C’est assez surprenant au début, mais à Berlin (et plus largement en Allemagne), on peut légalement boire de l’alcool dans la rue et dans les parcs. Vous verrez souvent des gens avec une bière à la main sur un banc, un verre posé sur l’herbe, ou un apéro improvisé au bord de la Spree. Une habitude bien ancrée dans le quotidien berlinois.</p></div>
            </div>
            <p>Alors, on se la joue Berlinoises. On s’installe dans l’herbe du côté de <strong>James-Simon-Park</strong> et on profite du moment. De là, on a une vue plongeante sur l’<strong>île aux Musées</strong>.</p>
            <p><strong>Un peu d’histoire.</strong> L’<strong>île aux Musées</strong> est l’un des ensembles culturels les plus importants d’Europe. Plusieurs grands musées historiques y sont regroupés, construits entre le XIXe et le début du XXe siècle, sur une île entourée par la Spree. Le site est classé au patrimoine mondial de l’UNESCO.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/020.webp" alt="Île aux Musées Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/021.webp" alt="Île aux Musées Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/022.webp" alt="Île aux Musées Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>Vous l’aurez compris, cet endroit fait partie des incontournables. Le gros atout du lieu, c’est l’ambiance, mais aussi la vue. On a un très beau panorama sur la rivière, les péniches, et surtout sur la magnifique cathédrale qui s’illumine à la tombée de la nuit : le <strong>Berliner Dom</strong>, avec son immense dôme vert qu’on peut voir de loin. Ici, c’est clairement un spot idéal pour le coucher de soleil, alors on en profite. La lumière dorée sur l’<strong>île aux Musées</strong>, c’est magnifique !</p>
            <div className="article-book">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>Pour réserver</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://gyg.me/P0FuQWIe" target="_blank" rel="noopener noreferrer">Croisière d’une heure sur la Spree</a></p>
                  <p className="article-resto-sub">En français · À partir de 22 €</p>
                  <p>Envie d'admirer le Berliner Dom et l'île aux Musées depuis l'eau ? Cette <a href="https://gyg.me/P0FuQWIe" target="_blank" rel="noopener noreferrer" className="article-link">croisière d'une heure sur la Spree</a> permet de voir la ville sous un autre angle.</p>
                </div>
              </div>
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U5 jusqu’à la station Museumsinsel.</p></div>
                </div>
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">S-Bahn</span><p>Lignes S3, S5, S7 ou S9 jusqu’à la station Hackescher Markt.</p></div>
                </div>
              </div>
            </div>
            <h3>Retour à Prenzlauer Berg</h3>
            <h4>Un Currywurst pour la route, le rituel berlinois</h4>
            <p>Le temps passe bien trop vite, il est déjà passé 22h. Après avoir bien profité du moment, nous reprenons le chemin de l’hôtel à pied, par un itinéraire différent, histoire de prolonger encore un peu la découverte.</p>
            <p>On passe alors devant <strong>Curry 61</strong>, une adresse incontournable pour goûter la Currywurst, la spécialité street food emblématique de Berlin, un peu le « snack national » de la ville. Allez, on se laisse tenter !</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/023.webp" alt="Curry 61 Currywurst Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/024.webp" alt="Curry 61 Currywurst Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>C’est très simple : une saucisse coupée en morceaux, recouverte d’une sauce tomate-ketchup épicée au curry, souvent servie avec des frites ou un petit pain, le tout dans une barquette en carton à manger debout dans la rue. Ce n’est pas de la grande gastronomie, mais plutôt un rituel berlinois du quotidien, rapide, pas cher, et qui se trouve partout. Pour nous, c’est clairement validé !</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour manger</span>
                  <span className="article-resto-tag">Street-food</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://www.google.com/maps/search/?api=1&query=Curry+61+Oranienburger+Stra%C3%9Fe+6+Berlin" target="_blank" className="article-resto-link-desktop">Curry 61</a><a href="https://maps.app.goo.gl/4mLX9xVmg7Kb1Bik7?g_st=ic" target="_blank" className="article-resto-link-mobile">Curry 61</a></p>
                  <p className="article-resto-sub">Currywurst culte · Mitte</p>
                  <p>Une institution berlinoise, réputée pour sa Currywurst généreuse et sa version végane tout aussi bluffante. Idéal pour un petit creux, à n’importe quel moment de la journée.</p>
                </div>
              </div>
            </div>
            <h4>Retour à l’hôtel Oderberger</h4>
            <p>C’est incroyable, à Berlin, la vie ne s’arrête jamais vraiment. La ville reste animée à toute heure. La nuit offre une toute autre ambiance. Les restaurants et les bars restent ouverts tard, certains commerces tournent même quasiment en continu. On peut trouver de quoi grignoter, de l’alcool, du tabac… bref, tout ce qu’il faut pour prolonger la soirée sans contrainte. Une ville qui semble vivre au rythme de ceux qui ont envie de profiter jusqu’au bout de la nuit.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/092.webp" alt="Berlin de nuit" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/089.webp" alt="Berlin de nuit" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/090.webp" alt="Berlin de nuit" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>En ce qui nous concerne, il est temps d’aller se coucher après cette première journée bien chargée, mais déjà hâte d’être à demain !</p>
          </section>

          {/* JOUR 2 */}
          <section id="jour-2-berlin-est" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h2>Une journée dans l’âme de Berlin-Est : entre histoire, street art et contre-culture</h2>
            </div>
            <p>Après une nuit bien méritée, premier réveil et premier petit-déjeuner dans le magnifique hôtel <strong>Oderberger</strong>. Un buffet très complet, autant salé que sucré, de quoi prendre des forces avant d’arpenter cette ville qui nous réserve encore bien des surprises...</p>
            <p>Direction l’<strong>Est de Berlin</strong> ! Ma femme nous avait organisé tout un programme, une vraie travel planner. Nous prenons le métro pour nous y rendre : premier spot à découvrir, le <strong>Holzmarkt 25</strong>.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Avant même d’y arriver, un détail attire notre attention : ces fameux tuyaux roses qui serpentent un peu partout, surgissant du sol de manière presque improbable. Nous découvrons qu’ils ne sont pas là par hasard ou pour faire beau. Berlin ayant été construite sur d’anciens marécages, ils servent à pomper les eaux souterraines afin d’éviter les infiltrations, notamment lors des travaux. Une curiosité urbaine devenue presque une signature visuelle de la ville.</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="/berlin-photos/025.webp" alt="Tuyaux roses Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="/berlin-photos/026.webp" alt="Tuyaux roses Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h3>Friedrichshain</h3>
            <h4>Holzmarkt 25, le village bohème au bord de la Spree</h4>
            <p>On comprend rapidement pourquoi cet endroit est souvent décrit comme l’un des lieux les plus « Berlin » de Berlin. Installé au bord de la <strong>Spree</strong>, ce lieu à l’esprit bohème, alternatif et artistique dégage une atmosphère unique. On a presque l’impression d’avoir découvert un petit village caché, à mille lieues de l’agitation urbaine, alors que la ville continue de vibrer tout autour.</p>
            <p>On déambule entre les cabanes en bois, sous les guirlandes suspendues, entre les terrasses improvisées et ces nombreux petits endroits où s’installer tranquillement. Tout semble nous inviter à ralentir. Alors on ralentit. On prend une bière bien fraîche dans l’une de ces cabanes et on s’installe au bord de l’eau. On profite du moment, presque les pieds dans l’eau.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/027.webp" alt="Holzmarkt Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/028.webp" alt="Holzmarkt Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/029.webp" alt="Holzmarkt Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>L’ambiance est décontractée, libre, sans artifices ni prise de tête. Côté food c’est simple et convivial : street food, pizzas, burgers, options veggie… Même si l’envie ne se fait pas sentir, on vous invite à passer voir les toilettes !</p>
            <h4>East Side Gallery, le mur devenu galerie à ciel ouvert</h4>
            <p>Après ce moment suspendu, à une vingtaine de minutes de marche, se trouve un lieu impossible à manquer quand on visite Berlin : la <strong>East Side Gallery</strong>. C’est en fait le plus long tronçon encore debout du mur de Berlin, transformé aujourd’hui en immense galerie d’art à ciel ouvert.</p>
            <p>Sur près d’1,3 kilomètre, des artistes du monde entier ont recouvert ce vestige de la séparation entre l’Est et l’Ouest avec des fresques colorées, engagées, parfois poétiques, parfois politiques. Ici, le béton chargé d’histoire est devenu un symbole de liberté et d’expression.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/030.webp" alt="East Side Gallery Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="/berlin-photos/031.webp" alt="East Side Gallery Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Impossible de ne pas s’arrêter devant certaines œuvres devenues iconiques, comme le célèbre baiser entre dirigeants communistes, souvent surnommé le baiser fraternel, ou encore les peintures pleines d’espoir qui parlent d’un monde sans frontières...</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/032.webp" alt="East Side Gallery fresques Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="/berlin-photos/033.webp" alt="East Side Gallery fresques Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Ce qui marque ici, c’est le contraste. D’un côté, des œuvres colorées, pleines de vie et de messages. De l’autre, on se rappelle qu’à cet endroit même, un mur séparait autrefois une ville entière, des familles et des proches pendant presque 30 ans. En longeant l’<strong>East Side Gallery</strong>, on passe entre art, mémoire et histoire.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/034.webp" alt="East Side Gallery Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/035.webp" alt="East Side Gallery Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <h4>RAW-Gelände, l’esprit chaotique de Berlin</h4>
            <p>Nous continuons notre parcours découverte, et à même pas 15 minutes à pied de là, se trouve le <strong>RAW-Gelände</strong>. C’est un immense ancien site industriel reconverti, dans le quartier de <strong>Friedrichshain</strong>.</p>
            <p>À l’origine, c’était un ancien dépôt de réparation ferroviaire (Reichsbahnausbesserungswerk, d’où « RAW »). L’ambiance ici est volontairement un peu « chaotique Berlin » : industrielle, underground, arty, parfois un peu déjantée. Si vous venez comme nous en journée, vous pourrez y flâner pour voir les fresques, boire un verre ou passer dans certains espaces culturels. Le soir, apparemment c’est une toute autre ambiance. Le lieu se transforme davantage en spot de fête avec ses bars et ses clubs.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/036.webp" alt="RAW-Gelände Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/037.webp" alt="RAW-Gelände Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Curiosité berlinoise</strong><p>Ici, on a découvert un truc assez sympa qui fait partie des curiosités berlinoises : les distributeurs de colis mystères. Pour quelques euros, on tente sa chance. Le concept est simple : acheter un colis non réclamé sans savoir ce qu’il contient. Entre chasse au trésor moderne et coup de chance, ces colis mystères attirent de nombreux curieux. Une idée originale et insolite qui reflète bien l’esprit créatif de Berlin.</p></div>
            </div>
            <h4>Oberbaumbrücke, le pont de la réunification</h4>
            <p>Après ça et non loin de là, direction le pont iconique de Berlin, le <strong>Oberbaum Bridge</strong> (<strong>Oberbaumbrücke</strong>). C’est l’un des ponts les plus emblématiques de Berlin, reconnaissable à ses tours en briques rouges et son allure presque de château. Il relie les quartiers de <strong>Friedrichshain</strong> et <strong>Kreuzberg</strong> au-dessus de la <strong>Spree</strong> et symbolise surtout la réunification, puisqu’il marquait autrefois une frontière entre Berlin-Est et Berlin-Ouest.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/038.webp" alt="Oberbaumbrücke Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="/berlin-photos/039.webp" alt="Oberbaumbrücke Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">S-Bahn</span><p>Lignes S3, S5, S7 ou S9 jusqu’à la station Ostbahnhof.</p></div>
                </div>
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U1 jusqu’à la station Warschauer Straße.</p></div>
                </div>
              </div>
            </div>
            <h3>Kreuzberg</h3>
            <h4>Esprit rebelle et street art</h4>
            <p>Nous traversons l’<strong>Oberbaum Bridge</strong> et nous poursuivons notre balade à pied jusqu’au cœur de <strong>Kreuzberg</strong>, l’un des quartiers emblématiques de Berlin. Ici, l’ambiance a quelque chose de particulier. C’est un mélange d’énergie alternative, de diversité culturelle et de créativité, avec ce petit côté rebelle qui fait tout son charme. Entre le street art, les terrasses animées et les façades parfois brutes, Kreuzberg dégage une vraie personnalité, entre esprit un peu punk et quartier devenu aujourd’hui très tendance. Impossible de manquer le fameux <strong>astronaute</strong>, une fresque signée Victor Ash intitulée <strong>« Astronaut/Cosmonaut »</strong> : peinte en 2007, ses 22x14 mètres en font l’une des plus grandes œuvres au pochoir au monde.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/040.webp" alt="Astronaut Cosmonaut fresque Kreuzberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/041.webp" alt="Astronaut Cosmonaut fresque Kreuzberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-tip-with-gallery">
              <div className="article-tip-with-gallery-row">
                <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                <div><strong className="article-tip-with-gallery-title">Bon à savoir</strong><p>En vous baladant à Berlin, vous croiserez sûrement des personnes fouillant les poubelles à la recherche de bouteilles vides, un caddie à la main ou plusieurs sacs accrochés à leur vélo. C’est le système du <strong style={{color: 'var(--dark)'}}>Pfand</strong> : chaque bouteille en verre ou en plastique achetée en Allemagne comprend une petite consigne (15 à 25 centimes selon le contenant), remboursée si on la rapporte dans une machine dédiée en supermarché. Beaucoup de personnes en difficulté (SDF, retraités précaires, étudiants...) collectent ces bouteilles pour arrondir leurs fins de mois.</p></div>
              </div>
              <div className="article-gallery-2" style={{marginTop: '16px', marginLeft: '32px', marginRight: '32px'}}>
                <img src="/berlin-photos/105.webp" alt="Pfand Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
                <img src="/berlin-photos/106.webp" alt="Pfand Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              </div>
              <div className="article-tip-with-gallery-row" style={{marginTop: '16px'}}>
                <span className="article-tip-icon" style={{visibility: 'hidden'}}><svg width="16" height="16" viewBox="0 0 24 24"><path d="M12 2"/></svg></span>
                <p style={{fontSize: '13px', color: '#555', lineHeight: '1.9', margin: 0}}><strong style={{color: 'var(--dark)'}}>Petit geste de savoir-vivre berlinois :</strong> si vous finissez une bouteille consignée dans la rue, posez-la à côté d’une poubelle plutôt que dedans, ça évite à ces personnes d’avoir à fouiller.</p>
              </div>
            </div>
            <p>Après avoir déambulé dans le quartier, histoire de faire une petite pause, nous nous arrêtons boire un verre chez <strong>Südblock</strong>, un lieu bien vivant qui s’intègre parfaitement à l’atmosphère du quartier.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-7 8-7-8Z"/></svg>Pour boire un verre</span>
                  <span className="article-resto-tag">Kreuzberg</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://www.google.com/maps/search/?api=1&query=S%C3%BCdblock+Admiralstra%C3%9Fe+1+Berlin" target="_blank" className="article-resto-link-desktop">Südblock</a><a href="https://maps.app.goo.gl/oqzQC7pvfzTMonRA9?g_st=ic" target="_blank" className="article-resto-link-mobile">Südblock</a></p>
                  <p className="article-resto-sub">Bar animé · Kreuzberg</p>
                  <p>Juste en face de Kottbusser Tor, sa grande terrasse arborée et son ambiance conviviale et inclusive en font un incontournable pour boire un verre à toute heure de la journée.</p>
                </div>
              </div>
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Lignes U1, U3 ou U8 jusqu’à la station Kottbusser Tor.</p></div>
                </div>
              </div>
            </div>
            <h3>Tempelhof-Schöneberg</h3>
            <h4>Tempelhofer Feld, l’ancien aéroport transformé en parc</h4>
            <p>Pour le sunset, direction un endroit assez insolite... Un ancien aéroport transformé en immense parc public en plein Berlin : <strong>Tempelhofer Feld</strong>.</p>
            <p>L’ancien aéroport de Tempelhofer Feld se situe au sud du centre de Berlin, au cœur du quartier de <strong>Tempelhof-Schöneberg</strong>. Il faisait autrefois partie de l’énorme aéroport de Tempelhof, fermé en 2008. Depuis 2010, l’espace est ouvert au public et c’est devenu l’un des plus grands espaces urbains ouverts au monde, avec plus de 300 hectares.</p>
            <p>Depuis les stations <strong>Boddinstraße</strong> ou <strong>Leinestraße</strong>, comptez 5 à 7 minutes de marche jusqu’aux entrées. On entre alors dans le Tempelhofer Feld par son côté le plus sauvage. On suit un chemin à travers la forêt avant de déboucher sur l’immensité des anciennes pistes d’aviation.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/042.webp" alt="Tempelhofer Feld Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/043.webp" alt="Tempelhofer Feld Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/044.webp" alt="Tempelhofer Feld Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>Ce qui est fou, c’est que les anciennes pistes d’atterrissage sont restées telles qu’à l’époque. On peut littéralement marcher dessus, faire du vélo, du roller ou s’asseoir au milieu d’une piste où des avions décollaient avant. Les familles adorent s’y retrouver le week-end pour des barbecues improvisés. Le parc accueille aussi régulièrement des concerts et des festivals en plein air. Sur place, vous trouverez également de quoi boire et manger.</p>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U8 jusqu’à la station Boddinstraße ou Leinestraße.</p></div>
                </div>
              </div>
            </div>
            <h3>Neukölln</h3>
            <h4>Klunkerkranich, le rooftop bohème</h4>
            <p>Pour terminer la soirée, on a choisi le rooftop <strong>Klunkerkranich</strong>, un spot très berlinois perché au-dessus d’un centre commercial à <strong>Neukölln</strong>. Et c’est justement ce contraste qui fait son charme. On prend l’ascenseur jusqu’en haut, on traverse un parking un peu banal, sans trop savoir à quoi s’attendre, puis après avoir emprunté l’ancienne rampe qui permettait aux voitures d’accéder au toit, on arrive dans un lieu presque caché, avec une vraie atmosphère à part.</p>
            <img src="/berlin-photos/045.webp" alt="Klunkerkranich rooftop Berlin" className="article-img-full" loading="lazy" />
            <p>Ici, pas de rooftop ultra-luxueux ou trop lisse, l’ambiance est bohème, un peu arty, avec des plantes, des lumières suspendues, du mobilier récupéré, une voiture abandonnée dans laquelle on peut s’installer. L’énergie y est décontractée. Certains soirs, un DJ ou de la musique live accompagne le coucher du soleil, avec une jolie vue sur les toits de Berlin. Un endroit simple, vivant et authentique, parfait pour finir la journée dans une ambiance locale.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/046.webp" alt="Klunkerkranich rooftop Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/047.webp" alt="Klunkerkranich rooftop Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-7 8-7-8Z"/></svg>Pour boire un verre</span>
                  <span className="article-resto-tag">Neukölln</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://www.google.com/maps/search/?api=1&query=Klunkerkranich+Karl-Marx-Stra%C3%9Fe+66+Berlin" target="_blank" className="article-resto-link-desktop">Klunkerkranich</a><a href="https://maps.app.goo.gl/HkdtMSpumzfi5o6Q8?g_st=ic" target="_blank" className="article-resto-link-mobile">Klunkerkranich</a></p>
                  <p className="article-resto-sub">Rooftop bohème · Neukölln</p>
                  <p>Comptez une petite entrée de 3 à 5 € en soirée (souvent gratuit plus tôt dans la journée), et prévoyez un peu d’attente, surtout le week-end ou quand il fait beau.</p>
                </div>
              </div>
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U7 jusqu’à la station Rathaus Neukölln.</p></div>
                </div>
              </div>
            </div>
            <h3>Retour à Prenzlauer Berg</h3>
            <h4>Burgermeister, la référence burger de Berlin</h4>
            <p>On prend la direction de l’hôtel, il n’est pas loin de minuit. Mais à Berlin, la vie ne s’arrête jamais, et comme on n’a pas mangé, passage obligé par <strong>Burgermeister</strong>. Fondé en 2006, c’est l’adresse historique et la plus réputée pour les amateurs de burgers à Berlin. On se laisse tenter !</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/048.webp" alt="Burgermeister Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="/berlin-photos/049.webp" alt="Burgermeister Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>On a goûté le burger signature, le Burgermeister. Du bœuf, des oignons grillés, du bacon, de la sauce barbecue et de la moutarde. Un délice ! On ne regrette pas de nous y être arrêtées.</p>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À ne pas manquer</strong><p>L’adresse la plus connue mais aussi la plus touristique se trouve à Kreuzberg. Ce lieu emblématique se situe <a href="https://www.google.com/maps/search/?api=1&query=Burgermeister+Schlesisches+Tor+Berlin" target="_blank" rel="noopener noreferrer" className="article-link">sous le pont de la ligne U1</a>, dans d’anciennes toilettes publiques de 1920.</p></div>
            </div>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour manger</span>
                  <span className="article-resto-tag">Burger</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://maps.app.goo.gl/zAeHKLhGQLSdM5E47" target="_blank" className="article-resto-link-desktop">Burgermeister</a><a href="https://maps.app.goo.gl/V8jCJodC34CG1f4v9?g_st=ic" target="_blank" className="article-resto-link-mobile">Burgermeister</a></p>
                  <p className="article-resto-sub">Adresse historique · Prenzlauer Berg</p>
                  <p>Un choix de burgers gourmands, ouvert à toute heure, avec aussi de bonnes options végétariennes.</p>
                </div>
              </div>
            </div>
          </section>

          {/* JOUR 3 */}
          <section id="jour-3-centre-historique" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 3</span>
              <h2>Une journée, toute une histoire : le cœur historique et politique de Berlin</h2>
            </div>
            <h3>Nikolaiviertel</h3>
            <h4>Le plus vieux quartier de Berlin</h4>
            <p>On commence la journée au <strong>Nikolaiviertel</strong>, le plus vieux quartier de Berlin. Situé dans le centre-ville, entre <strong>Alexanderplatz</strong> et l’<strong>île aux Musées</strong>, c’est l’endroit parfait pour démarrer la journée.</p>
            <p>Ici, c’est un changement d’ambiance immédiat. On quitte le tumulte de la ville pour de petites ruelles pavées et des façades colorées. Au cœur du quartier se dresse l’<strong>église Saint-Nicolas</strong>, reconnaissable à ses deux tours qui dominent les alentours. Symbole du <strong>Nikolaiviertel</strong>, cette église rappelle les origines médiévales de Berlin.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/051.webp" alt="Église Saint-Nicolas Nikolaiviertel Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/050.webp" alt="Église Saint-Nicolas Nikolaiviertel Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>Le <strong>Nikolaiviertel</strong> est relativement calme, idéal pour flâner, déambuler et profiter de belles vues sur la <strong>Spree</strong>. Alors, on s’installe en terrasse histoire de se rafraîchir un peu parce qu’il fait quand même super chaud. Ok, on ne se plaint pas, visiter Berlin sous le soleil et la chaleur, c’est quand même plus sympa qu’en hiver à -5 degrés !</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/052.webp" alt="Nikolaiviertel Spree Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="/berlin-photos/053.webp" alt="Nikolaiviertel Spree Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U5 jusqu’à la station Rotes Rathaus, ou ligne U2 jusqu’à Klosterstraße.</p></div>
                </div>
              </div>
            </div>
            <h3>Île aux Musées &amp; Unter den Linden</h3>
            <h4>Tour de télévision &amp; High Swing Berlin</h4>
            <p>Après cette pause fraîcheur, c’est reparti !</p>
            <p>Nous sommes d’ailleurs tout près de l’emblématique <strong>tour de télévision de Berlin</strong> (<strong>Fernsehturm</strong>). Elle mesure 368 mètres, ce qui en fait le plus haut monument d’Allemagne.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/085.webp" alt="Fernsehturm Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/086.webp" alt="Fernsehturm Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-book">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>Pour réserver</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://gyg.me/SIbW9WGJ" target="_blank" rel="noopener noreferrer">Billet coupe-file pour la Fernsehturm</a></p>
                  <p className="article-resto-sub">À partir de 20 €</p>
                  <p>Depuis la plateforme panoramique à 203 mètres de haut, la vue à 360° sur Berlin est saisissante. Le <a href="https://gyg.me/SIbW9WGJ" target="_blank" rel="noopener noreferrer" className="article-link">billet coupe-file</a> permet d'éviter la queue à la billetterie.</p>
                </div>
              </div>
            </div>
            <p>Juste à côté, sur le toit du Park Inn Hotel donnant sur Alexanderplatz, se cache une expérience assez inattendue. Le <strong>High Swing Berlin</strong> propose de se balancer à 120 mètres au-dessus de la ville, sur la balançoire la plus haute d’Europe. Il faut grimper environ 70 marches pour rejoindre la plateforme (pas d’ascenseur), et prévoir une petite laine puisque le vent souffle plus fort en altitude. Réservé aux plus téméraires !</p>
            <div className="article-book">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>Pour réserver</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://gyg.me/FKU6Qp5A" target="_blank" rel="noopener noreferrer">High Swing Berlin</a></p>
                  <p className="article-resto-sub">À partir de 30 €</p>
                  <p>Sensations garanties à 120 mètres de haut. <a href="https://gyg.me/FKU6Qp5A" target="_blank" rel="noopener noreferrer" className="article-link">Réserver son créneau</a>.</p>
                </div>
              </div>
            </div>
            <h4>Berliner Dom</h4>
            <p>Puis à seulement une dizaine de minutes d’ici, nous rejoignons le <strong>Berliner Dom</strong>, l’un des monuments les plus impressionnants de Berlin avec son immense dôme vert qui domine le paysage. Il se trouve sur l’<strong>île aux Musées</strong>. C’est la plus grande église protestante de la ville. Construite entre 1894 et 1905 pour la famille impériale allemande, elle impressionne autant par sa taille que par son élégance. Elle témoigne de la grandeur de l’ancien Empire allemand et constitue aujourd’hui l’un des symboles incontournables de la capitale.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/087.webp" alt="Berliner Dom Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="/berlin-photos/088.webp" alt="Berliner Dom Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Pour 15 € il est possible de visiter le Berliner Dom (audioguide inclus). Vous aurez accès à l’intérieur de l’église, à la crypte des Hohenzollern, au musée et à la galerie panoramique située sous le dôme, qui offre une belle vue sur Berlin.</p></div>
            </div>
            <h4>Unter den Linden &amp; Bebelplatz</h4>
            <p>En quittant le <strong>Berliner Dom</strong>, on rejoint <strong>Unter den Linden</strong>, la célèbre avenue bordée de tilleuls qui traverse le centre historique. On y trouve de nombreux bâtiments prestigieux, ambassades, universités et monuments qui témoignent du passé royal et impérial de Berlin.</p>
            <p>Nous arrivons place <strong>Bebelplatz</strong>. C’est ici qu’en 1933, des milliers de livres furent brûlés par les nazis. Aujourd’hui, une plaque de verre assez discrète, posée au sol, au milieu de la place, nous invite à regarder sous nos pieds. Nous découvrons une pièce souterraine, toute blanche, une bibliothèque totalement vide. Un silence visuel qui en dit long sur le vide laissé par la censure.</p>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn / S-Bahn</span><p>Ligne U5 ou S-Bahn (S1, S2, S25, S26) jusqu’à la station Brandenburger Tor.</p></div>
                </div>
              </div>
            </div>
            <h3>Le quartier du gouvernement</h3>
            <h4>Porte de Brandebourg</h4>
            <p>Nous continuons notre balade et nous voici arrivées à la <strong>Porte de Brandebourg</strong>, symbole de Berlin et de l’Allemagne réunifiée. Cette ancienne porte monumentale a traversé les époques, de la division de Berlin à la chute du Mur. Aujourd’hui, elle accueille les visiteurs au rythme des musiciens et des animations de rue.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/059.webp" alt="Porte de Brandebourg Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="/berlin-photos/060.webp" alt="Porte de Brandebourg Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Depuis le début de notre parcours, et jusqu’ici, il faut compter une bonne quarantaine de minutes, sans compter les stops contemplation-photos, et faut dire qu’il y en a pas mal !</p>
            <h4>Reichstag</h4>
            <p>Après avoir admiré la Porte de Brandebourg, il suffit de quelques minutes à pied pour rejoindre le Bâtiment du <strong>Reichstag</strong>, siège du Parlement allemand.</p>
            <p>Derrière sa façade historique se cache une impressionnante coupole de verre qui est devenue l’un des symboles de Berlin. Détruit puis reconstruit au fil des événements qui ont marqué l’histoire de l’Allemagne, le bâtiment représente aujourd’hui la démocratie allemande. Nous n’avons pas visité le bâtiment mais apparemment la vue depuis la coupole offre un magnifique panorama sur la ville.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/054.webp" alt="Reichstag coupole Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="/berlin-photos/055.webp" alt="Reichstag coupole Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>La visite du Reichstag est gratuite, mais la réservation est obligatoire. Réservez au moins 2 à 3 semaines à l’avance (encore plus en été), muni d’une pièce d’identité qui devra correspondre exactement à celle enregistrée en ligne. Si vous n’avez pas réservé, un guichet sur place (à 150 m du Reichstag) propose parfois des créneaux de dernière minute, selon les disponibilités.</p></div>
            </div>
            <h4>Mémorial de l’Holocauste</h4>
            <p>Après notre visite du Reichstag, nous avons poursuivi notre découverte de Berlin en nous rendant au <strong>Mémorial de l’Holocauste</strong>, situé à seulement quelques minutes de marche. Ce lieu de mémoire impressionne par son immensité. 2 711 stèles de béton de différentes hauteurs s’étendent sur une immense place, formant un véritable labyrinthe.</p>
            <img src="/berlin-photos/056.webp" alt="Mémorial de l’Holocauste Berlin" className="article-img-full" loading="lazy" />
            <p>En s’aventurant au milieu, le bruit de la ville s’efface peu à peu, ce qui laisse place à une atmosphère particulière. On se sent toutes petites, un peu perturbées et émues à la fois. Conçu en hommage aux millions de Juifs victimes du génocide nazi, ce mémorial invite naturellement au recueillement et à la réflexion.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/057.webp" alt="Mémorial de l’Holocauste Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/058.webp" alt="Mémorial de l’Holocauste Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>C’est un peu déboussolées que nous quittons cet endroit, direction <strong>Topography of Terror</strong> qui se trouve à environ 10 minutes de marche d’ici.</p>
            <h4>Topographie de la Terreur</h4>
            <p>Le premier élément marquant du site qu’on voit directement en arrivant, c’est l’un des plus longs vestiges encore visibles du <strong>Mur de Berlin</strong>.</p>
            <p>La <strong>Topographie de la Terreur</strong> est un lieu qui permet de mieux comprendre l’histoire de l’Allemagne sous le régime nazi. Installé sur le site des anciens quartiers généraux de la Gestapo et des SS, ce centre de documentation présente de nombreuses photos, archives et témoignages. Une visite passionnante, un peu bouleversante, qui aide à mieux comprendre cette période de l’histoire et ses conséquences sur Berlin et l’Europe. Seul bémol : les panneaux et documents sont uniquement en allemand et en anglais, pas de version française.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/061.webp" alt="Topographie de la Terreur Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/062.webp" alt="Topographie de la Terreur Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">S-Bahn</span><p>Lignes S1, S2, S25 ou S26 jusqu’à la station Anhalter Bahnhof.</p></div>
                </div>
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U2 jusqu’à la station Potsdamer Platz.</p></div>
                </div>
              </div>
            </div>
            <h3>Grunewald</h3>
            <h4>Teufelsberg, notre coup de cœur</h4>
            <p>Pour clôturer cette journée riche en histoire et en émotions, direction <strong>Teufelsberg</strong>, la célèbre « montagne du Diable ». On nous a dit que le coucher de soleil y était magique… et on confirme, le détour en vaut largement la peine !</p>
            <p><strong>Teufelsberg</strong> est une colline artificielle construite après la Seconde Guerre mondiale à partir des millions de tonnes de gravats laissés par la destruction de Berlin. Depuis la station <strong>Berlin-Heerstraße</strong>, il faut rejoindre l’entrée de la forêt et suivre le sentier balisé, qui traverse une petite route avant de grimper jusqu’au sommet.</p>
            <p>À notre arrivée sur le site, un plan nous est remis. Vous pouvez explorer librement les lieux, déambuler entre les bâtiments, grimper dans certains d’entre eux et prendre le temps d’admirer les nombreux points de vue. Au sommet se dressent les vestiges d’une ancienne station d’écoute américaine datant de la Guerre froide.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/063.webp" alt="Teufelsberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/064.webp" alt="Teufelsberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/065.webp" alt="Teufelsberg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>L’endroit est tout simplement fascinant. Entre les immenses radômes blancs, les fresques de street art qui recouvrent chaque mur et la vue panoramique sur Berlin, l’atmosphère est hors du temps. C’est un lieu insolite où l’histoire rencontre l’art urbain, offrant une expérience complètement différente de celle des monuments emblématiques du centre-ville. Un véritable coup de cœur pour nous.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/066.webp" alt="Teufelsberg street art Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/067.webp" alt="Teufelsberg street art Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/068.webp" alt="Teufelsberg street art Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-book">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>Pour réserver</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://gyg.me/dJt9YbQe" target="_blank" rel="noopener noreferrer">Billet d'entrée Teufelsberg</a></p>
                  <p className="article-resto-sub">À partir de 12 €</p>
                  <p>Comptez 2 à 3 heures sur place pour profiter pleinement des lieux, et pensez à arriver suffisamment tôt, car le site ferme au coucher du soleil. <a href="https://gyg.me/dJt9YbQe" target="_blank" rel="noopener noreferrer" className="article-link">Réserver son billet</a>.</p>
                </div>
              </div>
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">S-Bahn</span><p>Lignes S3 ou S9 direction Spandau, arrêt Berlin-Heerstraße.</p></div>
                </div>
              </div>
            </div>
            <h3>Kreuzberg</h3>
            <p>Pour notre dernière soirée, notre dernière nuit, on a décidé de jouer les prolongations et d’en profiter à fond. Après une journée bien chargée, une bonne marche en forêt en fin de journée, retour express à l’hôtel pour se changer avant de partir en quête d’un resto.</p>
            <p>Même à 23h, la ville vit encore à 100 à l’heure. On a jeté notre dévolu sur Pasta &amp; Passione, un petit établissement à deux pas de notre hôtel. Si vous y passez, testez leurs gnocchis maison, ils sont délicieux.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour manger</span>
                  <span className="article-resto-tag">Italien</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://www.google.com/maps/search/?api=1&query=Pasta+%26+Passione+Kastanienallee+94+Berlin" target="_blank" className="article-resto-link-desktop">Pasta &amp; Passione</a><a href="https://maps.app.goo.gl/Z6x2xEA3Fa5tPJbw8?g_st=ic" target="_blank" className="article-resto-link-mobile">Pasta &amp; Passione</a></p>
                  <p className="article-resto-sub">Restaurant italien · Prenzlauer Berg</p>
                  <p>Une cuisine italienne simple dans un cadre chaleureux. Les pâtes sont faites maison chaque jour, et les portions sont généreuses.</p>
                </div>
              </div>
            </div>
            <h4>Club der Visionäre, l’institution berlinoise</h4>
            <p>Nous prenons la direction de Kreuzberg pour nous rendre au <strong>Club der Visionäre</strong>, l’un des clubs les plus réputés de la ville. Il se trouve à seulement quelques minutes à pied de la gare Schlesisches Tor. Pour y entrer, comptez généralement entre 5 et 10 € (cela dépend de la programmation). Pour nous ce soir, c’est 8 € par personne. Un petit tampon sur la main et c’est parti !</p>
            <p>L’endroit est très sympa. Ce club à ciel ouvert se situe au bord du canal du <strong>Flutgraben</strong>. L’ambiance y est décontractée et le cadre est trop joli. Nous sommes sur une grande terrasse en bois qui surplombe le canal. Ici, les personnes viennent autant pour écouter de la bonne musique que pour profiter d’un verre entre amis. House, minimal et techno rythment la journée et la soirée, dans une atmosphère plus intimiste que celle des grands clubs berlinois. Ici pas de prise de tête, les gens veulent juste se détendre, danser et faire la fête.</p>
            <p>Pour info, pas de photo, c’est interdit. Niveau hydratation, vous trouverez sur place un bar proposant bières, cocktails et boissons fraîches. Il y a également une pizzeria si une petite faim se fait sentir.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M8 22h8"/><path d="M12 11v11"/><path d="m19 3-7 8-7-8Z"/></svg>Pour boire un verre</span>
                  <span className="article-resto-tag">Kreuzberg</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://www.google.com/maps/search/?api=1&query=Club+der+Vision%C3%A4re+Am+Flutgraben+1+Berlin" target="_blank" className="article-resto-link-desktop">Club der Visionäre</a><a href="https://maps.app.goo.gl/XnqivwMgwk3ffAtk6?g_st=ic" target="_blank" className="article-resto-link-mobile">Club der Visionäre</a></p>
                  <p className="article-resto-sub">Club à ciel ouvert · Kreuzberg</p>
                  <p>Ouvert depuis 2002, c’est une référence de la scène techno et minimale berlinoise. Le lieu est en plein air, donc n’ouvre que quand la météo le permet, grosso modo d’avril à septembre.</p>
                </div>
              </div>
            </div>
            <p>Cette journée bien chargée nous a quand même épuisées. Il est 3h du matin bien tassé, direction l’hôtel pour une courte nuit. Départ demain, il faut plier bagage et libérer la chambre avant 11h...</p>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U1 jusqu’à la station Schlesisches Tor.</p></div>
                </div>
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">Pour le retour</span><p>Passé 1 h à 1 h 30 en semaine, le bus N1 prend le relais à l’arrêt Schlesisches Tor, exactement au même endroit que la station de métro. Le week-end en revanche, l’U1 circule toute la nuit.</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* JOUR 4 */}
          <section id="jour-4-mauerpark" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 4</span>
              <h2>Le dernier chapitre de notre escapade berlinoise</h2>
            </div>
            <h3>Prenzlauer Berg</h3>
            <p>Dernier petit-déjeuner englouti, chambre libérée et bagages déposés à la réception… Il nous reste encore quelques heures pour profiter de Berlin. On a tellement de chance, on aura eu du beau temps jusqu’à la fin !</p>
            <h4>Une dernière brocante avant de partir</h4>
            <p>Après avoir quitté l’hôtel, 5 minutes de marche suffisent pour rejoindre une petite brocante de bric et de broc, installée sur une petite place entourée d’arbres, avec des stands répartis sur plusieurs allées. Il y a peu de touristes. L’ambiance est authentique et on se fond facilement dans le décor. On déambule entre les stands, on flâne, on s’inspire et on savoure simplement chaque moment.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/069.webp" alt="Brocante Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/070.webp" alt="Brocante Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/071.webp" alt="Brocante Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>Nous continuons notre chemin pour nous rendre au fameux <strong>Mauerpark</strong>, un incontournable toujours plein de monde. On y vient pour flâner, pour la culture, pour les rencontres, et surtout pour son marché aux puces.</p>
            <h4>Mauerpark Flohmarkt, le marché aux puces emblématique</h4>
            <p>En entrant dans le parc, on tombe directement sur le <strong>Mauerpark Flohmarkt</strong>, l’un des rendez-vous les plus emblématiques de la ville, surtout si vous aimez l’ambiance bohème, vintage et typiquement berlinoise. On s’y balade sans but précis. C’est le genre d’endroit où tu repars avec un truc dont tu n’avais absolument pas besoin à la base, mais qui devient tout d’un coup indispensable... Bah, ça n’a pas loupé pour nous non plus ! On y trouve de tout : friperie, bijoux, lunettes, vinyles, créations d’artistes, objets en tout genre… C’est un véritable terrain de chasse pour les amateurs de vintage et d’objets insolites.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/072.webp" alt="Mauerpark Flohmarkt Berlin" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="/berlin-photos/073.webp" alt="Mauerpark Flohmarkt Berlin" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Ce marché est ouvert tous les dimanches, de 10 h à 18 h, et l’entrée est gratuite.</p></div>
            </div>
            <h4>Le parc et son karaoké géant</h4>
            <p>Derrière le marché, le parc est immense. Des familles et groupes d’amis sont installés dans la pelouse. Il y a des barbecues à disposition, des terrains de volley sont installés. L’ambiance y est très décontractée et très familiale. En se baladant, on tombe sur des musiciens et des artistes de rue. Le Mauerpark est bien plus qu’un simple marché aux puces, c’est une scène à ciel ouvert.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/074.webp" alt="Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/075.webp" alt="Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>Nous sommes malheureusement passées à côté de l’amphithéâtre du parc, au grand désarroi de Laurie. C’est là que se déroule le karaoké géant du <strong>Mauerpark</strong> le dimanche. Des inconnus montent sur scène devant une foule venue les encourager dans une ambiance joyeuse et complètement décomplexée. Dommage, on aurait pu vivre un grand moment !</p>
            <h4>Pause gourmande à Schönwetter</h4>
            <p>Il n’est pas loin de 12 h 30, une pause rafraîchissante et gourmande s’impose. Les abords du marché se transforment en un véritable voyage culinaire. Si vous aimez la street food, vous allez être servis ! On y trouve des saveurs venues des quatre coins du monde : spécialités locales, cuisine asiatique, italienne… sandwichs et en-cas gourmands, plats végétariens et vegan, douceurs sucrées, boissons originales et rafraîchissantes. Le choix est grand. Au-delà des stands de street food, il y a aussi des bars, cafés et restaurants.</p>
            <div className="article-gallery-2">
              <img src="/berlin-photos/076.webp" alt="Street food Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/077.webp" alt="Street food Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>Notre choix s’est porté sur <strong>Schönwetter</strong>. C’est un lieu détendu, qui sert des cocktails rafraîchissants et de savoureuses grillades. Ce qui nous a attiré, ce sont les transats et le sable fin, bon, et faut l’avouer, l’odeur des grillades aussi !</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour une pause gourmande</span>
                  <span className="article-resto-tag">Mauerpark</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name"><a href="https://www.google.com/maps/search/?api=1&query=Sch%C3%B6nwetter+Bernauer+Stra%C3%9Fe+63+Berlin" target="_blank" className="article-resto-link-desktop">Schönwetter</a><a href="https://maps.app.goo.gl/HYogWgvhZJQXRVR49?g_st=ic" target="_blank" className="article-resto-link-mobile">Schönwetter</a></p>
                  <p className="article-resto-sub">Bar &amp; grillades · Mauerpark</p>
                  <p>Le lieu fournit barbecue, grill et charbon : il suffit d’apporter sa propre nourriture. Ouvert d’avril à octobre, et uniquement le dimanche en hiver pour coïncider avec le marché.</p>
                </div>
              </div>
            </div>
            <p>Il est temps de rentrer. Ici, à <strong>Mauerpark</strong>, on a encore découvert un endroit authentique, un endroit où on prend le temps de flâner, d’écouter, de goûter… et surtout de profiter d’une atmosphère unique où chacun semble trouver sa place. C’est un lieu vivant, un brin décalé, qui laisse derrière lui bien plus que quelques photos… un vrai souvenir de voyage.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/102.webp" alt="Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/103.webp" alt="Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/104.webp" alt="Mauerpark Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">U-Bahn</span><p>Ligne U2 jusqu’à la station Eberswalder Straße, ou ligne U8 jusqu’à Bernauer Straße.</p></div>
                </div>
              </div>
            </div>
            <h3>Bye bye Berlin !</h3>
            <p>C’est maintenant l’heure du départ, il est temps de rentrer.</p>
            <p>Pas besoin de vous refaire tout le trajet : imaginez exactement le même qu’à l’aller mais dans l’autre sens ! Nous reprenons donc la route vers la France, la tête remplie de souvenirs et déjà nostalgiques de ce magnifique week-end berlinois.</p>
          </section>

          {/* INFOS PRATIQUES */}
          <section id="pratique" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Infos pratiques</span>
              <h2 className="article-section-h2">4 jours à Berlin, tout savoir pour organiser votre voyage</h2>
            </div>
            <div className="article-pratique-intro">
              <h3>L’avis des MamZelles sur cette capitale hors norme</h3>
              <p>Quelques mots pour décrire cette capitale incroyable : libre, brute, créative, décontractée, un peu chaotique… mais terriblement vivante !</p>
              <p>L’ambiance qui y règne est difficile à comparer à d’autres capitales européennes. Ce n’est pas une ville « carte postale » comme Paris ou Rome. Elle est parfois un peu grise, parfois industrielle, souvent imparfaite… mais c’est justement ce qui fait son charme. Personne ne regarde personne. Tout le monde peut y être lui-même sans être jugé.</p>
              <p>Berlin donne souvent une impression de liberté. Les gens semblent moins pressés, plus relax, parfois un peu « je fais ma vie comme j’ai envie ». Il y a un côté artistique et anticonformiste, mais aussi très quotidien, simple, sans chichi.</p>
              <p>Selon les quartiers, l’énergie change énormément : vers <strong>Prenzlauer Berg</strong> c’est plus doux et bobo, autour de <strong>Kreuzberg</strong> plus alternatif et multiculturel, tandis que <strong>Mitte</strong> mélange histoire, touristes et vie urbaine. Berlin est une ville qui se vit autant qu’elle se visite !</p>
            </div>
            <h3>Où dormir ?</h3>
            <p>Nous avons logé à l’<a href="https://www.hotel-oderberger.berlin/en/" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Hôtel Oderberger</strong></a>, dans le quartier de Prenzlauer Berg, un ancien bain public du début du XXe siècle transformé en hôtel design 4 étoiles, avec sa spectaculaire piscine néo-Renaissance. Une adresse que nous recommandons sans hésiter, idéalement située pour rayonner dans le nord-est de Berlin.</p>
            <div className="article-gallery-3">
              <img src="/berlin-photos/099.webp" alt="Hôtel Oderberger Prenzlauer Berg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/100.webp" alt="Hôtel Oderberger Prenzlauer Berg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/101.webp" alt="Hôtel Oderberger Prenzlauer Berg Berlin" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <p>Dans tous les cas, privilégiez Prenzlauer Berg ou Mitte pour être bien situés et que tout soit accessible à pied ou en tram.</p>
            <h3>Quel budget prévoir ?</h3>
            <p>Berlin reste une capitale accessible comparée à d’autres capitales européennes. Comptez environ <strong>120 à 160 € par personne et par jour</strong> pour un voyageur moyen (hébergement, repas et activités inclus).</p>
            <p>Les petits budgets peuvent s’en sortir dès 60 à 90 €/jour en misant sur les auberges de jeunesse et la street food, qui permet justement de manger bien et pas cher (Currywurst, Gemüse Kebab... pour 5 à 8 € en moyenne).</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong>
              <ul className="article-pratique-list-gold" style={{margin: '8px 0 0 0'}}>
                <li style={{fontSize: '13px', color: '#555', lineHeight: '1.9'}}>Berlin reste assez à l’ancienne côté paiement : beaucoup de petits commerces, visites, bars et restaurants n’acceptent que les espèces. Pensez à toujours avoir du liquide sur vous.</li>
                <li style={{fontSize: '13px', color: '#555', lineHeight: '1.9'}}>Les musées de l’île aux Musées et de nombreux lieux culturels berlinois proposent des tarifs réduits en fin de journée ou des créneaux gratuits certains jours. Renseignez-vous sur place ou en ligne avant votre visite.</li>
              </ul>
              </div>
            </div>
            <h3 id="arriver-avion">Arriver en avion</h3>
            <p>Il est désormais facile de trouver des vols directs à destination de Berlin à moindre coût. De <strong>nombreuses compagnies low-cost</strong> desservent la capitale allemande depuis la plupart des aéroports français.</p>
            <p>Pour notre part, nous avons voyagé avec la compagnie <strong>easyJet</strong> depuis Nice, en vol direct. Les billets nous sont revenus à <strong>200 € pour deux</strong>, avec un temps de vol d’environ 2 h.</p>
            <h3>Aéroport ↔︎ Centre-ville</h3>
            <p>Quelle que soit la compagnie choisie, vous atterrirez la plupart du temps à l’<strong>aéroport de Berlin Brandenburg (BER)</strong>. Plusieurs options s’offrent à vous pour rejoindre le centre :</p>
            <div className="article-transport-grid">
              <div className="article-transport-item">
                <div className="article-transport-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="var(--gold)" stroke="none"/></svg>
                </div>
                <div>
                  <strong>S-Bahn (terminal 1)</strong>
                  <span>5 € · 23 à 45 min selon la ligne (FEX express ou S9) jusqu’à la Hauptbahnhof · Ticket zone ABC, achetable aux distributeurs de la station.</span>
                </div>
              </div>
              <div className="article-transport-item">
                <div className="article-transport-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="var(--gold)" stroke="none"/></svg>
                </div>
                <div>
                  <strong>Bus X7 + U-Bahn</strong>
                  <span>5 € · Même tarif (zone ABC). Relie l’aéroport à la station U Rudow (ligne U7) en 15 min, pratique si votre hôtel est proche du sud ou de l’ouest de Berlin.</span>
                </div>
              </div>
              <div className="article-transport-item">
                <div className="article-transport-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="var(--gold)" stroke="none"/></svg>
                </div>
                <div>
                  <strong>Taxi</strong>
                  <span>60 à 70 € · Option pratique si vous êtes en groupe ou très chargé·e·s. Pas notre recommandation en solo.</span>
                </div>
              </div>
              <div className="article-transport-item">
                <div className="article-transport-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="var(--gold)" stroke="none"/></svg>
                </div>
                <div>
                  <strong>Uber</strong>
                  <span>Zone de prise en charge dédiée à l’aéroport, tarifs similaires au taxi (60-80 €), parfois plus en heure de pointe.</span>
                </div>
              </div>
            </div>
            <h3 style={{marginTop:'32px'}}>Comment se déplacer à Berlin ?</h3>
            <p>À Berlin, se déplacer est presque un jeu d’enfant, la ville étant remarquablement bien desservie. Le réseau de transports est vaste, rapide et particulièrement efficace, couvrant aussi bien les quartiers centraux que les zones plus alternatives ou excentrées de la capitale allemande.</p>
            <div style={{marginTop: '16px'}}>
                <PratiqueOnglets onglets={[
                  {
                    id: 'ubahn',
                    label: 'U-Bahn',
                    icon: <i className="ti ti-train" style={{fontSize:'18px'}}></i>,
                    content: (
                      <>
                        <p>L’<strong>U-Bahn</strong>, le métro berlinois, est rapide et fréquent, idéal pour circuler facilement dans le centre.</p>
                      </>
                    ),
                  },
                  {
                    id: 'sbahn',
                    label: 'S-Bahn',
                    icon: <i className="ti ti-train" style={{fontSize:'18px'}}></i>,
                    content: (
                      <>
                        <p>Le <strong>S-Bahn</strong> est une sorte de RER urbain, particulièrement pratique pour traverser Berlin de part en part, rejoindre des quartiers plus éloignés et même l’aéroport.</p>
                      </>
                    ),
                  },
                  {
                    id: 'tram',
                    label: 'Tram',
                    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{stroke:'var(--dark)'}} strokeWidth="2"><rect x="3" y="3" width="18" height="13" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><circle cx="7.5" cy="13" r="1.2"/><circle cx="16.5" cy="13" r="1.2"/><line x1="6" y1="21" x2="6" y2="16"/><line x1="18" y1="21" x2="18" y2="16"/><line x1="9" y1="0.5" x2="9" y2="3"/></svg>,
                    content: (
                      <>
                        <p>Les <strong>tramways</strong> sont omniprésents dans l’ancien Berlin-Est, notamment dans des quartiers comme Prenzlauer Berg ou Friedrichshain, où ils font presque partie du décor.</p>
                      </>
                    ),
                  },
                  {
                    id: 'bus',
                    label: 'Bus',
                    icon: <i className="ti ti-bus" style={{fontSize:'18px'}}></i>,
                    content: (
                      <>
                        <p>Les <strong>bus</strong> complètent parfaitement le réseau, très utiles pour certains trajets ou lorsque les autres transports ne circulent plus.</p>
                      </>
                    ),
                  },
                ]} />
            </div>
            <div className="article-gallery-3" style={{marginTop: '24px'}}>
              <img src="/berlin-photos/078.webp" alt="Berlin transports" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/079.webp" alt="Berlin transports" loading="lazy" style={{flex: '1', minWidth: 0}} />
              <img src="/berlin-photos/084.webp" alt="Berlin transports" loading="lazy" style={{flex: '1', minWidth: 0}} />
            </div>
            <h4>Tickets</h4>
            <p>L’un des grands avantages du système berlinois, c’est sa simplicité : un seul ticket permet d’emprunter métro, S-Bahn, tram et bus, sans avoir à se poser mille questions à chaque correspondance. Une vraie liberté de mouvement, particulièrement appréciable lorsqu’on découvre la ville. Comptez 4 € pour un ticket zone AB, valable 2 heures.</p>
            <p>Pour les acheter directement depuis votre téléphone (et éviter la queue aux distributeurs), téléchargez l’appli officielle <a href="https://www.bvg.de/en/subscriptions-and-tickets/all-apps" target="_blank" rel="noopener noreferrer" className="article-link">BVG Fahrinfo</a>, qui permet aussi de planifier vos trajets en temps réel.</p>
            <h4>Horaires</h4>
            <ul className="article-pratique-list-gold">
              <li><strong>Le jour :</strong> en journée, les transports sont extrêmement réguliers, avec des passages fréquents, souvent toutes les cinq à dix minutes sur les lignes principales, ce qui rend les déplacements fluides et spontanés.</li>
              <li><strong>La nuit :</strong> Berlin pense aussi aux personnes qui vivent la nuit. En semaine, du dimanche au jeudi, les métros et S-Bahn s’arrêtent généralement autour d’1 h à 1 h 30 du matin, mais la ville ne s’endort pas complètement : des bus de nuit, reconnaissables à leur lettre « N », prennent le relais. Le week-end, Berlin révèle encore davantage son tempérament nocturne : U-Bahn et S-Bahn circulent toute la nuit, largement suffisant pour rentrer sereinement après une longue soirée berlinoise. Ici, la ville semble avoir parfaitement compris qu’à Berlin, la nuit fait aussi partie du voyage.</li>
            </ul>
            <h3 style={{marginTop:'32px'}}>Quand partir ?</h3>
            <p>Berlin possède un climat continental, avec des étés chauds et des hivers plutôt froids et gris. La ville se visite idéalement de <strong>mai à septembre</strong>, quand les températures sont les plus agréables (autour de 20-24°C) et que la vie en extérieur bat son plein : terrasses, parcs, marchés en plein air.</p>
            <p><strong>Juin</strong> est particulièrement agréable, avec des journées longues et un ensoleillement optimal. Les mois de <strong>mai et septembre</strong> restent une bonne alternative, avec moins de foule qu’en plein été.</p>
            <p>Nous vous conseillons d’éviter les mois de <strong>novembre à février</strong>, où les températures peuvent descendre sous 0°C et le ciel reste souvent gris, même si la ville garde son charme, notamment avec ses marchés de Noël en décembre.</p>
          </section>

          <section className="article-comments-section">
            <CommentsList comments={[]} />
            <CommentForm
              articleTitle={"Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses"}
              articleUrl="https://mamzellesenvadrouille.com/visiter-berlin-en-4-jours"
            />
          </section>

          <NewsletterForm />

          {/* ARTICLES LIES */}
          <ArticlesLies currentSlug="visiter-berlin-en-4-jours" />

        </main>

        {/* SIDEBAR */}
        <aside className="article-sidebar">
          <div className="sidebar-card-white">
            <div className="sidebar-about-img-wrap">
              <img src="/nous.webp" alt="Amélie et Laurie" className="sidebar-about-img" />
            </div>
            <h3 className="sidebar-about-title">À propos <em className="sidebar-about-em">de nous</em></h3>
            <p className="sidebar-about-text">Nous, c’est Amélie &amp; Laurie, deux amoureuses de la vie et du voyage. Nous partageons ici nos aventures à travers le monde.</p>
            <a href="/qui-sommes-nous" className="sidebar-link">Notre histoire →</a>
          </div>

          <div className="sidebar-card sidebar-cta">
            <img src="/home-hero.webp" alt="" className="sidebar-cta-bg-img" />
            <div className="sidebar-cta-gradient" />
            <div className="sidebar-cta-body">
              <h3 className="sidebar-cta-title">Vous rêvez d’un voyage<br className="mobile-only-br" /> <em>sur mesure ?</em></h3>
              <p className="sidebar-cta-text">Nous créons des itinéraires personnalisés, pensés selon vos envies, votre rythme<br className="mobile-only-br" /> et votre budget.</p>
              <a href="/formules#formulaire" className="btn-gold">Créer mon voyage</a>
            </div>
          </div>
        </aside>
      </div>

      <ScrollToTop />

      {/* FOOTER */}
      <Footer />

    </>
  );
}
