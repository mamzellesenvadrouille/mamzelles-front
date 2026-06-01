import type { Metadata } from 'next';
sed -i '' "s|../components/Navbar|../components/Navbar|g" app/visiter-madrid-en-3-jours/page.tsx

export const metadata: Metadata = {
  title: '3 jours à Madrid : que voir ? Lieux incontournables & bons plans | MamZelles en vadrouille',
  description: 'Retrouvez notre itinéraire pour visiter Madrid en 3 jours. Quartiers incontournables, bonnes adresses et tous nos conseils de travel planners.',
  alternates: {
    canonical: 'https://mamzellesenvadrouille.com/visiter-madrid-en-3-jours',
  },
  openGraph: {
    title: '3 jours à Madrid : que voir ? Lieux incontournables & bons plans',
    description: 'Retrouvez notre itinéraire pour visiter Madrid en 3 jours. Quartiers incontournables, bonnes adresses et tous nos conseils.',
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
  { author: 'Nathalie', date: 'il y a 7 mois', text: "Hola ! Je vais à Madrid demain, avec mon fils, pour fêter ses 18 ans ! Visite du stade de foot du Real (qui n'est pas dans votre récap !!), mais c'est le passage obligé pour mon garçon !! Pour le reste, j'ai pris plein de notes sur vos déambulations ! Ça m'a donné envie ! Gracias", reply: "Bonjour, Merci pour votre retour ! 🤗 Joyeux anniversaire à votre garçon ! 🎉 On vous souhaite un magnifique séjour dans cette ville incroyable ! 🤩" },
  { author: 'Celas', date: 'il y a 5 mois', text: "Bonjour, et merci pour vos partages 😊 avez-vous des adresses de logements à me conseiller pour Madrid svp ? Belle journée. Valérie", reply: "Bonjour, Non malheureusement, nous n'avons pas de logement à recommander. En espérant que vous avez trouvé votre bonheur ! 🤗 Belles fêtes de fin d'année et bon séjour à Madrid ! ☀️" },
  { author: 'Gaudefroy', date: 'il y a 5 mois', text: "Nous partons dans 2 jours à Madrid et pour 2 jours, merci pour vos infos précieuses, j'ai tout noté !", reply: "Top ! Merci pour ce retour qui fait super plaisir ! 🤗" },
  { author: 'Derieux', date: 'il y a 3 mois', text: "Bonjour, merci à vous pour cette belle rétrospective et conseils d'un petit voyage de 3 jours à Madrid. Nous partons aussi pour 3 jours et super boulot de votre road book qui nous donne bien envie ! Belle continuation professionnelle et surtout votre vie personnelle avec de beaux voyages !", reply: "Bonjour, Olala… On découvre seulement votre message aujourd'hui ! 🙈 Votre retour sur notre article nous fait énormément plaisir ! 🤗 On vous souhaite également une belle continuation et on espère que vous en avez aussi pris plein les yeux à Madrid ! ☀️" },
];

export default function MadridPage() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* HERO */}
      <section className="hero">
        <Navbar activePage="blog" />
        <img
          className="hero-bg"
          src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/Madrid-1140x912.jpeg"
          alt="Madrid, vue sur la Gran Vía au coucher du soleil"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="eyebrow">Espagne · Europe</p>
          <h1>Madrid en 3 jours<br /><em>L&apos;itinéraire idéal pour découvrir la capitale espagnole</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Entre quartiers animés, rooftops confidentiels et grands classiques madrilènes, voici notre itinéraire complet pour visiter Madrid en 3 jours.</p>
        </div>
      </section>

      {/* ARTICLE BODY */}
      <div className="article-layout">

        {/* CONTENU PRINCIPAL */}
        <main className="article-main">

          {/* EN BREF */}
          <div className="article-bref">
            <h2 className="article-bref-title">En bref</h2>
            <div className="article-bref-grid">
              <div className="article-bref-item">
                <span className="article-bref-icon">🗓</span>
                <div>
                  <span className="article-bref-label">Durée idéale</span>
                  <span className="article-bref-value">3 jours</span>
                </div>
              </div>
              <div className="article-bref-item">
                <span className="article-bref-icon">☀️</span>
                <div>
                  <span className="article-bref-label">Meilleure période</span>
                  <span className="article-bref-value">Mars à juin, sept. à nov.</span>
                </div>
              </div>
              <div className="article-bref-item">
                <span className="article-bref-icon">💶</span>
                <div>
                  <span className="article-bref-label">Budget moyen</span>
                  <span className="article-bref-value">€€</span>
                </div>
              </div>
              <div className="article-bref-item">
                <span className="article-bref-icon">📍</span>
                <div>
                  <span className="article-bref-label">Niveau</span>
                  <span className="article-bref-value">Facile</span>
                </div>
              </div>
              <div className="article-bref-item">
                <span className="article-bref-icon">👥</span>
                <div>
                  <span className="article-bref-label">Type de voyage</span>
                  <span className="article-bref-value">Couple, amis, solo</span>
                </div>
              </div>
            </div>
          </div>

          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title">Dans cet article</h2>
            <ol className="article-toc-list">
              <li><a href="#intro">Pourquoi visiter Madrid ?</a></li>
              <li><a href="#jour1">Jour 1 — El Centro</a></li>
              <li><a href="#jour2">Jour 2 — Malasaña, Salamanca & El Retiro</a></li>
              <li><a href="#jour3">Jour 3 — Lavapiès, Atocha & Barrio de las Letras</a></li>
              <li><a href="#pratique">Informations pratiques</a></li>
            </ol>
          </nav>

          {/* INTRO */}
          <section id="intro" className="article-section">
            <p className="article-intro"><strong>Vous voulez visiter Madrid en 3 jours ? Quel excellent choix !</strong> Vous trouverez ici notre itinéraire et tous nos conseils pour découvrir les quartiers et les visites incontournables de la capitale espagnole !</p>
            <p>Pourquoi Madrid ? Nous avions envie de nous évader dans un endroit animé, à l&apos;ambiance chaleureuse, notamment à l&apos;approche des fêtes de Noël. Notre choix s&apos;est immédiatement porté sur Madrid ! Nous avions donc un long week-end de 3 jours pour découvrir la capitale espagnole…</p>
            <p>Depuis ce séjour, Madrid est clairement devenue l&apos;une de nos villes coup de cœur en Europe ! Une véritable pépite où histoire et modernité forment le parfait équilibre.</p>
            <div className="article-highlight">
              <p>Madrid est la capitale espagnole, mais aussi le centre politique, économique et culturel d&apos;Espagne. Elle est la plus grande ville du pays : en comparaison, Madrid est <strong>5 fois plus grande que Paris</strong> ! Si nous devions la décrire en 3 mots : <em>authentique, effervescente et tolérante.</em></p>
            </div>
          </section>

          {/* JOUR 1 */}
          <section id="jour1" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 1</span>
              <h2>El Centro</h2>
              <p className="article-day-desc">Le cœur historique de Madrid, entre incontournables et ruelles pleines de charme.</p>
            </div>

            <h3>Le Palais Royal</h3>
            <p>Tout d&apos;abord, découvrez le <strong>Palais Royal</strong> de Madrid. Il fait partie des plus grands palais d&apos;Europe, mais aussi des plus beaux ! Bien qu&apos;il ne soit plus habité par la famille royale, il reste un lieu symbolique du pouvoir qu&apos;il est possible de visiter. Nous vous conseillons d&apos;acheter vos <a href="https://tickets.patrimonionacional.es/fr-FR/venta-de-entradas" target="_blank" rel="noopener noreferrer" className="article-link">billets à l&apos;avance</a>.</p>
            <p>Notez qu&apos;il est possible de voir la relève de la garde du Palais Royal chaque mercredi et samedi à 11h. C&apos;est apparemment un spectacle unique à ne pas manquer !</p>

            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2446-scaled-1024x768.jpeg" alt="Palais Royal Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2456-scaled-768x1024.jpeg" alt="Palais Royal Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2451-scaled-1024x768.jpeg" alt="Palais Royal Madrid" loading="lazy" />
            </div>

            <h3>La Cathédrale de la Almudena</h3>
            <p>Non loin de là, vous trouverez la <strong>Cathédrale de la Almudena</strong>. Son dôme est accessible aux visiteurs de 10h à 12h (7€ via le musée). Depuis la cúpula, vous aurez une vue exceptionnelle sur la ville, notamment sur les jardins de Campo del Moro.</p>

            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1699_jpg-scaled-768x1024.jpeg" alt="Cathédrale de la Almudena Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2462_jpg-scaled-734x1024.jpeg" alt="Cathédrale de la Almudena Madrid" loading="lazy" />
            </div>

            <h3>Le Mercado de San Miguel</h3>
            <p>Empruntez la <strong>Calle Mayor</strong> pour vous diriger vers la Plaza San Miguel. Ce marché atypique, haut lieu de la vie madrilène, est un incontournable ! Avec son architecture en métal et verre, le <strong>Mercado de San Miguel</strong> est un endroit très prisé par les amateurs de gastronomie espagnole et de tapas. Un gros coup de cœur pour nous ! Ouvert tous les jours de 10h à minuit.</p>

            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1760-scaled-1024x768.jpeg" alt="Mercado San Miguel Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1742-scaled-768x1024.jpeg" alt="Mercado San Miguel Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1782_jpg-scaled-768x1024.jpeg" alt="Mercado San Miguel Madrid" loading="lazy" />
            </div>

            <h3>La Plaza Mayor & Puerta del Sol</h3>
            <p>Continuez vers la <strong>Plaza Mayor</strong>, cette fameuse place rectangulaire où les Madrilènes aiment se retrouver. Lieu piéton très fréquenté, vous trouverez sous les arcades de nombreux commerces traditionnels. Le dimanche s&apos;y tient le marché des billets et pièces de collection, de 9h à 14h.</p>
            <p>Idéalement située, la <strong>Plaza de la Puerta del Sol</strong> permet de relier différents points d&apos;intérêts. C&apos;est la place principale de Madrid, toujours très animée. De là, empruntez la <strong>Calle de Preciados</strong> ou la <strong>Calle de la Montora</strong> pour rejoindre la Gran Vía.</p>

            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1898-scaled-695x1024.jpeg" alt="Plaza Mayor Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1905-scaled-1024x768.jpeg" alt="Plaza Mayor Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1926-scaled-1024x768.jpeg" alt="Puerta del Sol Madrid" loading="lazy" />
            </div>

            <h3>Gran Vía & le Rooftop du Riu</h3>
            <p><strong>Gran Vía</strong> est l&apos;une des principales avenues de Madrid, surnommée le « Broadway Madrilène ». Boutiques, restaurants, hôtels, cinémas et théâtres s&apos;y succèdent sans fin, de la <strong>Place d&apos;Espagne</strong> à l&apos;emblématique <strong>Edificio Metropolis</strong>.</p>
            <div className="article-highlight">
              <p><strong>Bon à savoir !</strong> Sur la Plaza España se trouve l&apos;hôtel <strong>Riu</strong>. Son rooftop au 27ème étage offre une vue à 360° sur la ville. Entrée 5€ de 10h à 17h, 10€ de 17h à 1h. Le soir, c&apos;est magique — et il y a une passerelle en verre au sol, 117m plus bas. Sensations garanties !</p>
            </div>

            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1665-scaled-1024x768.jpeg" alt="Gran Via Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2364-scaled-1024x768.jpeg" alt="Vue depuis le Riu Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2361-scaled-768x1024.jpeg" alt="Rooftop Riu Madrid" loading="lazy" />
            </div>

            <h3>L&apos;Edificio Metropolis & le Circulo de Bellas Artes</h3>
            <p>En bas de l&apos;avenue, l&apos;<strong>Edificio Metropolis</strong> et sa magnifique coupole sont les bâtiments les plus photographiés de Madrid. Nous vous conseillons de monter au rooftop du <strong>Circulo de Bellas Artes</strong> en face (4€) pour une vue exceptionnelle : la banque d&apos;Espagne, la Plaza de Cibeles et le Metropolis avec son dôme en ardoise.</p>

            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2051-scaled-768x1024.jpeg" alt="Edificio Metropolis Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2053-scaled-1024x768.jpeg" alt="Vue depuis le Circulo de Bellas Artes Madrid" loading="lazy" />
            </div>
          </section>

          {/* JOUR 2 */}
          <section id="jour2" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h2>Malasaña, Salamanca & El Retiro</h2>
              <p className="article-day-desc">Des quartiers élégants, une ambiance bohème et une parenthèse de verdure au parc du Retiro.</p>
            </div>

            <h3>📍 Malasaña</h3>
            <p>C&apos;est le premier quartier que nous avons découvert, car c&apos;est ici que nous avons posé nos valises. Décrit comme <strong>branché, alternatif</strong>, avec une <strong>identité forte</strong> et une <strong>atmosphère prégnante</strong> — c&apos;est exactement ce que nous avons trouvé ! Un surprenant quartier où l&apos;on se laisse facilement porter à la mode madrilène.</p>
            <p>Ses rues pavées, ses façades colorées, son street-art, ses boutiques rétros et vintages vous charmeront. Malasaña fait partie des barrios préférés des Madrilènes. C&apos;est THE PLACE TO BE pour les virées nocturnes. L&apos;esprit de la <em>Movida</em> est bien présent — c&apos;est ici, dans les années 1980, qu&apos;est née la révolution sociale et culturelle.</p>

            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1652_jpg-scaled-768x1024.jpeg" alt="Malasaña Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2554-scaled-1024x768.jpeg" alt="Street-art Malasaña Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2546-scaled-768x1024.jpeg" alt="Façades Malasaña Madrid" loading="lazy" />
            </div>

            <h3>📍 Salamanca</h3>
            <p>Autre style de quartier, autre ambiance ! Le barrio de <strong>Salamanca</strong> est le quartier chic de Madrid. Sur les grands boulevards, des restaurants gastronomiques et des bars sélects, dans les petites rues, des boutiques de luxe et de créateurs. Concrètement, nous avons trouvé Salamanca sympa pour s&apos;y balader, sans grand intérêt si vous n&apos;y venez pas dans un but précis.</p>
            <p>Pour les fans de <em>La Casa de Papel</em> : la façade utilisée pour représenter la banque d&apos;Espagne est en réalité le <strong>Consejo Superior de Investigaciones Científicas</strong>, Calle de Serrano, n°115.</p>

            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2443-scaled-768x1024.jpeg" alt="Salamanca Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2431-scaled-1024x768.jpeg" alt="Salamanca Madrid" loading="lazy" />
            </div>

            <h3>📍 El Retiro</h3>
            <p>Le magnifique <strong>Parque del Retiro</strong> est le poumon de la capitale, un oasis végétal au cœur de Madrid. Nous vous conseillons de faire un <strong>petit tour de barque</strong> sur le lac pour admirer de près le Monument à Alfonso XII (6€ pour 45 minutes).</p>
            <p>En vous baladant, vous découvrirez fontaines, grandes allées bordées d&apos;arbres et artistes de rue. Terminez par le magnifique <strong>Palacio de Cristal</strong>, une serre en verre et métal, particulièrement impressionnante au coucher du soleil.</p>

            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2121-scaled-1024x768.jpeg" alt="Parque del Retiro Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2187-scaled-768x1024.jpeg" alt="Barque El Retiro Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2223-scaled-1024x768.jpeg" alt="Palacio de Cristal Madrid" loading="lazy" />
            </div>
          </section>

          {/* JOUR 3 */}
          <section id="jour3" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 3</span>
              <h2>Lavapiès, Atocha & Barrio de las Letras</h2>
              <p className="article-day-desc">L&apos;âme authentique de Madrid, entre street art, culture et adresses locales.</p>
            </div>

            <h3>📍 Lavapiès & El Rastro</h3>
            <p>Voici les quartiers multiculturels de Madrid, rassemblant le plus grand nombre de communautés. Des quartiers populaires devenus branchés, où la culture est très présente. On y découvre notamment la <strong>Tabacalera</strong>, une ancienne usine à tabac transformée en centre culturel, et de nombreuses œuvres de street-art.</p>
            <p>Ne manquez en aucun cas le <strong>marché El Rastro</strong>, chaque dimanche et jour férié de 8h30 à 15h. C&apos;est une institution à Madrid, considéré comme l&apos;un des <strong>plus grands marchés aux puces d&apos;Europe</strong> ! Antiquités, fripes vintage, artisanat… c&apos;est le paradis des chineurs.</p>

            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2421-scaled-768x1024.jpeg" alt="Lavapiès Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1870-scaled-768x1024.jpeg" alt="El Rastro Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1879-scaled-1024x768.jpeg" alt="El Rastro Madrid" loading="lazy" />
            </div>

            <h3>📍 Atocha</h3>
            <p>La <strong>gare d&apos;Atocha</strong> est la plus importante de la capitale. Inaugurée en 1851, son ancien hall principal abrite un <strong>jardin tropical de 4 000 m²</strong> avec plus de 400 espèces de plantes du monde entier. La structure métallique et le toit en verre créent un effet de serre spectaculaire. Nous vous conseillons vivement d&apos;y faire un petit tour !</p>
            <p>Si vous avez la chance d&apos;être à Madrid le 2ème week-end du mois, ne manquez pas le <strong>Mercado de Motores</strong> dans l&apos;ancienne gare de Delicias : artisans, créateurs, brocanteurs, wagons du XIXème siècle et food trucks. Un endroit original et de toute beauté !</p>

            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1986-scaled-1024x768.jpeg" alt="Gare Atocha Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2002-scaled-768x1024.jpeg" alt="Jardin tropical Atocha Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_1954-scaled-1024x768.jpeg" alt="Mercado de Motores Madrid" loading="lazy" />
            </div>

            <h3>📍 Barrio de las Letras / Huertas</h3>
            <p>En face du musée Thyssen-Bornemisza se trouve le <strong>quartier des Letras</strong>, qui tient son nom de son passé littéraire : de nombreux écrivains y vécurent durant le Siècle d&apos;or espagnol. Des citations gravées en lettres d&apos;or sur les pavés de la <strong>Calle de la Huertas</strong> en témoignent encore.</p>
            <p>Ces quartiers font partie des plus anciens et des plus animés le soir. La <strong>Plaza Santa Ana</strong>, bordée de cafés et restaurants, est le lieu idéal pour une petite pause bien méritée.</p>

            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2299-scaled-768x1024.jpeg" alt="Barrio de las Letras Madrid" loading="lazy" />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/01/IMG_2322_jpg-scaled-768x1024.jpeg" alt="Calle Huertas Madrid" loading="lazy" />
            </div>
          </section>

          {/* INFOS PRATIQUES */}
          <section id="pratique" className="article-section">
            <h2 className="article-section-h2">Tout savoir pour organiser votre voyage</h2>

            <div className="article-pratique-grid">
              <div className="article-pratique-card">
                <h3>✈️ Arriver en avion</h3>
                <p>De nombreuses compagnies desservent Madrid à moindre coût depuis la plupart des aéroports français. Nous avons voyagé avec <strong>Iberia</strong> depuis Nice en vol direct (136€ pour deux). Nous vous conseillons d&apos;acheter directement sur leur <a href="https://www.iberia.com/fr/chercheur-vols/" target="_blank" rel="noopener noreferrer" className="article-link">site officiel</a> plutôt que via un comparateur.</p>
              </div>
              <div className="article-pratique-card">
                <h3>🚇 Aéroport ↔ Centre-ville</h3>
                <p>Vous atterrirez à l&apos;aéroport <strong>Adolfo Suárez Madrid-Barajas</strong>. Plusieurs options :</p>
                <ul className="article-list">
                  <li><strong>Métro ligne 8</strong> → station Nuevos Ministerios (4,50€, 15-25 min)</li>
                  <li><strong>Bus Exprés Aeropuerto</strong> → Puerta de Atocha (5€, 40 min, 24h/24)</li>
                  <li><strong>Taxi</strong> → environ 33€ pour le centre</li>
                  <li><strong>Uber</strong> → Parking P1 (T1) / Parking express (T2) / Parking P4 Module D étage 4 (T4)</li>
                </ul>
              </div>
              <div className="article-pratique-card">
                <h3>🗺 Se déplacer à Madrid</h3>
                <p>L&apos;idéal à Madrid c&apos;est de <strong>marcher</strong> — il fait beau souvent et c&apos;est le meilleur moyen de découvrir. Pour les transports, le réseau de <strong>métro</strong> compte 12 lignes (6h05 à 1h30), les <strong>bus</strong> circulent de 6h30 à 23h30.</p>
                <p style={{marginTop: '10px'}}>Pour 3 jours, nous conseillons :</p>
                <ul className="article-list">
                  <li>Carte Multi (2,50€) + 10 trajets Metrobús à 12,20€</li>
                  <li>Ou carte métro 48h à 14,20€ si vous l&apos;utilisez fréquemment</li>
                </ul>
              </div>
              <div className="article-pratique-card">
                <h3>📅 Quand partir ?</h3>
                <p>Madrid peut se visiter <strong>toute l&apos;année</strong> grâce à son ensoleillement important. Les mois de <strong>mai, juin et septembre</strong> restent les plus agréables : températures douces, peu de pluie et les parcs explosent de couleurs. Évitez juillet et août : chaleur et foule au rendez-vous !</p>
              </div>
            </div>
          </section>

          {/* CONCLUSION */}
          <div className="article-conclusion">
            <p>Nous espérons que notre article sur Madrid vous aura plu et qu&apos;il vous inspirera pour votre prochain voyage ! Si vous avez des questions ou souhaitez partager un retour d&apos;expérience, n&apos;hésitez pas à nous laisser un commentaire ou à nous contacter sur <a href="https://www.instagram.com/mamzellesenvadrouille/" target="_blank" rel="noopener noreferrer" className="article-link">Instagram</a>.</p>
          </div>

          {/* COMMENTAIRES */}
          <section className="article-comments">
            <h2 className="article-comments-title">{comments.length} commentaires</h2>
            <div className="article-comments-list">
              {comments.map((c, i) => (
                <div key={i} className="article-comment">
                  <div className="article-comment-header">
                    <div className="article-comment-avatar">{c.author[0]}</div>
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

          {/* À PROPOS */}
          <div className="sidebar-card">
            <div className="sidebar-about-img-wrap">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/11/Mamzellesenvadrouille-logo-270x270.png" alt="MamZelles en vadrouille" className="sidebar-about-img" />
            </div>
            <h3 className="sidebar-about-title">À propos de nous</h3>
            <p className="sidebar-about-text">Nous, c&apos;est Amélie & Laurie, deux amoureuses de la vie et du voyage. Nous partageons ici nos aventures à travers le monde.</p>
            <a href="/qui-sommes-nous" className="sidebar-link">Notre histoire →</a>
          </div>

          {/* CTA VOYAGE SUR MESURE */}
          <div className="sidebar-card sidebar-cta">
            <p className="eyebrow-gold">Voyage sur mesure</p>
            <h3 className="sidebar-cta-title">Vous rêvez d&apos;un voyage <em>sur mesure ?</em></h3>
            <p className="sidebar-cta-text">Nous créons des itinéraires personnalisés, pensés selon vos envies, votre rythme et votre budget.</p>
            <a href="/formules#formulaire" className="btn-gold">Créer mon voyage</a>
          </div>

          {/* ARTICLES RÉCENTS */}
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
          © 2026 MamZelles en vadrouille<br className="mobile-br" />Tous droits réservés
        </div>
      </footer>

    </div>
  );
}
