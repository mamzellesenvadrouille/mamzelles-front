import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import NewsletterForm from '../components/NewsletterForm';

export const metadata: Metadata = {
  title: '3 jours à Madrid : que voir ? Lieux incontournables & bons plans | MamZelles en vadrouille',
  description: 'Retrouvez nos itinéraires pour visiter Madrid en 3 jours. Plongez-vous dans l\'ambiance espagnole avec le top de nos visites incontournables !',
  alternates: { canonical: 'https://mamzellesenvadrouille.com/visiter-madrid-en-3-jours' },
  openGraph: {
    title: '3 jours à Madrid : que voir ? Lieux incontournables & bons plans',
    description: 'Retrouvez nos itinéraires pour visiter Madrid en 3 jours.',
    url: 'https://mamzellesenvadrouille.com/visiter-madrid-en-3-jours',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/Madrid.jpeg', width: 1920, height: 1536 }],
    locale: 'fr_FR',
    type: 'article',
  },
};

const comments = [
  { author: 'Solange Faure', date: 'il y a 2 ans', text: "Bonsoir, je m'inspire complètement de votre superbe compte rendu sur Madrid avec des photos qui font rêver. Merci beaucoup. Et bon voyage à vous pour d'autres destinations", reply: "Coucou ! On découvre seulement aujourd'hui votre petit message qui nous fait énormément plaisir ! 🥰 Heureuses de savoir que notre article ait pu vous inspirer pour votre séjour à Madrid. Merci beaucoup à vous aussi pour votre retour ! 😊" },
  { author: 'Toubeau', date: 'il y a 1 an', text: "Bonjour, je vais bientôt à Madrid. J'ai établi mon planning en prenant vos infos. Un grand merci", reply: "Trop contentes d'avoir contribué à votre organisation ! 🤗 Cette ville est incroyable, on a tellement aimé ! Bons préparatifs et bon voyage. ✈️😊" },
  { author: 'Nathalie', date: 'il y a 7 mois', text: "hola ! je vais à Madrid demain, avec mon fils, pour fêter ses 18 ans! visite du stade de foot du real (qui n'est pas dans votre récap !!), mais c'est le passage obligé pour mon garçon !! pour le reste, j'ai pris plein de notes sur vos déambulations! ça m'a donné envie! gracias", reply: "Bonjour, Merci pour votre retour ! 🤗 Joyeux anniversaire à votre garçon ! 🎉 On vous souhaite un magnifique séjour dans cette ville incroyable ! 🤩" },
  { author: 'Celas', date: 'il y a 5 mois', text: "Bonjour, et merci pour vos partages 😊 avez-vous des adresses de logements à me conseiller pour Madrid svp ? Belle journée. Valerie", reply: "Bonjour, Non malheureusement, nous n'avons pas de logement à recommander. En espérant que vous avez trouvé votre bonheur ! 🤗 Belles fêtes de fin d'année et bon séjour à Madrid ! ☀️" },
  { author: 'gaudefroy', date: 'il y a 5 mois', text: "nous partons dans 2 jours à Madrid et pour 2 jours , merci pour vos infos précieuses, j'ai tout noté !", reply: "Top ! Merci pour ce retour qui fait super plaisir ! 🤗🤗" },
  { author: 'Derieux', date: 'il y a 3 mois', text: "Bonjour, merci à vous pour cette belle rétrospective et conseils d'un petit voyage de 3 jours à Madrid. Nous partons aussi pour 3 jours et super boulot de votre road book qui nous donne bien envie! Belle continuation professionnelle ( nous exerçons les mêmes métiers que vous) et surtout votre vie personnelle avec de beaux voyages!", reply: "Bonjour, Olala… On découvre seulement votre message aujourd'hui ! 🙈 Votre retour sur notre article nous fait énormément plaisir ! 🤗 On vous souhaite également une belle continuation et on espère que vous en avez aussi pris plein les yeux à Madrid ! ☀️" },
];

export default function MadridPage() {
  return (
    <>
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* HERO */}
      <section className="hero hero-article">
        <Navbar activePage="blog" />
        <img className="hero-bg" src="/Madrid.webp" alt="Madrid, vue sur la Gran Vía" style={{objectPosition: 'center 0%'}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>3 jours à Madrid<br /><em>Les lieux incontournables<br />et nos bons plans</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Notre itinéraire complet pour découvrir les quartiers<br />et les visites à ne pas louper de la capitale espagnole.</p>
        </div>
      </section>

    </div>

      {/* BLOC COUP DE COEUR */}
      <div className="article-coup-de-coeur">
          <div className="article-cdcr-header">
          <span className="article-cdcr-icon">❤️</span>
          <h2>Pourquoi nous avons adoré Madrid</h2>
        </div>
        <div className="article-cdcr-grid">
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre quartier préféré</span><span className="article-cdcr-value">→ Malasaña</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">L&apos;adresse où on retournerait</span><span className="article-cdcr-value">→ Le Mercado de San Miguel</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le lieu qui nous a surpris</span><span className="article-cdcr-value">→ Le Palacio de Cristal au coucher du soleil</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre meilleur souvenir</span><span className="article-cdcr-value">→ Le panorama depuis le Riu la nuit</span></div>
        </div>
      </div>

      <div className="article-layout">
        <main className="article-main">


          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title">📌 Sommaire de l&apos;article</h2>
            <ol className="article-toc-list">
              <li><a href="#que-faire">3 jours à Madrid, que faire ?</a></li>
              <li><a href="#jour1">Jour 1 — El Centro</a></li>
              <li><a href="#jour2">Jour 2 — Malasaña, Salamanca, El Retiro</a></li>
              <li><a href="#jour3">Jour 3 — Lavapiès / Rastro, Atocha, Barrio de las Letras / Huertas</a></li>
              <li><a href="#pratique">Tout savoir pour organiser votre voyage</a></li>
            </ol>
          </nav>

          {/* INTRO */}
          <section id="que-faire" className="article-section">
            <p className="article-intro"><strong>Vous voulez visiter Madrid en 3 jours ? Quel excellent choix ! Vous trouverez ici notre itinéraire et tous nos conseils pour découvrir les quartiers et les visites incontournables de la capitale espagnole !</strong></p>
            <p>Pourquoi Madrid ? Nous avions envie de nous évader dans un endroit animé, à l&apos;ambiance chaleureuse, notamment à l&apos;approche des fêtes de Noël. Il fallait aussi que l&apos;on tienne compte des restrictions liées au Covid pour s&apos;y rendre.</p>
            <p>Notre choix s&apos;est immédiatement porté sur Madrid ! Nous avions donc un long week-end de 3 jours pour découvrir la capitale espagnole…</p>
            <p>Depuis ce séjour, Madrid est clairement devenue l&apos;une de nos villes coup de coeur en Europe ! Une véritable pépite où histoire et modernité forment le parfait équilibre.</p>
            <h3>Avant de commencer...</h3>
            <p>Madrid est la capitale espagnole, mais aussi le centre politique, économique et culturel d&apos;Espagne. Elle est la plus grande ville du pays : en comparaison, Madrid est 5 fois plus grande que Paris !</p>
            <p>Potentiellement, Madrid peut plaire à tout le monde, tant pour l&apos;architecture de ses bâtiments historiques, que pour sa culture, sa gastronomie, sa vie nocturne, ses multiples lieux où faire du shopping, et son soleil toute l&apos;année ! Chacun y trouve son compte !</p>
            <p>Si nous devions décrire Madrid en 3 mots, on la qualifierait d&apos;authentique, effervescente et tolérante. En ce qui nous concerne, on s&apos;y sentait trop bien ! Prévoir un séjour de 3 jours à Madrid est parfait pour vous imprégner de la « Vida Loca » !</p>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2229-scaled-1024x768.jpeg" alt="Palais de Cristal Madrid" className="article-img-full" loading="lazy" />
            <p>À Madrid, chaque barrio (notez quartier en espagnol !) a sa propre identité, son histoire, et ils sont nombreux ! Autant de quartiers qui montrent la diversité culturelle de cette ville que nous avons tant aimée.</p>
            <p>Allez, c&apos;est parti ! Voici notre itinéraire pour découvrir Madrid en 3 jours en fonction des quartiers.</p>
          </section>

          {/* JOUR 1 */}
          <section id="jour1" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 1</span>
              <h2>⧐ El Centro</h2>
            </div>
            <p>Comme son nom le laisse entendre, il s&apos;agit là du centre historique de Madrid. C&apos;est dans ce barrio que vous trouverez les <strong>attractions principales</strong> de la capitale.</p>
            <h3>Le Palais Royal</h3>
            <p>Tout d&apos;abord, découvrez le <strong>Palais Royal</strong> de Madrid. Il fait partie des plus grands palais d&apos;Europe, mais aussi des plus beaux !</p>
            <p>Bien qu&apos;il ne soit plus habité par la famille royale, il reste un lieu symbolique du pouvoir qu&apos;il est possible de visiter. Pour cela, nous vous conseillons d&apos;acheter vos <a href="https://tickets.patrimonionacional.es/fr-FR/venta-de-entradas" target="_blank" rel="noopener noreferrer" className="article-link">billets</a> à l&apos;avance.</p>
            <p>Notez qu&apos;il est possible de voir la relève de la garde du Palais Royal de Madrid. Cela se passe tous les mercredis et samedis à 11h. Il est aussi possible d&apos;assister à la relève solennelle de la garde les premiers mercredis du mois à 12h (sauf en janvier, août et septembre). C&apos;est apparemment un spectacle unique à ne pas manquer !</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2446-scaled-1024x768.jpeg" alt="Palais Royal Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2456-scaled-768x1024.jpeg" alt="Palais Royal Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1690_jpg-scaled-768x1024.jpeg" alt="Palais Royal Madrid" loading="lazy" />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2451-scaled-1024x768.jpeg" alt="Palais Royal Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1677-scaled-1024x768.jpeg" alt="Palais Royal Madrid" loading="lazy" />
            </div>
            <h3>La Cathédrale de la Almudena</h3>
            <p>Non loin de là, vous trouverez la <strong>Cathédrale de la Almudena</strong>. Son dôme est accessible aux visiteurs, mais attention, seulement de 10H à 12H. Pour cela, vous devrez passer par le musée et débourser 7€.</p>
            <p>L&apos;entrée s&apos;effectue par la porte principale de la cathédrale, face au Palais Royal. Depuis la « cúpula », vous aurez une vue exceptionnelle sur la ville, notamment sur les jardins de Campo del Moro.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1699_jpg-scaled-768x1024.jpeg" alt="Cathédrale de la Almudena Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2462_jpg-scaled-734x1024.jpeg" alt="Cathédrale de la Almudena Madrid" loading="lazy" />
            </div>
            <h3>Le Mercado de San Miguel</h3>
            <p>Empruntez ensuite la <strong>Calle Mayor</strong> située en face de la cathédrale, pour vous diriger vers la <strong>Plaza San Miguel</strong> et son fameux mercado. Ce marché atypique, haut lieu de la vie madrilène, est un incontournable lors d&apos;un séjour à Madrid !</p>
            <p>Avec son architecture incroyable, composée d&apos;une structure en métal et tout en verre, le <strong>Mercado de San Miguel</strong> est un endroit très prisé par les amateurs de gastronomie espagnole, notamment de tapas.</p>
            <p>Un gros coup de coeur pour nous ! Vous pourrez vous y rendre chaque jour de 10H à minuit pour y goûter des spécialités terre, mer ou veggie façon espagnole ! C&apos;est également le lieu idéal pour déguster de bons vins ou boire une bière.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1760-scaled-1024x768.jpeg" alt="Mercado San Miguel Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1742-scaled-768x1024.jpeg" alt="Mercado San Miguel Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1782_jpg-scaled-768x1024.jpeg" alt="Mercado San Miguel Madrid" loading="lazy" />
            </div>
            <div className="article-must">
              <span className="article-must-icon">⭐</span>
              <div><strong>À ne surtout pas manquer</strong><p>Le Mercado de San Miguel est ouvert tous les jours de 10H à minuit. Allez-y en fin d&apos;après-midi pour y grignoter des tapas et vous mêler aux Madrilènes qui s&apos;y retrouvent après le travail.</p></div>
            </div>
            <h3>La Plaza Mayor</h3>
            <p>Continuez ensuite votre vadrouille en direction de la <strong>Plaza Mayor</strong>, cette fameuse place rectangulaire où les Madrilènes apprécient se retrouver pour y boire un café.</p>
            <p>Ce lieu piéton est également très fréquenté par les touristes. Vous trouverez sous les arcades de nombreux commerces traditionnels.</p>
            <p>Le dimanche, s&apos;y trouve le marché des billets et des pièces de collection, le « Mercado de monedas y sellos ». Il est ouvert de 9h à 14h. C&apos;est un marché unique au monde qui plait énormément aux collectionneurs.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1898-scaled-695x1024.jpeg" alt="Plaza Mayor Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1905-scaled-1024x768.jpeg" alt="Plaza Mayor Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1911-scaled-1024x768.jpeg" alt="Plaza Mayor Madrid" loading="lazy" />
            </div>
            <h3>La Plaza de la Puerta del Sol</h3>
            <p>En continuant votre chemin, tout près de cette place, vous arriverez à la <strong>Plaza de la Puerta Del Sol</strong>. Très animée, c&apos;est la place principale de Madrid, et notamment la plus centrale. Cet endroit étant piéton, il y a toujours beaucoup de monde de jour comme de nuit. C&apos;est sur cette place que se déroulent la plupart des évènements, manifestations et rassemblements.</p>
            <p>Idéalement située, la Plaza de la Puerta Del Sol permet de relier différents points d&apos;intérêts. Si vous aimez le shopping, vous trouverez de quoi faire par ici ! Nous vous conseillons d&apos;emprunter la <strong>Calle de Preciados</strong>, ou la <strong>Calle de la Montora</strong>, pour rejoindre <strong>Gran Via</strong>.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2330-scaled-768x1024.jpeg" alt="Puerta del Sol Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1926-scaled-1024x768.jpeg" alt="Puerta del Sol Madrid" loading="lazy" />
            </div>
            <h3>Gran Via</h3>
            <p><strong>Gran Via</strong> est une grande avenue, l&apos;une des principales de Madrid, et sûrement la plus connue. Peu importe l&apos;heure à laquelle nous y sommes passées, il y avait toujours foule et beaucoup d&apos;animations. Vous y trouverez essentiellement des boutiques, des restaurants, des hôtels, des cinémas et des théâtres. Cette artère a d&apos;ailleurs le surnom du « Broadway Madrilène ».</p>
            <p>Notre hôtel étant situé à 5Mn à pied, nous avons parcouru Gran Via en long, en large et en travers, de la <strong>Place d&apos;Espagne</strong> à l&apos;emblématique <strong>Edificio Metropolis</strong>.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1665-scaled-1024x768.jpeg" alt="Gran Via Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1851-scaled-768x1024.jpeg" alt="Gran Via Madrid" loading="lazy" />
            </div>
            <div className="article-tip">
              <span className="article-tip-icon">💡</span>
              <div><strong>Bon à savoir</strong><p>Sur la Plaza España se trouve un grand hôtel, le <strong>Riu</strong>. Son rooftop au 27ème étage offre une vue époustouflante à 360° sur la ville. Entrée : 5€ de 10H à 17H, et 10€ de 17H à 01H. Il y a une passerelle en verre — vous verrez ce qu&apos;il se passe sous vos pieds, 117M plus bas. Sensations garanties !</p></div>
            </div>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1668_jpg-scaled-768x1024.jpeg" alt="Hôtel Riu Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2364-scaled-1024x768.jpeg" alt="Vue depuis le Riu Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2361-scaled-768x1024.jpeg" alt="Rooftop Riu Madrid" loading="lazy" />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2371-scaled-768x1024.jpeg" alt="Vue Riu Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2350-scaled-768x1024.jpeg" alt="Cocktail Riu Madrid" loading="lazy" />
            </div>
            <p>De la Place d&apos;Espagne, remontez la Gran Via. Vous passerez alors par la <strong>Plaza del Callao</strong> et le célèbre <strong>Edificio Carrion</strong> avec son mythique panneau publicitaire Schweppes. L&apos;<strong>Edificio Telefónica</strong> est très imposant, vous le reconnaitrez facilement.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2341-scaled-768x1024.jpeg" alt="Edificio Carrion Schweppes Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2102-scaled-768x1024.jpeg" alt="Edificio Telefónica Madrid" loading="lazy" />
            </div>
            <h3>L&apos;Edificio Metropolis & le Circulo de Bellas Artes</h3>
            <p>Lorsque vous arriverez au bas de l&apos;avenue, vous tomberez sur le célèbre <strong>Edificio Metropolis</strong> et sa magnifique coupole. Il est l&apos;édifice le plus photographié de Madrid.</p>
            <p>Nous vous conseillons de monter en haut du <strong>Circulo de Bellas Artes</strong>, un centre culturel situé juste en face. Moyennant 4€, vous pourrez profiter de son rooftop avec une vue exceptionnelle sur la ville.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2051-scaled-768x1024.jpeg" alt="Edificio Metropolis Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2055-scaled-768x1024.jpeg" alt="Vue Metropolis Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2053-scaled-1024x768.jpeg" alt="Vue Metropolis Madrid" loading="lazy" />
            </div>
            <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2074_jpg-scaled-768x1024.jpeg" alt="Nous à Madrid" className="article-img-center" loading="lazy" />
            <div className="article-avis">
              <span className="article-avis-icon">❤️</span>
              <div><strong>L&apos;avis des MamZelles</strong><p>El Centro est dense, mais chaque rue réserve une surprise. Notre conseil : ne vous fixez pas un programme trop rigide pour cette journée. Accordez-vous une pause tapas au Mercado de San Miguel en milieu d&apos;après-midi plutôt qu&apos;à l&apos;heure du déjeuner — vous éviterez la foule et profiterez d&apos;une atmosphère bien plus authentique.</p></div>
            </div>
          </section>

          {/* JOUR 2 */}
          <section id="jour2" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h2>⧐ Malasaña, ⧐ Salamanca, ⧐ El Retiro</h2>
            </div>
            <h3>📍 Malasaña</h3>
            <p>Il est le 1er quartier que nous avons découvert car c&apos;est ici que nous avons décidé de poser nos valises pour ces 3 jours. Au moment où nous cherchions un hôtel, notre choix s&apos;est rapidement porté sur ce quartier car il est décrit comme <strong>branché</strong>, <strong>alternatif</strong>, avec une <strong>identité forte</strong>, et une <strong>atmosphère prégnante</strong>.</p>
            <p>Nous avons donc logé à l&apos;<a href="https://www.booking.com/hotel/es/hostal-pizarro.fr.html" target="_blank" rel="noopener noreferrer" className="article-link">Hostal Goyal Pizzaro</a>. Cet établissement, situé à proximité du métro et des lieux incontournables à visiter, est installé dans un bâtiment de style Art nouveau. La chambre spacieuse et très propre, donnant sur la ville, fait de cet hôtel une adresse de qualité.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1652_jpg-scaled-768x1024.jpeg" alt="Malasaña Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1655_jpg-scaled-768x1024.jpeg" alt="Malasaña Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2535-scaled-768x1024.jpeg" alt="Malasaña Madrid" loading="lazy" />
            </div>
            <p>On en est certaine, vous apprécierez l&apos;ambiance de <strong>Malasaña</strong>. Ses rues pavées, ses façades colorées, son street-art, ses boutiques rétros et vintages vous charmeront. Malasaña fait partie des barrios préférés des Madrilènes. C&apos;est THE PLACE TO BE pour les virées nocturnes. L&apos;esprit de la « <strong>Movida</strong> » est bien présent dans ce quartier.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2554-scaled-1024x768.jpeg" alt="Street-art Malasaña Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1660_jpg-scaled-768x1024.jpeg" alt="Street-art Malasaña Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2566-scaled-768x1024.jpeg" alt="Façade Malasaña Madrid" loading="lazy" />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2546-scaled-768x1024.jpeg" alt="Façades Malasaña Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2556-scaled-1024x768.jpeg" alt="Friperie Malasaña Madrid" loading="lazy" />
            </div>
            <h3>📍 Salamanca</h3>
            <p>Autre style de quartier, autre ambiance ! Le barrio de <strong>Salamanca</strong> est le quartier chic de Madrid. Sur les grands boulevards, des restaurants gastronomiques et des bars un peu sélects, dans les petites rues, des boutiques de luxe et de créateurs.</p>
            <p>Pour les fans de « La Casa de Papel » : la façade utilisée pour représenter la banque d&apos;Espagne est en réalité le <strong>Consejo Superior de Investigaciones Científicas</strong>, Calle de Serrano, N°115.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2443-scaled-768x1024.jpeg" alt="Salamanca Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2431-scaled-1024x768.jpeg" alt="Salamanca Madrid" loading="lazy" />
            </div>
            <h3>📍 El Retiro</h3>
            <p>Depuis le « Circulo de Belles Artes », direction la <strong>Plaza de Cibeles</strong>. Sur cette place se dressent d&apos;imposants bâtiments, tel que le <strong>Palacio de Comunicaciones</strong>. Si vous avez envie de visiter de jolis musées, c&apos;est dans ce quartier que vous trouverez votre bonheur ! Le <strong>musée du Prado</strong>, le <strong>musée Thyssen-Bornemisza</strong> et le <strong>Centro de Arte Reina Sofia</strong> se trouvent à proximité du <strong>Parque del Retiro</strong>.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2116-scaled-1024x768.jpeg" alt="Banque d'Espagne Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2062-scaled-1024x768.jpeg" alt="Vue banque d'Espagne Madrid" loading="lazy" />
            </div>
            <p>Ce magnifique <strong>Parque del Retiro</strong> est clairement le poumon de la capitale. Nous sommes rapidement tombées sur le lac, où nous n&apos;avons pas su résister à la tentation de faire un <strong>petit tour de barque</strong> pour admirer de près le <strong>Monument à Alfonso XII</strong>. C&apos;était une chouette expérience ! Nous avons déboursé 6€ pour 3/4 d&apos;heure de navigation.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2121-scaled-1024x768.jpeg" alt="El Retiro Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2207-scaled-1024x768.jpeg" alt="Retiro Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2187-scaled-768x1024.jpeg" alt="Barque El Retiro Madrid" loading="lazy" />
            </div>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2174_jpg-scaled-768x1024.jpeg" alt="Barque El Retiro Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2211_jpg-scaled-768x1024.jpeg" alt="Fontaine El Retiro Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2223-scaled-1024x768.jpeg" alt="Palacio de Cristal Madrid" loading="lazy" />
            </div>
            <p>Nous finissons par arriver au magnifique <strong>Palacio de Cristal</strong>, constitué de verre et de métal. Nous vous conseillons de vous y rendre en fin de journée… Cette structure de verre devient impressionnante lorsque la lumière du coucher de soleil la traverse.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2214-scaled-768x1024.jpeg" alt="Palacio de Cristal Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2247-scaled-768x1024.jpeg" alt="Palacio de Cristal Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2253-scaled-768x1024.jpeg" alt="Palacio de Cristal Madrid" loading="lazy" />
            </div>
            <div className="article-avis">
              <span className="article-avis-icon">❤️</span>
              <div><strong>L&apos;avis des MamZelles</strong><p>Si on devait choisir un seul quartier pour dormir à Madrid, ce serait Malasaña sans hésitation. L&apos;ambiance y est unique, les prix plus raisonnables que dans le centre, et tout est accessible à pied. Le Parque del Retiro mérite vraiment qu&apos;on lui consacre une demi-journée entière — c&apos;est là qu&apos;on a vraiment senti l&apos;âme madrilène.</p></div>
            </div>
          </section>

          {/* JOUR 3 */}
          <section id="jour3" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 3</span>
              <h2>⧐ Lavapiès / Rastro, ⧐ Atocha, ⧐ Barrio de Las Letras / Huertas</h2>
            </div>
            <h3>📍 Lavapiès / El Rastro</h3>
            <p>Voici les quartiers multiculturels de Madrid qui rassemblent le plus grand nombre de communautés. Il s&apos;agit à la base de quartiers populaires, devenus branchés, la culture y étant très présente. On découvre par exemple la <strong>Tabacalera</strong>, une ancienne usine à tabac transformée en centre culturel.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2421-scaled-768x1024.jpeg" alt="Lavapiès Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1857-scaled-768x1024.jpeg" alt="Lavapiès Madrid" loading="lazy" />
            </div>
            <p>Vous ne devrez louper en aucun cas le <strong>marché El Rastro</strong> qui a lieu chaque dimanche et jour férié, de 8H30 à 15H. Il est une institution à Madrid et est considéré comme l&apos;<strong>un des plus grands marchés aux puces d&apos;Europe</strong> ! Dans la rue principale, articles neufs et produits typiques, et dans les petites rues, le paradis des brocanteurs — antiquités, fripes vintages…</p>
            <div className="article-must">
              <span className="article-must-icon">⭐</span>
              <div><strong>À ne surtout pas manquer</strong><p>El Rastro n&apos;a lieu que le dimanche et les jours fériés de 8h30 à 15h. Organisez votre séjour pour que votre 3ème jour tombe un dimanche — vous ne le regretterez pas !</p></div>
            </div>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1870-scaled-768x1024.jpeg" alt="El Rastro Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1887-scaled-705x1024.jpeg" alt="El Rastro Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1879-scaled-1024x768.jpeg" alt="El Rastro Madrid" loading="lazy" />
            </div>
            <h3>📍 Atocha</h3>
            <p>C&apos;est le quartier administratif de Madrid, surtout connu pour sa majestueuse gare ! La <strong>gare d&apos;Atocha</strong> est la plus importante de la capitale. Son ancien hall principal abrite un <strong>jardin tropical de 4000M2</strong> avec plus de 400 espèces de plantes. La structure métallique et le toit en verre créent un effet de serre spectaculaire. Nous vous conseillons vivement d&apos;y faire un petit tour.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1986-scaled-1024x768.jpeg" alt="Gare Atocha Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2002-scaled-768x1024.jpeg" alt="Atocha Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2006-scaled-1024x768.jpeg" alt="Atocha Madrid" loading="lazy" />
            </div>
            <p>Si vous avez la chance d&apos;être à Madrid le 2ème week-end du mois, ne manquez pas le <strong>Mercado de Motores</strong> dans l&apos;ancienne gare de Delicias — artisans, créateurs, brocanteurs, wagons du XIXème siècle et food trucks.</p>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1954-scaled-1024x768.jpeg" alt="Mercado de Motores Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1959-scaled-768x1024.jpeg" alt="Mercado de Motores Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1962-scaled-768x1024.jpeg" alt="Mercado de Motores Madrid" loading="lazy" />
            </div>
            <h3>📍 Barrio de las Letras / Huertas</h3>
            <p>En face du <strong>musée Thyssen-Bornemisza</strong> se trouve le quartier des Lettres. Il tient son nom de son passé littéraire — de nombreux écrivains y vécurent durant le Siècle d&apos;or espagnol. Des citations gravées en lettres d&apos;or sur les pavés de la <strong>Calle de la Huertas</strong> en témoignent encore. La Plaza Santa Ana, bordée de cafés et de restaurants, est le lieu idéal pour une petite pause.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2299-scaled-768x1024.jpeg" alt="Barrio de las Letras Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2322_jpg-scaled-768x1024.jpeg" alt="Huertas Madrid" loading="lazy" />
            </div>
            <div className="article-avis">
              <span className="article-avis-icon">❤️</span>
              <div><strong>L&apos;avis des MamZelles</strong><p>La gare d&apos;Atocha est souvent négligée par les touristes qui la traversent sans s&apos;y arrêter. C&apos;est une erreur ! Le jardin tropical intégré dans l&apos;ancienne verrière est un des endroits les plus insolites et apaisants de Madrid. Prévoyez 30 minutes minimum pour vous y promener et y prendre un café. C&apos;est gratuit et totalement inattendu.</p></div>
            </div>
          </section>

          {/* INFOS PRATIQUES */}
          <section id="pratique" className="article-section">
            <h2 className="article-section-h2">3 jours à Madrid, tout savoir pour organiser votre voyage</h2>
            <h3>✓ Arriver en avion</h3>
            <p>Il est désormais facile de trouver des vols directs à destination de Madrid à moindre coût. De <strong>nombreuses compagnies</strong> desservent maintenant la capitale espagnole. Pour notre part, nous avons voyagé avec la compagnie <strong>Iberia</strong> depuis Nice, en vol direct. Les billets nous sont revenus à 136€ pour deux. Nous les avons directement acheté sur leur <a href="https://www.iberia.com/fr/chercheur-vols/" target="_blank" rel="noopener noreferrer" className="article-link">site</a>.</p>
            <h3>✓ Aéroport ↔ Centre ville</h3>
            <p>Vous atterrirez à l&apos;<strong>aéroport Adolfo Suárez Madrid-Barajas</strong>. De là, vous pouvez prendre le <strong>métro ligne 8</strong> (4€50, 15-25 min), le <strong>bus Exprés Aeropuerto</strong> (5€, 40 min, 24H/24), le <strong>taxi</strong> (environ 33€) ou <strong>Uber</strong>.</p>
            <h3>✓ Comment se déplacer à Madrid ?</h3>
            <p>L&apos;idéal c&apos;est de se déplacer à pied — il fait beau très souvent et c&apos;est le meilleur moyen de découvrir la ville. Le réseau de <a href="https://www.metromadrid.es/es" target="_blank" rel="noopener noreferrer" className="article-link">métro</a> compte 12 lignes (6H05-01H30), les <a href="https://www.emtmadrid.es/EMTBUS/Mi-itinerario?lang=es-ES" target="_blank" rel="noopener noreferrer" className="article-link">bus</a> circulent de 06H30 à 23H30.</p>
            <p><strong>Pour 3 jours</strong>, nous vous conseillons soit la carte Multi (2€50) + 10 trajets Metrobús à 12€20, soit une carte métro 48H à 14€20.</p>
            <h3>✓ Quand partir ?</h3>
            <p>Madrid peut se visiter <strong>toute l&apos;année</strong> grâce à son ensoleillement important. Les mois de <strong>mai, juin et septembre</strong> sont les plus agréables. Évitez juillet et août : chaleur et foule au rendez-vous !</p>
          </section>

          {/* CTA VOYAGE SUR MESURE */}
          <div className="article-cta-block">
            <div className="article-cta-content">
              <p className="eyebrow-gold">Travel Planners sur mesure</p>
              <h2>Vous préparez un séjour à Madrid ?</h2>
              <p>Cet itinéraire est celui que nous avons testé lors de notre propre voyage, mais chaque voyageur a ses envies, son budget et son rythme. Nous créons des itinéraires entièrement personnalisés pour vous faire gagner du temps et vivre un voyage qui vous ressemble vraiment.</p>
              <a href="/formules#formulaire" className="btn-gold">Créer mon voyage sur mesure</a>
            </div>
            <div className="article-cta-img-wrap">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2364-scaled-1024x768.jpeg" alt="Vue sur Madrid depuis le rooftop" />
            </div>
          </div>

          {/* CONCLUSION */}
          <div className="article-conclusion">
            <p><em>Nous espérons que notre article sur Madrid vous aura plu et qu&apos;il vous inspirera pour votre prochain voyage !</em></p>
            <p><em>Si vous avez des questions, ou que vous souhaitez nous partager un retour d&apos;expérience, n&apos;hésitez pas à nous laisser un commentaire, à nous contacter via le <a href="/formules#formulaire" className="article-link">formulaire de contact</a> ou sur notre compte <a href="https://www.instagram.com/mamzellesenvadrouille/" target="_blank" rel="noopener noreferrer" className="article-link">Instagram</a>.</em></p>
            <p><em>Nous nous ferons un plaisir de vous lire et de vous répondre !</em></p>
          </div>

          {/* NEWSLETTER */}
          <NewsletterForm />

          {/* COMMENTAIRES */}
          <section className="article-comments">
            <h2 className="article-comments-title">{comments.length} commentaires</h2>
            <div className="article-comments-list">
              {comments.map((c, i) => (
                <div key={i} className="article-comment">
                  <div className="article-comment-header">
                    <div className="article-comment-avatar">{c.author[0].toUpperCase()}</div>
                    <div>
                      <span className="article-comment-author">{c.author}</span>
                      <span className="article-comment-date">{c.date}</span>
                    </div>
                  </div>
                  <p className="article-comment-text">{c.text}</p>
                  {c.reply && (
                    <div className="article-comment-reply">
                      <div className="article-comment-header">
                        <div className="article-comment-avatar reply-avatar">M</div>
                        <div>
                          <span className="article-comment-author">MamZelles en vadrouille</span>
                          <span className="article-comment-date">Auteur</span>
                        </div>
                      </div>
                      <p className="article-comment-text">{c.reply}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

        </main>

        {/* SIDEBAR */}
        <aside className="article-sidebar">

          {/* EN BREF SIDEBAR */}
          <div className="sidebar-bref">
            <h3 className="sidebar-bref-title">En bref</h3>
            <div className="sidebar-bref-rule" />
            <div className="sidebar-bref-items">
              <div className="sidebar-bref-item">
                <div className="sidebar-bref-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                </div>
                <div><span className="sidebar-bref-label">Durée idéale</span><span className="sidebar-bref-value">3 jours</span></div>
              </div>
              <div className="sidebar-bref-item">
                <div className="sidebar-bref-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                </div>
                <div><span className="sidebar-bref-label">Meilleure période</span><span className="sidebar-bref-value">Mars à juin, sept. à nov.</span></div>
              </div>
              <div className="sidebar-bref-item">
                <div className="sidebar-bref-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                </div>
                <div><span className="sidebar-bref-label">Budget moyen</span><span className="sidebar-bref-value">€€</span></div>
              </div>
              <div className="sidebar-bref-item">
                <div className="sidebar-bref-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 17l4-8 4 4 4-6 4 10"/></svg>
                </div>
                <div><span className="sidebar-bref-label">Niveau</span><span className="sidebar-bref-value">Facile</span></div>
              </div>
              <div className="sidebar-bref-item">
                <div className="sidebar-bref-icon">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <div><span className="sidebar-bref-label">Type de voyage</span><span className="sidebar-bref-value">Couple, amis, solo</span></div>
              </div>
            </div>
          </div>
          <div className="sidebar-card">
            <div className="sidebar-about-img-wrap">
              <img src="/nous.webp" alt="Amélie et Laurie" className="sidebar-about-img" />
            </div>
            <h3 className="sidebar-about-title">À propos de nous</h3>
            <p className="sidebar-about-text">Nous, c&apos;est Amélie &amp; Laurie, deux amoureuses de la vie et du voyage. Nous partageons ici nos aventures à travers le monde.</p>
            <a href="/qui-sommes-nous" className="sidebar-link">Notre histoire →</a>
          </div>
          <div className="sidebar-card sidebar-cta">
            <img src="/home-hero.webp" alt="" className="sidebar-cta-bg-img" />
            <div className="sidebar-cta-gradient" />
            <div className="sidebar-cta-body">
              <h3 className="sidebar-cta-title">Vous rêvez d&apos;un voyage<br /><em>sur mesure ?</em></h3>
              <p className="sidebar-cta-text">Nous créons des itinéraires personnalisés,<br />pensés selon vos envies, votre rythme<br />et votre budget.</p>
              <a href="/formules#formulaire" className="btn-gold">Créer mon voyage</a>
            </div>
          </div>
          <div className="sidebar-card">
            <h3 className="sidebar-card-title">Articles récents</h3>
            <div className="sidebar-articles">
              <a href="/visiter-marrakech" className="sidebar-article">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/Marrakech-75x75.jpeg" alt="Marrakech" />
                <span>Marrakech : tous les secrets pour découvrir la ville rouge</span>
              </a>
              <a href="/visiter-londres-en-1-semaine" className="sidebar-article">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/Londres-75x75.jpg" alt="Londres" />
                <span>Visiter Londres en 1 semaine : l&apos;essentiel par quartier</span>
              </a>
              <a href="/road-trip-a-lanzarote" className="sidebar-article">
                <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/Lanzarote-75x75.jpeg" alt="Lanzarote" />
                <span>Road trip à Lanzarote : l&apos;île aux 300 volcans</span>
              </a>
            </div>
            <a href="/blog" className="sidebar-link" style={{marginTop: '12px', display: 'inline-block'}}>Voir tous les articles →</a>
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
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </div>
              <div className="footer-social-text">
                <span className="footer-social-label">Écrivez-nous</span>
                <span className="footer-social-value">contact@mamzellesenvadrouille.com</span>
              </div>
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          © 2026 MamZelles en vadrouille — Tous droits réservés
        </div>
      </footer>

    </>
  );
}
