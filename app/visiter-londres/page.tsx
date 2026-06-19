import type { Metadata } from 'next';
import './londres.css';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';

export const metadata: Metadata = {
  title: "Visiter Londres en 1 semaine : l’essentiel par quartier, infos pratiques & bons plans | MamZelles en vadrouille",
  description: "Notre itinéraire de 7 jours à Londres quartier par quartier : Westminster, la City, Notting Hill, Camden, Brighton… plus toutes les infos pratiques (formalités, transports, Oyster Card, où se loger).",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/visiter-londres' },
  openGraph: {
    title: "Visiter Londres en 1 semaine : l’essentiel par quartier",
    description: "Notre itinéraire de 7 jours à Londres, quartier par quartier, avec toutes nos infos pratiques et bons plans.",
    url: 'https://mamzellesenvadrouille.com/visiter-londres',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/Londres.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR',
    type: 'article',
    authors: ['MamZelles en vadrouille'],
  },
};

export default function VisiterLondresPage() {
  return (
    <>
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* HERO */}
      <section className="hero hero-article" style={{ overflowX: 'hidden' }}>
        <Navbar activePage="blog" />
        <img className="hero-bg" src="/Londres.webp" alt="Visiter Londres en une semaine" style={{objectPosition: 'center 50%'}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Londres<br /><em>L’essentiel en une semaine</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Sept jours, quartier par quartier, pour tomber sous le charme de la capitale britannique.</p>
        </div>
      </section>

    </div>

      {/* BANDEAU EN BREF */}
      <div className="article-bref-bar">
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>1 semaine</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <span>Avr. à sept.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"/></svg>
          <span>120-150€/j/pers.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M14.8 9a2 2 0 0 0-2-1.5h-1.6a2 2 0 0 0 0 4h1.6a2 2 0 0 1 0 4H11a2 2 0 0 1-2-1.5"/><line x1="12" y1="6" x2="12" y2="18"/></svg>
          <span>Livre sterling (£)</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Anglais</span>
        </div>
      </div>

      {/* COUP DE COEUR */}
      <div className="article-coup-de-coeur">
        <div className="article-cdcr-header">
          <span className="article-cdcr-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#c8956c" stroke="#c8956c" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </span>
          <h2>Pourquoi on adore Londres</h2>
        </div>
        <div className="article-cdcr-grid">
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre quartier coup de cœur</span><span className="article-cdcr-value">→ Notting Hill</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le spot le plus iconique</span><span className="article-cdcr-value">→ Westminster &amp; Big Ben</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le moment le plus magique</span><span className="article-cdcr-value">→ Le sunset sur la Tamise</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">À tester<br className="tablet-only-br" /> sans hésiter</span><span className="article-cdcr-value">→ L’Uber Boat &amp; le téléphérique</span></div>
        </div>
      </div>

      <div className="article-layout article-londres">
        <main className="article-main">

          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title">📌 Sommaire de l’article</h2>
            <ol className="article-toc-list">
              <li><a href="#jour-1-westminster">📍 Jour 1 — Westminster</a></li>
              <li><a href="#jour-2-southwark">📍 Jour 2 — Southwark &amp; South Bank, La City</a></li>
              <li><a href="#jour-3-notting">📍 Jour 3 — Notting Hill</a></li>
              <li><a href="#jour-4-brick">📍 Jour 4 — Brick Lane, Shoreditch &amp; Spitafields</a></li>
              <li><a href="#jour-5-covent">📍 Jour 5 — Covent Garden, Soho, Chinatown &amp; Piccadilly</a></li>
              <li><a href="#jour-6-camden">📍 Jour 6 — Camden Town, Stratford</a></li>
              <li><a href="#jour-7-brighton">📍 Jour 7 — Brighton, à 1H de train de Londres</a></li>
              <li><a href="#pratique">📍 Informations pratiques</a></li>
            </ol>
          </nav>

          {/* INTRO */}
          <section className="article-section">
          <p className="article-intro">Vous envisagez de visiter Londres pendant une semaine ? Quelle merveilleuse idée ! Vous aurez tout le temps nécessaire pour découvrir cette capitale fascinante, cosmopolite, vivante et vibrante !</p>
          <p>Quand on pense à Londres, on imagine les bus à deux étages et les cabines téléphoniques rouges, les taxis noirs, la Reine et son palais (Buckingham Palace), Big Ben, la Tamise, etc.</p>
          <p>Parce que nous aimons profondément cette ville, nous l’avons visitée à plusieurs reprises. Pourtant, nous avons l’impression de la redécouvrir à chaque séjour.</p>
          <p>Cette fois-ci, après avoir traversé la France en voiture avec notre chien Aladdin, nous nous y sommes rendues via l’Eurotunnel, au départ de Calais. C’était une chouette expérience !</p>
          <p><strong>Dans notre article, vous trouverez les réponses aux questions que vous vous posez pour votre séjour d’une semaine à Londres :  Quels sont les lieux incontournables à ne pas louper en fonction des quartiers ? Les bons plans pour organiser au mieux votre voyage ? Comment s’y rendre (avec ou sans son animal) ? ...</strong></p>
          <p><strong>Nous vous proposons aussi notre itinéraire de 7 jours à travers la ville que vous pourrez adapter au gré de vos envies !</strong></p>
          <p><strong>C’est partiiiiiii !</strong></p>
          <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3206-1-scaled-1024x768.jpeg" alt="Tower Bridge" className="article-img-full" loading="lazy" />
          </section>

          {/* JOURS */}
          <section id="jour-1-westminster" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 1</span>
              <h2>Westminster</h2>
            </div>
            <p>Situé au bord de la Tamise, le quartier de Westminster est dynamique, marqué par l’histoire du pays. Il est considéré comme le coeur politique et culturel de Londres.</p>
            <p>On y trouve de nombreux palais royaux, notamment <strong>Buckingham Palace</strong>, la résidence officielle de la famille royale.</p>
            <p>A cet endroit, vous pouvez observer l’échange entre l’ancienne et la nouvelle garde à partir de 10H45. Prévoyez d’arriver bien à l’avance, il y a toujours un monde incroyable pour assister à ce spectacle ! La <strong>cérémonie est gratuite</strong> et se déroule les <strong>lundi, mercredi, vendredi et dimanche</strong> selon les conditions météorologiques.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3030-scaled-e1637517864887-1024x666.jpeg" alt="Buckingham Londres" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3040-scaled-768x1024.jpeg" alt="Buckingham Londres 2" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3041-scaled-768x1024.jpeg" alt="Buckingham Londres 3" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Juste en face du palais se trouve le <strong>St. James’s Park</strong>, considéré comme l’un des plus beaux parcs de la capitale. Il offre une bouffée d’air frais et une atmosphère sereine au coeur de la ville. Dans ce parc, nous aimons déambuler dans les allées et observer les nombreux écureuils, pélicans, canards, et oiseaux qui y vivent.</p>
            <p>De l’autre côté de St. James’s Park, se dresse le <strong>Whitehall Palace</strong>. Ici, vous pouvez assister à la <strong>Horse Guards Parade</strong>, traduisez la relève de la garde à cheval. Moins spectaculaire que la relève de la garde à Buckingham Palace, nous trouvons que la relève des Horse Guards est plus ludique pour les enfants, notamment par la présence des chevaux. La cérémonie dure 30Mn et a lieu à <strong>11H du lundi au samedi</strong>, et à <strong>10H le dimanche</strong>.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9618-scaled-696x1024.jpeg" alt="Horse Guard Londres" loading="lazy" style={{flex: '0.68', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9896-scaled-1024x768.jpeg" alt="St. James’s Park Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>C’est à Westminster, au bord de la Tamise, que se dresse la tour d’horloge la plus célèbre au monde, <strong>Big Ben</strong> ! Elle domine le <strong>Palace of Westminster</strong>, là où siège le parlement.</p>
            <p>A quelques minutes à pied, vous trouverez la somptueuse <strong>Abbaye de Westminster</strong>. Cela fait plus de 700 ans qu’elle accueille les plus grands monarques, que ce soit pour des couronnements, des mariages ou des funérailles.</p>
            <p>Si vous souhaitez visiter l’Abbaye pour découvrir ses merveilles architecturales et décoratives conservées à travers les siècles, vous devrez payer 20£ (23€50) l’entrée par personne.</p>
            <p>Pour autant, il existe un <strong>bon plan pour la visiter gratuitement</strong> ! Il suffit de se présenter lors des cérémonies religieuses. Celles-ci ont lieu tous les jours, sont ouvertes à tous, et aucune participation financière n’est demandée !</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_3752-1-scaled-1024x686.jpeg" alt="Big Ben Londres 1" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9605-scaled-1024x800.jpeg" alt="Westminster Londres" loading="lazy" style={{flex: '1.28', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_3675-scaled-685x1024.jpeg" alt="Big Ben Londres 2" loading="lazy" style={{flex: '0.669', minWidth: 0}} />
            </div>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_3734-scaled-1024x686.jpeg" alt="Charing Cross" loading="lazy" style={{flex: '1.493', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_4114-scaled-1024x686.jpeg" alt="Baker Street Londres" loading="lazy" style={{flex: '1.493', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9902-scaled-1024x768.jpeg" alt="Westminster nuit Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>C’est parti pour une virée dans le quartier de Westminster ? Prenez le métro jusqu’à la station <strong>Westminster</strong>.</p>
              <p>Empruntez ensuite la <strong>Circle Line</strong> (ligne jaune), la <strong>District Line</strong> (ligne verte) ou la <strong>Jubilee Line</strong> (ligne grise).</p>
            </div>
          </section>

          <section id="jour-2-southwark" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h2>Southwark &amp; South Bank, La City</h2>
            </div>
            <h3>📍 Southwark &amp; South Bank</h3>
            <p>Modernes et historiques à la fois, ils font partie des quartiers incontournables de Londres. Situés sur les bords de la Tamise, ils offrent une multitudes d’attractions.</p>
            <p>Commencez par prendre de la hauteur en montant dans le <strong>London Eye</strong> à 135M ! Vous profiterez d’une vue panoramique à couper le souffle sur la ville. Pour réserver vos tickets, c’est <a href="https://www.londoneye.com/fr/" target="_blank" rel="noopener noreferrer" className="article-link">ici</a>.</p>
            <p>Puis, découvrez le <strong>Millenium Bridge</strong>, un pont piéton en acier, qui parait être suspendu au dessus du fleuve. Il relie le quartier de Southwark à La City.</p>
            <p>La <strong>Cathédrale St. Paul</strong> d’un côté, le <strong>Tate Museum</strong> de l’autre, profitez de ce sublime paysage pour faire de magnifiques clichés !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_3723-scaled-1024x686.jpeg" alt="Vue du London Eye" loading="lazy" style={{flex: '1.493', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3138-scaled-1024x768.jpeg" alt="The Anchor Bankside" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Amateur d’art ? Le célèbre <strong>Tate Museum</strong>, plus connu sous le nom de Tate Modern, est le musée d’art moderne le plus visité au monde. Plus de 7000 oeuvres y sont exposées, représentant différents mouvements comme le surréalisme, l’expressionnisme, l’abstrait, le pop art, etc...</p>
            <p>Et <strong>la visite est gratuite</strong> !</p>
            <p>Enfin, dans ce quartier, le <strong>SHARD</strong> (= l’Éclat de verre en français), impressionnant avec ses 87 étages, ne passera pas inaperçu... La nuit, il éclaire le ciel ! Magique ! Deux étages (au 68ème et au 69ème), ainsi que la terrasse (au 72ème), sont réservés au public et offrent une des plus belles vues sur la capitale britannique.</p>
            <p>Nous vous conseillons vivement de réserver vos <a href="https://www.visitbritainshop.com/fr/fr/view-shard" target="_blank" rel="noopener noreferrer" className="article-link">billets</a>.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3603-1024x520.jpeg" alt="London Eye Londres" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3554-1024x520.jpeg" alt="Millenium Bridge" loading="lazy" style={{flex: '1.969', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3537-1024x520.jpeg" alt="The Shard" loading="lazy" style={{flex: '1.969', minWidth: 0}} />
            </div>
            <p>Si vous aimez le Street Art, vous ne pourrez pas quitter ce quartier sans passer à proximité de la station de train de <strong>Waterloo</strong>. Derrière la gare, vous découvrirez un magnifique tunnel de 300M de long, appelé le <strong>Leake Street Graffiti</strong>.</p>
            <p>Pas très bien indiqué et même un peu caché à l’abri de la foule, les graffitis y sont autorisés par la municipalité de la ville de Londres. Banksy, le célèbre artiste inconnu, y a organisé en 2008 un événement en invitant des graffeurs du monde entier pour transformer le tunnel en galerie d’art. Cet endroit est une vraie pépite à découvrir !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9868-scaled-1024x768.jpeg" alt="Leake Street Graffiti" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9862-scaled-1024x576.jpeg" alt="Leake Street Graffiti 2" loading="lazy" style={{flex: '1.778', minWidth: 0}} />
            </div>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9849-scaled-1024x768.jpeg" alt="Leake Street Graffiti 3" className="article-img-full" loading="lazy" />
            <div className="article-resto">
              <div className="article-resto-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg><span>Pour manger</span></div>
              <div className="article-resto-item">
                <p className="article-resto-name">Borough Market</p>
                <p>À 5 Mn à pied du <strong>Shard</strong>, se trouve un endroit incontournable, <strong>Borough Market</strong>. C’est THE place to be pour la pause déjeuner. Il s’agit du plus ancien et du plus célèbre marché alimentaire de Londres. Borough Market a une particularité, une partie du marché est surplombée par un pont emprunté par des trains.</p>
                <p>Ce bruit peut-être surprenant (voire inquiétant !) la 1ère fois qu’on l’entend... Dans ce lieu très fréquenté les <strong>jours de marché</strong> (jeudis, vendredis et samedis), vous pouvez trouver des produits frais et locaux, mais également une multitude de stands de street-food des quatre coins du monde. Chacun y trouve son bonheur !</p>
              </div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3171-scaled-1024x768.jpeg" alt="Borough Market 1" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3158-scaled-1024x768.jpeg" alt="Borough Market 2" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_2947-scaled-1024x768.jpeg" alt="Borough Market 3" className="article-img-full" loading="lazy" />
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>Afin d’organiser au mieux votre visite dans ces quartiers que nous affectionnons beaucoup, envisagez de vous rendre à South Bank pour commencer.</p>
              <p>Pour cela, arrêtez-vous en métro à la station <strong>Waterloo</strong> en empruntant la <strong>Bakerloo Line</strong> (ligne marron), la <strong>Jubilee Line</strong> (ligne grise), la <strong>Northern Line</strong> (ligne noire) ou la <strong>Waterloo &amp; City Line</strong> (ligne verte claire).</p>
            </div>
            <h3>📍 La City</h3>
            <p>La City est l’un des quartiers les plus anciens de la capitale où se côtoient des édifices historiques majestueux, tels que le <strong>Tower Bridge</strong> et d’immenses grattes-ciel. En effet, il est à la fois le centre historique et le plus gros quartier des affaires de la ville. Le contraste des paysages est ici incroyable !</p>
            <p>Dans ce quartier, nous aimons nous balader le long de la Tamise jusqu’au <strong>Tower Bridge</strong>, le pont le plus célèbre de Londres et notre gros coup de coeur !</p>
            <p>Profitez alors de la traversée du pont à pied pour admirer la vue !</p>
            <p>Pour les plus téméraires, et moyennant 10£60 (12€50), vous pouvez emprunter la passerelle en verre (<a href="https://tower-bridge.london-tickets.co.uk/?gclid=Cj0KCQjwrJOMBhCZARIsAGEd4VG3-z0toNEg-DnTQvWNgGe_mDB2vKGnVEvDHJvlXvws6DG-NYo5DUgaAuEvEALw_wcB" target="_blank" rel="noopener noreferrer" className="article-link">The Tower Bridge Glass</a>) qui s’élève à 42M du sol. Sensations garanties !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3214-scaled-768x1024.jpeg" alt="Tower Bridge 2" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9962-scaled-1024x768.jpeg" alt="Tower Bridge nuit" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3207-scaled-1024x768.jpeg" alt="La City 2" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3268-scaled-768x1024.jpeg" alt="La City" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Attention... <strong>Bon plan à savoir !</strong> Si vous prenez l’ascenseur jusqu’au 6ème étage du centre commercial <strong>One New Change</strong>, vous découvrirez une immense terrasse sur le toit qui vous offrira une vue imprenable sur la <strong>Cathédrale St. Paul</strong> et sur la ville.</p>
            <p><strong>L’accès est gratuit !</strong></p>
            <p>N’hésitez pas à vous y rendre en fin de journée pour admirer le coucher de soleil de ce point de vue.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_4022-scaled-1024x686.jpeg" alt="Vue de St. Paul" className="article-img-full" loading="lazy" />
            <div className="article-resto">
              <div className="article-resto-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg><span>Pour manger</span></div>
              <div className="article-resto-item">
                <p className="article-resto-name">Le Relais de Venise, l’Entrecôte</p>
                <p>ce restaurant au style parisien propose un menu unique composé d’une salade croquante aux noix, et d’un contre-filet accompagné de sa succulente sauce secrète et de frites fraîches.</p>
                <p>Leurs desserts faits maison sont juste à tomber ! Le concept est vraiment top ! Menu à 26£ (30€) / personne. Le restaurant ne prend pas de réservation.</p>
              </div>
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>Si vous souhaitez commencer votre journée en visitant le quartier de La City, vous pouvez vous arrêter dans ce cas en métro à la station <strong>Monument</strong>, qui est assez centrale.</p>
              <p>Utilisez alors la <strong>Circle Line</strong> (ligne jaune) ou la <strong>District Line</strong> (ligne verte).</p>
            </div>
          </section>

          <section id="jour-3-notting" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 3</span>
              <h2>Notting Hill</h2>
            </div>
            <p>Rendu célèbre par le film « Coup de foudre à Notting Hill », <strong>ce quartier dans l’ouest</strong> est un incontournable lors d’un séjour à Londres ! Aisé et huppé, il est réputé pour ses rues de maisons victoriennes, plus colorées les unes que les autres.</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Pour découvrir <strong>Notting Hill</strong>, nous vous conseillons de sortir des avenues principales, de vous montrer curieux pour arpenter ses rues à la recherche des plus belles <em>mews </em>(= nom anglais donné aux petites rues pavées, souvent étroites, situées dans le centre et l’ouest de Londres) et des petits détails qui rendent ce quartier si beau !</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3051-scaled-1024x768.jpeg" alt="Notting Hill Gate" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_4207-1-scaled-1024x686.jpeg" alt="Porto Bello" loading="lazy" style={{flex: '1.493', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3054-scaled-1024x768.jpeg" alt="Notting Hill 1" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3058-scaled-1024x768.jpeg" alt="Notting Hill 2" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Le <strong>vendredi</strong> et le <strong>samedi</strong>, rendez-vous à la célèbre brocante de <strong>Portobello</strong>, devenue l’attraction phare de ce quartier. On y trouve vraiment de tout. Ce marché typique se présente comme le plus grand marché d’antiquités du monde, où plus de 1000 vendeurs se rassemblent.</p>
            <p>Vous trouverez aussi à Notting Hill, notamment à <strong>Ledbury Road</strong> et <strong>Westbourne Grove</strong>, de nombreuses boutiques chics, de décoration, d’objets vintages et insolites.</p>
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>Le meilleur moyen pour visiter ce quartier est de vous arrêter en métro à la station <strong>Notting Hill Gate</strong>.</p>
              <p>Pour cela, empruntez la <strong>Circle Line</strong> (ligne jaune), la <strong>District Line</strong> (ligne verte) ou la <strong>Central Line</strong> (ligne rouge).</p>
            </div>
          </section>

          <section id="jour-4-brick" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 4</span>
              <h2>Brick Lane, Shoreditch &amp; Spitafields</h2>
            </div>
            <p>Découvrez l’<strong>East End</strong> avec ses quartiers branchés et alternatifs, facilement reconnaissables par leur architecture industrielle, leurs bâtiments et cheminées en briques rouges.</p>
            <p>À l’origine, il s’agissait de quartiers assez pauvres et marginalisés où vivaient principalement des personnes issues de l’immigration et des ouvriers.</p>
            <p>Aujourd’hui, ce sont des quartiers multiculturels et incontournables pour la jeunesse, la vie y est moins chère qu’au coeur de Londres.</p>
            <p><strong>Ces trois quartiers</strong> « hipsters » et « bobos » regorgent de marchés (dont certains sont couverts), de boutiques de créateurs, de friperies, de vinyles, de galeries d’art et de Coffee shop. L’East End, où le street art s’est imposé, est vivant, fascinant, et surtout très différent du reste de Londres.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3253-scaled-1024x768.jpeg" alt="Spitalfields" className="article-img-full article-img-pano" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3727-768x1024.jpeg" alt="Graff 1" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3243-scaled-1024x768.jpeg" alt="Graff 3 Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_0193-scaled-1024x768.jpeg" alt="Rough Trade" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_0195-scaled-1024x768.jpeg" alt="Vinyles" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>N’hésitez pas à vous rendre au <strong>marché vintage de Brick Lane</strong>, au <strong>marché aux fleurs de Columbia Road</strong>, dans les <strong>rues de Shoreditch</strong> pour son street-art, et au <strong>Old Spitalfields Market</strong>, ces endroits valent le coup d’oeil !</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Si vous aimez ce genre d’ambiance décalée, nous vous conseillons de visiter ces quartiers <strong>le dimanche</strong>.</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3237-1-scaled-1024x768.jpeg" alt="Old Spitalfields" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3238-scaled-1024x768.jpeg" alt="Old Spitalfields 1" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_4319-scaled-1024x686.jpeg" alt="Graff 2" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_4304-scaled-1024x686.jpeg" alt="Graff 4" loading="lazy" style={{flex: '1.493', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_0189-scaled-1024x768.jpeg" alt="Brick Lane" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-resto">
              <div className="article-resto-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg><span>Pour manger</span></div>
              <div className="article-resto-item">
                <p className="article-resto-name">Old Spitalfields Market</p>
                <p>Vous y trouverez un marché de type artisanal (assez branché), mais surtout une ribambelle de stands de nourriture de tous pays.</p>
                <p>Avec une cuisine authentique et variée, le plus difficile ici sera de choisir le stand qui vous tentera le plus !</p>
              </div>
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>Si vous envisagez de déjeuner au Old Spitalfields Market, commencez alors par visiter <strong>Spitalfields</strong>. Pour cela, rendez-vous en métro à la station <strong>Liverpool Street</strong>. Elle est l’une des plus grande du centre de Londres</p>
              <p>Elle est desservie par la majorité des métros : la <strong>Central Line</strong> (ligne rouge),la <strong>Circle Line</strong> (ligne jaune), la <strong>Hammersmith &amp; City Line</strong> (ligne rose clair), la <strong>London Overground</strong> (ligne orange), et la <strong>Metropolitan Ligne</strong> (ligne rosé foncé).</p>
            </div>
          </section>

          <section id="jour-5-covent" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 5</span>
              <h2>Covent Garden, Soho, Chinatown &amp; Piccadilly</h2>
            </div>
            <h3>📍 Covent Garden</h3>
            <p>En ébullition ! C’est comme cela que nous qualifierons ce quartier très animé. C’est l’unique endroit à Londres où les spectacles de rue sont autorisés. Il est donc fréquent de croiser des artistes de rue (jongleurs, cracheurs de feu, musiciens, etc.), ce qui apporte une atmosphère particulière à ce lieu.</p>
            <p><strong>Covent Garden</strong> est surtout connu pour son sublime <strong>marché couvert</strong>, telle une immense serre en plein coeur de Londres, ses stands de bijoux, de vêtements, d’objets d’artisanat, et ses boutiques de mode.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9628-scaled-1024x768.jpeg" alt="Covent Garden Londres" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3066-scaled-1024x768.jpeg" alt="Covent Garden 2 Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9649-scaled-674x1024.jpeg" alt="Covent Garden Love Londres" loading="lazy" style={{flex: '0.658', minWidth: 0}} />
            </div>
            <p>Déambulez dans les petites rues, quitte à vous perdre un peu... C’est comme cela que nous avons découvert <strong>Neal’s Yard</strong>, une très jolie petite place piétonne aux façades colorées.</p>
            <p>Vous pourrez prendre le temps de faire une agréable petite pause à la terrasse d’un café pour profiter de ce havre de paix, de ce lieu dépaysant, qui donne l’impression d’avoir découvert un endroit secret.</p>
            <p>Non loin de là se trouve <strong>Trafalgar Square</strong>, la place la plus réputée de la capitale. Celle-ci est très importante dans la vie londonienne puisqu’elle accueille régulièrement de nombreuses manifestations et autres évènements. Cette place est également bien connue pour être un espace convivial, social et de liberté d’expression.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/12/IMG_9664_jpg-scaled-768x1024.jpg" alt="Neal’s Yard Londres 1" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9657-scaled-745x1024.jpeg" alt="Neal’s Yard 1 Londres" loading="lazy" style={{flex: '0.728', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3064-scaled-1024x768.jpeg" alt="Covent Garden Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3089-scaled-768x1024.jpeg" alt="British Museum Londres" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Enfin, à <strong>Covent Garden</strong>, vous pourrez visiter le <strong>British Museum</strong>, considéré comme l’un des endroits incontournables à visiter à Londres. Et la bonne nouvelle c’est que <strong>l’entrée est gratuite</strong> !</p>
            <p>On trouve ce musée très impressionnant et splendide, tant par son architecture (ses colonnes et son toit de verre sont sublimes et immenses), que par les oeuvres qu’on peut y voir.</p>
            <p>En effet, le British Museum abrite plus de 8 millions d’objets précieux venus du monde entier !</p>
            <p>Si vous souhaitez avoir le temps de visiter le musée dans son intégralité, mieux vaut prévoir une journée complète. Dans ce cas, sachez qu’il y a un restaurant sur place si nécessaire.</p>
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>Vous ne pourrez pas vous tromper puisque la station de métro porte le même nom que le quartier.</p>
              <p>Ainsi, il faudra vous arrêter à la station <strong>Covent Garden</strong> en empruntant la <strong>Picadilly Line</strong> (ligne bleue foncée).</p>
            </div>
            <h3>📍 Soho, Chinatown &amp; Piccadilly</h3>
            <p>En continuant votre chemin, vous vous retrouverez à <strong>Soho</strong> avec son charme bohème et sa diversité. Ce petit quartier est connu aujourd’hui pour être le quartier gay de Londres.</p>
            <p>Situé près de <strong>Leicester Square</strong>, n’hésitez pas à faire un petit détour par <strong>Chinatown</strong>, où de grandes arches chinoises marquent le début du quartier. Cet incroyable quartier chinois en plein coeur de Londres est surprenant, tant par sa décoration traditionnelle, que par le nombre de boutiques et de restaurants asiatiques que l’on y trouve.</p>
            <p>Pour autant, ne vous attendez pas à un endroit immense, vous seriez déçus ! Chinatown se résume à une grande avenue, mais juste ce qu’il faut pour nous plonger dans l’ambiance.</p>
            <p>À 5Mn à pied, vous arriverez facilement à <strong>Piccadilly Circus</strong>. Cette place est mondialement connue pour ses panneaux publicitaires géants et lumineux. Elle est d’ailleurs souvent comparée à une version miniature de Times Square à New York. Piccadilly Circus est un endroit toujours très fréquenté et animé.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9681-scaled-751x1024.jpeg" alt="Chinatown" loading="lazy" style={{flex: '0.733', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3488-scaled-1024x768.jpeg" alt="Picadilly Circus" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Si vous êtes fan de shopping, partez en direction de <strong>Regent Street</strong>. Cette grande artère qui part de Piccadilly Circus est réputée pour ses boutiques de luxe à renommée internationale et ses restaurants gastronomiques.</p>
            <p>Terminez vos emplettes à <strong>Oxford Street</strong> qui traverse Regent Street.</p>
            <p>Longue d’environ 2,5Km, elle est bordée par 300 magasins, ce qui en fait l’avenue commerçante la plus longue d’Europe !</p>
            <p>Si vous n’aimez pas trop la foule, alors fuyez, et éloignez vous des grandes avenues pour trouver des petites rues et des adresses shopping beaucoup plus authentiques.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3612-1-1024x520.jpeg" alt="Regent Street" loading="lazy" style={{flex: '1.969', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3491-scaled-1024x768.jpeg" alt="Regent Street 2" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>Ces trois quartiers se trouvent à proximité les uns des autres. Nous vous conseillons de commencer par découvrir <strong>Soho</strong>.</p>
              <p>Pour cela, nous vous suggérons de vous arrêter en métro à la station <strong>Tottenham Court Road</strong> en empruntant la <strong>Northern Line</strong> (ligne noire) ou la <strong>Central Line</strong> (ligne rouge).</p>
            </div>
          </section>

          <section id="jour-6-camden" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 6</span>
              <h2>Camden Town, Stratford</h2>
            </div>
            <h3>📍 Camden Town</h3>
            <p>Vous voilà dans le quartier le plus connu pour sa culture underground et alternative.</p>
            <p>En effet, il n’est pas peu fréquent de croiser des punks à crête verte ou des gothiques chaussés de New Rocks ! C’est un quartier original, dont l’excentricité est une norme.</p>
            <p>Dès la sortie de métro, vous débarquerez dans « un autre monde » ! Vous déboucherez tout d’abord sur <strong>Camden High Street</strong>, une rue commerçante populaire qui regorge de boutiques et de pubs aux enseignes colorées, plus extravagantes les unes que les autres. C’est notamment l’occasion d’y acheter un petit souvenir de la capitale, les prix, n’étant pas affichés, sont donc facilement négociables.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9384-scaled-1024x768.jpeg" alt="Camden Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9395-scaled-1024x768.jpeg" alt="Camden 3" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9473-1-scaled-1024x807.jpeg" alt="Camden Market 2" loading="lazy" style={{flex: '1.269', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9429-scaled-1024x768.jpeg" alt="Camden Londres 2" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Camden Town est notamment connu pour ses cinq différents marchés, communément appelés <strong>Camden Market</strong>. N’hésitez pas à vous y perdre. C’est le meilleur moyen de découvrir cet endroit populaire et son ambiance ! A la mode londonienne, laissez-vous tenter par les stands de street-food.</p>
            <p>On y trouve également le plus grand marché aux puces de la ville. Du vintage, des vêtements et accessoires neufs (parfois décalés), de l’artisanat, etc..., il y en a pour tous les goûts !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9449-scaled-769x1024.jpeg" alt="Camden Lock Londres" loading="lazy" style={{flex: '0.751', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9463-scaled-1024x768.jpeg" alt="Camden Market Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/DSC_3916-scaled-1024x686.jpeg" alt="Camden Street Londres" loading="lazy" style={{flex: '1.493', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9488-scaled-1024x812.jpeg" alt="Camden Street 2 Londres" loading="lazy" style={{flex: '1.261', minWidth: 0}} />
            </div>
            <p>Après le bain de foule, si vous souhaitez vous mettre au vert, dirigez-vous vers <strong>Regent’s Park</strong>, l’un des plus beaux parcs de Londres.</p>
            <p>Vous découvrirez un havre de paix à 15 / 20Mn à pied de Camden Town.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/12/IMG_9340-scaled-715x1024.jpg" alt="Regent’s Park Londres" loading="lazy" style={{flex: '0.698', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9364-scaled-1024x780.jpeg" alt="Regent’s Park Londres 2" loading="lazy" style={{flex: '1.313', minWidth: 0}} />
            </div>
            <div className="article-resto">
              <div className="article-resto-label"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.8"><path d="M3 2v7c0 1.1.9 2 2 2h0a2 2 0 0 0 2-2V2M5 9v13M19 2v20M19 2c-2.5 0-4 2-4 5s1.5 5 4 5"/></svg><span>Pour manger</span></div>
              <div className="article-resto-item">
                <p className="article-resto-name">Haché Burgers Camden</p>
                <p>Si vous n’avez pas envie de manger sur le pouce, ce restaurant réputé à l’ambiance cosy vous fera saliver les papilles avec sa carte de burgers faits maison !</p>
                <p>Pour la petite anecdote, c’était le restaurant préféré d’Amy Winehouse qui y avait sa table attitrée !</p>
              </div>
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>Deux possibilités s’offrent à vous :</p>
              <p>• <strong>En métro</strong> : prendre la <strong>Northern Line</strong> (ligne noire) et s’arrêter à la station <strong>Camden Town</strong>.</p>
              <p>• <strong>En péniche</strong> : cette jolie balade reposante vous permet de découvrir Londres d’une façon atypique, d’un angle différent.</p>
              <p>Commencez la croisière au niveau de Little Venice (en métro, prendre la <strong>Bakerloo Line</strong> --&gt; ligne marron, et s’arrêter à la station <strong>Warwick Avenue</strong>). Vous traverserez Regent’s Park, apercevrez le London Zoo, et longerez de magnifiques demeures aux façades victoriennes, avant d’arriver à Camden Town. Le tarif pour cette <a href="https://www.getyourguide.fr/londres-l57/londres-regent-s-canal-waterbus-little-venice-camden-lock-t390028/" target="_blank" rel="noopener noreferrer" className="article-link">balade en péniche</a> de 45Mn est de 12£ (14€) par personne.</p>
            </div>
            <h3>📍 Stratford</h3>
            <p>Nous avons été très agréablement surprises par ce <strong>nouveau quartier</strong> que nous ne connaissions pas et que nous avons découvert lors de notre dernier séjour.</p>
            <p>Il est idéalement situé puisque tous les lieux incontournables à visiter de la capitale sont à plus ou moins 30Mn de métro.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9510-scaled-1024x768.jpeg" alt="Stratford Londres" className="article-img-full" loading="lazy" />
            <p>Notamment connu pour son centre commercial le plus grand d’Europe (<strong>Westfield</strong>), ce quartier de l’est de Londres est également célèbre depuis 2012 grâce aux Jeux Olympiques d’été qui s’y sont déroulés.</p>
            <p>En effet, le quartier réaménagé pour l’occasion accueillait le village olympique mais aussi diverses infrastructures : stades, piscine, vélodrome, le parc olympique Queen Elizabeth et l’<strong>ArcelorMittal Orbit</strong> (emblème des J.O 2012).</p>
            <p>Cette dernière, une étrange tour métallique de 115M, vous offrira une vue imprenable sur l’ensemble du parc.</p>
            <p>Depuis 2016, une attraction a été ajoutée à la tour. Il s’agit d’un toboggan long de 178M, le plus long du monde ! Une <a href="https://arcelormittalorbit.com" target="_blank" rel="noopener noreferrer" className="article-link">activité</a> bien sympathique à faire en famille ou entre amis.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9788-scaled-768x1024.jpeg" alt="ArcelorMittal Orbit Londres" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9795-scaled-768x1024.jpeg" alt="ArcelorMittal Orbit 1" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Aujourd’hui, le quartier continue de se développer et les londoniens ont bien investi les lieux. Le village olympique a été reconverti en logements, hôtels et espaces de travail pour les entreprises.</p>
            <p>Vous trouverez de nombreux parcs fleuris et très bien entretenus, les anglais adorent ça ! Du coup, c’était l’endroit rêvé pour nous avec Aladdin !</p>
            <p>Dans le coin, vous pouvez également vous balader le long de <strong>rives aménagées</strong>, où des péniches à la décoration bohème ou rétro sont amarrées et de <strong>nombreux bars et restaurants</strong> typiquement anglais sont implantés.</p>
            <p>On vous conseille d’y faire un tour. Cet endroit est apaisant et ressourçant à côté de l’effervescence connue du coeur de la ville !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_0007-scaled-1024x764.jpeg" alt="Stratford Londres 2" loading="lazy" style={{flex: '1.34', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9545-scaled-1024x768.jpeg" alt="Stratford Londres nuit" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>Vous souhaitez visiter Stratford ?</p>
              <p>Alors, allez en métro jusqu’à la station <strong>Stratford</strong> en empruntant la <strong>Central Line</strong> (ligne rouge), la <strong>Jubilee Line</strong> (ligne grise), la <strong>London Overground</strong> (ligne orange).</p>
              <p>Vous pouvez également utiliser le <strong>train DLR</strong> pour vous y rendre.</p>
            </div>
          </section>

          <section id="jour-7-brighton" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 7</span>
              <h2>Brighton, à 1H de train de Londres</h2>
            </div>
            <p>Envie d’une escapade loin de l’agitation de la capitale ? Et de plus, en <strong>bord de mer</strong> ? Rejoignez alors <strong>Brighton</strong>, à seulement <strong>1H en train</strong> de Londres. Cette station balnéaire, située au sud-est de l’Angleterre, vous permettra de respirer au grand air !</p>
            <p>À la mode depuis le 18ème siècle, c’est la station la plus branchée du pays. La ville est également connue pour son ouverture d’esprit.</p>
            <p>En effet, elle est la <strong>capitale LGBT</strong> d’Angleterre. Très animée, les bars, restaurants et boîtes de nuit ne manquent pas !</p>
            <p>Le bord de mer, qui longe la grande plage de galets, est très agréable pour s’y promener. De nombreuses familles s’y retrouvent pour y passer leurs week-ends.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3175-scaled-1024x768.jpeg" alt="Brighton plage" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3162-scaled-768x1024.jpeg" alt="Brighton Street Londres" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3070-scaled-1024x768.jpeg" alt="Brighton plage 2" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3152-scaled-1024x768.jpeg" alt="Brighton plage Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3156-scaled-768x1024.jpeg" alt="Brighton Street Londres 2" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3059-scaled-1024x768.jpeg" alt="Brighton Street 3" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Nous en sommes certaines, vous apprécierez vous balader dans ses ruelles chics et bohèmes qui regorgent de petites boutiques et de magasins en tout genre.</p>
            <p>Vous ne pourrez pas louper le <strong>Brighton Pier</strong>. Ce fameux ponton, aménagé en complexe de loisirs (casino, jeux d’arcade, manèges et restaurants), permet de passer un moment agréable en famille ou entre amis.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3090-1024x576.jpeg" alt="Brighton Pier Londres" loading="lazy" style={{flex: '1.778', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3149-scaled-1024x768.jpeg" alt="Brighton Pier Londres 2" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3143-scaled-1024x768.jpeg" alt="Brighton Pier Londres 3" className="article-img-full" loading="lazy" />
            <p>Non loin de là, si vous avez envie de prendre de la hauteur et d’admirer le paysage à 360°, embarquez dans la tour d’observation <strong>British Airways i360</strong>.</p>
            <p>S’élevant à 138M, elle est la plus haute tour du monde de ce type.</p>
            <p>Si vous souhaitez faire cette attraction, sachez qu’elle vous coûtera 16£50 (19€50) par personne. Pour avoir tenté l’expérience, nous avons adoré... Le panorama était à couper le souffle !</p>
            <p>Nous vous conseillons de <a href="https://britishairwaysi360.com" target="_blank" rel="noopener noreferrer" className="article-link">réserver</a> votre venue pour éviter la file d’attente.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3190-1024x576.jpeg" alt="Tour British Londres" loading="lazy" style={{flex: '1.778', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3206-scaled-768x1024.jpeg" alt="Tour British Londres 2" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-rendre">
              <div className="article-rendre-label"><svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><circle cx="12" cy="10" r="3"/><path d="M12 21s-7-7.5-7-12a7 7 0 0 1 14 0c0 4.5-7 12-7 12z"/></svg><span>Pour s’y rendre</span></div>
              <p>Nous vous proposons deux solutions pour vous rendre à Brighton, vous pouvez emprunter soit le <strong>train</strong>, soit le <strong>bus</strong> au départ de Londres :</p>
              <p>• <strong>En train</strong> : Il y en a régulièrement toutes les demi-heures. Les trains partent de la station <strong>Victoria</strong> et arrivent à la <strong>gare de Brighton</strong> dans le centre ville. Le prix des billets aller-retour commence à 25£ (30€) pour les voyages en classe économique. Sachez que si vous anticipez votre venue et réservez vos billets à l’avance, vous pouvez <a href="https://www.southernrailway.com" target="_blank" rel="noopener noreferrer" className="article-link">réserver</a> vos billets au tarif de 10£ (12€) l’aller-retour.</p>
              <p><strong>• </strong><strong>En bus</strong> : Il part de la <strong>gare routière Victoria</strong> et le trajet dure environ 2H. Si vous réservez quelques jours à l’avance, vous pouvez trouver des billets aller-retour à seulement 5£ (6€) ! Autrement, le tarif pour un aller simple est à 8£ (9€50). Les bus arrivent à la <strong>gare routière de Brighton</strong>, située dans le centre ville également. N’hésitez pas à anticiper pour <a href="https://www.nationalexpress.com/en" target="_blank" rel="noopener noreferrer" className="article-link">réserver</a> votre ticket.</p>
            </div>
          </section>

          {/* INFORMATIONS PRATIQUES */}
          <section id="pratique" className="article-section">
            <div className="article-day-header"><h2>Informations pratiques</h2></div>
            <div className="article-pratique">
              <div className="article-pratique-block">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_E2975-1024x487.jpeg" alt="Look right" className="article-img-full" loading="lazy" />
              </div>
              <div className="article-pratique-block">
                <h3 className="article-pratique-title">✓ Quelles sont les formalités pour entrer en Angleterre ?</h3>
                <p>Pour vous rendre en Angleterre, vous devez impérativement avoir un <strong>passeport en cours de validité</strong>. Aussi, il doit être valable 6 mois après la sortie prévue du pays.</p>
                <p>En effet, depuis le Brexit, et exactement depuis le 1er octobre 2021, le pays étant passé hors de l’Union Européenne, <strong>la carte d’identité ne suffit plus.</strong></p>
              </div>
              <div className="article-pratique-block">
                <h3 className="article-pratique-title">✓ Et si vous voyagez avec votre chien ?</h3>
                <p>• Votre chien doit avoir une <strong>puce électronique</strong>.</p>
                <p>• Il doit avoir un <strong>passeport européen</strong>. Pour notre part, nous l’avons fait faire chez notre vétérinaire. Il nous est revenu à 15€ + le tarif de la consultation habituel.</p>
                <p>• Votre animal doit être vacciné avec un <strong>vaccin antirabique</strong> (= contre la rage) qui est à prévoir au moins 21 jours avant le voyage. Les informations du vaccin reçu seront reportées dans son passeport.</p>
                <p>• Enfin, votre toutou doit être <strong>vermifugé</strong> contre l’échinococcose. Le traitement doit être administré par un vétérinaire au moins 1 jour, et pas plus de 5 jours, avant la date d’arrivée en Grande-Bretagne. La date et l’heure de l’administration du vermifuge devront être également mentionnées dans le passeport.</p>
                <p>• Bonne nouvelle ! Il n’y a <strong>plus de quarantaine</strong> obligatoire pour votre chien lors de son arrivée sur le territoire britannique.</p>
              </div>
              <div className="article-pratique-block">
                <h3 className="article-pratique-title">✓ Comment s’y rendre depuis la France ?</h3>
                <div className="article-gallery-2">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_0013_Original-1-scaled-1024x768.jpg" alt="Avion Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/65592404317__DFD30C21-27CB-484C-8D16-F19678D98D7A-scaled-1024x768.jpg" alt="Shuttle Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
                </div>
                <h4>✈️ - En avion</h4>
                <p>De nombreux aéroports sont implantés dans la capitale anglaise.</p>
                <p>Pour notre part, nous connaissons ceux d’<strong>Heathrow</strong> et de <strong>Gatwick</strong> dans lesquels nous avons déjà atterri.</p>
                <p>•<em> HEATHROW</em></p>
                <p>Cet aéroport est le plus central. Nous vous le conseillons si votre logement est situé dans le coeur de Londres. Il s’agit de l’aéroport le plus fréquenté du monde ! Si vous prenez un vol depuis celui-ci, n’hésitez pas à venir bien à l’avance, il est immense !</p>
                <p>Pour rejoindre le centre de Londres depuis Heathrow, vous pouvez prendre la <strong>Picadilly Line</strong> (ligne bleue foncée de métro). Dans ce cas, vous mettrez plus ou moins 1H et vous payerez le tarif du trajet de métro en fonction de la zone (1 à 5) où vous vous rendrez et de l’heure de la journée.</p>
                <p>Autrement, vous pouvez prendre le <strong>Heathrow Express</strong> avec lequel vous mettrez 15Mn pour vous rendre à la gare de Paddington. Le tarif pour un aller simple est de 22£ (26€). La station de métro est directement située dans l’aéroport.</p>
                <p>• <em>GATWICK</em></p>
                <p>Situé à 48 km au sud du centre de Londres, il faut prendre le <strong>Gatwick Express</strong> pour se rendre à la gare Victoria en 30Mn depuis l’aéroport. Le tarif pour un aller simple est de 19£90 (23€50).</p>
                <p>Le Gatwick Express est la solution la plus rapide, mais quelque peu onéreuse pour se rendre au coeur de la ville. Pour autant, il est également possible de prendre le <strong>Southern Railway</strong> (train).</p>
                <p>Ce train alternatif arrive en gare de Victoria, London Bidge ou encore City Thameslink (à côté de la cathédrale St. Paul). Le tarif des billets oscille entre 11£ (13€) et 15£ (17€50).</p>
                <h4>🚇 - En Eurostar</h4>
                <p>C’est le "TGV" anglais. Il relie la France (de Paris ou de Lille) au Royaume-Uni, à la <strong>gare St. Pancras</strong>, située dans le centre de Londres. Les trains Eurostar traversent le tunnel sous la manche.</p>
                <p>Nous l’avons pris à 2 reprises. Le voyage est très rapide puisqu’il faut compter par exemple 1h30 pour rejoindre Lille à la capitale. Les wagons sont très confortables.</p>
                <p>Si jamais vous avez un petit creux ou une petite soif durant le trajet, vous trouverez une voiture-bar dans l’Eurostar... Trop top !</p>
                <p>Le tarif pour un aller simple est en moyenne compris entre 60€ et 90€ en fonction de la période de l’année et des horaires choisis. Si vous souhaitez réserver, c’est <a href="https://www.eurostar.com/fr-fr" target="_blank" rel="noopener noreferrer" className="article-link">ici</a>.</p>
                <h4>🚇 - En Shuttle</h4>
                <p>Le Shuttle est un train pour véhicules à moteur. Vous ne pourrez pas embarquer si vous êtes à pied par exemple.</p>
                <p>Ce moyen de transport se prend à <strong>Calais</strong> et arrive à <strong>Folkestone</strong>, situé à plus ou moins 1H30 en voiture du centre de Londres. Tout comme l’Eurostar, il passe sous la Manche.</p>
                <p>Lors de notre dernier séjour, c’est l’option que nous avons choisie pour nous rendre en Angleterre. D’autant plus qu’avec le Ferry, ce sont les deux uniques solutions pour débarquer avec son animal de compagnie (sans qu’il soit mis en soute, ce qu’on veut absolument éviter !).</p>
                <p>Nous avons bien aimé le concept de rester dans sa voiture, qui elle-même est dans le train. Bon, ça fait une sensation étrange au départ, mais on s’y habitue rapidement.</p>
                <p>Pendant la traversée qui dure 30Mn, vous avez le droit de sortir de votre véhicule. Et incroyable, on avait du réseau sur nos téléphones portables, bien qu’on ait des opérateurs différents ! Bref, on était à notre aise pour voyager, et Aladdin aussi !</p>
                <p>Pour un aller simple, le prix dépend non pas du nombre de passagers, mais du modèle du véhicule qui embarque, de la présence d’animaux, de la période de l’année et des horaires choisis. Plus vous voyagerez tôt ou tard dans la journée, moins les billets seront chers. Il faut compter en moyenne <strong>140€ pour un billet aller</strong> avec une voiture de type citadine et un chien. Pour réserver, c’est <a href="https://www.eurotunnel.com/fr/" target="_blank" rel="noopener noreferrer" className="article-link">ici</a>.</p>
                <h4>🚢 - En ferry</h4>
                <p>C’est le seul moyen de transport que nous n’ayons jamais pris pour nous rendre à Londres.</p>
                <p>Le Ferry relie <strong>Calais</strong> à <strong>Douvres</strong> en 1H30. Comme pour le Shuttle, vous ne pourrez pas voyager à bord si vous ne possédez pas de véhicule motorisé. Si vous faites la traversée avec votre animal, il devra rester dans votre véhicule.</p>
                <p>En moyenne, le tarif pour <strong>un aller simple est de 70€</strong>, quelque soit le nombre de passagers avec une voiture. Et <strong>bon à savoir</strong>, le <strong>repas est inclus</strong> dans le prix !</p>
                <p>Si vous êtes intéressé par ce moyen de transport, cliquez <a href="https://www.dfds.com/fr-fr/ferries-passagers" target="_blank" rel="noopener noreferrer" className="article-link">ici</a> pour réserver.</p>
              </div>
              <div className="article-pratique-block">
                <h3 className="article-pratique-title">✓ Où se loger ?</h3>
                <p>De façon générale, les hébergements sont chers à Londres mais plusieurs possibilités s’offrent à vous : les B’n’B (Bed and Breakfast), les <strong>auberges de jeunesse</strong>, les <strong>hôtels</strong>, les <strong>résidences hôtelières</strong> et les <strong>locations d’appartement</strong>.</p>
                <p>Cette fois-ci, nous avons opté pour un appart’hôtel de la chaîne des résidences hôtelières <strong>Adagio</strong>. Le logement est situé dans l’<strong>Est de Londres</strong>, à <strong>Stratford</strong>, et plus précisément dans le village olympique (cf. Jour 6 - Stratford).</p>
                <p>Pour loger à l’appart’hôtel <a href="https://www.adagio-city.com/fr/hotel-9721-aparthotel-adagio-london-stratford.shtml" target="_blank" rel="noopener noreferrer" className="article-link">Adagio Stratford</a>, Il faut compter 110€ la nuit pour un studio récent et très bien équipé au 12ème étage (avec une vue incroyable sur la ville !).</p>
                <div className="article-avis">
                  <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
                  <div><strong>Le conseil des MamZelles</strong><p>Quel que soit le type d’hébergement que vous choisirez, nous vous conseillons de réserver à l’avance, non seulement pour obtenir de meilleurs tarifs, mais surtout pour prendre le temps de bien définir le quartier dans lequel vous souhaitez passer votre séjour.</p></div>
                </div>
                <div className="article-tip">
                  <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                  <div><strong>Bon à savoir</strong><p>Nous vous recommandons grandement de cibler des hébergements à proximité des stations de métro.</p></div>
                </div>
                <div className="article-gallery-2">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9297-scaled-1024x768.jpeg" alt="Stratford Street Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_9284-scaled-1024x768.jpeg" alt="Stratford Street Londres 2" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
                </div>
              </div>
              <div className="article-pratique-block">
                <h3 className="article-pratique-title">✓ Comment se déplacer dans la capitale ?</h3>
                <p>Comme vous l’aurez compris tout au long de cet article, il existe donc différents moyens de transports pour se déplacer au centre de Londres et dans sa périphérie.</p>
                <p>le <strong>métro</strong>, le <strong>train DLR</strong> (pour se rendre dans l’Est), les <strong>tramways du sud de Londres</strong>, les <strong>trains Overground et National Rail</strong> de la ville, le <strong>téléphérique de Thames</strong>, le <strong>Uber Boat</strong>, le <strong>bus rouge</strong> (mythique avec son étage !) et le <strong>taxi</strong> (majoritairement noir, il fait partie du décor de la capitale !).</p>
                <div className="article-gallery-2">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3371-scaled-1024x768.jpeg" alt="Tube Londres" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2021/11/IMG_3744-scaled-1024x576.jpeg" alt="Téléphérique Londres" loading="lazy" style={{flex: '1.778', minWidth: 0}} />
                </div>
                <h4>Ⓜ️ - Le métro ou les trains</h4>
                <p>Que ce soit avec le "London Underground" (ou le fameux Tube !), et ses 11 lignes de métro aux couleurs bien distinctes, les tramways ou les trains, le réseau ferroviaire londonien dessert la majorité des quartiers.</p>
                <p>Nous trouvons qu’il s’agit là de la meilleure façon pour se déplacer rapidement à Londres.</p>
                <p>Sur place, nous utilisons l’application "<strong>TUBE MAP</strong>" (disponible sur toutes les plateformes de téléchargement) pour nous aider à définir quels sont les métros / trains à prendre pour se rendre d’un point A à un point B.</p>
                <h4>🚢 - Le Uber Boat</h4>
                <p>C’est la première fois que nous prenions ce moyen de transport à Londres. En effet, le Uber Boat est très récent puisqu’il a été mis en place en août 2021.</p>
                <p>Il s’agit là d’un nouveau moyen pour découvrir la ville d’un autre angle et voguer sur la Tamise.</p>
                <p>Pour prendre le bateau, on trouve plusieurs embarcadères entre <strong>Bankside Pier</strong> et <strong>Greenwich</strong> avec des arrêts aux endroits stratégiques pour visiter la capitale.</p>
                <div className="article-tip">
                  <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                  <div><strong>Bon à savoir</strong><p>Nous vous conseillons de faire cette balade au moment du coucher du soleil, au moment où les couleurs sur la ville sont à couper le souffle !</p></div>
                </div>
                <h4>🚡 - Le téléphérique de Thames (Emirates Air Line)</h4>
                <p>C’est parti pour un voyage dans les airs entre <strong>Greenwich Peninsula</strong> et les <strong>Royal Docks</strong> ! L’Emirates Air Line est une télécabine franchissant la Tamise à Londres.</p>
                <p>Nous avons beaucoup aimé cette expérience de 10Mn où l’on a une vue imprenable sur la ville !</p>
                <p>Nous avons pris le téléphérique de nuit. Le paysage était canon avec toutes les lumières de la ville et de ses buildings ! Cependant, nous pensons que le « voyage » aurait été encore plus sympa de jour.</p>
                <div className="article-avis">
                  <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
                  <div><strong>Le conseil des MamZelles</strong><p><strong>Petite astuce !</strong> Nous vous conseillons de prendre le <strong>Uber Boat</strong> à <strong>Westminster Pier</strong> et de voguer jusqu’à <strong>North Greenwich</strong>. De là, vous pourrez prendre le téléphérique.</p></div>
                </div>
                <p>Autrement, vous pourrez vous y rendre en <strong>train DLR</strong> (arrêt à la station Royal Victoria) ou en métro avec la <strong>Jubilee Line</strong> - ligne grise (arrêt à la station North Greenwich).</p>
                <h4>🚍 - Le bus à étage</h4>
                <p>Les célèbres bus rouges sont pratiques et peu coûteux. Ils permettent de voir de nombreuses attractions en route.</p>
                <p>Il faut absolument profiter de son séjour à Londres pour s’asseoir à l’avant et en haut de l’un de ces fameux bus... Traverser le pont de <strong>Westminster</strong>, voir le <strong>London Eye</strong> et <strong>Big Ben</strong> confortablement installé dans un bus, c’est juste magique !</p>
                <div className="article-tip">
                  <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                  <div><strong>Bon à savoir</strong><p>Après avoir payé 1£50 (1£75) un aller simple avec l’Oyster Card ou en Cardless (voir ci-dessous pour en savoir plus), vous pouvez effectuer un deuxième trajet gratuit dans l’heure en bus ou en tramway.</p></div>
                </div>
                <p>Attention, sur place on ne peut pas payer un ticket de bus en espèces !</p>
                <h4>🎫 - La Oyster Card</h4>
                <p>Il existe 2 façons de régler le <strong>métro</strong>, les <strong>trains</strong>, le <strong>tramway</strong>, le <strong>téléphérique</strong>, le <strong>bus</strong> et le <strong>Uber Boat</strong> : soit avec le Cardless (carte de crédit sans contact), soit avec l’<strong>Oyster Card</strong>.</p>
                <p>Cette dernière est une carte rechargeable que l’on peut acheter sur <strong>internet</strong> ou directement <strong>aux guichets</strong> de toutes les stations de métro du réseau public londonien. L’Oyster Card est vendue à 5£ (5€90), mais il est possible de se la faire rembourser au niveau des guichets une fois le séjour terminé. Cependant, s’il reste du crédit sur la carte, il sera perdu.</p>
                <p>Sur <a href="https://www.visitbritainshop.com/fr/fr/visitor-oyster-card-london?utm_source=visitlondon&amp;utm_medium=affiliate&amp;utm_campaign=affiliate" target="_blank" rel="noopener noreferrer" className="article-link">leur site</a>, vous pouvez évaluer le montant de crédit nécessaire à votre séjour car les prix varient en fonction des heures de la journée et des zones (1 à 5) dans lesquelles vous voyagez, et bénéficier de tarifs très avantageux si vous souscrivez à des formules pour créditer la carte.</p>
                <p>Pour vous faire une idée concrète du budget à y consacrer, vous pourrez également y consulter un tableau avec tous les prix des voyages, ainsi qu’une carte des zones tarifaires.</p>
                <p>En effet, il faut savoir que les frais de déplacement à Londres sont coûteux et ont une grosse place dans le budget des vacances !</p>
                <div className="article-tip">
                  <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                  <div><strong>Bon à savoir</strong><p>L’Oyster Card est utilisable pour se déplacer depuis les <strong>aéroports d’Heathrow et Gatwick</strong> au centre de Londres, notamment sur les lignes Express. Elle permet de bénéficier de bonnes réductions sur le tarif des trajets.</p></div>
                </div>
                <p>Bien entendu, elle est aussi utilisable pour payer le métro entre <strong>Heathrow et la gare Victoria</strong> (ligne bleue foncée).</p>
                <h4>🚖 - Le taxi</h4>
                <p>Nous nous sommes pris au jeu de héler un taxi dans la rue comme dans un remake de film ! Nous avons fait une courte distance vraiment pour le fun de monter dans l’un de ces mythiques taxis...</p>
                <p>En vrai, le londonien se déplace rarement en taxi, encore moins depuis l’existence de l’application Uber qu’il préfère, car la course est très chère.</p>
                <p>Les prix sont fixes et chaque «taximan» utilise un compteur.</p>
                <p><strong>Pour avoir une idée</strong>, s’offrir 1 Km de course en taxi à Londres s’élève à 3£ (3€50). Le tarif peut descendre jusqu’à 2£ (2€29) et augmenter jusqu’à 4£ (4€58) selon la période de la journée et le quartier.</p>
              </div>
              <div className="article-pratique-block">
                <h3 className="article-pratique-title">✓ Pour en savoir plus... !</h3>
                <h4>・Quand partir ?</h4>
                <p>Cela dépend de vos envies, puisque pour nous, Londres se découvre à toutes les périodes de l’année !</p>
                <p>Vous verrez ci-dessous que chaque saison a ses avantages et ses inconvénients...</p>
                <p><strong>En hiver</strong> (déc-fév) : Les journées sont courtes et froides. Il pleut souvent et il arrive même qu’il neige ! Les musées et les sites touristiques sont moins bondés que le reste de l’année, ainsi, les prix des visites sont plus intéressants.</p>
                <p><strong>Au printemps</strong> (mars-mai) : Le temps est frais et humide. Les foules commencent à affluer dans la capitale. Les parcs, de plus en plus fréquentés par les londoniens, sortent de l’hiver et les arbres fleurissent.</p>
                <p><strong>En été</strong> (juin-août) : Le temps est doux à chaud. Les journées sont longues et ensoleillées. Les vacances scolaires et la saison touristique coïncident, de ce fait, les attractions sont souvent bondées.</p>
                <p><strong>En automne</strong> (sept-nov) : Notre préférée ! Cette belle saison est parfois fraîche, mais elle reste ensoleillée. Après l’été et la rentrée scolaire, Londres est plus paisible. Il y fait bon vivre... Les parcs sont habillés de couleurs orangées et sont juste splendides !</p>
                <h4>・Argent</h4>
                <p><strong>DAB</strong> : La monnaie du Royaume-Uni est la livre sterling (£). On trouve de partout dans la ville des distributeurs de billets acceptant les Visa, MasterCard, Cirrus ou Maestro, et American Express. Il est essentiel de savoir que les retraits d’espèces avec une carte étrangère entraînent souvent des frais.</p>
                <p><strong>Cartes de crédit</strong> : Quasiment tous les restaurants, bars, boutiques, (et même certains taxis !), acceptent les cartes de crédit.</p>
                <p><strong>Change</strong> : Si vous souhaitez changez des euros en livres, nous vous conseillons de vous rendre dans les bureaux de poste, ils ne prélèvent aucune commission.</p>
                <p><strong>Pourboire</strong> : Au restaurant, le service est souvent inclus dans l’addition. Si ce n’est pas le cas, il est d’usage de laisser un pourboire de 10% (sauf si vous n’êtes pas satisfait !). En tout cas, inutile de laisser des « tips » quand on prend une bière ou un verre de vin dans un pub...</p>
                <div className="article-tip">
                  <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                  <div><strong>Bon à savoir</strong><p>Pour éviter les frais relatifs aux retraits ou aux achats, nous utilisons la carte <a href="https://clients.boursorama.com" target="_blank" rel="noopener noreferrer" className="article-link">Boursorama</a> Ultim pour tous nos voyages à l’étranger (y compris hors UE).</p></div>
                </div>
                <p>En entrant le code parrainage AMTR2375, vous pourrez bénéficier d’un crédit offert de 130€ pour toute ouverture de compte.</p>
                <h4>・Prises &amp; adaptateurs</h4>
                <p>Vous aurez besoin d’un adapteur pour brancher vos appareils électroniques sur les prises anglaises. Vous n’aurez aucun problème pour en acheter si nécessaire, les adaptateurs sont en vente partout.</p>
                <p>Il est d’ailleurs bon de savoir que les hôtels en sont souvent équipés.</p>
                <h4>・Savoir vivre</h4>
                <p>Pour finir, il est grandement conseillé de respecter <strong>certains paramètres</strong> pour vivre à la mode londonienne pendant votre séjour (et vous éviter certains accidents !) :</p>
                <p>• Se tenir sur la droite dans les escalators, et monter ou descendre sur la gauche ;</p>
                <p>•  Laisser descendre les passagers du métro avant de monter ;</p>
                <p>•  Regarder à droite avant de traverser ;</p>
                <p>•  Attendre que les voitures s’arrêtent aux passages piétons.</p>
                <p><em><strong>Nous espérons que notre article sur Londres vous aura plu et qu’il vous inspirera pour votre prochain voyage !</strong></em></p>
                <p><em><strong>Si vous avez des questions, ou que vous souhaitez nous partager un retour d’expérience, n’hésitez pas à nous la</strong><strong>isser un commentaire, à nous contacter via le </strong><strong><a href="/formules#formulaire" className="article-link">formulaire de contact</a> ou sur notre compte <a href="https://www.instagram.com/mamzellesenvadrouille/" target="_blank" rel="noopener noreferrer" className="article-link">Instagram</a>.</strong></em></p>
                <p><em><strong>Nous nous ferons un plaisir de vous lire et de vous répondre !</strong></em></p>
                <p>[monsterinsights_popular_posts_widget]</p>
              </div>
            </div>
          </section>

          {/* A LIRE AUSSI (etoile) */}
          <div className="article-must">
            <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
            <div><strong>À LIRE AUSSI</strong><p><a href="/visiter-madrid-en-3-jours" className="article-link">⋙ VISITER MADRID EN 3 JOURS : notre guide complet !</a></p></div>
          </div>

          <section className="article-comments-section">
            <CommentsList comments={[]} />
            <CommentForm
              articleTitle={"Visiter Londres en 1 semaine : l’essentiel par quartier"}
              articleUrl="https://mamzellesenvadrouille.com/visiter-londres"
            />
          </section>

          <NewsletterForm />

          {/* ARTICLES LIES */}
          <div className="article-related">
            <h3 className="article-related-title">À lire aussi</h3>
            <div className="article-related-grid">
              <a href="/visiter-madrid-en-3-jours" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/Madrid-1536x1229.jpeg.webp" alt="Madrid" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Espagne</span>
                  <p className="article-related-title-card">Visiter Madrid en 3 jours : notre guide complet !</p>
                </div>
              </a>
              <a href="/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Palawan-1024x819.jpg" alt="Palawan El Nido Coron" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Philippines</span>
                  <p className="article-related-title-card">Palawan : Entre El Nido &amp; Coron, découvrez le joyau des Philippines !</p>
                </div>
              </a>
              <a href="/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Les-Philippines-1024x819.jpg" alt="Itinéraire Philippines 3 semaines" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Philippines</span>
                  <p className="article-related-title-card">Itinéraire Philippines : 3 semaines pour découvrir la perle de l’Orient !</p>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
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

    </>
  );
}
