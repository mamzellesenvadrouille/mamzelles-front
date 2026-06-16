import type { Metadata } from 'next';
import './port-barton.css';
import Navbar from '../components/Navbar';
import AnchorScroll from '../components/AnchorScroll';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';

export const metadata: Metadata = {
  title: "Palawan : De Puerto Princesa à Port Barton, hors des sentiers battus | MamZelles en vadrouille",
  description: "Un mois à Palawan loin des foules : Puerto Princesa, Sabang et sa rivière souterraine, Port Barton, San Vicente et la paradisiaque Modessa Island. Notre carnet de voyage complet.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus' },
  openGraph: {
    title: "Palawan : De Puerto Princesa à Port Barton, hors des sentiers battus",
    description: "Un mois à Palawan loin des foules, de Puerto Princesa à la paradisiaque Modessa Island.",
    url: 'https://mamzellesenvadrouille.com/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/Puerto-Princesa-Port-Barton.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2025-03-14T19:11:45.000Z',
    authors: ['MamZelles en vadrouille'],
  },
};

export default function PalawanPortBartonPage() {
  return (
    <>
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* HERO */}
      <section className="hero hero-article" style={{ overflowX: 'hidden' }}>
        <Navbar activePage="blog" />
        <AnchorScroll />
        <img className="hero-bg" src="/Puerto-Princesa-Port-Barton.webp" alt="Palawan : Puerto Princesa, Port Barton et Modessa Island" style={{objectPosition: 'center 65%'}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Palawan<br /><em>De Puerto Princesa à Port Barton</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Un Palawan secret, loin des foules et des clichés.</p>
        </div>
      </section>

    </div>

      {/* BANDEAU EN BREF */}
      <div className="article-bref-bar">
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>3-4 semaines</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          <span>Nov. à mai</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"/></svg>
          <span>50-70€/j/pers.</span>
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
          <h2>Pourquoi nous avons adoré ce Palawan secret</h2>
        </div>
        <div className="article-cdcr-grid">
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre étape coup de cœur</span><span className="article-cdcr-value">→ Modessa Island</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le spot le plus incroyable</span><span className="article-cdcr-value">→ Le viewpoint de San Vicente</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le moment le plus magique</span><span className="article-cdcr-value">→ Le sunset à Port Barton</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">À tester<br className="tablet-only-br" /> sans hésiter</span><span className="article-cdcr-value">→ Le kayak jusqu&apos;à Coconut Beach</span></div>
        </div>
      </div>

      <div className="article-layout article-portbarton">
        <main className="article-main">

          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title">📌 Sommaire de l&apos;article</h2>
            <ol className="article-toc-list">
              <li><a href="#manille">📍 Arrivée à Manille</a></li>
              <li><a href="#puerto-princesa">📍 Puerto Princesa</a></li>
              <li><a href="#sabang">📍 Sabang &amp; sa rivière souterraine</a></li>
              <li><a href="#port-barton">📍 Port Barton</a></li>
              <li><a href="#san-vicente">📍 San Vicente</a></li>
              <li><a href="#retour-port-barton">📍 De retour à Port Barton</a></li>
              <li><a href="#roxas">📍 Roxas</a></li>
              <li><a href="#modessa">📍 Modessa Island</a></li>
              <li><a href="#au-revoir">📍 Bye bye Palawan</a></li>
            </ol>
          </nav>

          {/* INTRO */}
          <section className="article-section">
            <p className="article-intro">Embarquez pour Palawan, de Puerto Princesa à Port Barton, et plongez dans une aventure loin des foules touristiques !</p>
            <p>Après un premier voyage à travers les Philippines, nous avons choisi, pour notre deuxième séjour, de consacrer un mois entier à Palawan, cette île incroyable de la mer de Sulu, dans le Sud-ouest du pays.</p>
            <p>Très allongée, l'île s’étend sur 450 km de long et a une largeur moyenne de 50 km.</p>
            <p>De Puerto Princesa et son célèbre island hopping, à Sabang et sa rivière souterraine, en passant par San Vicente et Port Barton, pour finir en beauté sur la magnifique Modessa Island, nous vous racontons tout, étape par étape !</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2026/06/Port-barton.jpg" alt="Camping Palawan Port Barton" className="article-img-full" loading="lazy" />
            <p>Après un long voyage depuis Nice, en passant par Londres et Beijing (Chine), nous arrivons à Manille vers 22h. Nous avions presque oublié cette sensation quand on sort de l’avion… Chaleur + humidité, pas de doute, nous sommes bien aux Philippines. Récupération des sacs à dos et c’est parti !</p>
            <div className="article-day-header article-day-header-tight">
              <h3>Comment se rendre à Palawan ?</h3>
            </div>
            <p>Ne manquez pas notre autre article sur Palawan. Vous y trouverez des infos pratiques, notamment sur les aéroports et les transports à privilégier pour rejoindre facilement l’archipel.</p>
            <p>Partez ensuite à la découverte des merveilles d’El Nido et Coron, deux lieux exceptionnels aux panoramas à couper le souffle.</p>
            <a href="/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines" style={{display: 'block', margin: '24px 0'}}><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Palawan-1024x819.jpg" alt="Palawan Blog" className="article-img-full" loading="lazy" /></a>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À LIRE AUSSI</strong><p><a href="/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines" className="article-link">⋙ PALAWAN : Entre El Nido &amp; Coron, découvrez le joyau des Philippines !</a></p></div>
            </div>
          </section>

          <section id="manille" className="article-section">
            <div className="article-day-header">
              <h2>📍 Arrivée à MANILLE</h2>
            </div>
            <p>Nous avons pris un hôtel à 10 minutes de l’aéroport car notre prochain vol est le lendemain vers 13h. Pour 30€ la nuit, petit-déjeuner compris, l'<strong><a href="https://www.booking.com/hotel/ph/achievers-airport.fr.html?aid=318615&amp;label=New_French_FR_FR_21427170145-Q3I4aklQ%2AijetxxC7ZKyaAS217274679050%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=3063370&amp;dest_type=hotel&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1741629047&amp;srpvid=befc7d78f49100c5&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Achievers Airport Hotel</a></strong> est top. Si, comme nous, vous êtes juste de passage pour une nuit à Manille, nous vous recommandons vivement cet hôtel. Il est possible de vous arranger avec eux pour organiser les transferts aéroport &lt;—&gt; hôtel, qui sont gratuits.</p>
            <p>Demain, c'est donc direction Puerto Princesa, la capitale de Palawan. 300,000 habitants sur 2,381 km², c’est l’une des plus grandes villes des Philippines en termes de superficie.</p>
            <p>On a trop hâte de vraiment commencer notre voyage, et de découvrir cette 1ère ville de notre itinéraire !</p>
          </section>

          <section id="puerto-princesa" className="article-section">
            <div className="article-day-header">
              <h2>📍 PUERTO PRINCESA, la porte d'entrée de Palawan</h2>
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 1</span>
              <h3>De Manille à Puerto Princesa</h3>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0328-768x1024.jpg" alt="Aéroport Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0330_jpg-768x1024.jpg" alt="Tuk-tuk Palawan Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Après un vol rapide d’1h30, nous arrivons à Puerto Princesa. Pour le transfert aéroport / hôtel, nous utilisons l’application <strong>RIDE</strong> qui est l’équivalent de <strong>GRAB</strong> à Manille et à Cebu. Du coup, pas de surprise, le prix est juste et fixe.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Pour vos trajets en ville, téléchargez l'appli RIDE (l'équivalent local de GRAB) : les prix sont fixes et affichés à l'avance, fini les négociations à rallonge. On l'a utilisée partout à Puerto Princesa.</p></div>
            </div>
            <p>138 Php (2€30) pour rejoindre notre hôtel, le <strong><a href="https://www.booking.com/hotel/ph/puerto-pension-inn.fr.html?aid=318615&amp;label=New_French_FR_FR_21427176745-lf4RzVY0_AMET1LMhdKl_AS634186710868%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55639435822%3Atidsa-303472602395%3Alp9054964%3Ali%3Adec%3Adm%3Aag21427176745%3Acmp339479545&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2446952&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1741690316&amp;srpvid=d3494c62e0970a20&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Puerto Pension Inn</a></strong>, à une dizaine de minutes de l’aéroport. C’est plutôt correct ! Nous y passerons 4 nuits. Comptez 28€ par nuit, petit-déjeuner compris.</p>
            <p>Cet hôtel est un petit havre de paix niché au beau milieu de la ville. Idéalement situé au bout de la Malvar Road, il est juste au-dessus de la fameuse <strong>Baywalk</strong>. La chambre est décorée de façon traditionnelle, tout en bois et en bambou. En plus d'être très jolie, elle est aussi équipée de la clim’, de la télé et d’un petit frigo.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0587-768x1024.jpg" alt="Puerto Pension Inn Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0358-768x1024.jpg" alt="Kinabuch Grill &amp; Bar Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Une fois installées, nous partons découvrir les alentours. Par hasard, en nous baladant, à plus ou moins 25 minutes à pied de notre hôtel, nous tombons sur <strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g294257-d2155226-Reviews-Kinabuch_Grill_Bar-Puerto_Princesa_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Kinabuchs Grill and Bar</a></strong>. On se laisse tenter… Ils proposent une grande carte, le choix est difficile. Ici, vous pouvez goûter tout un tas de spécialités philippines. Amélie a testé le Beef Tagalog, de la viande de bœuf marinée dans une sauce incroyable aux oignons.</p>
            <p>Ce sera Gambas pour Laurie. Les accompagnements sont à prendre à part. En se faisant plaisir (apéro compris), nous payons 20€ pour 2.</p>
            <p>Après s’être clairement remplies, on retourne à l'hôtel. On ne s’est pas encore remises du voyage, du coup, niveau fatigue, on est KO ! Alors, c'est dodo tôt pour nous ce soir.</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 2</span>
              <h3>Puerto Princesa &amp; sa plage</h3>
            </div>
            <p>Pour notre 1ère journée à Puerto Princesa, réveil tranquille et petit-déjeuner au dernier étage de l’hôtel avec vue sur la baie… On prend le temps.</p>
            <p>Dans l’après-midi, nous partons découvrir la plage <strong>BM Beach</strong>, située à environ 2 km du centre-ville.</p>
            <p>Nous prenons un tuk-tuk via <strong>RIDE</strong> pour nous y rendre. Cette plage est réputée pour son ambiance paisible, ses eaux peu profondes et son cadre naturel. Parfait pour patauger !</p>
            <p>Cet endroit est essentiellement fréquenté par des familles philippines. Elles viennent y passer la journée pour pratiquer l’une de leurs activités favorites, le karaoké, of course ! Ici, vous avez donc la possibilité de louer des petites cabanes en bord de plage pour la journée. Pique-nique, karaoké party et bonne ambiance au programme !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0404-768x1024.jpg" alt="BM Beach Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0426_jpg-768x1024.jpg" alt="BM Beach Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Nous longeons ensuite la plage jusqu’au bout, histoire de nous balader. C’est là qu’on tombe sur le <a href="https://www.booking.com/hotel/ph/bamboo-nest-hartman-beach.fr.html?aid=318615&amp;label=New_French_FR_FR_21427176745-lf4RzVY0_AMET1LMhdKl_AS634186710868%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55639435822%3Atidsa-303472602395%3Alp9054964%3Ali%3Adec%3Adm%3Aag21427176745%3Acmp339479545&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=5657893&amp;dest_type=hotel&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1741692967&amp;srpvid=501f51917cb91383&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Bamboo Nest Beach</strong></a>, un endroit très sympa, idéal pour les backpackers. L’hôtel dispose de quelques chambres, notamment des dortoirs, mais surtout de Floating Houses (sorte de maisons flottantes en bois).</p>
            <p>Il y en a de différentes tailles. Les plus petites peuvent être tractées sur l’eau jusqu’au banc de sable qui se situe à 1 km de la côte. On profite de l’endroit tout en buvant une petite bière pour se rafraîchir.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_3254-768x1024.jpg" alt="Floating house Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_3255-768x1024.jpg" alt="Artisanat BM Beach Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_3256-768x1024.jpg" alt="Rue BM Beach Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Après ce moment agréable, loin du tumulte de la ville, nous retournons dans le centre-ville.</p>
            <p>Pour le dîner, nous mangeons aux <strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g294257-d10693528-Reviews-Artisans-Puerto_Princesa_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Artisans</a></strong>, une bonne adresse où l’on mange de bons plats frais et savoureux.</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 3</span>
              <h3>Island hopping à Puerto Princesa</h3>
            </div>
            <p>Nouvelle journée, nouvelle virée ! Aujourd’hui, c’est Island hopping dans la baie de Honda. Nous avons réservé l’excursion directement avec l’hôtel pour 1500 Php (25€).</p>
            <p>Un van vient nous chercher à 7h30. En route, nous récupérons d’autres personnes.</p>
            <p>Comme tout est bien pensé pour les touristes, on fait un petit arrêt dans une boutique pour louer du matériel si besoin (palmes, masque, tuba, chaussures d’eau, etc.). Au programme de la journée, 4 spots à visiter…
C’est parti, nous sommes 8 sur le bateau.</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Réservez vos îles via votre hôtel, c'est souvent moins cher qu'en agence, et le matériel (masque, tuba, chaussures d'eau) se loue pour quelques pesos avant le départ. Et la crème solaire haute protection : on l'applique et on la ré-applique, on brûle vraiment vite ici !</p></div>
            </div>
            <h4>⧐ Starfish Island</h4>
            <p>Une petite île sympa où on peut observer des étoiles de mer. Il y a une zone délimitée pour les voir. En réalité, on n’en a pas vu une seule dans la zone indiquée... Mais surprise quand on a repris le bateau, on remarque qu’il y en avait des dizaines juste en dessous !</p>
            <p>Nous avons mangé sur cette île. Le repas (ou plutôt le buffet !) est préparé par notre guide et l’équipage du bateau. Il y avait de tout : du riz, de la viande, du poisson, des salades… Vous avez la possibilité d’acheter des boissons sur place.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0463-768x1024.jpg" alt="Starfish Island Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0461-768x1024.jpg" alt="Buffet Island hopping Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Pambato Reef</h4>
            <p>En pleine mer, on accoste sur un ponton pour pouvoir découvrir le sanctuaire marin Pambato Reef. On y observe de nombreux poissons, mais en réalité, ils balancent de la nourriture pour les attirer.</p>
            <p>On n’aime pas vraiment ça… Pour autant, le décor est tout de même superbe. On a l’impression d’être immergées dans un aquarium.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0446-1-768x1024.jpg" alt="Pambato Reef Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0467-768x1024.jpg" alt="Pambato Reef Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Luli Island</h4>
            <p>Luli Island est une petite île qui disparaît quasiment au gré des marées. Elle n’est vraiment pas grande, on fait vite le tour à pied. Sur place, quelques petites paillotes sont mises à disposition pour se poser ou s’abriter du soleil.</p>
            <p>Il y a également un petit snack qui propose des sandwiches, des grillades ou des cocktails de fruits.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/DJI_20241115_131748_116-768x1024.jpg" alt="Luli Island Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0488-768x1024.jpg" alt="Cabane Luli Island Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Cowrie Island</h4>
            <p>Contrairement aux autres spots, Cowrie Island est une île très animée. On ne s'attendait pas à voir autant de monde sur place en débarquant ! Cette plage de sable blanc est en tout cas parfaite pour la baignade.</p>
            <p>On y trouve des bars, des restaurants, un terrain de beach-volley et un salon de massage. On peut même se faire tatouer au henné ! Sachez que vous avez la possibilité de venir sur cette île juste pour y passer la journée.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_3257-768x1024.jpg" alt="" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/DJI_20241115_144925_747-2-768x1024.jpg" alt="Cowrie Island Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Notre avis sur cet Island hopping</h4>
            <p>Retour sur la terre ferme vers 15h45. Sur le trajet de l’hôtel, nous repassons par la boutique pour rendre le matériel de plage (masques et tubas) que nous avons loué.</p>
            <p>Nous avons passé en moyenne une heure par spot, sauf sur l’île où nous avons mangé. Nous y sommes restées plus ou moins 2h30.</p>
            <p>Cet Island hopping est bien moins fréquenté que ceux du Nord de Palawan (Coron &amp; El Nido), ce qui est plutôt agréable. Le fait qu’il y ait beaucoup moins de monde fait que nous avions les spots rien que pour nous ! Par contre, on ne vous le cache pas, même si c’était très sympa et très joli, c’est tout de même bien moins impressionnant que les Island hoppings de Coron et El Nido.</p>
            <h4>⧐ Baywalk, la promenade nocturne incontournable</h4>
            <p>Pour la soirée, petite balade et repas sur la <strong>Baywalk</strong> qui se situe à 3 minutes à pied de notre hôtel. Sur place, on découvre un petit marché, une grande promenade et plusieurs restaurants. L’endroit est très familial. Comme la plupart des enfants ici, il est possible de louer des petits vélos, des voiturettes, des tuk-tuks à pédales…</p>
            <p>Pour le restaurant, notre choix (enfin celui de Laurie) s’est fait en fonction des poissons frais exposés sur les étals. On dînera donc au <strong><a href="https://share.google/hmh5oiAXeQ6PdgLXx" target="_blank" rel="noopener noreferrer" className="article-link">Kobe's</a></strong>. On vous le recommande vivement, on a tellement bien mangé !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0530-1024x768.jpg" alt="Baywalk Puerto Princessa" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_4929-768x1024.jpg" alt="Bike Baywalk Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_4928-768x1024.jpg" alt="Baywalk Puerto Princesa Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0526_jpg-768x1024.jpg" alt="Baywalk food Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 3</span>
              <h3>Une histoire de laverie &amp; de friperies...</h3>
            </div>
            <p>Comme chaque matin, on passe dire bonjour à nos copines de la réception... Surprise ! Elles nous annoncent que notre linge (que nous avions déposé la veille à faire laver) a brûlé ! Vidéos à l’appui, ce ne sont pas que nos affaires qui sont parties en fumée, mais tout le bâtiment de la laverie !</p>
            <p>Effectivement, ça sent le brûlé dans tout le quartier puisque le feu s’est déclaré dans une rue parallèle à notre hôtel ! La journée commence bien ! Bon, il n’y a pas eu de blessé, c’est le principal. Hormis des débardeurs et des shorts, nous avions également déposé nos vêtements chauds, ceux avec lesquels nous avions voyagé (pantalons, sweats, chaussettes…).</p>
            <p>C’est avec ces mêmes vêtements que nous comptions rentrer en France, dans le froid polaire de décembre ! Pas le choix, on est obligées de se trouver de nouveaux vêtements chauds en urgence. Comme Puerto Princesa est la plus grande ville que l’on visite pendant ce séjour à Palawan, si on ne trouve pas de vêtements aujourd’hui, on rentrera alors en France en short et en débardeur ! Lol.</p>
            <p>Du coup, pour notre plus grand plaisir, c’est parti pour une virée shopping… En vrai, on déteste ça !</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_4933-768x1024.jpg" alt="Centre commercial Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0572-768x1024.jpg" alt="Market Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0349-768x1024.jpg" alt="Tuk-tuk Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Direction donc le centre commercial SM City Puerto Princesa, sous 35 degrés. Une fois à l’intérieur, c’est le choc thermique, il fait tellement froid ! Mais pourquoi les Philippins mettent-ils toujours les clim’ aussi fortes ?!! Quoi qu’il en soit, impossible de trouver des vêtements chauds malgré un nombre conséquent de boutiques. On décide alors de rebrousser chemin car on avait repéré en route quelques magasins qui, pour autant, ne payaient pas de mine.</p>
            <p>Ce sont en fait des friperies, et c’est là finalement qu’on trouvera notre bonheur. On se refait une tenue complète pour même pas 10€ chacune ! Mission accomplie, youhou ! Ces friperies sont une belle découverte, on peut y trouver de vrais trésors. La plupart des Philippins achètent leurs vêtements dans ce genre de boutique, bien plus accessibles que celles dans les centres commerciaux.</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 4</span>
              <h3>Voyage = Relax</h3>
            </div>
            <p>Aujourd’hui, nous quittons notre petit havre de paix pour passer une dernière nuit à Puerto Princesa, mais dans un autre hôtel. Nous sommes attendues et invitées par le <strong><a href="https://www.booking.com/hotel/ph/canvas-boutique.fr.html?aid=318615&amp;label=New_French_FR_FR_21427176745-lf4RzVY0_AMET1LMhdKl_AS634186710868%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55639435822%3Atidsa-303472602395%3Alp9054964%3Ali%3Adec%3Adm%3Aag21427176745%3Acmp339479545&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=1531023&amp;dest_type=hotel&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1741710706&amp;srpvid=d503743715120611&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Canvas Boutique Hotel</a></strong>.</p>
            <p>Pour nous y rendre, nous avons commandé un tuk-tuk via <strong>RIDE</strong>.</p>
            <p>On découvre alors un hôtel moderne et artistique, qui offre un certain standing. Il y a même une piscine !</p>
            <p>Nous arrivons dans le grand hall d’accueil en mode sacs à dos, et nous sommes bien les seules ! C’est un « hôtel valises » comme on appelle ce genre d’établissement. Lol !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0609-768x1024.jpg" alt="Canvas Boutique Hotel Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0641-1-768x1024.jpg" alt="Canvas Boutique Hotel Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Avec son design contemporain et toutes ses œuvres d’art locales, le <strong><a href="https://www.booking.com/hotel/ph/canvas-boutique.fr.html?aid=318615&amp;label=New_French_FR_FR_21427176745-lf4RzVY0_AMET1LMhdKl_AS634186710868%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55639435822%3Atidsa-303472602395%3Alp9054964%3Ali%3Adec%3Adm%3Aag21427176745%3Acmp339479545&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=1531023&amp;dest_type=hotel&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1741710706&amp;srpvid=d503743715120611&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Canvas Boutique Hôtel</a></strong> est canon en tout cas.
La chambre est très spacieuse. On a deux immenses lits rien que pour nous, c’est tout confort !
On enfile les maillots de bain, direction la piscine, histoire de se rafraîchir et de se prélasser au bord de l’eau.</p>
            <p>Après ce moment détente, on se prépare pour aller manger. On a repéré un petit restaurant méditerranéen à seulement 3 minutes à pied qui nous tente bien, le <strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g294257-d16655425-Reviews-Bersian_Restaurant-Puerto_Princesa_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Bersian Restaurant</a></strong>. Effectivement, on s’est régalées.</p>
            <p>Il est temps d’aller se coucher. Demain, nous partons vers une nouvelle destination, on a trop hâte !</p>
            <div className="article-day-header article-day-header-tight">
              <h3>⪢ Où manger à Puerto Princesa ?</h3>
            </div>
            <ul>
              <li><strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g294257-d2155226-Reviews-Kinabuch_Grill_Bar-Puerto_Princesa_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Kinabuchs Grill and Bar</a>  </strong>€€</li>
              <li><strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g294257-d10693528-Reviews-Artisans-Puerto_Princesa_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Artisans</a>  </strong>€€</li>
              <li><strong><a href="https://share.google/hmh5oiAXeQ6PdgLXx" target="_blank" rel="noopener noreferrer" className="article-link">Kobe's</a>  </strong>€</li>
              <li><strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g294257-d16655425-Reviews-Bersian_Restaurant-Puerto_Princesa_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Bersian Restaurant</a>  </strong>€</li>
            </ul>
          </section>

          <section id="sabang" className="article-section">
            <div className="article-day-header">
              <h2>📍 SABANG &amp; sa rivière souterraine</h2>
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 1</span>
              <h3>Direction Sabang !</h3>
            </div>
            <p>Réveil dans notre hôtel bling-bling. Pour le petit-déjeuner, un grand buffet est proposé… Œufs brouillés pour Laurie et tartines à la confiture pour Amélie (qui déteste manger salé de bon matin).</p>
            <p>Après le p’tit dej, on profite d’un dernier moment à la piscine. Ça fait vraiment du bien, car il est seulement 10h30 et il fait déjà 30 degrés, ressenti 37 !</p>
            <p>Midi, il est temps de quitter l’hôtel et cette petite parenthèse enchantée.</p>
            <h4>⧐ Comment se rendre à Sabang ?</h4>
            <p>On a prévu d’aller à Sabang aujourd’hui, à environ 1h30 de Puerto Princesa. Il y a plusieurs possibilités pour s’y rendre, dont le taxi (organisé par l’hôtel pour 1,500 Php / pers.) et le van privé (au même tarif).</p>
            <p>Pour notre part, nous avons suivi la recommandation de notre futur hôte de passer par une compagnie de transport public, <strong>Bloomfiel Transport Van</strong>.</p>
            <p>Il y a plusieurs départs dans la journée : 10h, 14h et 16h. Nous prendrons celui de 14h. Le point de RDV de la société de transport se trouvant à 10 minutes  de notre hôtel, on utilise une fois de plus l’application <strong>RIDE</strong> pour nous y rendre.</p>
            <p>Arrivées à Bloomfiel, nous avons l’agréable surprise de payer seulement 300 Php (4€80) par personne.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_4932-768x1024.jpg" alt="Bloomfield Transport Van Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_4930-768x1024.jpg" alt="Contact Bloomfield Transport Van Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0647-2-768x1024.jpg" alt="Ka Inato Restaurant Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Comme nous sommes un peu en avance, on y laisse nos gros sacs pour aller rapidement manger un bout. On a repéré à deux pas de là, un petit restaurant super bien noté sur Google, le <strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g294257-d3576570-Reviews-Ka_Inato-Puerto_Princesa_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Ka Inato</a></strong>.</p>
            <p>Sur place, on découvre qu’une partie du personnel est sourde ou malentendante. Dans le menu, on trouve des fiches avec quelques mots traduits en langue des signes pour nous permettre de communiquer avec eux, et notamment pour qu’ils puissent prendre notre commande.</p>
            <p>Forcément, on « joue le jeu ». On adore le concept ! Sachez que c’est ici que nous avons mangé le meilleur poulet grillé de notre vie et à un prix dérisoire. Bref, on recommande cet endroit à 100 % !</p>
            <p>Malheureusement, on n’a pas vraiment le temps de prendre le temps, alors on engloutit notre merveilleux poulet en 3ème vitesse, et let’s go to the van.</p>
            <p>À bientôt Puerto Princesa !</p>
            <h4>⧐ Sabang, nous voilà !</h4>
            <p>On se retrouve au milieu des Philippins, on adore se fondre dans la masse. Le van est le même que si nous l’avions pris à l’hôtel, sauf que celui-ci est public et donc beaucoup moins cher.</p>
            <p>Direction Sabang, une petite localité située à 75 km du centre de Puerto Princesa.</p>
            <p>C’est un petit village côtier, relativement tranquille, principalement connu pour sa proximité avec la rivière souterraine. Ici, les gens vivent de la pêche, de l’agriculture et du tourisme. C’est une destination qui offre une expérience authentique au cœur de la culture locale, loin du tumulte de la ville.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_4939-768x1024.jpg" alt="Bambua Nature Cottage Sabang" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_4938-768x1024.jpg" alt="Bambua Nature Cottage Sabang" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Le van nous dépose devant notre hôtel, le <strong><a href="https://www.booking.com/hotel/ph/bambua-nature-cottages-puerto-princesa-city.fr.html?aid=318615&amp;label=New_French_FR_FR_21427176745-lf4RzVY0_AMET1LMhdKl_AS634186710868%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55770489250%3Atidsa-303472602395%3Alp9054964%3Ali%3Adec%3Adm%3Aag21427176745%3Acmp339479545&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2446952&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1741771113&amp;srpvid=cd7f41717de1060d&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Bambua Nature Cottage</a></strong>. Un autre petit paradis sur terre. Un peu perdu dans la pampa, on y accède par un petit chemin balisé (qui grimpe pas mal !). Un chien nous escorte. Une fois en haut, nos hôtes sont là pour nous accueillir.</p>
            <p>On fait la connaissance du propriétaire, un Néerlandais, qui nous raconte son extraordinaire histoire… Il est arrivé à Sabang il y a plus de 25 ans, à une époque où il n'y avait rien. Son parcours est digne d’un véritable Robinson des temps modernes !</p>
            <p>Il a vécu sur la plage, noué des liens avec des singes, et survécu en se nourrissant avec les moyens du bord. Plus tard, il crée une ferme, cultive du riz, et vit de ses récoltes. Puis, sa vie prend un tournant le jour où il rencontre une Philippine. Il l’épouse, et ensemble, ils construisent cet endroit unique.</p>
            <p>Après ça, on nous accompagne jusqu’à notre cottage. Il y en a plusieurs, mais on a vraiment le sentiment d’être isolées. À peine arrivées, on s’y sent trop bien !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0681_jpg-768x1024.jpg" alt="Plage Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0667_jpg-768x1024.jpg" alt="Children Sabang" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0664_jpg-768x1024.jpg" alt="Rue Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0691_jpg-768x1024.jpg" alt="Plage Coconuts Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Affaires déballées et bien installées, on part découvrir les environs...</p>
            <p>Nous sommes à 10 bonnes minutes à pied du centre et de la plage que l’on part rejoindre. En chemin, on se rend rapidement compte qu’il y a très peu de touristes. En réalité, la plupart d'entre eux ne dorment pas à Sabang. Ils viennent juste passer la journée en excursion, puis repartent. Mais comme on aime ne pas faire comme tout le monde, on y reste 2 nuits !</p>
            <p>Sabang est une petite ville où il n’y a pas grand-chose à voir, mais qui offre une très belle et grande plage. On ne peut pas s’empêcher de marcher les pieds dans l’eau pour découvrir un peu le littoral. On essaie de ne pas trop traîner, car ce soir, on a prévu de dîner à l’hôtel. Au menu, nouilles aux légumes et au poulet pour seulement 250 Php (4€). Un régal !</p>
            <p>Il est temps d’aller se coucher, demain on doit se lever tôt. Au programme, visite de la rivière souterraine, un endroit unique au monde. On a trop hâte !</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 2</span>
              <h3>La rivière souterraine de Sabang</h3>
            </div>
            <p>Réveil à 6h30. On a rendez-vous avec notre guide pour notre excursion (réservée via notre hôtel) à 7h50 sur le quai.</p>
            <p>Le départ est à 8h et c’est le premier de la journée. Du coup, on devrait être à peu près seules sur ce lieu incroyable…</p>
            <p>Nous sommes 8 en tout cas à embarquer sur le bateau. Direction l'Underground River !</p>
            <h4>⧐ Un grand Wahooo !</h4>
            <p>On fait 15 minutes de bangka environ avant de débarquer sur une magnifique plage. De là, on récupère des casques et un audio-guide en français. Trop cool pour pouvoir bien comprendre les explications.</p>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À ne pas manquer</strong><p>La rivière souterraine de Puerto Princesa (Underground River), classée à l'UNESCO, est l'une des plus longues rivières navigables souterraines au monde. Récupérez l'audio-guide en français au départ : les explications valent vraiment le détour.</p></div>
            </div>
            <p>On nous fait ensuite embarquer dans un autre bateau, bien plus petit et sans moteur, un paddle boat comme ils l’appellent. C’est partiii !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0784-2-768x1024.jpg" alt="Plage Underground River Sabang" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0709-768x1024.jpg" alt="Plage Underground River Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Cette rivière souterraine est l’une des merveilles naturelles les plus impressionnantes du pays et est considérée comme la 7ème merveille naturelle du monde. Elle fait partie du patrimoine mondial de l’Unesco depuis 1999. On y observe des stalactites et stalagmites aux formes spectaculaires.</p>
            <p>Nous avons seulement parcouru 2 km en paddle boat dans la grotte, mais elle regorge en fait de coins encore inexplorés. Avec ses centaines de milliers de chauves-souris, c’est clairement la maison de Batman ! Lol.</p>
            <p>Le nombre de visiteurs est limité chaque jour afin de préserver l'écosystème de ce merveilleux endroit. Donc mieux vaut ne pas arriver trop tard, au risque de ne pas pouvoir y accéder.</p>
            <p>La visite a duré environ 45 minutes. Bien que les avis soient mitigés sur l’Underground River, on est vraiment contentes de l’avoir fait et on vous le recommande vivement. C’est clairement impressionnant !
Nous sommes de retour au port de Sabang vers 11h.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0781-768x1024.jpg" alt="Underground River Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0727-768x1024.jpg" alt="Underground River Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0736-768x1024.jpg" alt="Stalactites Underground River Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0740-768x1024.jpg" alt="Stalactites Underground River Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ De retour sur la terre ferme...</h4>
            <p>Un petit restaurant sur la plage nous fait de l’œil. On s’y installe pour boire un verre et manger. Après ça, rien de mieux pour digérer qu’une petite balade sur la plage...</p>
            <p>On tombe sur plusieurs stands de massage. Avec les lits à l’ombre des cocotiers et face à la mer, Laurie se laisse tenter. Le cadre est idyllique. En même temps, une heure de massage intégral à l’huile essentielle pour 500 Php (8€), comment résister ?</p>
            <p>Pendant ce temps, Amélie qui n’aime pas plus se faire masser que ça, part explorer la plage.</p>
            <p>Quand on se retrouve une heure plus tard, Laurie est dans un état de décontraction intense ! On décide alors de rentrer tranquillement à l’hôtel. Rincées de cette journée, on dînera et on profitera de cette dernière soirée au <strong><a href="https://www.booking.com/hotel/ph/bambua-nature-cottages-puerto-princesa-city.fr.html?aid=318615&amp;label=New_French_FR_FR_21427176745-lf4RzVY0_AMET1LMhdKl_AS634186710868%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55770489250%3Atidsa-303472602395%3Alp9054964%3Ali%3Adec%3Adm%3Aag21427176745%3Acmp339479545&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2446952&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1741771113&amp;srpvid=cd7f41717de1060d&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Bambua Nature Cottage</a></strong>.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0804-768x1024.jpg" alt="Massage Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0808-768x1024.jpg" alt="Beach Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0817-1-1024x768.jpg" alt="Beach Sabang Puerto Princesa" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0794-768x1024.jpg" alt="Buffle Sabang Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <h3>⪢ Où manger à Sabang ?</h3>
            </div>
            <ul>
              <li><strong><a href="https://share.google/8kswns2x748VNNwXm" target="_blank" rel="noopener noreferrer" className="article-link">Red Turtle Restaurant</a></strong>  €€</li>
              <li><strong><a href="https://www.tripadvisor.co.uk/Restaurant_Review-g2720799-d32978784-Reviews-La_Casa_In_Sabang-Sabang_Puerto_Princesa_Palawan_Island_Palawan_Province_Mimaro.html" target="_blank" rel="noopener noreferrer" className="article-link">La Casa In Sabang</a></strong>  €</li>
            </ul>
          </section>

          <section id="port-barton" className="article-section">
            <div className="article-day-header">
              <h2>📍 PORT BARTON, un paradis encore préservé</h2>
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 1</span>
              <h3>En route pour Port Barton !</h3>
            </div>
            <p>Ce matin, on prend le temps de profiter de cet endroit incroyable avant de se mettre en route pour notre prochaine destination qui n'est autre que Port Barton ! De tout notre voyage, c'est clairement l'endroit qu'on attend le plus de découvrir...</p>
            <p>Après une matinée chill et de bons sandwichs avalés au poulet frit, faits avec amour par nos hôtes, on récupère nos sacs et c'est parti.</p>
            <p>Bye bye Sabang !</p>
            <h4>⧐ Comment se rendre à Port Barton ?</h4>
            <p>Nous avons organisé notre transfert avec la même société qu’avec laquelle nous sommes arrivées, <strong>Bloomfield Transport</strong>. Le bureau se trouve non loin du port. Le van passe nous récupérer en bas de l’hôtel, sur la route principale, à 14h.</p>
            <p>Pour info, il y a plusieurs horaires pour le transfert vers Port Barton : 8h, 9h, 10h ou 14h. Il faut compter en tout 4h de trajet. Dans ce timing, est compris le changement de van au niveau de <strong>Salvacion</strong>, où il faut également prévoir 30 à 45 minutes de pause.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Pour rejoindre Port Barton, comptez environ 4h de route au total, avec un changement de van à Salvacion (prévoyez 30 à 45 min de pause). Plusieurs départs dans la journée (8h, 9h, 10h ou 14h) : réservez la veille via votre hôtel.</p></div>
            </div>
            <p>Mais pourquoi mettre la clim' toujours aussi forte dans les transports ?! On ne vous le cache pas, on se gèle dans le van. On a fini par prendre une serviette de plage pour se couvrir. On ne le répètera jamais assez, prévoyez toujours des vêtements chauds pour les transports !</p>
            <p>Petite pause à <strong>Salvacion</strong> comme prévu pendant 35 minutes. Vous trouverez à cette intersection de quoi vous rafraîchir et vous restaurer. Il y a aussi des toilettes.</p>
            <h4>⧐ Nos premiers pas au paradis !</h4>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0843-768x1024.jpg" alt="Barton Bistro Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0850-768x1024.jpg" alt="Barton Bistro Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0852-767x1024.jpg" alt="Plage Port Barton Palawan" loading="lazy" style={{flex: '0.749', minWidth: 0}} />
            </div>
            <p>Nous arrivons à 18h à Port Barton. Nous sommes déposées à la <strong>station Bus Terminal</strong>.</p>
            <p>On rejoint notre petit chez nous pour les 6 prochaines nuits en tuk-tuk, à l’<a href="https://www.booking.com/hotel/ph/casa-bienvenida-port-barton.fr.html?aid=318615&amp;label=New_French_FR_FR_21427176745-lf4RzVY0_AMET1LMhdKl_AS634186710868%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55770489250%3Atidsa-303472602395%3Alp9054964%3Ali%3Adec%3Adm%3Aag21427176745%3Acmp339479545&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=2990557&amp;dest_type=hotel&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1741793793&amp;srpvid=13ca6dbde5560a46&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Aquarius Hôtel</strong></a>. Pour tout le séjour, nous payons 10,360 Php (165€). Le petit-déjeuner n'est pas inclus. En revanche, le café et l’eau filtrée sont à disposition en permanence. Cet hôtel est tenu par une mère et sa fille. Elles sont tellement gentilles, on se sent rapidement comme en famille.</p>
            <p>Il fait déjà nuit quand nous partons en vadrouille, direction la plage. On avait repéré un petit bar restaurant, pieds dans le sable, le <a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d27427132-Reviews-Barton_Bistro-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Barton Bistro</strong></a><em>…</em> 100 Php (1,60€) la bière et 500 Php (8€) la pizza. Les prix sont un peu plus élevés qu’à Puerto Princesa, ce qui est normal puisqu’on est plus isolées ici. En tout cas, on s’est régalées. On a tellement hâte de découvrir le paysage de jour…</p>
            <p>En attendant, bonne nuit tout le monde !</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 2</span>
              <h3>En mode farniente</h3>
            </div>
            <p>Première journée pleine à Port Barton. Aujourd’hui, on a visité essentiellement le village et la plage. Nous avons un énorme coup de cœur pour cet endroit.</p>
            <p>Port Barton est un village de pêcheurs situé dans la municipalité de San Vicente. Il est connu pour son ambiance paisible et décontractée, ses magnifiques plages et ses îles paradisiaques aux eaux cristallines.</p>
            <p>Ce village, réputé pour sa beauté pittoresque, offre une alternative plus calme et moins développée que des destinations touristiques et plus populaires comme El Nido et Coron. C'est une destination parfaite pour les voyageurs cherchant à éviter les foules, tout en profitant de la beauté naturelle de Palawan. Ce petit paradis a gardé toute son authenticité. On valide !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0866-768x1024.jpg" alt="Village Port Barton Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0867-768x1024.jpg" alt="Village Port Barton Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Ce matin, on a pris le temps. Les gens sont tellement sympas et ouverts aux rencontres, à la discussion. On a envie de parler avec tout le monde !</p>
            <p>On est allées manger au <a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d25345984-Reviews-Flow_Pool_Club-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Flow Bar</strong></a> le midi, un restaurant-bar piscine. Leurs burgers et leurs pizzas sont incroyables !</p>
            <p>Pour info, ici vous avez la possibilité de commander un verre et de profiter de la piscine toute la journée si vous le souhaitez.</p>
            <p>Fin de journée sur la plage et coucher de soleil au <a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d12553878-Reviews-Happy_Bar-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Happy Bar</strong></a>, clairement le meilleur spot de la plage pour le sunset. L’endroit est vraiment agréable et les cocktails y sont très bons !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0925-768x1024.jpg" alt="Port Barton Puerto Princesa Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0946-1024x768.jpg" alt="Sunset Port Barton Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 3</span>
              <h3>White Beach &amp; Coconut Beach</h3>
            </div>
            <p>Nouvelle journée à Port Barton. Aujourd’hui, nous partons à la découverte de 2 belles plages qui se trouvent à proximité du village de Port Barton.</p>
            <p>Coconut Beach et White Beach portent bien leur nom. Quelque soit la façon que vous choisissez pour les rejoindre, ça n'est pas de tout repos. Bref, ces plages se méritent !</p>
            <h4>⧐ Comment se rendre aux célèbres plages de Port Barton ?</h4>
            <p>Pour rejoindre ces plages de rêve, il y a donc plusieurs solutions : par la route (davantage une piste ou un chemin de terre d’ailleurs !) en scooter et en tuk-tuk, ou par la mer, en bangka et en kayak.</p>
            <p>Apparemment en kayak, avec de bons bras et peu de vent, il ne faut que 10 minutes pour accéder à Coconut Beach depuis la plage de Port Barton. Une idée qu’on garde en tête pour une prochaine fois, d'autant que notre hôtel a un kayak et qu’il est prêté gratuitement.</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Beaucoup d'hôtels à Port Barton prêtent gratuitement des kayaks : par mer calme, Coconut Beach est à une dizaine de minutes de pagaie depuis la plage du village. Une jolie alternative au tuk-tuk pour les bons bras !</p></div>
            </div>
            <p>À la base, nous voulions y aller en scooter, mais un couple qu’on a rencontré la veille nous a dit que c’était quand même assez galère, voire dangereux d’y aller en 2 roues.</p>
            <p>Comme il a plu ce matin, le chemin est encore plus « casse-gueule » que d’habitude ! Vu qu’on ne veut pas mourir à Port Barton, on choisit sans hésiter l’option tuk-tuk, et on a bien fait !</p>
            <p>On fait clairement du tuk-tuk en mode 4x4, le chemin est vraiment chaotique. On met entre 15 et 20 minutes pour rejoindre White Beach, la plage la plus éloignée. On payera 600 Php (9€60) Aller-Retour, notre chauffeur nous attendra à Coconut Beach.</p>
            <h4>⧐ White Beach</h4>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0972-768x1024.jpg" alt="White Beach Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0984-1024x768.jpg" alt="White Beach Port Barton" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Il y a un petit restaurant à l’entrée du site. Pour accéder à la plage, il faut payer un droit d’entrée de 50 Php par personne (0,80 €).</p>
            <p>White Beach est une belle plage de sable blanc. Nous avons de la chance, il n’y a pas grand monde, juste quelques chèvres qui viennent nous rendre visite.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1175_jpg-768x1024.jpg" alt="White Beach Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1002-768x1024.jpg" alt="White Beach Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Coconut Beach</h4>
            <p>Nous profitons de la plage avant de rejoindre Coconut Beach en longeant la mer par la droite. Comme son nom l’indique, c’est une plage de cocotiers, très jolie aussi. Cependant, pour se baigner, on conseille de rester à White Beach, à cause des nombreux rochers dans l’eau.</p>
            <p>Le temps est vite passé et le soleil commence à décliner, il est temps de rentrer. Comme prévu, notre chauffeur de tuk-tuk nous attend avec un ami. On échange quelques mots avec eux, ils sont adorables.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1061-768x1024.jpg" alt="Coconut Beach Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1065_jpg-768x1024.jpg" alt="Coconut Beach Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Une fin de journée comme on les aime !</h4>
            <p>De retour à l'hôtel. Au programme, petite douche rapide avant de ressortir dîner.</p>
            <p>On avait repéré un petit restaurant qui ne paye pas de mine à première vue, mais toujours plein à craquer ! C’est le <a href="https://g.co/kgs/EYCKtmJ" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Star Apple Canteen</strong></a>. En devanture, un étal de viandes et de poissons frais nous fait saliver. Pour 250 Php (4€), accompagnement compris (riz et salade composée), on choisit son poisson, son morceau de poulet ou de porc (ribs) qu’ils grillent directement.</p>
            <p>Un buffet avec des plats locaux, comme du poulet curry, du poulet adobo, et bien d'autres spécialités, est aussi proposé. Comptez seulement 120 Php (1€92) en moyenne par assiette. Un vrai coup de cœur ce petit restaurant ! On le recommande fortement pour son incroyable rapport qualité-prix.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1085-768x1024.jpg" alt="Star Apple Canteen Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1090-768x1024.jpg" alt="Star Apple Canteen Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 4</span>
              <h3>Entre plage, bars et restaurants...</h3>
            </div>
            <p>Les vacances, tout simplement ! Nous prenons le temps d'échanger avec les locaux, les Philippins sont tellement gentils et toujours disponibles !</p>
            <p>Côté organisation, nous avons réservé notre Island hopping pour le sur-lendemain, planifié notre transfert en taxi-boat vers la prochaine destination, et bouclé quelques détails pour la fin de notre séjour…</p>
            <p>Une journée tranquille mais productive.</p>
            <p>On la termine en beauté avec un massage d'une heure face à la mer, full body, pour seulement 500 Php (8€). Que du bonheur !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0963_jpg-768x1024.jpg" alt="Port Barton Beach Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0962_jpg-1024x768.jpg" alt="Bangka Port Barton" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_0861-1024x768.jpg" alt="Plage Port Barton Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1123-768x1024.jpg" alt="Sunset Port Barton Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 5</span>
              <h3>On rejoint White Beach en kayak !</h3>
            </div>
            <p>Aujourd'hui, on relève le défi !
Notre hôtel nous prête un kayak… Nous voilà parties pour rejoindre White Beach à la rame !</p>
            <p>On nous avait promis 10 minutes de trajet, en réalité, il nous en a bien fallu 30 malgré tous nos efforts ! Surtout que, selon la marée, le temps de traversée peut être plus ou moins long.</p>
            <p>D'ailleurs, il est bon de savoir que si la marée est basse, il faut alors passer plus au large car il y a vraiment peu de fond à certains endroits.</p>
            <p>En tout cas, défi relevé ! On est trop fières de nous ! Les paysages qu'on aperçoit en chemin sont canons. Le temps de traversée est très vite passé finalement. Bon, il faudra rentrer après, et ça, c'est une autre histoire !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1153_jpg-3-768x1024.jpg" alt="Kayak White Beach Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1163-1024x768.jpg" alt="Coconut Beach Port Barton" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>À peine le pied sur la terre ferme, un cochon en balade sur la plage vient nous tenir compagnie. Trop drôle ! On reprend un peu nos esprits avant de faire chemin inverse, surtout qu’on a déjà mal dans tout le corps !</p>
            <p>Même si le retour a été plus compliqué avec le vent qui s'est levé, on est super contentes de l’avoir fait. L'expérience était vraiment chouette.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1180-768x1024.jpg" alt="Cochon White Beach Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1185-768x1024.jpg" alt="Port Barton Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Pour finir la journée en beauté, nous retrouvons une locale au <a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d12553878-Reviews-Happy_Bar-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Happy Bar</strong></a>, notre bar de plage préféré, avec qui le courant est tout de suite bien passé. Elle nous présente à plein de gens de son entourage, locaux et expatriés.</p>
            <p>On se sent Port Bartonaises le temps d’une soirée... Un moment magique de partage qu’on sera loin d’oublier !</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 6</span>
              <h3>Island hopping à Port Barton</h3>
            </div>
            <p>Nous avons rendez-vous à 9h à côté du <strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d27427132-Reviews-Barton_Bistro-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Barton Bistro</a></strong>. On paye 1500 Php (24€) par personne, soit 1300 Php + 200 Php d’éco-taxe. Pas de prise de tête à savoir avec qui il faut réserver, c’est le même prix partout. Pour notre excursion, nous sommes directement passées par un local que nous avons rencontré quelques jours plus tôt sur la plage.</p>
            <p>Here we goooo ! Nous sommes une dizaine sur le bateau. Les membres de l’équipage sont 3 et sont au taquet pour nous faire passer une belle journée.</p>
            <p>Il est prévu qu'on découvre 6 spots aujourd'hui...</p>
            <h4>⧐ Twin Reef</h4>
            <p>Ce spot est magique puisqu'il offre deux formations de coraux jumelles qui s'étendent sous l'eau. Le spectacle marin est juste wahoo ! C’est donc un lieu idéal pour le snorkeling.</p>
            <p>L’eau est belle et transparente. Les jeux de lumière sur les coraux et les poissons tropicaux créent une ambiance féérique.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1229-768x1024.jpg" alt="Twin Reef Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/IMG_5058-768x1024.jpg" alt="Bangka Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Turtle Spot</h4>
            <p>On se jette du bateau à la recherche des tortues. On nous avait prévenues qu'aucune nourriture ne serait jetée pour les appâter, et que si on en voyait, on serait donc chanceuses.</p>
            <p>Malgré un long moment passé à les chercher, aucune n'a pointé son petit nez. Dommage, mais on a quand même découvert un magnifique spot !</p>
            <h4>⧐ Exotic Island</h4>
            <p>Cette île est située à proximité de Maxima Island. Les deux îles sont séparées par un banc de sable submergé, créant un genre de lagon. C’est paradisiaque.</p>
            <p>On amarre entre les 2 îles. L’eau est magnifique. Sur Maxima, l’île de gauche, il y a une petite maison, où l’on peut acheter des boissons.</p>
            <p>L’île de droite, Exotic Island, est celle où l’on mange. Ce midi c’est buffet préparé avec soin et amour par les membres de l’équipage. Entre le poisson et le poulet cuits au barbecue, les moules, les nouilles, les salades… il y a énormément de choix. Impossible de ne pas trouver son bonheur !</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1248-768x1024.jpg" alt="Maxima Island Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1271-2-768x1024.jpg" alt="Exotic Island Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1295-768x1024.jpg" alt="Exotic Island Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Fantastic Reef</h4>
            <p>Ce spot porte bien son nom : un jardin sous-marin éclatant de couleurs où coraux, poissons tropicaux et même tortues se donnent rendez-vous. Faire du snorkeling à Fantastic Reef, c'est entrer dans un aquarium grandeur nature.</p>
            <p>Fantastic Reef est donc un sanctuaire de biodiversité où l'eau cristalline révèle un spectacle fascinant.</p>
            <p>Bref, on en a pris plein, les yeux !</p>
            <h4>⧐ Capsalay Island</h4>
            <p>On s’est senties comme seules au monde sur cette petite île. D’un côté, une belle plage de sable blanc remplie de jolis coquillages, de l’autre, une mangrove.</p>
            <p>Dommage qu’on y ait fait qu’un rapide stop.</p>
            <h4>⧐ Sand Bar ou Starfish Island</h4>
            <p>Non loin de la plage de Port Barton, on débarque sur un îlot de sable. Magnifique, c’est comme s’il était posé au beau milieu de la mer !</p>
            <p>Il est possible de rejoindre ce banc de sable en kayak. On a pu y voir quelques grosses étoiles de mer.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1354-768x1024.jpg" alt="Starfish Island Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1356-768x1024.jpg" alt="Sand Bar Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Notre avis sur cet Island hopping</h4>
            <p>On a passé une merveilleuse journée, on est complètement conquises !</p>
            <p>Tout au long de cette excursion, on nous a proposé des verres de rhum arrangé. Heureusement, on a été sages, sinon on aurait pu vite finir pompettes ! L’équipage était très sympa, à nos petits soins. Il n’a pas hésité à mettre de la musique internationale sur le bateau pour ambiancer tout le monde.</p>
            <p>Les spots n’étaient pas bondés de monde. Certes, les paysages sont moins impressionnants que ceux d’El Nido ou Coron, mais ils sont tout de même canons !</p>
            <p>Nous sommes de retour à Port Barton vers 17h, just in time pour le sunset !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1244-768x1024.jpg" alt="Exotic Island Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1114-768x1024.jpg" alt="Bangka Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <h3>⪢ Où manger à Port Barton ?</h3>
            </div>
            <ul>
              <li><a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d25345984-Reviews-Flow_Pool_Club-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Flow Bar</strong></a>  €€€</li>
              <li><a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d12553878-Reviews-Happy_Bar-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Happy Bar</strong></a>  €€€</li>
              <li><a href="https://www.booking.com/hotel/ph/barton-jungle-cottages.fr.html?aid=318615&amp;label=New_French_FR_FR_21427169905-YP8jtirKV%2AkzSzTpDnHYDwS640938627539%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2412760&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742579121&amp;srpvid=5cb77cd657e8000a&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Jungle Bar</strong></a>  €€€</li>
              <li><strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d13163383-Reviews-Mojitos_RestoBar-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaro.html" target="_blank" rel="noopener noreferrer" className="article-link">Mojito Bar</a></strong>  €€€</li>
              <li><strong><a href="https://www.booking.com/hotel/ph/ausan-beach-front-cottages.fr.html?aid=318615&amp;label=New_English_EN_FR_21457884505-T0t%2AedlXm_oGkIMqMNUhEAS217291026622%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742573592&amp;srpvid=0ef972081cae0326&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Ausan Restaurant</a></strong>  €€</li>
              <li><strong><a href="https://g.co/kgs/fuwyWjU" target="_blank" rel="noopener noreferrer" className="article-link">El Busero Inn</a> </strong> €€</li>
              <li><strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d9746403-Reviews-Kusinero_Del_Barrio_Restobar-Port_Barton_San_Vicente_Palawan_Island_Palawan_Prov.html" target="_blank" rel="noopener noreferrer" className="article-link">Kusinero del Barrio</a></strong>  €€</li>
              <li><a href="https://g.co/kgs/EYCKtmJ" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Star Apple Canteen</strong></a>  €</li>
            </ul>
          </section>

          <section id="san-vicente" className="article-section">
            <div className="article-day-header">
              <h2>📍 SAN VICENTE &amp; ses secrets encore bien gardés</h2>
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 1</span>
              <h3>Direction San Vicente !</h3>
            </div>
            <p>C'est le cœur rempli d'émotion que nous quittons Port Barton, ainsi que toutes les personnes formidables que nous y avons rencontrées.</p>
            <p>Mais ce n'est pas un adieu définitif, car nous reviendrons dans quelques jours... Port Barton, ce n'est qu'un au revoir ! En attendant, cap sur San Vicente !</p>
            <h4>⧐ Comment se rendre à San Vicente ?</h4>
            <p>Réveil matinal pour prendre le <strong>taxi-boat</strong> (☎️ +63 998 497 9135). Rendez-vous donné à 8h30 près du <strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d12553878-Reviews-Happy_Bar-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Happy Bar</a></strong>, mais, fidèle au rythme local, le taxi-boat n'arrivera qu'à 9h15. Le temps pour le capitaine de finaliser des documents administratifs avec les gardes-côtes, nous levons l'ancre vers 9h30.</p>
            <p>Le trajet dure environ 45 minutes, pour un tarif de 400 Php (6€40) par personne. Il est aussi possible de rejoindre San Vicente en van, mais cela prend près de 2h. Par la mer, c'est donc bien plus rapide, et on trouve que le voyage en bangka est bien plus agréable qu’en van.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1864_jpg-768x1024.jpg" alt="Taxi-boat Port Barton San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1370-768x1024.jpg" alt="Garde-côte Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>En chemin, surprise, on nous fait faire une halte sur une plage isolée, accessible uniquement par bateau. Ce lieu paradisiaque s’appelle <strong><a href="https://www.tripadvisor.fr/Hotel_Review-g1370797-d2648926-Reviews-Thelma_and_Toby_s_Island_Camping_Adventure-Port_Barton_San_Vicente_Palawan_Island_Pal.html" target="_blank" rel="noopener noreferrer" className="article-link">Palawan Camping</a></strong>. Une étendue de sable immaculé, une eau cristalline...</p>
            <p>Ici, le temps semble suspendu. Entre la sérénité du paysage et l'idée de passer la nuit dans l'une de leurs tentes, cet endroit nous fait rêver. Un jus de fruits frais avalé, il est déjà temps de repartir.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1392-768x1024.jpg" alt="Palawan Camping Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1394-768x1024.jpg" alt="Island Camping Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>30 minutes plus tard, nous arrivons au port de San Vicente. La superficie de ce village de pêcheurs est de 146 km². En réalité, Port Barton fait partie de la municipalité de San Vicente. Loin d’être dans le top des destinations touristiques de Palawan, San Vicente est un mélange de plages immaculées, d'activités de plein air et de tranquillité.</p>
            <p>Grâce à son nouvel aéroport, sa <strong>Long Beach</strong> et ses compétitions de surf, cette petite ville paisible commence à attirer de plus en plus de monde.</p>
            <h4>⧐ Débarquement à San Vicente !</h4>
            <p>On prend directement un tuk-tuk électrique. C’est bien la 1ère fois que nous voyons cela aux Philippines ! Nous traversons la ville… petites épiceries, marchés locaux, quincailleries, pharmacies, banques, on y trouve tout !</p>
            <p>Direction notre hôtel à 10 minutes du centre. Notre hébergement à l’<strong><a href="https://www.booking.com/hotel/ph/acuario-beach-inn.fr.html?aid=318615&amp;label=New_French_FR_FR_21427169905-YP8jtirKV%2AkzSzTpDnHYDwS640938627539%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1741973876&amp;srpvid=9fc27bf812db01f5&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Acuario Beach Inn</a></strong> est une petite cabane sur la plage. Elle est parfaitement équipée avec la clim’ et l’eau chaude, on adooore ! Leurs tarifs sont très attractifs puisque nous avons seulement payé 1,320 Php (21€) par nuit, petits-déjeuners compris.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1409-768x1024.jpg" alt="Port San Vicente Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1415-1024x768.jpg" alt="Tuk-tuk San Vicente Port Barton" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>L’endroit est vraiment sympa. Repos garanti puisqu’il n’y a rien de spécial à faire dans les environs, exceptée une randonnée dont on parlera plus tard.</p>
            <p>Face à la mer, on profite de notre 1ère soirée à San Vicente, avec comme cadeau de bienvenue, un splendide coucher de soleil dans cet endroit hors du temps.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1427-768x1024.jpg" alt="Acuario Beach Inn San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1428-768x1024.jpg" alt="Acuario Beach Inn San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 2</span>
              <h3>L'aventure du One Hundred Steps</h3>
            </div>
            <p>Après une nuit bercée par le bruit des vagues, on se réveille en douceur. Malgré tout, on est au taquet pour cette 1ère journée ! Le petit-déjeuner est servi face à la mer, le bonheur.</p>
            <p>Le défi de la journée, le One hundred steps, un point de vue qu’on peut rejoindre à pied depuis notre hôtel...</p>
            <h4>⧐ Le 100 Steps, une randonnée qui vaut la peine !</h4>
            <p>Pourquoi on l'appelle le 100 Steps ? Ça, c’est une bonne question… ! Parce qu’en réalité, c’est à bien plus de 100 pas ! Lol. Un petit conseil, y monter tôt le matin ou en fin de journée, quand il fait le plus frais. Et surtout, n’oubliez pas de prendre de l’eau.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Le « 100 Steps » de San Vicente en compte bien plus que 100 ! Montez-y tôt le matin ou en fin de journée, quand il fait plus frais, et emportez de l'eau : la vue au sommet récompense largement l'effort.</p></div>
            </div>
            <p>Le chemin grimpe pas mal pour arriver au point de vue. À environ un tiers du chemin, on rejoint une petite maisonnette. On doit payer ici un droit de passage de 20 Php (0€32) par personne si on veut pouvoir continuer notre ascension.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1482-1024x768.jpg" alt="One hundred steps San Vicente Port Barton" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1505-768x1024.jpg" alt="Mamzelles en vadrouille San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1484_jpg-768x1024.jpg" alt="One hundred steps San Vicente Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>On est au bout de notre vie et trempées de sueur quand on arrive en haut, mais l’incroyable panorama nous fait vite oublier notre fatigue et la chaleur qu'il fait. La mer des deux côtés, des plages de sable blanc à perte de vue… on en prend plein les yeux.</p>
            <p>La descente est quand même beaucoup plus facile. De retour en bas, on fait un petit tour dans le village.</p>
            <p>On croise pas mal d’enfants du quartier, intrigués par notre présence, et très curieux de savoir ce qu’on fait par ici. On prend le temps d’échanger avec la petite bande. Entre chants, danses et parties de basket, on passe un super moment !</p>
            <h4>⧐ La vie locale à San Vicente</h4>
            <p>On retourne à l’hôtel par la plage. On passe près des étals où sèche la pêche du jour au soleil. Aux Philippines, il est très commun d’acheter des sacs de poissons séchés.</p>
            <p>Avec des techniques traditionnelles restées intactes, les locaux vivent et se nourrissent toujours de leur pêche.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_PortBarton1-768x1024.jpg" alt="Poissons séchés San Vicente Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1540-768x1024.jpg" alt="San Vicente Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>De retour à notre petite cabane sur la plage, on a à peine le temps de prendre une douche que le soleil commence déjà à se coucher...</p>
            <p>Il n’y a pas de restaurant à proximité, du coup on dîne à l’hôtel le soir.</p>
            <p>Tous les plats sont préparés minute. Il y a souvent beaucoup d’attente pour être servies, mais c’est toujours délicieux !</p>
            <p>Après avoir observé un long moment les étoiles, on part se coucher. Demain, de nouvelles aventures nous attendent.</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 3</span>
              <h3>SanVic Viewpoint &amp; Bato ni Ningning</h3>
            </div>
            <p>Petit-déjeuner devant la mer, que demander de plus ? C’est vraiment un kiffe de commencer ses journées comme ça !</p>
            <p>Programme du jour : location d’un scooter à l’hôtel pour 500 Php (8 €) la journée et direction les points de vue de San Vicente ! De ce qu'on en a vu sur Google Maps, ça a l’air plutôt pas mal...</p>
            <h4>⧐ Comment s'y rendre ?</h4>
            <p>Après avoir fait le plein pour 250 Php (4€10), il nous faut 50 minutes pour rejoindre notre 1er spot. On ne vous le cache pas, on a traversé des portions de route vraiment très mauvaises.</p>
            <p>De gros nids de poule, beaucoup de sable, mieux vaut être très prudent, et ne pas faire l’impasse sur le casque !</p>
            <h4>⧐ SanVic Viewpoint</h4>
            <p>Pour accéder au site, il faut débourser 25 Php (0€40) par personne. D’ici, la vue sur la <strong>Long Beach</strong>, que nous avons longée pour venir jusqu’ici, est canon !</p>
            <p>Sachez que cette plage, avec ses 14 km, est la plus longue des Philippines et la 2ème plus longue d’Asie.</p>
            <p>Tout au bout du chemin, un gros rocher est aménagé pour pouvoir monter dessus et apprécier davantage la vue.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1654-768x1024.jpg" alt="SanVic Viewpoint San Vicente Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1649-768x1024.jpg" alt="SanVic Viewpoint San Vicente Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Bato ni Ningning</h4>
            <p>Nous reprenons le scooter pour nous rendre au 2ème point de vue. C’est à 2 minutes seulement en redescendant. Le droit d’entrée est également de 25 Php (0€40).</p>
            <p>Ici aussi, un gros rocher qu'on peut facilement escalader, trône au milieu du paysage.</p>
            <p>Ce point de vue est moins élevé que l’autre, mais se trouve exactement dans l’axe de la <strong>Long Beach</strong>. Le décor est superbe et permet de belles prises de vue !</p>
            <p>Hormis quelques groupes d'étudiants, il n'y a pas foule. C'est plutôt agréable de visiter des lieux incontournables dans ces conditions.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1659-768x1024.jpg" alt="Bato ni Ningning Viewpoint San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/VID_20241128_061216_00_097_2025-08-10_10-50-51_capture-decran-4-1024x768.jpg" alt="View Point San Vicente" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <h4>⧐ San Vicente, capitale du surf de Palawan</h4>
            <p>Nous partons en direction du <strong>village d'Alimanguan</strong> pour manger. On a repéré un hôtel-restaurant sur la plage qui nous tente bien. Avec ses paillotes et ses tables en bois sur la plage, <strong><a href="https://g.co/kgs/KMF4hyB" target="_blank" rel="noopener noreferrer" className="article-link">The Turtle Beach Resort &amp; Restaurant</a></strong> est très chill.</p>
            <p>L’endroit commence à être bien connu pour son spot de surf et son festival, le « SanVicSurf ». La ville de San Vicente a d’ailleurs été déclarée « capitale du surf » de Palawan par le conseil provincial.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1686-768x1024.jpg" alt="Surf San Vicente Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1684-768x1024.jpg" alt="The Turtle Beach &amp; Restaurant San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>On est trop bien. On profite de ce petit coin de paradis jusqu’en fin d’après-midi.</p>
            <p>Au vu de l’état de la route, on fait en sorte de rentrer avant la nuit, c’est bien plus prudent.</p>
            <p>Retour à l’hôtel vers 18h, le soleil est quasi-couché.</p>
            <p>Ici, toutes les soirées se ressemblent mais sont uniques à la fois !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1712-768x1024.jpg" alt="Sunset coconuts San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2781-768x1024.jpg" alt="Sunset San Vicente Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 4</span>
              <h3>L'émission Survivor à San Vicente !</h3>
            </div>
            <p>Aujourd'hui, direction la <strong>Long Beach</strong> en scooter, avec pour objectif d’aller manger au <strong><a href="https://www.booking.com/hotel/ph/club-agutaya.fr.html?aid=318615&amp;label=New_French_FR_FR_21427169905-YP8jtirKV%2AkzSzTpDnHYDwS640938627539%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742292888&amp;srpvid=b7054809eb8d041e&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Club Agutaya</a></strong>.</p>
            <p>Mais surprise en arrivant, le restaurant est privatisé par l’équipe de production du <em>Survivor</em> Suédois. L'émission est actuellement en tournage sur la plage, à quelques centaines de mètres de là. On nous invite donc à revenir le lendemain.</p>
            <p>On décide alors de continuer notre chemin. On tombe par hasard sur <strong><a href="https://www.booking.com/hotel/ph/the-elizabeth-resort-and-villas-san-vicente1.fr.html?aid=356980&amp;label=gog235jc-1FCAsotAFCLHRoZS1lbGl6YWJldGgtcmVzb3J0LWFuZC12aWxsYXMtc2FuLXZpY2VudGUxSA1YA2hNiAEBmAENuAEHyAEN2AEB6AEB-AECiAIBqAIDuAKBkOW-BsACAdICJDlmYzUxMDEyLThiNTctNGIxZi1iNzcxLTg4NDNiNWNiYjRiMtgCBeACAQ&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742292998&amp;srpvid=0ef94841e3e10689&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">The Hotel Elizabeth</a></strong>. Pensées pour notre fourgon aménagé qui porte le même nom, on décide de s’y arrêter.</p>
            <p>L'hôtel (davantage un complexe) est immense et en plein travaux. On nous accueille comme des princesses. On a même droit à un petit tour en voiturette. On nous installe au restaurant de la plage. Excepté le temps pluvieux, le cadre est parfait. Nous sommes les seules sur cette immense plage… enfin presque !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/IMG_1047-1-768x1024.jpg" alt="The Hotel Elizabeth Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/IMG_1048-1-768x1024.jpg" alt="The Hotel Elizabeth Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Le tournage de <em>Survivor</em> se trouve à quelques centaines de mètres sur notre droite. La plage est régulièrement traversée par de gros 4x4 de la production. C'est plutôt amusant de se retrouver si proches du tournage et de se dire : « Bah ça va, ils ne sont pas si isolés que ça les candidats ! Il y a la route juste derrière et des restos tout autour ! » Lol.</p>
            <p>On se laisse tenter par une pizza.  Trop bonne ! Son prix est assez élevé, mais pas vraiment étonnant vu l’endroit.</p>
            <p>Il est temps de repartir. Dernier regard sur la <strong>Long Beach</strong>, qui porte si bien son nom, et on se remet doucement en route, en espérant qu’il ne se mette pas à pleuvoir…</p>
            <p>La soirée se termine tranquillement à l’hôtel.</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 5</span>
              <h3>Suite...</h3>
            </div>
            <p>Ce matin, sur la plage de l’hôtel, avec les enfants du quartier, c’est fabrication de balles de jonglage et construction de châteaux de sable. Une matinée simple et pleine de sourires.</p>
            <p>À 12h15, départ en scooter, et comme prévu la veille, direction le<strong> <a href="https://www.booking.com/hotel/ph/club-agutaya.fr.html?aid=318615&amp;label=New_French_FR_FR_21427169905-YP8jtirKV%2AkzSzTpDnHYDwS640938627539%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742292888&amp;srpvid=b7054809eb8d041e&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Club Agutaya</a></strong>. À peine entrées, c’est un gros Wahoo ! Cet hôtel est juste incroyable !</p>
            <p>Bien qu'une partie de l'établissement reste privatisée, on peut quand même accéder au restaurant de la plage.</p>
            <p>En fait, c'est ici que loge l'équipe de production pour le <em>Survivor</em> Suédois. C’est aussi l’endroit où séjournent les candidats éliminés ainsi que le jury final. Forcément, certains espaces (dont la piscine, snif !) sont interdits d’accès pour un souci de confidentialité.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1769_jpg-768x1024.jpg" alt="Coconuts San Vicente Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1776-768x1024.jpg" alt="Agutaya Club San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Au restaurant, nous optons pour un Beef Tagalog. Le fameux bœuf mijoté dans une sauce aux oignons. Une tuerie ! Ce plat est validé à 100 % une fois de plus.</p>
            <p>De retour à l'hôtel, nous avions prévu une sortie en paddle banka, mais le temps a tourné… la pluie s’est mise à tomber et le vent s’est levé. Tant pis, ce sera peut-être pour demain !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1699-768x1024.jpg" alt="San Vicente Port Barton Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1718-1024x768.jpg" alt="Sunset San Vicente Port Barton" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 6</span>
              <h3>Paddle bangka et retour à Port Barton</h3>
            </div>
            <p>Réveil matinal et petit-déjeuner protéiné avant de prendre le départ pour notre expédition en paddle banka vers <strong>Mialbok Island</strong>.</p>
            <p>Cette (toute) petite île se trouve juste en face de notre hôtel. Les pagaies sont en bois et pèsent au moins 3 kg chacune… Ça va le faire, on ne se démotive pas !</p>
            <h4>⧐ Paddle bangka à San Vicente</h4>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1756-768x1024.jpg" alt="San Vicente Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1827-768x1024.jpg" alt="Paddle bangka San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>L'eau est magnifique, transparente, avec plein de poissons et quelques méduses aussi. Le vent est léger, mais il y a pas mal de courant tout de même.</p>
            <p>Après 20 minutes de traversée, nous arrivons enfin sur l'île. Nous sommes accueillies par deux toutous qui font la sécurité.</p>
            <p>L'île est privée et habitée par une famille philippine, des amis de nos hôtes. Il n’y a donc aucun problème pour nous de débarquer. La plage est belle, recouverte de coquillages.
On profite un bon quart d'heure de ce décor de rêve avant de repartir vers l'hôtel.</p>
            <h4>⧐ Au revoir San Vicente !</h4>
            <p>De retour sur la terre ferme et après une douche rapide, on boucle nos bagages. Bye bye l’<strong><a href="https://www.booking.com/hotel/ph/acuario-beach-inn.fr.html?aid=311089&amp;label=acuario-beach-inn-P01QuINdavdtg8ZsEAT%2AlgS480407153504%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-616187973511%3Alp9054964%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9Ydj4ck6nIj5Ykl4ofbGzlVw&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742572192&amp;srpvid=91356f4da4cf03c8&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Acuario Beach Inn</a></strong> ! On a un petit pincement au cœur en partant… On y était tellement bien !</p>
            <p>Direction le <a href="https://g.co/kgs/3UahUhR" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Mango Bar</strong></a> au port de San Vicente pour déjeuner. Au menu, un crabe fraîchement pêché pour Laurie (390 Php, soit 6€40) et un demi-poulet frit pour Amélie (260 Php, soit 4€25).</p>
            <p>Après une lutte acharnée avec le crabe et quelques fous rires (il fallait la voir dépiauter la bête !), nous nous dirigeons vers le quai d’embarquement.</p>
            <p>Le départ de notre taxi-boat est prévu à 15h30, et il est à l’heure ! La traversée se passe sans encombre. On a hâte de retrouver Port Barton !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1552_jpg-768x1024.jpg" alt="Surf San Vicente Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1533-768x1024.jpg" alt="San Vicente Port Barton Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <h3>⪢ Où manger à San Vicente ?</h3>
            </div>
            <ul>
              <li><strong><a href="https://www.booking.com/hotel/ph/the-elizabeth-resort-and-villas-san-vicente1.fr.html?aid=356980&amp;label=gog235jc-1FCAsotAFCLHRoZS1lbGl6YWJldGgtcmVzb3J0LWFuZC12aWxsYXMtc2FuLXZpY2VudGUxSA1YA2hNiAEBmAENuAEHyAEN2AEB6AEB-AECiAIBqAIDuAKBkOW-BsACAdICJDlmYzUxMDEyLThiNTctNGIxZi1iNzcxLTg4NDNiNWNiYjRiMtgCBeACAQ&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742292998&amp;srpvid=0ef94841e3e10689&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">The Hotel Elizabeth</a>  </strong>€€€€</li>
              <li><strong><a href="https://www.booking.com/hotel/ph/club-agutaya.fr.html?aid=318615&amp;label=New_French_FR_FR_21427169905-YP8jtirKV%2AkzSzTpDnHYDwS640938627539%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742292888&amp;srpvid=b7054809eb8d041e&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Club Agutaya</a>  </strong>€€€€</li>
              <li><a href="https://g.co/kgs/3UahUhR" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Mango Bar</strong></a>  €€</li>
              <li><strong><a href="https://g.co/kgs/KMF4hyB" target="_blank" rel="noopener noreferrer" className="article-link">The Turtle Beach Restaurant</a>  </strong>€€</li>
            </ul>
          </section>

          <section id="retour-port-barton" className="article-section">
            <div className="article-day-header">
              <h2>📍 De retour à PORT BARTON</h2>
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 1</span>
              <h3>Port Barton, on est lààààà !</h3>
            </div>
            <p>Pour notre nouveau séjour, nous allons cette fois-ci à <strong><a href="https://www.booking.com/hotel/ph/ausan-beach-front-cottages.fr.html?aid=318615&amp;label=New_English_EN_FR_21457884505-T0t%2AedlXm_oGkIMqMNUhEAS217291026622%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742573592&amp;srpvid=0ef972081cae0326&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Ausan Beach Cottages and Restaurant</a></strong>. L’hôtel est sur la plage. Et ça tombe bien, le taxi-boat nous débarque juste devant ! En réalité, on serait bien retournées à l’<strong><a href="https://www.booking.com/hotel/ph/casa-bienvenida-port-barton.fr.html?aid=318615&amp;label=New_French_FR_FR_21427169905-YP8jtirKV%2AkzSzTpDnHYDwS640938627539%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742573641&amp;srpvid=14f87222c6c6061a&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Acuarius</a></strong>, mais il était complet à cette période.
Via le site <a href="https://www.agoda.com/fr-fr/?site_id=1922882&amp;tag=7e7df9ad-ccac-41a9-b16d-8006125a5554&amp;gad_source=1&amp;gbraid=0AAAAAD-GdVkL7Hfb-pOORVfc970QWry4o&amp;gclid=CjwKCAjwnPS-BhBxEiwAZjMF0kS03_0qoOEd6c7v9JkLlK3JOa1BfUhrjr1VM76ewIl9H1H4UY09xxoCBoAQAvD_BwE&amp;ds=jB6VzvZgMGBHTJSk" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Agoda</strong></a> (très utilisé pour les réservations d’hôtels aux Philippines), nous avons payé 10,320 Php (170€) pour 5 nuits, petits-déjeuners compris.</p>
            <p>Nous nous installons dans notre joli cottage et partons au <strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d12553878-Reviews-Happy_Bar-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaropa.html" target="_blank" rel="noopener noreferrer" className="article-link">Happy Bar</a></strong>, notre bar de plage favori, pour l'apéro sunset.</p>
            <p>On dînera ensuite au <a href="https://g.co/kgs/3sWQdDG" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Star Apple Canteen</strong></a>. C’est qu’on commence à avoir nos petites habitudes ici ! Bref, une fin de journée comme on les aime.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1907-768x1024.jpg" alt="Sunset Port Barton San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1909_jpg-768x1024.jpg" alt="Sunset Port Barton San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 2</span>
              <h3>Bonjour la pluie !</h3>
            </div>
            <h4>⧐ Nuit bruyante, réveil difficile...</h4>
            <p>À <strong><a href="https://www.booking.com/hotel/ph/ausan-beach-front-cottages.fr.html?aid=318615&amp;label=French_France_FR_FR_29561940985-TFY%2A91RWOVxczPiz8FpYoQS637818831735%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55405862004%3Atidsa-331215073644%3Alp9054943%3Ali%3Adec%3Adm%3Aag29561940985%3Acmp339479545&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742575181&amp;srpvid=50ed752438ed05ef&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Ausan Beach</a></strong>, nous avions réservé un petit cottage, mais pas de bol, nous sommes tombées sur celui situé juste à côté de la cuisine et face au restaurant. Clairement, à cause du bruit incessant, la nuit n'a pas été de tout repos ! Chose qu’on fait vraiment rarement (voire jamais), on s’est permises d’en parler avec les réceptionnistes, qui se sont montrées, pour le coup, très compréhensives. Comme l’hôtel est plein, nous n’avons le choix que de passer encore 2 nuits dans notre cottage avant de pouvoir changer de chambre.</p>
            <p>Pour les 2 dernières nuits, nous serons dans le bâtiment au 1er étage, vue sur la mer ! Mais surtout, on sera au calme. Du coup, notre petit conseil si vous réservez dans cet hôtel, évitez les cottages.</p>
            <p>À part ça, le petit-déjeuner, inclus dans le prix de la chambre, est varié et délicieux. C'est d’ailleurs ici qu’on a mangé les meilleurs banana pancakes ! Le restaurant de l'hôtel propose également, à tout moment de la journée, des plats copieux, super bons, et peu onéreux (comptez en moyenne 250 Php / 4€10).</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_3799-768x1024.jpg" alt="Ice-cream Port Barton San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2068-768x1024.jpg" alt="Fisherman Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Un peu de pluie aujourd'hui, mais rien qui puisse nous arrêter. On se balade dans les petites rues de Port Barton en profitant de chaque instant.</p>
            <p>Pour le déjeuner, direction le <strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d13163383-Reviews-Mojitos_RestoBar-Port_Barton_San_Vicente_Palawan_Island_Palawan_Province_Mimaro.html" target="_blank" rel="noopener noreferrer" className="article-link">Mojito Bar</a></strong> qui se trouve à une quinzaine de minutes à pied de la plage de Port Barton. Ambiance jardin tropical, l’endroit est agréable et apaisant. Leurs mini-burgers sont incroyables, et les mojitos excellents !</p>
            <h4>⧐ Manucure à Port Barton</h4>
            <p>En redescendant vers le centre de Port Barton par la route principale (celle du terminal des bus), nous passons devant un salon de manucure. Ça fait quelques jours que Laurie me fatigue avec ses ongles qu’elle aimerait refaire faire. Il pleut, alors ça peut être enfin le bon moment ! Un rapide coup d’œil sur les avis Google… il y a de très bons commentaires, let’s go !</p>
            <p>Le salon s’appelle <strong><a href="https://g.co/kgs/CzUm4bG" target="_blank" rel="noopener noreferrer" className="article-link">Hynails services</a></strong>. La nana est très appliquée et les produits sont de bonne qualité. Le tarif est de 500 Php (8€) pour une pose de vernis semi-permanent. C’est franchement très correct ! Bref, vous pouvez y aller les yeux fermés.</p>
            <h4>⧐ On se fait tatouer !</h4>
            <p>La journée est déjà presque terminée, mais on a encore un petit truc à faire… Nous avons rendez-vous au <strong><a href="https://g.co/kgs/XJnk8rA" target="_blank" rel="noopener noreferrer" className="article-link">Rebel Art Tattoo Kollectiv</a></strong>. Et oui, impossible de résister à l’idée de se faire tatouer en souvenir de ce merveilleux voyage !</p>
            <p>Le salon est très propre, l’ambiance très sympa et les tatoueurs très pros. Pendant que nous nous faisions tatouer, on a même eu droit à un petit concert privé de Skinny, le super assistant qui fait tout pour nous mettre à l’aise.</p>
            <p>Nos tatouages sont canons, on est ravies du résultat. En plus, le tarif défie toute concurrence. Clairement, on vous recommande cette adresse à 100 %.</p>
            <p>Repas du soir à <strong><a href="https://www.tripadvisor.fr/Restaurant_Review-g1370797-d9746403-Reviews-Kusinero_Del_Barrio_Restobar-Port_Barton_San_Vicente_Palawan_Island_Palawan_Prov.html" target="_blank" rel="noopener noreferrer" className="article-link">Kusinero del Barrio</a></strong>. Incontestablement, l’un de nos restaurants préférés à Port Barton.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_3793-768x1024.jpg" alt="Rebel Art Tattoo Kollectiv Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_3794-768x1024.jpg" alt="Rebel Art Tattoo Kollectiv Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_3798-768x1024.jpg" alt="Rebel Art Tattoo Kollectiv Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 3</span>
              <h3>Un avant-goût de Noël</h3>
            </div>
            <p>Ce midi, nous allons déjeuner au <a href="https://www.booking.com/hotel/ph/barton-jungle-cottages.fr.html?aid=318615&amp;label=New_French_FR_FR_21427169905-YP8jtirKV%2AkzSzTpDnHYDwS640938627539%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2412760&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742579121&amp;srpvid=5cb77cd657e8000a&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Jungle Bar Resto &amp; Cottages</strong></a>. Pour le rejoindre, il faut compter 30 minutes de tuk-tuk sur une route bien chaotique. Il faut en fait emprunter la même route que pour aller à White Beach. Il y a des panneaux en chemin pour indiquer l’endroit… Si vous voyez « Don’t worry, beer happy », c’est par là ! Pour info, prévoir entre 500 et 600 Php (entre 8 et 10€) pour le trajet Aller-Retour.</p>
            <p>Le <a href="https://www.booking.com/hotel/ph/barton-jungle-cottages.fr.html?aid=318615&amp;label=New_French_FR_FR_21427169905-YP8jtirKV%2AkzSzTpDnHYDwS640938627539%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2412760&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742579121&amp;srpvid=5cb77cd657e8000a&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Jungle Bar</strong></a> est tenu par Sandrine, une Française expatriée depuis une dizaine d'années. On y découvre de jolis cottages avec une vue imprenable sur la baie. Le lieu est calme, idéal pour se reposer et profiter de la nature.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1951-1024x768.jpg" alt="Sunset Port Borton San Vicente" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_1955-768x1024.jpg" alt="Sunset Port Borton San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>De retour dans le centre de Port Barton, vu la foule qui se presse dans tous les sens, on sent qu’il se passe un événement exceptionnel. On découvre qu’un marché est installé, avec des stands de jeux (casino), de street food, de vêtements et de babioles en tout genre.</p>
            <p>Nous apprenons que Noël aux Philippines est une fête qui dure plusieurs semaines. C'est d’ailleurs la saison des festivités la plus longue au monde. Les préparatifs commencent dès septembre et marquent officiellement le début de la période de Noël.</p>
            <p>À Port Barton, Noël se vit dans une ambiance simple mais riche en traditions. Du coup, on a pu assister à l’une d’elles : la distribution de sacs de riz aux habitants, une coutume courante dans les villages philippins. Vous n’imaginez pas à quel point les gens étaient heureux de recevoir ce cadeau ! Ici, Noël est donc bien plus qu'une période de fête, c'est un moment de solidarité et de partage, où de simples gestes renforcent les liens entre les habitants.</p>
            <p>Alors voilà, à la mi-novembre, sous 37 degrés et à l'ombre des palmiers, tout le monde se salue joyeusement en se souhaitant un Merry Christmas. Plutôt fun !</p>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 4</span>
              <h3>On s'offre un Island hopping privé !</h3>
            </div>
            <p>Aujourd’hui, on a décidé de se faire plaisir ! On part en bateau privé à la journée pour 6,000 Php. Le prix est fixe, du coup, plus on est nombreux, moins cela revient cher.</p>
            <p>L'avantage du tour privé, c'est qu'on choisit notre itinéraire…</p>
            <h4>⧐ Palawan Camping</h4>
            <p>Alors c’est parti pour notre première destination, et on a choisi <a href="https://www.tripadvisor.fr/Hotel_Review-g1370797-d2648926-Reviews-Thelma_and_Toby_s_Island_Camping_Adventure-Port_Barton_San_Vicente_Palawan_Island_Pal.html" target="_blank" rel="noopener noreferrer" className="article-link"><strong>Palawan Camping</strong></a>. Vous vous en souvenez ? C’est le petit paradis que nous avions découvert lors d'une halte en taxi-boat en direction de San Vicente !</p>
            <p>En chemin, une tortue nous fait l'honneur d'apparaître et de nous montrer sa p’tite tête. Un moment magique.</p>
            <p>Accessible uniquement par bateau, la plage de ce camping de luxe est magnifique, avec une eau limpide. Pendant qu’on se baigne, l'équipage du bateau nous prépare le déjeuner. Poulet, ribs de porc, poisson frais, calamars, salades, riz…, le buffet gargantuesque est préparé avec soin. On prend le temps de savourer ce repas dans ce cadre magique.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/VID_20241205_034255_00_102_2025-08-10_18-03-50_capture-decran-1024x768.jpg" alt="Island hopping Port Barton" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2023-1024x768.jpg" alt="Camping Palawan Port Barton San Vicente" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <h4>⧐ Gilligans Beach</h4>
            <p>Après un moment de détente, cap sur la plage privée <strong><a href="https://www.booking.com/hotel/ph/4281593.fr.html?aid=356980&amp;label=gog235jc-1FCAsotAFCBzQyODE1OTNIDVgDaE2IAQGYAQ24AQfIAQ3YAQHoAQH4AQKIAgGoAgO4Arjb9r4GwAIB0gIkZTM1OGFiYjItYTcxMi00MmU1LTllZDQtNWFlMjc4Y2RmYmZj2AIF4AIB&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742581180&amp;srpvid=5d1580dc9628016d&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Gilligans</a></strong>, un autre endroit paradisiaque.</p>
            <p>Cette plage est également accessible par la route. On y découvre une maison entièrement équipée à louer pour 10 personnes, parfaite pour un séjour en groupe. Un petit bar de plage charmant avec des balançoires ajoute à l'ambiance une touche paisible et détendue.</p>
            <p>Ici, le temps semble s’être arrêté. À peine le temps d'avaler une petite bière qu'il est déjà l’heure de rentrer.</p>
            <p>Sur le chemin du retour, nous avions prévu de passer par le spot des tortues, mais le temps est passé trop vite. Cela dit, nous avons tellement profité de cette journée que nous ne regrettons rien. De toute façon, pas le choix, les bateaux doivent impérativement rentrer avant la tombée de la nuit.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2044-768x1024.jpg" alt="Gilligans Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2060-768x1024.jpg" alt="Island hopping Port Barton San Vicente" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <span className="article-day-badge">Jour 5</span>
              <h3>Derniers instants dans notre petit paradis</h3>
            </div>
            <p>Nous partons cet après-midi. On profite de nos derniers moments dans notre village coup de cœur des Philippines !</p>
            <p>Après un petit tour en ville, on déjeune au restaurant <strong><a href="https://g.co/kgs/fuwyWjU" target="_blank" rel="noopener noreferrer" className="article-link">El Busero Inn</a></strong>, situé sur la plage, juste à côté de notre hôtel <strong><a href="https://www.booking.com/hotel/ph/ausan-beach-front-cottages.fr.html?aid=318615&amp;label=French_France_FR_FR_29561940985-TFY%2A91RWOVxczPiz8FpYoQS637818831735%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55405862004%3Atidsa-331215073644%3Alp9054943%3Ali%3Adec%3Adm%3Aag29561940985%3Acmp339479545&amp;sid=bd72daa3ed8ce8298c9cde0c2d682f49&amp;dest_id=-2452200&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1742581874&amp;srpvid=1ada8237b3810540&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Ausan Beach</a></strong>. C'est le tout premier restaurant de Port Barton, et la cuisine y est excellente. Laurie a goûté une de leurs spécialités, le ceviché de thon. Visiblement, le meilleur de sa vie !</p>
            <p>En dessert, nous nous laissons tenter par une glace à l'ubé, au glacier juste à côté. Sa couleur violette nous intrigue. L’ubé est en fait un légume, mais son goût est étonnamment sucré. Une délicieuse découverte pour conclure ce dernier repas !</p>
            <p>Il est temps de quitter notre petit paradis. Nous avons réservé un tuk-tuk pour rejoindre notre prochaine destination, à moins d’une heure d’ici. Au revoir Port Barton !</p>
          </section>

          <section id="roxas" className="article-section">
            <div className="article-day-header">
              <h2>📍 Welcome to ROXAS !</h2>
            </div>
            <div className="article-day-header article-day-header-tight">
              <h3>Roxas, une petite ville surprenante !</h3>
            </div>
            <p>C'est depuis Roxas que nous embarquerons pour la dernière grande destination de ce voyage...</p>
            <p>Quitter Port Barton n'a pas été facile, mais on sait que l'endroit qui nous attend saura vite nous faire oublier ce petit pincement au cœur.</p>
            <h4>⧐ Comment se rendre à Roxas ?</h4>
            <p>Roxas est la plus grande ville proche de Port Barton. Cette municipalité est située sur la côte Est de Palawan. Il faut compter 45 minutes en tuk-tuk pour s'y rendre. Comptez environ 1,000 Php (16 €) pour le trajet.</p>
            <p>Il est également possible de faire le transfert en van, mais cette option est plus onéreuse. Au-delà du tarif, on trouve que c’est bien plus sympa de pouvoir admirer les paysages en tuk-tuk !</p>
            <h4>⧐ Fin de soirée festive à Roxas</h4>
            <p>Nous arrivons à Roxas en début de soirée. Nous avons réservé une chambre au <strong><a href="https://fr.hotels.com/ho1240449472/peria-seafront-pensione-roxas-philippines?chkin=2025-04-05&amp;chkout=2025-04-06&amp;x_pwa=1&amp;rfrr=HSR&amp;pwa_ts=1742664239969&amp;referrerUrl=aHR0cHM6Ly9mci5ob3RlbHMuY29tL0hvdGVsLVNlYXJjaA%3D%3D&amp;useRewards=false&amp;rm1=a2&amp;regionId=553248635924198075&amp;destination=Roxas%2C%20Mimaropa%2C%20Philippines&amp;destType=MARKET&amp;selected=38732796&amp;latLong=10.249474%2C119.326293&amp;sort=RECOMMENDED&amp;top_dp=22&amp;top_cur=EUR&amp;gclid=Cj0KCQjwv_m-BhC4ARIsAIqNeBuLF_X4pIzvk90M7aX9mj_hJ9yI1CBiXbv5-CSA5ktqftZqJ4CEztMaAvXLEALw_wcB&amp;semcid=HCOM-FR.UB.GOOGLE.PT-c-FR.HOTEL&amp;semdtl=a115305895973.b1130175182723.g1kwd-344028004499.e1c.m1Cj0KCQjwv_m-BhC4ARIsAIqNeBuLF_X4pIzvk90M7aX9mj_hJ9yI1CBiXbv5-CSA5ktqftZqJ4CEztMaAvXLEALw_wcB.r167c6bbef2342dd413a26554f133be1e22e2a8d7f1a699d9e57aab31c419532ce.c1xwGpKACiAYdbNfCyz5Y9_A.j19054943.k19061350.d1569216088702.h1e.i1.l1.n1.o1.p1.q1.s1.t1.x1.f1.u1.v1.w1&amp;userIntent=&amp;selectedRoomType=213624095&amp;selectedRatePlan=244203389&amp;expediaPropertyId=38732796&amp;searchId=6b6efcd3-5f9b-4202-b89e-131d8a4212ee" target="_blank" rel="noopener noreferrer" className="article-link">Peria Seafront</a></strong>. L’ambiance est exceptionnellement particulière car ils préparent et décorent leur hall pour une réception de mariage prévue le lendemain. L’hôtel dispose d’un ponton, ce qui ajoute un charme à cet endroit.</p>
            <p>Direction le centre-ville pour explorer un peu les environs. Nous arrivons en plein cœur des festivités ! Un grand tournoi de basket est organisé… ce qui n'est pas étonnant puisque ce sport est une véritable institution aux Philippines. Même dans les villages les plus isolés, il y a toujours un panier de basket.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2158-768x1024.jpg" alt="Peria Seafront Roxas Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2168-768x1024.jpg" alt="Jeepney Roxas Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2127-768x1024.jpg" alt="Peria Seafront Roxas Port Barton" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2146-1024x768.jpg" alt="Noël Roxas Port Barton" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Juste à côté a lieu une fête foraine avec des stands de jeux et des manèges. Tout d’un coup, la foule se presse pour se rassembler sur la place principale. Très curieuses, on les suit. On comprend rapidement que tout le monde attend avec impatience l'illumination du sapin de Noël !</p>
            <p>On profite de l'ambiance chaleureuse pour grignoter quelques spécialités dans les stands de nourriture. On adore !</p>
            <p>Après ce moment en immersion, on ne traîne pas et on retourne à l'hôtel pour une bonne nuit de sommeil.</p>
            <p>Demain, on a rendez-vous entre 10h et 11h30, à quelques minutes à pied de là, pour embarquer sur un bateau… On l'a tellement attendu ce moment !</p>
          </section>

          <section id="modessa" className="article-section">
            <div className="article-day-header">
              <h2>📍 MODESSA ISLAND ou le paradis sur Terre !</h2>
            </div>
            <p>Réveil matinal, on est tellement excitées ! Direction le point de rendez-vous.</p>
            <p>Il est quasiment midi quand on embarque sur une petite bangka, qui nous conduit à une autre bien plus grande. Du coup, en pleine mer, changement de bateau en mode Filipino style !</p>
            <p>Après 1h de traversée, on arrive sur une petite île privée, et quand on dit petite, on ne mâche pas nos mots…</p>
            <p>Bienvenue à Modessa Island !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2183_jpg-768x1024.jpg" alt="Bangka Modessa Island Roxas" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2203-1024x768.jpg" alt="Modessa Island Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <div className="article-day-header article-day-header-tight">
              <h3>Débarquement sur Modessa Island</h3>
            </div>
            <p>Nous restons 2 nuits sur cette île paradisiaque. Cet endroit a été partiellement détruit par le passage du typhon Odette en 2021. Selon le personnel, l’île était encore plus belle avant, mais pour nous, elle est déjà parfaite.</p>
            <p>Certaines installations semblent un peu dater, mais l'atmosphère qui se dégage de cette île fait vite oublier ce détail. La plage est sublime, l’eau d’un bleu cristallin… Un vrai décor de carte postale !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2209-768x1024.jpg" alt="Modessa Island Beach" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2215-1024x768.jpg" alt="Modessa Island Beach" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>On nous accompagne jusqu’à notre bungalow. Il y en a une dizaine sur la plage. Construits traditionnellement en bois, en bambou et en feuillage tressé, l’hébergement offre à lui seul une expérience authentique et rustique.</p>
            <p>Les bungalows sont tous équipés d'un grand lit et d’un petit lit, d'une salle de bain privée, d'un ventilateur électrique et d'un hamac sur la terrasse pour se détendre face à la mer.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/IMG_5196-1-768x1024.jpg" alt="Modessa Island Bungalow" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2412-768x1024.jpg" alt="Modessa Island Roxas Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Une fois installées, nous partons explorer l’île. Il ne faut pas plus de 20 minutes pour faire tranquillement le tour. Les stigmates du typhon Odette sont encore visibles, notamment l'ancien club de plongée, partiellement détruit par la tempête.</p>
            <p>L’île est entourée d'une plage de sable blanc et bordée d’une mer limpide. On se sent tellement bien ici. On se sent comme seules au monde. C’est la déconnexion totale !</p>
            <p>D’ailleurs, il n’y a pas d’électricité la journée. Elle fonctionne uniquement de 18h à 7h. Le Wi-Fi et le réseau cellulaire sont limités, autant vous dire qu’on profite pleinement de l'expérience insulaire.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Sur Modessa Island, l'électricité ne fonctionne que de 18h à 7h : pensez à charger téléphones, appareils photo et batteries externes pendant la nuit. Et profitez-en pour décrocher complètement le reste de la journée !</p></div>
            </div>
            <p>Pour la petite anecdote, sachez que s’il y a beaucoup de vent ou que le ciel est très couvert, il n’y a tout simplement pas de réseau dans de nombreux endroits du pays ! Les Philippins nous l’ont souvent répété, et ça s’est avéré chaque fois.</p>
            <div className="article-day-header article-day-header-tight">
              <h3>Que faire à Modessa Island ?</h3>
            </div>
            <p>Alors, qu’est-ce qu’on va faire ici pendant 2 jours ?!!</p>
            <p>Bah, pas grand-chose en fait... et c’est ça qui est bon !</p>
            <h4>⧐ Farniente</h4>
            <p>La plage face aux hébergements est paradisiaque et parfaite pour se détendre, bouquiner ou faire bronzette.</p>
            <p>C’est l’endroit idéal pour prendre le temps de prendre le temps.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2317-768x1024.jpg" alt="Farniente Modessa Island" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2422-768x1024.jpg" alt="Farniente Modessa Island" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Snorkeling</h4>
            <p>Modessa est entourée de récifs coralliens. On y découvre une faune marine diversifiée, notamment des poissons tropicaux et des étoiles de mer. Des informations à ce sujet sont affichées dans la salle du restaurant.</p>
            <p>Ils rappellent, par exemple, de ne surtout pas toucher les poissons-pierres, les raies pastenagues et les poissons-lions. De par leurs défenses venimeuses, leurs piqûres peuvent être extrêmement dangereuses, voire mortelles !</p>
            <p>Si vous n’avez pas de matériel de snorkeling, pas de panique… vous avez la possibilité d’en louer ici !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2224.jpg-768x1024.jpg" alt="Snorkeling Modessa Island" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2216-1024x768.jpg" alt="Modessa Island Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <h4>⧐ Balades</h4>
            <p>Au rythme des marées, des bancs de sable apparaissent et disparaissent. Bien entendu, on s’est amusées à les rejoindre.</p>
            <p>On a assisté à une scène surprenante : deux chiens de l’île nageaient, se déplaçant dans l’eau avant de s’immobiliser comme s’ils attendaient quelque chose.</p>
            <p>Plus tard, le gérant nous a expliqué qu’ils partaient faire leurs courses, pêchant leurs poissons qu’ils ramenaient ensuite pour qu’on les leur cuisine. Incroyable, non ?!!</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2241-1024x768.jpg" alt="Modessa Island plage" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/VID_20241208_141612_00_116_2025-08-11_10-44-44_capture-decran-1-768x1024.jpg" alt="Modessa Island Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <h4>⧐ Activités</h4>
            <p>Un terrain de basket-ball ainsi qu’un filet de beach-volley sont à disposition.</p>
            <p>Il y a également un billard près du restaurant.</p>
            <h4>⧐ Restauration</h4>
            <p>Au niveau de la restauration, tout est préparé à la minute avec des produits frais. Comme chaque séjour ici est en pension complète, on nous propose pour chaque repas de choisir entre deux plats, toujours accompagnés d'une salade. En dessert, on a droit à des fruits frais, of course.</p>
            <p>Pour le petit-déjeuner, c’est œufs (sous toutes ses formes !) ou pancakes, servis avec des fruits.</p>
            <p>Le café, le thé et l’eau filtrée restent à disposition tout au long de la journée.</p>
            <div className="article-day-header article-day-header-tight">
              <h3>Comment se rendre à Modessa Island ?</h3>
            </div>
            <p>Si vous souhaitez venir dans ce paradis perdu, vous pouvez contacter directement MARCO (☎️ +63 912 045 9971), le responsable de l’île, qui se fera un plaisir de vous organiser cette expérience unique !</p>
            <p>Pour ce séjour de 2 nuits, nous avons payé 5,500 Php (90 €) par personne. Les transferts en bateau Roxas &lt;-&gt; Modessa, ainsi que tous les repas, sont compris.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2236-1-1024x768.jpg" alt="Modessa Island Palawan" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2255-768x1024.jpg" alt="Modessa Island Palawan" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Modessa Island est une destination idéale pour ceux qui recherchent une escapade paisible, loin de l'agitation touristique.</p>
            <p>C’est l’endroit parfait pour se reconnecter avec la nature dans un cadre idyllique.</p>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À ne pas manquer</strong><p>Modessa Island, c'est notre paradis sur Terre de ce voyage : une île privée minuscule, du sable blanc, une mer limpide et zéro réseau. Deux nuits dans un bungalow les pieds dans l'eau, on en rêve encore.</p></div>
            </div>
          </section>

          <section id="au-revoir" className="article-section">
            <div className="article-day-header">
              <h2>📍 Bye bye PALAWAN. Ce n'est qu'un au revoir...</h2>
            </div>
            <p>Après un bon dernier petit-déjeuner, il est temps de quitter ce petit paradis perdu. Retour à Roxas en bangka et direction la <strong>terminal station</strong> en tuk-tuk pour prendre un van public.</p>
            <p>Ce matin, on a le cœur lourd… On sent particulièrement arriver la fin de notre voyage.</p>
            <div className="article-day-header article-day-header-tight">
              <h3>Direction Puerto Princesa en van</h3>
            </div>
            <p>Pas besoin de booker à l’avance le van, il y en a toutes les 45 minutes environ. Par contre, il ne vaut mieux pas avoir un timing serré pour le trajet... Normalement, il faut compter 2h de route pour aller de Roxas à Puerto Princesa, nous avons mis un peu plus de 3h !</p>
            <p>Il y avait en fait une cargaison de poissons en provenance d’El Nido dans des glacières stockées sur le toit du van, et nous avons dû faire une multitude d’arrêts pour la livrer.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2454-768x1024.jpg" alt="Tuk-tuk Roxas" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_2458_jpg-1024x768.jpg" alt="Van Roxas Puerto" loading="lazy" style={{flex: '1.333', minWidth: 0}} />
            </div>
            <p>Vu l’heure tardive à laquelle nous arrivons, le chauffeur nous dépose directement à l’hôtel. Pour notre dernière nuit sur Palawan, nous dormons au <strong><a href="https://www.booking.com/hotel/ph/master-39-s-pension-house.fr.html?aid=318615&amp;label=New_English_EN_FR_21457884505-T0t%2AedlXm_oGkIMqMNUhEAS217291026622%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg&amp;sid=59e751c6d0bf8f722d061486e9897dfe&amp;dest_id=-2446952&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1754203726&amp;srpvid=01ee2fe490960383&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Mariner’s Pension House</a></strong>.</p>
            <p>Il se situe plus ou moins dans le même quartier que le <strong><a href="https://www.booking.com/hotel/ph/puerto-pension-inn.fr.html?aid=318615&amp;label=New_French_FR_FR_21427176745-lf4RzVY0_AMET1LMhdKl_AS634186710868%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi55639435822%3Atidsa-303472602395%3Alp9054964%3Ali%3Adec%3Adm%3Aag21427176745%3Acmp339479545&amp;sid=59e751c6d0bf8f722d061486e9897dfe&amp;dest_id=-2446952&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1754203802&amp;srpvid=551f300b118c0318&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Puerto Pension Inn</a></strong>. Le petit truc en plus, c’est la piscine. Nous avons payé 1,720 Php (28 €) pour la nuit, petit-déjeuner compris.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/IMG_1100-1-768x1024.jpg" alt="Baywalk Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/IMG_1102-1-768x1024.jpg" alt="Market Baywalk Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Pour cette dernière soirée, on n’a pas pu s’empêcher de retourner sur la <strong>Baywalk</strong> et plus précisément d’aller manger au <strong><a href="https://share.google/hmh5oiAXeQ6PdgLXx" target="_blank" rel="noopener noreferrer" className="article-link">Kobe’s</a></strong>. On avait déjà testé ce petit resto lors de notre 1er passage à Puerto Princesa, en début de séjour, et on avait été conquises ! Sans aucun doute, ce sera un poisson grillé pour Laurie et un Beef Tagalog pour Amélie.</p>
            <p>Après un repas très copieux, histoire de digérer un peu, on fait un petit tour au marché. On en profite pour acheter quelques souvenirs avant de se remettre en chemin, direction l’hôtel. Demain matin, on pourra prendre le temps, notre avion pour Manille décolle seulement à 13h30.</p>
            <div className="article-day-header article-day-header-tight">
              <h3>En route pour Manille</h3>
            </div>
            <p>Après une bonne nuit de sommeil et un petit-déjeuner complet, nous profitons de la piscine jusqu’à ce qu’il soit temps de partir.</p>
            <p>On commande un tuk-tuk avec l’application <strong>RIDE</strong>, et direction l’aéroport. Ciaoooo Palawan !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/IMG_1098-768x1024.jpg" alt="Swimming pool Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/Tuk-tuk-Puerto-Princesa-768x1024.jpg" alt="Tuk-tuk Puerto Princesa" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
            <p>Nous arrivons à Manille pour la dernière nuit de notre séjour. Une toute petite nuit, car demain, nous devons être à l’aéroport à 3h30 ! Nous avons réservé à l'<strong><a href="https://www.booking.com/hotel/ph/achievers-airport.fr.html?aid=356980&amp;label=gog235jc-10CAsotAFCEWFjaGlldmVycy1haXJwb3J0SA1YA2hNiAEBmAEzuAEHyAEM2AED6AEB-AEBiAIBqAIBuALuk7zEBsACAdICJGU3N2Q2NWMzLTRmNWYtNGEwMS04ODAwLTdmMzIxNjUxZDExZdgCAeACAQ&amp;sid=59e751c6d0bf8f722d061486e9897dfe&amp;dest_id=-2437894&amp;dest_type=city&amp;dist=0&amp;group_adults=2&amp;group_children=0&amp;hapos=1&amp;hpos=1&amp;no_rooms=1&amp;req_adults=2&amp;req_children=0&amp;room1=A%2CA&amp;sb_price_type=total&amp;sr_order=popularity&amp;srepoch=1754204659&amp;srpvid=190c31b71d3e0314&amp;type=total&amp;ucfs=1&amp;" target="_blank" rel="noopener noreferrer" className="article-link">Achievers Airport Hotel</a></strong> (le même qu’à l’aller). Ce qui est top avec cet hôtel, c’est que les transferts sont inclus dans le tarif.</p>
            <p>Le van nous récupère donc au terminal, au niveau des arrivées. On est KO, alors on se la joue tranquille pour cette fin de journée.</p>
            <p>On trie nos affaires, ressortons nos vêtements d’hiver… Pour faire au plus rapide, on dîne au restaurant de l’hôtel. Les plats sont très bons, et niveau prix, c’est très correct. Le responsable en profite pour nous demander ce que nous voulons comme petit-déjeuner pour nous le préparer à emporter demain matin. Il y a une multitude de choix. Pour nous, ça sera gaufres et pancakes, simple et efficace. Repas avalé, on part se coucher. Le réveil sonne à 2h, aïe aïe aïe !</p>
            <div className="article-day-header article-day-header-tight">
              <h3>Palawan, tu nous manques déjà !</h3>
            </div>
            <p>C’est le grand jour ! Réveil très tôt comme prévu. On récupère nos box préparées avec amour pour notre petit-déjeuner, et c’est parti pour l’aéroport.</p>
            <p>Au revoir Manille, au revoir les Philippines... On se revoit bientôt, c’est sûr !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/08/IMG_1111-768x1024.jpg" alt="Aéroport Manille" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2025/03/IMG_3888-768x1024.jpg" alt="Aéroport Manille" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
            </div>
          </section>

          <section id="itineraire" className="article-section">
            <div className="article-day-header">
              <h2>➾ AUTRE ITINÉRAIRE DE 3 SEMAINES AUX PHILIPPINES</h2>
            </div>
            <p>Si vous souhaitez découvrir un autre <strong>itinéraire de 3 semaines</strong> à travers les Philippines et trouver toutes les infos pour préparer votre voyage (formalités, santé, météo, etc.), <strong>n'hésitez pas à lire cet article</strong>, on vous partage tout !</p>
            <a href="/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient" style={{display: 'block', margin: '24px 0'}}><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Les-Philippines-1024x819.jpg" alt="Les Philippines Blog" className="article-img-full" loading="lazy" /></a>
            <p><strong><a href="/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient" className="article-link">⋙ ITINÉRAIRE PHILIPPINES : 3 semaines pour découvrir la perle de l'Orient !</a></strong></p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/Frise-Mamzelles-1024x173.jpg" alt="Monuments du monde" className="article-img-full" loading="lazy" />
            <p><em><strong>Nous espérons que notre article sur PALAWAN vous aura plu et qu'il vous inspirera pour votre prochain voyage !</strong></em></p>
            <p><em><strong>Si vous avez des questions, ou que vous souhaitez nous partager un retour d'expérience, n'hésitez pas à nous la</strong><strong>isser un commentaire, à nous contacter via le </strong><strong><a href="/formulaire-de-contact" className="article-link">formulaire de contact</a> ou notre compte <a href="https://www.instagram.com/mamzellesenvadrouille/" target="_blank" rel="noopener noreferrer" className="article-link">Instagram</a>.</strong></em></p>
            <p><em><strong>Nous nous ferons un plaisir de vous lire et de vous répondre !</strong></em></p>
          </section>

          <section className="article-comments-section">
            <CommentsList comments={[]} />
            <CommentForm
              articleTitle={"Palawan : De Puerto Princesa à Port Barton, hors des sentiers battus"}
              articleUrl="https://mamzellesenvadrouille.com/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus"
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
                  <p className="article-related-title-card">Palawan : Entre El Nido &amp; Coron, découvrez le joyau des Philippines !</p>
                </div>
              </a>
              <a href="/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Les-Philippines-1024x819.jpg" alt="Itinéraire Philippines 3 semaines" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Philippines</span>
                  <p className="article-related-title-card">Itinéraire Philippines : 3 semaines pour découvrir la perle de l&apos;Orient !</p>
                </div>
              </a>
              <a href="/visiter-madrid-en-3-jours" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/Madrid-1536x1229.jpeg.webp" alt="Madrid" className="article-related-img" />
                </div>
                <div className="article-related-body">
                  <span className="article-related-cat">Espagne</span>
                  <p className="article-related-title-card">Visiter Madrid en 3 jours : notre guide complet !</p>
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
