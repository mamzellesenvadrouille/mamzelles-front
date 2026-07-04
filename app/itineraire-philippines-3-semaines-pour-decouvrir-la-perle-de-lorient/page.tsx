import type { Metadata } from 'next';
import './philippines.css';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';
import PratiqueOnglets from '../components/PratiqueOnglets';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: "Philippines 3 semaines : Palawan Banaue Bohol Siquijor & Siargao",
  description: "3 semaines aux Philippines : Palawan, Banaue, Bohol, Siquijor, Siargao… notre itinéraire complet, nos conseils pratiques & nos coups de cœur.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient' },
  openGraph: {
    title: "Philippines 3 semaines : Palawan Banaue Bohol Siquijor & Siargao",
    description: '3 semaines aux Philippines : Palawan, Banaue, Bohol, Siquijor, Siargao… notre itinéraire complet, nos conseils pratiques & nos coups de cœur.',
    url: 'https://mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/Philippines.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2024-09-01T00:00:00.000Z',
    authors: ['MamZelles en vadrouille'],
  },
};

export default function PhilippinesPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Voyage aux Philippines : itinéraire de 3 semaines",
    description: "3 semaines aux Philippines : Palawan, Banaue, Bohol, Siquijor, Siargao… notre itinéraire complet, nos conseils pratiques & nos coups de cœur.",
    image: 'https://mamzellesenvadrouille.com/Philippines.webp',
    datePublished: '2024-09-01',
    dateModified: '2026-06-21',
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
      '@id': 'https://mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient',
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
        <img className="hero-bg" src="/Philippines.webp" alt="Philippines, îles paradisiaques aux eaux turquoise" style={{objectPosition: 'center 40%'}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Itinéraire Philippines<br /><em>3 semaines pour découvrir la perle de l&apos;Orient</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Notre itinéraire détaillé pour explorer les Philippines<br className="mobile-hero-break" /><br className="tablet-only-br" /> en 3 semaines,<br className="desktop-only-br" /> entre îles de rêve, rizières en terrasse,<br className="tablet-only-br" /> cascades et rencontres inoubliables.</p>
        </div>
      </section>

    </div>

      {/* BANDEAU EN BREF */}
      <div className="article-bref-bar">
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>3 semaines min.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <span>Nov. à mai</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"/></svg>
          <span>60-80 €/j/pers.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M14.8 9a2 2 0 0 0-2-1.5h-1.6a2 2 0 0 0 0 4h1.6a2 2 0 0 1 0 4H11a2 2 0 0 1-2-1.5"/><line x1="12" y1="6" x2="12" y2="18"/></svg>
          <span>Peso philippin (PHP)</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Filipino &amp; Anglais</span>
        </div>
      </div>

      {/* BLOC COUP DE COEUR */}
      <div className="article-coup-de-coeur">
        <div className="article-cdcr-header">
          <span className="article-cdcr-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#c8956c" stroke="#c8956c" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </span>
          <h2>Ce qui a rendu ce voyage inoubliable</h2>
        </div>
        <div className="article-cdcr-grid">
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre île coup de cœur</span><span className="article-cdcr-value">→ Palawan</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le moment le plus émouvant</span><span className="article-cdcr-value">→ Les rizières de Batad</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">À découvrir sans hésiter</span><span className="article-cdcr-value">→ Les cascades de Siquijor</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">L&apos;énergie qu&apos;on<br className="tablet-only-br" />a adorée</span><span className="article-cdcr-value">→ L&apos;ambiance surf de Siargao</span></div>
        </div>
      </div>

      <div className="article-layout article-philippines">
        <main className="article-main">

          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title"><svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)" stroke="none" style={{marginRight:'8px', verticalAlign:'middle'}}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>Sommaire de l&apos;article</h2>
            <ul className="article-toc-list">
              <li><a href="#itineraire">Notre itinéraire en 3 semaines</a></li>
              <li><a href="#palawan">Palawan : El Nido et Coron</a></li>
              <li><a href="#banaue">Banaue &amp; Batad</a></li>
              <li><a href="#bohol">Bohol &amp; ses petits plus uniques</a></li>
              <li><a href="#siquijor">Siquijor — L&apos;île mystique aux magnifiques cascades</a></li>
              <li><a href="#siargao">Siargao — L&apos;île des surfeurs</a></li>
              <li><a href="#budget">Quel budget pour 3 semaines ?</a></li>
              <li><a href="#pratique">Tout savoir pour organiser votre voyage</a></li>
            </ul>
          </nav>

          {/* INTRO */}
          <section className="article-section">
            <p className="article-intro"><strong>Vous envisagez de partir à la découverte des Philippines et vous cherchez l&apos;itinéraire parfait ? Vous êtes au bon endroit ! Nous vous partageons ici le nôtre en détail.<br />Belle lecture à vous et bon voyage !</strong></p>
            <p><strong>Les Philippines c&apos;est plus de 7500 îles,</strong> ce qui nous offre de nombreuses possibilités de découvertes. Chaque île est différente, ce qui rend le choix encore plus compliqué !</p>
            <p>Vouloir découvrir un maximum d&apos;endroits sous-entend pas mal de déplacements pour rejoindre les différentes îles en avion et/ou en ferry. Durant notre voyage, nous avons rencontré plusieurs personnes qui ont fait le choix de ne rien planifier et de voir au fur et à mesure où ils souhaitaient se rendre.</p>
            <p>À moins d&apos;avoir 2 mois devant vous et un budget illimité, il en ressort majoritairement que <strong>les déplacements sont une vraie galère et une grosse perte de temps si ce n&apos;est pas anticipé.</strong> Pas mal d&apos;entre elles ont donc renoncé à découvrir d&apos;autres îles.</p>
            <p><strong>Planifier son itinéraire</strong> permet de cibler vos points d&apos;intérêt sans vous égarer, sans perdre trop de temps dans l&apos;organisation sur place et dans vos déplacements, mais aussi de ne pas exploser votre budget !</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2696-1024x768.jpg" alt="Naked Beach Siargao Island Hopping" className="article-img-full" loading="lazy" />
            <p>Le fait d&apos;<strong>anticiper les réservations</strong> laisse moins de place aux plans galères et aux mauvaises surprises. Par exemple, devoir chercher un hôtel sur place et le choisir par dépit car ils sont tous complets… Acheter un billet d&apos;avion 200 € alors qu&apos;il y a la possibilité de le payer 4 fois moins cher quelques mois auparavant… Ou encore ne pas avoir de billet le jour prévu car les vols et / ou les ferrys sont pleins !</p>
            <p>Pour organiser vos déplacements, vous avez plusieurs possibilités. Il existe différentes compagnies aériennes telles que <strong><a href="https://www.philippineairlines.com" target="_blank" rel="noopener noreferrer" className="article-link">Philippines Airlines</a></strong>, <strong><a href="https://www.airasia.com/en/gb" target="_blank" rel="noopener noreferrer" className="article-link">Air Asia</a></strong> et <strong><a href="https://www.cebupacificair.com/en-PH/" target="_blank" rel="noopener noreferrer" className="article-link">Cebu Pacific</a></strong>. Il en est de même pour les ferrys : <strong><a href="https://www.oceanjet.net/" target="_blank" rel="noopener noreferrer" className="article-link">Océan Jet</a></strong>, <strong><a href="https://liteferries.com.ph/" target="_blank" rel="noopener noreferrer" className="article-link">Lite Shipping Corporation</a></strong> et <strong><a href="https://www.starliteferries.com/" target="_blank" rel="noopener noreferrer" className="article-link">Starlite Ferries</a></strong>.</p>
            <p>Vous trouverez plusieurs sites qui vous permettront de planifier votre voyage. Personnellement, nous avons utilisé <strong><a href="https://12go.asia/fr" target="_blank" rel="noopener noreferrer" className="article-link">12go.asia</a></strong> pour réserver nos trajets en bus et en ferry. Pour les vols, nous avons comparé les différentes propositions sur <strong><a href="https://www.skyscanner.fr/" target="_blank" rel="noopener noreferrer" className="article-link">Skyscanner</a></strong> en fonction des dates et des destinations qui nous intéressaient, puis nous avons acheté nos billets directement sur le site internet des compagnies aériennes, c&apos;est souvent plus économique !</p>
            <p>Quelques mois avant notre départ, nous avons donc sélectionné les endroits dans lesquels nous voulions nous rendre et avons réservé tous nos déplacements en avion, ferry et bus, et booké nos hébergements. Nous n&apos;avons vraiment pas regretté cette organisation !</p>
          </section>

          {/* ITINERAIRE */}
          <section id="itineraire" className="article-section">
            <div className="article-day-header">
              <h2>Notre itinéraire en 3 semaines</h2>
            </div>
            <p>Nous avions une envie irréfutable de découvrir de belles plages, des îles paradisiaques aux eaux turquoise et émeraude, de la végétation luxuriante, et des paysages à couper le souffle.</p>
            <p>Entre terre et mer, c&apos;est partiiiii pour les Philippines !</p>
            <div className="article-tip philippines-itin-tip">
              <div><strong>Notre itinéraire</strong>
              <p><i className="ti ti-plane" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Manille → Palawan, El Nido (3 nuits)<br />
              <i className="ti ti-plane" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>El Nido → Coron (3 nuits)<br />
              <i className="ti ti-plane" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Coron → Manille<br />
              <i className="ti ti-bus" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Manille → Banaue (3 nuits)<br />
              <i className="ti ti-bus" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Retour Manille<br />
              <i className="ti ti-plane" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Manille → Bohol (3 nuits)<br />
              <i className="ti ti-ship" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Bohol → Siquijor (3 nuits)<br />
              <i className="ti ti-ship" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Siquijor → Bohol + <i className="ti ti-ship" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Bohol → Cebu (1 nuit)<br />
              <i className="ti ti-plane" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Cebu → Siargao (3 nuits)<br />
              <i className="ti ti-plane" aria-hidden="true" style={{color: 'var(--gold)', marginRight: '6px', fontSize: '18px', verticalAlign: 'middle'}}></i>Siargao → Manille</p></div>
            </div>
          </section>

          {/* PALAWAN */}
          <section id="palawan" className="article-section">
            <div className="article-day-header">
              <h2>Palawan : El Nido et Coron</h2>
            </div>
            <p>Palawan est une <strong>véritable perle tropicale</strong> réputée pour ses paysages à couper le souffle. Entre plages de sable blanc, eaux cristallines et formations rocheuses majestueuses, cette île incarne la définition même de l&apos;évasion, où chaque recoin révèle une beauté sauvage et intacte.</p>
            <p>Notre voyage commence donc à Palawan. Nous avons passé quelques jours à El Nido, puis à Coron. Il y a tellement de choses à vous raconter que <strong>nous y avons consacré un article.</strong></p>
            <p>Des lagons d&apos;El Nido, aux récifs préservés de Coron, préparez-vous à plonger dans ce décor de rêve, où l&apos;évasion devient réalité !</p>
            <a href="/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines" style={{display:"block", margin:"24px 0"}}><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Palawan-1024x819.jpg" alt="Palawan Blog" className="article-img-full" loading="lazy" /></a>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À lire aussi</strong><p><a href="/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines" className="article-link">⋙ PALAWAN : Entre El Nido &amp; Coron, découvrez le joyau des Philippines !</a></p></div>
            </div>
          </section>

          {/* BANAUE */}
          <section id="banaue" className="article-section">
            <div className="article-day-header">
              <h2>Banaue &amp; Batad</h2>
            </div>
            <p><strong>Banaue</strong> est une petite ville de montagne située dans la <strong>région d&apos;Ifugao,</strong> au Nord de l&apos;île de Luzon. Cette dernière est la plus grande île des Philippines. 380 kilomètres séparent Banaue de Manille. C&apos;est le point de départ pour découvrir les plus belles rizières en terrasse du pays.</p>
            <p><strong>Inscrites sur la liste du patrimoine mondial à l&apos;UNESCO</strong> en 1995, les rizières en terrasse du Nord des Philippines sont communément considérées comme la 8ème Merveille du monde.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_0388-768x1024.jpeg" alt="I survived Batad" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1145-1024x768.jpg" alt="Rizières en terrasses Batad" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1288-1024x768.jpg" alt="Wonder of the World Batad" className="article-img-full" loading="lazy" />
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 1</span>
              <h3>De Manille à Banaue</h3>
            </div>
            <h4>⧐ Comment se rendre à Banaue ?</h4>
            <p><strong>Pour nous rendre à Banaue, nous avons choisi l&apos;option bus au départ de Manille.</strong> Vous avez également la possibilité de vous y rendre en transport privé, mais le tarif ne sera pas le même ! Nous avions réservé le transfert plusieurs semaines avant. Le trajet aller-retour nous est revenu à <strong>1800 Php (30 €)</strong> par personne.</p>
            <p>Nous devons nous rendre à la gare routière de la compagnie <strong><a href="https://ohayami.ph/" target="_blank" rel="noopener noreferrer" className="article-link">Ohayami Trans</a></strong> à Manille pour 22 h 30, ce qui nous laisse le temps d&apos;aller manger un bout et de faire un petit tour dans le secteur.</p>
            <p>Nous sommes dans un quartier populaire, assez pauvre pour ne pas dire ghetto. Nous traversons quelques rues… C&apos;est la première fois qu&apos;on a le <strong>sentiment de ne pas être en sécurité,</strong> mais ce n&apos;est que notre ressenti. Après avoir mangé, nous retournons à la gare routière. Nous récupérons nos billets et c&apos;est parti pour un grand périple.</p>
            
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Si comme nous, vous souhaitez aller à Banaue en bus, vous devrez passer l&apos;épreuve du bus climatisé ! Ce n&apos;est pas un mythe, il y fait vraiment froid. Prévoyez de quoi vous couvrir.</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_5522-768x1024.jpeg" alt="Bus Manille Banaue" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0925-768x1024.jpg" alt="Bus Manille Banaue" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p><strong>Il y a 9 h de bus pour relier Manille à Banaue.</strong> Nous partons à 23 h. Nous nous sommes dit : « Nickel, on va pouvoir dormir ». Bah non, pas du tout ! On est toujours en admiration devant ces personnes qui, 5 minutes après le départ, piquent déjà du nez. Cependant, les sièges sont vraiment confortables et s&apos;inclinent encore plus que ceux des avions. Lumière tamisée, musique country en fond, tout est calme puisque tout le monde dort.</p>
            <p>Le bus s&apos;arrête 3 fois sur le trajet dans des sortes de stations services. Pauses pipi ! Ah oui, il n&apos;y a pas de toilette dans le bus ! Durant ces pauses qui dégourdissent les jambes et qui réchauffent aussi, vous trouverez également de quoi grignoter (biscuits, chips, boissons chaudes et fraîches…).</p>
            <p><strong>Il est environ 8 h 30 quand nous arrivons à Banaue</strong> sous la pluie (en même temps, c&apos;est le Nord !). Tellement contentes d&apos;être arrivées, rien ne peut nous démoraliser. On va faire la danse du soleil !</p>
            <p>À peine débarquées à la gare routière, nous devons payer une taxe de <strong>50 Php (0,85 €)</strong> par personne. Un tuk-tuk nous attend pour nous emmener à l&apos;hôtel, le <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJs6HrIW0okDMRNsWmK_hmVqs" target="_blank" className="article-link article-resto-link-desktop">Bogah Homestay</a><a href="https://maps.app.goo.gl/TxQ3NYyVdn6xQ6Ge6" target="_blank" className="article-link article-resto-link-mobile">Bogah Homestay</a></strong>.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0940-1024x768.jpg" alt="City Banaue" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0991-768x1024.jpg" alt="Ville Banaue" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0953-1024x768.jpg" alt="Banaue Tour Map" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>

            <p>Nous arrivons à l&apos;heure du petit déjeuner, parfait après ce long trajet en bus ! Nous nous installons à la terrasse de l&apos;hôtel pour déguster leur incroyable pancake au coulis de chocolat et prendre un café. C&apos;est à ce moment-là qu&apos;un membre du personnel se joint à nous et nous présente tout ce qu&apos;il y a à voir, à faire dans le coin.</p>
            <p>Nous organisons directement avec lui nos deux prochaines journées… <strong>Jour 1, trek à Batad, et Jour 2, visite d&apos;Hapao et de ses Hot springs.</strong> Pour deux personnes et les excursions des deux jours, nous payons <strong>10 800 Php (173 €)</strong>, transport privé et guide compris.</p>
            <h4>⧐ La ville de Banaue</h4>
            <p>Pour cette première demi-journée, nous partons donc vadrouiller dans la ville de <strong>Banaue</strong>. Cette ville construite à flanc de montagne n&apos;a pas un charme fou et nous paraît très pauvre. Nous empruntons le <strong>pont suspendu pour rejoindre le haut du centre-ville</strong>. L&apos;endroit n&apos;est pas vraiment touristique.</p>
            <p>Après avoir exploré le centre, <strong>nous montons vers le village.</strong> Ça grimpe pas mal mais c&apos;est une bonne mise en jambes pour ce qui nous attend le lendemain. Nous passons plusieurs petites maisons et croisons quelques habitants. Ici, c&apos;est un peu la débrouille. Les gens vivent de rien et avec rien. La plupart des maisons que l&apos;on croise en chemin sont constituées de trois murs en parpaings et d&apos;un bout de tôle en guise de toit.</p>
            <p><strong>Après avoir marché une bonne trentaine de minutes</strong> et longé des rizières en terrasse, on arrive à notre objectif, <strong>une petite cascade.</strong> D&apos;ici le panorama est incroyable ! Quelques photos avec des locaux surgis de nulle part, et il est temps de redescendre avant qu&apos;il ne fasse nuit.</p>
            <p>Nous avons observé qu&apos;ici beaucoup de personnes mâchent quelque chose de rouge (à en voir ce qu&apos;ils crachent), qu&apos;ils stockent dans leurs joues. Nous avons appris qu&apos;il s&apos;agit de la « moma », une plante qui donne le sentiment d&apos;être plus fort, avec des effets un peu euphorisants.</p>
            <p>Il n&apos;y a <strong>pas vraiment de restaurant ou d&apos;endroit pour sortir à Banaue,</strong> du coup nous restons à l&apos;hôtel pour dîner. Leurs plats sont très bons et leurs prix très corrects.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1059-1-1024x768.jpg" alt="Enfants Banaue" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2507-768x1024.jpg" alt="Bridge Banaue" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1002-768x1024.jpg" alt="Vue Banaue" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1076-1024x768.jpg" alt="Vue depuis l'hôtel Banaue" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>

            {/* JOUR 2 BATAD */}
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h3>Batad, les rizières en terrasse &amp; Tappiyah Falls</h3>
            </div>
            <p>Après une bonne nuit et un petit-déjeuner copieux, <strong>notre van est là</strong> pour nous emmener à Batad. On est trop excitées, on a trop hâte de découvrir ces paysages.</p>
            <p><strong>Après une petite demi-heure de route, nous arrivons.</strong> Notre guide pour la journée nous attend (obligatoire). C&apos;est en fait un habitant du village.</p>
            <p>Nous avons choisi de venir <strong>découvrir ce village à la journée</strong> mais sachez qu&apos;il y a la <strong>possibilité de faire un trek sur plusieurs jours.</strong> En gros, vous partez de Banaue pour rejoindre Batad à pied, en passant par des sentiers, des forêts, des rizières… De ce qu&apos;on nous en a dit, c&apos;est assez fatiguant mais c&apos;est une belle expérience à vivre.</p>
            <h4>⧐ Batad, la 8ème Merveille du monde</h4>
            <p><strong>Une quinzaine de minutes de marche plus tard, nous arrivons par le haut du village.</strong> C&apos;est la seule voie d&apos;accès. La vue sur les rizières en terrasses et le village en contrebas est juste impressionnante. Un amphithéâtre végétal, avec pour scène le village. Nous sommes là, au milieu des montagnes, devant ce qui est considéré comme la 8ème Merveille du monde, et on comprend pourquoi !</p>
            <p>Nous sommes clairement émues et bouche bée face à la magie et la beauté de ce paysage. À cet instant, on se sent hors du temps. Il se dégage ici une énergie particulière.</p>
            <p>Cela fait seulement 10 ans qu&apos;il y a de l&apos;électricité à Batad, mais <strong>il n&apos;y a toujours aucun réseau téléphonique et internet.</strong></p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1327-768x1024.jpg" alt="Enfants Batad" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1319-768x1024.jpg" alt="Batad Trek" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Nous suivons notre guide à travers les rizières en terrasse. Il nous apprend plein de choses, notamment que toutes <strong>ces terrasses ont été façonnées par la main de l&apos;Homme il y a plus de 2 000 ans</strong> et qu&apos;elles se transmettent de génération en génération.</p>
            <p>Le riz, qui est cultivé ici par les familles, est seulement pour leur consommation. Ils n&apos;en produisent pas suffisamment pour le commercialiser. Alors que dans le reste du pays le riz est cultivé et récolté 2 fois par an, ici à Batad, c&apos;est seulement une fois dans l&apos;année, soit en février.</p>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À ne pas manquer</strong><p>Le meilleur moment pour venir voir les rizières en terrasse à Batad est au mois de mai. C&apos;est juste avant la récolte, quand tout est bien vert.</p></div>
            </div>
            <p>On se pose la question quand même… De quoi vivent les habitants de Batad ? Du tourisme of course !</p>
            <p>Notre guide est un jeune homme du village. En même temps, qui de mieux placé pour nous faire découvrir cet endroit ? Il connaît les lieux comme sa poche. Certains habitants du village accueillent les gens de passage pour la nuit, d&apos;autres tiennent des restaurants. Les femmes vendent des objets en bois sculpté et des pochettes cousues main. <strong>Pendant notre visite, nous avons donc acheté des petits souvenirs pour contribuer à l&apos;économie du village.</strong></p>
            
            <p>Cependant, on nous explique que l&apos;exode rural est un danger qui menace ce magnifique paysage. Si les jeunes quittent le village, qui va prendre le relai pour entretenir les rizières et les faire perdurer ? Vivre ici, coupé du monde, n&apos;emballe pas tous les jeunes de la région. Une dame nous explique qu&apos;à l&apos;âge de 8 ans elle aidait ses parents et travaillait tous les jours dans les cultures. Aujourd&apos;hui, elle a des enfants qui ne veulent pas apprendre ce métier et l&apos;aider dans ces tâches : « ils préfèrent regarder des vidéos sur Tik-Tok ! ».</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_0380-1024x768.jpg" alt="Merveille du monde Batad" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1115-768x1024.jpg" alt="Batad vu du ciel" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1287-1024x768.jpeg" alt="Rice terrace Batad" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Nous continuons notre balade en mode funambule sur des murets d&apos;une vingtaine de centimètres de large, pas plus. Absorbées par le paysage, on a failli finir dans la boue à plusieurs reprises ! Et oui, en plus d&apos;être étroits, ils sont glissants par endroits. <strong>Mieux vaut ne pas avoir le vertige</strong> non plus… On se retrouve parfois avec la rizière d&apos;un côté (avec la boue et plein d&apos;escargots, beurk !), et le vide de 2 mètres de l&apos;autre côté.</p>
            <p>Nous traversons les rizières et empruntons des « escaliers » qui relient des terrasses entre elles. Là aussi <strong>c&apos;est plutôt sportif.</strong> Alors qu&apos;on galère un peu sur certains passages, notre guide est quant à lui très à l&apos;aise en tongs !</p>
            <p><strong>Nous arrivons de l&apos;autre côté de la vallée, au niveau d&apos;une grosse maison en béton et au toit bleu.</strong> Elle semble en construction. De là aussi, la vue sur l&apos;amphithéâtre est saisissante.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1298-1024x768.jpg" alt="Trek Batad" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1294-1-1024x768.jpg" alt="Randonnée Batad" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1217_jpg-768x1024.jpg" alt="Love Batad" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Tappiyah Falls</h4>
            <p>On traverse la maison et de l&apos;autre côté, c&apos;est un tout autre paysage. On se croirait transporté dans la jungle. Il paraît qu&apos;au bout du chemin, <strong>une incroyable cascade</strong> nous attend…</p>
            <p><strong>Mais ça se mérite !</strong> À partir d&apos;ici, <strong>il faut compter une bonne vingtaine de minutes de marche</strong> pour y accéder. De marche oui, mais de marches d&apos;escalier surtout !</p>
            <p>En effet, pour accéder à cette cascade, c&apos;est <strong>plus de 700 marches étroites, bancales et glissantes à descendre</strong> (qu&apos;il faudra bien évidemment remonter !). Si les escaliers du village sont par endroits un peu sportifs, celui-là nous a littéralement tétanisé les cuisses !</p>
            <p>Après l&apos;effort, le réconfort. Arrivées au niveau de la cascade, notre guide nous laisse. Il nous dit de prendre notre temps, qu&apos;il nous attend plus loin. Ni une ni deux, on enlève les chaussures pour traverser et rejoindre la zone de cailloux face à la cascade. Bon, elle est super fraîche (14 degrés) mais ça fait du bien aux jambes.</p>
            <p>Nous passons un moment à contempler <strong>cette spectaculaire chute de 45 mètres de haut.</strong> Le vacarme assourdissant des trombes d&apos;eaux est impressionnant. Quelques courageux se baignent. Plusieurs cairns se dressent devant la cascade… Du coup, on n&apos;a pas pu s&apos;empêcher de mettre notre petite pierre à l&apos;édifice !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1238_jpg-768x1024.jpg" alt="Tappiyah Falls Batad" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1257-768x1024.jpg" alt="Tappiyah Falls Batad" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Nous profitons pleinement de ce moment avant de retrouver notre guide pour rebrousser chemin. C&apos;est parti pour remonter les <strong>700 marches, et la pente est assez raide !</strong> Ce sont les mollets qui en prennent un coup… Mais franchement, aucun regret. Nous sommes tellement heureuses de l&apos;avoir fait. <strong>« I survived Batad ! »,</strong> comme on dit ici.</p>
            <p>Il faut encore retraverser les rizières en terrasse et grimper quelques escaliers pour rejoindre le restaurant où nous allons manger dans le village.</p>
            <p><strong>Notre guide nous a réservé une table dans un petit restaurant</strong> qui ne paye pas de mine, mais avec une vue panoramique incroyable ! Cet endroit restera gravé à jamais dans nos mémoires. On scrute ce paysage comme pour ne pas en rater une miette. Et pour couronner le tout, on nous sert l&apos;un des meilleurs poulet curry qu&apos;on ait mangé aux Philippines !</p>
            
            <p>Il est temps pour nous de quitter cette merveille du monde et de retrouver notre chauffeur. Notre guide nous accompagne pour rejoindre la route. Le retour n&apos;est pas très long, mais ça monte encore et encore ! D&apos;autant qu&apos;après la pause déjeuner, on a un peu les jambes coupées.</p>
            <p><strong>Sur le chemin du retour,</strong> notre chauffeur nous arrête au bord de la route, au niveau d&apos;un <strong>point de vue qui surplombe un petit village appelé Bangaan Village.</strong> Cet endroit est également très joli… Il nous fait penser à Batad, mais en plus petit et moins impressionnant.</p>
            <p>Retour à l&apos;hôtel, fin de journée tranquille pour nous. Au programme, repos, apéro, repas et dodo. Il faut être en forme pour le lendemain. Il est prévu qu&apos;on découvre un autre spot très sympa de la région !</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1329-1024x768.jpg" alt="Rizières en terrasses Bangaan Village" className="article-img-full" loading="lazy" />

            {/* JOUR 3 HAPAO */}
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 3</span>
              <h3>Le village d&apos;Hapao, ses rizières &amp; les Hot springs</h3>
            </div>
            <h4>⧐ Hapao &amp; ses rizières</h4>
            <p>Nous avons prévu aujourd&apos;hui de découvrir le village d&apos;<strong>Hapao qui se situe à environ 45 minutes en van de notre hôtel.</strong> Après avoir avalé de merveilleux pancakes au chocolat avec un petit café, c&apos;est partiiii pour de nouvelles aventures ! On ne vous le cache pas, ça tire un peu dans les jambes à cause du trek de la veille, mais rien ne nous empêchera de profiter au maximum de chaque moment.</p>
            <p>En route pour Hapao, notre chauffeur nous arrête à différents points de vue. On en prend plein les yeux, les paysages sont extraordinaires !</p>
            <p>Arrivées sur place, nous rencontrons <strong>notre guide qui est en fait une femme du village.</strong></p>
            <p>Elle nous demande si nous souhaitons faire la version courte ou la version longue de la balade. <strong>On choisit la version longue,</strong> en se disant que c&apos;est toujours très intéressant de partager des moments pareils avec les locaux. Nous ne regrettons pas notre choix. Nous la suivons à travers les rizières en terrasse et les escaliers jusqu&apos;à son village. Elle est très contente de nous montrer là où elle vit avec sa famille et comment ils vivent.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1392-1-1024x768.jpg" alt="Rice terrace Hapao Batad" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1417-1024x768.jpg" alt="Culture riz Batad" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>À la différence de Batad, ils produisent ici <strong>différents types de riz : le riz blanc organique (bio), le riz rouge et le riz complet.</strong> Notre guide nous explique les différents procédés pour les faire pousser. Une bonne partie de ce qu&apos;ils récoltent est pour la commercialisation. On vous promet que depuis ce voyage, on ne voit plus les choses de la même façon quand on mange du riz !</p>
            <p>À Hapao, les locaux cultivent également du café, du poivre, des tomates et des courgettes. En tout cas, ce village est très joli et les couleurs sont incroyables. Contrairement à Batad où ce n&apos;était pas vraiment la meilleure période, ici toutes les terrasses sont déjà bien vertes.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1425-1024x768.jpg" alt="Rice terrace Batad" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1516-768x1024.jpg" alt="Rice Terrace Hapao Batad" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Les Hot springs d&apos;Hapao</h4>
            <p>Direction maintenant les <strong>Hot springs qui se trouvent derrière le village. La rivière à 15 degrés</strong> d&apos;un côté, et de l&apos;autre, <strong>un bassin naturel avec une eau à 35 degrés…</strong> Vous avez le choix ! Il y a pas mal de jeunes Philippins sur place. Ils s&apos;amusent à passer du bassin chaud à la rivière… Choc thermique garanti !</p>
            
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Si vous portez des bijoux en « toc », enlevez-les avant d&apos;entrer dans les Hot springs. Ils vont noircir au contact de la source d&apos;eau chaude et vous ne pourrez plus les récupérer. Pour les bijoux en or et argent, ils noircissent mais se nettoient.</p></div>
            </div>
            <p>Une légère odeur de soufre se dégage de cet endroit. N&apos;oublions pas que les Philippines sont sur des terres volcaniques. En sortant de l&apos;eau, nous avons sur la peau comme une pellicule grasse, et on sent un peu l&apos;œuf pourri ! Heureusement, il y a des douches sur place pour se rincer.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1470-769x1024.jpg" alt="Hot Springs Hapao Batad" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2477-1024x768.jpg" alt="Sources eau chaude Hapao Batad" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Après ce moment de détente, il est temps de faire demi-tour car nous avons notre bus pour Manille en fin d&apos;après-midi. Pour le retour, nous empruntons un autre chemin, bien plus court mais tout aussi joli.</p>
            
            
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Si vous venez visiter le village d&apos;Hapao, prévoyez votre pique-nique. Il n&apos;y a rien sur place pour vous restaurer mis à part des gâteaux qu&apos;on trouve dans la petite épicerie avant d&apos;entrer dans le village.</p></div>
            </div>
            
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1509-1-768x1024.jpg" alt="Hapao Batad Banaue" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1528-768x1024.jpg" alt="Hapao View Batad" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1540_jpg-1-768x1024.jpg" alt="Enfant Hapao Batad" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Retour en bus à Manille</h4>
            <p>Nous retournons à l&apos;hôtel en van. Nous récupérons nos bagages et grignotons avant de rejoindre la gare routière. C&apos;est ainsi que s&apos;achève cette parenthèse magique dans cet endroit aux paysages incroyables.</p>
            <p><strong>17 h 30, nous reprenons le bus direction Manille.</strong></p>
            <p>La clim, toujours la clim ! Nous avions anticipé et pris avec nous tout ce que nous avions de plus chaud à se mettre sur le dos pour le trajet.</p>
            <p><strong>Arrivée à Manille prévue vers 3 h du matin…</strong> L&apos;horaire est un peu pourri mais pas le choix.</p>
            <p>Un peu comme à l&apos;aller, <strong>le trajet nous semble interminable.</strong> Mais à la différence, nous sommes parties de jour. Notre chauffeur de bus, alias « Schumi », prend beaucoup de risques au niveau de sa conduite sur les routes de montagne. Il roule vite, même sans visibilité dans les virages !</p>
            <p><strong>Ce qui est fou, c&apos;est que même la nuit, il y a beaucoup de circulation.</strong> Arrivées vers 2 h du matin aux abords de Manille, nous nous retrouvons dans des bouchons !</p>
            <p>Nous avons un vol à 10 h pour une autre destination. Histoire de dormir un peu, nous prenons une chambre au <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJXR1qtLHOlzMRaJoK2hH_YLU" target="_blank" className="article-link article-resto-link-desktop">Siayan Travellers Inn</a><a href="https://maps.app.goo.gl/u2HDMC729tBkVkEC9" target="_blank" className="article-link article-resto-link-mobile">Siayan Travellers Inn</a></strong>, non loin de l&apos;aéroport et de notre terminal.</p>
          </section>

          <section id="bohol" className="article-section">
            <div className="article-day-header">
              <h2>Bohol &amp; ses petits plus uniques</h2>
            </div>
            <p>Bohol est une province des Philippines située dans la <strong>région des Visayas Centrales.</strong> Cette île est très grande en comparaison à la dernière sur laquelle on a posé le pied. 71 km² de superficie à Coron, contre près de 5 000 km² à Bohol. Elle est considérée comme la <strong>10ème plus grande île de l&apos;archipel des Philippines.</strong></p>
            <p>Cette île paradisiaque abrite des paysages splendides, une végétation luxuriante, des plages de rêves, des spots de plongée incroyables et quelques plus que l&apos;on ne peut découvrir qu&apos;ici. Impossible pour nous de tout voir car nous ne passons que 2 nuits sur cette île. Nous avons souhaité nous rendre à Bohol pour ces quelques plus qui rendent cette île unique et magique…</p>
            <h4>⧐ Comment se rendre à Bohol ?</h4>
            <p><strong>Si comme nous vous venez de Manille, alors le plus simple est de prendre l&apos;avion.</strong> Il faut prévoir 1 h 30 de vol pour parcourir les 900 km qui séparent ces 2 villes. Pour vous donner une idée, si vous aviez envie de faire ce trajet en voiture et en ferry, il faut compter 25 h selon Google Maps.</p>
            <p><strong>Si vous venez de Cebu (Cebu City et Talood), de Negros (Dumaguete) ou Siquijor, vous pouvez prendre le ferry.</strong></p>

            {/* JOUR 1 BOHOL */}
            <div className="article-day-header">
              <span className="article-day-badge">Jour 1</span>
              <h3>Bohol, la rivière Loboc &amp; ses Lucioles</h3>
            </div>
            <p>Il est environ 12 h 30 quand nous arrivons à l&apos;aéroport de Bohol. Nous avions anticipé et organisé le transfert avec notre hôtel. Nous avons payé <strong>1500 Php (25 €)</strong> pour <strong>aller de la presqu&apos;île de Panglao,</strong> où se trouve l&apos;aéroport, <strong>à notre hébergement qui se situe au bord de la Loboc River.</strong></p>
            <p><strong>Il faut compter 1 h de route pour ce trajet.</strong> Vous avez également la possibilité de prendre une jeepney, les bus de ville ou les tricycles. Au vu de notre arrivée sous la pluie, on a bien fait de prévoir le taxi, certes plus cher, mais plus confort et plus rapide !</p>
            <p>Sur le trajet direction l&apos;hôtel, nous sommes surprises par <strong>le paysage intensément vert.</strong> Nous apprendrons par la suite que c&apos;est principalement parce qu&apos;il pleut très souvent ici. On a de la chance, la pluie s&apos;arrête rapidement et laisse place à un beau soleil. On a trop hâte de découvrir l&apos;hébergement que nous avons booké !</p>
            <p>Nous avons choisi de séjourner à l&apos;hôtel <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJ_xBza6pFqjMR-EU34vg8NwI" target="_blank" className="article-link article-resto-link-desktop">Water to Forest Ecolodge</a><a href="https://maps.app.goo.gl/nUkT7gXtNLjbSgCq5" target="_blank" className="article-link article-resto-link-mobile">Water to Forest Ecolodge</a></strong>. Pour y accéder, sur les derniers kilomètres, nous empruntons un chemin de terre qui longe la rivière. Bon là, avec la pluie qui est tombée, on est plutôt sur un chemin de boue !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_0393-1024x768.jpg" alt="Water to Forest Ecolodge Bohol" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1626-768x1024.jpg" alt="Water to Forest Ecolodge Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p><strong>Arrivées à l&apos;hôtel, nous sommes directement en immersion dans la jungle.</strong> Un véritable havre de paix entre la maison et la cabane… Au rez-de-chaussée, un petit coin salon, une petite table basse et 2 hamacs. Au top pour l&apos;apéro ! Sur le côté, le coin salle de bain avec l&apos;essentiel : un lavabo, un miroir, et derrière les rideaux, une douche à l&apos;air libre. On accède à l&apos;étage par une échelle en bambou. L&apos;espace nuit est tout ouvert sur la jungle. Tout ouvert parce qu&apos;il n&apos;y a ni mur, ni fenêtre, juste des voilages en guise de rideaux.</p>
            <p>Sous le ventilateur, au milieu de la pièce, un grand lit trône protégé par une moustiquaire, simple mais efficace. <strong>Nous sommes carrément conquises par cet endroit !</strong> Le lit nous appelle… Fatiguées du voyage, on aurait presque envie d&apos;aller se coucher maintenant ! Mais l&apos;envie de partir à la découverte du coin est plus forte… Alors on grignote un morceau au restaurant de l&apos;hôtel qui propose de délicieux tapas, on prend une petite douche froide mais revigorante avec vue sur la jungle, et c&apos;est reparti !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1914-1-768x1024.jpg" alt="Room Water to Forest Ecolodge Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1930_jpg-768x1024.jpg" alt="Water to Forest Ecolodge Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Sortie lucioles sur la rivière Loboc</h4>
            <p>L&apos;île de Bohol renferme de multiples secrets, dont l&apos;un se révèle seulement une fois la nuit tombée.</p>
            <p>Ce soir nous allons à la <strong>rencontre des lucioles sur la Loboc River. La meilleure période pour les observer est entre décembre et janvier,</strong> la moins bonne entre juin et août.</p>
            <p>Vous avez <strong>plusieurs possibilités pour aller voir ces petits vers luisants : en bateau, en canoë / paddle, par un organisme d&apos;excursion ou via un hôtel.</strong> Nous avons choisi de le faire via l&apos;hôtel <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJL_kS7VlEqjMReSFllcg5DQg" target="_blank" className="article-link article-resto-link-desktop">Loboc River Resort</a><a href="https://maps.app.goo.gl/GXfKpQJsQMTgpnbF6" target="_blank" className="article-link article-resto-link-mobile">Loboc River Resort</a></strong>, un grand complexe hôtelier qui se situe un peu plus haut le long de la rivière. Nous prenons un tuk-tuk et y arrivons seulement en 5 minutes. La grande terrasse du restaurant de cet hôtel offre une vue imprenable sur la rivière.</p>
            <p><strong>Le Loboc River Resort a son propre bateau et propose des balades nocturnes.</strong> Si vous êtes curieux de savoir pourquoi on ne l&apos;a pas fait en canoë ou en paddle, c&apos;est tout simplement parce que Laurie est souvent en mode Pierre Richard (lol), et qu&apos;on n&apos;avait aucune envie de tomber dans la rivière de nuit ! Il faut préciser qu&apos;habituellement la couleur de cette rivière est entre le vert émeraude et le bleu turquoise. Là, avec la pluie qui est tombée ces derniers jours, elle est clairement marron.</p>
            <p>Pour <strong>500 Php (8 €)</strong> par personne, assises au sec sur le bateau, nous avons passé un moment plutôt sympathique, même magique !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_1661-768x1024.jpg" alt="Lucioles rivière Loboc Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_1674-768x1024.jpg" alt="Lucioles Loboc River Resort Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p><strong>Il est 18 h 30, nous partons en bateau.</strong> Nous sommes une petite dizaine à embarquer. Nous remontons la Loboc river. Au bout de 5 minutes seulement de traversée, nous les apercevons… Au beau milieu de la nuit, se dresse devant nous un premier arbre scintillant, rempli de lucioles. C&apos;est féerique, on se croirait dans un Disney ! Alors qu&apos;on ne voit absolument rien dans ce noir complet, les lucioles illuminent les arbres telles des guirlandes qui clignotent en rythme. Une impression de Noël dans la jungle, c&apos;est plutôt fou. On a bien essayé d&apos;immortaliser le moment, mais malheureusement les photos ne rendent pas grand chose.</p>
            <p>Ce qui est particulier, c&apos;est qu&apos;elles se trouvent toutes sur les mêmes arbres et à des endroits bien précis. <strong>Notre bateau nous amène donc sur 4 spots différents.</strong></p>
            <p><strong>Retour au ponton après 45 minutes de balade.</strong> Timing parfait pour se laisser tenter par un petit cocktail au bar de l&apos;hôtel. On enchaîne sur un dîner à la bougie avec vue sur la rivière. Après cette belle première journée, plutôt fatigante d&apos;ailleurs, retour à l&apos;hôtel en tuk-tuk pour un dodo bercé par les bruits de la jungle.</p>
            <p>Pour info, sachez que vous avez la <strong>possibilité de faire une petite croisière sur la Loboc River à bord de bateaux restaurants où se produisent des chanteurs et des groupes de musique de l&apos;île.</strong> C&apos;est une attraction plutôt populaire mais nous avons choisi de ne pas la faire pour privilégier d&apos;autres visites. On se serait bien laissées tenter si on avait eu plus de temps…</p>

            {/* JOUR 2 BOHOL */}
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h3>Les Chocolate Hills, les Tarsiers &amp; l&apos;Église de corail (Baclayon)</h3>
            </div>
            <p>Objectif de la journée, aller à la découverte de ces petits plus qu&apos;abritent l&apos;île de Bohol… <strong>On a prévu une boucle d&apos;environ 120 km, soit plus ou moins 3 h 30 de route.</strong></p>
            <p>Comme à notre habitude, <strong>nous louons un scooter pour 2 jours.</strong> Pour nous, il n&apos;y a pas mieux pour vadrouiller. En 2 roues, on a un sentiment de liberté, d&apos;autant qu&apos;il n&apos;y a pas de contrainte d&apos;horaire, et qu&apos;on peut s&apos;arrêter où on veut et quand on veut. Dans ces moments, on aime se perdre, c&apos;est la meilleure façon pour découvrir des paysages, rencontrer des locaux, etc.</p>
            <p><strong>Nous louons donc le scooter directement à l&apos;hôtel pour</strong> <strong>400 Php (6 €)/jour</strong>. Et c&apos;est parti pour une journée road trip à la découverte de l&apos;île de Bohol !</p>
            <p>Nous traversons de jolis villages, les gens se mettent au bord de la route pour nous saluer. Ils semblent trop contents de nous voir passer. Il faut dire que cette île est une destination bien moins touristique que Palawan par exemple.</p>
            <p>Premier arrêt au niveau de la <strong>forêt Mahogany appelée aussi Bilar Man-Made Forest.</strong> Bon, cet endroit n&apos;a rien de naturel puisque comme son nom l&apos;indique, c&apos;est une forêt qui a été créée par l&apos;homme. Cependant, c&apos;est plutôt sympa à voir. La route passe littéralement à travers cette <strong>forêt d&apos;acajous.</strong> Mieux vaut rouler doucement dans le secteur parce qu&apos;il y a toujours des personnes qui se prennent en photo au milieu de la route.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1830-1024x768.jpg" alt="Scooter Bohol" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1706-768x1024.jpg" alt="Bilar Man-Made Forest Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Les Chocolate Hills</h4>
            <p>Nous continuons notre road trip vers le <strong>Nord de l&apos;île,</strong> direction le deuxième spot. Non loin de la ville de Carmen, c&apos;est l&apos;endroit le plus visité de Bohol… Les Chocolate Hills ou les Collines de chocolat portent bien leur nom.</p>
            <p>Enfin, tout dépend en réalité de la période où on les voit. <strong>Durant la période la plus sèche (de février à juillet), elles sont effectivement de couleur brune, sinon elles sont vertes.</strong></p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_4782-1024x768.jpg" alt="Chocolate Hills Bohol" className="article-img-full" loading="lazy" />
            <p>Arrivées au niveau du complexe, il y a un <strong>grand parking pour stationner</strong> sans difficulté. L&apos;entrée est de <strong>50 Php (0,80 €)</strong> par personne. Une fois réglée, <strong>nous montons dans un van qui nous emmène sur les hauteurs.</strong></p>
            <p><strong>Selon l&apos;heure à laquelle on s&apos;y rend, il peut y avoir beaucoup de monde,</strong> mais c&apos;est quand même à voir ! L&apos;endroit est clairement pensé pour accueillir les touristes. <strong>Sur place, vous trouverez une boutique de souvenirs et un grand restaurant.</strong> Nous empruntons l&apos;escalier pour monter jusqu&apos;au point de vue. Il y a un panneau qui explique l&apos;histoire de ces mystérieuses collines.</p>
            <p>En bref, <strong>leur formation date d&apos;il y a environ 2 millions d&apos;années.</strong> Ces collines sont composées de sable et de calcaire provenant de l&apos;accumulation de couches successives de corail et de coquillages au fond de la mer. Ce sont les mouvements des plaques tectoniques qui ont sorti ce paysage de l&apos;eau. Ensuite, c&apos;est l&apos;érosion et la dissolution dues à la pluie qui ont terminé de façonner tout cela. Avec cette formation géologique peu commune, ces collines rendent le paysage vraiment spécial !</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1744-768x1024.jpg" alt="Chocolate Hills Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1807-1024x768.jpg" alt="I love Chocolate Hills Bohol" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_4780-768x1024.jpg" alt="Chocolate Hills Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Le saviez-vous ?</strong><p>Tout autour de vous, étendues sur 50 km², se dressent près de 1 780 collines, mesurant entre 30 et 60 mètres de hauteur. À noter : un panneau interdit de faire voler son drone à partir de 8 h du matin.</p></div>
            </div>
            <p>Sachez que vous avez également la <strong>possibilité de louer un quad ou un buggy pour vous balader sur un circuit entre les collines.</strong></p>
            <p>Nous reprenons la route et nous nous arrêtons un peu plus loin dans un petit resto appelé <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJJxwddCs_qjMRP6GnI_Fic6Y" target="_blank" className="article-link article-resto-link-desktop">Basak Bistro Batuan</a><a href="https://maps.app.goo.gl/qQdLr8XUFfhbvsAe9" target="_blank" className="article-link article-resto-link-mobile">Basak Bistro Batuan</a></strong>. L&apos;endroit n&apos;est pas vraiment touristique mais c&apos;est aussi ça que l&apos;on recherche. En tout cas, on a super bien mangé. C&apos;est là-bas qu&apos;on a découvert que roter après avoir mangé n&apos;est pas du tout mal vu, bien au contraire… Et c&apos;est plutôt surprenant la première fois, surtout quand ce sont nos voisins de table qui s&apos;en donnent à cœur joie !</p>
            <h4>⧐ Les stars de Bohol : les tarsiers</h4>
            <p>C&apos;est reparti, direction le troisième spot. On tenait absolument à les voir… <strong>Ce sont les plus petits singes au monde. Ils mesurent en moyenne 15 cm et pèsent moins de 100 g.</strong> Ce sont les tarsiers !</p>
            <p>Vous avez deux possibilités pour observer ces petits primates : au <strong>Centre de conservation des tarsiers ou bien au Sanctuaire de Corella.</strong></p>
            <p>Après quelques recherches, sans hésitation, <strong>notre choix s&apos;est porté sur le sanctuaire de Corella.</strong> C&apos;est une fondation officielle qui œuvre pour la protection du tarsier où les petits primates sont en quasi-liberté. Le tarsier est un animal très anxieux et il peut facilement se retrouver en détresse s&apos;il est enfermé.</p>
            <p>Pour <strong>50 Php (0,80 €)</strong> par personne et un guide rien que pour nous, nous accédons à la zone d&apos;observation. <strong>Ici, il n&apos;y a que 6 tarsiers.</strong> Le guide nous aide à les trouver dans cette petite jungle, et nous apporte quelques informations pour davantage les connaître.</p>
            <p>Ce petit animal chasse la nuit et dort le jour. De ce fait, dans un silence complet, il faut trouver les branches sur lesquelles ils sont accrochés pour la sieste.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Le tarsier est extrêmement sensible au bruit et à la lumière. Un pic de stress peut lui être fatal. Pas de flash, silence complet — c&apos;est la règle absolue du sanctuaire.</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1860_jpg-1024x768.jpg" alt="Tarsier Sanctuary Bohol" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1854-768x1024.jpg" alt="Tarsier Sanctuary Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Ils sont tellement mignons ! Des petites boules de poils avec de gros yeux globuleux. On dirait des petits Guizmo (le gentil Gremlins). On peut donc s&apos;en approcher sans faire de bruit, mais on ne peut bien sûr pas les toucher. Comme on n&apos;a aucune envie d&apos;être responsable d&apos;un suicide de tarsier, on respecte les règles !</p>
            <p>On ne croirait pas comme ça, à le voir en totale inertie sur sa branche, mais ce petit singe de 15 cm est capable de faire des bonds de 4 mètres ! Autres caractéristiques plutôt particulières, proportionnellement, les yeux du tarsier sont 150 fois plus grands que ceux de l&apos;humain. Il est également capable de tourner sa tête à presque 360°.</p>
            <p><strong>Notre visite a duré une bonne vingtaine de minutes.</strong> À la sortie du sanctuaire, passage obligé par la boutique de souvenirs et par un petit musée où sont exposés des squelettes de tarsiers (on préfère largement les voir vivants !).</p>
            <p><strong>On reprend la route vers le Sud</strong> et on finit la boucle en passant par Baclayon church.</p>
            <h4>⧐ L&apos;église de corail de Baclayon</h4>
            <p>Bon, on n&apos;a pas spécialement pour habitude de visiter les églises durant nos voyages, mais là, on était plutôt intriguées de visiter celle-ci.</p>
            <p>L&apos;église de Baclayon est considérée comme la <strong>plus ancienne église catholique des Philippines.</strong> La construction de cet imposant édifice a duré 10 ans. Les travaux ont été finis en 1727.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_1866_jpg-768x1024.jpg" alt="Baclayon Church Église de corail Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1875-768x1024.jpg" alt="Eglise Baclayon Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Sa particularité est qu&apos;<strong>elle est constituée de corail et de blancs d&apos;œufs.</strong> Oui oui, du blanc d&apos;œuf ! En effet, des blocs de corail ont été récupérés dans la mer juste en face, puis ont été taillés, avant d&apos;être soulevés et déplacés jusqu&apos;au chantier à l&apos;aide de bambous. Et le ciment utilisé pour coller les blocs entre eux n&apos;est autre que du blanc d&apos;œuf… <strong>Ils utiliseront plus d&apos;un million d&apos;œufs</strong> pour la construction de l&apos;église !</p>
            <p>D&apos;importants travaux de rénovation et de restauration ont été effectués suite au séisme de 2013 qui a lourdement endommagé la bâtisse. Elle est aujourd&apos;hui réouverte au public.</p>
            <p><strong>L&apos;entrée se fait par le côté.</strong> Comme on a débarqué là-bas en short et en débardeur, <strong>la dame de l&apos;accueil nous couvre les jambes et les bras avec des foulards avant de pénétrer dans les lieux.</strong></p>
            <p>Nous payons <strong>150 Php (2,40 €)</strong> par personne pour pouvoir accéder à l&apos;église et au petit musée attenant. Ce dernier a pris place dans ce qui était à l&apos;époque le couvent. Bien que ce musée ne semble pas très bien entretenu, on y trouve de nombreuses reliques et autres artefacts religieux datant du 16ème siècle.</p>
            <p>L&apos;église est quant à elle plutôt jolie. Elle possède de belles fresques au plafond. L&apos;autel est relativement imposant.</p>
            <p>Le tour rapidement effectué, nous nous dirigeons vers la sortie pour rendre les foulards qui nous avaient gracieusement été prêtés. Une fois dehors, les portes principales de l&apos;église s&apos;ouvrent… <strong>C&apos;est l&apos;heure de la messe, du coup, c&apos;est gratuit</strong> (sauf pour le musée) ! Donc petit conseil, <strong>renseignez-vous sur l&apos;heure des messes pour ne pas avoir à payer l&apos;entrée.</strong></p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_1897-768x1024.jpg" alt="Coconuts Bohol" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_1891-1024x768.jpg" alt="Loboc River Bohol" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Nous terminons la boucle de plus de 120 km en rejoignant notre hôtel. Pour la première fois des vacances, on décide de se poser un peu. Au programme, soirée chill, cocktails et bon dîner. On se sent tellement bien dans cet Écolodge… On prend le temps de prendre le temps !</p>
            <p>Nous repartons déjà demain et devrons quitter l&apos;hôtel à 13 h pour nous rendre au port de Tagbilaran. Notre passage à Bohol était court mais on en a pris plein les yeux ! Nous profitons de cette dernière nuit au beau milieu de la jungle.</p>

            {/* JOUR 3 BOHOL */}
            <div className="article-day-header">
              <span className="article-day-badge">Jour 3</span>
              <h3>Au revoir Bohol, bonjour Siquijor !</h3>
            </div>
            <p>Dernier réveil dans ce cadre magique, un peu hors du temps. Bercées par le bruit de la jungle, on a tellement bien dormi !</p>
            <p>On profite de cet endroit enchanté jusqu&apos;au dernier moment, puis <strong>direction le port de Tagbilaran qui se situe à plus ou moins 45 minutes de route.</strong></p>
          </section>

          <section id="siquijor" className="article-section">
            <div className="article-day-header">
              <h2>Siquijor — L&apos;île mystique aux magnifiques cascades</h2>
            </div>
            <h4>⧐ Siquijor, « The Magic Island »</h4>
            <p>Siquijor est une île faisant partie de la <strong>région des Visayas centrales.</strong> Mais savez-vous pourquoi les Philippins ne se rendent pas à Siquijor ? À cause des sorcières !</p>
            <p>Au programme, de belles plages, une multitude de cascades, mais surtout une atmosphère vraiment spéciale. Siquijor est un endroit où l&apos;on se sent bien. C&apos;est une île qui est encore bien préservée du tourisme. <strong>Elle est aussi très peu visitée par les locaux.</strong></p>
            <p>Siquijor est aussi appelée <strong>« The Magic Island ». Cela vient du fait qu&apos;il y a depuis toujours de fortes croyances sur l&apos;existence de sorcières sur l&apos;île. </strong>Pour les habitants de Siquijor, leur présence ne fait aucun doute. Pour le reste des Philippins, cette croyance leur fait suffisamment peur pour éviter de passer leurs vacances sur cette île.</p>
            <p>Selon les habitants de l&apos;île, les sorcières vivent parmi eux. Des locaux qu&apos;on a rencontré nous ont confié que certains peuvent les voir, d&apos;autres non, et qu&apos;il y a des gentilles sorcières, d&apos;autres maléfiques.</p>
            <p>Sur l&apos;île, il y a également <strong>beaucoup de guérisseurs qui pratiquent des rites vaudou,</strong> notamment pour guérir les habitants d&apos;une maladie ou malédiction. Une fois par an, <strong>en mars généralement, ils organisent le Healing Festival</strong> où ils proposent leurs services de guérison.</p>
            <div className="article-day-header">
              <span className="article-day-badge">Jour 1</span>
              <h3>Arrivée à Siquijor après 2 h de ferry</h3>
            </div>
            <p>Il fait déjà nuit quand nous arrivons. Nous récupérons nos sacs (assez rapidement d&apos;ailleurs) et c&apos;est partiii ! <strong>Welcome to Siquijor !</strong> On avait tellement hâte de découvrir cette île mystérieuse. Bon, pour ne pas changer les bonnes habitudes, on arrive sous la pluie. Jusqu&apos;ici, rien d&apos;anormal !</p>
            <p>Nous prenons un <strong>tuk-tuk directement à la sortie du quai,</strong> direction l&apos;hôtel <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJ4T6VmYw-qzMRnHRKd_-Meik" target="_blank" className="article-link article-resto-link-desktop">Charisma beach</a><a href="https://maps.app.goo.gl/nnUV8b4zSv8wjZb18" target="_blank" className="article-link article-resto-link-mobile">Charisma beach</a></strong>. <strong>Tous les tuk-tuks sont aux mêmes tarifs pour les mêmes trajets. </strong></p>
            <p>Arrivées à l&apos;hôtel, on découvre notre chambre, ou plutôt notre petite maison, vue sur piscine, et à quelques pas de la plage. On est au top !</p>
            <p>Le soir, on se la joue tranquille et on profite de cet endroit agréable malgré la pluie qui tombe. C&apos;est une bonne occasion pour découvrir la carte du restaurant de l&apos;hôtel.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1955-768x1024.jpg" alt="Port Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1967-1024x768.jpg" alt="Charisma Beach Siquijor" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h3>Journée pluvieuse…</h3>
            </div>
            <p>Premier réveil sur l&apos;île de Siquijor, mais aussi premier déluge aux Philippines. Il a plu toute la nuit, les allées de l&apos;hôtel sont inondées. Et là, c&apos;est un peu le drame... Qu&apos;est-ce qu&apos;on va faire avec ce temps ?</p>
            <p>De grosses pluies sont prévues toute la journée. Ce n&apos;est pas vraiment prudent de louer un scooter et de rouler sous cette pluie torrentielle. D&apos;autant qu&apos;avec ce temps, les spots que nous voulions visiter ne doivent pas être accessibles. C&apos;est tellement frustrant d&apos;être là et de ne rien pouvoir faire ! Nous sommes le 14 février et la météo l&apos;a décidé pour nous… Pas grave, on va rester sous la couette et en profiter pour organiser nos prochaines vadrouilles !</p>
            <p><strong>Dans la journée, on reçoit sur nos téléphones plusieurs messages d&apos;alerte météo. On nous demande de rester à l&apos;abri et de faire attention aux glissements de terrain. </strong>Pas très rassurant tout ça !</p>
            <p>Nous checkons régulièrement le ciel et la météo, mais aucune amélioration en vue. Le temps semble s&apos;être dégradé sur une grande partie des Philippines. Notre prochaine destination prévue dans quelques jours n&apos;est pas épargnée non plus... Va t-on vraiment terminer ce voyage de rêve sous la pluie et ne plus voir le soleil ? C&apos;est totalement déprimant !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1986-768x1024.jpg" alt="Charisma Beach Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1970-768x1024.jpg" alt="Coconuts Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>La journée s&apos;achève et on se demande si on ne devrait pas modifier l&apos;itinéraire de la fin de notre séjour.</p>
            <p>Bref, la nuit porte conseil. Demain sera un autre jour…</p>
            <div className="article-day-header">
              <span className="article-day-badge">Jour 3</span>
              <h3>Après la pluie, le beau temps</h3>
            </div>
            <p>On se réveille d&apos;une bonne et longue nuit de sommeil. Et ce matin, il ne pleut plus ! Bon, ce n&apos;est pas grand soleil non plus, mais ça se tient.</p>
            <p>On a hâte de découvrir cette île. Pour ça, <strong>on s&apos;est organisées un petit circuit entre plages et cascades. </strong>Après la journée de perdue hier, on est motivées pour voir un maximum de spots aujourd&apos;hui.</p>
            <p>P&apos;tit dej&apos; avalé et let&apos;s go ! <strong>Nous louons un scooter à l&apos;hôtel </strong>pour <strong>450 Php (7,30 €)</strong> la journée. L&apos;avantage de le louer directement à l&apos;hôtel est qu&apos;on ne vous impose pas un horaire maximum pour le retour. La seule chose est de rendre le scooter avec le même niveau de carburant que quand vous le prenez. Pour avoir une idée, nous avons payé <strong>200 Php (3,20 €)</strong> <strong>le plein de carburant. </strong></p>
            <h4>⧐ Tubod Beach</h4>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2030-1024x768.jpg" alt="Tubod Beach Siquijor" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2036-1024x768.jpg" alt="Tubod Beach Siquijor" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p><strong>L&apos;accès à cette plage n&apos;est pas vraiment bien indiqué. Nous garons le scooter en contre-bas de la route et empruntons un petit chemin qui descend jusqu&apos;à la plage.</strong></p>
            <p>C&apos;est une jolie plage, mais le principal intérêt ici se trouve sous l&apos;eau. <strong>Sur la gauche, se trouve donc la réserve marine.</strong> Il y aurait tout un tas de divers poissons et coraux à observer. On ne s&apos;est pas jetées à l&apos;eau (frileuses que nous sommes !) mais <strong>il paraît que ça vaut vraiment le coup.</strong></p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>La plage est gratuite. Pour nager dans la zone du sanctuaire marin : 20 Php (0,32 €) par personne. Location de matériel de snorkeling : 50 Php (0,80 €).</p></div>
            </div>
            <h4>⧐ Lugnason Falls</h4>
            <p>Nous reprenons la route direction Lugnason Falls, à 3,5 km. Pour accéder à la cascade, <strong>il suffit de suivre le chemin. Il y a quelques marches à descendre. </strong>Dans l&apos;idée, rien de compliqué, mais avec la pluie qui est tombée, le sol est gorgé d&apos;eau et c&apos;est super glissant. Le site est sympa et en plus il n&apos;y a personne. On découvre une <strong>belle cascade avec un gros débit d&apos;eau et un bassin pour se baigner.</strong></p>
            <p>On ne vous le cache pas, on est quand même un peu déçues. La couleur de l&apos;eau est loin d&apos;être identique à celle des photos Google. En même temps, pas étonnant avec tout ce qui est tombé la veille. L&apos;eau est marron, ce qui donne tout de suite un peu moins envie de s&apos;y baigner.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2039-768x1024.jpg" alt="Lugnason Falls Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2053-768x1024.jpg" alt="Lugnason Falls Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Puis direction Lazy pour le prochain spot. Nous roulons une petite trentaine de minutes.</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Utiliser un scooter est la meilleure solution pour découvrir des endroits encore préservés du tourisme, rencontrer des locaux, traverser des villages, et surtout ressentir un sentiment de liberté totale !</p></div>
            </div>
            <h4>⧐ Lagaan Falls</h4>
            <p>Arrivées à Lagaan falls, un parking nous attend. Nous payons <strong>10 Php (0,16 €)</strong> pour laisser le scooter. Une taxe de <strong>50 Php (0,80 €)</strong> par personne est demandée pour accéder au site.</p>
            <p>On nous propose d&apos;être accompagnées par un guide (payant). <strong>Ce n&apos;est pas obligatoire et surtout pas nécessaire.</strong></p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2074-768x1024.jpg" alt="Lagaan falls Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2081-768x1024.jpg" alt="Lagaan falls Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p><strong>Nous suivons donc le chemin balisé </strong>qui descend jusqu&apos;à la cascade. L&apos;endroit est très sympa. <strong>Il y a plusieurs zones pour se baigner. </strong></p>
            <p>Si comme Laurie, l&apos;envie vous prend de vous jeter à l&apos;eau, vous pouvez le faire à l&apos;aide d&apos;une corde. Vous aurez l&apos;impression d&apos;être Tarzan le temps d&apos;un saut. Les locaux sont là pour vous encourager.</p>
            <h4>⧐ Cambugahay Falls</h4>
            <p>Nous continuons notre circuit pour aller à Cambugahay Falls. En moins de 15 minutes nous y sommes.</p>
            <p>Au vu du nombre de scooters et de tuk-tuks stationnés au bord de la route, on se doute qu&apos;il y a du monde sur place. En même temps, cet endroit est l&apos;un des plus convoités de l&apos;île. Il faut payer une taxe de <strong>20 Php (0,32 €)</strong> par personne pour accéder au site.</p>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À ne pas manquer</strong><p>Prévoyez des chaussures d&apos;eau ! Remontez la rivière sur la gauche pour découvrir les 3 niveaux de la cascade. Au 2ème palier, laissez-vous tenter par l&apos;expérience radeau pour 50 Php (0,80 €).</p></div>
            </div>
            <p>Même s&apos;ils sont un peu sommaires, plusieurs passages sont aménagés pour traverser la rivière. C&apos;est vrai que cet endroit est très beau, mais là aussi, à cause de la pluie, l&apos;eau n&apos;est pas du tout turquoise. On ne va pas se plaindre, on est quand même sur un spot incroyable !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2113-768x1024.jpg" alt="Cambugahay Falls Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2110-768x1024.jpg" alt="Cambugahay Falls Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p><strong>Au 2ème palier, on découvre un bassin</strong> géré par des Philippins, où se trouvent un radeau et des cordes pour se jeter à l&apos;eau.</p>
            <p><strong>C&apos;est en fait une séance photos touristique,</strong> et c&apos;est tout un programme ! On nous fait monter sur le radeau, qui est en réalité attaché à l&apos;avant et à l&apos;arrière par des cordes. Le radeau est tiré par une personne jusqu&apos;à la cascade. Pendant ce temps, on nous mitraille de photos et de vidéos faites avec notre téléphone qu&apos;on a confié avant de monter sur le radeau.</p>
            <p>On découvre par la même occasion <strong>l&apos;effet drone, une spécialité ici !</strong> Les Philippins adorent faire ça. Ils ont une manière de filmer bien à eux. Ils courent, tournent, se baissent, sautent… Et c&apos;est vrai que le résultat est plutôt pas mal !</p>
            <p>Après avoir bien profité de l&apos;endroit, il faut maintenant remonter l&apos;escalier. Arrivées en haut, des vendeurs de bouteilles d&apos;eau fraîche nous attendent. Ça tombe à pic, on était desséchées après cette remontada !</p>
            <h4>⧐ Salagdoong Beach</h4>
            <p>Notre avant dernier spot de la journée est Salagdoong Beach. Une jolie petite plage, une mer magnifique mais <strong>la baignade y est interdite.</strong> On n&apos;a pas vraiment compris pourquoi à vrai dire. Apparemment, pour cause de réhabilitation de la plage, mais pour autant, pas de travaux en vue.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_0409-768x1024.jpg" alt="Salagdoong Beach Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2183-768x1024.jpg" alt="Salagdoong Beach Siquijor Plongeoir" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2172-1-1024x769.jpg" alt="Salagdoong Beach Siquijor" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2193-768x1024.jpg" alt="Salagdoong Beach Siquijor" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Tant pis, on profite quand même du moment et on cherche <strong>un endroit pour manger. On suit le chemin sur la gauche qui longe l&apos;hôtel. </strong>Au bout, le restaurant du <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJiSZVQxQZqzMRwNjg3sFl-Zs" target="_blank" className="article-link article-resto-link-desktop">Jelly Sea Resort</a><a href="https://maps.app.goo.gl/K6pxzqejNBMN2xxz6" target="_blank" className="article-link article-resto-link-mobile">Jelly Sea Resort</a></strong> nous attend... Petites tables, hamacs, on s&apos;y installe pour manger. Tout les plats sont préparés à la minute. Une bonne bière fraîche en apéro et on profite du paysage.</p>
            <p>Une fois le repas englouti, nous retournons sur nos pas pour <strong>visiter la petite presqu&apos;île.</strong> C&apos;est en fait un gros rocher auquel on accède par un escalier. On peut s&apos;y balader. <strong>Il y a plusieurs plateformes et plongeoirs, d&apos;où il est interdit de sauter, qui offrent de beaux points de vue. </strong></p>
            <h4>⧐ Paliton Beach</h4>
            <p>Pour finir cette journée en beauté, nous nous rendons à Paliton Beach. <strong>Coucher de soleil, apéro les pieds dans le sable, le paradis ! Sur la plage, il y a des cabanes où on peut acheter des cocktails et des bières.</strong> Ici l&apos;ambiance est plutôt festive et décontractée. Il y a beaucoup de monde, locaux et touristes. Le sunset est fou, la lumière est incroyable. Il y a quelques nuages mais cela rend le coucher de soleil encore plus magique.</p>
            <p>Voilà voilà, encore une journée qui se termine. On a plein de belles images dans la tête. Cette nuit sera malheureusement la dernière que nous passerons sur cette île magnifique qui regorge de spots incroyables.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3207_jpg-1-1024x768.jpg" alt="Sunset Paliton Beach Siquijor" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3205-1024x768.jpg" alt="Sunset Paliton Beach Siquijor" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-day-header">
              <span className="article-day-badge">Jour 4</span>
              <h3>Nouvelle journée, nouvelles aventures !</h3>
            </div>
            <p>Réveil, p&apos;tit dej&apos;, préparation des affaires, check-out et go to the pier. Pour nous y rendre, <strong>nous prenons un tuk-tuk à la sortie de l&apos;hôtel.</strong></p>
            <p><strong>Ce soir, nous dormirons à Cebu et nous avons 2 bateaux à prendre pour nous y rendre. </strong></p>
            <p>Direction <strong>le port de Bohol.</strong> Il y a une taxe de <strong>14 Php (0,23 €)</strong> par personne à régler quand vous quittez l&apos;île.</p>
            <p><strong>Nous avions réservé nos places au 1er étage, en plein air,</strong> comme pour chaque trajet. Nous préférons car <strong>dans les espaces fermés, il fait toujours beaucoup trop froid à cause de la clim&apos;. </strong></p>
            <p>Arrivées à Bohol, nous avons 3 h devant nous avant notre prochain ferry. On en profite pour aller faire un petit tour en ville.</p>
          </section>

          <section id="cebu" className="article-section">
            <div className="article-day-header">
              <h2>Cebu — Une nuit de transit</h2>
            </div>
            <p>Nous avons fait le choix dans notre itinéraire de ne pas visiter Cebu. Pour autant, <strong>il paraît que le Sud de l&apos;île est magnifique.</strong> On se dit qu&apos;on passe sûrement à côté de beaux paysages, mais on ne peut malheureusement pas tout faire, tout voir…</p>
            <p>Nous amarrons au port de Cebu. Entre Siquijor et Cebu (port), c&apos;est deux mondes, deux ambiances !</p>
            <p><strong>À la sortie du port, les locaux sont un peu oppressants et insistants.</strong> Il y a beaucoup de monde, de bruit, de voitures, de pollution. Nous décidons de nous éloigner de cet endroit et arrêtons un taxi un peu plus loin.</p>
            <p>Pour <strong>500 Php (8 €)</strong>, il nous conduit à notre hôtel situé à mi-chemin entre le port et l&apos;aéroport. Pour notre nuit de transit, l&apos;hôtel <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJazt7AwOaqTMRMQSLUTCsems" target="_blank" className="article-link article-resto-link-desktop">Lapu-Lapu Cottages</a><a href="https://maps.app.goo.gl/fUNqHCzn97Uh4nf4A" target="_blank" className="article-link article-resto-link-mobile">Lapu-Lapu Cottages</a></strong> est top.</p>
            <h4>⧐ Réveil à Cebu, direction Siargao !</h4>
            <p>Nous avons booké un taxi la veille avec la réception de l&apos;hôtel. Il passe nous récupérer à 3 h 30. Autant vous dire que la nuit a été courte ! Nous payons <strong>300 Php (4,80 €)</strong> pour aller de hôtel à l&apos;aéroport.</p>
          </section>

          <section id="siargao" className="article-section">
            <div className="article-day-header">
              <h2>Siargao — L&apos;île des surfeurs</h2>
            </div>
            <p>L&apos;île de Siargao se trouve <strong>au Nord de la province de Surigao, </strong>tout à l&apos;Est des Philippines. L&apos;un de ses nombreux charmes est qu&apos;elle est encore épargnée du tourisme de masse. Pour tout vous dire, <strong>on a eu un réel coup de cœur pour cette île !</strong></p>
            <p>Nous avions tellement hâte de découvrir Siargao comme on nous l&apos;a décrite, avec son ambiance particulière, à la cool et détente. Welcome to Siargao, <strong>la capitale du surf aux Philippines !</strong> Si cette île est connue pour être un haut lieu du surf où les amateurs de grosses vagues du monde entier se réunissent chaque année, ce n&apos;est pas seulement pour cela qu&apos;elle nous a attirée…</p>
            <p><strong>Les 48 îles et îlots qui composent Siargao valent le détour. </strong>Des plages de sable blanc, une mer cristalline, des paysages paradisiaques, et tout cela dans une ambiance détendue avec des locaux accueillants et souriants.</p>
            <p>Nous sommes tellement contentes d&apos;être là, et en même temps, la fin de ce merveilleux voyage approche.</p>
             <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>La meilleure période pour visiter Siargao est de mars à juin.</p></div>
            </div>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2440-768x1024.jpg" alt="Surf Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2461-copie-768x1024.jpg" alt="Surf Spots Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2436-2-768x1024.jpg" alt="Siargao Beach Coconuts" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <div className="article-day-header">
              <span className="article-day-badge">Jour 1</span>
              <h3>Arrivée sous la pluie sur l&apos;île aux cocotiers</h3>
            </div>
            <p><strong>En arrivant de Cebu, nous avions seulement 1 h de vol. Si vous arrivez de Manille, il y a un peu plus de 2 h de vol.  </strong></p>
            <p>Il est 8 h 30 environ quand nous atterrissons à Siargao. Bien que le temps soit couvert, vue du ciel, la première aperçue de l&apos;île est incroyable avec ses cocotiers à perte de vue.</p>
            <p>On arrive dans un tout petit aéroport à peine plus grand que notre appartement. Nous attendons nos sacs devant le seul et unique tapis. <strong>En sortant de l&apos;aéroport, nous devons régler la taxe de l&apos;île,</strong> soit <strong>20 Php (0,32 €)</strong> par personne et par passage (à l&apos;arrivée et au départ).</p>
            <p>Nous n&apos;avions pas organisé notre trajet jusqu&apos;à l&apos;hôtel car on nous avait informées qu&apos;il y avait plusieurs possibilités une fois sur place (bus, taxi, van touristique…).</p>
            <p>En effet, <strong>sur le parking de l'aéroport, plusieurs vans attendent les touristes.</strong> On nous demande où se situe notre hébergement. Nous sommes alors dispatchés et regroupés dans les vans en fonction de la localisation des hôtels. <strong>Pour nous, c&apos;est direction Général Luna.</strong> Pour le transfert, nous payons <strong>300 Php (4,85 €)</strong> par personne.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2355-768x1024.jpg" alt="Coconuts Forest Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2519-1-1024x768.jpg" alt="Siargao City" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Nous arrivons à l&apos;hôtel, le <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJQdnOz-MJBDMRTXqTy15LTIA" target="_blank" className="article-link article-resto-link-desktop">Siargao Beach Inn</a><a href="https://maps.app.goo.gl/wA6WhcgUW8ThN21X7" target="_blank" className="article-link article-resto-link-mobile">Siargao Beach Inn</a></strong> situé sur la route principale de Général Luna. <strong>Son emplacement sur la plage est vraiment top</strong> et notre chambre à l&apos;étage d&apos;un bungalow offre une vue incroyable sur l&apos;océan.</p>
            <p>Il est 10 h du matin, nos bagages sont posés et on a qu&apos;une envie, aller découvrir cette île. Malheureusement, le temps n&apos;est pas avec nous. Il pleut toujours. En même temps on le savait, ce n&apos;est pas la meilleure période pour venir visiter Siargao. Mais tant pis pour la météo, il nous en faut plus pour nous empêcher d&apos;aller vadrouiller. Nous partons de l&apos;hôtel à pied, histoire d&apos;explorer un peu les alentours.</p>
            <p><strong>Les stigmates du super-typhon survenu en 2021 sont encore bien présents. </strong>En effet, en décembre 2021, des vents de 195 km/h et des rafales atteignant les 270 km/h se sont abattus sur l&apos;île de Siargao, faisant s&apos;envoler les toits des maisons et bâtiments, arrachant des poteaux électriques, déracinant des arbres et privant des villes entières d&apos;électricité.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2380-768x1024.jpg" alt="Siargao Beach Inn" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_9616-1024x768.jpg" alt="Siargao Beach Inn" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <h4>⧐ La Cloud 9</h4>
            <p>Pour nous rendre un peu plus loin, nous prenons finalement un tuk-tuk. Nous arrivons à un endroit bien connu de Siargao, <strong>la Cloud 9. </strong></p>
            <p><strong>C&apos;est un espace dédié au surf. </strong>On a la sensation de rentrer dans un petit village. <strong>À l&apos;entrée, sur la droite, se trouve le stand pour acheter les tickets d&apos;accès.</strong> Il faut compter <strong>100 Php (1,60 €)</strong> par personne.</p>
            <p><strong>Le ticket est valable toute la journée.</strong> Vous pouvez donc sortir et entrer dans la zone autant de fois que vous le souhaitez.  Si vous revenez le lendemain, alors il faudra racheter un ticket d&apos;accès. S&apos;en suivent plusieurs stands de souvenirs en tous genres.</p>
            <p>Si vous voulez prendre un court de surf c&apos;est ici qu&apos;il faut venir. <strong>Ce qui est sympa, c&apos;est ce long ponton qui s&apos;avance sur la mer. </strong>On peut s&apos;approcher des vagues et observer les surfeurs au plus près.</p>
            <p>Sur la gauche du ponton, il y a quelques bars. Cabanes en bois, transats, cocktails, vue sur l&apos;océan… que demander de plus ?</p>
            <p>Mais au fait, c&apos;est quoi la Cloud 9 ? C&apos;est le nom qui est donné à LA vague de ce spot. Siargao est dans le <strong>Top 10 des meilleurs endroits où surfer dans le monde. <strong>Chaque année, en </strong>septembre, a lieu ici le festival du surf. </strong></p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2418-1024x768.jpg" alt="Cloud 9 BoardWalk Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2397-1024x768.jpg" alt="Siargao Beach Cloud 9" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2414-2-1024x768.jpg" alt="Bridge Cloud 9 Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2401-1024x768.jpg" alt="Bridge Cloud 9 Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2416-1024x768.jpg" alt="Bridge Cloud 9 Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Avec tout ça, il est plus que l&apos;heure d&apos;aller déjeuner. C&apos;est fou ce que le temps passe vite en vacances !</p>
            <p>Une fois sorties de la zone, nous tombons par hasard sur un petit bar restaurant Éco Shop, le <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJNfMXfQMJBDMRG67jZ51_XIc" target="_blank" className="article-link article-resto-link-desktop">Goodies</a><a href="https://maps.app.goo.gl/Pa8TDrPVbPQyZc8EA" target="_blank" className="article-link article-resto-link-mobile">Goodies</a></strong>. On peut y acheter des vêtements et divers articles sympas. Il y a également un espace de coworking. On a adoré l&apos;ambiance de cet endroit. Niveau restau, tout est frais, préparé à la minute. Si vous aimez manger healthy, c&apos;est à dire sain et léger, tout en étant rassasié, c&apos;est ici que vous devez venir.</p>
            <p>Notre retour à l&apos;hôtel se fait sous une pluie battante. Bilan de la journée : mouillées et fatiguées !</p>
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h3>De la pluie, de la pluie, encore de la pluie !</h3>
            </div>
            <p>C&apos;est un peu déprimées que nous nous réveillons ce matin. Depuis notre lit king size, on observe l&apos;océan déchaîné et la pluie qui ne cesse de tomber.</p>
            <p>Après avoir chillé toute la matinée et repéré notre spot pour manger le midi, c&apos;est parti pour un tour sous la pluie, direction le <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJOWDyiBv2AzMRpVvm7y_rqv4" target="_blank" className="article-link article-resto-link-desktop">Bravo Beach Resort</a><a href="https://maps.app.goo.gl/y3YSFS4gUvJx5X8V6" target="_blank" className="article-link article-resto-link-mobile">Bravo Beach Resort</a></strong>. Ici, c&apos;est un peu le paradis du skateur et du surfeur. Dès qu&apos;on entre dans l&apos;enceinte de l&apos;établissement, on est dans l&apos;ambiance avec un skate bowl à disposition.</p>
            <p>Le restaurant se trouve tout au fond, face à l&apos;océan. L&apos;ambiance y est décontractée. Confortablement installées dans nos petits canapés, on trinque avec une savoureuse Caïpirina. Le restaurant sert essentiellement des plats espagnols mais vous y trouverez de tout. Pour nous, qui dit Espagne, dit tapas ! Nous ne regrettons pas notre choix, les croquetas (entre autres) sont à tomber par terre. Le rapport qualité / prix est correct.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2531_jpg-767x1024.jpg" alt="Ville tuk-tuk Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2530-1-1024x768.jpg" alt="Siargao City" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <h4>⧐ Island hopping à Siargao</h4>
            <p>Nous repassons par la cloud 9 pour admirer le spectacle. En repartant, nous tombons sur <strong>un organisme qui propose des Island hoppings.</strong></p>
            <p>On nous informe que le tarif est de <strong>1500 Php (24,20 €)</strong><strong> par personne</strong>, repas compris, <strong>pour faire le tour de 3 îles.</strong> Vu le temps incertain prévu pour les prochains jours, on préfère ne rien réserver.</p>
            <p>Pour partir en excursion, on nous indique qu&apos;il y a aussi <strong>la possibilité de nous rendre directement sur le quai le matin même, et de nous joindre à un groupe qui n&apos;est pas complet ou de le faire en bateau privé.</strong></p>
            <p>Alors Carpe Diem, on verra bien demain !</p>
            <h4>⧐ Où faire la fête ? Harana Surf Resort</h4>
            <p>En attendant, nous avons trouvé l&apos;endroit où nous allons manger le soir (on a l&apos;impression qu&apos;on ne fait que ça !).</p>
            <p>Non loin de la Cloud 9, se trouve le <a href="https://www.google.com/maps/place/?q=place_id:ChIJie8EK_IJBDMRqS1JERgdQOU" target="_blank" className="article-link article-resto-link-desktop"><strong>Harana Surf Resort</strong></a><a href="https://maps.app.goo.gl/JcV2JfPgNKGSgnA9A" target="_blank" className="article-link article-resto-link-mobile"><strong>Harana Surf Resort</strong></a>. Cet endroit n&apos;est pas facile à repérer car il n&apos;est pas situé sur la route principale. Il faut s&apos;engouffrer dans une petite rue, le Harana se trouve tout au bout.</p>
            <p>Encore un restaurant avec une déco incroyable et une atmosphère trop agréable. La cuisine est délicieuse et copieuse. Le personnel est vraiment sympa et le service rapide. C&apos;est seulement plus tard dans la soirée qu&apos;on comprend pourquoi le service était si rapide... Nous sommes samedi et en quelques heures, le restaurant s&apos;est transformé en piste de danse !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2537-768x1024.jpg" alt="Harana Surf Resort Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_9644-1024x768.jpg" alt="Harana Surf Resort Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>En effet, à partir de 22 h, les tables sont mises de côté pour ne laisser place qu&apos;à celle du DJ.</p>
            <p>Les gens arrivent par dizaines, des groupes d&apos;amis, des touristes, des Philippins, des surfeurs... Tous viennent faire la fête et passer un bon moment. C&apos;est vraiment ce soir que nous nous rendons compte que Siargao n&apos;est pas seulement l&apos;île des surfeurs, mais aussi l&apos;île des fêtards.</p>
            <p>Après cette belle soirée, retour à l&apos;hôtel. On va croiser les doigts pour la météo du lendemain et faire la danse du soleil !</p>
            <div className="article-day-header">
              <span className="article-day-badge">Jour 3</span>
              <h3>Il fait beau — À nous l&apos;Island hopping !</h3>
            </div>
            <p>Réveil face à l&apos;océan après une nuit incroyable, et surprise, il fait beau ! Notre danse a fonctionné ! P&apos;tit dej&apos;, préparation du sac de plage, location d&apos;un scooter à l&apos;hôtel et c&apos;est parti.</p>
            <p>Comme on nous l&apos;a conseillé la veille, nous nous rendons directement sur le quai.</p>
                        <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des mamzelles</strong><p>Via l&apos;Office du Tourisme, nous avons pris un bateau privé pour 2000 Php (32 €) par personne, sans le repas. Certes un peu plus cher qu&apos;avec les organismes, mais ils nous ont proposé 4 îles au lieu de 3 !</p></div>
            </div>
            <p>Par contre, si on avait su, <strong>on aurait prévu les boules Quies !</strong> Le bruit du moteur de la bangka est juste assourdissant. Ça fait le même effet que lorsqu&apos;on sort d&apos;un concert où la musique était trop forte. Quand le moteur du bateau s&apos;arrête, on a les oreilles qui sifflent encore un bon moment.</p>
            <h4>⧐ Casulian Island</h4>
            <p>Direction Casulian Island, et plus précisément <strong>Corregidor Beach.</strong> Cette île ne fait normalement pas partie de l&apos;Island hopping.</p>
            <p>C&apos;est la plus éloignée et nous mettons environ <strong>une heure pour la rejoindre. </strong></p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/DJI_0415-768x1024.jpg" alt="Corregidor Beach Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_20230219_101825_767-1024x768.jpg" alt="Corregidor Beach Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Notre capitaine nous informe que nous avons une petite heure sur place et nous propose <strong>une randonnée de 30 minutes avec un guide (donc payante) jusqu&apos;au point le plus haut de l&apos;île. </strong>Nous préférons profiter de la plage et du soleil.</p>
            <p>Cette île isolée est tout de même assez grande. On y trouve un village et des hôtels, mais la plage sur laquelle nous avons débarqué est quasi-déserte. C&apos;est tellement apaisant.</p>
            <h4>⧐ Naked Island</h4>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2694-1024x768.jpg" alt="Naked Beach Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_0421-1024x768.jpg" alt="Naked Beach Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Nous reprenons la bangka direction Naked Island.</p>
            <p>L&apos;île Naked, comme son nom l&apos;indique, est nue. Il n&apos;y a rien. Pas de construction, pas de végétation. <strong>Il s&apos;agit littéralement d&apos;un banc de sable blanc et fin au milieu de la mer.</strong> C&apos;est impressionnant !</p>
            <p>On se trouve chanceuses d&apos;avoir posé les pieds sur ce petit bout de sable perdu au beau milieu de l&apos;océan, parce qu&apos;on sait d&apos;avance qu&apos;un jour il disparaîtra…</p>
            <h4>⧐ Daku Island</h4>
            <p>Notre 3ème spot est Daku Island. <strong>Daku est la plus grande des 4 îles que nous visitons aujourd&apos;hui.</strong> « Daku » est un mot local qui signifie « grand ».</p>
            <p><strong>C&apos;est ici que nous allons manger.</strong> Notre capitaine nous accompagne jusqu&apos;à des petites cabanes juste au-dessus de la plage.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2718-768x1024.jpeg" alt="Daku Island Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2742-1024x767.jpg" alt="Daku Island Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2708-1-1024x768.jpg" alt="Daku Island Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1594-1024x768.jpg" alt="Daku Island Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Le paysage est magnifique. <strong>Encore une île paradisiaque !</strong> La longue étendue de sable blanc poudreux et les coconuts qui se balancent forment un décor idyllique de carte postale pour ceux qui veulent se détendre.</p>
            <p>Dans les cabanes autour de nous, un groupe de touristes et une famille de Philippins sont installés. Une dame vient nous demander ce que l&apos;on souhaite manger. Pour <strong>600 Php (9,66 €)</strong> pour deux, on nous servira un 1/2 poulet pané (fraîchement tué), accompagné de riz et d&apos;une sauce aux notes sucrées. L&apos;un des meilleurs poulets de notre vie, simple mais tellement bon !</p>
            <p>Après avoir bien mangé, baladé et digéré, nous reprenons la mer.</p>
            <h4>⧐ Guyam Island</h4>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1194-1024x768.jpg" alt="Guyam Island Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_0431-1024x768.jpg" alt="Guyam Island Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Nous arrivons sur la dernière île de notre tour, Guyam Island. Une taxe de <strong>40 Php (0,64 €)</strong> par personne est à payer à l&apos;arrivée.</p>
            <p>C&apos;est une petite île pleine de charme. <strong>Ses eaux peu profondes couleur émeraude sont idéales pour patauger.</strong> Ses quelques arbres et son sable blanc poudreux font de cet endroit un petit paradis. Cette île est toute petite, on peut faire le tour à pied. Il n&apos;y a pas d&apos;habitation, juste quelques cabanes qui vendent des boissons et de la nourriture.</p>
            <p><strong>Le seul point négatif est qu&apos;il y a énormément de monde </strong>puisque tous les Island hoppings se rejoignent ici en fin de journée.</p>
            <p>Retour au quai vers 16 h avec tous ces paysages en tête, heureuses de cette journée.</p>
            <p>On reprend le scooter en direction de l&apos;hôtel, histoire de prendre une bonne douche avant de repartir... On a un rendez-vous de prévu !</p>
            <h4>⧐ Où se faire tatouer ? Rad Tattoo</h4>
            <p>Et oui, histoire de marquer ce moment et de graver ce voyage à jamais, nous allons nous faire tatouer.</p>
            <p>Si cela fait aussi partie de vos projets ou que l&apos;envie vous prend, nous vous conseillons vivement le salon <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJ5YlZcIz3AzMR4zkbQGztiz4" target="_blank" className="article-link article-resto-link-desktop">RAD Tattoo &amp; Cafe Siargao</a><a href="https://maps.app.goo.gl/FhjLg8FV2WdaJ1ft6" target="_blank" className="article-link article-resto-link-mobile">RAD Tattoo &amp; Cafe Siargao</a></strong>. Leur local est clean, ils sont très pros (les règles d&apos;hygiène sont respectées) et très sympas.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2932-1024x768.jpg" alt="RAD Tattoo Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2901-1024x768.jpg" alt="Cloud 9 night Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <h4>⧐ Où faire la fête ? Mad Monkey</h4>
            <p>Pour finir la soirée, on avait envie de manger dans un endroit dont on a beaucoup entendu parler depuis notre arrivée à Siargao, le <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJY6KU1y0JBDMRQVqscCdtbqo" target="_blank" className="article-link article-resto-link-desktop">Mad Monkey</a><a href="https://maps.app.goo.gl/BrfHavHrY7WdcTrA8" target="_blank" className="article-link article-resto-link-mobile">Mad Monkey</a></strong>. Située tout au Nord de Général Luna, c&apos;est une auberge de jeunesse exclusivement réservée aux adultes.</p>
            <p>Si vous cherchez une ambiance chaleureuse et conviviale, dans un décor incroyable, que ce soit pour boire un verre ou manger avec du bon son, vous êtes au bon endroit !</p>
            <p>On découvre rapidement le concept. Ici, toutes les heures, les barmans sonnent la cloche et payent leur tournée de shooters à toutes les personnes présentes. Alors forcément, le soir venu, sous couvert de l&apos;alcool, tout le monde s&apos;aime et tout le monde parle avec tout le monde. Franchement, on y a passé un très bon moment !</p>
            <p>Comme toutes les bonnes choses ont une fin, il est temps de rentrer se coucher.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2979-768x1024.jpg" alt="Mad Monkey Siargao Night" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_2939-1024x768.jpg" alt="Mad Monkey Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-day-header">
              <span className="article-day-badge">Jour 4</span>
              <h3>Direction le Nord de Siargao avant le grand retour</h3>
            </div>
            <p>C&apos;est le cœur lourd que nous entamons cette dernière demi-journée à Siargao. Nous avons notre vol pour Manille en début d&apos;après-midi. Il nous reste peu de temps ici, mais suffisamment pour pouvoir en profiter à fond. Nous chevauchons notre scooter et c&apos;est parti.</p>
            <p>En dehors des Island hoppings et du surf, il y a aussi de <strong>nombreuses activités et lieux à découvrir sur l&apos;île. </strong></p>
            <p>On le redit, mais <strong>il se dégage vraiment à Siargao une atmosphère unique, autant par son côté relaxant et survolté à la fois, que par sa beauté sauvage et son authenticité.</strong> Siargao est un vrai coup de cœur pour nous et vous charmera à coup sûr. Rien que de se balader en scooter à travers cette île est un réel plaisir. Les paysages sont juste magnifiques.</p>
            <h4>⧐ Coconut tree view &amp; la Palm road</h4>
            <p>Facile à trouver, le premier spot est sur la route principale qui monte <strong>vers le Nord de l&apos;île. Au bord de la chaussée, il offre un beau point de vue</strong> sur une immense forêt de cocotiers.</p>
            <p>Juste un peu plus loin, en poursuivant notre chemin en scooter, on tombe sur <strong>la fameuse route bordée de coconuts.</strong> Elle est surnommée la Palm road. On n&apos;a pas pu s&apos;empêcher de faire voler le drone. On se sent tellement petites au milieu de cette étendue de cocotiers.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2874-1-1024x768.jpg" alt="Coconut tree view Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_0440-768x1024.jpg" alt="Coconuts road Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Maasin Bridge River</h4>
            <p>Ici, <strong>une petite rivière enchantée traverse la jungle.</strong> C&apos;est un endroit tellement apaisant et relaxant. Comme il a plu récemment, l&apos;eau n&apos;est malheureusement pas si belle qu&apos;espérée.</p>
            <p>Pour entrer dans la zone, il faut payer <strong>20 Php (0,32 €)</strong> par personne. On accède alors à un plongeoir en bois duquel on peut sauter dans la rivière.</p>
            <p>Si vous souhaitez faire une <strong>balade sur la rivière en bateau,</strong> le tarif est de <strong>250 Php (4,05 €)</strong> par personne. <strong>Des locaux vous emmèneront jusqu&apos;à une lagune secrète.</strong> Vous avez également la possibilité de faire la <strong>balade en kayak.</strong> Pour 2 personnes, il faut compter <strong>550 Php (8,90 €)</strong>, guide compris.</p>
            <p>Pour trouver cet endroit, il suffit de taper Maasin bridge sur votre GPS.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_1122-768x1024.jpg" alt="Maasin Bridge River Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3064-768x1024.jpg" alt="Maasin Bridge River Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Magpopongko tidal pools</h4>
            <p>Malgré le monde, il n&apos;y a <strong>aucun problème pour le stationnement.</strong> Le long de la route qui mène à la plage s&apos;enchaînent plusieurs grands parkings. Nous avons payé <strong>10 Php (0,16 €)</strong> pour y laisser le scooter.</p>
            <p>Pour accéder au site, il faut débourser <strong>50 Php (0,80 €)</strong> par personne. L&apos;endroit est très fréquenté. On y trouve des boutiques de souvenirs, des bars et des restaurants. <strong>Une fois sur la plage, partez sur la gauche. </strong></p>
            <p><strong>Au niveau des rochers, il y a un chemin pour accéder aux piscines naturelles. Vous avez aussi la possibilité de passer directement par l&apos;eau. </strong></p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des mamzelles</strong><p>Venez une bonne heure avant la marée basse pour pouvoir profiter pleinement des lieux. Renseignez-vous sur les horaires des marées.</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_9730-3-1024x768.jpg" alt="Magpopongko Piscines naturelles Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/DJI_0477-1-769x1024.jpg" alt="Magpopongko Tidal pools Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Il y a plusieurs piscines. N&apos;hésitez pas à <strong>continuer sur la gauche en marchant dans l&apos;eau pour découvrir de beaux spots et surtout vous isoler de la foule. </strong></p>
            <p>En ce qui nous concerne, on a peu de temps pour vraiment explorer l&apos;endroit. Nous prenons donc le chemin de terre à la queue leu leu et restons du coup vers l&apos;entrée.</p>
            <p>On fait trempette 5 minutes, sauf qu&apos;il y a énormément de monde, quitte à se faire bousculer. On préfère donc prendre du recul et envoyer le drone. La vue d&apos;en haut est incroyable. Et surprise, on découvre que les piscines forment un cœur !</p>
            <h4>⧐ Pacifico Beach</h4>
            <p>Nous continuons notre petit road trip vers le Nord de Siargao, direction Pacifico Beach. Nous sommes à environ 1 h de route de Général Luna.</p>
            <p><strong>Cette plage déserte de sable blanc est juste wahooo ! </strong>Elle tient son nom de son emplacement car elle se situe face à l&apos;océan Pacifique.</p>
            <p>L&apos;eau est translucide. Au bord, il y a un peu de rochers et de corail. Ce n&apos;est pas vraiment un endroit pour venir se prélasser tranquillement dans l&apos;eau. C&apos;est même l&apos;<strong>un des plus gros spots de surf de l&apos;île.</strong> Les vagues sont impressionnantes !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3032-1024x768.jpg" alt="Pacifico Beach Siargao" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3042-1-768x1024.jpg" alt="Pacifico Beach Siargao" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Nous n&apos;avons malheureusement plus le temps d&apos;aller plus loin, il faut rebrousser chemin et rentrer à l&apos;hôtel. Un van nous y attend pour nous conduire à l&apos;aéroport, direction Manille.</p>
            <p>Au revoir les Philippines, on reviendra, c&apos;est sûr... !!</p>
          </section>

          <section id="budget" className="article-section">
            <div className="article-day-header">
              <h2>Quel budget pour 3 semaines aux Philippines ?</h2>
            </div>
            <p>C&apos;est bien beau de partir au bout du monde pour des vacances au paradis, mais <strong>quel budget faut-il prévoir ? </strong> Pas de secret entre nous, on vous dit tout !</p>

            {/* Chiffre clé */}
            <div style={{textAlign: 'center', margin: '36px 0 32px', padding: '32px 24px', background: '#fdf4ee', borderRadius: '12px', border: '1px solid var(--gold)'}}>
              <p style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '56px', fontWeight: 600, color: 'var(--gold)', lineHeight: 1, margin: '0 0 8px'}}>1 880 €</p>
              <p style={{fontSize: '12px', letterSpacing: '2px', textTransform: 'uppercase', color: '#8a847e', margin: 0}}>notre budget total par personne — 3 semaines</p>
            </div>

            {/* 4 cartes */}
            <div className="article-pratique-grid" style={{marginBottom: '32px'}}>
              <div className="article-pratique-card">
                <h3 className="budget-h3" style={{display:"flex",alignItems:"center",gap:"10px"}}><i className="ti ti-plane" aria-hidden="true" style={{color:"var(--gold)",flexShrink:0}}></i>Vols internationaux</h3>
                <p>Pour nos vols internationaux aller / retour (Paris - Djeda, Djeda - Manille), nous avons payé <strong>465 €</strong> par personne avec Saudia Airlines.</p><p>Les tarifs peuvent bien évidemment fluctuer en fonction de la saison et de la compagnie aérienne.</p>
              </div>
              <div className="article-pratique-card">
                <h3 className="budget-h3" style={{display:"flex",alignItems:"center",gap:"10px"}}><i className="ti ti-bus" aria-hidden="true" style={{color:"var(--gold)",flexShrink:0}}></i>Transports sur place</h3>
                <p style={{marginTop: '12px'}}><strong>Vols internes :</strong> entre 30 € et 100 € par vol — plus vous les réservez tôt, mieux c&apos;est ! <br /><strong>Bus</strong> (Manille → Banaue) : 30 € aller-retour par personne.<br /><strong>Ferry</strong> entre les îles : entre 10 € et 30 € par traversée.<br /><strong>Tuk-tuks / jeepneys :</strong> entre 1 € et 5 €. Pour les taxis, demandez la plaquette des tarifs. <br /><strong>Grab</strong> (Manille, Cebu) et <strong>Backride</strong> (Palawan) sont moins chers que le taxi.</p>
              </div>
              <div className="article-pratique-card">
                <h3 className="budget-h3" style={{display:"flex",alignItems:"center",gap:"10px"}}><i className="ti ti-bed" aria-hidden="true" style={{color:"var(--gold)",flexShrink:0}}></i>Hébergements</h3>
                <p>Les hôtels-resorts bling bling, c&apos;est pas trop notre truc ! L&apos;idéal pour nous : un minimum de confort et d&apos;intimité. Nous avons opté pour du <strong>milieu de gamme</strong> durant tout notre séjour.<br /><br /><strong>Auberges / guest houses :</strong> 5 € à 15 € / nuit<br /><strong>Milieu de gamme :</strong> 15 € à 60 € / nuit<br /><strong>Resorts de luxe :</strong> 80 € à 150 € / nuit</p>
              </div>
              <div className="article-pratique-card">
                <h3 className="budget-h3" style={{display:"flex",alignItems:"center",gap:"10px"}}><i className="ti ti-tools-kitchen-2" aria-hidden="true" style={{color:"var(--gold)",flexShrink:0}}></i>Repas &amp; Activités</h3>
                <p>Qui dit Philippines, dit îles, dit excursions en bateau, snorkeling, plongées et visites de sites naturels !<br /><br /><strong>Restaurant local :</strong> 2 € à 5 € / repas<br /><strong>Restaurant milieu de gamme :</strong> 5 € à 15 € / repas<br /><strong>Island hopping :</strong> 20 € à 35 € / pers., repas compris<br /><strong>Dépenses diverses</strong> (souvenirs, shopping, pourboires...) : 100 € à 150 €</p>
              </div>
            </div>

            {/* Tableau 3 niveaux */}
            <div className="article-day-header"><h3>Budget estimé pour 3 semaines</h3></div>
            <div className="article-budget-grid" style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', margin: '8px 0 32px'}}>
              <div style={{textAlign: 'center', padding: '24px 16px', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '8px'}}>
                <p style={{fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8a847e', margin: '0 0 12px'}}>Économique</p>
                <p className="budget-price" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: 'var(--dark)', margin: '0 0 4px'}}>1 200 € – 1 500 €</p>
                <p style={{fontSize: '12px', color: '#8a847e', margin: 0}}>par personne</p>
              </div>
              <div style={{textAlign: 'center', padding: '24px 16px', background: '#fdf4ee', border: '1px solid var(--gold)', borderRadius: '8px'}}>
                <p style={{fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--gold)', margin: '0 0 12px'}}>Moyen</p>
                <p className="budget-price" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: 'var(--dark)', margin: '0 0 4px'}}>1 600 € – 2 200 €</p>
                <p style={{fontSize: '12px', color: '#8a847e', margin: 0}}>par personne</p>
              </div>
              <div style={{textAlign: 'center', padding: '24px 16px', background: 'var(--bg)', border: '1px solid var(--line)', borderRadius: '8px'}}>
                <p style={{fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', color: '#8a847e', margin: '0 0 12px'}}>Confortable</p>
                <p className="budget-price" style={{fontFamily: "'Cormorant Garamond', serif", fontSize: '28px', fontWeight: 600, color: 'var(--dark)', margin: '0 0 4px'}}>2 400 € – 3 000 €</p>
                <p style={{fontSize: '12px', color: '#8a847e', margin: 0}}>par personne</p>
              </div>
            </div>
            <p>Ce budget peut varier selon la saison, le type d&apos;activités et votre style de voyage.</p>

            {/* Conseils */}
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Nos conseils pour optimiser votre budget</strong>
                <p>⋙ <strong style={{display:"inline",fontSize:"inherit",letterSpacing:"inherit",textTransform:"none",color:"inherit"}}>Choisir la bonne saison pour partir.</strong> Les Philippines ont une saison touristique (novembre à avril) où les prix sont plus élevés. Si vous voulez économiser, partir en basse saison (mai à octobre) peut permettre de trouver des hébergements et des activités à des prix plus attractifs, même si la météo peut être moins stable à cause de la mousson.</p>
                <p>⋙ <strong style={{display:"inline",fontSize:"inherit",letterSpacing:"inherit",textTransform:"none",color:"inherit"}}>Planifier les vols internes à l&apos;avance,</strong> les tarifs augmentent à l&apos;approche des dates.</p>
                <p>⋙ <strong style={{display:"inline",fontSize:"inherit",letterSpacing:"inherit",textTransform:"none",color:"inherit"}}>Privilégier les ferrys</strong> lorsque les distances le permettent (entre Cebu, Bohol et Siquijor par exemple).</p>
                <p>⋙ <strong style={{display:"inline",fontSize:"inherit",letterSpacing:"inherit",textTransform:"none",color:"inherit"}}>Les auberges de jeunesse ou les guest houses</strong> peuvent être de bonnes alternatives aux hôtels. Pour un séjour plus long, vous pouvez négocier directement avec les propriétaires d&apos;hébergements pour des prix dégressifs. C&apos;est une pratique courante aux Philippines.</p>
                <p>⋙ <strong style={{display:"inline",fontSize:"inherit",letterSpacing:"inherit",textTransform:"none",color:"inherit"}}>Manger local.</strong> Le coût de la nourriture dans les restaurants locaux ou les marchés est vraiment bas comparé aux restaurants touristiques.</p>
              </div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3668-768x1024.jpg" alt="Island Hopping Kayangan Lake Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9967-1-1024x768.jpg" alt="Tapiutan Island Hopping El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
          </section>

          <section id="pratique" className="article-section">
            <div className="article-day-header">
              <h2>Tout savoir pour organiser votre voyage</h2>
            </div>
            <div className="article-pratique">
              <div className="article-pratique-block">
                <h3 className="article-pratique-title">Nos conseils avant de partir</h3>
                <PratiqueOnglets onglets={[
                  {
                    id: 'formalites',
                    label: 'Formalités',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2"/><path d="M9 5a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2a2 2 0 0 1 -2 2h-2a2 2 0 0 1 -2 -2"/><path d="M9 14l2 2l4 -4"/></svg>,
                    content: (
                      <>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>Pour un séjour de moins de 30 jours aux Philippines, le citoyen français n&apos;a pas besoin de visa.</strong> Cependant, vous devez justifier d&apos;un <strong>passeport valide au moins 6 mois après la sortie prévue du pays</strong> et d&apos;un vol de retour dans les 30 jours. Si la période de voyage dépasse les 30 jours, vous devez faire une demande auprès de l&apos;<strong><a href="https://immigration.gov.ph/visas/" target="_blank" rel="noopener noreferrer" className="article-link">immigration</a></strong> pour obtenir un visa longue durée.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p>Il est impératif de remplir le <strong>formulaire obligatoire eTravel</strong> (gratuit) sur le <strong><a href="https://etravel.gov.ph" target="_blank" rel="noopener noreferrer" className="article-link">site officiel du gouvernement philippin</a></strong> dans les 72 h précédant votre voyage. Vous recevrez un QR code à présenter à l&apos;embarquement et à l&apos;arrivée.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>On vous recommande vivement d&apos;avoir toujours de l&apos;argent liquide sur vous.</strong> Il y a beaucoup d&apos;endroits où la carte bleue n&apos;est pas acceptée (même dans les hôtels). Sur certaines îles, il est même compliqué de retirer de l&apos;argent. Les distributeurs sont souvent en panne ou vides.</p>
                        </div>
                      </>
                    ),
                  },
                  {
                    id: 'sante',
                    label: 'Santé',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 8v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"/><path d="M4 10a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v8a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2l0 -8"/><path d="M10 14h4"/><path d="M12 12v4"/></svg>,
                    content: (
                      <>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>Il n&apos;y a pas de vaccin obligatoire pour se rendre aux Philippines,</strong> mais certains sont tout de même recommandés : tétanos, diphtérie, poliomyélite (DTP), hépatites A et B, coqueluche, typhoïde et rage.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>Prenez une assurance maladie et rapatriement avant de partir</strong> (<strong><a href="https://www.chapkadirect.fr" target="_blank" rel="noopener noreferrer" className="article-link">Chapka</a></strong>, <strong><a href="https://www.yupwego.com/fr" target="_blank" rel="noopener noreferrer" className="article-link">Yupwego</a></strong>...). Si ce n&apos;est pas le cas, tous les frais seront à votre charge, y compris en cas d&apos;urgence vitale.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>Protégez-vous contre les moustiques</strong> qui peuvent être porteurs de maladies telles que le paludisme et la dengue. Envisagez de prendre un traitement de fond ou procurez-vous un répulsif efficace.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>L&apos;eau du robinet n&apos;étant pas potable,</strong> consommez seulement l&apos;eau en bouteille ou l&apos;eau filtrée. Si vous sortez un peu des sentiers battus, <strong>évitez les glaçons et les aliments crus,</strong> favorisez les aliments bien cuits.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p>Nous vous conseillons fortement de <strong>prendre une trousse à pharmacie</strong> : anti-diarrhéique, antiseptique, anti-inflammatoire, crème solaire, antibiotiques pour les possibles infections intestinales...</p>
                        </div>
                      </>
                    ),
                  },
                  {
                    id: 'loisirs',
                    label: 'Loisirs',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7h12a1 1 0 0 1 1 1v4.5a2.5 2.5 0 0 1 -2.5 2.5h-.5a2 2 0 0 1 -2 -2a2 2 0 1 0 -4 0a2 2 0 0 1 -2 2h-.5a2.5 2.5 0 0 1 -2.5 -2.5v-4.5a1 1 0 0 1 1 -1"/><path d="M10 17a2 2 0 0 0 2 2h3.5a5.5 5.5 0 0 0 5.5 -5.5v-9.5"/></svg>,
                    content: (
                      <>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>Si vous souhaitez louer un scooter, pensez à prendre votre permis de conduite.</strong> Les scooters mis en location sont des 125CC. Ce n&apos;est pas systématique, mais sur certaines îles on vous recommande de l&apos;avoir en cas de contrôle de police. À titre informatif, nous n&apos;avons jamais été contrôlées.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p>Prévoir des chaussures pour marcher dans l&apos;eau ou des tongs qui tiennent aux pieds.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p>Indispensable selon nous, emportez un <strong>sac waterproof</strong> pour protéger vos affaires (téléphone, drone, clés, portefeuille…) lors des Island hoppings. En arrivant sur certaines îles, vous êtes parfois débarqués à quelques mètres du bord qu&apos;il faut rejoindre à la nage.</p>
                        </div>
                      </>
                    ),
                  },
                  {
                    id: 'meteo',
                    label: 'Météo',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/></svg>,
                    content: (
                      <>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>Le climat des Philippines est principalement tropical,</strong> il fait chaud toute l&apos;année. Il y a trois saisons distinctes : la saison tempérée de décembre à février, la saison sèche de mars à mai, et la saison des pluies de juin à novembre. <strong>La meilleure période se situe entre janvier et avril.</strong></p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p>Nous avions décidé de partir en février pour s&apos;assurer d&apos;une belle météo. Pour autant, même les locaux n&apos;avaient jamais vu de telles précipitations... Nous avons reçu à plusieurs reprises des messages d&apos;alerte pour des inondations et glissements de terrain.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>La météo aux Philippines est finalement assez imprévisible.</strong> Ce pays est aussi souvent confronté à des typhons et des séismes.</p>
                        </div>
                      </>
                    ),
                  },
                  {
                    id: 'infos',
                    label: 'Infos pratiques',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/><path d="M12 9h.01"/><path d="M11 12h1v4h1"/></svg>,
                    content: (
                      <>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>En arrivant à l&apos;aéroport de Manille, nous avons acheté une puce Globe.</strong> Pour 80 Go de connexion internet sur 30 jours, comptez <strong>1750 Php (29,80 €)</strong>. Les appels ne sont pas inclus. Sinon, vous trouverez du Wifi un peu partout mais <strong>le réseau n&apos;est vraiment pas top aux Philippines.</strong></p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>Les Philippines ont 6 à 7 heures d&apos;avance sur l&apos;heure française</strong> (selon l&apos;heure d&apos;été ou d&apos;hiver en France). Les effets du décalage peuvent être compliqués à gérer les premiers jours...</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>Vous n&apos;aurez pas besoin d&apos;adaptateur aux Philippines,</strong> les prises sont identiques à celles en France. Le voltage est de 220 volts. Cependant, restez vigilants, nous avons entendu des histoires de chargeurs qui ont pris feu !</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>Ne vous chargez pas avec trop de vêtements.</strong> Vous aurez la possibilité de les laver sur place. Tous les hôtels proposent un service de laundry pour <strong>100 Php (1,60 €)</strong> le kilo en moyenne.</p>
                        </div>
                        <div className="pratique-item">
                          <span className="pratique-dash"></span>
                          <p><strong>On vous conseille de jeter un œil sur des groupes Facebook</strong> tels que "les Francophones aux Philippines (tout sauf la météo)" ou "les Français aux Philippines"... Vous y trouverez beaucoup d&apos;infos utiles et pratiques pour votre séjour.</p>
                        </div>
                      </>
                    ),
                  },
                ]} />
              </div>
            </div>
          </section>

          <section className="article-comments-section">
            <h2 className="article-comments-title">Commentaires</h2>

            <CommentsList comments={[
              {
                id: '55',
                author: 'JOËLLE JEUNET',
                date: '7 juin 2026',
                text: "Bravo et merci !\nJ’ai vu et lu beaucoup de choses, mais il me semble que votre blog est le mieux en tout ! Je vais donc m’appuyer dessus pour… TOUT !\nJ’espérais un voyage en septembre, au vu de la météo, je pense pousser a Novembre comme vous, pour 1 mois.\nJe vais donc étudier de plus près et reviendrai vers vous sûrement !",
                reply: { author: 'MamZelles en vadrouille', date: '9 juin 2026', text: "Oooohh !!! Quel bonheur de lire ce petit message ! 🥰 Ça nous fait tellement plaisir ! 😄\nNovembre est parfait pour découvrir la majorité des îles. Après, la météo aux Philippines, c’est un vrai sujet ! 😅 D’une année à l’autre, ça n’a parfois rien à voir...\nEn tout cas, n’hésitez pas si vous avez besoin de conseils 😉👌\nÀ très bientôt ! ☀️🌴" }
              },
              {
                id: '44',
                author: 'Annaka',
                date: '22 nov. 2025',
                text: "Bonjour, quand y etes vous allées ?\n\na bientôt :)",
                reply: { author: 'MamZelles en vadrouille', date: '30 nov. 2025', text: "Bonjour,\nNous étions parties en novembre. 😉👌🏼\nN’hésitez pas si vous avez d’autres questions... 🤗☀️" }
              },
              {
                id: '43',
                author: 'Val',
                date: '14 nov. 2025',
                text: "Au top les filles !! ..on pars 2 mois aux Philippines début décembre ..merci pour toutes vos bonnes vibes et conseils qui ont aiguillés nos pistes d’atterrissage :)",
                reply: { author: 'MamZelles en vadrouille', date: '30 nov. 2025', text: "Avec plaisir ! 😍\nBon voyage !!! ✈️☀️🌴" }
              },
              {
                id: '37',
                author: 'Baptiste',
                date: '10 sept. 2025',
                text: "Bonjour et merci pour votre partage. A quelle période étiez vous parties ? Nous souhaiterions faire un itinéraire semblable au votre du 6 au 26 novembre cela semble un peu tôt vis à vis de la saison sèche... ce qui nous fait hésiter.",
                reply: { author: 'MamZelles en vadrouille', date: '15 sept. 2025', text: "Bonjour,\nAvec plaisir pour le partage ! 🤗\nPour ce voyage, nous étions également parties en novembre. Pour explorer Palawan, la période est idéale ! Pour les autres îles, c’est un peu aléatoire... En réalité, il n’existe pas de période parfaite si vous souhaitez visiter plusieurs îles, chacune ayant son propre microclimat.\nN’hésitez pas si vous avez besoin d’autres informations. On vous souhaite en tout cas de bons préparatifs et un beau voyage ! ☀️🏝️" }
              },
              {
                id: '35',
                author: 'Tessier',
                date: '25 août 2025',
                text: "d’accord merci beaucoup. Vous m’avez convaincue, c’est magnifique!",
                reply: { author: 'MamZelles en vadrouille', date: '28 août 2025', text: "Bonjour,\nTrop heureuses de vous lire ! ☀️🤗\nOn vous souhaite donc un merveilleux voyage dans ce fabuleux pays." }
              },
              {
                id: '33',
                author: 'Tessier',
                date: '22 août 2025',
                text: "Bonjour, merci pour toutes ces informations. Je me pose une question concernant les deux jours à Banaue, aviez vous pris vos bagages depuis Manille dans le bus? Nous aurons chacun une grosse valise. merci",
                reply: { author: 'MamZelles en vadrouille', date: '25 août 2025', text: "Bonjour,\nNous étions en sacs à dos donc pas de problématique de valises pour nous.\nPour autant, sachez qu’il est possible de vous organiser avec votre hôtel à Manille, avec un petit supplément, pour qu’ils vous gardent vos valises.\nOn vous souhaite un bon séjour dans l’un des plus beaux pays au monde ! ☀️🏝️🤩" }
              },
              {
                id: '21',
                author: 'Mimi des iles',
                date: '21 janv. 2025',
                text: "Merci bc pour ce partage qui va bc m aider pour mon voyage prévu en avril",
                reply: { author: 'MamZelles en vadrouille', date: '23 févr. 2025', text: "Avec grand plaisir ! 😊 On serait heureuses d’avoir un petit retour sur ce voyage de rêve ! ☀️🏝️\nBons préparatifs en attendant. 🤗🤗" }
              },
            ]} />
            <CommentForm
              articleTitle="Voyage aux Philippines : itinéraire de 3 semaines"
              articleUrl="https://mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient"
            />
          </section>

          <NewsletterForm />

          {/* ARTICLES LIES */}
          <div className="article-related">
            <h3 className="article-related-title">À lire aussi</h3>
            <div className="article-related-grid">
              <a href="/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Palawan-1024x819.jpg" alt="Palawan El Nido Coron" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Philippines</span>
                  <p className="article-related-title-card">Palawan : Coron et El Nido, le joyau des Philippines</p>
                </div>
              </a>
              <a href="/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/Blog-Port-Barton-1536x1229.jpg.webp" alt="Palawan Port Barton" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Philippines</span>
                  <p className="article-related-title-card">Palawan : de Puerto Princesa à Port Barton</p>
                </div>
              </a>
              <a href="/road-trip-a-lanzarote" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/Lanzarote.jpeg" alt="Lanzarote" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Espagne</span>
                  <p className="article-related-title-card">Que faire à Lanzarote ? Road trip d&apos;une semaine</p>
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
      <Footer />

    </>
  );
}
