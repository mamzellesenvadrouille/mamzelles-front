import type { Metadata } from 'next';
import './agafay.css';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';
import PratiqueOnglets from '../components/PratiqueOnglets';
import Footer from '../components/Footer';
import ArticlesLies from '../components/ArticlesLies';

export const metadata: Metadata = {
  title: "Agafay : dormir dans le désert, notre expérience inoubliable",
  description: "Dormir dans le désert d'Agafay, à 40 min de Marrakech : notre expérience au Scarabeo Camp et nos conseils pour organiser votre nuit inoubliable.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/dormir-dans-le-desert-agafay' },
  openGraph: {
    title: "Agafay : dormir dans le désert, notre expérience inoubliable",
    description: "Dormir dans le désert d'Agafay, à 40 min de Marrakech : notre expérience au Scarabeo Camp et nos conseils pour organiser votre nuit inoubliable.",
    url: 'https://mamzellesenvadrouille.com/dormir-dans-le-desert-agafay',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: '/Agafay.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2023-01-13T18:03:40.000Z',
    authors: ['MamZelles en vadrouille'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agafay : dormir dans le désert, notre expérience inoubliable",
    description: "Dormir dans le désert d'Agafay, à 40 min de Marrakech : notre expérience au Scarabeo Camp et nos conseils pour organiser votre nuit inoubliable.",
    images: ['/Agafay.webp'],
  },
};

export default function MarrakechPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Agafay : dormir dans le désert, notre expérience inoubliable",
    description: "Dormir dans le désert d'Agafay, à 40 min de Marrakech : notre expérience au Scarabeo Camp et nos conseils pour organiser votre nuit inoubliable.",
    image: '/Agafay.webp',
    datePublished: '2023-01-13',
    dateModified: '2026-06-22',
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
      '@id': 'https://mamzellesenvadrouille.com/dormir-dans-le-desert-agafay',
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
        <img className="hero-bg" src="/Agafay.webp" alt="Dormir dans le désert d'Agafay" style={{objectPosition: 'center 63%'}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Agafay<br /><em>Une nuit dans le désert</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Notre expérience et nos conseils pour vivre<br className="agafay-hero-br" /><br className="tablet-only-br" /> une nuit magique dans le désert.</p>
        </div>
      </section>

    </div>

      {/* BANDEAU EN BREF */}
      <div className="article-bref-bar">
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span><span className="agafay-bref-mobile-short">1 nuit</span><span className="agafay-bref-desktop-full">1 nuit / 2 jours</span></span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
          <span>Mars-mai &amp; sept-nov</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"/></svg>
          <span>120-140 €/j/pers.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M14.8 9a2 2 0 0 0-2-1.5h-1.6a2 2 0 0 0 0 4h1.6a2 2 0 0 1 0 4H11a2 2 0 0 1-2-1.5"/><line x1="12" y1="6" x2="12" y2="18"/></svg>
          <span>Dirham (MAD)</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Arabe &amp; Français</span>
        </div>
      </div>

      {/* BLOC COUP DE COEUR */}
      <div className="article-coup-de-coeur">
        <div className="article-cdcr-header">
          <span className="article-cdcr-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#c8956c" stroke="#c8956c" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </span>
          <h2>Pourquoi nous avons adoré le désert d&apos;Agafay</h2>
        </div>
        <div className="article-cdcr-grid">
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre camp coup de cœur</span><span className="article-cdcr-value">→ Le Scarabeo Camp</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le moment le plus magique</span><span className="article-cdcr-value">→ Le dîner sous les étoiles</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">L&apos;expérience incontournable</span><span className="article-cdcr-value">→ Une nuit en tente berbère</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">À tester<br className="tablet-only-br" /> sans hésiter</span><span className="article-cdcr-value">→ Un plouf dans la piscine</span></div>
        </div>
      </div>

      <div className="article-layout article-agafay">
        <main className="article-main">

          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none" style={{display:"inline",verticalAlign:"middle",marginRight:"8px"}}><path d="M5 2H19C19.6 2 20 2.4 20 3V22L12 17L4 22V3C4 2.4 4.4 2 5 2Z"/></svg>Sommaire de l&apos;article</h2>
            <ol className="article-toc-list">
              <li><a href="#desert">Le désert d&apos;Agafay, aux portes de Marrakech</a></li>
              <li><a href="#camp">Quel camp choisir dans le désert d&apos;Agafay&nbsp;?</a></li>
              <li><a href="#sejour">Notre séjour au Scarabeo Camp</a></li>
              <li><a href="#organiser">Tout savoir pour organiser son expérience</a></li>
              <li><a href="#marrakech">Si vous passez aussi un séjour à Marrakech</a></li>
            </ol>
          </nav>

          <section className="article-section">
              <p><strong>Loin de l’effervescence et du tumulte de Marrakech, nous vous conseillons de vivre une expérience complètement magique </strong><strong>Celle de passer une nuit inoubliable dans le désert d’Agafay !</strong></p>
              <p><strong>En amoureux ou entre amis, c'est certain, ce souvenir restera à jamais gravé dans vos mémoires ! </strong></p>
              <p><strong>Vous êtes tenté ? Voici tous nos conseils et notre récit de voyage pour vous inspirer et vivre à votre tour cette incroyable expérience !</strong></p>
                            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5395.jpg" alt="Désert d'Agafay" className="article-img-full" loading="lazy" />
          </section>

          <section id="desert" className="article-section">
              <div className="article-day-header">
              <h2>Le désert d'Agafay, aux portes de Marrakech</h2>
            </div>
              <p><strong>Le désert se situe à une trentaine de kilomètres de Marrakech</strong> (environ 40 min en voiture), sur les premières hauteurs du massif du Haut Atlas.</p>
              <div className="article-tip">
                <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                <div><strong>Bon à savoir</strong><p>Un erg est un désert de sable, tandis qu&apos;un reg est un désert de pierre. Agafay est donc un désert rocailleux, à ne pas confondre avec les dunes de Merzouga dans le Sahara.</p></div>
              </div>
              <p><strong>Ce désert de dunes rocailleuses</strong> est juste incroyable ! On y trouve même une oasis d'environ sept hectares surnommée l’Oasis enchantée. Eucalyptus, oliviers et vignes qui s’y trouvent sont irrigués naturellement par l’Oued situé à proximité.</p>
                            <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5539.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5408.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              </div>
          </section>

          <section id="camp" className="article-section">
              <div className="article-day-header">
              <h2>Quel camp choisir dans le désert d'Agafay ?</h2>
            </div>
              <p>Après avoir épluché de nombreuses adresses de camps dans le désert d'Agafay, que ce soit sur internet, des blogs ou les réseaux sociaux, notre choix s’est finalement porté sur le <strong>Scarabeo Camp</strong>.</p>
              <p>Il semblait correspondre en tout point à ce que l'on recherchait pour notre séjour... Un endroit de rêve isolé avec piscine, un bon rapport qualité / prix, et de très bons retours quant à l'accueil chaleureux du personnel et de la qualité des repas.</p>
              <p>Ce camp est l'un des premiers dans la région qui eut ouvert. <strong>Un vrai bivouac composé de tentes berbères.</strong> Rien qu'à voir les photos de cet endroit, on était déjà sous le charme !</p>
              <p>Et quelle surprise ce fut en découvrant ce lieu à notre arrivée ! Le Scarabeo Camp est juste magique ! C'est un <strong>dépaysement total, hors du temps</strong>. Le camp a préservé son authenticité tout en offrant un confort moderne.</p>
                            <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5301.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5332_jpg.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <h3 className="article-h3">Connaissez-vous le glamping ?</h3>
              <p><strong>Le glamping est une tendance en vogue qui combine camping et glamour !</strong> Le glamping est donc un mode d'hébergement touristique en pleine nature, associant le confort au respect de l'environnement.</p>
              <p>Vous comprenez l'idée ? Et bien, pour résumer, c’est exactement l’esprit du Scarabeo Camp !</p>
              <div className="article-gallery-2">
                              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5351.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5586.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              </div>
              <h3 className="article-h3">Le Scarabeo Camp</h3>
              <p>Dès notre arrivée, nous sommes accueillies avec des pâtisseries marocaines et un thé à la menthe (le whisky berbère, la base !).
Installées à une table, on y contemple le paysage dégagé sur l’Atlas. Une sensation de plénitude dans un silence absolu. On se sent seule au monde.</p>
              <p>Puis on nous conduit jusqu’à notre hébergement. <strong>Il y a différentes tailles de tentes</strong> : pour deux, pour quatre, et la plus grande pour six.</p>
              <p><strong>Les tentes sont tout confort, il ne manque rien…</strong> Une literie exceptionnelle, un petit coin douche et des toilettes chimiques. Il y a même l’électricité, on ne s’y attendait pas !
Tapis berbères au sol, poêle à bois, robinetterie en cuivre, etc., la décoration est soignée, épurée et authentique.</p>
              <p><strong>On ne peut pas louper la piscine...</strong> incroyable au beau milieu de rien ! À peine on l'aperçoit, qu'on a déjà trop hâte d'y faire un plouf !</p>
              <div className="article-gallery-2">
                              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_1548.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5323.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              </div>
          </section>

          <section id="sejour" className="article-section">
              <div className="article-day-header">
              <h2>Notre séjour au Scarabeo Camp</h2>
            </div>
              <p>En fin de journée, nous avons la chance d'assister à un merveilleux coucher de soleil. C'est à ce moment-là que le personnel propose aux clients du camp de prendre l'apéritif au bar de la piscine...</p>
              <p>Nous avons alors le choix de commander des softs ou de l'alcool. Il est possible d'acheter une bouteille de vin (blanc, rosé ou rouge) ou de se faire servir au verre.</p>
              <p>On se sent clairement au paradis ! Avec un tel décor et une ambiance aussi sereine, c'est du pur bonheur !</p>
                            <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5593.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5397.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <p>À la nuit tombée, des lanternes sont allumées dans l’ensemble du camp.</p>
              <p>Nous n'avons qu’à suivre le chemin éclairé pour rejoindre la grande tente où est servi le dîner et où a lieu un petit concert privé… Un homme joue de la guitare et chante un répertoire plutôt sympa !</p>
              <p>L’excellent repas se fait à la lueur des chandelles : assortiment d’entrées, tajine de bœuf, tajine de poulet citron, et enfin le dessert. Les quantités sont plutôt généreuses et du vin nous est proposé (avec un supplément bien entendu).</p>
              <div className="article-gallery-2">
                              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5494.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5492.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              </div>
                            <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5486.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5499.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <p>Pour finir cette merveilleuse soirée, petite digestion autour du feu de camp, des fauteuils nous y attendent. Et comme il fait un peu frais, le personnel qui est aux petits soins pour nous, apportera un plaid à chacune...</p>
              <p>On se sent tellement bien ! Rien de tel après un repas si copieux pour faire une petite pause et apprécier le moment. Le ciel était dégagé ce soir-là et on a pu admirer des milliers d’étoiles. On aurait aimé que le temps s'arrête.</p>
                            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5476.jpg" alt="Désert d'Agafay" className="article-img-full" loading="lazy" />
              <div className="article-gallery-2">
                              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5464.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5521.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              </div>
              <p>Le matin, un petit déjeuner copieux nous attend sous une tente. Un grand buffet est proposé avec du thé, du café, des jus de fruit, des céréales, des œufs, du pain, et surtout avec les fameuses crêpes aux 1000 trous marocaines ! Un vrai régal ! Il y en a vraiment pour tous les goûts.</p>
              <p>Il est généralement demandé de <strong>quitter la tente entre 10 h et 11 h, mais le personnel nous a gentiment proposé de passer plus de temps sans frais supplémentaire </strong>au sein de leur établissement. Nous profiterons donc de ce cadre exceptionnel jusqu'à 17 h ! Autant dire que nous ne nous sommes pas faites prier !</p>
              <p>Comme vous l'avez compris, vous pouvez ainsi continuer à profiter de ce cadre magnifique, de la piscine, mais également des activités proposées après avoir rendu la tente.</p>
              <div className="article-gallery-2">
                              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5647.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5596.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              </div>
              <h3 className="article-h3">Est-il possible de venir seulement à la journée ?</h3>
              <p><strong>La réponse est oui !</strong> Si vous ne souhaitez pas dormir sur place, vous avez aussi la possibilité de profiter des lieux seulement à la journée.</p>
              
              <h4 className="article-h4">⧐ <a href="https://boheme-marrakech.com" target="_blank" rel="noopener noreferrer">La Bohème</a></h4>
              <p>Nous avons également eu l&apos;occasion de passer une journée à <strong>La Bohème</strong>, un autre camp de la région. L&apos;endroit est indéniablement beau — grand, soigné, avec une piscine et une ambiance DJ lounge en fond sonore. On y mange très bien, et les activités proposées (buggy, balade à dromadaire) sont franchement sympas.</p>
              <p>Cela dit, nous avons moins accroché à l&apos;atmosphère générale. C&apos;est plus &quot;resort&quot;, plus festif — et on y perd un peu cette sensation d&apos;isolement total et d&apos;authenticité qui nous avait tant charmées au Scarabeo. Deux ambiances vraiment différentes, selon ce que vous recherchez !</p>

              <div className="article-gallery-2">
                <img src="/la-boheme1.webp" alt="La Bohème Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="/la-boheme2.webp" alt="La Bohème Agafay désert" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>

              <div className="article-avis">
                <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></span>
                <div><strong>L&apos;avis des MamZelles</strong><p>La Bohème est une belle adresse pour une journée animée dans le désert. Mais si vous cherchez l&apos;authenticité et le dépaysement absolu, notre cœur reste au Scarabeo Camp.</p></div>
              </div>

              <p>Mais comme vous l'aurez compris, <strong>nous conseillons vivement, si votre budget le permet bien entendu, de passer une nuit dans le désert d'Agafay</strong>... Vous profiterez davantage de toute la magie du site et apprécierez l'atmosphère qui y règne le soir notamment.</p>
              <div className="article-gallery-2">
                              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5415.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5449_jpg.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              </div>
          </section>

          <section id="organiser" className="article-section">
              <div className="article-day-header">
              <h2>Tout savoir pour organiser son expérience</h2>
            </div>
              <h3 className="article-h3">Comment s&apos;y rendre ?</h3>
              <p>Pour rappel, le désert d&apos;Agafay se situe à 40 min environ du centre-ville de Marrakech.</p>
              <p><strong>Vous avez la possibilité de vous rendre au Scarabeo Camp en utilisant un grand taxi ou un taxi privé.</strong> Il faut compter 400 Dh (40 €) par trajet en moyenne pour 4 personnes.</p>
              <p>Autrement, <strong>il est possible de réserver directement votre transport via le camp</strong>. Dans ce cas, c&apos;est bien plus onéreux... Il faut compter 550 Dh (55 €) par trajet pour 1 à 4 personnes.</p>

              <h3 className="article-h3">Quel budget ?</h3>

              <div className="agafay-tarif-grid">
                <div className="agafay-tarif-card">
                  <div className="agafay-tarif-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
                    <span className="agafay-tarif-title">Pour une nuit</span>
                    
                  </div>
                  <p>Honnêtement, passer une nuit dans le désert d&apos;Agafay nécessite de <strong>prévoir une bonne petite enveloppe</strong>... !</p>
                  <div className="agafay-tarif-list">
                    <div className="agafay-tarif-list-item"><strong>Tente 2 personnes</strong> — demi-pension comprise<br />2650 Dh (265 €)</div>
                    <div className="agafay-tarif-list-item"><strong>Suite familiale 4 personnes</strong><br />3250 Dh (325 €)</div>
                  </div>
                  <p className="agafay-tarif-note">Plus vous serez nombreux, moins ce sera cher !</p>
                </div>

                <div className="agafay-tarif-card">
                  <div className="agafay-tarif-header">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                    <span className="agafay-tarif-title">Pour une journée</span>
                    
                  </div>
                  <p>Une belle façon de découvrir la magie d&apos;Agafay sans dormir sur place.</p>
                  <div className="agafay-tarif-subblock-grid">
                  <div className="agafay-tarif-subblock">
                    <p className="agafay-tarif-camp-label"><a href="https://www.scarabeocamp.com" target="_blank" rel="noopener noreferrer">Scarabeo Camp</a></p>
                    <div className="agafay-tarif-list">
                      <div className="agafay-tarif-list-item"><strong>Adulte</strong> — 450 Dh (45 €)</div>
                      <div className="agafay-tarif-list-item"><strong>Enfant (4-10 ans)</strong> — 225 Dh (22,50 €)</div>
                    </div>
                    <p className="agafay-tarif-note">Accès piscine + déjeuner inclus !</p>
                  </div>
                  <div className="agafay-tarif-subblock">
                    <p className="agafay-tarif-camp-label"><a href="https://boheme-marrakech.com" target="_blank" rel="noopener noreferrer">La Bohème</a></p>
                    <div className="agafay-tarif-list">
                      <div className="agafay-tarif-list-item"><strong>Adulte</strong> — 450 Dh (45 €)</div>
                      <div className="agafay-tarif-list-item"><strong>Enfant</strong> — 250 Dh (25 €)</div>
                    </div>
                    <p className="agafay-tarif-note">Piscine + déjeuner + transferts inclus !</p>
                  </div>
                  </div>
                </div>
              </div>

              <p>S&apos;il vous manque des informations pour organiser votre séjour au Scarabeo Camp, n&apos;hésitez pas à consulter leur <strong><a href="https://www.scarabeocamp.com" target="_blank" rel="noopener noreferrer">site internet</a></strong>.</p>

              <div className="article-avis">
                <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg></span>
                <div><strong>Le mot des MamZelles</strong><p>Nous tenons à préciser que ce n&apos;est pas une collaboration : il s&apos;agit juste d&apos;un gros coup de cœur pour cet établissement !</p></div>
              </div>
          </section>

          <section id="marrakech" className="article-section">
              <div className="article-day-header">
              <h2>Si vous passez aussi un séjour à Marrakech</h2>
            </div>
              <p>Il est possible que vous soyez passées à côté de certaines visites, pourtant incontournables pour nous à Marrakech ! N&apos;hésitez pas à lire notre article pour découvrir tous les secrets de la ville rouge par quartier, ainsi que tous nos conseils !</p>

              <a href="/visiter-marrakech"><img src="/related/Marrakech-article.webp" alt="Visiter Marrakech" className="article-img-full" loading="lazy" /></a>

              <div className="article-must">
                <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
                <div><strong>À LIRE AUSSI</strong><p><a href="/visiter-marrakech" className="article-link">⋙ Visiter Marrakech : que faire dans la ville rouge</a></p></div>
              </div>
          </section>

          {/* OUTRO */}
          <section className="article-comments">
            <h2 className="article-comments-title">Commentaires</h2>

            <CommentsList comments={[
              {
                id: '4',
                author: 'Aurélie',
                date: '3 mois il y a',
                text: "Bonjour, j\'aimerais savoir quel camp vous avez choisi. Le Stone camp ou les Roches Noires. Est-ce qu\'il y a une animation le soir ou des activités possibles (chameau, quad,…) ? Les photos sont magnifiques. Merci",
                reply: { author: 'MamZelles en vadrouille', date: '2 mois il y a', text: "Bonjour, nous avions passé notre séjour au Scarabeo Camp que nous avions validé à 100% ! Nous avons aussi visité La Bohème, mais nous avons moins apprécié l\'endroit. Bonne continuation pour la réservation de votre séjour. ☀️🐪" }
              },
              {
                id: '3',
                author: 'Pouget',
                date: '1 année il y a',
                text: "Merci pour toutes ces informations très utiles. Peut-on y aller seul en voiture ? Merci pour votre réponse.",
                reply: { author: 'MamZelles en vadrouille', date: '1 année il y a', text: "Bonjour, oui absolument ! 👍🏼 Bon voyage. ☀️" }
              },
              {
                id: '2',
                author: 'Claudia',
                date: '1 année il y a',
                text: "Bonjour, merci pour cet article ! Vous y êtes allé à quelle période ? Je devrais y être en fin octobre. Je m\'interroge sur la température de l\'eau de la piscine.",
                reply: { author: 'MamZelles en vadrouille', date: '1 année il y a', text: "Coucou ! Avec grand plaisir ! 🤗 Nous y étions allées en avril, on avait eu un temps magnifique. ☀️ On espère que vous aurez aussi une belle météo, ce qui chauffera la piscine… 😉 On vous souhaite de bonnes vacances ! 🌴" }
              },
              {
                id: '1',
                author: 'Bouteloup',
                date: '3 années il y a',
                text: "Félicitations les filles pour votre blog, vous y avez mis beaucoup de vous et on ressent tout l\'amour qu\'il y a entre vous. Je ne connaissais pas le principe du glamping et j\'adore, ce lieu est magique pour une escapade en amoureux. Quelles seront vos prochaines destinations ? Est-ce que l\'aménagement d\'Elisabeth avance ? Merci encore de nous faire partager tout cela et merci pour les bons plans 😘",
                reply: { author: 'MamZelles en vadrouille', date: '3 années il y a', text: "Mille mercis pour ce petit message qui nous fait très plaisir ! C\'est tellement encourageant pour nous… 🥰 Contentes en tout cas que l\'article sur Agafay vous ai plu ! 🤩 Notre prochain gros voyage est prévu dans peu de temps…, on a trop hâte ! ☀️🌴 Du coup, Élisabeth (notre camion que l\'on aménage toutes les deux) est mise pour l\'instant en pause… 🚐 Bref, on a plein de beaux projets à venir et on est au taquet !!! On espère que vous allez bien. Belle journée à vous & à bientôt ! Amélie, Laurie & Aladdin 😘😘🐶" }
              }
            ]} />
            <CommentForm
              articleTitle={"Agafay : dormir dans le désert, notre expérience inoubliable"}
              articleUrl="https://mamzellesenvadrouille.com/dormir-dans-le-desert-agafay"
            />
          </section>

          <NewsletterForm />

          {/* ARTICLES LIES */}
          <ArticlesLies currentSlug="dormir-dans-le-desert-agafay" />

        </main>

        {/* SIDEBAR */}
        <aside className="article-sidebar">
          <div className="sidebar-card-white">
            <div className="sidebar-about-img-wrap">
              <img src="/nous.webp" alt="Amélie et Laurie" className="sidebar-about-img" />
            </div>
            <h3 className="sidebar-about-title">À propos <em className="sidebar-about-em">de nous</em></h3>
            <p className="sidebar-about-text">Nous, c&apos;est Amélie &amp; Laurie, deux amoureuses de la vie et du voyage. Nous partageons ici nos aventures à travers le monde.</p>
            <a href="/qui-sommes-nous" className="sidebar-link">Notre histoire →</a>
          </div>

          <div className="sidebar-card sidebar-cta">
            <img src="/home-hero.webp" alt="" className="sidebar-cta-bg-img" />
            <div className="sidebar-cta-gradient" />
            <div className="sidebar-cta-body">
              <h3 className="sidebar-cta-title">Vous rêvez d&apos;un voyage<br className="mobile-only-br" /> <em>sur mesure ?</em></h3>
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
