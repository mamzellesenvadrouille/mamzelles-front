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
  alternates: { canonical: 'https://mamzellesenvadrouille.com/visiter-berlin-4-jours' },
  openGraph: {
    title: "Visiter Berlin en 4 jours : itinéraire complet et bonnes adresses",
    description: "Notre itinéraire complet pour visiter Berlin en 4 jours, entre mémoire, histoire, street art et contre-culture, avec tous nos bons plans pratiques.",
    url: 'https://mamzellesenvadrouille.com/visiter-berlin-4-jours',
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
      '@id': 'https://mamzellesenvadrouille.com/visiter-berlin-4-jours',
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
          <h1>Berlin<br /><em>Entre mémoire et liberté</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Quatre jours, trois nuits, pour se laisser<br className="desktop-only-br" /> surprendre par une capitale hors normes.</p>
        </div>
      </section>

    </div>

      {/* BANDEAU EN BREF */}
      <div className="article-bref-bar">
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>4 jours, 3 nuits</span>
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
          <h2>Pourquoi on adore Berlin</h2>
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
          <p className="article-intro">Pour ses 40 ans, Laurie a offert à Amélie un week-end surprise à Berlin. Destination tenue secrète jusqu’au bout : valises, trajets en train et en avion, hôtel… tout avait été anticipé.</p>
          <p>Depuis quelque temps, on parlait de découvrir Berlin, intriguées par cette ville à la réputation si particulière. Mais on était très loin de s’attendre à ça.</p>
          <p>Berlin nous a complètement happées. Une ville libre, contrastée, surprenante… et franchement incroyable. Berlin nous a surprises, bousculées, fascinées. Une ville brute, vibrante, profondément marquante.</p>
          <p><strong>On vous propose notre itinéraire de 4 jours et 3 nuits à travers la ville, entre mémoire, histoire, street art et contre-culture. C’est partiiiiiii !</strong></p>
          <div className="article-tip">
            <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
            <div><strong>Pour venir depuis la France</strong><p>Plusieurs compagnies proposent des vols directs vers Berlin depuis les grandes villes françaises (Nice, Paris, Lyon, Marseille…), avec un temps de vol d’environ 2 h. On trouve régulièrement des billets aller-retour entre 60 et 150 € selon la saison et l’avance de réservation.</p></div>
          </div>
          </section>

          {/* JOUR 1 */}
          <section id="jour-1-prenzlauer-berg" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 1</span>
              <h2>Prenzlauer Berg &amp; l’île aux Musées</h2>
            </div>
            <p>Direction la gare d’Antibes, puis la gare Saint-Augustin de Nice pour l’aéroport. C’est seulement là qu’Amélie découvre la destination surprise : Berlin, quatre jours et trois nuits dans une ville qui allait la surprendre bien plus qu’elle ne l’imaginait.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Depuis l’aéroport de Berlin, prenez le S-Bahn au terminal 1 direction la Hauptbahnhof (gare centrale). Comptez 5 € par personne pour un ticket valable deux heures, largement suffisant pour rejoindre le centre.</p></div>
            </div>
            <p>En sortant de la gare côté Europaplatz, on prend le tram M10, juste en face, direction U Eberswalder Straße, au nord-est de Berlin. Dès la sortie du tram, l’ambiance nous saute au visage : du monde partout, des vélos, des trams, des bus qui passent sans arrêt… on sent immédiatement l’énergie de Berlin.</p>
            <h3>Premier arrêt gourmand : le Gemüse Kebab</h3>
            <p>Sur le chemin de l’hôtel, arrêt obligatoire dans une véritable institution berlinoise. Ici, on ne parle pas d’un kebab classique : viande grillée, légumes rôtis, crudités ultra fraîches, fromage type feta et sauces maison à l’ail et épicée, le tout dans un pain croustillant. Copieux, à goûter absolument — et où l’attente fait presque partie de l’expérience.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour manger</span>
                  <span className="article-resto-tag">Street-food</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Rüyam Gemüse Kebab</p>
                  <p className="article-resto-sub">Kebab légendaire · Prenzlauer Berg</p>
                  <p>Une institution à Berlin. Leur spécialité, le Gemüse Kebab, mélange viande grillée, légumes rôtis, crudités, feta et sauces maison. Copieux — Laurie n’a même pas réussi à le terminer !</p>
                </div>
              </div>
            </div>
            <h3>Hôtel Oderberger, un ancien bain public transformé</h3>
            <p>Notre hôtel se trouve dans le quartier de Prenzlauer Berg, dans l’ancien Berlin-Est. Il a gardé son architecture historique, ses beaux immeubles anciens, ses grandes avenues bordées d’arbres et ses places pleines de cafés et de terrasses. C’est aujourd’hui l’un des quartiers les plus agréables où séjourner à Berlin, entre ambiance locale et vraie énergie urbaine.</p>
            <p>La façade de l’Hôtel Oderberger a beaucoup de charme, avec son style ancien et son côté presque hors du temps — un charme berlinois brut et raffiné à la fois. À l’intérieur, les murs et éléments historiques ont été conservés, mais le mobilier et les espaces communs sont très contemporains : bois, lignes épurées, lumière tamisée, minimalisme chic. Loin du palace classique, plutôt un luxe discret, mélange d’histoire et de modernité.</p>
            <p>L’hôtel est installé dans un ancien bain public historique, ouvert au début des années 1900 pour offrir des bains aux habitants, à une époque où beaucoup d’appartements n’avaient pas encore de salle de bain. Fermé en 1986, il est resté abandonné pendant des décennies avant une restauration monumentale. Son gros atout aujourd’hui : la piscine néo-Renaissance dans l’ancienne halle de natation, qui peut même accueillir des événements privés.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a4 4 0 018 0v2"/></svg>Pour dormir</span>
                  <span className="article-resto-tag">★★★★</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Hôtel Oderberger</p>
                  <p className="article-resto-sub">Oderberger Straße 57, 10435 Berlin · Prenzlauer Berg</p>
                  <p>Un ancien bain public du début du XXe siècle, restauré en hôtel 4 étoiles design, avec sa spectaculaire piscine néo-Renaissance.</p>
                </div>
              </div>
            </div>
            <h3>Balade dans Prenzlauer Berg</h3>
            <p>Après notre installation, on part directement se balader dans le quartier avant de rejoindre le centre de Berlin.</p>
            <p>On commence par le <strong>Kulturbrauerei</strong>, à deux pas de l’hôtel : un immense ancien complexe de brasserie en briques rouges reconverti en lieu culturel, où se mêlent bars, restaurants, supérettes, cinéma et parfois marchés ou concerts en plein air. Idéal pour boire un verre dans une ambiance locale, un peu industrielle-chic, loin du Berlin trop « carte postale ».</p>
            <p>On continue vers <strong>Kastanienallee</strong>, l’une des rues les plus agréables du quartier : cafés cool, jolies boutiques, friperies, restos et terrasses se succèdent dans une ambiance à la fois branchée et décontractée.</p>
            <p>Non loin de là, direction le <strong>Wasserturm</strong> de Prenzlauer Berg, le plus ancien château d’eau de Berlin, construit au XIXe siècle. Véritable symbole du quartier, il veille sur les jolies rues résidentielles environnantes et apporte une ambiance plus calme, presque village, au cœur de la ville. Juste derrière, un petit parc où on s’offre un tour de tourniquet.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>En vous promenant dans Berlin, ouvrez l’œil : de petites plaques en laiton incrustées dans le sol, appelées <strong>Stolpersteine</strong>, rendent hommage aux victimes du nazisme ayant vécu à ces adresses avant d’être déportées ou persécutées. Sur chaque plaque figurent un nom, une date et quelques informations sur leur destin. On en trouve notamment à Prenzlauer Berg, Mitte, Kreuzberg et Charlottenburg.</p></div>
            </div>
            <p>On poursuit vers <strong>Kollwitzplatz</strong>, une charmante place arborée au cœur de Prenzlauer Berg, entre cafés, restaurants et familles berlinoises installées sur les bancs. Un Berlin plus calme, presque un esprit de village au cœur de la ville.</p>
            <h3>Haus Schwarzenberg, l’esprit alternatif</h3>
            <p>En descendant vers le centre-ville, on tombe sur <strong>Haus Schwarzenberg</strong> : une cour cachée derrière un porche, à l’atmosphère immédiatement plus alternative, très Berlin underground. Murs couverts de street art, de graffitis, de collages. Dans la cour, on trouve un <em>art-o-mat</em>, un ancien distributeur à cigarettes reconverti en distributeur d’art, très répandu à Berlin dans les quartiers alternatifs. On s’installe en terrasse pour boire un verre et profiter de cette ambiance hors du temps.</p>
            <p>Non loin de là, on traverse <strong>Hackescher Markt</strong>, dans le quartier de Mitte, un coin très vivant du centre où se mêlent habitants, artistes, touristes et Berlinois. Le quartier est surtout connu pour les <strong>Hackesche Höfe</strong>, un ensemble de cours intérieures restaurées parmi les plus belles de la ville — qu’on a malheureusement loupées, découvertes seulement en rédigeant cet article !</p>
            <h3>Coucher de soleil sur l’île aux Musées</h3>
            <p>À quelques minutes à pied se trouvent <strong>James-Simon-Park</strong> et <strong>Monbijou Park</strong>, côte à côte au bord de la Spree. Ambiance détendue et locale, des gens qui traînent en groupe, jouent, dansent, boivent un coup.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>À Berlin, et plus largement en Allemagne, il n’existe pas de loi interdisant la consommation d’alcool dans l’espace public. Il est donc tout à fait courant de voir des gens boire une bière dans la rue ou dans les parcs.</p></div>
            </div>
            <p>On s’installe dans l’herbe du côté de James-Simon-Park, avec une vue plongeante sur l’<strong>île aux Musées</strong>, l’un des ensembles culturels les plus importants d’Europe, classé au patrimoine mondial de l’UNESCO. Un très beau panorama sur la rivière, les péniches, et surtout sur la magnifique <strong>Berliner Dom</strong> qui s’illumine à la tombée de la nuit. Un spot idéal pour le coucher de soleil, avec une lumière dorée magnifique sur l’île aux Musées.</p>
            <p>Sur le retour à pied vers l’hôtel, la ville ne s’arrête jamais vraiment : restaurants et bars restent ouverts tard, certains commerces tournent presque en continu. On s’arrête goûter la <strong>Currywurst</strong>, la spécialité street food emblématique de Berlin — une saucisse coupée en morceaux, recouverte d’une sauce tomate-ketchup épicée au curry, servie avec des frites, dans une barquette en carton. Pas de la grande gastronomie, mais un vrai rituel berlinois du quotidien, rapide et pas cher.</p>
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
              <h2>Holzmarkt, East Side Gallery, Kreuzberg &amp; Tempelhof</h2>
            </div>
            <p>Premier réveil et premier petit-déjeuner dans ce magnifique hôtel, un buffet très complet pour prendre des forces avant d’arpenter cette ville qui nous réserve encore bien des surprises. Direction l’Est de Berlin, avec tout un programme organisé par Laurie, en vraie travel planner.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>En vous promenant, vous remarquerez ces fameux tuyaux roses qui serpentent un peu partout dans la ville. Berlin ayant été construite sur d’anciens marécages, ils servent à pomper les eaux souterraines pour éviter les infiltrations lors des travaux — une curiosité urbaine devenue une véritable signature visuelle.</p></div>
            </div>
            <h3>Holzmarkt 25, le village bohème au bord de la Spree</h3>
            <p>Installé au bord de la Spree, ce lieu à l’esprit bohème, alternatif et artistique dégage une atmosphère unique. On a presque l’impression d’avoir découvert un petit village caché, à mille lieues de l’agitation urbaine, alors que la ville continue de vibrer tout autour. On déambule entre les cabanes en bois, sous les guirlandes suspendues, entre les terrasses improvisées.</p>
            <p>On prend une bière bien fraîche dans l’une des cabanes (les bouteilles sont consignées, un jeton contre 1 € au retour), et on s’installe au bord de l’eau, presque les pieds dedans. Côté food, c’est simple et convivial : street food, pizzas, burgers, options veggie.</p>
            <h3>East Side Gallery, le mur devenu galerie à ciel ouvert</h3>
            <p>À environ 20 minutes à pied, on rejoint le plus long tronçon encore debout du mur de Berlin, transformé aujourd’hui en immense galerie d’art à ciel ouvert. Sur près d’1,3 kilomètre, des artistes du monde entier ont recouvert ce vestige de la séparation entre l’Est et l’Ouest avec des fresques colorées, engagées, parfois poétiques, parfois politiques.</p>
            <p>Impossible de ne pas s’arrêter devant certaines œuvres devenues iconiques, comme le célèbre baiser fraternel entre dirigeants communistes. Ce qui marque surtout ici, c’est le contraste : d’un côté des œuvres colorées pleines de vie, de l’autre le rappel qu’à cet endroit même, un mur séparait une ville entière pendant presque 30 ans.</p>
            <h3>RAW-Gelände &amp; Oberbaumbrücke</h3>
            <p>À moins de 15 minutes à pied, le <strong>RAW-Gelände</strong> est un immense ancien site industriel reconverti, dans le quartier de Friedrichshain — à l’origine un dépôt de réparation ferroviaire. L’ambiance y est volontairement chaotique : industrielle, underground, arty. En journée, on peut y flâner pour voir les fresques et boire un verre ; le soir, le lieu se transforme en spot de fête avec bars et clubs.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Curiosité berlinoise</strong><p>Au RAW-Gelände, on trouve des distributeurs de colis mystères : pour quelques euros, on tente sa chance et on achète un colis non réclamé sans savoir ce qu’il contient. Une idée originale qui reflète bien l’esprit créatif de Berlin.</p></div>
            </div>
            <p>Non loin de là, on rejoint l’<strong>Oberbaumbrücke</strong>, l’un des ponts les plus emblématiques de Berlin, reconnaissable à ses tours en briques rouges. Il relie Friedrichshain et Kreuzberg au-dessus de la Spree et symbolise la réunification, puisqu’il marquait autrefois une frontière entre Berlin-Est et Berlin-Ouest.</p>
            <h3>Kreuzberg, l’esprit rebelle</h3>
            <p>On traverse le pont et on poursuit à pied jusqu’au cœur de <strong>Kreuzberg</strong>. L’ambiance y est un mélange d’énergie alternative, de diversité culturelle et de créativité, avec un petit côté rebelle qui fait tout son charme. Entre le street art, les terrasses animées et les façades brutes, le quartier dégage une vraie personnalité, entre esprit punk et adresse aujourd’hui très tendance.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour boire un verre</span>
                  <span className="article-resto-tag">Kreuzberg</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Südblock</p>
                  <p className="article-resto-sub">Bar animé · Kreuzberg</p>
                  <p>Un lieu bien vivant qui s’intègre parfaitement à l’atmosphère du quartier, parfait pour une pause bien méritée.</p>
                </div>
              </div>
            </div>
            <h3>Tempelhofer Feld, l’ancien aéroport transformé en parc</h3>
            <p>Pour le sunset, direction un endroit insolite : l’ancien aéroport de Tempelhofer Feld, au sud du centre de Berlin. Il faisait partie de l’énorme aéroport de Tempelhof, fermé en 2008. Depuis 2010, l’espace est ouvert au public et c’est devenu l’un des plus grands espaces urbains ouverts au monde, avec plus de 300 hectares.</p>
            <p>Ce qui est fou, c’est que les anciennes pistes d’atterrissage sont restées : on peut littéralement marcher dessus, faire du vélo, du roller ou s’asseoir au milieu d’une piste où des avions décollaient autrefois.</p>
            <h3>Klunkerkranich, le rooftop bohème</h3>
            <p>Pour terminer la soirée, direction le rooftop <strong>Klunkerkranich</strong>, perché au-dessus d’un centre commercial à Neukölln. C’est justement ce contraste qui fait son charme : on prend l’ascenseur, on traverse un parking un peu banal, puis on emprunte l’ancienne rampe qui permettait aux voitures d’accéder au toit, pour arriver dans un lieu presque caché.</p>
            <p>Ici, pas de rooftop ultra-luxueux : l’ambiance est bohème, un peu arty, avec des plantes, des lumières suspendues, du mobilier récupéré, une voiture abandonnée dans laquelle on peut s’installer. Certains soirs, un DJ ou de la musique live accompagne le coucher du soleil.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Il peut y avoir un peu d’attente au Klunkerkranich, surtout le week-end ou quand il fait beau.</p></div>
            </div>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour manger (tard le soir)</span>
                  <span className="article-resto-tag">Burger</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Burgermeister</p>
                  <p className="article-resto-sub">Adresse historique · Prenzlauer Berg</p>
                  <p>Fondée en 2006, c’est l’adresse la plus réputée pour les amateurs de burgers à Berlin. On a goûté le burger signature : bœuf, oignons grillés, bacon, sauce barbecue et moutarde. Un délice !</p>
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
              <h2>Cœur historique et politique, jusqu’à Teufelsberg</h2>
            </div>
            <p>Une journée, toute une histoire. On démarre au <strong>Nikolaiviertel</strong>, le plus vieux quartier de Berlin, situé dans le centre (Mitte), entre Alexanderplatz et l’île aux Musées. Changement d’ambiance immédiat : on quitte le tumulte de la ville pour de petites ruelles pavées et des façades colorées. Au cœur du quartier se dresse l’église Saint-Nicolas, reconnaissable à ses deux tours, qui rappelle les origines médiévales de Berlin.</p>
            <p>Le quartier est relativement calme, idéal pour flâner et profiter de belles vues sur la Spree. On s’installe en terrasse pour se rafraîchir un peu.</p>
            <h3>Berliner Dom &amp; Unter den Linden</h3>
            <p>Non loin, on aperçoit la tour de télévision de Berlin, qui mesure 368 mètres — le plus haut monument d’Allemagne. Puis on rejoint le <strong>Berliner Dom</strong>, l’un des monuments les plus impressionnants de Berlin avec son immense dôme vert. C’est la plus grande église protestante de Berlin, construite entre 1894 et 1905 pour la famille impériale allemande.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Pour 10 € vous pouvez visiter le Berliner Dom : intérieur de l’église, crypte des Hohenzollern, musée et galerie panoramique sous le dôme, avec une belle vue sur Berlin.</p></div>
            </div>
            <p>En quittant le Berliner Dom, on rejoint <strong>Unter den Linden</strong>, la célèbre avenue bordée de tilleuls qui traverse le centre historique, entre bâtiments prestigieux, ambassades et universités.</p>
            <p>On arrive à la <strong>Bebelplatz</strong>, où en 1933 des milliers de livres furent brûlés par les nazis. Aujourd’hui, une plaque de verre discrète, posée au sol, invite à regarder sous ses pieds : on découvre une pièce souterraine toute blanche, une bibliothèque totalement vide. Un silence visuel qui en dit long sur le vide laissé par la censure.</p>
            <h3>Porte de Brandebourg &amp; Reichstag</h3>
            <p>On poursuit jusqu’à la <strong>Porte de Brandebourg</strong>, symbole de Berlin et de l’Allemagne réunifiée, qui a traversé les époques de la division de la ville à la chute du Mur. Elle accueille aujourd’hui les visiteurs au rythme des musiciens de rue.</p>
            <p>À quelques minutes à pied, le <strong>Bâtiment du Reichstag</strong>, siège du Parlement allemand, cache derrière sa façade historique une impressionnante coupole de verre devenue l’un des symboles de Berlin. Nous n’avons pas visité l’intérieur, mais la vue depuis la coupole offrirait un magnifique panorama sur la ville.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>La visite de la coupole du Reichstag est gratuite, mais il est fortement conseillé de réserver à l’avance.</p></div>
            </div>
            <h3>Mémorial de l’Holocauste &amp; Topographie de la Terreur</h3>
            <p>À quelques minutes de marche, le <strong>Mémorial de l’Holocauste</strong> impressionne par son immensité : 2 711 stèles de béton de différentes hauteurs s’étendent sur une immense place, formant un véritable labyrinthe. En s’aventurant au milieu, le bruit de la ville s’efface peu à peu, laissant place à une atmosphère particulière — on se sent tout petit, un peu perturbé et ému à la fois.</p>
            <p>C’est un peu déboussolées qu’on quitte cet endroit, direction <strong>Topography of Terror</strong>, à environ 10 minutes de marche. Le premier élément marquant qu’on voit en arrivant, c’est l’un des plus longs vestiges encore visibles du Mur de Berlin. Installé sur le site des anciens quartiers généraux de la Gestapo et des SS, ce centre de documentation présente de nombreuses photos, archives et témoignages — une visite passionnante et bouleversante.</p>
            <h3>Teufelsberg, le sunset qui vaut le détour</h3>
            <p>Pour clôturer cette journée riche en histoire et en émotions, direction <strong>Teufelsberg</strong>, la célèbre « montagne du Diable ». On nous avait dit que le coucher de soleil y était magique… et on confirme, le détour en vaut largement la peine.</p>
            <p>Teufelsberg est une colline artificielle construite après la Seconde Guerre mondiale à partir des millions de tonnes de gravats laissés par la destruction de Berlin. Au sommet se dressent les vestiges d’une ancienne station d’écoute américaine datant de la Guerre froide. Entre les immenses radômes blancs, les fresques de street art qui recouvrent chaque mur et la vue panoramique sur Berlin, l’atmosphère est hors du temps. Un véritable coup de cœur.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>L’entrée est payante : comptez 12 € par personne. Le site ferme à 21 h, pensez à arriver suffisamment tôt.</p></div>
            </div>
            <h3>Dernière soirée : Kreuzberg &amp; Club der Visionäre</h3>
            <p>Pour notre dernière nuit, on a décidé de jouer les prolongations. Retour express à l’hôtel pour se changer, puis direction <strong>Pasta &amp; Passione</strong>, un petit restaurant italien à deux pas de l’hôtel — leurs gnocchis maison sont délicieux.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour dîner</span>
                  <span className="article-resto-tag">Italien</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Pasta &amp; Passione</p>
                  <p className="article-resto-sub">Restaurant italien · Prenzlauer Berg</p>
                  <p>Un petit établissement à deux pas de l’Hôtel Oderberger. Si vous y passez, testez leurs gnocchis maison, ils sont délicieux.</p>
                </div>
              </div>
            </div>
            <p>On prend ensuite la direction de Kreuzberg pour rejoindre le <strong>Club der Visionäre</strong>, l’un des clubs les plus réputés de la ville, à quelques minutes à pied de la gare Schlesisches Tor. Ce club à ciel ouvert se situe au bord du canal du Flutgraben, sur une grande terrasse en bois. House, minimal et techno rythment la soirée, dans une atmosphère plus intimiste que celle des grands clubs berlinois.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>L’entrée au Club der Visionäre coûte généralement entre 5 et 10 € selon la programmation. Les photos y sont interdites.</p></div>
            </div>
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
              <h2>Mauerpark &amp; derniers instants</h2>
            </div>
            <p>Dernier petit-déjeuner englouti, chambre libérée, bagages déposés à la réception… il nous reste encore quelques heures pour profiter de Berlin. On quitte l’hôtel à pied, direction une petite brocante de bric et de broc, sur une place entourée d’arbres. Peu de touristes, ambiance authentique.</p>
            <h3>Mauerpark, le marché aux puces emblématique</h3>
            <p>On continue jusqu’au fameux <strong>Mauerpark</strong>, connu pour son marché aux puces. L’entrée est gratuite. Ici, c’est un concentré de Berlin dans un parc — un incontournable, mais il faut aimer la foule.</p>
            <p>Le <strong>Mauerpark Flohmarkt</strong> est le marché aux puces emblématique de Berlin, parfait si vous aimez l’ambiance bohème, vintage et un peu alternative. On y trouve de tout : friperie, bijoux, lunettes, vinyles, créations d’artistes… le genre d’endroit où on repart avec un truc dont on n’avait absolument pas besoin, mais qui devient soudain indispensable.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Ce marché est ouvert tous les dimanches, de 10 h à 18 h.</p></div>
            </div>
            <p>Derrière le marché, un immense parc où familles et groupes d’amis s’installent dans la pelouse, avec barbecues et terrains de volley à disposition. En se baladant, on croise musiciens et artistes de rue. C’est dans l’amphithéâtre du parc que se déroule le célèbre karaoké géant du Mauerpark — qu’on a malheureusement manqué, au grand désarroi de Laurie !</p>
            <h3>Pause gourmande à Schönwetter</h3>
            <p>Les abords du marché se transforment en véritable voyage culinaire : spécialités locales, cuisine asiatique, italienne, plats végétariens et vegan, douceurs sucrées… Au-delà des stands de street food du dimanche, on a voulu tester une adresse ouverte toute l’année.</p>
            <div className="article-resto">
              <div className="article-resto-item">
                <div className="article-resto-head">
                  <span className="article-resto-head-label"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg>Pour une pause gourmande</span>
                  <span className="article-resto-tag">Mauerpark</span>
                </div>
                <div className="article-resto-body">
                  <p className="article-resto-name">Schönwetter</p>
                  <p className="article-resto-sub">Bar &amp; grillades · Mauerpark</p>
                  <p>Un lieu détendu qui sert des cocktails rafraîchissants et de savoureuses grillades. Ce qui nous a attiré : les transats, le sable fin, et un peu l’odeur des grillades aussi !</p>
                </div>
              </div>
            </div>
            <p>Direction l’hôtel Oderberger pour récupérer nos affaires. Surprise : l’équipe nous offre un petit canard en plastique, clin d’œil à son histoire d’ancien bain public. Un souvenir simple, mais qui nous a fait énormément plaisir. Tout au long du séjour, on a été touchées par la gentillesse et le professionnalisme de toute l’équipe.</p>
            <p>C’est maintenant l’heure du départ, la tête remplie de souvenirs et déjà nostalgiques de ce magnifique week-end berlinois.</p>
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
              <p>Ce n’est pas une ville « carte postale » comme Paris ou Rome. Elle est parfois un peu grise, parfois industrielle, souvent imparfaite… mais c’est justement ce qui fait son charme. Personne ne regarde personne, tout le monde peut y être lui-même sans être jugé.</p>
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
                        <p>À Berlin, se déplacer est presque un jeu d’enfant. La ville est remarquablement bien desservie et il est tout à fait possible de s’y passer complètement de voiture.</p>
                        <p>Quatre grands moyens de transport structurent la ville : l’<strong>U-Bahn</strong> (métro), rapide et fréquent pour circuler dans le centre ; le <strong>S-Bahn</strong>, une sorte de RER urbain pour traverser Berlin de part en part et rejoindre l’aéroport ; les <strong>tramways</strong>, omniprésents dans l’ancien Berlin-Est (Prenzlauer Berg, Friedrichshain) ; et les <strong>bus</strong>, qui complètent le réseau.</p>
                        <p>Un seul ticket permet d’emprunter métro, S-Bahn, tram et bus, valable 2 heures.</p>
                        <p>En semaine, du dimanche au jeudi, métros et S-Bahn s’arrêtent généralement autour d’1h à 1h30 du matin, relayés par des bus de nuit reconnaissables à leur lettre « N ». Le week-end (vendredi et samedi soir), U-Bahn et S-Bahn circulent toute la nuit.</p>
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
              articleUrl="https://mamzellesenvadrouille.com/visiter-berlin-4-jours"
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
