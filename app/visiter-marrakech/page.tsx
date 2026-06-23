import type { Metadata } from 'next';
import './marrakech.css';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';
import PratiqueOnglets from '../components/PratiqueOnglets';

export const metadata: Metadata = {
  title: "Visiter Marrakech : que faire dans la ville rouge",
  description: "Tous nos conseils pour visiter Marrakech : quartiers, médina, visites incontournables, riads, où manger et infos pratiques pour préparer votre séjour.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/visiter-marrakech' },
  openGraph: {
    title: "Visiter Marrakech : que faire dans la ville rouge",
    description: "Tous nos conseils pour visiter Marrakech : quartiers, médina, visites incontournables, riads, où manger et infos pratiques pour préparer votre séjour.",
    url: 'https://mamzellesenvadrouille.com/visiter-marrakech',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: '/marrakech.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2022-12-27T13:46:02.000Z',
    authors: ['MamZelles en vadrouille'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Visiter Marrakech : que faire dans la ville rouge",
    description: "Tous nos conseils pour visiter Marrakech : quartiers, médina, visites incontournables, riads, où manger et infos pratiques pour préparer votre séjour.",
    images: ['/marrakech.webp'],
  },
};

export default function MarrakechPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Visiter Marrakech : que faire dans la ville rouge",
    description: "Tous nos conseils pour visiter Marrakech : quartiers, médina, visites incontournables, riads, où manger et infos pratiques pour préparer votre séjour.",
    image: '/marrakech.webp',
    datePublished: '2022-12-27',
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
      '@id': 'https://mamzellesenvadrouille.com/visiter-marrakech',
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
        <img className="hero-bg" src="/marrakech.webp" alt="Visiter Marrakech, la ville rouge" style={{objectPosition: 'center 55%'}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Marrakech<br /><em>Que faire dans la ville rouge</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Tous nos secrets pour découvrir la ville rouge et son effervescence.</p>
        </div>
      </section>

    </div>

      {/* BANDEAU EN BREF */}
      <div className="article-bref-bar">
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          <span>3 à 4 jours</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>
          <span>Printemps &amp; automne</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>
          <span>3 h 30 de Paris</span>
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
          <h2>Pourquoi nous avons adoré Marrakech</h2>
        </div>
        <div className="article-cdcr-grid">
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre quartier coup de cœur</span><span className="article-cdcr-value">→ La médina</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le moment le plus magique</span><span className="article-cdcr-value">→ Jemaa el-Fna à la nuit tombée</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">La visite incontournable</span><span className="article-cdcr-value">→ Le Jardin Majorelle</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">À tester<br className="tablet-only-br" /> sans hésiter</span><span className="article-cdcr-value">→ Une journée détente en riad</span></div>
        </div>
      </div>

      <div className="article-layout article-marrakech">
        <main className="article-main">

          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title">📌 Sommaire de l&apos;article</h2>
            <ol className="article-toc-list">
              <li><a href="#quartiers">📍 Se repérer dans les principaux quartiers de Marrakech</a></li>
              <li><a href="#medina">📍 Zoom sur la médina, notre quartier coup de cœur</a></li>
              <li><a href="#visites">📍 Que voir à Marrakech ? Les visites incontournables</a></li>
              <li><a href="#manger">📍 Où manger à Marrakech ?</a></li>
              <li><a href="#riads">📍 Riads où passer la journée</a></li>
              <li><a href="#loger">📍 Où loger à Marrakech ?</a></li>
              <li><a href="#ramadan">📍 Marrakech pendant le Ramadan, bonne idée ou pas ?</a></li>
              <li><a href="#organiser">📍 Tout savoir pour organiser son voyage à Marrakech</a></li>
              <li><a href="#agafay">📍 Désert d&apos;Agafay</a></li>
            </ol>
          </nav>

          <section className="article-section">
              <p className="article-intro"><strong>Que voir à Marrakech ? Que faire ? Que vous y séjourniez un week-end, quelques jours ou même une semaine, vous verrez, vous aurez toujours le sentiment de ne pas y rester suffisamment longtemps tellement cette ville est riche de découvertes ! </strong></p>
              <p><strong>Grâce aux visites incontournables et tous nos conseils, imprégnez-vous de l'effervescence de la ville rouge, que ce soit pour organiser votre séjour ou tout simplement vous inspirer...</strong></p>
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6164-1024x768.jpg" alt="Place Jemaa El-Fna nuit" className="article-img-full" loading="lazy" />
              <p>Surnommée <strong>la ville rouge</strong> en référence à la couleur d’une grande partie de ses immeubles et de ses maisons, Marrakech est la 4ème plus grande ville du Maroc après Casablanca, Fès et Tanger. Mais la ville rouge reste la <strong>capitale touristique</strong>.</p>
              <p>Marrakech, c'est le dépaysement total à seulement 3 h 30 de Paris en avion. De nombreux aéroports français proposent désormais des vols directs à moindre coût. C'est aussi un climat idéal quasiment toute l'année.</p>
              <p>Marrakech, c’est l’effervescence, ça part vraiment dans toutes les directions… Ce sont les couleurs, les odeurs, les saveurs qui stimulent tous vos sens.</p>
              <p>Marrakech, c’est aussi la culture, l'architecture et les paysages spectaculaires !</p>
              <p>Marrakech est une ville unique, une expérience à elle seule.</p>
              <p>Nous avons la chance d'avoir visité Marrakech à plusieurs reprises, notamment grâce au fait que les parents d’Amélie sont propriétaires d’un petit Riad (qu’ils mettent en location) au cœur de la médina, dans le quartier Dar El Bacha. On s’y sent un peu comme à la maison du coup !</p>
              <p>Ce point de chute à Marrakech nous a également permis d’organiser quelques road trips au Maroc, et ainsi de visiter de nombreuses régions…</p>
          </section>

          <section id="quartiers" className="article-section">
            <div className="article-day-header">
              <h2>📍 Se repérer dans les principaux quartiers de Marrakech</h2>
            </div>
              <p>Marrakech est divisé en plusieurs quartiers : la <strong>Médina</strong>, le <strong>Guéliz</strong>, l'<strong>Hivernage</strong> et la <strong>Palmeraie</strong>.</p>
              <p>L’architecture de chacun d’entre eux est bien différente, révélant ainsi leur époque de construction.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5221-768x1024.jpg" alt="Souk Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5271-768x1024.jpg" alt="Derb Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <div className="article-day-header article-day-header-tight">
                <h3>⧐ La MÉDINA, ou la vieille ville de Marrakech</h3>
              </div>
              <p>Cerclée par ses 19 kilomètres de remparts, la médina de Marrakech s’étend sur 600 hectares. Elle est la plus peuplée de l'Afrique du Nord.</p>
              <p>Classée au patrimoine mondial de l’humanité par l'UNESCO, elle est le cœur historique de Marrakech.</p>
              <p>La médina est la partie la plus touristique, mais aussi la plus authentique de la ville rouge. Elle est elle-même composée de nombreux quartiers.</p>
              <p>Ce labyrinthe de ruelles abrite la plupart des attractions à ne surtout pas manquer : <strong>la fameuse place Jemaa el-Fna, les souks, les monuments historiques, les musées, sans oublier les nombreux petits restaurants qui éveilleront vos papilles</strong>.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6090-1024x768.jpg" alt="Café des épices Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5675-768x1024.jpg" alt="Boutique cuir Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <div className="article-day-header article-day-header-tight">
                <h3>⧐ De l'autre côté des remparts, le GUÉLIZ</h3>
              </div>
              <p>Le Guéliz est le premier quartier moderne de Marrakech. Ce quartier occidentalisé a été construit lors du protectorat français sur le Maroc. Pour la petite anecdote, le nom « Guéliz » proviendrait de la déformation de la prononciation du mot « Église » !</p>
              <p>Dans ce quartier, loin de l’effervescence de la médina, vous trouverez de longues rues et de larges avenues, toutes bordées de terrasses de cafés, de restaurants et de bars.</p>
              <p>Si vous avez envie de faire les boutiques, notamment de grandes marques internationales, vous êtes au bon endroit ! Rendez-vous alors dans le centre commercial où vous trouverez aussi toutes les chaînes de fast food les plus connues !</p>
              <p><strong>Le jardin Majorelle, la splendide gare de Marrakech, le Palais des Congrès ou encore le Théâtre Royal</strong> se trouvent dans le Guéliz.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6290-1024x768.jpg" alt="SkyBar Guéliz Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6279-769x1024.jpg" alt="Boutiques Guéliz" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <div className="article-day-header article-day-header-tight">
                <h3>⧐ L'HIVERNAGE, ou le quartier chic de Marrakech</h3>
              </div>
              <p><strong>Hôtels prestigieux, salons de cocktails, casinos, clubs lounges, boites de nuit et voitures de luxe</strong>… Bienvenue dans l’Hivernage !</p>
              <p>Ce quartier attire les populations aisées à la recherche de modernité et de vie nocturne.</p>
              <p>Même si nous n’aspirons pas vraiment à cette ambiance, l’Hivernage reste un quartier agréable à découvrir et pour y flâner… Les rues sont propres, verdoyantes, et la végétation y est luxuriante.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_8377-1024x768.jpg" alt="Hivernage Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_1556-1-1024x768.jpg" alt="Hivernage Marrakech" loading="lazy" />
              </div>
              <div className="article-day-header article-day-header-tight">
                <h3>⧐ La PALMERAIE, ou le poumon de la ville rouge</h3>
              </div>
              <p>Ce quartier est clairement un oasis de verdure ! Pourtant, il doit malheureusement céder aujourd’hui de la place aux complexes hôteliers de luxe…</p>
              <p>Cette vaste zone de 13 000 hectares est un véritable patrimoine naturel marocain. En effet, on y trouve plus de 150 000 arbres, et notamment des palmiers, qui permettent aux marocains de produire des dattes, de l'huile, du vin de palme, des cœurs de palmier ou encore du bois.</p>
              <p>C’est grâce à un réseau de canalisation souterrain ancestral que tous ces hectares de palmeraie sont irrigués.</p>
              <p>Dans ce quartier, cohabitent donc avec cet <strong>écrin de verdure, de grandes résidences hôtelières, toutes équipées d’énormes piscines et de salles de sport, et des propriétés démesurées de personnes fortunées</strong>.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_2233-2-1024x768.jpg" alt="Quad Palmeraie Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_2243-1024x768.jpg" alt="Quad Palmeraie Marrakech" loading="lazy" />
              </div>
          </section>

          <section id="medina" className="article-section">
            <div className="article-day-header">
              <h2>📍 Zoom sur la médina, notre quartier coup de cœur</h2>
            </div>
              <div className="article-day-header article-day-header-tight">
                <h3>⧐ La MÉDINA, un vrai souk !</h3>
              </div>
              <p>C'est le bazar anarchique que l’on trouve dans la médina qui en fait particulièrement son charme. Les souks sont idéaux pour se plonger pleinement dans la vie marocaine.</p>
              <p>Une question nous est souvent posée : <strong>faut-il prendre un guide pour visiter la médina ?</strong> Sans réfléchir, notre réponse est non. Nous sommes 2 nanas et nous ne nous sommes jamais senties en insécurité. De plus un guide, qu'il vous faudra payer, vous conduira dans des endroits que vous pouvez découvrir par vous-même.</p>
              <p>Pour nous, <strong>le meilleur moyen de visiter la médina est de s'y perdre</strong>. Alors osez un peu de folie et perdez vous dans ce labyrinthe sans crainte.</p>
              <div className="article-tip">
                <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                <div><strong>Notre conseil</strong><p>Gardez en tête qu&apos;il arrive que de jeunes Marocains prennent un malin plaisir à indiquer aux touristes une mauvaise direction. Ne vous laissez pas influencer — faites confiance à votre instinct et à votre carte !</p></div>
              </div>
              <p>Gardez en tête qu’il arrive que de jeunes Marocains prennent un malin plaisir à indiquer aux touristes une mauvaise direction quand ils les voient un peu déboussolés. Si besoin, préférez demander votre chemin aux commerçants. Pensez aussi à lever les yeux, <strong>il y a souvent des panneaux suspendus au niveau des croisements dans les souks qui vous donneront des indications sur la route à suivre</strong> pour rejoindre les endroits stratégiques.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_4959-768x1024.jpg" alt="Souk médina" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_E4843-768x1024.jpg" alt="Boutiques souk" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <p>Piétons, vélos, mobylettes et charrettes tirées par des ânes… Il vaut mieux rester vigilant quand on se balade dans la médina !</p>
              <p>Ses ruelles principales sont généralement couvertes de bois ou de tôle permettant de protéger les passants du soleil ou de la pluie.</p>
              <p><strong>Les souks (les marchés) sont organisés par quartier et par métier.</strong> On y retrouve les ferronniers, les potiers, les maroquiniers, les sculpteurs et les tanneurs que l’on peut voir à l’œuvre.</p>
              <p>Ce sont sur les artères principales que l’on trouve ensuite tous leurs objets artisanaux en vente : sacs en cuir, bijoux, lampes, tapis, djellabas et babouches « climatisées » (comme ils les appellent !), il y en a pour tous les goûts.</p>
              <p>Aussi, vous ne pourrez pas louper les stands d’épices, de « zeitoun » (olives), de fruits secs et de pâtisseries…</p>
              <p>Quel que soit l’endroit où vous vous promènerez dans la médina, vous sentirez tous vos sens en éveil !</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5223-768x1024.jpg" alt="Souk Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5234-768x1024.jpg" alt="Boutique souk Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_4973-1-1024x768.jpg" alt="Perles de Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5935-768x1024.jpg" alt="Derb Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <p>Même si cela fait partie de l’ambiance, les commerçants qui vous accostent pour vous vendre leurs produits peuvent se montrer très insistants. N’hésitez pas à leur dire « la safi ! » (stop !, en français), ou « baraka ! » (ça suffit !) si vous n’êtes pas intéressé.</p>
              <div className="article-tip">
                <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                <div><strong>Bon à savoir</strong><p>Les prix ne sont généralement pas affichés dans les souks. N&apos;ayez pas peur de négocier, cela fait partie du jeu ! Pour avoir le meilleur prix, n&apos;hésitez pas à faire semblant de partir — c&apos;est souvent à ce moment-là que le vendeur propose son vrai prix.</p></div>
              </div>
              <p>Les prix ne sont généralement pas affichés. <strong>N’ayez pas peur de négocier, </strong><strong>cela fait parti du jeu ici</strong>. Et pour avoir le meilleur prix, petit conseil, demandez le prix Marrakchi !</p>
              <p>La médina c’est aussi les somptueux riads que l'on ne soupçonne même pas ! Notez qu’un riad est une maison urbaine traditionnelle marocaine, construite autour d'un patio ou d'un jardin intérieur. Dans certains, on y trouve même un bassin, voire une petite piscine !</p>
              <p>Dissimulés dans des petites ruelles, à l’abri des regards, on ne s'attend pas à découvrir de véritables petits (ou grands) palais, lorsque l’on pousse leur porte ! Nous sommes toujours impressionnées et émerveillées par leur beauté quand nous avons l’occasion d’en visiter.</p>
              <div className="article-gallery-3">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_7041-1024x768.jpg" alt="Boutique plaques Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5004-1-768x1024.jpg" alt="Lumières de Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_7001-1024x768.jpg" alt="Souk Marrakech" loading="lazy" />
              </div>
              <div className="article-day-header article-day-header-tight">
                <h3>⧐ L’incroyable place JEMAA EL-FNA !</h3>
              </div>
              <p>Au cœur de la médina se trouve la fameuse place Jemaa el-Fna. Nous la conseillons comme <strong>point de départ pour visiter la vielle ville</strong>.</p>
              <p>Plus qu’une simple place publique, elle est l'attraction phare de la ville rouge. De jour comme de nuit, c’est l’ébullition ! Concrètement, <strong>l</strong><strong>a place Jamaa el-Fna est l’endroit le plus vivant de la médina</strong>.</p>
              <p>Entre les artistes de rue qui sautent dans tous les sens, les arracheurs de dents qui revendent des dents d’occasion (oui, oui, vous avez bien lu !), les porteurs d’eau qui n’hésitent pas à prendre la pause devant les objectifs, les femmes qui tatouent au henné, les charmeurs de serpents et les dresseurs de singes, tout le monde se côtoie pour former un joyeux tumulte !</p>
              <div className="article-must">
                <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
                <div><strong>À NE PAS MANQUER</strong><p>Ne passez pas à côté des stands de jus de fruits frais sans les goûter — tellement bons et si peu chers ! Et en fin de journée, installez-vous en hauteur sur la terrasse d&apos;un café de la place pour observer l&apos;agitation dans toute sa splendeur.</p></div>
              </div>
              <div className="article-gallery-3">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_3880-1-1024x769.jpg" alt="Place Jemma El-Fna jour" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_3882.jpg" alt="Place Jemma El-Fna jour Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5793-3-1024x768.jpg" alt="Place Jemma El-Fna jour Kech" loading="lazy" />
              </div>
              <p>Pour tout vous dire, nous évitons de nous approcher de trop près des dresseurs de singes. Ils n’hésitent pas à les faire grimper sur vous et à vous réclamer ensuite quelques dirhams. Et si vous souhaitez les prendre en photo, même à la volée, ça ne sera pas gratuit non plus… Du coup, soyez discret ! Nous avons en tout cas bien trop de peine devant ces petits singes tenus en laisse, déguisés et dressés pour faire les bêtes de foire. C’est un commerce que nous ne préférons pas encourager.</p>
              <p>Ne passez pas à côté des stands de jus de fruits frais sans les goûter. Ils sont tellement bons et si peu chers !</p>
              <p>En fin de journée, des échoppes de restauration sont installées. Les vendeurs de soupe ou d’escargots vous feront signe pour que vous goûtiez à leur spécialité à la volée.</p>
              <p>Dans les autres, vous aurez le choix entre du poisson, des grillades, du couscous, etc. <strong>Ce n’est pas pour autant le meilleur endroit pour manger.</strong> Les prix sont excessifs et ce n’est pas forcément très bon. Les rabatteurs sont très insistants pour que vous vous installiez à leur table et peuvent même se montrer oppressants. Soyez ferme avec eux, et ne vous laissez pas influencer  !</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5249-1024x768.jpg" alt="Stands Place Jemaa El-Fna" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5017-1024x768.jpg" alt="Place Jemaa El-Fna nuit Marrakech" loading="lazy" />
              </div>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5016-1024x768.jpg" alt="Place Jemaa El-Fna nuit Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5049_jpg-768x1024.jpg" alt="Place Jemaa El-Fna nuit" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <p>Le soir, c’est encore une autre ambiance !</p>
              <p>En plus de toutes les animations de la journée, de nouveaux rassemblements se créent autour de groupes de musique, de danseurs, de conteurs et de stands de jeux (pêche à la bouteille de soda, mini golf, casques de réalité virtuelle, etc.).</p>
              <p><strong>Nous vous conseillons de prendre un peu de hauteur</strong> sur la terrasse d’un des cafés de la place pour observer cette agitation complètement déroutante !</p>
          </section>

          <section id="visites" className="article-section">
            <div className="article-day-header">
              <h2>📍 Que voir à Marrakech ? Les visites incontournables</h2>
            </div>
              <div className="article-day-header article-day-header-tight">
                <h3>Le Jardin Majorelle</h3>
              </div>
              <p>C'est sûrement <strong>l'endroit le plus visité de la ville rouge</strong>. On ne vous le cache pas, il y a souvent beaucoup de monde, mais ce petit havre de paix reste un lieu immanquable à visiter.</p>
              <p>Pour la petite histoire, cet endroit porte le nom de son fondateur, <strong>Jacques Majorelle, un peintre français</strong>. En 1936, il fait construire une maison-atelier dans le Nord-Ouest de la médina. Il passe alors 22 ans à aménager sa villa et son jardin.</p>
              <p>Il transforme ce dernier en un véritable oasis avec des cactus, des palmiers, des bambous, des fontaines, des bassins et surtout avec cette merveilleuse couleur bleue…</p>
              <p><strong>Jacques Majorelle s'inspire du Lac de Tasgah</strong> (dans l'Atlas marocain) et crée ce bleu doux, intense et électrique pour repeindre sa villa et divers éléments qui la compose (le portail, les jarres et les pergolas). C’est ce fameux bleu que l'on retrouvera sur ses toiles, ce bleu que l'on appelle aujourd'hui le <strong>bleu Majorelle</strong>.</p>
              <div className="article-gallery-3">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5853-768x1024.jpg" alt="Jardin Majorelle Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6761-1024x768.jpg" alt="Jardin Majorelle Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6768-1024x768.jpg" alt="Bleu Majorelle Marrakech" loading="lazy" />
              </div>
              <p>En 1980, <strong>le domaine est racheté par le couple Yves Saint Laurent et Pierre Bergé</strong>. Ils le rebaptisent la Villa Oasis. Ils entreprennent alors d'importants travaux de restauration du jardin pour le rendre aussi beau que Jacques Majorelle l’avait imaginé. Aujourd’hui, on y retrouve plus de 300 espèces de plantes sur 1 hectare de terrain.</p>
              <p>Yves Saint Laurent et Pierre Bergé transforment également l'atelier de peinture de Jacques Majorelle en musée des arts berbères ouvert au public.</p>
              <p>Ils y exposent également des pièces haute couture de leur collection.</p>
              <p>A la mort d'Yves Saint Laurent en 2008, ses cendres sont dispersées dans la roseraie de la Villa Oasis, où un mémorial est créé en son honneur.</p>
              <p>Vous l'aurez compris, <strong>ce n'est pas </strong><strong>juste un magnifique jardin où déambuler dans les allées, c’est aussi un lieu chargé d’histoire</strong>.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6751-1024x768.jpg" alt="Jardin Majorelle Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5851-1024x768.jpg" alt="Jardin Majorelle Marrakech" loading="lazy" />
              </div>
              <p><strong>Le jardin se visite tous les jours de 8 h à 17 h 30. L’entrée est au tarif de 170 Dh (17 €) et est gratuite pour les enfants de moins de 10 ans. </strong></p>
              <p>Vous aurez alors accès au jardin,  à une galerie où sont exposées des affiches d’Yves Saint Laurent, à la boutique du jardin et du musée.</p>
              <p>Pensez à prendre vos billets sur leur <a href="https://tickets.jardinmajorelle.com/Visite" target="_blank" rel="noopener noreferrer" className="article-link">site internet</a> au plus tôt afin d'avoir des disponibilités sur le créneau horaire qui vous arrange. Si vous souhaitez également accéder au musée berbère, comptez <strong>330 Dh</strong> pour le billet combiné.</p>
              <p>Pensez à prendre vos billets sur leur <strong><a href="https://tickets.jardinmajorelle.com/Visite" target="_blank" rel="noopener noreferrer" className="article-link">site internet</a></strong> au plus tôt afin d'avoir des disponibilités sur le créneau horaire qui vous arrange.</p>
              <div className="article-day-header article-day-header-tight">
                <h3>Le Palais de la Bahia</h3>
              </div>
              <p><strong>S’il y a un bien un palais à visiter, c’est celui-ci.</strong> C'est le plus grand de Marrakech !</p>
              <p>Vous pourrez admirer l'architecture marocaine dans toute sa splendeur. Les peintures, les sculptures, les mosaïques, et les vitraux que l’on y trouve sont magnifiques et mettent en valeur tout le savoir faire des artisans.</p>
              <p>Le palais est composé de plus de 150 pièces, de différentes cours et de jardins avec des fontaines. Le tout est très grand, mais surtout très beau !</p>
              <p>Pour la petite histoire « Bahia » signifie « la belle, la brillante ». C’est en fait l’ancien harem du Grand Vizir Bou Ahmed, qui vivait ici avec ses 4 épouses et ses 24 concubines.</p>
              <p><strong>Le palais est ouvert tous les jours de 9 h à 17 h. Pour le visiter, l’entrée est payante : 100 Dh (10 €) pour les adultes et 30 Dh (3 €) pour les enfants. </strong></p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_8154-1.jpg" alt="Palais de la Bahia Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_8184.jpg" alt="Palais de la Bahia Marrakech" loading="lazy" />
              </div>
              <div className="article-day-header article-day-header-tight">
                <h3>Le Musée de la Photographie</h3>
              </div>
              <p>Cet endroit a été créé par Hamid Mergani et Patrick Manach, deux amoureux de laphotographie, et du Maroc bien sûr !</p>
              <p>À travers les nombreux clichés exposés et réalisés entre 1878 et 1960, leur objectif est de montrer la diversité du Maroc, depuis les débuts de la photo jusqu’à l’art moderne.</p>
              <p>Vous pourrez ainsi admirer les <strong>magnifiques clichés d'amateurs ou de célèbres photographes qui ont parcouru le Maroc à travers le temps</strong>. Les photos révèlent notamment les différents panoramas du pays, ainsi que les rencontres avec ses habitants.</p>
              <p>Vous y découvrirez également d’anciennes cartes postales, d’anciens journaux et d'autres documents retraçant l’histoire du Maroc.</p>
              <p>N’hésitez pas à monter sur la terrasse qui offre une vue panoramique sur la vieille ville. Il y a également une cafeteria, de quoi se rafraîchir après l’exposition.</p>
              <p><strong>Le musée est ouvert tous les jours de 9 h 30 à 19 h. Il faut compter 60 Dh (environ 6 €) pour accéder au musée. </strong></p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_8205-1024x766.jpg" alt="Musée de la photo Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_8202.jpg" alt="Musée de la photo Marrakech" loading="lazy" />
              </div>
              <div className="article-day-header article-day-header-tight">
                <h3>Le Jardin Secret</h3>
              </div>
              <p><strong>Un petit havre de paix au milieu du tumulte des souks</strong>, où l’on y découvre 2 jardins. Le 1er est d'inspiration islamique, le 2ème est plus exotique.</p>
              <p>Prenez un moment pour apprécier le calme au milieu de cette végétation luxuriante.</p>
              <p>Si vous avez le temps, vous pouvez également savourer l’endroit en vous installant à la table de l’un des deux cafés. Le premier se trouve au niveau des bassins, l’autre sur une jolie terrasse qui surplombe le jardin.</p>
              <p>Il y a également une tour dans laquelle vous pouvez monter. C'est l'une des plus haute de la médina.</p>
              <p><strong>Le jardin secret se visite tous les jours de 9 h 30 à 18 h. Le tarif de l’entrée est de 80 Dh (environ 7,50 €), et de 60 Dh (environ 5,50 €) pour les 7-24 ans.</strong> Il faut ajouter un supplément de 40 Dh (4 €) pour monter dans la tour.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_8123.jpg" alt="Jardin secret Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_8121-1024x768.jpg" alt="Jardin secret Marrakech" loading="lazy" />
              </div>
              <div className="article-day-header article-day-header-tight">
                <h3>La Médersa Ali Ben Youssef</h3>
              </div>
              <p>Médersa signifie établissement d’enseignement religieux musulman.</p>
              <p>Cette ancienne école coranique est la plus grande, mais elle est surtout <strong>considérée comme la plus belle d’Afrique du Nord</strong>. C’est l’un des rares établissements religieux accessible aux non-musulmans.</p>
              <p>Du sol au plafond, elle est décorée de zellige, de stuc et de sculptures réalisées avec beaucoup de précision et de détails.</p>
              <p>On y compte 7 patios, des salles de prière et une salle pour les ablutions.</p>
              <p>La médersa pouvait accueillir jusqu’à 900 étudiants. Les 132 chambres permettaient de loger des étudiants gratuitement, notamment ceux qui n’étaient pas originaires de Marrakech.</p>
              <p><strong>L’école coranique se visite tous les jours de 9 h à 18 h. L’entrée est au tarif de 50 Dh (5 €). </strong></p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_8090.jpg" alt="La Médersa Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_8112.jpg" alt="La Médersa Marrakech" loading="lazy" />
              </div>
              <div className="article-day-header article-day-header-tight">
                <h3>La Koutoubia</h3>
              </div>
              <p>Non loin de la place Jemaa el-Fna, se dresse la splendide Koutoubia. Bâtie en 1147, elle est le site le plus ancien de Marrakech. Avec son minaret de 77 mètres de haut, vous ne pourrez pas la louper !</p>
              <p><strong>Elle est la plus grande mosquée de Marrakech et le symbole de la ville. </strong></p>
              <p>La Koutoubia possède l'une des plus grandes salles de prière du Maroc et peut accueillir jusqu'à 20.000 fidèles.</p>
              <p>Tout comme pour les autres mosquées de la ville, l’entrée est interdite aux non-musulmans. Si vous n'êtes pas musulmans vous devrez donc vous contenter de l’observer de l’extérieur.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6837-768x1024.jpg" alt="Koutoubia Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5258-768x1024.jpg" alt="La Koutoubia Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
          </section>

          <section id="manger" className="article-section">
            <div className="article-day-header">
              <h2>📍 Où manger à Marrakech ?</h2>
            </div>
              <p>Il arrive que des restaurants ne payent pas de mine à première vue. Ne vous laissez pas influencer, ils révèlent bien souvent un joli toit-terrasse avec une vue incroyable sur la ville !</p>
              <p>Nous avons nos petites habitudes quant aux endroits où manger et prendre un verre dans la médina…</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_4960-768x1024.jpg" alt="Souk Kafé médina" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6099-1024x768.jpg" alt="Café des épices Marrakech" loading="lazy" />
              </div>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5290_jpg-1024x768.jpg" alt="Henna Café Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5292-768x1024.jpg" alt="Henna Café Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <p><strong>Voici notre liste en fonction de leurs tarifs</strong><strong> :</strong></p>
              <div className="pb-resto-section">
                <h3 className="pb-resto-title">Nos adresses où manger, par gamme de prix</h3>
                <div className="pb-resto-tier">
                  <div className="pb-resto-tier-header">
                    <span className="pb-resto-tier-badge">€</span>
                    <span className="pb-resto-tier-label">Petits prix</span>
                  </div>
                  <div className="pb-resto-grid">
                    <a href="https://maps.app.goo.gl/PTjrcNqVpT7RMt1w7" target="_blank" className="pb-resto-card">
                      <span className="pb-resto-card-name">Atay café</span>
                      <span className="pb-resto-card-desc">Cuisine marocaine généreuse dans un cadre authentique. Notre cantine de la médina.</span>
                    </a>
                    <a href="https://maps.app.goo.gl/Cyry27cHx4R9CvE67" target="_blank" className="pb-resto-card">
                      <span className="pb-resto-card-name">Kui-Zin</span>
                      <span className="pb-resto-card-desc">Street food savoureuse et créative — le meilleur rapport qualité/prix de la médina.</span>
                    </a>
                    <a href="https://maps.app.goo.gl/THAbfYXY2YoaY2528" target="_blank" className="pb-resto-card">
                      <span className="pb-resto-card-name">Café des épices</span>
                      <span className="pb-resto-card-desc">Terrasse avec vue sur les toits, jus frais et petits plats simples face aux souks.</span>
                    </a>
                    <a href="https://maps.app.goo.gl/Jdaszd1dJw9qsEJL7" target="_blank" className="pb-resto-card">
                      <span className="pb-resto-card-name">Henna café</span>
                      <span className="pb-resto-card-desc">Restaurant associatif où l'on mange en se faisant tatouer au henné. Concept unique !</span>
                    </a>
                  </div>
                </div>
                <div className="pb-resto-tier">
                  <div className="pb-resto-tier-header">
                    <span className="pb-resto-tier-badge">€€</span>
                    <span className="pb-resto-tier-label">Intermédiaire</span>
                  </div>
                  <div className="pb-resto-grid">
                    <a href="https://maps.app.goo.gl/nTrdEU5KVV5Xj7GP6" target="_blank" className="pb-resto-card">
                      <span className="pb-resto-card-name">Le Jardin</span>
                      <span className="pb-resto-card-desc">Riad verdoyant au cœur de la médina. Cadre romantique, cuisine raffinée et fraîche.</span>
                    </a>
                    <a href="https://maps.app.goo.gl/LJijbJUkqoSbVLL4A" target="_blank" className="pb-resto-card">
                      <span className="pb-resto-card-name">La Terrasse des épices</span>
                      <span className="pb-resto-card-desc">Vue panoramique sur la médina, cuisine marocaine soignée et cocktails sans alcool.</span>
                    </a>
                    <a href="https://maps.app.goo.gl/b7rSeahrnbAMyH866" target="_blank" className="pb-resto-card">
                      <span className="pb-resto-card-name">Le Nomad</span>
                      <span className="pb-resto-card-desc">Design épuré, rooftop avec vue sur les toits et menu fusion maroco-contemporain.</span>
                    </a>
                  </div>
                </div>
                <div className="pb-resto-tier">
                  <div className="pb-resto-tier-header">
                    <span className="pb-resto-tier-badge">€€€</span>
                    <span className="pb-resto-tier-label">Plus chic</span>
                  </div>
                  <div className="pb-resto-grid">
                    <a href="https://maps.app.goo.gl/eaWGAcKKmE1wyBwH9" target="_blank" className="pb-resto-card">
                      <span className="pb-resto-card-name">Le Kabana</span>
                      <span className="pb-resto-card-desc">Rooftop chic avec une vue imprenable sur la Koutoubia. Sert de l'alcool — une rareté.</span>
                    </a>
                    <a href="https://maps.app.goo.gl/8Pybhtk1PeSdhozw6" target="_blank" className="pb-resto-card">
                      <span className="pb-resto-card-name">Le Café arabe</span>
                      <span className="pb-resto-card-desc">L'adresse historique pour boire un verre à Marrakech. Cadre, cuisine et alcool au rendez-vous.</span>
                    </a>
                  </div>
                </div>
              </div>
              <p>(dans ce restaurant associatif, vous pouvez vous faire tatouer au henné en même temps que vous mangez. Le concept est trop top !)</p>
              <p>Il y a peu d’endroits qui proposent de l'alcool dans la ville, mais vous pourrez en consommer dans ces deux bars / restaurants notamment.</p>
              
              <div className="article-tip">
                <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                <div><strong>Bon à savoir</strong><p>Vous avez également la possibilité de vous faire livrer à domicile via l&apos;application <strong>GLOVO</strong> (le Uber Eats marocain !) — pratique pour les soirées cocooning dans votre riad !</p></div>
              </div>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_1848-1024x768.jpg" alt="Kui-Zin médina Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5204_jpg-768x1024.jpg" alt="Restaurant Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
          </section>

          <section id="riads" className="article-section">
            <div className="article-day-header">
              <h2>📍 Riads où passer la journée</h2>
            </div>
              <p>Si comme nous, vous passez votre séjour dans un riad au cœur de la médina, il y a de fortes chances, en fonction de la gamme de votre hébergement, que vous n’ayez pas de piscine pour y faire quelques longueurs ou pour bronzer à son bord sur un transat !</p>
              <p><strong>De nombreux riads vous proposent des forfaits à la journée</strong> : repas et accès à la piscine avec le transport si nécessaire (en supplément). En effet, même si certains se trouvent dans la médina, la plupart se situent en dehors.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_4888_jpg-768x1024.jpg" alt="Dar Donab Marrakech médina" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5098-768x1024.jpg" alt="Piscine Manzil Tortue Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <p><strong>Nous vous partageons quelques-unes de nos adresses préférées (toutes proposent de l’alcool) :</strong></p>
              <p>・<em><a href="https://www.google.com/maps/place/?q=place_id:ChIJNb0AY2jurw0RbO3ykgyWmVQ" target="_blank" className="article-link article-resto-link-desktop">Dar donab</a><a href="https://maps.app.goo.gl/dZQ8YNQm8BhzDkmX6" target="_blank" className="article-link article-resto-link-mobile">Dar donab</a></em> (médina, Bab Doukkala) : hôtel luxueux dans un petit palais. <strong>Tarif : 150 Dh pour l'accès piscine. Repas à la carte en supplément.</strong></p>
              <p>・<em><a href="https://www.google.com/maps/place/?q=place_id:ChIJ23VUUwPxrw0RIowkEJOjCVg" target="_blank" className="article-link article-resto-link-desktop">Manzil la tortue</a><a href="https://maps.app.goo.gl/txijutAUPUUN6qZKA" target="_blank" className="article-link article-resto-link-mobile">Manzil la tortue</a></em> (km 12, route de Ouarzazate) : un havre de paix. Choix entre 2 plats, tout est fait maison. Cocktails délicieux. <strong>Tarif : 250 Dh accès piscine + déjeuner.</strong></p>
              <p>・<em><a href="https://www.google.com/maps/place/?q=place_id:ChIJ6R175Qfmrw0RlCOwZ7eHRRg" target="_blank" className="article-link article-resto-link-desktop">La vie en rose</a><a href="https://maps.app.goo.gl/HyLEaDMCh63vQg3J6" target="_blank" className="article-link article-resto-link-mobile">La vie en rose</a></em> (km 14, route de l’Ourika) : joli cadre. Ânes et chevaux se baladant sur le terrain. Repas simples mais de qualité. <strong>Tarif : 250 Dh accès piscine + déjeuner.</strong></p>
              <p>・<em><a href="https://www.google.com/maps/place/?q=place_id:ChIJneE65kjlrw0R0LMqzsrocjo" target="_blank" className="article-link article-resto-link-desktop">La ferme berbère</a><a href="https://maps.app.goo.gl/PXQu437JWWuwkgWP7" target="_blank" className="article-link article-resto-link-mobile">La ferme berbère</a></em> (km 9, route de l’Ourika) : ambiance familiale. Menu unique et excellent. <strong>Tarif : 290 Dh accès piscine + déjeuner.</strong></p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6555-1024x768.jpg" alt="Manzil Tortue Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_4841_jpg-768x1024.jpg" alt="Dar Donab médina" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6690-1024x768.jpg" alt="Ferme Berbere Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6619-1024x768.jpg" alt="Ferme Berbere Marrakech" loading="lazy" />
              </div>
              <p>Et pour profiter au maximum de votre journée de détente, sachez que tous ces établissements proposent des massages à la carte.</p>
              <p><strong>Il y a également des parcs aquatiques à Marrakech.</strong> Nous avons testé <a href="https://www.google.com/maps/place/?q=place_id:ChIJE-7HtBLvrw0Rybnp68GzPEY" target="_blank" className="article-link article-resto-link-desktop">Oasiria</a><a href="https://maps.app.goo.gl/asEX7BCr5rWR3fUT9" target="_blank" className="article-link article-resto-link-mobile">Oasiria</a> (km 4, route d’Amizmiz).</p>
              <p>Il est le 1er parc aquatique du Maroc. Il s'étend sur 10 hectares et offre une vaste panoplie d'attractions aquatiques pour toute la famille.</p>
              <p>De nombreux espaces verts et de détente, ainsi qu'un terrain de beach-volley / soccer sont mis à disposition. Le parc est ouvert toute l’année et propose en hiver une piscine chauffée de 300 m².</p>
              <p><strong>Tarif à la journée (le parc est ouvert d’avril à début novembre) : 300 Dh (environ 29 €) pour les adultes et les enfants de plus d’1,50 m, et 200 Dh (environ 19 €) pour les enfants de moins d’1,50 m et les seniors de plus de 65 ans (gratuit en dessous de 80 cm). </strong></p>
              <div className="article-gallery-3">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6353-1024x768.jpg" alt="Entrée Oasiria Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6376-1024x768.jpg" alt="Oasiria Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6496-768x1024.jpg" alt="Oasiria Marrakech" loading="lazy" />
              </div>
          </section>

          <section id="loger" className="article-section">
            <div className="article-day-header">
              <h2>📍 Où loger à Marrakech ?</h2>
            </div>
              <p>Finalement, tout dépend de ce que vous recherchez pour votre logement : gamme de tarif, piscine, services proposés, localisation ?</p>
              <p>C'est en tout cas sans hésitation que <strong>nous vous conseillons de loger dans un riad au cœur de la médina</strong>.</p>
              <p>Pour nous, rien de tel pour se plonger vraiment dans l'ambiance. Et puis, c'est tellement facile du coup de pouvoir tout faire à pied !</p>
              <div className="article-gallery-3">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6976-1-1024x768.jpg" alt="Riad maison Atlas" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_1833-1024x768.jpg" alt="Riad maison" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5707-768x1024.jpg" alt="Riad maison" loading="lazy" />
              </div>
              <p>Il existe dans ce cas, deux possibilités :</p>
              <p>・<strong>louer une chambre</strong> dans un riad en pension complète ou en demi-pension ;</p>
              <p>・<strong>louer un riad en entier.</strong> Vous vous sentirez comme à la maison ! Cela ne vous coûtera pas forcément plus cher et vous aurez toute votre intimité.</p>
              <p>Vous trouverez aussi une multitude d’hôtels et de complexes hôteliers en dehors de la médina. Il vous faudra cependant prendre un taxi pour vous rendre au cœur de la ville.</p>
          </section>

          <section id="ramadan" className="article-section">
            <div className="article-day-header">
              <h2>📍 Marrakech pendant le Ramadan, bonne idée ou pas ?</h2>
            </div>
              <p>Vous connaissez l’expression « c’est quoi tout ce ramdam » ? Ramdam vient du mot ramadan. Si lors de la période du ramadan les journées sont calmes, le soir c’est un vrai ramdam !</p>
              <p><strong>Visiter Marrakech pendant le ramadan est plutôt un bon plan. </strong>C’est l’une des périodes les moins touristiques de l’année, les vols et les hébergements sont de ce fait moins chers.</p>
              <p>Il y a effectivement une autre ambiance à Marrakech pendant la période du ramadan. La ville est comme au ralenti. En journée, les rues sont bien plus désertes qu’habituellement.</p>
              <p>Pour autant, pas d’inquiétude… Marrakech étant une ville très touristique, vous trouverez toujours des boutiques et des restaurants ouverts.</p>
              <div className="article-gallery-2">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_9711-1024x768.jpg" alt="Vue du ciel Marrakech" loading="lazy" />
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6057-768x1024.jpg" alt="Derb Marrakech" loading="lazy" style={{flex: '0.75', minWidth: 0}} />
              </div>
              <p><strong>Vous serez également plus tranquille pour les visites</strong> : pas de file d’attente interminable !</p>
              <p>Renseignez-vous tout de même avant sur les horaires qui peuvent être modifiés. Généralement, les établissements ferment plus tôt dans l’après-midi. Une fois la nuit tombée, le jeun rompu, c’est à nouveau l’effervescence dans les rues !</p>
              <p>Nous avons pour habitude de nous adapter aux pays que nous visitons. Pour le Maroc, en période de ramadan, nous évitons de boire ou de manger en pleine rue… Non pas que cela choque les marocains, c’est davantage une forme de respect de notre part.</p>
              <div className="article-avis">
                <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg></span>
                <div><strong>Notre avis</strong><p>Visiter Marrakech pendant le Ramadan reste un bon plan : moins de monde sur les sites, une ambiance unique le soir... Pensez simplement à vérifier les horaires, parfois modifiés pendant cette période.</p></div>
              </div>
          </section>

          <section id="organiser" className="article-section">
            <div className="article-day-header">
              <h2>📍 Tout savoir pour organiser son voyage à Marrakech</h2>
            </div>
            <div className="article-pratique">

              <div className="article-pratique-block">
                <h3 className="article-pratique-title">Quelles sont les formalités pour entrer au Maroc ?</h3>
                        <p>Pour vous rendre au Maroc, vous devez impérativement avoir un <strong>passeport en cours de validité</strong>. Le pays étant hors de l’Union Européenne, la carte d’identité ne suffit pas.</p>
                        <p>Marrakech est doté d'un aéroport international nommé Marrakech-Ménara. Il occupe la 7ème place du classement des meilleurs aéroports du monde. C’est aussi l’un des plus beaux !</p>
              </div>

              <div className="article-pratique-block">
                <h3 className="article-pratique-title">Comment s'y rendre et se déplacer ?</h3>
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_4997-1024x768.jpg" alt="Aéroport Marrakech-Ménara" className="article-img-full" loading="lazy" style={{marginBottom: '20px'}} />
                <PratiqueOnglets onglets={[
                  {
                    id: 'avion',
                    label: 'En avion',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>,
                    content: (
                      <>
                        <p>Pour arriver à Marrakech, nous avons voyagé avec la compagnie <strong>EasyJet</strong> depuis Nice, en vol direct. Les billets nous sont revenus à 368€ pour deux. Il faut compter généralement près de 3h de vol pour rejoindre l'aéroport de Marrakech-Ménara.</p>
                        <p>Nous vous recommandons de comparer les offres des différentes compagnies aériennes sur <strong>Skyscanner</strong> pour vous rendre à Marrakech (ou ailleurs !). On utilise beaucoup ce site pour trouver les vols qui nous conviennent, que ce soit au niveau des horaires ou des tarifs.</p>
                        <div className="article-tip">
                          <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                          <div><strong>Bon à savoir</strong><p>Nous vous recommandons de comparer les offres sur <a href="https://www.skyscanner.fr" target="_blank" rel="noopener noreferrer" className="article-link">Skyscanner</a> ou d&apos;acheter directement sur le site de votre compagnie pour obtenir le meilleur tarif.</p></div>
                        </div>
                      </>
                    ),
                  },
                  {
                    id: 'taxi',
                    label: 'En taxi',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M15 17a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/><path d="M5 17h-2v-6l2-5h9l4 5h1a2 2 0 0 1 2 2v4h-2m-4 0h-6m-6-6h15m-6 0v-5"/></svg>,
                    content: (
                      <>
                        <p>Marrakech se visite essentiellement à pied. Pour autant, le taxi reste la baaaaase pour se déplacer ! C'est certainement le moyen de transport le plus populaire dans tout le pays.</p>
                        <p>Sachez qu'en fonction de l'endroit où vous souhaitez vous rendre à Marrakech, vous n'utiliserez pas les mêmes taxis :</p>
                        <ul className="article-pratique-list">
                                                    <li>Les petits taxis : Leur couleur change en fonction de la localité. Ils sont jaunes ou beiges à Marrakech. Ils ont uniquement le droit de circuler dans le périmètre urbain, et il faudra négocier le prix avant de monter dans le véhicule. Attention, les petits taxis ne peuvent transporter que 3 personnes à la fois. Pour avoir une idée, depuis l'aéroport, comptez 70 Dh (7€) pour rejoindre la médina et 100 Dh (10€) pour vous rendre dans la palmeraie.</li>
                                                    <li>Les grands taxis : Ils sont généralement jaunes et de marque Mercedes. À l'inverse des petits taxis, ils peuvent sortir de la zone urbaine, mais leurs tarifs sont plus élevés pour une course. Ayant très rarement un compteur, il faut donc négocier le prix avant de partir. Notez que les chauffeurs de grand taxi sont souvent des fous du volant ! Evitez les trajets de nuit pour votre sécurité.</li>
                                                    <li>Les taxis privés : Si vous n'êtes pas friand de la négociation, faites alors appel à un taxi privé. Les chauffeurs mettent le compteur de manière obligatoire, et les prix fixés sont toujours honnêtes. D'ailleurs, les tarifs sont généralement collés sur leur pare-brise. Pour avoir une idée, pour se rendre de la médina à la palmeraie, comptez 100 Dh (10€).</li>
                        </ul>
                        <div className="article-gallery-2">
                          <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_7135-1024x768.jpg" alt="Taxis Marrakech" loading="lazy" />
                          <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5273-768x1024.jpg" alt="Taxi Marrakech médina" loading="lazy" />
                        </div>
                      </>
                    ),
                  },
                  {
                    id: 'caleche',
                    label: 'En calèche',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="5" cy="18" r="2"/><circle cx="17" cy="18" r="2"/><path d="M3 18H1V9l3-5h13l3 5v4h-2M7 18h8"/><path d="M9 5v4M14 5v4"/></svg>,
                    content: (
                      <>
                        <p>Marrakech est l'une des rares villes du Maroc à avoir conservé le transport en calèche. Ces dernières sont majoritairement <strong>stationnées au niveau de la rue qui relie la Koutoubia à la place Jemaa el-Fna</strong>.</p>
                        <p>Il est possible de monter à 4 ou 5 personnes à bord d'une calèche. Comme pour les taxis, le prix se négocie. Pour 30Mn de balade dans la médina, <strong>prévoyez en moyenne 200 Dh (20€)</strong>.</p>
                      </>
                    ),
                  },
                ]} />
              </div>

              <div className="article-pratique-block">
                <h3 className="article-pratique-title">Pour en savoir plus...</h3>
                <PratiqueOnglets onglets={[
                  {
                    id: 'quand-partir',
                    label: 'Quand partir',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 7a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7"/><path d="M16 3v4M8 3v4M4 11h16M11 15h1M12 15v3"/></svg>,
                    content: (
                      <>
                        <p><strong>Le climat à Marrakech est agréable toute l'année !</strong> Vous ne vous tromperez donc jamais en prévoyant un séjour vers cette destination.</p>
                        <p>Pour nous, les meilleures saisons pour découvrir la ville rouge restent tout de même le <strong>printemps</strong> (mars à mai) et l'<strong>automne</strong> (septembre à novembre). <strong>Les températures oscillent généralement entre 23 et 28°C. </strong>Vous éviterez ainsi l'afflux touristique de la période estivale, et les tarifs des hôtels et des activités qui augmentent.</p>
                        <p><strong>Nous vous recommandons donc fortement de ne pas vous rendre à Marrakech en été.</strong> Au-delà de la foule, les températures, souvent supérieures à 35°C, peuvent limiter les activités et les excursions... Évitez de vous rendre dans le désert d'Agafay par exemple à cette période !</p>
                        <p>Contrairement à ce que l'on pourrait penser, <strong>les hivers peuvent être frais</strong> même si le taux d'ensoleillement est important à ce moment-là. L'écart entre les températures le jour et la nuit étant important, il conviendra d'emporter une bonne veste dans votre valise !</p>
                        <div className="article-gallery-2">
                          <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6100-768x1024.jpg" alt="Marrakech printemps" loading="lazy" />
                          <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_5740-768x1024.jpg" alt="Marrakech automne" loading="lazy" />
                        </div>
                      </>
                    ),
                  },
                  {
                    id: 'argent',
                    label: 'Argent',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0"/><path d="M15 9a2 2 0 1 0-4 0v5a2 2 0 0 1-2 2h6"/><path d="M9 12h4"/></svg>,
                    content: (
                      <>
                        <ul className="article-pratique-list">
                          <li><strong>DAB</strong> — La monnaie du Maroc est le dirham (Dh ou MAD). On trouve de partout en ville des distributeurs de billets acceptant les Visa, MasterCard et American Express. Il est essentiel de savoir que les retraits d'espèces avec une carte étrangère entraînent souvent d'importants frais.</li>
                          <li><strong>Cartes de crédit</strong> — Quasiment tous les restaurants et les bars acceptent les cartes de crédit. Cependant, prévoyez des espèces pour payer dans les boutiques, notamment dans les souks.</li>
                          <li><strong>Change</strong> — Il est intéressant de savoir que vous pouvez utiliser quasiment de partout des euros pour payer. Pour autant, si vous souhaitez changez des euros en dirhams, préférez le faire directement à l'aéroport, les taux sont les plus intéressants. Autrement, les taux varient peu d'un établissement à l'autre à Marrakech.</li>
                          <li><strong>Sortie de dirhams</strong> — Sachez qu'il est illégal d'importer ou de sortir des dirhams du pays. Aussi, conservez vos reçus de change. Ils prouvent que vous avez changé légalement votre argent et vous seront demandés pour convertir le reste de vos dirhams dans les banques marocaines et les bureaux de change.</li>
                          <li><strong>Pourboire (bakchich)</strong> — Il fait partie intégrante de la vie marocaine. Pratiquement tous les services justifient un pourboire (= bakchich) ! Par exemple, il est d'usage de laisser un pourboire de 10% au restaurant.</li>
                        </ul>
                        <div className="article-tip">
                          <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                          <div><strong>Bon à savoir</strong><p>Pour éviter les frais de retrait à l&apos;étranger, nous utilisons la carte <a href="https://www.boursorama-banque.com/" target="_blank" rel="noopener noreferrer" className="article-link">Boursorama</a> Ultim pour tous nos voyages.</p></div>
                        </div>
                      </>
                    ),
                  },
                  {
                    id: 'dress-code',
                    label: 'Dress code',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M19.5 12.572l-7.5 7.428-7.5-7.428a5 5 0 1 1 7.5-6.566a5 5 0 1 1 7.5 6.572"/></svg>,
                    content: (
                      <>
                        <p><strong>Il n’y pas de dress code imposé à Marrakech. Il faut juste faire preuve de bon sens. </strong></p>
                        <p>Si vous visitez un palais, au même titre qu’un temple en Asie, il est préférable de se couvrir les épaules en signe de respect.</p>
                        <p>Aussi, si vous ne voulez pas choquer dans la rue, alors adaptez votre tenue...</p>
                        <p>Pour les femmes particulièrement, évitez ainsi les vêtements très courts et / ou les décolletés plongeants par exemple !</p>
                        <div className="article-gallery-2">
                          <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_4975-768x1024.jpg" alt="Dress code Marrakech" loading="lazy" />
                          <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6081-1024x768.jpg" alt="Médina Marrakech" loading="lazy" />
                        </div>
                      </>
                    ),
                  },
                  {
                    id: 'courses',
                    label: 'Courses & alcool',
                    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>,
                    content: (
                      <>
                        <p>Si vous souhaitez faire des courses de nourriture et / ou d’alcool, sachez qu’il existe de nombreux magasins où cela est possible. Il y a par exemple <strong>plusieurs Carrefour Market dans Marrakech</strong>.</p>
                        <p>Vous trouverez également tout ce dont vous aurez besoin <strong>dans des centres commerciaux</strong> comme au Ménara Mall. Vous pourrez même y acheter du porc.</p>
                        <p>Pour information, le rayon alcool est souvent à l’écart, voire à un étage différent.</p>
                      </>
                    ),
                  },
                ]} />
              </div>

            </div>
          </section>

          <section id="agafay" className="article-section">
            <div className="article-day-header">
              <h2>📍 Désert d&apos;Agafay : une expérience aux portes de Marrakech</h2>
            </div>
            <p>Loin de l’effervescence et du tumulte de Marrakech, nous vous conseillons de vivre une expérience complètement magique... Celle de passer une <strong>nuit inoubliable dans le désert d’Agafay</strong> !</p>
            <p>N'hésitez pas à <strong><a href="/dormir-dans-le-desert-agafay" className="article-link">lire notre article</a></strong> pour découvrir tous nos conseils et notre récit de voyage, et vivre à votre tour cette incroyable expérience !</p>
            <a href="/dormir-dans-le-desert-agafay" style={{display: 'block', margin: '24px 0'}}><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2023/01/75F1E0BA-2260-4821-B2C7-DEAE2106C433-300x240.jpg" alt="Agafay Blog" className="article-img-full" loading="lazy" /></a>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="none"><path d="M12 2l2.9 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.7l-6.2 3.3L7 14.2 2 9.3l7.1-1L12 2z"/></svg></span>
              <div><strong>À LIRE AUSSI</strong><p><a href="/dormir-dans-le-desert-agafay" className="article-link">⋙ Dormir dans le désert d&apos;Agafay, une expérience inoubliable !</a></p></div>
            </div>
          </section>

          {/* OUTRO */}
          <section className="article-section">
          <p><em><strong>Nous espérons que notre article sur Marrakech vous aura plu et qu'il vous inspirera pour votre prochain voyage !</strong></em></p>
          <p><em><strong>Si vous avez des questions, ou que vous souhaitez nous partager un retour d'expérience, n'hésitez pas à nous la</strong><strong>isser un commentaire, à nous contacter via le </strong><strong><a href="/formules#formulaire" className="article-link">formulaire de contact</a> ou sur notre compte <a href="https://www.instagram.com/mamzellesenvadrouille/" target="_blank" rel="noopener noreferrer" className="article-link">Instagram</a>.</strong></em></p>
          <p><em><strong>Nous nous ferons un plaisir de vous lire et de vous répondre !</strong></em></p>
          </section>

          <section className="article-comments-section">
            <CommentsList comments={[]} />
            <CommentForm
              articleTitle={"Visiter Marrakech : que faire dans la ville rouge"}
              articleUrl="https://mamzellesenvadrouille.com/visiter-marrakech"
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
                  <p className="article-related-title-card">Visiter Madrid en 3 jours : itinéraire et bons plans</p>
                </div>
              </a>
              <a href="/visiter-londres" className="article-related-card">
                <div className="article-related-img-wrap">
                  <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2024/09/Palawan-1024x819.jpg" alt="Londres" className="article-related-img" />
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
