import type { Metadata } from 'next';
import './el-nido.css';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';
import ArticlesLies from '../components/ArticlesLies';

export const metadata: Metadata = {
  title: "Palawan : Coron et El Nido, le joyau des Philippines",
  description: "Palawan : de ses lagons turquoise à El Nido aux récifs de Coron — notre guide complet, nos coups de cœur et tous nos conseils pour préparer votre séjour.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines' },
  openGraph: {
    title: "Palawan : Coron et El Nido, le joyau des Philippines",
    description: 'De ses lagons turquoise à El Nido aux récifs spectaculaires de Coron, plongez dans le joyau des Philippines.',
    url: 'https://mamzellesenvadrouille.com/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/El-Nido-Coron.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2024-10-17T19:10:35.000Z',
    authors: ['MamZelles en vadrouille'],
  },
};

export default function PalawanElNidoCoronPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Palawan : Coron et El Nido, le joyau des Philippines",
    description: "Palawan : de ses lagons turquoise à El Nido aux récifs de Coron — notre guide complet, nos coups de cœur et tous nos conseils pour préparer votre séjour.",
    image: 'https://mamzellesenvadrouille.com/El-Nido-Coron.webp',
    datePublished: '2024-10-17',
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
      '@id': 'https://mamzellesenvadrouille.com/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines',
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
        <img className="hero-bg" src="/El-Nido-Coron.webp" alt="Palawan : lagons turquoise d'El Nido et îles de Coron" style={{objectPosition: 'center 78%'}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Palawan<br /><em>El Nido &amp; Coron, le joyau des Philippines</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">De ses lagons turquoise à El Nido<br className="mobile-hero-break" /> aux récifs spectaculaires de Coron,<br className="mobile-hero-break" /> plongez dans le joyau des Philippines.</p>
        </div>
      </section>

    </div>

      {/* BANDEAU EN BREF */}
      <div className="article-bref-bar">
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>6-7 jours</span>
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
          <h2>Pourquoi nous avons adoré Palawan</h2>
        </div>
        <div className="article-cdcr-grid">
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre île coup de cœur</span><span className="article-cdcr-value">→ Coron &amp; ses lagons</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le spot le plus incroyable</span><span className="article-cdcr-value">→ Le Twin Lagoon</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le moment le plus magique</span><span className="article-cdcr-value">→ Le sunset à Corong Corong</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">À tester<br className="tablet-only-br" /> sans hésiter</span><span className="article-cdcr-value">→ L&apos;island hopping en speed boat</span></div>
        </div>
      </div>

      <div className="article-layout article-elnido">
        <main className="article-main">

          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title"><svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)" stroke="none" style={{marginRight:'8px', verticalAlign:'middle'}}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>Sommaire de l&apos;article</h2>
            <ul className="article-toc-list">
              <li><a href="#el-nido">El Nido &amp; l&apos;archipel de Bacuit</a></li>
              <li><a href="#coron">Coron &amp; les îles Calamian</a></li>
              <li><a href="#itineraire">Notre itinéraire de 3 semaines aux Philippines</a></li>
            </ul>
          </nav>

          {/* INTRO */}
          <section className="article-section">
            <p className="article-intro">Située à l’Ouest des Philippines, l’île de Palawan est souvent considérée comme l’une des plus belles destinations touristiques du pays mais également l’<strong>une des plus belles îles au monde.</strong></p>
            <p>En effet, de par ses paysages à couper le souffle, ses plages de sable blanc, et ses eaux cristallines, cette île paradisiaque séduit les voyageurs du monde entier.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0239-4-1024x768.jpg" alt="Corong Coron Sip Sunset Lounge &amp; Bar El Nido Palawan" className="article-img-full" loading="lazy" />
            <p>L’île de Palawan s’étend sur environ 450 kilomètres du Nord au Sud, de Coron à Balabac. Coron se situe à l’extrémité Nord de l’archipel, tandis que Balabac se trouve à l’extrémité Sud, non loin de la frontière maritime avec la Malaisie. Cette longueur impressionnante fait de Palawan l'<strong>une des plus grandes îles des Philippines</strong> (la 5ème pour être précises), ce qui offre une grande diversité de paysages.</p>
            <p>Entre ses lagons turquoises, ses récifs coralliens spectaculaires et sa faune unique, <strong>Palawan offre une expérience incroyable que vous soyez amateurs de nature ou d’aventure. </strong>Si vous êtes à la recherche de moments de détente sur des plages isolées ou d’explorations marines dans des spots de plongée renommés, <strong>Palawan est une destination incontournable pour tous les amoureux de l’évasion.</strong></p>
          </section>

          <section id="el-nido" className="article-section">
            <div className="article-day-header">
              <h2>El Nido &amp; l'archipel de Bacuit</h2>
            </div>
            <p>Cette ville tient son nom de sa localisation. Située tout au Nord de l’île de Palawan et encerclée par la jungle, son accès était compliqué jusqu’à l’ouverture de l’aéroport d’El Nido, appelé aussi l’<strong>aéroport de Lio.</strong> À ce jour, <strong>il faut 1h15 pour relier El Nido à Manille. </strong></p>
            <p><strong>Puerto Princesa, la capitale de Palawan,</strong> se trouve à 230 km plus au Sud. Vu l’état des routes et des limitations de vitesse, <strong>il faut tout de même compter 5 à 6 h de voiture / van pour relier ces 2 villes.</strong> Vous pouvez rajouter 2 h si vous faites le trajet en bus.</p>
            <p>Si El Nido est devenue l’une des destinations la plus populaire et touristique des Philippines, c’est avant tout grâce à la présence de l’<strong>archipel de Bacuit, considéré comme l’une des plus belles baies au monde. </strong></p>
            <p>Situés juste en face d’El Nido, ce sont <strong>45 îles et îlots qui constituent la réserve naturelle de l’archipel de Bacuit. </strong>Des îles bordées de sable blanc et à la végétation luxuriante, des falaises de calcaire aux formes surréalistes qui semblent flotter sur l’eau, une mer transparente aux couleurs tantôt émeraude tantôt turquoise... Rien que ça ! Ça fait rêver, non ?</p>
            <h4>⧐ Se rendre à Palawan en avion</h4>
            <p>Pour vous rendre à El Nido, Palawan dispose de quatre aéroports principaux :</p>
            <p>⋙ Situé dans la capitale de l’île, <strong>l’aéroport de Puerto Princesa (PPS).</strong> C’est le plus grand et le plus fréquenté de l’île, accueillant des vols domestiques et internationaux.</p>
            <p>⋙ <strong>L’aéroport de Coron, (Francisco B. Reyes Airport - USU). </strong>Situé sur l’île de Busuanga, près de Coron. Cet aéroport dessert principalement les vols domestiques en provenance de Manille et d’autres grandes villes des Philippines.</p>
            <p>⋙ <strong>L’aéroport d'El Nido (ENI).</strong> Un petit aéroport situé près de la ville d’El Nido, principalement utilisé par des compagnies aériennes privées comme AirSWIFT. Il est surtout desservi par des vols domestiques venant de Manille, Cebu, et d’autres destinations locales.</p>
            <p>⋙ <strong>L’aéroport de San Vicente (SWL). </strong>Un nouvel aéroport situé dans la municipalité de San Vicente, destiné à promouvoir le tourisme dans cette partie de Palawan. Il accueille quelques vols domestiques, bien que son développement soit encore en cours.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_3047-1-1024x768.jpg" alt="Aéroport Lio El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_0297-3-767x1024.jpg" alt="Archipel Bacuit El Nido Palawan" loading="lazy" style={{flex: '0.749', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 1</span>
              <h3>Arrivée de nuit &amp; premiers pas à El Nido</h3>
            </div>
            <p>Nous arrivons en début de soirée à El Nido. Nous sommes clairement déphasées mais surexcitées ! Notre première mission est de rejoindre notre hôtel qui se situe dans le centre ville.</p>
            <p><strong>À la sortie de l’aéroport, sur un petit parking, une multitude de tuk-tuks nous attendent. </strong>Accrochée à un arbre, une pancarte affiche les tarifs selon la zone où vous vous rendez.</p>
            <p>Notre hébergement, situé dans le centre ville d’El Nido, se trouve à environ 15 minutes de tuk-tuk. On paiera <strong>300 Php (4,80 €)</strong> pour la course.</p>
            <p>Notre hôtel, le <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJz3AoghVVtjMRCPdQrQ4IGnI" target="_blank" className="article-link article-resto-link-desktop">Bulskamp Inn</a><a href="https://maps.app.goo.gl/o9wtFzQaiFfD3szE7" target="_blank" className="article-link article-resto-link-mobile">Bulskamp Inn</a></strong>, est un petit havre de paix au milieu de l’agitation du centre ville. Des petites lumières colorées, des hamacs, un bassin avec des gros poissons, un petit coin lounge… On s’y sent bien instantanément.</p>
            <p>Nous montons découvrir notre chambre en prenant soin de se déchausser comme il est indiqué. Bien que le lit nous fasse des appels de phares (si on se pose maintenant, on est foutues !), nous posons les sacs et nous partons directement faire un tour dans le centre pour manger un morceau.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_0288_jpg-1024x768.jpg" alt="Tarifs tuk-tuks Lio aéroport El Nido" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_9649-768x1024.jpg" alt="Hôtel El Nido Bulskamp Inn" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>À peine sorties de l’hôtel, nous nous rendons rapidement compte, qu’effectivement, <strong>El Nido est très touristique ! </strong>Le centre ville est rempli d’auberges de jeunesses, de bars, de restaurants, d’agences de voyages, de touristes de toutes nationalités et de jeunes imbibés, cocktails à la main.</p>
            <p>On vous avoue que là, avec les heures de vols dans les pattes et le jet lag, on n’est pas trop dans l’ambiance. Après un petit tour, nous tombons sur le <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJG0YlpC9VtjMRcEXtqF5CSwk" target="_blank" className="article-link article-resto-link-desktop">Wilnag's Resto</a><a href="https://maps.app.goo.gl/RL3Eg6eyn1xsazbX9" target="_blank" className="article-link article-resto-link-mobile">Wilnag's Resto</a></strong>, sympa pour grignoter un peu.</p>
            <p>Il est temps de rentrer se doucher et se coucher, histoire d’être en forme pour demain, notre vraie première journée !</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 2</span>
              <h3>À la découverte d’El Nido &amp; ses alentours</h3>
            </div>
            <h4>⧐ Centre ville d'El Nido</h4>
            <p>Après une bonne nuit de sommeil et un bon p'tit dej’ à l’hôtel, nous partons découvrir El Nido de jour.</p>
            <p>Au programme, balade dans la ville et découverte de <strong>la plage principale. Cette dernière est plutôt jolie mais déconseillée à la baignade</strong> à cause de l’huile provenant des bateaux qui pollue ce petit coin de paradis.</p>
            <p>Après avoir fait un peu le tour du centre ville, nous décidons de louer un scooter pour vadrouiller tranquillement dans les alentours.</p>
            <p>Louer un scooter à El Nido nous revient <strong>500 Php (8,50 €)</strong> la journée. Pour info, le litre d’essence est à environ <strong>1,20 €</strong>. <strong>Si vous êtes à l’aise pour conduire un 2 roues, alors n’hésitez pas, c’est vraiment l’idéal.</strong> Sinon, vous pouvez toujours vous déplacer en tuk-tuk.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9679_jpg-1024x768.jpg" alt="El Nido City Palawan" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9671_jpg-1-1024x768.jpg" alt="El Nido Beach Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9676-1024x768.jpg" alt="El Nido Beach Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <h4>⧐ Vanilla beach et Las Cabanas</h4>
            <p>Plus au sud, direction Vanilla beach et Las Cabanas qui se trouvent à moins de 10 minutes du centre d'El Nido. On peut se garer facilement aux abords du centre commercial, à côté de notre cher ami Ronald ! De là, <strong>suivez l’allée de boutiques qui descend jusqu’à la plage. </strong></p>
            <p>Vous arriverez sur une grande plage de sable blanc bordée de cocotiers. L’endroit est relativement bien fréquenté. En même temps, il y a pas mal d’hôtels, de restaurants et de bars. On se laisse tenter par un petit fish and chips, quasiment les pieds dans l’eau.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9741_jpg-768x1024.jpg" alt="Las Cabanas Beach El Nido Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9721_jpg-1024x768.jpg" alt="Las Cabanas El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9769_jpg-768x1024.jpeg" alt="Las Cabanas El Nido Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Une fois le ventre bien rempli, <strong>nous longeons la plage sur la gauche jusqu’à Las Cabanas.</strong> Nous nous installons après la presqu’île… Petite sieste et bronzette sur la plage s’imposent. D’ailleurs, pensez à mettre de la crème solaire régulièrement, on brûle tellement vite aux Philippines !</p>
            <p>Pour ceux que ça tente, <strong>il y a une zipline, une tyrolienne qui vous permet de voler jusqu’à la petite île en face.</strong></p>
            <p>Après avoir profité de la plage et d’une baignade dans une eau à 28 degrés, nous reprenons le scooter.</p>
            <h4>⧐ Corong Corong Beach</h4>
            <p>Nous revenons un peu sur nos pas pour nous rendre à Corong Corong Beach. C'est apparemment <strong>le meilleur spot pour assister aux couchers de soleil,</strong> cette plage étant orientée plein Ouest. Là aussi, si vous voulez vous poser tranquillement pour admirer le spectacle, vous avez le choix…</p>
            <p>Nous nous installons au <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJ54oOpLJVtjMRRxBoct3AOSM" target="_blank" className="article-link article-resto-link-desktop">Sip Sunset Lounge &amp; Bar</a><a href="https://maps.app.goo.gl/Pfs4jgoXEmQcRxgW6" target="_blank" className="article-link article-resto-link-mobile">Sip Sunset Lounge &amp; Bar</a></strong>. Cet endroit est tout simplement incroyable !</p>
            <p>Le patron, un français, fait tout pour qu’on s’y sente bien. La déco est jolie, la musique sympa et les cocktails parfaits ! Que demander de plus ? Vous pouvez également manger sur place mais pensez à réserver car l’endroit est très prisé. Le petit plus, la balançoire les pieds dans l’eau pour faire de belles photos du sunset. On ne nous avait pas menti, le coucher de soleil était incroyable !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9827_jpg-768x1024.jpg" alt="Corong Coron Sip Sunset Lounge &amp; Bar El Nido" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0251_jpg-1-768x1024.jpg" alt="Corong Coron Sip Sunset Lounge &amp; Bar El Nido Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 3</span>
              <h3>Island hopping à El Nido</h3>
            </div>
            <p>C’est la journée qu’on attendait avec impatience. Si vous trouvez les plages d’El Nido jolies, sachez que <strong>les plus belles se trouvent sur ses îles et sont donc accessibles uniquement en bateau. </strong></p>
            <p>L’Island hopping est l’attraction phare d’El Nido. Vous ne pouvez pas venir ici sans faire une excursion.</p>
            <p><strong>Les agences proposent 4 circuits, A, B, C et D,</strong> avec chacun leur parcours et points d’intérêts. <strong>Les tours les plus prisés sont généralement le A et le C. </strong></p>
            <p>Maintenant, il faut faire un choix... Nous avons qu’une journée devant nous et nous souhaitons voir le maximum d’endroits !</p>
            <h4>⧐ Quel Island hopping choisir ?</h4>
            <p>Vous avez la possibilité d’embarquer à bord d’une <strong>bangka, c’est le bateau traditionnel. Il n’est pas très rapide et peut transporter jusqu’à 25 personnes. </strong>Pour les excursions, <strong>les bateaux partent généralement à 9 h</strong> et vous emmèneront faire le tour que vous aurez choisi. Selon le tour A, B, C ou D, comptez entre <strong>1200 Php (21,50 €)</strong> et <strong>1600 Php (27 €)</strong> par personne, repas compris.</p>
            <p>Si comme nous, vous n'avez qu'une journée et que vous voulez éviter la foule et les embouteillages de bateaux, <strong>le meilleur choix est le speed boat.</strong> Les speed boats ne suivent pas les bangkas, donc on ne se retrouve pas tous au même endroit, au même moment. Et surtout, on est <strong>seulement 8 sur le bateau,</strong> c'est quand même plus agréable que de se retrouver à 25 ! Le tour n'est pas vraiment défini, le capitaine s'adapte en fonction de la météo, du vent et du monde.</p>

            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Si vous hésitez entre bangka et speed boat : on vous recommande clairement le speed boat ! Pensez aussi à prendre un sac waterproof, des chaussures d'eau et de la crème solaire.</p></div>
            </div>
            <h4>⧐ Island hopping avec La Pêcheuse</h4>
            <p>Nous avons choisi <strong><a href="https://www.lapecheuse.com/el-nido-tours" target="_blank" rel="noopener noreferrer" className="article-link">La Pêcheuse</a></strong>. Nous les avons contactés via WhatsApp pour réserver notre place sur le bateau : +63 961 180 2992. Un acompte vous est demandé, le reste étant à payer avant d’embarquer. Sachez qu’il y a également une taxe d’éco-tourisme de <strong>400 Php (6,80 €)</strong> par personne à payer, valable 10 jours.</p>
            <p>Comptez <strong>3000 Php (51 €)</strong> par personne, repas compris pour la journée d'Island hopping.</p>
            <p><strong>Le départ se fait depuis la plage de Corong Corong,</strong> en face de l'agence. Ils nous donnent <strong>RDV à 9 h</strong> pour un départ à 9 h 30.</p>
            <p>À nous l’archipel de Bacuit !</p>
            <h4>⧐ Matinloc Island</h4>
            <p>Notre 1er stop se fait sur Matinloc Island. Notre speed boat nous débarque à <strong>Palilo Beach.</strong> Pas d’autre bateau, nous sommes seuls sur cette petite plage paradisiaque.</p>
            <p>Là, on se sent vraiment transportées dans un fond d’écran d’ordinateur !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9931-1024x768.jpg" alt="Matinloc Island Palilo Beach Island Hopping El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9921_jpg-768x1024.jpg" alt="Matinloc Island Palilo Beach Island Hopping El Nido Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Secret Beach</h4>
            <p>Après une trentaine de minutes, nous repartons direction la Secret Beach. Comme son nom l’indique, elle est secrètement cachée derrière des falaises de calcaire. <strong>Pour y accéder, il faut nager et passer par un petit passage, comme par une grotte.</strong></p>
            <p>Une anecdote sur ce moment… Rapidement après avoir sauté à l’eau, <strong>nous ressentons des picotements désagréables partout sur le corps. </strong>Plutôt flippant quand on ne s’y attend pas !</p>

            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>À la Secret Beach (et parfois ailleurs), vous pouvez croiser du plancton urticant, invisible à l'œil. Ça picote sur le coup et peut laisser quelques petits boutons, mais sauf allergie, ça disparaît vite. Pas de panique !</p></div>
            </div>
            <p>Arrivées à la Secret Beach, nous découvrons une petite plage enclavée dans les falaises. L’endroit est très joli, mais pour le coup, il y a <strong>énormément de monde sur ce spot. </strong></p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2670-1-1024x768.jpg" alt="Secret Beach Island Hopping El Nido Palawan" className="article-img-full" loading="lazy" />
            <h4>⧐ Tapiutan Island</h4>
            <p>Nous mettons ensuite le cap vers le Nord de Tapiutan Island. <strong>C'est l’île la plus éloignée de l’archipel. </strong>Pas de nom pour cette plage, mais c’est <strong>celle qui se situe sous Lad-Ay,</strong> au niveau de la baie.</p>
            <p>Une belle et longue plage, deux cabanes et un habitant qui confectionne un filet de pêche. Nous nous arrêtons environ 1 h 30 car c’est là que nous allons manger.</p>
            <p>Pas de bateau à l’horizon, nous avons la plage rien que pour nous.</p>
            <p>Pour la petite histoire, c’est sur cette plage qu’a été tournée l’émission Survivor America en 2012. Sur certains troncs d’arbres, tout à droite de la plage, on peut y voir des prénoms gravés, recouverts aujourd’hui de mousse végétale.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_9967-1-1024x768.jpg" alt="Tapiutan Island Hopping El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_20230203_130656_658-1-768x1024.jpeg" alt="Tapiutan Love Island Hopping El Nido Palawan Philippines" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2576-1024x768.jpg" alt="Tapiutan Island Love El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2573-1-768x1024.jpg" alt="Tapiutan Island Hopping Survivor El Nido Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0053-2-1024x768.jpg" alt="Tapiutan Island Hopping El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Le repas est copieux et il y en a pour tous les goûts : poisson, crevettes, moules, poulet, porc, riz, nouilles, légumes marinés, crudités et fruits. Un jerrican d’eau filtrée est à disposition.</p>
            <p>Derrière l’une des cabanes, on découvre une baignoire dans laquelle il y des bébés tortues !</p>
            <p>Les œufs ont été trouvés sur la plage et mis en sécurité. Les bébés tortues seront relâchés à leurs 3 mois.</p>
            <p>Après un moment très agréable et apaisant passé sur cette plage, nous reprenons la mer, direction le 4ème spot.</p>
            <h4>⧐ Cadlao Island</h4>
            <p>Nous arrivons sur l’île de Cadlao, au <strong>Cadlao Lagoon</strong> plus exactement. <strong>Le bateau s’approche au maximum mais ne peut pas entrer dans le lagon.</strong> Pas de problème, tout est prévu pour les touristes !</p>
            <p>Un homme arrive en canoë et nous propose d’en louer un pour <strong>300 Php (5,15 €)</strong>. Bon, c’était pas vraiment prévu, mais on y est, du coup on se laisse tenter.</p>
            <p>Alors c’est parti, petite balade digestive en canoë ! Nous entrons dans la baie. Le lagon est magnifique. Plus on s’enfonce, plus l’eau est turquoise. La balade est plutôt agréable, surtout pour Laurie qui, comme à son habitude dans ces moments-là, a toujours les mains trop occupées pour pagayer !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0087-1024x768.jpg" alt="Cadlao Lagoon Canoë Island Hopping El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2591-768x1024.jpg" alt="Cadlao Lagoon Canoë Island Hopping El Nido Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Après avoir fait tranquillement le tour, on retourne au bateau.</p>
            <p>Un autre homme sorti de nulle part s’avance en canoë et propose des boissons fraîches. Franchement, avec la chaleur qu’il fait, ça tombe à pic !</p>
            <h4>⧐ Serenity Beach</h4>
            <p>Notre prochain stop, non loin du lagon, est Serenity Beach. Le nom parle de lui-même. C’est le genre d’endroit paradisiaque auquel on pense quand on s’imagine perdu au bout du monde.</p>
            <p>Il y a deux cabanes en bois sur la plage, permettant à ceux qui veulent vivre l’expérience Robinson de s’y abriter si besoin.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0147-1024x768.jpg" alt="Serenity Beach Island Hopping El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_0124-1024x768.jpg" alt="Serenity Beach Island Hopping El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>La fin de cette belle journée approche. Nous prenons le chemin du retour, direction Corong Corong.</p>
            <p>Mais avant de rentrer, le bateau nous débarque sur deux dernières plages de Palawan, sur la pointe Ouest d’El Nido. Elles sont accessibles seulement par la mer.</p>
            <h4>⧐ Papaya Beach</h4>
            <p>En arrivant, on voit tout de suite qu’il y a déjà pas mal de bateaux stationnés au bord de l’eau. <strong>Qui dit beaucoup de bateaux, dit beaucoup de monde.</strong></p>
            <p>La plage est assez grande et jolie. Il y a des pneus en guise de balançoires accrochés à de grands arbres. Il n’en faut pas plus pour faire le bonheur de Laurie !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2625-1-1024x768.jpg" alt="Papaya Beach Island Hopping El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0188_jpg-768x1024.jpg" alt="Papaya Beach Island Hopping El Nido Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Derrière la plage, on croit comprendre qu’il y a un genre de campement avec des tentes.</p>
            <p>Dommage que les gens ne prennent pas plus soin de l’endroit et qu’il y ait autant de détritus en plastique.</p>
            <h4>⧐ Lapus lapus Beach</h4>
            <p>Dernier arrêt de la journée à Lapus Lapus Beach. Une belle plage, mais ce qui a retenu notre attention ce sont les bébés chiens qui étaient là. Tellement mignons…Petite pause câlins et grosses pensées pour notre gros chien d'amour Aladdin.</p>
            <p><strong>17 h 30, nous rejoignons le rivage.</strong> Parfait timing pour assister au magnifique coucher de soleil sur plage de Corong Corong et clôturer cette belle journée !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_2654-1024x768.jpg" alt="Lapus Lapus Beach El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0210-1-1024x768.jpg" alt="Dogs Lapus Lapus Beach Island Hopping El Nido Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 4</span>
              <h3>El Nido, c’est déjà fini !</h3>
            </div>
            <p>Après une bonne nuit de repos, nous avons pris le temps de savourer un copieux petit déjeuner occidental à l’hôtel. Il nous reste plus que quelques heures avant le départ pour une nouvelle destination. Nous préparons nos sacs à dos et libérons notre chambre. <strong>Généralement, les hôtels nous permettent de garder nos bagages.</strong></p>
            <p>Nous en profitons donc pour aller faire un dernier petit tour dans El Nido. On en aura profité jusqu’au bout !</p>
            <p>On chope un tuk-tuk et <strong>direction l’aéroport. Nous arrivons 2 h avant comme recommandé,</strong> ce qui nous laisse le temps de grignoter un bout avant de prendre l’avion. Honnêtement, 2 h avant c’est large !</p>
            <p>Pour info, <strong>les briquets sont interdits en soute et dans les bagages à main. Si vous le gardez sur vous, ça peut passer…</strong> Pas très logique, mais bon !</p>
          </section>

          <section id="coron" className="article-section">
            <div className="article-day-header">
              <h2>Coron &amp; les îles Calamian</h2>
            </div>
            <p>Coron fait partie de la province de Palawan. <strong>Elle est la plus grande des îles Calamian.</strong></p>
            <p>Avant tout, pour éviter toute confusion, <strong>Coron est en fait le nom d’une ville de l’île de Busuanga. Coron Island est une petite île située juste en face. </strong>C’est l’une des îles que l’on visite lors des excursions. Il n’y a pas d’habitation, pas de restaurant. Les seuls habitants sont quelques locaux de tribus ancestrales qui dorment sur place pour préserver leur coin de paradis.</p>
            <p>Donc quand on dit :  « Hey, je vais à Coron ! », alors on fait référence à la ville de Coron située sur l’île de Busuanga. Mais en réalité, nous venons tous à Coron pour découvrir les îles aux alentours, et il y en a 98 en tout !</p>
            <p><strong>Les îles autour de Coron sont l’une des destinations les plus prisées des Philippines. </strong>L’endroit est réputé pour la plongée et le snorkeling dans le monde entier, notamment pour les épaves de la 2ème guerre mondiale qui y sont immergées. Mais c’est aussi ses lagons aux couleurs incroyables, ses lacs et ses îles paradisiaques qui attirent le monde.</p>
            <p><strong>La quasi totalité des hébergements se trouvent à Coron City sur Busuanga Island.</strong> C’est finalement ce qu'il y a de plus pratique, car les départs pour les excursions se font du port de Coron.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_0884_jpg-2-768x1024.jpg" alt="AirSwift Manille El Nido Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_0865-768x1024.jpg" alt="" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Se rendre à Coron depuis El Nido</h4>
            <p>Si comme nous, vous venez d’El Nido, vous avez <strong>deux</strong> possibilités pour v<strong>ous rendre à Coron.</strong></p>
            <p><strong>En ferry, il faut compter 4 h à 6 h</strong> selon l’état de la mer et vous serez débarqués au port de Coron City.</p>
            <p><strong>En avion, le trajet dure 40 minutes maximum </strong>et la vue par le hublot est superbe ! Il paraît que si la mer est calme, la traversée en bateau est sympa, mais on a choisi l’option la plus rapide pour avoir le plus de temps possible sur place.</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 1</span>
              <h3>Arrivée à Coron City</h3>
            </div>
            <p>Nous sommes arrivées à l’aéroport en fin d’après midi. Pour sortir, il y a une taxe à payer de <strong>250 Php (3,98 €)</strong> par personne.</p>
            <p><strong>L’aéroport se trouve à une trentaine de minutes du centre ville. </strong>Pour s'y rendre, il nous faut prendre un van. Pas le choix, il n’y a que ça. Les transporteurs viennent à notre rencontre pour nous demander le nom de notre logement.</p>
            <p><strong>Nous sommes répartis dans les vans en fonction de notre destination. </strong>Les prix sont fixes et corrects : <strong>250 Php (3,98 €)</strong> par personne pour rejoindre le centre ville.</p>
            <p>On ne va pas vous mentir, en voyant le paysage défiler sur le trajet en direction de l’hôtel, on ne s’est pas dit :  « wouah, cette île est magnifique ! ». Non, mais nous le savions... <strong>Il n’y a pas grand chose à faire sur l’île. </strong>Si nous sommes là, c’est clairement pour les Island hoppings.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_0861-2-1024x768.jpg" alt="Aéroport Coron Busuanga" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_0860-768x1024.jpg" alt="Coron City Busuanga Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Nous arrivons à l’<strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJOeqtRyocujMRJCirJGdi51g" target="_blank" className="article-link article-resto-link-desktop">Acacia Garden Inn</a><a href="https://maps.app.goo.gl/16mQ61vZVP7ZDpaC9" target="_blank" className="article-link article-resto-link-mobile">Acacia Garden Inn</a></strong>. C’est ici que nous allons rester 3 nuits. Comme dans chaque hôtel, vous avez la possibilité de booker directement avec eux les différents Island hoppings à des prix très corrects. Le transport de l’hôtel au port est compris dans le tarif.</p>
            <p>Sacs déposés, excursions réservées, on part à la recherche d’un endroit sympa où manger… On tombe sur le restaurant d'un hôtel, le <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJEw1dNMEdujMRiwZeRj2qPFw" target="_blank" className="article-link article-resto-link-desktop">Full Lotus</a><a href="https://maps.app.goo.gl/fbkCADFgbrKEWfuDA" target="_blank" className="article-link article-resto-link-mobile">Full Lotus</a></strong>, qui nous fait de l'oeil. Pour notre 1er dîner à Coron City, on a donc trouvé l’endroit idéal, et à seulement 5 minutes à pied de notre hébergement !</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 2</span>
              <h3>Island hopping sur les îles Calamian</h3>
            </div>
            <p><strong>Comme à El Nido, ici aussi l’Island hopping est l’attraction phare. </strong>Les agences proposent <strong>6 tours différents.</strong> Certains spots peuvent se retrouver sur plusieurs tours. Le plus simple est de repérer les endroits que vous souhaitez voir et de choisir le tour en fonction. Les tarifs varient entre <strong>900 Php (15 €)</strong> et <strong>1600 Php (27 €)</strong> par personne selon le tour.</p>
            <p><strong>Pas de speed boat à Coron, c’est bangka pour tout le monde. </strong>Les plus grandes peuvent embarquer une bonne quinzaine de personnes.</p>
            <p>Vous avez également la possibilité de le faire en tour privé. Comptez en moyenne <strong>3000 Php (50 €)</strong> en plus par personne.</p>
            <h4>⧐ Beach Escapade Tour</h4>
            <p>Pour cette 1ère journée d’excursion, nous avons choisi le <strong>Beach Escapade Tour.</strong> De tous les tours, c’est le seul qui propose les plages qu’on avait repérées. Clairement, <strong>3 spots de rêve ! </strong>Partir découvrir des plages paradisiaques en mode farniente, voilà le planning de la journée… Trois plages dans la journée cela paraît peu, mais en réalité,<strong> il y a pas mal de route (de miles) pour se rendre d'une île à l'autre. </strong>Nous avons payé <strong>1500 Php (25 €)</strong> par personne, repas compris.</p>
            <p>Petit déjeuner avalé, nous attendons <strong>le van qui passe nous récupérer entre 8 h et 8 h 30.</strong></p>
            <p>Direction le port. Le van s’arrête en route pour récupérer d’autres personnes. Arrivés sur place, nous sommes répartis sur les bateaux. <strong>Nous sommes une dizaine sur le nôtre. </strong>Des Philippins vendent des bouteilles d’eau, des masques, des tubas, de la crème solaire…</p>
            <p>D'ailleurs, petite anecdote : nous avons croisé un couple qui a acheté une crème solaire à l'une de ces personnes. Ils se sont tartinés toute la journée… et ont fini brûlé comme jamais !</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Méfiez-vous des cosmétiques vendus à la sauvette sur les bateaux ou les plages : on ne sait pas toujours ce qu'ils contiennent. Achetez votre protection solaire avant de partir et ré-appliquez très régulièrement, on brûle vite ici !</p></div>
            </div>
            <h4>⧐ Bulalacao Island</h4>
            <p><strong>Nous quittons le port vers 9 h 30, direction Coco Beach</strong> à Bulalacao Island. Après <strong>1 h 30 de traversée,</strong> nous arrivons aux abords de ce spot.</p>
            <p>La balade est plutôt sympa, et on a de la chance, la mer est calme. Quand on arrive, c’est un gros « wahooo » ! On ne nous a pas menti, c’est vraiment paradisiaque !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_0374-1024x768.jpg" alt="Coco Beach Bulalacao Island Coron Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0403_jpg-768x1024.jpg" alt="Coco Beach Island Hopping Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/DJI_20230205_151613_407-768x1024.jpg" alt="Love Palawan Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0394_jpg-1024x768.jpg" alt="Coco Beach Bulalacao Island Coron" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p><strong>La plage est assez grande et il n’y a personne.</strong> L’endroit est tout de même aménagé pour accueillir les gens de passage. Il y a un espace avec des hamacs et des sortes de cabanes en bois pour s’installer à l’ombre. Nous laissons nos affaires et partons vadrouiller sur la plage.</p>
            <p>L’eau est magnifique, plus belle qu’à El Nido… Mais ce n’est que notre avis !</p>





            <p><strong>Un déjeuner au top </strong>avec viande, poisson, légumes, pâtes, riz et fruits. Après le repas, nous passons encore un peu de temps sur cette plage avant de mettre le cap sur une petite île inhabitée...</p>
            <h4>⧐ Ditaytayan Island</h4>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0506-1-1024x768.jpg" alt="Ditaytayan Beach Banc de sable Coron Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0477_jpg-1024x768.jpg" alt="Ditaytayan Beach Banc de sable Coron" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Nous sommes débarquées sur la pointe de <strong>Ditaytayan Beach.</strong> <strong>Cette petite plage est en fait une langue de sable.</strong></p>
            <p>Le paysage est juste incroyable : un banc de sable ultra fin et blanc, avec de part et d’autre, une mer cristalline à couper le souffle !</p>
            <p>Si on doit vraiment faire les difficiles, la petite ombre au tableau, ce sont les quelques nuages qui couvrent partiellement le ciel. Les couleurs sont déjà magnifiques, mais sous un ciel immaculé, ça doit être encore plus incroyable ! Il y a également un peu trop de vent… On laisse tomber l’idée de faire voler le drone.</p>
            <h4>⧐ Malcapuya Island</h4>
            <p>Pour le 3ème et dernier spot de la journée, direction Malcapuya Island. Une fois débarquées, <strong>on doit traverser l’île pour rejoindre la plage. </strong>En réalité, il y a 3 minutes seulement de marche.</p>
            <p><strong>C’est la plus petite île de la journée, mais c’est celle où l’on croise le plus de monde ! </strong>En effet, cette très jolie plage attire autant les touristes que les familles Philippines.</p>
            <p>Entre baignades et snorkeling dans une mer bleue transparente, dégustation de cocos et farniente dans le sable blanc poudreux, il faut dire qu'il y a tout pour y passer la journée. <strong>On a même nagé avec des tortues !</strong></p>
            <p>Après 1 h passée sur place, il est temps de quitter ce petit paradis. Dans ce genre d’endroit, le temps passe malheureusement beaucoup trop vite !</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_9813-1-1024x768.jpg" alt="Malcapuya Beach Island Hopping Coron Palawan" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/10/IMG_9812-1024x768.jpg" alt="Malcapuya Beach Island Hopping Coron" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0519-768x1024.jpg" alt="Coconuts Malcapuya Island Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Il est malheureusement temps de rejoindre Busuanga Island, le port de Coron. Nous avons passé une journée inoubliable. Il y avait <strong>comme un petit air des Maldives ou de la Polynésie</strong> dans cette journée.</p>
            <p>Demain sera encore une journée bien remplie. On ne va pas veiller bien tard, on est déjà KO.</p>
            <p>Le soir, nous mangeons au <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJy0YY4zEcujMRdaHOEjMHWCQ" target="_blank" className="article-link article-resto-link-desktop">Santino's Grill</a><a href="https://maps.app.goo.gl/AmgKimmJNgzVeWqB9" target="_blank" className="article-link article-resto-link-mobile">Santino's Grill</a></strong>, un joli restaurant tout en bois et bambou, à seulement 2 minutes à pied de l'hôtel. Leur spécialité est la viande. On y a très bien mangé, les plats étaient copieux, et le rapport qualité / prix imbattable !</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>À Coron City comme à El Nido, les bonnes adresses se remplissent vite : pensez à réserver si vous voulez dîner au Santino's Grill ou au Sip Sunset Lounge &amp; Bar. Ça vous évitera la déception une fois sur place.</p></div>
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 3</span>
              <h3>Nouvelle journée, nouvel Island hopping !</h3>
            </div>
            <p>Pour notre 2ème journée d’excursion, nous avons choisi de faire le <strong>Ultimate Highlights Tour</strong> car il est assez varié et complet. Il comprend surtout les spots que nous souhaitons voir.</p>
            <p>Comme hier, tout est organisé. P'tit dej’ fini, le van vient nous récupérer à l’hôtel. <strong>Le départ du port de Coron se fait vers 9 h. </strong>Il faut compter <strong>1500 Php (25 €)</strong> par personne pour ce tour.</p>
            <h4>⧐ Kayangan Lake</h4>
            <p>Notre 1ère destination de la journée se trouve sur la fameuse <strong>Coron Island.</strong> Ici, nous retrouvons les impressionnantes falaises semblables à celles de l’archipel de Bacuit.</p>
            <p>On commence par le Kayangan Lake, l’<strong>un des spots incontournables de Coron. </strong></p>
            <p>Le bateau entre dans la baie, et on ne sait plus où regarder tellement le paysage qui nous entoure est impressionnant. Quand nous arrivons près du ponton, il y a déjà beaucoup de bateaux. <strong>On est alors débarquées à l’arrière d’un bateau qui lui-même est accosté au ponton.</strong></p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0634-1024x768.jpg" alt="Kayangan Lake Bangka Island Hopping Coron Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3858-768x1024.jpg" alt="Kayangan Lake Island Hopping Coron Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p><strong>L’intérêt principal de ce lieu n’est pas le lac mais plutôt le point de vue sur la baie.</strong> Pour le rejoindre, nous empruntons un escalier aménagé à la queue leu-leu…</p>
            <p>Une fois au sommet, il y a <strong>une longue file d’attente pour accéder au spot.</strong> On décide du coup d’y revenir plus tard.</p>
            <p><strong>De l'autre côté se trouve le lac.</strong> Nous continuons le chemin qui descend pour le rejoindre. L'eau est très belle. On se laisse tenter par un petit plouf dans le lac.</p>
            <p>Pourtant, il n’y a rien de dangereux à partir du moment où vous savez nager. Nous rebroussons chemin et allons faire la queue pour la photo.</p>
            <p>On vous avoue qu'à ce moment précis, on se dit : « vraiment, on est en train de faire la queue pour une photo là ??! ».</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Si vous voulez la photo au point de vue, faites-la en arrivant — au retour, le temps peut être compté ! Un panneau limite d’ailleurs à 3 photos par personne. Patience en tout cas… la vue en vaut clairement la peine !</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0607_jpg-1024x768.jpg" alt="Kayangan Lake Island Hopping Coron Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0613-2-768x1024.jpg" alt="Kayangan Lake Island Hopping Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0621-1024x768.jpg" alt="Kayangan Lake View Island Hopping Coron Palawan" className="article-img-full" loading="lazy" />
            <h4>⧐ Vivian Beach</h4>
            <p>Une petite plage paradisiaque. Oui, encore une ! Désolées pour les répétitions, mais il n’y a pas d’autre mot ! <strong>Le bateau jette l'ancre à plusieurs mètres du bord. </strong></p>
            <p><strong>Pour rejoindre la plage, on se jette à l’eau.</strong> Clairement, on se croirait dans une piscine avec des poissons. Des petits poissons certes, mais avec des petites dents ! Vous vous êtes déjà fait mordre par un poisson ? On vous raconte notre anecdote...</p>
            <p>Nous sommes en train de nager pour rejoindre la plage. En chemin, Amélie se retrouve face à un poisson qui lui fonce dessus et lui chope le mollet… Bon, il ne lui a pas arraché la jambe non plus, on vous rassure ! Sa bouche devait faire un bon centimètre de diamètre. Ok c’était pas un requin, mais ça surprend ! Ce qui nous rassure, c’est qu’elle n’est pas la seule à s’être fait mordre en rejoignant le bord. Un peu flippant sur le coup quand même !</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0654-768x1024.jpg" alt="Vivian Beach Island Hopping Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0700-768x1024.jpg" alt="Poisson Food Island Hopping Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0678-768x1024.jpg" alt="Food Buffet Island Hopping Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0680-1-768x1024.jpg" alt="Island Hopping Vivian Beach Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0696-1024x768.jpg" alt="Vivian Beach Island Hopping Coron Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Cette plage, enclavée entre les falaises, est <strong>la plus petite plage sur laquelle nous ayons posé un pied jusqu'à maintenant. </strong>C’est ici que nous allons manger.</p>
            <p>Et au menu, dans ce grand buffet bien garni, ces fameux poissons mangeurs de mollets ! Amélie ne mange pas de poisson, mais Laurie a pris plaisir à la venger !</p>
            <h4>⧐ Le Twin Lagoon</h4>
            <p>Cap sur le fameux Twin lagoon ! La bangka s’engouffre au milieu des falaises, le paysage est incroyable. <strong>Nous amarrons au niveau du premier lagon.</strong> L’eau est limpide, vert émeraude et bleu turquoise selon les endroits. <strong>Ici, le gilet de sauvetage est aussi obligatoire.</strong></p>
            <p>Selon le niveau de la mer, <strong>l’accès au deuxième lagon</strong> se fait soit par au-dessus, en passant par un escalier en bois, soit par en-dessous, à la nage sous la roche. Et il y a juste de quoi laisser la tête hors de l'eau !</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3088_jpg-768x1024.jpg" alt="Twin Lagoon Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0580-1024x768.jpg" alt="Coco Beach View Palawan Coron" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/GPTempDownload-10-768x1024.jpg" alt="Twin Lagoon Love Coron Palawan" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Une fois de l'autre côté, on se retrouve entre d'immenses montagnes et falaises. C'est grandiose !</p>
            <p>N’hésitez pas à <strong>nager un peu plus loin sur la gauche jusqu’à avoir pied. </strong>C’est là que l’eau est la plus belle.</p>
            <p><strong>Ce lagon a la particularité de mélanger des courants d'eau chaude et d’eau froide,</strong> et clairement cela se ressent.</p>

            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À ne pas manquer</strong><p>Le Twin Lagoon a été notre plus grosse claque visuelle du séjour : les falaises, l'eau qui mêle courants chauds et froids, le décor irréel… À ne rater sous aucun prétexte !</p></div>
            </div>
            <h4>⧐ Malwawey reef</h4>
            <p>Après un superbe moment passé au Twin lagoon, c’est parti pour Malwawey reef, aussi appelé la Isla de Coral. <strong>L’île de corail immergée se trouve au niveau d’une toute petite île,</strong> non loin de Coron Island.</p>
            <p>Le bateau nous arrête pour une rapide session de snorkeling. Nous avons pu voir de <strong>jolis coraux vivants et quelques poissons. </strong></p>
            <h4>⧐ Skeleton Wreck</h4>
            <p>Vous aurez la possibilité de <strong>rejoindre le prochain spot à la nage,</strong> le Skeleton Wreck. Il s’agit d’<strong>une épave d’un bateau japonais long de 25 mètres.</strong> Ce dernier a été touché par une frappe aérienne américaine lors de la seconde guerre mondiale. Ce navire <strong>repose à 5 mètres de profondeur,</strong> non loin d’une petite plage, ce qui le rend facilement accessible.</p>
            <p>Cependant, ne vous attendez pas à trouver un bateau de 25 mètres posé au fond de l’eau... <strong>En réalité, il ne reste plus grand chose,</strong> et l’eau ici est assez trouble. Pour les vrais fans de plongée et d’épaves, vous risquez d’être un peu déçus car vous ne verrez pas grand chose. Le Skeleton, soit le squelette, porte bien son nom en tout cas !</p>
            <h4>⧐ Cyc Beach</h4>
            <p>Nous terminons cet Ultimate Highlights Tour par la Cyc Beach. Une belle plage (encore une oui !) <strong>sur une petite île près de Coron Island.</strong> Cette île est gratuite, du coup <strong>elle attire beaucoup de familles Philippines.</strong> De plus, l’eau est peu profonde, c’est parfait pour les enfants. Donc vous l’aurez compris, nous sommes loin d’être seules.</p>
            <p>Ici aussi c’est un <strong>bon spot pour nager au milieu des poissons, </strong>alors certains se laissent tenter par du snorkeling pour terminer cette journée. Pour nous, assez de nage pour aujourd’hui, on profite de la plage et on s’aventure dans la mangrove.</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3152-1024x768.jpg" alt="Cyc Beach Mangrove Coron" className="article-img-full" loading="lazy" />
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0744-1024x768.jpg" alt="Cyc Beach Coron" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_3694-768x1024.jpeg" alt="Cyc Beach Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <p>Voilà, encore une journée de rêve qui s’achève. On est vraiment KO ce soir ! En même temps, c’était <strong>sportif comme journée</strong> pour des sportives du dimanche comme nous !</p>
            <p>Ce soir, nous irons encore manger au <strong><a href="https://www.google.com/maps/place/?q=place_id:ChIJy0YY4zEcujMRdaHOEjMHWCQ" target="_blank" className="article-link article-resto-link-desktop">Santino’s Grill</a><a href="https://maps.app.goo.gl/AmgKimmJNgzVeWqB9" target="_blank" className="article-link article-resto-link-mobile">Santino’s Grill</a></strong> tout près de l’hôtel, et au dodo ! De toute façon, il n’y a rien d’autre à faire dans le coin…</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 4</span>
              <h3>Dernière matinée à Coron City</h3>
            </div>
            <p>C’est déjà la fin de notre séjour à Coron. Mais histoire de profiter jusqu’au bout, après avoir préparé les sacs à dos et libéré la chambre tôt ce matin, <strong>direction Maquinit Hotspring. </strong></p>
            <p>La particularité de cet endroit est que c’est l'<strong>une des rares sources d'eau chaude et salée au monde.</strong></p>
            <h4>⧐ Maquinit Hotspring</h4>
            <p>Nous prenons un tuk-tuk pour nous y rendre. C’est <strong>à une quinzaine de minutes de notre hôtel. </strong>La route, ou plutôt <strong>le chemin, pour y accéder est assez chaotique. </strong></p>
            <p>Nous avons négocié avec notre chauffeur de tuk-tuk pour qu’il nous attende sur place, nous n’avons malheureusement pas vraiment le temps de perdre du temps…</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0797-768x1024.jpg" alt="Maquinit Hotspring Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0815_jpg-1024x768.jpg" alt="Maquinit Hotspring Coron" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>L'entrée est de <strong>250 Php (3,96 €)</strong> par personne. L'endroit est propre et bien entretenu. Il y a un grand bassin et un plus petit. L'eau, composée de 30% d'eau salée et 70% d'eau douce, est naturellement très chaude.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>La source d'eau chaude de Maquinit avoisine les 45 °C : il est déconseillé d'y rester immergé plus de 7 à 8 minutes. En plein soleil et par forte chaleur, c'est franchement plus agréable en fin de journée.</p></div>
            </div>
            <p>Nous ne nous sommes pas baignées entièrement, mais nous pouvons vous confirmer qu'elle est vraiment très chaude !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0819-1-1024x768.jpg" alt="Maquinit Hotspring Coron" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0809-768x1024.jpg" alt="Maquinit Hotspring Coron" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
            <h4>⧐ Direction l'aéroport de Manille</h4>
            <p>Bon bah voilà, le temps passe beaucoup trop vite, et le van passe nous récupérer à l’hôtel dans 1 h pour l’aéroport !</p>
            <p>Qui dit pas le temps, dit fast-food... C’est l’occasion de tester le McDo philippin. Oui, on l’avoue, on aime bien la malbouffe de temps en temps.</p>
            <p>Mais alors là, grosse surprise ! Des menus avec du riz et des spaghettis... sacrilège un peu quand même !</p>
            <p>Repas avalé, retour à l’hôtel pile à l’heure du rdv.</p>
            <p>Au revoir Coron…</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0590-1-1024x768.jpg" alt="Busuanga Coron Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/IMG_0895-768x1024.jpg" alt="Avion Manille" loading="lazy" style={{flex: '0.750', minWidth: 0}} />
            </div>
          </section>

          <section id="itineraire" className="article-section">
            <div className="article-day-header">
              <h2>Itinéraire de 3 semaines aux Philippines</h2>
            </div>
            <p>Si vous souhaitez découvrir notre <strong>itinéraire complet de 3 semaines</strong> à travers les Philippines et suivre toutes nos aventures, <strong>n&apos;hésitez pas à lire notre article…</strong> On vous partage tout !</p>
            <a href="/itineraire-Philippines-3-semaines-pour-decouvrir-la-perle-de-lorient" style={{display: 'block', margin: '24px 0'}}><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Les-Philippines-1024x819.jpg" alt="Les Philippines Blog" className="article-img-full" loading="lazy" /></a>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À lire aussi</strong><p><a href="/itineraire-Philippines-3-semaines-pour-decouvrir-la-perle-de-lorient" className="article-link">⋙ Itinéraire Philippines : 3 semaines pour découvrir la perle de l&apos;Orient !</a></p></div>
            </div>



          </section>

          <section className="article-comments-section">
            <CommentsList comments={[]} />
            <CommentForm
              articleTitle={"Palawan : Coron et El Nido, le joyau des Philippines"}
              articleUrl="https://mamzellesenvadrouille.com/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines"
            />
          </section>

          <NewsletterForm />

          {/* ARTICLES LIES */}
          <ArticlesLies currentSlug="palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines" />

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
