import type { Metadata } from 'next';
import './berlin.css';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';
import PratiqueOnglets from '../components/PratiqueOnglets';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses",
  description: "Que faire à Berlin en 4 jours ? Prenzlauer Berg, East Side Gallery, Kreuzberg, Teufelsberg… notre itinéraire complet avec toutes nos adresses et bons plans.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/visiter-berlin-en-4-jours' },
  openGraph: {
    title: "Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses",
    description: "Notre itinéraire complet pour visiter Berlin en 4 jours, entre mémoire, histoire, street art et contre-culture, avec tous nos bons plans pratiques.",
    url: 'https://mamzellesenvadrouille.com/visiter-berlin-en-4-jours',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/Berlin.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR',
    type: 'article',
    authors: ['MamZelles en vadrouille'],
  },
};

export default function VisiterBerlinPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: 'Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses',
    description: "Que faire à Berlin en 4 jours ? Prenzlauer Berg, East Side Gallery, Kreuzberg, Teufelsberg… notre itinéraire complet avec toutes nos adresses et bons plans.",
    image: 'https://mamzellesenvadrouille.com/Berlin.webp',
    datePublished: '2026-08-01',
    dateModified: '2026-08-01',
    author: {
      '@type': 'Organization',
      name: 'MamZelles en vadrouille',
      url: 'https://mamzellesenvadrouille.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'MamZelles en vadrouille',
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
          <p className="hero-desc">Une capitale libre, brute et vibrante qui bouscule<br className="desktop-only-br" /> toutes les idées reçues. Notre itinéraire complet, jour par jour.</p>
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
          <span>Avr. à sept.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"/></svg>
          <span>90-120 €/j/pers.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M14.8 9a2 2 0 0 0-2-1.5h-1.6a2 2 0 0 0 0 4h1.6a2 2 0 0 1 0 4H11a2 2 0 0 1-2-1.5"/><line x1="12" y1="6" x2="12" y2="18"/></svg>
          <span>Euro (€)</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Allemand</span>
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
              <li><a href="#jour-1-prenzlauer-berg">Jour 1 — Prenzlauer Berg &amp; l’île aux Musées</a></li>
              <li><a href="#jour-2-berlin-est">Jour 2 — Holzmarkt, East Side Gallery, Kreuzberg &amp; Tempelhof</a></li>
              <li><a href="#jour-3-centre-historique">Jour 3 — Cœur historique et politique, jusqu’à Teufelsberg</a></li>
              <li><a href="#jour-4-mauerpark">Jour 4 — Mauerpark &amp; derniers instants</a></li>
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
            <p>Une fois arrivées à l’aéroport de Berlin, il faut encore rejoindre le centre-ville. Direction le terminal 1 pour prendre le train <strong>S-Bahn</strong> vers la gare centrale, la <strong>Hauptbahnhof (HBF)</strong>. Comptez 5 € par personne pour un ticket valable deux heures, largement suffisant pour rejoindre le centre.</p>
            <p>À ce moment-là, je me laisse complètement porter, je ne sais absolument pas où nous allons. Ma femme me laisse simplement entendre qu’elle nous a réservé un petit hôtel. En sortant de la gare côté Europaplatz, nous prenons le tram M10, qui se trouve juste en face (S+U Berlin Hauptbahnhof), direction U Eberswalder Straße, le nord-est de Berlin.</p>
            <p>En sortant du tram, dans ce quartier, on est tout de suite plongées dans l’ambiance. Il y a du monde partout, des vélos, des trams, des bus qui passent sans arrêt… ça bouge dans tous les sens. On ressent immédiatement l’énergie de Berlin !</p>
            <h3>Prenzlauer Berg</h3>
            <h4>Rüyam Gemüse Kebab, le meilleur de Berlin</h4>
            <p>Il est 15 heures quand nous débarquons dans le quartier de <strong>Prenzlauer Berg</strong> pour rejoindre notre hôtel. Nous n’avons toujours pas déjeuné. En chemin, nous tombons sur <strong>Rüyam Gemüse Kebab</strong>. Une véritable institution à Berlin ! Pas le choix que de s’y arrêter...</p>
            <p>Ici, on ne parle pas d’un kebab classique. Leur spécialité, le Gemüse Kebab : un mélange de viande grillée, de légumes rôtis (pommes de terre, poivrons…), de crudités ultra fraîches, de feta, d’une sauce maison à l’ail et épicée, le tout dans un pain croustillant !</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour manger</span>
                  <span className="article-resto-tag">Street-food</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Rüyam Gemüse Kebab</p>
                  <p className="article-resto-sub">Kebab légendaire · Prenzlauer Berg</p>
                  <p>Copieux — Laurie n’a même pas réussi à finir le sien. Tellement bon, à tester absolument ! C’est le genre d’adresse où il y a souvent la queue, mais où l’attente fait presque partie de l’expérience.</p>
                </div>
              </div>
            </div>
            <p>Kebabs avalés, nous poursuivons notre chemin vers l’hôtel.</p>
            <p><strong>Prenzlauer Berg</strong> est situé dans l’ancien Berlin-Est. Il a gardé son architecture historique avec ses beaux immeubles anciens, ses grandes avenues bordées de grands arbres et ses places pleines de cafés et de terrasses.</p>
            <p>Aujourd’hui, il est considéré comme l’un des quartiers les plus agréables où séjourner à Berlin. On y trouve une ambiance locale et une vie de quartier authentiques : des petits restaurants, des coffee shops, des boutiques indépendantes, des marchés, mais aussi une vraie énergie urbaine.</p>
            <h4>Hôtel Oderberger, un ancien bain public transformé</h4>
            <p>Wouahou… Mon Amour, c’est là qu’on va dormir ?</p>
            <p>En arrivant devant l’hôtel, on est tout de suite surprises par le bâtiment. La façade de l’<strong>Oderberger</strong> a beaucoup de charme, avec son style ancien et son côté hors du temps. Un charme berlinois un peu brut mais raffiné à la fois. On sent immédiatement le cachet du lieu et l’histoire qui l’accompagne.</p>
            <p>En y entrant, on a l’impression d’être dans un ancien bâtiment public majestueux, transformé en un lieu design, sans qu’il ait perdu son âme. Les murs et éléments historiques ont été conservés. Les chambres et les espaces communs sont très contemporains : bois, lignes épurées, lumière tamisée, minimalisme chic sans être prétentieux. On est loin du palace classique... C’est un luxe discret, presque industriel, avec un mélange d’histoire et de modernité. Ça donne déjà le ton du séjour !</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>L’hôtel est installé dans un ancien bain public du début des années 1900, à une époque où beaucoup d’appartements n’avaient pas encore de salle de bain. Fermé en 1986, il est resté abandonné pendant des décennies avant une restauration monumentale.</p><p>Aujourd’hui, le joyau de l’hôtel Oderberger, c’est son <strong>bassin néo-Renaissance</strong>, avec ses mosaïques, ses colonnes, et surtout sa verrière.</p><p>La piscine est accessible à tous (même sans être client) : vous pouvez <a href="https://pretix.eu/oderberger/oderberger/" target="_blank" rel="noopener noreferrer">réserver un créneau</a> pour y venir nager mais aussi pour privatiser l’endroit.</p></div>
            </div>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 4v16"/><path d="M2 8h18a2 2 0 0 1 2 2v10"/><path d="M2 17h20"/><path d="M6 8v9"/></svg>Pour dormir</span>
                  <span className="article-resto-tag">★★★★</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Hôtel Oderberger</p>
                  <p className="article-resto-sub">Oderberger Straße 57, 10435 Berlin · Prenzlauer Berg</p>
                </div>
              </div>
            </div>
            <p>Après notre installation dans notre magnifique chambre, trop excitées de découvrir cette ville, nous partons directement pour une petite balade dans le quartier autour de l’hôtel, avant de rejoindre tranquillement le centre de Berlin.</p>
            <h4>Un détour par le Kulturbrauerei</h4>
            <p>Nous commençons notre balade par le <strong>Kulturbrauerei</strong>, qui se trouve à deux pas de l’hôtel. C’est un immense ancien complexe de brasserie en briques rouges reconverti en lieu culturel. Derrière ses façades industrielles se cache un lieu vivant, très berlinois où se mêlent bars, restaurants, supérettes, cinéma, et marchés ou concerts en plein air selon les jours. L’endroit est franchement sympa pour boire un verre dans une ambiance locale, un peu industrielle-chic, loin du Berlin trop « carte postale » des quartiers touristiques.</p>
            <h4>Flânerie sur Kastanienallee</h4>
            <p>Nous continuons ensuite vers <strong>Kastanienallee</strong>, l’une des rues les plus agréables du quartier de Prenzlauer Berg, également à quelques minutes à pied de notre hôtel. Cafés cool, jolies boutiques, friperies, restos et terrasses se succèdent dans une ambiance berlinoise à la fois branchée et décontractée. Un petit côté bobo-chic mais franchement sympa pour se balader sans regarder l’heure.</p>
            <h4>Au pied du Wasserturm</h4>
            <p>Non loin de là, nous prenons la direction du <strong>Wasserturm</strong>, le <strong>plus ancien château d’eau</strong> de Berlin, construit au XIXe siècle. Véritable symbole du quartier, il veille sur les jolies rues résidentielles environnantes et apporte une ambiance plus calme, presque village, au cœur de la ville. Juste derrière, se trouve un petit parc. Comme des gosses, un petit tour de tourniquet et c’est reparti !</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Ouvrez l’œil</strong><p>En se promenant dans Berlin, on remarque parfois de petites plaques en laiton incrustées dans le sol, devant certaines maisons. Elles sont appelées Stolpersteine. C’est assez touchant de savoir qu’elles sont là pour rendre hommage aux victimes du nazisme ayant vécu à ces adresses avant d’être déportées ou persécutées. Sur chaque plaque figurent un nom, une date ainsi que quelques informations sur son destin. Une façon discrète mais profondément émouvante de faire vivre la mémoire, directement dans les rues de la ville. Elles sont présentes notamment à Prenzlauer Berg, à Mitte ou encore Kreuzberg et Charlottenburg.</p></div>
            </div>
            <h4>Pause douceur à Kollwitzplatz</h4>
            <p>Nous poursuivons ensuite vers <strong>Kollwitzplatz</strong>, une charmante place au cœur de Prenzlauer Berg. Ici, l’ambiance est plus douce. C’est une place arborée, bordée de jolies façades, avec des terrasses pleines de vie et un petit parc où traînent familles et Berlinois. On découvre ici un Berlin plus calme, presque un esprit de village au cœur de la ville. Attention, allergiques s’abstenir... On a rarement vu autant de pollen au mètre carré qu’ici !</p>
            <h3>Mitte</h3>
            <h4>Haus Schwarzenberg, l’esprit alternatif</h4>
            <p>En descendant vers le centre-ville, nous tombons sur Haus Schwarzenberg. Et là, changement total d’ambiance. Une cour cachée derrière un porche, une entrée discrète. Un petit bar se trouve sur la gauche. L’atmosphère est immédiatement plus alternative, très Berlin underground. Les murs sont couverts de street art, de graffitis, de collages. Ici on ressent un esprit brut et alternatif. En avançant dans la cour, sur la droite, on trouve un distributeur appelé un art-o-mat. Contre quelques euros tu reçois une mini œuvre artistique (illustration, photo, badge, mini sculpture, etc.), souvent unique ou en série limitée. Ce sont souvent des vieux distributeurs à cigarettes qui sont reconvertis en distributeurs d’art. Ils sont très répandus à Berlin, surtout dans les quartiers alternatifs.</p>
            <p>On s’installe en terrasse pour boire un verre et prendre le temps de profiter de cette ambiance hors du temps, en plein cœur de la ville. Au fond de la cour, encore un bar et quelques petites boutiques. C’est comme un petit monde à part en plein centre.</p>
            <h4>Hackescher Markt</h4>
            <p>C’est reparti… Non loin de là, nous rejoignons et traversons Hackescher Markt qui se situe dans le quartier de Mitte. C’est un coin très vivant du centre de Berlin. Un véritable lieu de vie où se mêlent habitants, artistes, touristes et Berlinois venus profiter des nombreux cafés, restaurants et boutiques. Le quartier est surtout connu pour les Hackesche Höfe. Bon, on ne va pas vous le cacher, on les a loupées. C’est en rédigeant cet article qu’on a découvert leur existence. C’est un ensemble de cours intérieures restaurées parmi les plus belles de la ville. Derrière les façades discrètes se cachent des galeries d’art, des ateliers, des boutiques originales et de charmants cafés visiblement. En même temps, il y a tellement de choses à voir dans cette ville !</p>
            <h3>L’île aux Musées</h3>
            <h4>Coucher de soleil sur la Spree</h4>
            <p>D’ici nous sommes à quelques minutes à pied de James-Simon-Park et Monbijou Park. Ils sont côte à côte. Ces deux parcs sont au bord de la Spree, la rivière qui traverse Berlin.</p>
            <p>L’endroit est super sympa. Ambiance détendue, locale, avec des gens qui traînent en groupe, qui jouent, qui dansent, qui boivent un coup. Ah oui, c’est assez surprenant au début mais à Berlin (et plus largement en Allemagne), on peut légalement boire de l’alcool dans la rue et dans les parcs.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Il n’y a pas de loi qui interdit la consommation d’alcool dans l’espace public. Il est donc courant de voir des gens boire dans la rue ou dans les parcs. Bière à la main sur un banc, verre posé sur l’herbe ou apéro improvisé au bord de la Spree… tout semble assez libre et décontracté. Une façon de vivre l’espace public qui peut surprendre mais qui fait clairement partie de l’ambiance berlinoise.</p></div>
            </div>
            <p>Alors on se l’est jouée Berlinoises. On s’installe dans l’herbe du côté de James-Simon-Park et on profite du moment. De là, on a une vue plongeante sur l’île aux Musées.</p>
            <p>Pour l’histoire : l’île aux Musées est l’un des ensembles culturels les plus importants d’Europe. En gros, c’est une île sur la Spree où sont regroupés plusieurs grands musées historiques, construits entre le XIXe et le début du XXe siècle. Ce site est classé au patrimoine mondial de l’UNESCO. En résumé, c’est un concentré de culture et d’architecture au milieu de la rivière, en plein Berlin, mais on y reviendra plus tard.</p>
            <p>Vous l’aurez compris, cet endroit fait partie des incontournables. Le gros atout du lieu c’est l’ambiance mais aussi la vue. On a un très beau panorama sur la rivière, les péniches, et surtout sur la magnifique Berliner Dom qui s’illumine à la tombée de la nuit. Le Berliner Dom, c’est la grande cathédrale emblématique de Berlin, avec son immense dôme vert qu’on peut voir de loin. Ici, c’est clairement un spot idéal pour le coucher de soleil, alors on en profite. La lumière dorée sur l’île aux Musées, c’est magnifique.</p>
            <h4>Retour à l’hôtel &amp; Currywurst</h4>
            <p>Le temps passe bien trop vite, il est déjà passé 22h. Après avoir bien profité du moment et du lieu, nous reprenons le chemin de l’hôtel à pied, en passant par un itinéraire différent, histoire de prolonger encore un peu la découverte.</p>
            <p>C’est incroyable, à Berlin, la vie ne s’arrête jamais vraiment. La ville reste animée à toute heure. La nuit offre une toute autre ambiance. Les restaurants et les bars restent ouverts tard, certains commerces tournent même quasiment en continu. On peut trouver de quoi grignoter, de l’alcool, du tabac… bref, tout ce qu’il faut pour prolonger la soirée sans contrainte. Une ville qui semble vivre au rythme de ceux qui ont envie de profiter jusqu’au bout de la nuit.</p>
            <p>Sur le retour, on passe devant une adresse incontournable pour goûter la Currywurst. C’est la spécialité street food emblématique de Berlin, un peu le « snack national » de la ville.</p>
            <p>Allez, on se laisse tenter.</p>
            <p>C’est très simple. Une saucisse (souvent grillée ou frite) coupée en morceaux, recouverte d’une sauce tomate-ketchup épicée au curry, souvent servie avec des frites ou un petit pain. Le tout dans une barquette en carton, à manger debout dans la rue ou dans un parc.</p>
            <p>On est d’accord, ce n’est pas de la grande gastronomie mais plutôt un rituel berlinois du quotidien. C’est rapide, pas cher et ça se trouve partout.</p>
            <p>Currywurst avalé et validé. Un peu gras mais efficace pour caler une petite faim.</p>
            <p>Il est temps d’aller se coucher après une première journée bien chargée mais déjà hâte d’être à demain.</p>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">Depuis l’aéroport</span><p>S-Bahn depuis le terminal 1 jusqu’à la Hauptbahnhof (5 € / pers., ticket valable 2 h).</p></div>
                </div>
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">Tram M10</span><p>Depuis Europaplatz (côté gare), direction U Eberswalder Straße pour rejoindre Prenzlauer Berg.</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* JOUR 2 */}
          <section id="jour-2-berlin-est" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h2>Une journée dans l’âme de Berlin-Est : entre histoire, street art et contre-culture</h2>
            </div>
            <p>Premier réveil et premier petit-déjeuner dans ce magnifique hôtel. Un buffet très complet. Tout y est pour bien commencer la journée. Autant vous dire qu’il y a de quoi prendre des forces avant d’arpenter cette ville qui nous réserve encore bien des surprises.</p>
            <p>Direction l’Est de Berlin.</p>
            <p>Ma femme nous avait organisé tout un programme. Une vraie travel planner.</p>
            <p>Nous prenons le métro pour nous en approcher. Premier spot à découvrir : le Holzmarkt 25.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Avant même d’y arriver, un détail attire notre attention : ces fameux tuyaux roses qui serpentent un peu partout, surgissant du sol de manière presque improbable. Nous découvrons qu’ils ne sont pas là par hasard ou pour faire beau. Berlin ayant été construite sur d’anciens marécages, ils servent à pomper les eaux souterraines afin d’éviter les infiltrations, notamment lors des travaux. Une curiosité urbaine devenue presque une signature visuelle de la ville.</p></div>
            </div>
            <h3>Holzmarkt 25, le village bohème au bord de la Spree</h3>
            <p>À notre arrivée au Holzmarkt 25, on comprend rapidement pourquoi cet endroit est souvent décrit comme l’un des lieux les plus « Berlin » de Berlin. Installé au bord de la Spree, ce lieu à l’esprit bohème, alternatif et artistique dégage une atmosphère unique. On a presque l’impression d’avoir découvert un petit village caché, à mille lieues de l’agitation urbaine, alors que la ville continue de vibrer tout autour. On déambule entre les cabanes en bois, sous les guirlandes suspendues, entre les terrasses improvisées et ces nombreux petits endroits où s’installer tranquillement. Tout semble nous inviter à ralentir. Alors on ralentit. On prend une bière bien fraîche dans l’une de ces cabanes. On nous donne un jeton avec, car les bouteilles sont consignées. Tu ramènes ta bouteille, tu récupères 1 €. On s’installe au bord de l’eau et on profite du moment, presque les pieds dans l’eau. L’ambiance est décontractée, libre, sans artifices ni prise de tête. Côté food c’est simple et convivial : street food, pizzas, burgers, options veggie… Même si l’envie ne se fait pas sentir, on vous invite à passer voir les toilettes.</p>
            <h3>East Side Gallery, le mur devenu galerie à ciel ouvert</h3>
            <p>Après ce moment suspendu, non loin d’ici, à environ 20 minutes en marchant tranquillement se trouve un lieu impossible à manquer quand on visite Berlin. La East Side Gallery. C’est en fait le plus long tronçon encore debout du mur de Berlin, transformé aujourd’hui en immense galerie d’art à ciel ouvert.</p>
            <p>Sur près d’1,3 kilomètre, des artistes du monde entier ont recouvert ce vestige de la séparation entre l’Est et l’Ouest avec des fresques colorées, engagées, parfois poétiques, parfois politiques. Ici, le béton chargé d’histoire est devenu un symbole de liberté et d’expression.</p>
            <p>Impossible de ne pas s’arrêter devant certaines œuvres devenues iconiques, comme le célèbre baiser entre dirigeants communistes, souvent surnommé le baiser fraternel, ou encore les peintures pleines d’espoir qui parlent d’un monde sans frontières.</p>
            <p>Ce qui marque surtout ici, c’est le contraste. D’un côté, des œuvres colorées, pleines de vie et de messages. De l’autre, on se rappelle qu’à cet endroit même, un mur séparait autrefois une ville entière, des familles et des proches pendant presque 30 ans. En longeant l’East Side Gallery, on passe entre art, mémoire et histoire.</p>
            <h3>RAW-Gelände &amp; Oberbaumbrücke</h3>
            <p>Nous continuons notre parcours découverte, et à même pas 15 minutes à pied de là, le RAW-Gelände. C’est un immense ancien site industriel reconverti, dans le quartier de Friedrichshain.</p>
            <p>À l’origine, c’était un ancien dépôt de réparation ferroviaire (Reichsbahnausbesserungswerk, d’où « RAW »). L’ambiance ici est volontairement un peu « chaotique Berlin » : industrielle, underground, arty, parfois un peu déjantée. Si vous venez comme nous en journée, vous pourrez y flâner pour voir les fresques, boire un verre ou passer dans certains espaces culturels. Le soir, apparemment c’est une toute autre ambiance. Le lieu se transforme davantage en spot de fête avec ses bars et ses clubs.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Curiosité berlinoise</strong><p>Ici, on a découvert un truc assez sympa qui fait partie des curiosités berlinoises : les distributeurs de colis mystères. Pour quelques euros, on tente sa chance. Le concept est simple : acheter un colis non réclamé sans savoir ce qu’il contient. Entre chasse au trésor moderne et coup de chance, ces colis mystères attirent de nombreux curieux. Une idée originale et insolite qui reflète bien l’esprit créatif de Berlin.</p></div>
            </div>
            <p>Après ça et non loin de là, direction un pont iconique de Berlin, le Oberbaum Bridge (Oberbaumbrücke). C’est l’un des ponts les plus emblématiques de Berlin, reconnaissable à ses tours en briques rouges et son allure presque de château. Il relie les quartiers de Friedrichshain et Kreuzberg au-dessus de la Spree et symbolise aussi la réunification, puisqu’il marquait autrefois une frontière entre Berlin-Est et Berlin-Ouest.</p>
            <h3>Kreuzberg, l’esprit rebelle</h3>
            <p>Nous traversons l’Oberbaum Bridge et nous poursuivons notre balade à pied jusqu’au cœur de Kreuzberg, l’un des quartiers emblématiques de Berlin. Ici, l’ambiance a quelque chose de particulier. C’est un mélange d’énergie alternative, de diversité culturelle et de créativité, avec ce petit côté rebelle qui fait tout son charme. Entre le street art (notamment le fameux astronaute), les terrasses animées et les façades parfois brutes, Kreuzberg dégage une vraie personnalité, entre esprit un peu punk et quartier devenu aujourd’hui très tendance.</p>
            <p>Après avoir déambulé dans le quartier, histoire de faire une petite pause, nous nous arrêtons boire un verre chez Südblock, un lieu bien vivant qui s’intègre parfaitement à l’atmosphère du quartier.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour boire un verre</span>
                  <span className="article-resto-tag">Kreuzberg</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Südblock</p>
                  <p className="article-resto-sub">Bar animé · Kreuzberg</p>
                </div>
              </div>
            </div>
            <h3>Tempelhofer Feld, l’ancien aéroport transformé en parc</h3>
            <p>Pour le sunset, direction un endroit assez insolite. Un ancien aéroport transformé en immense parc public en plein Berlin. Tempelhofer Feld.</p>
            <p>L’ancien aéroport de Tempelhofer Feld se situe au sud du centre de Berlin, au cœur du quartier de Tempelhof-Schöneberg. Il faisait autrefois partie de l’énorme aéroport de Tempelhof, fermé en 2008. Depuis 2010, l’espace est ouvert au public et c’est devenu l’un des plus grands espaces urbains ouverts au monde, avec plus de 300 hectares.</p>
            <p>Depuis les stations Boddinstraße ou Leinestraße, l’entrée est juste à côté de la sortie. On entre dans le Tempelhofer Feld par son côté le plus sauvage. On suit un chemin à travers la forêt avant de déboucher sur l’immensité des anciennes pistes d’aviation.</p>
            <p>Ce qui est fou, c’est que les anciennes pistes d’atterrissage sont restées. On peut littéralement marcher dessus, faire du vélo, du roller ou s’asseoir au milieu d’une piste où des avions décollaient avant. Sur place vous trouverez également de quoi boire et manger.</p>
            <h3>Klunkerkranich, le rooftop bohème</h3>
            <p>Pour terminer la soirée, on a choisi le rooftop Klunkerkranich, un spot très berlinois perché au-dessus d’un centre commercial à Neukölln. Et c’est justement ce contraste qui fait son charme. On prend l’ascenseur jusqu’en haut, on traverse un parking un peu banal, sans trop savoir à quoi s’attendre, puis après avoir emprunté l’ancienne rampe qui permettait aux voitures d’accéder au toit, on arrive dans un lieu presque caché, avec une vraie atmosphère à part.</p>
            <p>Ici, pas de rooftop ultra-luxueux ou trop lisse, l’ambiance est bohème, un peu arty, avec des plantes, des lumières suspendues, du mobilier récupéré, une voiture abandonnée dans laquelle on peut s’installer. L’énergie y est décontractée. Certains soirs, un DJ ou de la musique live accompagne le coucher du soleil, avec une jolie vue sur les toits de Berlin. Un endroit simple, vivant et authentique, parfait pour finir la journée dans une ambiance locale.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Petit point à savoir</strong><p>Il peut y avoir un peu d’attente au Klunkerkranich, surtout le week-end ou quand il fait beau.</p></div>
            </div>
            <p>On prend la direction de l’hôtel, il n’est pas loin de minuit et comme la vie ici ne s’arrête jamais et qu’on n’a pas mangé, passage obligé par Burgermeister. Fondé en 2006, c’est l’adresse historique et la plus réputée pour les amateurs de burgers à Berlin. On se laisse tenter !</p>
            <p>L’adresse la plus connue mais aussi la plus touristique se trouve à Kreuzberg. Ce lieu emblématique se situe sous le pont de la ligne U1, dans d’anciennes toilettes publiques de 1920. Bon, on ne va pas retraverser Berlin. Par chance, il y en a un dans le quartier de Prenzlauer Berg, à quelques pas de notre hôtel Oderberger.</p>
            <p>On a goûté le burger signature, le Burgermeister. Du bœuf, des oignons grillés, du bacon, de la sauce barbecue et de la moutarde. Un délice ! On ne regrette pas de nous y être arrêtées.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour manger (tard le soir)</span>
                  <span className="article-resto-tag">Burger</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Burgermeister</p>
                  <p className="article-resto-sub">Adresse historique · Prenzlauer Berg</p>
                </div>
              </div>
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">Métro</span><p>Prenez le U-Bahn depuis Prenzlauer Berg pour vous rapprocher du Holzmarkt 25 et de l’East Side Gallery.</p></div>
                </div>
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">Tempelhofer Feld</span><p>Stations Boddinstraße ou Leinestraße, l’entrée est juste à côté de la sortie.</p></div>
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
            <p>On commence la journée au Nikolaiviertel, le plus vieux quartier de Berlin. Situé dans le centre (Mitte), entre Alexanderplatz et l’île aux Musées, c’est l’endroit parfait pour démarrer la journée.</p>
            <p>Ici c’est un changement d’ambiance immédiat. On quitte le tumulte de la ville pour de petites ruelles pavées et des façades colorées. Au cœur du quartier se dresse l’église Saint-Nicolas, reconnaissable à ses deux tours qui dominent les alentours. C’est le symbole du Nikolaiviertel, cette église rappelle les origines médiévales de Berlin.</p>
            <p>Le Nikolaiviertel est relativement calme, idéal pour flâner, déambuler et profiter de belles vues sur la Spree. Alors on s’installe en terrasse histoire de se rafraîchir un peu parce qu’il fait quand même super chaud. Ok, on ne se plaint pas, visiter Berlin sous le soleil et la chaleur, c’est quand même plus sympa qu’en hiver à -5 degrés.</p>
            <h3>Berliner Dom &amp; Unter den Linden</h3>
            <p>Après cette pause fraîcheur, c’est reparti ! Au passage, nous sommes tout près de l’emblématique tour de Berlin, aussi appelée la tour de télévision de Berlin. Elle mesure 368 mètres, ce qui en fait le plus haut monument d’Allemagne.</p>
            <p>Puis à seulement une dizaine de minutes d’ici, nous rejoignons le Berliner Dom, l’un des monuments les plus impressionnants de Berlin avec son immense dôme vert qui domine le paysage. Il se trouve sur l’île aux Musées. C’est la plus grande église protestante de Berlin. Construite entre 1894 et 1905 pour la famille impériale allemande, elle impressionne autant par sa taille que par son élégance. Elle témoigne de la grandeur de l’ancien Empire allemand et constitue aujourd’hui l’un des symboles incontournables de la capitale.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Pour 10 € il est possible de visiter le Berliner Dom. Vous aurez accès à l’intérieur de l’église, à la crypte des Hohenzollern, au musée et à la galerie panoramique située sous le dôme, qui offre une belle vue sur Berlin.</p></div>
            </div>
            <p>En quittant le Berliner Dom, on rejoint Unter den Linden, la célèbre avenue bordée de tilleuls qui traverse le centre historique. On y trouve de nombreux bâtiments prestigieux, ambassades, universités et monuments qui témoignent du passé royal et impérial de la ville.</p>
            <p>Nous arrivons place Bebelplatz. C’est ici qu’en 1933, des milliers de livres furent brûlés par les nazis. Aujourd’hui, une plaque de verre assez discrète, posée au sol, au milieu de la place, nous invite à regarder sous nos pieds. Nous découvrons une pièce souterraine, toute blanche, une bibliothèque totalement vide. Un silence visuel qui en dit long sur le vide laissé par la censure.</p>
            <h3>Porte de Brandebourg &amp; Reichstag</h3>
            <p>Nous continuons notre balade et nous voici arrivées à la Porte de Brandebourg, symbole de Berlin et de l’Allemagne réunifiée. Cette ancienne porte monumentale a traversé les époques, de la division de Berlin à la chute du Mur. Aujourd’hui, elle accueille les visiteurs au rythme des musiciens et des animations de rue.</p>
            <p>Depuis le début de notre parcours, et jusqu’ici, il faut compter une bonne quarantaine de minutes, sans compter les stops contemplation-photos, et faut dire qu’il y en a pas mal !</p>
            <p>Après avoir admiré la Porte de Brandebourg, il suffit de quelques minutes à pied pour rejoindre le Bâtiment du Reichstag, siège du Parlement allemand.</p>
            <p>Derrière sa façade historique se cache une impressionnante coupole de verre qui est devenue l’un des symboles de Berlin. Détruit puis reconstruit au fil des événements qui ont marqué l’histoire de l’Allemagne, le bâtiment représente aujourd’hui la démocratie allemande. Nous n’avons pas visité le bâtiment mais apparemment la vue depuis la coupole offre un magnifique panorama sur la ville.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>La visite du Reichstag est gratuite, mais il est conseillé de réserver à l’avance.</p></div>
            </div>
            <h3>Mémorial de l’Holocauste &amp; Topographie de la Terreur</h3>
            <p>Après notre visite du Reichstag, nous avons poursuivi notre découverte de Berlin en nous rendant au Mémorial de l’Holocauste, situé à seulement quelques minutes de marche. Ce lieu de mémoire impressionne par son immensité. 2 711 stèles de béton de différentes hauteurs s’étendent sur une immense place, formant un véritable labyrinthe. En s’aventurant au milieu, le bruit de la ville s’efface peu à peu, ce qui laisse place à une atmosphère particulière. On se sent toutes petites, un peu perturbées et émues à la fois. Conçu en hommage aux millions de Juifs victimes du génocide nazi, ce mémorial invite naturellement au recueillement et à la réflexion.</p>
            <p>C’est un peu déboussolées que nous quittons cet endroit, direction Topography of Terror qui se trouve à environ 10 minutes de marche d’ici.</p>
            <p>Le premier élément marquant du site qu’on voit directement en arrivant, c’est l’un des plus longs vestiges encore visibles du Mur de Berlin.</p>
            <p>La Topographie de la Terreur est un lieu qui permet de mieux comprendre l’histoire de l’Allemagne sous le régime nazi. (Encore faut-il être doué en anglais.) Installé sur le site des anciens quartiers généraux de la Gestapo et des SS, ce centre de documentation présente de nombreuses photos, archives et témoignages. Une visite passionnante, un peu bouleversante, qui aide à mieux comprendre cette période de l’histoire et ses conséquences sur Berlin et l’Europe.</p>
            <h3>Teufelsberg, le sunset qui vaut le détour</h3>
            <p>Pour clôturer cette journée riche en histoire et en émotions, direction Teufelsberg, la célèbre « montagne du Diable ». On nous a dit que le coucher de soleil y était magique… et on confirme, le détour en vaut largement la peine.</p>
            <p>Teufelsberg est une colline artificielle construite après la Seconde Guerre mondiale à partir des millions de tonnes de gravats laissés par la destruction de Berlin. Pour vous y rendre en transports en commun, prenez le S-Bahn S3 ou S9 en direction de Spandau, puis descendez à la station Berlin-Heerstraße. Rejoignez ensuite l’entrée de la forêt et suivez le sentier. Après avoir traversé la route, le chemin balisé vous conduira jusqu’au sommet.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>L’entrée du site est payante. Comptez 12 € par personne. Pensez également à arriver suffisamment tôt, car le site ferme à 21 h.</p></div>
            </div>
            <p>À notre arrivée, un plan nous est remis. Vous pouvez explorer librement les lieux, déambuler entre les bâtiments, grimper dans certains d’entre eux et prendre le temps d’admirer les nombreux points de vue. Au sommet se dressent les vestiges d’une ancienne station d’écoute américaine datant de la Guerre froide.</p>
            <p>L’endroit est tout simplement fascinant. Entre les immenses radômes blancs, les fresques de street art qui recouvrent chaque mur et la vue panoramique sur Berlin, l’atmosphère est hors du temps. C’est un lieu insolite où l’histoire rencontre l’art urbain, offrant une expérience complètement différente de celle des monuments emblématiques du centre-ville. Un véritable coup de cœur pour nous.</p>
            <h3>Dernière soirée : Kreuzberg &amp; Club der Visionäre</h3>
            <p>Pour notre dernière soirée, notre dernière nuit, on a décidé de jouer les prolongations et d’en profiter à fond. Après une journée bien chargée, une bonne marche en forêt en fin de journée, retour express à l’hôtel pour se changer avant de partir en quête d’un resto. Même à 23h, la ville vit encore à 100 à l’heure. On a jeté notre dévolu sur Pasta &amp; Passione, un petit établissement à deux pas de notre hôtel. Si vous y passez, testez leurs gnocchis maison, ils sont délicieux.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour dîner</span>
                  <span className="article-resto-tag">Italien</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Pasta &amp; Passione</p>
                  <p className="article-resto-sub">Restaurant italien · Prenzlauer Berg</p>
                </div>
              </div>
            </div>
            <p>Nous prenons la direction de Kreuzberg pour nous rendre au Club der Visionäre, l’un des clubs les plus réputés de la ville. Il se trouve à seulement quelques minutes à pied de la gare Schlesisches Tor. Pour y entrer, comptez généralement entre 5 et 10 € (cela dépend de la programmation). Pour nous ce soir c’est 8 € par personne. Un petit tampon sur la main et c’est parti !</p>
            <p>L’endroit est très sympa. Ce club à ciel ouvert se situe au bord du canal du Flutgraben. L’ambiance y est décontractée et le cadre est trop joli. Nous sommes sur une grande terrasse en bois qui surplombe le canal. Ici, les personnes viennent autant pour écouter de la bonne musique que pour profiter d’un verre entre amis. House, minimal et techno rythment la journée et la soirée, dans une atmosphère plus intimiste que celle des grands clubs berlinois. Ici pas de prise de tête, les gens veulent juste se détendre, danser et faire la fête. Pour info, pas de photo, c’est interdit. Niveau hydratation, vous trouverez sur place un bar proposant bières, cocktails et boissons fraîches. Il y a également une pizzeria juste à côté si une petite faim se fait sentir.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>L’entrée au Club der Visionäre coûte généralement entre 5 et 10 € selon la programmation. Les photos y sont interdites.</p></div>
            </div>
            <p>Cette journée bien chargée nous a quand même épuisées. Il est 3h du matin bien tassé, direction l’hôtel pour une bonne sieste. Départ demain, il faut plier bagage et libérer la chambre.</p>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">Nikolaiviertel</span><p>Depuis l’hôtel à Prenzlauer Berg, comptez environ 20 minutes en U-Bahn ou en tram + une courte marche pour rejoindre le quartier, au cœur de Mitte.</p></div>
                </div>
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">Teufelsberg</span><p>S-Bahn S3 ou S9 direction Spandau, arrêt Berlin-Heerstraße, puis suivez le sentier balisé jusqu’au sommet.</p></div>
                </div>
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">Club der Visionäre</span><p>À quelques minutes à pied de la gare Schlesisches Tor (U-Bahn).</p></div>
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
            <p>Dernier petit-déjeuner englouti, chambre libérée et bagages déposés à la réception… Il nous reste encore quelques heures pour profiter de Berlin. On a tellement de chance, on aura beau temps jusqu’à la fin.</p>
            <p>On quitte l’hôtel à pied, on marche 5 minutes, direction une petite brocante de bric et de broc. Sur une petite place entourée d’arbres, des stands sur plusieurs allées. Il y a peu de touristes. L’ambiance est authentique et on se fond facilement dans le décor. On déambule entre les stands, on flâne, on s’inspire et on savoure simplement chaque moment.</p>
            <h3>Mauerpark, le marché aux puces emblématique</h3>
            <p>Nous continuons notre chemin pour nous rendre au fameux Mauerpark, connu pour son marché aux puces. L’entrée y est gratuite.</p>
            <p>Ici c’est un concentré de Berlin dans un parc. C’est un incontournable, mais il faut aimer la foule. Ce lieu attire beaucoup de monde. C’est un lieu de balade, de culture et de rencontres.</p>
            <p>En entrant, nous tombons directement sur le Mauerpark Flohmarkt. C’est le marché aux puces emblématique de Berlin, surtout si vous aimez l’ambiance bohème, vintage et un peu Berlin alternatif. On s’y balade sans but précis mais c’est le genre d’endroit où tu repars avec un truc dont tu n’avais absolument pas besoin mais que tu trouves trop cool et qui devient soudain indispensable. Bah ça n’a pas loupé ! On y trouve de tout. Friperie, bijoux, lunettes, vinyles, créations d’artistes, objets en tout genre… C’est un véritable terrain de chasse pour les amateurs de vintage et d’objets insolites.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Ce marché est ouvert tous les dimanches, de 10 h à 18 h.</p></div>
            </div>
            <p>Derrière le marché, un immense parc. Des familles et groupes d’amis sont installés dans la pelouse. Il y a des barbecues à disposition, des terrains de volley sont installés. L’ambiance y est très décontractée et très familiale. En se baladant, on tombe sur des musiciens, des artistes de rue.</p>
            <p>Le Mauerpark est bien plus qu’un simple marché aux puces, c’est une scène à ciel ouvert.</p>
            <p>L’amphithéâtre du parc. Nous sommes malheureusement passées à côté, au grand désarroi de Laurie. C’est là que se déroule le karaoké géant du Mauerpark. Des inconnus montent sur scène devant une foule venue les encourager dans une ambiance joyeuse et complètement décomplexée. Dommage, on aurait pu vivre un grand moment.</p>
            <h3>Pause gourmande à Schönwetter</h3>
            <p>Il n’est pas loin de 12h30, une pause rafraîchissante et gourmande est bien méritée.</p>
            <p>Les abords du marché se transforment en un véritable voyage culinaire. Si vous aimez la street food, vous allez être servies ! On y trouve des saveurs venues des quatre coins du monde.</p>
            <p>Spécialités locales, cuisine asiatique, italienne… sandwichs et en-cas gourmands, plats végétariens et vegan, douceurs sucrées, boissons originales et rafraîchissantes. Le choix est grand.</p>
            <p>Au-delà des stands de street food du dimanche, il y a aussi des bars, cafés et restaurants ouverts toute l’année. On a voulu en tester un.</p>
            <p>Notre choix s’est porté sur Schönwetter. C’est un lieu détendu, qui sert des cocktails rafraîchissants et de savoureuses grillades. Ce qui nous a attiré, ce sont les transats et le sable fin, bon, et un peu l’odeur des grillades aussi.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour une pause gourmande</span>
                  <span className="article-resto-tag">Mauerpark</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Schönwetter</p>
                  <p className="article-resto-sub">Bar &amp; grillades · Mauerpark</p>
                </div>
              </div>
            </div>
            <p>Il est temps de rentrer. Ici, à Mauerpark, on a encore découvert un endroit authentique, un endroit où on prend le temps de flâner, d’écouter, de goûter… et surtout de profiter d’une atmosphère unique où chacun semble trouver sa place.</p>
            <p>C’est un lieu vivant, un brin décalé, qui laisse derrière lui bien plus que quelques photos… un vrai souvenir de voyage.</p>
            <p>Direction l’hôtel Oderberger pour récupérer nos affaires. Surprise, l’équipe nous offre un petit canard en plastique. En référence à son histoire d’ancien bain public, le canard en plastique est devenu un véritable clin d’œil de l’Hôtel Oderberger. Un souvenir simple, mais qui nous a fait énormément plaisir.</p>
            <p>Tout au long de notre séjour, nous avons été touchées par la gentillesse, la bienveillance et le professionnalisme de toute l’équipe. Discrète mais toujours disponible, attentionnée et souriante, elle a contribué à rendre cette parenthèse berlinoise encore plus agréable.</p>
            <p>C’est maintenant l’heure du départ. Il est temps de rentrer. Pas besoin de vous refaire tout le trajet : imaginez exactement le même qu’à l’aller mais dans l’autre sens ! Nous reprenons donc la route vers la France, la tête remplie de souvenirs et déjà nostalgiques de ce magnifique week-end berlinois.</p>
            <div className="article-rendre">
              <div className="article-rendre-label"><div className="article-rendre-icon-wrap"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg></div><span>Pour s’y rendre</span></div>
              <div className="article-rendre-timeline">
                <div className="article-rendre-stop">
                  <div className="article-rendre-dot" />
                  <div><span className="article-rendre-stop-title">Mauerpark</span><p>Accessible facilement en U-Bahn ou S-Bahn depuis Prenzlauer Berg (quelques arrêts seulement).</p></div>
                </div>
              </div>
            </div>
          </section>

          {/* INFOS PRATIQUES */}
          <section id="pratique" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Infos pratiques</span>
              <h2 className="article-section-h2">4 jours à Berlin, tout savoir pour organiser votre voyage</h2>
            </div>
            <div className="article-pratique-intro">
              <p>Quelques mots pour décrire cette capitale incroyable : elle est libre, brute, créative, décontractée, un peu chaotique… mais terriblement vivante.</p>
              <p>L’ambiance qui y règne est difficile à comparer à d’autres capitales européennes. Ce n’est pas une ville « carte postale » comme Paris ou Rome. Elle est parfois un peu grise, parfois industrielle, souvent imparfaite… mais c’est justement ce qui fait son charme. Personne ne regarde personne. Tout le monde peut y être lui-même sans être jugé.</p>
              <p>Berlin donne souvent une impression de liberté. Les gens semblent moins pressés, plus relax, parfois un peu « je fais ma vie comme j’ai envie ». Il y a un côté artistique et anticonformiste, mais aussi très quotidien, simple, sans chichi.</p>
              <p>Selon les quartiers, l’énergie change énormément : vers Prenzlauer Berg c’est plus doux et bobo, autour de Kreuzberg plus alternatif et multiculturel, tandis que Mitte mélange histoire, touristes et vie urbaine. Berlin, une ville qui se vit autant qu’elle se visite.</p>
            </div>
            <h3>Où dormir ?</h3>
            <p>Nous avons logé à l’<strong>Hôtel Oderberger</strong>, dans le quartier de Prenzlauer Berg — un ancien bain public du début du XXe siècle transformé en hôtel design 4 étoiles, avec sa spectaculaire piscine néo-Renaissance. Une adresse que nous recommandons sans hésiter, idéalement située pour rayonner dans le nord-est de Berlin. Dans tous les cas, privilégiez Prenzlauer Berg ou Mitte pour être bien situées et accessibles à pied ou en tram.</p>
            <h3>Quel budget prévoir ?</h3>
            <p>Berlin reste une capitale très accessible. Comptez environ <strong>90 à 120 € par personne et par jour</strong> en incluant l’hébergement, les repas et les activités. La street food (Currywurst, Gemüse Kebab) permet de manger bien et pas cher, pour 5 à 8 € en moyenne.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Les musées de l’île aux Musées et de nombreux lieux culturels berlinois proposent des tarifs réduits en fin de journée ou des créneaux gratuits certains jours — renseignez-vous sur place ou en ligne avant votre visite.</p></div>
            </div>
            <h3 id="arriver-avion">Arriver en avion</h3>
            <p>Il est désormais facile de trouver des vols directs à destination de Berlin à moindre coût. De <strong>nombreuses compagnies low-cost</strong> desservent la capitale allemande depuis la plupart des aéroports français.</p>
            <p>Pour notre part, nous avons voyagé avec la compagnie <strong>easyJet</strong> depuis Nice, en vol direct. Les billets nous sont revenus à <strong>200 € pour deux</strong>, avec un temps de vol d’environ 2 h.</p>
            <h3>Aéroport ↔︎ Centre-ville</h3>
            <p>Quelle que soit la compagnie choisie, vous atterrirez la plupart du temps à l’<strong>aéroport de Berlin Brandenburg (BER)</strong>. Plusieurs options s’offrent à vous pour rejoindre le centre :</p>
            <div className="article-transport-grid">
              <div className="article-transport-item">
                <div className="article-transport-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="var(--gold)" stroke="none"/></svg>
                </div>
                <div>
                  <strong>S-Bahn (terminal 1)</strong>
                  <span>5 € · env. 30 min jusqu’à la Hauptbahnhof · Ticket valable 2 h, achetable aux distributeurs de la station.</span>
                </div>
              </div>
              <div className="article-transport-item">
                <div className="article-transport-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="var(--gold)" stroke="none"/></svg>
                </div>
                <div>
                  <strong>Bus express (BER2/BER3)</strong>
                  <span>~4 € · env. 30-40 min · Bonne alternative si le S-Bahn est bondé aux heures de pointe.</span>
                </div>
              </div>
              <div className="article-transport-item">
                <div className="article-transport-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="var(--gold)" stroke="none"/></svg>
                </div>
                <div>
                  <strong>Taxi</strong>
                  <span>~40-50 € · Option pratique si vous êtes en groupe ou très chargé·e·s. Pas notre recommandation en solo.</span>
                </div>
              </div>
              <div className="article-transport-item">
                <div className="article-transport-icon">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="var(--gold)" stroke="none"/></svg>
                </div>
                <div>
                  <strong>Uber</strong>
                  <span>Zone de prise en charge dédiée à l’aéroport, tarifs proches de ceux du taxi selon l’affluence.</span>
                </div>
              </div>
            </div>
            <h3 style={{marginTop:'32px'}}>Comment se déplacer à Berlin ?</h3>
            <div style={{marginTop: '16px'}}>
                <PratiqueOnglets onglets={[
                  {
                    id: 'transports',
                    label: 'Transports',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="14" rx="2"/><path d="M4 11h16"/><path d="M8 18v2"/><path d="M16 18v2"/></svg>,
                    content: (
                      <>
                        <p>À Berlin, se déplacer est presque un jeu d’enfant. La ville est remarquablement bien desservie et il est tout à fait possible, voire souvent plus pratique, de s’y passer complètement de voiture. Le réseau de transports est vaste, rapide et particulièrement efficace, couvrant aussi bien les quartiers centraux que les zones plus alternatives ou excentrées de la capitale allemande.</p>
                        <p>Pour se déplacer, quatre grands moyens de transport structurent la ville. Il y a d’abord l’U-Bahn, le métro berlinois, rapide et fréquent, idéal pour circuler facilement dans le centre. Ensuite le S-Bahn, une sorte de RER urbain, particulièrement pratique pour traverser Berlin de part en part, rejoindre des quartiers plus éloignés et même l’aéroport. Les tramways, eux, sont omniprésents dans l’ancien Berlin-Est, notamment dans des quartiers comme Prenzlauer Berg ou Friedrichshain, où ils font presque partie du décor. Enfin, les bus complètent parfaitement le réseau, très utiles pour certains trajets ou lorsque les autres transports ne circulent plus.</p>
                        <p>L’un des grands avantages du système berlinois, c’est sa simplicité : un seul ticket permet d’emprunter métro, S-Bahn, tram et bus, sans avoir à se poser mille questions à chaque correspondance. Une vraie liberté de mouvement, particulièrement appréciable lorsqu’on découvre la ville. Ces tickets sont valables 2 heures.</p>
                        <p>Et côté horaires… Berlin pense aussi aux personnes qui vivent la nuit. En journée, les transports sont extrêmement réguliers, avec des passages fréquents, souvent toutes les cinq à dix minutes sur les lignes principales, ce qui rend les déplacements fluides et spontanés.</p>
                        <p>En semaine, du dimanche au jeudi, les métros et S-Bahn s’arrêtent généralement autour d’1h à 1h30 du matin. Mais la ville ne s’endort pas complètement : des bus de nuit, reconnaissables à leur lettre « N », prennent le relais pour maintenir les grands axes accessibles.</p>
                        <p>Le week-end, Berlin révèle encore davantage son tempérament nocturne. Les vendredis et samedis soir, U-Bahn et S-Bahn circulent toute la nuit, certes avec une fréquence un peu réduite, mais largement suffisante pour rentrer sereinement après un dîner tardif, un concert, un bar ou une longue soirée berlinoise. Ici, la ville semble avoir parfaitement compris qu’à Berlin, la nuit fait aussi partie du voyage.</p>
                      </>
                    ),
                  },
                  {
                    id: 'monnaie',
                    label: 'Monnaie',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M14.8 9a2 2 0 0 0-2-1.5h-1.6a2 2 0 0 0 0 4h1.6a2 2 0 0 1 0 4H11a2 2 0 0 1-2-1.5"/><line x1="12" y1="6" x2="12" y2="18"/></svg>,
                    content: (
                      <>
                        <p>L’Allemagne fait partie de la zone euro : pas de change à prévoir si vous venez de France.</p>
                        <p>La carte bancaire est largement acceptée à Berlin, mais gardez un peu de liquide sur vous : certains petits commerces, bars et marchés fonctionnent encore uniquement en espèces.</p>
                      </>
                    ),
                  },
                  {
                    id: 'prises',
                    label: 'Prises',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M7 12l5 5l-1.5 1.5a3.536 3.536 0 1 1 -5 -5l1.5 -1.5"/><path d="M17 12l-5 -5l1.5 -1.5a3.536 3.536 0 1 1 5 5l-1.5 1.5"/><path d="M3 21l2.5 -2.5"/><path d="M18.5 5.5l2.5 -2.5"/><path d="M10 11l-2 2"/><path d="M13 14l-2 2"/></svg>,
                    content: (
                      <>
                        <p>Bonne nouvelle : l’Allemagne utilise le même type de prises électriques que la France (type C/F). Aucun adaptateur n’est nécessaire.</p>
                      </>
                    ),
                  },
                  {
                    id: 'savoir-vivre',
                    label: 'Savoir-vivre',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"/></svg>,
                    content: (
                      <>
                        <p>Berlin est une ville libre et décontractée, mais quelques repères sont bons à connaître :</p>
                        <ul className="article-pratique-list-gold">
                          <li>La consommation d’alcool dans l’espace public (rue, parcs) est légale et courante.</li>
                          <li>Dans le métro, laissez descendre les passagers avant de monter.</li>
                          <li>Le dimanche, la quasi-totalité des commerces sont fermés (hors restaurants et marchés type Mauerpark).</li>
                          <li>Dans certains lieux alternatifs et clubs (comme le Club der Visionäre), les photos sont interdites : respectez la consigne.</li>
                        </ul>
                      </>
                    ),
                  },
                ]} />
            </div>
          </section>

          <section className="article-comments-section">
            <h2 className="article-comments-title">Commentaires</h2>

            <CommentsList comments={[]} />
            <CommentForm
              articleTitle={"Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses"}
              articleUrl="https://mamzellesenvadrouille.com/visiter-berlin-en-4-jours"
            />
          </section>

          <NewsletterForm />

          {/* ARTICLES LIES */}
          <div className="article-related">
            <h3 className="article-related-title">À lire aussi</h3>
            <div className="article-related-grid">
              <a href="/visiter-londres" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="/Londres.webp" alt="Londres" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Angleterre</span>
                  <p className="article-related-title-card">Visiter Londres : que faire en 7 jours par quartier</p>
                </div>
              </a>
              <a href="/visiter-madrid-en-3-jours" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/Madrid-1536x1229.jpeg.webp" alt="Madrid" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Espagne</span>
                  <p className="article-related-title-card">Visiter Madrid en 3 jours : itinéraire et bons plans</p>
                </div>
              </a>
              <a href="/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Palawan-1024x819.jpg" alt="Palawan El Nido Coron" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Philippines</span>
                  <p className="article-related-title-card">Palawan : Coron et El Nido, le joyau des Philippines</p>
                </div>
              </a>
            </div>
            <a href="/blog" className="article-related-link">Voir tous nos articles →</a>
          </div>

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
