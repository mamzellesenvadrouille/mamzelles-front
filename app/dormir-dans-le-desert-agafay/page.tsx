import type { Metadata } from 'next';
import './agafay.css';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';
import PratiqueOnglets from '../components/PratiqueOnglets';

export const metadata: Metadata = {
  title: "Dormir dans le désert d'Agafay : notre expérience",
  description: "Notre récit et tous nos conseils pour dormir dans le désert d'Agafay, près de Marrakech : glamping au Scarabeo Camp, budget, comment s'y rendre.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/dormir-dans-le-desert-agafay' },
  openGraph: {
    title: "Dormir dans le désert d'Agafay : notre expérience",
    description: "Notre récit et tous nos conseils pour dormir dans le désert d'Agafay, près de Marrakech : glamping au Scarabeo Camp, budget, comment s'y rendre.",
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
    title: "Dormir dans le désert d'Agafay : notre expérience",
    description: "Notre récit et tous nos conseils pour dormir dans le désert d'Agafay, près de Marrakech : glamping au Scarabeo Camp, budget, comment s'y rendre.",
    images: ['/Agafay.webp'],
  },
};

export default function MarrakechPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Dormir dans le désert d'Agafay : notre expérience",
    description: "Notre récit et tous nos conseils pour dormir dans le désert d'Agafay, près de Marrakech : glamping au Scarabeo Camp, budget, comment s'y rendre.",
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
          <p className="hero-desc">Notre récit et nos conseils pour vivre<br className="agafay-hero-br" /> une nuit magique dans le désert.</p>
        </div>
      </section>

    </div>

      {/* BANDEAU EN BREF */}
      <div className="article-bref-bar">
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>1 nuit / 2 jours</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
          <span>Mars-mai &amp; sept-nov</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"/></svg>
          <span>60-90 €/j/pers.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M14.8 9a2 2 0 0 0-2-1.5 h-1.6a2 2 0 0 0 0 4h1.6a2 2 0 0 1 0 4H11a2 2 0 0 1-2-1.5"/><line x1="12" y1="6" x2="12" y2="18"/></svg>
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
            <h2 className="article-toc-title">📌 Sommaire de l&apos;article</h2>
            <ol className="article-toc-list">
              <li><a href="#desert">📍 Le désert d&apos;Agafay, aux portes de Marrakech</a></li>
              <li><a href="#camp">📍 Quel camp choisir dans le désert d&apos;Agafay&nbsp;?</a></li>
              <li><a href="#sejour">📍 Notre séjour au Scarabeo Camp</a></li>
              <li><a href="#organiser">📍 Tout savoir pour organiser son expérience</a></li>
              <li><a href="#marrakech">📍 Si vous passez aussi un séjour à Marrakech</a></li>
            </ol>
          </nav>

          <section className="article-section">
              <p><strong>Loin de l’effervescence et du tumulte de Marrakech, nous vous conseillons de vivre une expérience complètement magique </strong><strong>Celle de passer une nuit inoubliable dans le désert d’Agafay !</strong></p>
              <p><strong>En amoureux ou entre amis, c'est certain, ce souvenir restera à jamais gravé dans vos mémoires ! </strong></p>
              <p><strong>Vous êtes tenté ? Voici tous nos conseils et notre récit de voyage pour vous inspirer et vivre à votre tour cette incroyable expérience !</strong></p>
                            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5395.jpg" alt="Désert d'Agafay" className="article-img-full" loading="lazy" />
          </section>

          <section id="desert" className="article-section">
              <div className="article-day-header">
              <h2>📍 Le désert d'Agafay, aux portes de Marrakech</h2>
            </div>
              <p><strong>Le désert se situe à une trentaine de kilomètres de Marrakech</strong> (environ 40 min en voiture), sur les premières hauteurs du massif du Haut Atlas.</p>
              <p>Il s’agit d’un reg qui s’étend sur plusieurs centaines d’hectares. À ne pas confondre avec le désert d’Erg Chebbi, plus connu sous le nom des dunes de Merzouga dans le Sahara.</p>
              <div className="article-tip">
                <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                <div><strong>Bon à savoir</strong><p>Un <strong>erg</strong> est un désert de sable, tandis qu&apos;un <strong>reg</strong> est un désert de pierre. Agafay est donc un désert rocailleux, à ne pas confondre avec les dunes de Merzouga dans le Sahara.</p></div>
              </div>
              <p><strong>Ce désert de dunes rocailleuses</strong> est juste incroyable ! On y trouve même une oasis d'environ sept hectares surnommée l’Oasis enchantée. Eucalyptus, oliviers et vignes qui s’y trouvent sont irrigués naturellement par l’Oued situé à proximité.</p>
                            <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5539.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5408.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              </div>
          </section>

          <section id="camp" className="article-section">
              <div className="article-day-header">
              <h2>📍 Quel camp choisir dans le désert d'Agafay ?</h2>
            </div>
              <p>Après avoir épluché de nombreuses adresses de camps dans le désert d'Agafay, que ce soit sur internet, des blogs ou les réseaux sociaux, notre choix s’est finalement porté sur le <strong>Scarabeo Camp</strong>.</p>
              <p>Il semblait correspondre en tout point à ce que l'on recherchait pour notre séjour... Un endroit de rêve isolé avec piscine, un bon rapport qualité / prix, et de très bons retours quant à l'accueil chaleureux du personnel et de la qualité des repas.</p>
              <p>Ce camp est l'un des premiers dans la région qui eut ouvert. <strong>Un vrai bivouac composé de tentes berbères.</strong> Rien qu'à voir les photos de cet endroit, on était déjà sous le charme !</p>
              <p>Et quelle surprise ce fut en découvrant ce lieu à notre arrivée ! Le Scarabeo Camp est juste magique ! C'est un <strong>dépaysement total, hors du temps</strong>. Le camp a préservé son authenticité tout en offrant un confort moderne.</p>
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
              <h2>📍 Notre séjour au Scarabeo Camp</h2>
            </div>
              <p>En fin de journée, nous avons la chance d'assister à un merveilleux coucher de soleil.</p>
              <p>C'est à ce moment-là que le personnel propose aux clients du camp de prendre l'apéritif au bar de la piscine...</p>
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
              <p>Pour finir cette merveilleuse soirée, petite digestion autour du feu de camp, des fauteuils nous y attendent.</p>
              <p>Et comme il fait un peu frais, le personnel qui est aux petits soins pour nous, apportera un plaid à chacune...</p>
              <p>On se sent tellement bien ! Rien de tel après un repas si copieux pour faire une petite pause et apprécier le moment.</p>
              <p>Le ciel était dégagé ce soir-là et on a pu admirer des milliers d’étoiles. On aurait aimé que le temps s'arrête...</p>
                            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5476.jpg" alt="Désert d'Agafay" className="article-img-full" loading="lazy" />
              <div className="article-gallery-2">
                              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5464.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5521.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              </div>
              <p>Le matin, un petit déjeuner copieux nous attend sous une tente. Un grand buffet est proposé avec du thé, du café, des jus de fruit, des céréales, des œufs, du pain, et surtout avec les fameuses crêpes aux 1000 trous marocaines !</p>
              <p>Un vrai régal ! Il y en a vraiment pour tous les goûts.</p>
              <p>Il est généralement demandé de <strong>quitter la tente entre 10 h et 11 h, mais le personnel nous a gentiment proposé de passer plus de temps sans frais supplémentaire </strong>au sein de leur établissement. Nous profiterons donc de ce cadre exceptionnel jusqu'à 17 h ! Autant dire que nous ne nous sommes pas faites prier !</p>
              <p>Comme vous l'avez compris, vous pouvez ainsi continuer à profiter de ce cadre magnifique, de la piscine, mais également des activités proposées après avoir rendu la tente.</p>
              <div className="article-gallery-2">
                              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5647.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/IMG_5596.jpg" alt="Désert d'Agafay" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              </div>
              <h3 className="article-h3">Est-il possible de venir seulement à la journée ?</h3>
              <p><strong>La réponse est oui !</strong> Si vous ne souhaitez pas dormir sur place, vous avez aussi la possibilité de profiter des lieux seulement à la journée.</p>
              <p>Hormis le Scarabeo Camp, sachez qu'il existe aujourd’hui de nombreux camps ou complexes qui proposent un forfait journalier : vous aurez alors accès à la piscine (pour ceux qui en disposent), pourrez déjeuner sur place et participer aux activités proposées (moyennant cependant un coût supplémentaire).</p>
              <p>Ces dernières vous permettront entre autres de découvrir un peu mieux le coin, que ce soit à dos de dromadaire, en quad ou en buggy.</p>
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
              <h2>📍 Tout savoir pour organiser son expérience</h2>
            </div>
              <PratiqueOnglets onglets={[
                  {
                    id: 'rendre',
                    label: "Comment s'y rendre ?",
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17h14M5 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2M5 17l-1 3M19 17l1 3M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2"/><circle cx="7.5" cy="14.5" r="1"/><circle cx="16.5" cy="14.5" r="1"/></svg>,
                    content: (
                      <>
                        <p>Pour rappel, le désert d&apos;Agafay se situe à 40 min environ du centre-ville de Marrakech.</p>
                        <p><strong>Vous avez la possibilité de vous rendre au Scarabeo Camp en utilisant un grand taxi ou un taxi privé.</strong> Il faut compter 400 Dh (40 €) par trajet en moyenne pour 4 personnes.</p>
                        <p>Autrement, <strong>il est possible de réserver directement votre transport via le camp</strong>. Dans ce cas, c&apos;est bien plus onéreux... Il faut compter 550 Dh (55 €) par trajet pour 3 personnes ou 810 Dh (81 €) pour 4 personnes par exemple.</p>
                      </>
                    )
                  },
                  {
                    id: 'budget',
                    label: 'Quel budget ?',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"/></svg>,
                    content: (
                      <>
                        <p><strong>Pour une nuit (+ 2 jours)</strong></p>
                        <p>Honnêtement, passer une nuit dans le désert d&apos;Agafay, et notamment au Scarabeo Camp, nécessite de <strong>prévoir une bonne petite enveloppe</strong>... !</p>
                        <p>Pour une nuit dans une tente de 2 personnes par exemple, demi-pension comprise, il faut débourser 2400 Dh (240 €). Pour la réservation d&apos;une suite familiale de 4 personnes, il faut compter 2950 Dh (290 €). En définitive, <strong>plus vous serez nombreux à vivre cette expérience, moins cela vous coûtera cher</strong> !</p>
                        <p><strong>Pour une journée</strong></p>
                        <p>Si vous souhaitez passer uniquement la journée au Scarabeo Camp, comptez 350 Dh (35 €) par adulte et 185 Dh (18,50 €) pour les enfants de moins de 12 ans.</p>
                        <p>Compris dans ce tarif, <strong>vous aurez accès à la piscine et profiterez de leur succulent déjeuner marocain</strong> !</p>
                      </>
                    )
                  }
              ]} />
              <p>S&apos;il vous manque des informations pour organiser votre séjour au Scarabeo Camp, n&apos;hésitez pas à consulter leur <strong><a href="https://www.scarabeocamp.com" target="_blank" rel="noopener noreferrer">site internet</a></strong>.</p>

              <div className="article-avis">
                <div className="article-avis-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
                </div>
                <div className="article-avis-body">
                  <span className="article-avis-title">Le mot des MamZelles</span>
                  <p>Nous tenons à préciser que ce n&apos;est pas une collaboration : il s&apos;agit juste d&apos;un gros coup de cœur pour cet établissement !</p>
                </div>
              </div>
          </section>

          <section id="marrakech" className="article-section">
              <div className="article-day-header">
              <h2>📍 Si vous passez aussi un séjour à Marrakech</h2>
            </div>
              <p>Il est possible que vous soyez passées à côté de certaines visites, pourtant incontournables pour nous à Marrakech !</p>
              <p>N&apos;hésitez pas à lire notre article pour découvrir tous les secrets de la ville rouge par quartier, ainsi que tous nos conseils !</p>

              <div className="article-must">
                <div className="article-must-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                </div>
                <div className="article-must-body">
                  <span className="article-must-title">À lire aussi</span>
                  <p><a href="/visiter-marrakech" className="article-link">≫ Visiter Marrakech : que faire dans la ville rouge</a></p>
                </div>
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
              articleTitle={"Dormir dans le désert d'Agafay : notre expérience"}
              articleUrl="https://mamzellesenvadrouille.com/dormir-dans-le-desert-agafay"
            />
          </section>

          <NewsletterForm />

          {/* ARTICLES LIES */}
          <div className="article-related">
            <h3 className="article-related-title">À lire aussi</h3>
            <div className="article-related-grid">
              <a href="/visiter-marrakech" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/Marrakech-Blog.jpg" alt="Visiter Marrakech" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Maroc</span>
                  <p className="article-related-title-card">Visiter Marrakech : que faire dans la ville rouge</p>
                </div>
              </a>
              <a href="/visiter-londres" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/Londres.jpg" alt="Londres" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Angleterre</span>
                  <p className="article-related-title-card">Visiter Londres : notre guide complet</p>
                </div>
              </a>
              <a href="/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Les-Philippines-1024x819.jpg" alt="Itinéraire Philippines 3 semaines" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Philippines</span>
                  <p className="article-related-title-card">Voyage aux Philippines : itinéraire de 3 semaines</p>
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
