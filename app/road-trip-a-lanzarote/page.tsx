import type { Metadata } from 'next';
import './lanzarote.css';
import Navbar from '../components/Navbar';
import ScrollToTop from '../components/ScrollToTop';
import CommentForm from '../components/CommentForm';
import CommentsList from '../components/CommentsList';
import NewsletterForm from '../components/NewsletterForm';
import Footer from '../components/Footer';
import ArticlesLies from '../components/ArticlesLies';

export const metadata: Metadata = {
  title: "Que faire à Lanzarote ? Road trip d'une semaine",
  description: "Road trip d'une semaine à Lanzarote : La Geria, Playa Papagayo, volcans, plages sauvages et piscines naturelles… Notre itinéraire complet jour par jour.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/road-trip-a-lanzarote' },
  openGraph: {
    title: "Que faire à Lanzarote ? Road trip d'une semaine",
    description: "Road trip d'une semaine à Lanzarote : La Geria, Playa Papagayo, volcans, plages sauvages et piscines naturelles… Notre itinéraire complet jour par jour.",
    url: 'https://mamzellesenvadrouille.com/road-trip-a-lanzarote',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/Lanzarote.webp', width: 1920, height: 1080 }],
    locale: 'fr_FR',
    type: 'article',
    publishedTime: '2022-10-22T15:44:25.000Z',
    authors: ['MamZelles en vadrouille'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Que faire à Lanzarote ? Road trip d'une semaine",
    description: "Road trip d'une semaine à Lanzarote : La Geria, Playa Papagayo, volcans, plages sauvages et piscines naturelles… Notre itinéraire complet jour par jour.",
    images: ['https://mamzellesenvadrouille.com/Lanzarote.webp'],
  },
};

export default function LanzarotePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: "Que faire à Lanzarote ? Road trip d'une semaine",
    description: "Road trip d'une semaine à Lanzarote : La Geria, Playa Papagayo, volcans, plages sauvages et piscines naturelles… Notre itinéraire complet jour par jour.",
    image: 'https://mamzellesenvadrouille.com/Lanzarote.webp',
    datePublished: '2022-10-22',
    dateModified: '2026-06-30',
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
      '@id': 'https://mamzellesenvadrouille.com/road-trip-a-lanzarote',
    },
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      <section className="hero hero-article" style={{ overflowX: 'hidden' }}>
        <Navbar activePage="blog" />
        <img className="hero-bg" src="/Lanzarote.webp" alt="Road trip d'une semaine à Lanzarote, l'île aux volcans" style={{objectPosition: 'center 80%'}} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Lanzarote<br /><em>L'île aux 300 volcans</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Une semaine de road trip sur l'île<br className="mobile-hero-break" /> la plus sauvage des Canaries.</p>
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
          <span>Toute l'année</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 12V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1"/><path d="M16 12h6v4h-6a2 2 0 0 1 0-4z"/></svg>
          <span>60-80 €/j/pers.</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M14.8 9a2 2 0 0 0-2-1.5h-1.6a2 2 0 0 0 0 4h1.6a2 2 0 0 1 0 4H11a2 2 0 0 1-2-1.5"/><line x1="12" y1="6" x2="12" y2="18"/></svg>
          <span>Euro (€)</span>
        </div>
        <span className="article-bref-bar-sep">•</span>
        <div className="article-bref-bar-item">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
          <span>Espagnol</span>
        </div>
      </div>

      {/* BLOC COUP DE COEUR */}
      <div className="article-coup-de-coeur">
        <div className="article-cdcr-header">
          <span className="article-cdcr-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="#c8956c" stroke="#c8956c" strokeWidth="1"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
          </span>
          <h2>Pourquoi nous avons adoré Lanzarote</h2>
        </div>
        <div className="article-cdcr-grid">
          <div className="article-cdcr-item"><span className="article-cdcr-label">Notre spot coup de <span className="cdcr-coeur-text">cœur</span><span className="cdcr-coeur-icon">♡</span></span><span className="article-cdcr-value">→ La Cueva de los Suecos</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">Le paysage le plus fou</span><span className="article-cdcr-value">→ Les vignes de La Geria</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">La plus belle plage</span><span className="article-cdcr-value">→ La Playa Caletón Blanco</span></div>
          <div className="article-cdcr-item"><span className="article-cdcr-label">À ne pas manquer</span><span className="article-cdcr-value">→ Le cratère d'El Cuervo</span></div>
        </div>
      </div>

      <div className="article-layout article-lanzarote">
        <main className="article-main">

          {/* SOMMAIRE */}
          <nav className="article-toc">
            <h2 className="article-toc-title"><svg width="18" height="18" viewBox="0 0 24 24" fill="var(--gold)" stroke="none" style={{marginRight:'8px', verticalAlign:'middle'}}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>Sommaire de l'article</h2>
            <ul className="article-toc-list">
              <li><a href="#jour-1">Jour 1 : Las Grietas, Palmier incliné, Montaña Colorada, El Cuervo, Montaña Negra</a></li>
              <li><a href="#jour-2">Jour 2 : La Geria, Playa Mujeres, Playa Papagayo</a></li>
              <li><a href="#jour-3">Jour 3 : El Lago Verde, Los Hervideros, Las Salinas de Janubio, Los Charcones</a></li>
              <li><a href="#jour-4">Jour 4 : Haría, Mirador del Río, Playa Caletón Blanco, Punta Mujeres</a></li>
              <li><a href="#jour-5">Jour 5 : El Risco de Famara, Cueva de los Suecos, Playa Famara</a></li>
              <li><a href="#pratique">Tout savoir pour organiser son voyage</a></li>
            </ul>
          </nav>

          {/* INTRO */}
          <section className="article-section">
            <p className="article-intro">Vous envisagez de partir une semaine à Lanzarote et de faire un road trip sur l'île aux volcans ? Superbe idée ! Pour vous aider à y voir plus clair et organiser au mieux votre séjour, nous partageons ici tous nos itinéraires et bons plans…</p>
            <p>Cela fait un moment que nous voulions découvrir les Canaries. À défaut de faire le tour de toutes les îles de l'archipel, il a fallu faire un choix !</p>
            <p>Notre cœur s'est rapidement tourné vers Lanzarote parce qu'elle est la plus sauvage, naturelle et authentique de toutes. Avec ses paysages aussi surprenants qu'impressionnants, Lanzarote est surnommée l'<strong>île aux volcans</strong>. C'est la plus ancienne des Canaries puisqu'elle est âgée de 23 millions d'années !</p>
            <p>L'archipel des Canaries comporte 7 îles, Lanzarote est celle la plus à l'Est. Elle se situe au large des côtes marocaines. Sa superficie est de 845,94 km² pour être précise, ce qui fait d'elle la 4ᵉ plus grande île de l'archipel. Avec ses 142 517 habitants, Lanzarote est la 3ᵉ île la plus peuplée des Canaries après Tenerife et Grande Canarie.</p>
            <p>Cette île espagnole est réputée pour son climat, puisque ses températures moyennes varient entre 20 et 28 degrés, ce qui permet de la visiter toute l'année. C'est une destination très touristique, et notamment très prisée par les windsurfeurs car le vent y est quasi-constant.</p>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6088-1024x768.jpg" alt="Montaña Colorada Lanzarote" className="article-img-full" loading="lazy" /></div>
            <p>Nous nous sommes donc rendues à Lanzarote au mois de mars. Nous n'avons pas eu un super temps au départ, qu'on se le dise, mais cela ne nous a pas empêchées de partir à la découverte de cette île aux allures incroyables !</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Si vous avez l'intention de vadrouiller comme nous, n'oubliez pas au préalable de réserver votre véhicule qui est à récupérer directement sur le parking de l'aéroport. Nous vous conseillons le loueur <a href="https://www.cicar.com/FR/location-voitures-lanzarote" target="_blank" rel="noopener noreferrer" className="article-link">Cicar</a> qui propose le meilleur tarif (en tenant compte des conditions de location). Optez pour un modèle un peu plus robuste car il y a différents spots auxquels on accède uniquement par des routes accidentées.</p></div>
            </div>
            <p>Nous avons réservé une chambre dans l'appart'hôtel <a href="https://www.google.com/maps/search/?api=1&query=Apartamentos+Acuario+Sol+Puerto+del+Carmen" target="_blank" className="article-link article-resto-link-desktop">Acuario Sol</a><a href="https://maps.app.goo.gl/XsT6hgbqyqUUTGsp9" target="_blank" className="article-link article-resto-link-mobile">Acuario Sol</a> dans la ville de Puerto del Carmen, sur la côte Sud-Est de l'île. Avec un très bon rapport qualité/prix et idéalement situé, il permet de visiter les 4 coins de l'île en moins de 45 min en voiture.</p>
                        <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_5739-1024x768.jpg" alt="Hôtel Acuario Sol Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_5812-768x1024.jpg" alt="Hôtel Acuario Sol Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
            </div>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_5789_jpg-1024x768.jpg" alt="Puerto del Carmen Lanzarote" className="article-img-full" loading="lazy" /></div>
            <p>Sachez que Lanzarote regroupe <strong>300 cônes volcaniques</strong>, et que les <strong>3/4 de l'île sont recouverts de lave</strong>. Ce décor est impressionnant et fait tout le charme de cette île volcanique ! En effet, Lanzarote est marquée par les éruptions volcaniques qui ont eu lieu entre 1730 et 1736, et en 1824. La lave semble avoir figé le temps.</p>
            <p>Dès notre arrivée, nous sommes rapidement plongées dans un paysage aride, désertique voire lunaire. Tout juste sorties de l'aéroport, on aperçoit déjà une multitude de volcans… À ce moment-là, on a juste hâte de partir à la découverte de cette île aux multiples facettes !</p>
          </section>

          {/* JOUR 1 */}
          <section id="jour-1" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 1</span>
              <h2>Las Grietas, le Palmier incliné, la Montaña Colorada, El Cuervo &amp; la Montaña Negra</h2>
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Las Grietas</h3>
            </div>
            <p>Notre 1ʳᵉ étape de la journée, <strong>Las Grietas</strong>, est située à seulement 11 minutes de notre appart'hôtel à Puerto del Carmen.</p>
            <p>C'est un endroit un peu secret qui se trouve dans peu de guides touristiques. Il se situe sur la <strong>L2-35</strong>. Ne cherchez pas de panneau, il n'y en a pas ! Garez-vous au niveau du petit parking qui longe la route. L'accès est facile, il ne vous restera plus qu'à traverser.</p>
            <p>Las Grietas est une grosse fissure sur la pente de la <strong>Montaña Blanca</strong>. Vous pouvez vous promener sur plusieurs mètres à travers un couloir étroit de lave pétrifiée où l'on peut observer les différentes couches volcaniques.</p>
            <p>On ressent clairement ici la force de la nature. Et il faut le dire, c'est un très bon spot pour faire de belles photos !</p>
                                                <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220316_125711_751-768x1024.jpg" alt="Las Grietas Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220316_131051_336-768x1024.jpg" alt="Las Grietas Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Le Palmier incliné</h3>
            </div>
            <p>Nous continuons notre route, direction le célèbre <strong>Palmier incliné</strong> à 10 minutes de là. Il se situe au pied de la <strong>Montaña Negra</strong>. Pareil, rien n'indique ce lieu sur la route, mais bingo, notre GPS l'a facilement localisé (tapez pour cela « Palmera inclinada, <strong>LZ-30</strong> ») !</p>
            <p>Il faut se garer dans un petit chemin. N'essayez pas d'aller jusqu'au bout en voiture, vous risqueriez d'avoir tout à redescendre en marche arrière ! Une fois stationné, admirez le paysage et profitez d'une petite balade de 5 minutes à travers les champs de lave et vous voilà arrivé. Une petite photo souvenir de ce fameux palmier et c'est reparti !</p>
            <div className="article-update">
              <p><strong>Mise à jour</strong> — On nous a informées que le palmier était tombé. Il est actuellement couché par terre, coupé en deux et desséché...</p>
            </div>
                                    <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220316_135909_267-1024x768.jpg" alt="Palmier incliné Lanzarote" className="article-img-full" loading="lazy" /></div>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_5966_jpg-768x1024.jpg" alt="Palmier Lanzarote" loading="lazy" style={{flex:"0.333",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_5970_jpg-768x1024.jpg" alt="Palmier Lanzarote" loading="lazy" style={{flex:"0.333",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220316_140308_534-768x1024.jpg" alt="Palmier incliné Lanzarote" loading="lazy" style={{flex:"0.333",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>La Montaña Colorada</h3>
            </div>
            <p>En sortant du chemin, reprenez la route sur votre droite et empruntez la 1ʳᵉ à droite (<strong>LZ-56</strong>). À plus ou moins 7 minutes en voiture, vous tomberez sur la <strong>Montaña Colorada</strong>, autrement dit la Montagne Rouge.</p>
            <p>Sa couleur spectaculaire est due à la multitude de fragments de lave rouge présents. La petite randonnée d'1 h, qui permet de faire le tour du volcan, est accessible depuis le grand parking facilement reconnaissable depuis la route.</p>
            <p>De là, suivez le chemin aménagé qui part sur votre droite. Tout au long de la balade se trouvent des panneaux qui expliquent ce que l'on peut observer autour de nous.</p>
            <p>Pour ne pas vous mentir, nous n'avons pas fait le tour complet pour gagner du temps… Il fallait absolument qu'on soit à l'heure pour le coucher du soleil au prochain spot !</p>
            <p>Nous nous sommes donc rendues jusqu'à la <strong>bombe volcanique</strong>. Elle vaut clairement le détour tellement elle est impressionnante ! Même si le ciel était couvert ce jour-là, les couleurs de ce paysage étaient magiques.</p>
            <div className="article-update">
              <p><strong>Mise à jour</strong> — Il est désormais interdit de monter sur la Montaña Colorada.</p>
            </div>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220316_154659_567-1024x768.jpg" alt="Montaña Colorada Lanzarote" className="article-img-full" loading="lazy" /></div>
            <p>Pour se rendre au prochain spot, on reprend la même route et on revient un peu sur nos pas. Situés à seulement 3 minutes en voiture, se trouvent les parkings pour accéder d'un côté à <strong>El Cuervo</strong> et de l'autre à la <strong>Montaña Negra</strong> (c'est de son point culminant que nous voulons voir le coucher du soleil).</p>
            <p>Ces 2 sites sont relativement proches l'un de l'autre, c'est pourquoi il est judicieux de laisser sa voiture sur l'un des 2 parkings pour rejoindre ensuite ces points d'intérêt à pied.</p>

            <div className="article-day-header article-day-header-tight">
              <h3>El Cuervo</h3>
            </div>
            <p>Depuis le parking, empruntez le petit sentier sur environ 1 km à travers une mer de lave. Arrivé au pied du cratère, suivez le chemin sur la droite.</p>
            <p>Après quelques minutes de marche, vous tomberez sur l'ouverture permettant de pénétrer au <strong>cœur du volcan</strong>. À cet endroit, si vous jetez un œil sur la droite, vous apercevrez un gros bloc de pierre qui dépasse dans ce paysage lunaire. Il s'agit en fait du rocher qui fermait le cratère et qui a été projeté lors de la dernière éruption volcanique.</p>
            <p>Une fois à l'intérieur, le décor est saisissant. On peut facilement se laisser transporter et imaginer la lave, les grondements, les explosions… On se croirait vraiment sur une autre planète !</p>
                                                <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6059-768x1024.jpg" alt="El Cuervo Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_9413-1024x768.jpg" alt="El Cuervo Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>La Montaña Negra</h3>
            </div>
            <p>Nous finissons la journée par l'ascension de la <strong>Montaña Negra</strong>, située juste en face d'<strong>El Cuervo</strong>. Il faut compter une petite demi-heure pour monter à son sommet. Son nom Montagne Noire vient du fait qu'elle est constituée de petits cailloux noirs et de cendre volcanique.</p>
            <p>Notre objectif initial était d'arriver à son point le plus haut avant le coucher du soleil ! Vu comme le ciel est chargé ce soir-là, il n'y aura pas d'incroyable sunset… Mais tant pis, on y est, on y va !</p>
            <p>Il y a plusieurs sentiers pour monter. À noter cependant que plus ils sont inclinés, plus ils seront difficiles à gravir physiquement et plus ils seront glissants ! À vous du coup de choisir le meilleur chemin à emprunter.</p>
            <p>Arrivées au sommet, on a l'impression d'être sur le toit du monde ! Même si on ne peut pas assister au coucher du soleil, ce spot nous offre une <strong>vue spectaculaire à 360°</strong>.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6022-1024x768.jpg" alt="Montaña Negra Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220316_185432_226-768x1024.jpg" alt="Montaña Negra Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
            </div>
            <p>De là, c'est bien plus facile et bien moins fatigant pour rejoindre le parking ! Comme des gosses, on est redescendues en courant et en se laissant porter par la pente, quitte à se remplir les chaussures de cailloux ! Fous rires garantis ! En moins de 15 minutes, nous étions de retour à la voiture.</p>
            <div className="article-update">
              <p><strong>Mise à jour</strong> — Il est désormais interdit de monter sur la Montaña Negra.</p>
            </div>
            <p>Direction <strong>Puerto del Carmen</strong>, où se trouve notre hôtel, pour y manger un petit morceau en attendant la belle journée du lendemain qui s'annonce !</p>
          </section>

          {/* JOUR 2 */}
          <section id="jour-2" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 2</span>
              <h2>La Geria, Playa Mujeres &amp; Playa Papagayo</h2>
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>La Geria</h3>
            </div>
            <p>Pour le premier stop de la journée, nous partons à la découverte des vignes volcaniques de Lanzarote. Vous allez voir, elles offrent un paysage incroyable, fascinant et unique au monde !</p>
            <p>Les principales zones viticoles de l'île sont situées dans les régions de <strong>La Geria</strong>, <strong>Masdache</strong> et <strong>Tinajo</strong>.</p>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_0238-1024x768.jpg" alt="Vignes volcaniques Lanzarote" className="article-img-full" loading="lazy" /></div>
            <p>Nous avons choisi d'aller visiter <strong>La Geria</strong> qui est le plus grand vignoble de Lanzarote. Vous avez déjà dû tomber sur des images de cet endroit. En vrai, il est encore plus impressionnant ! L'atmosphère qui règne ici est particulière et atypique.</p>
            <p>Imaginez à perte de vue un paysage noir, dû aux cendres volcaniques, sur lequel des trous de 2 à 5 m de diamètre apparaissent. <strong>Les vignes</strong> sont plantées dans ces immenses alvéoles afin de les protéger du vent. Les trous, plus ou moins profonds, permettent d'atteindre une couche de terre plus argileuse et humide. Les cendres à la surface jouent un rôle de protection pour la vigne et réduisent également l'évaporation de l'eau.</p>
            <p>Il est bon de savoir que les viticulteurs font tout manuellement, aucun engin agricole n'est utilisé pour cela. Si jamais les trous ne sont pas assez profonds pour protéger les vignes contre les vents brûlants et asséchants du Sahara, ils complètent le dispositif de protection en construisant autour des murs de pierre en forme de demi-cercle.</p>
                                    <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6196-768x1024.jpg" alt="Vignes volcaniques Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6159-1024x768.jpg" alt="La Geria Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
            </div>
            <p>À la <a href="https://www.google.com/maps/search/?api=1&query=Bodega+La+Geria+Lanzarote" target="_blank" className="article-link article-resto-link-desktop">Bodega de La Geria</a><a href="https://maps.app.goo.gl/w5N4ttCyfQSDS2oL9" target="_blank" className="article-link article-resto-link-mobile">Bodega de La Geria</a>, vous avez la possibilité de déguster et d'acheter le vin qu'ils produisent. Il y a également sur place un petit restaurant. Les tapas y sont excellentes, laissez-vous tenter ! Ce haut-lieu est facilement accessible depuis leur parking.</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Évitez les heures de pointe pour vous y rendre à cause de l'afflux des bus touristiques qui pourrait gâcher votre moment !</p></div>
            </div>
                                    <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6181-1024x768.jpg" alt="La Geria Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/La-Bodega-768x1024.jpg" alt="Bodega La Geria Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
            </div>
            <p>Nous n'avons pas su résister à la tentation de faire voler notre drone dans cet endroit époustouflant. Impossible de repartir d'ici sans prendre quelques photos vues du ciel ! Pour cela, nous avons repris la voiture et sommes allées nous poser dans un petit chemin non loin de là.</p>
                                    <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_0261-768x1024.jpg" alt="Vignes volcaniques Lanzarote" loading="lazy" style={{flex:"0.333",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_0244-768x1024.jpg" alt="Vignes volcaniques Lanzarote" loading="lazy" style={{flex:"0.333",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6191-768x1024.jpg" alt="Route Lanzarote" loading="lazy" style={{flex:"0.333",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Playa Mujeres</h3>
            </div>
            <p>Changement de décor ! À environ 30 minutes en voiture de La Geria, direction les plages de la côte Sud, réputées pour leur beauté.</p>
            <p>Les 4 derniers kilomètres se font sur une <strong>route accidentée</strong> et ça secoue pas mal ! Après 3 km de piste environ, la route se divise. <strong>Playa Papagayo</strong> d'un côté, les autres plages de l'autre. Nous prenons <strong>sur la droite</strong> dans un premier temps, direction Playa Mujeres, car nous voulons terminer notre journée de vadrouille par le coucher de soleil à la Playa Papagayo…</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Nous vous recommandons d'être équipé d'un véhicule suffisamment robuste pour emprunter cette piste — évitez la Fiat 500, vous risqueriez de laisser des bouts de voiture sur place ! Il est possible de stationner sans difficulté sur les grands parkings gratuits mis à disposition.</p></div>
            </div>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6219-1024x768.jpg" alt="Playa Mujeres Lanzarote" className="article-img-full" loading="lazy" /></div>
            <p>Arrivées à la <strong>Playa Mujeres</strong>, on découvre une jolie et longue plage de sable fin. Il y a très peu de monde, certainement lié au fait qu'elle soit assez isolée.</p>
            <p>En longeant la falaise sur la gauche, vous pouvez accéder à une petite crique, plus intimiste, appelée <strong>Caletón del Cobre</strong>. Si la marée est basse, vous pouvez continuer à longer la côte afin de découvrir les autres plages. La <strong>Playa Caletón San Marcial</strong>, magnifique petite plage au milieu des hautes falaises, vaut le coup d'œil !</p>
            <p>Il est possible depuis la Playa Mujeres de rejoindre la Playa Papagayo à pied. Pour cela, prenez le sentier qui longe la côte. Cette balade vous offrira de superbes points de vue !</p>
            <p>Après avoir pris le temps ici et profité des dernières chaleurs de la journée, on reprend la voiture, direction la Playa Papagayo !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220317_180842_496-768x1024.jpg" alt="Playa Mujeres Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220317_181912_661-1024x768.jpg" alt="Playa Mujeres Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220317_181425_479-1024x768.jpg" alt="Playa Mujeres Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220317_182515_074-768x1024.jpg" alt="Playa Mujeres Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Playa Papagayo</h3>
            </div>
            <p>La <strong>plage de Papagayo</strong> est considérée comme l'une des plus belles plages de Lanzarote. Et effectivement, on en prend plein les yeux ! Au pied des falaises, apparaît une magnifique plage de sable doré. Son eau est transparente et de couleur émeraude.</p>
            <p>Pour admirer le coucher du soleil et se poser sur le <strong>spot parfait</strong>, nous avons longé l'unique restaurant du coin pour rejoindre la <strong>pointe de la falaise</strong>. D'ici, on aperçoit sur la droite toutes les plages citées précédemment. Même si on était juste au top devant ce merveilleux panorama, nous n'étions malheureusement pas les seules à avoir eu cette idée !</p>
            <p>En tout cas, le ciel était voilé ce soir-là aussi. Nous n'aurons pas eu notre petit sunset tant attendu. Dommage… Demain peut-être ?!</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6276-1024x768.jpg" alt="Playa Papagayo Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6281-1024x768.jpg" alt="Playa Papagayo Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
            </div>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6287-1024x768.jpg" alt="Playa San Marcial Lanzarote" className="article-img-full" loading="lazy" /></div>
          </section>

          {/* JOUR 3 */}
          <section id="jour-3" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 3</span>
              <h2>El Lago Verde, Los Hervideros, Las Salinas de Janubio &amp; Los Charcones</h2>
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>El Lago Verde</h3>
            </div>
            <p>Pour notre 3ᵉ journée sur cette île aux paysages surprenants, nous partons à la découverte du <strong>Sud-Ouest</strong> !</p>
            <p>1ᵉʳ stop du jour à <strong>El Lago Verde (ou Charco Verde)</strong>. Vous trouverez un grand parking gratuit juste à l'entrée du site. Empruntez le petit sentier qui part de là pour accéder au <strong>Mirador del Charco de los Clicos</strong>. L'accès est facile, faisable même en tong. Nous marchons 5 petites minutes pour arriver au spot.</p>
            <p>Et là, c'est un gros WAHOU ! On en prend plein les yeux avec le contraste des couleurs du paysage. Entre le bleu turquoise de la mer, le sable noir, le lac vert émeraude et les falaises oranges, c'est juste incroyable !</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/IMG_6407-1024x768.jpg" alt="El Lago Verde Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/12/DJI_0280-1024x768.jpg" alt="Charco Verde Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_0283-1024x768.jpg" alt="Charco Verde Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_0282-1-1024x768.jpg" alt="Charco Verde Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
            </div>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Si vous souhaitez descendre sur la plage, il faudra arriver de l'autre côté. L'accès depuis le Mirador est définitivement fermé afin de préserver la falaise. Cet endroit étant un incontournable à Lanzarote, le Mirador est toujours très fréquenté. Du coup, nous vous conseillons de vous y rendre plutôt en fin de journée. Il y aura moins de monde et la lumière sera plus belle…</p></div>
            </div>
            <p>N'hésitez pas avant de reprendre la route, à faire un petit arrêt au village de pêcheurs <strong>El Golfo</strong>, que ce soit pour y manger du poisson de la pêche du jour ou tout simplement vous imprégner de l'atmosphère de l'endroit.</p>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6441-1024x768.jpg" alt="El Golfo Lanzarote" className="article-img-full" loading="lazy" /></div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6461-1024x768.jpg" alt="El Golfo Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6468-1024x768.jpg" alt="El Golfo Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Los Hervideros</h3>
            </div>
            <p>À 5 minutes en voiture d'<strong>El Golfo</strong>, nous arrivons à los <strong>Hervideros</strong>, se traduisant littéralement par « eau bouillante ». Ici, vous n'aurez aucune difficulté à vous garer non plus (grand parking).</p>
            <p>Encore un endroit impressionnant, comme figé par le temps. Le site est recouvert de lave mais propose plusieurs petits sentiers balisés et bien aménagés pour déambuler.</p>
            <p>Vous découvrirez dans cet univers chaotique de lave pétrifiée, différents points de vue et 2 grottes dans lesquelles la mer vient s'engouffrer. Aussi, depuis quelques puits de jour bien dissimulés dans le décor, on peut observer les vagues se fracasser dans les grottes, provoquant un bruit assourdissant.</p>
            <div className="article-avis">
              <span className="article-avis-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Pour apprécier davantage le moment et avoir un paysage encore plus spectaculaire, nous vous conseillons de venir à marée haute. Ici encore, on se rend compte de la puissance de Dame Nature !</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6514-1024x768.jpg" alt="Los Hervideros Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6531_jpg-768x1024.jpg" alt="Los Hervideros Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
            </div>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6506-1024x768.jpg" alt="Los Hervideros Lanzarote" className="article-img-full" loading="lazy" /></div>

            <div className="article-day-header article-day-header-tight">
              <h3>Las Salinas de Janubio</h3>
            </div>
            <p>Nous continuons notre route, direction la <strong>Playa de Janubio</strong> à 10 minutes de là. À cet endroit, la baignade est interdite à cause des forts courants, mais le paysage vaut quand même le coup d'œil. Avec le temps, cette plage de sable noir s'est formée suite à l'accumulation de gravillons de lave pétrifiée provoquée par l'érosion marine.</p>
            <p>De l'autre côté, vous apercevrez la lagune longue d'1 km créée par une éruption volcanique, ainsi que les célèbres <strong>Salinas de Janubio</strong>.</p>
            <p>Elles sont les plus étendues des Îles Canaries et constituent un paysage humain d'une grande valeur architecturale et culturelle. De nos jours, elles continuent de produire l'or blanc qui a été essentiel à l'économie de l'île jusqu'à quelques décennies seulement.</p>
            <p>Nous nous sommes rendues sur ce site en fin d'après-midi. La lumière était juste sublime… Elle se reflétait sur les marais et nous a offert un joli camaïeu de rose sur les salins.</p>
                                                            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220318_163623_323-768x1024.jpg" alt="Las Salinas de Janubio Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6580-1024x768.jpg" alt="Las Salinas de Janubio Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Los Charcones</h3>
            </div>
            <p>On reprend la route vers <strong>los Charcones</strong> et ses <strong>piscines naturelles</strong>. Une règle inévitable pour voir les piscines (et s'y baigner pour les plus courageux !), <strong>s'y rendre à marée basse</strong> !</p>
            <p>Nous avons choisi de nous garer à l'<strong>usine de dessalement de Yaíza</strong>. Il y a un peu de piste, mais l'accès reste facile. Pour vous y rendre, tapez sur le GPS « Canal Gestión Lanzarote - Central de Janubio » ou les coordonnées <strong>28.9210617, 13.8365738</strong>.</p>
            <p>De là, suivez la côte à pied. N'hésitez pas à sortir du sentier pour rejoindre le bord de l'eau, il y a plusieurs piscines bien cachées !</p>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
              <div><strong>Prudence</strong><p>Malgré la marée basse, il y avait ce jour-là un gros coefficient et beaucoup de vent… Du coup, les piscines étaient régulièrement recouvertes par les vagues, et il était très dangereux de s'y baigner, même de s'y approcher !</p></div>
            </div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6663-1024x768.jpg" alt="Los Charcones Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6744-768x1024.jpg" alt="Los Charcones Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
            </div>
            <p>En continuant votre chemin, vous tomberez sur la <strong>Mini Playa</strong>. Comme son nom l'indique, cette sublime plage de sable est tellement petite, qu'une fois votre serviette posée, il n'y a plus de place pour personne !</p>
            <p>À peine plus loin, au <strong>Bufón de Simin</strong>, un spectacle de Dame Nature vous attend ! Ici, l'océan, poussé par le vent, vient taper la falaise. On a l'impression que l'eau jaillit des entrailles de la Terre sous forme de geyser. Soyez prêts à vous mouiller !</p>
            <p>C'est le <strong>spot parfait</strong> que nous avons trouvé pour contempler le paysage et le coucher du soleil. Quel merveilleux souvenir on garde de ce moment !</p>
          </section>

          {/* JOUR 4 */}
          <section id="jour-4" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 4</span>
              <h2>Haría, Mirador del Río, Playa Caletón Blanco &amp; Punta Mujeres</h2>
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Haría</h3>
            </div>
            <p>Aujourd'hui, nous partons au <strong>Nord-Est</strong> de Lanzarote. Comme nous sommes samedi, cela tombe à pic pour faire une halte à Haría et découvrir son petit <strong>marché artisanal</strong> (10 h - 14 h).</p>
            <p>On y fait effectivement rapidement le tour, mais l'ambiance est particulièrement agréable ici. Profitez-en pour vous balader dans le village, à l'ombre des palmiers.</p>
            <p>Après avoir déjeuné dans un petit restaurant typique sur la Place León y Castillo, nous reprenons la voiture pour 12 minutes de route...</p>
                                                            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6825-768x1024.jpg" alt="Haría Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6830-768x1024.jpg" alt="Haría Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Mirador del Río</h3>
            </div>
            <p>Nous arrivons au <strong>Mirador del Río</strong>, l'un des plus beaux points de vue de Lanzarote !</p>
            <p>Situé à 500 m d'altitude sur les falaises de Famara, il offre une vue imprenable sur <strong>El Risco de Famara</strong> et l'<strong>île de La Graciosa</strong> qui se trouve en face.</p>
            <p>Le <strong>belvédère del Río</strong> est une création architecturale de <strong>César Manrique</strong> qui s'intègre parfaitement dans l'environnement. Ce bâtiment donne accès à plusieurs étages avec différents points de vue.</p>
            <p>L'entrée au Mirador del Río est payante : 9 € en tarif adulte et 4,50 € en tarif réduit (tarifs à jour sur <a href="https://www.cactlanzarote.com" target="_blank" rel="noopener noreferrer" className="article-link">cactlanzarote.com</a>). Un grand parking gratuit vous permettra de vous garer sans difficulté.</p>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6847-1024x768.jpg" alt="Mirador del Río Lanzarote" className="article-img-full" loading="lazy" /></div>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Bon à savoir</strong><p>Si l'architecture ne vous intéresse pas, empruntez alors le sentier qui part sur la gauche, juste avant le parking : au bout du chemin, vous découvrirez une vue tout aussi exceptionnelle sur El Risco de Famara et l'île de La Graciosa.</p></div>
            </div>
                                    <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6841-768x1024.jpg" alt="Mirador del Río Lanzarote" loading="lazy" style={{flex:"0.265",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220319_150851_872-1024x768.jpg" alt="Mirador del Río Lanzarote" loading="lazy" style={{flex:"0.471",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6881-768x1024.jpg" alt="Mirador del Río Lanzarote" loading="lazy" style={{flex:"0.265",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Playa Caletón Blanco</h3>
            </div>
            <p>¡ Vamos à la playa ! En un petit quart d'heure en voiture, vous arriverez à la <strong>Playa Caletón Blanco</strong>. Une grande piscine naturelle, du sable blanc et une eau turquoise, cette plage est juste magnifique !</p>
            <div className="article-tip">
              <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
              <div><strong>Le conseil des MamZelles</strong><p>Vérifiez l'heure des marées avant de vous y rendre ! L'idéal est d'y aller à marée haute.</p></div>
            </div>
            <div className="article-gallery-3">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_0315-768x1024.jpg" alt="Playa Caletón Blanco Lanzarote" loading="lazy" style={{flex:"0.220",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_0307-1024x768.jpg" alt="Playa Caletón Blanco Lanzarote" loading="lazy" style={{flex:"0.390",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_0301-1024x768.jpg" alt="Playa Caletón Blanco Lanzarote" loading="lazy" style={{flex:"0.390",minWidth:0}} />
            </div>
            <p>Le paysage ne cesse de se transformer au fur et à mesure que la marée descend. Quand l'eau se retire, les roches volcaniques apparaissent. Une multitude de petites piscines se forment alors.</p>
            <p>Apparaissent également des murets en forme de demi-cercle, construits par l'homme avec des blocs de roche volcanique entassés, qui servent de paravent ! Ils vont trop bien dans le décor, et c'est très astucieux, vu que Lanzarote est fortement exposée toute l'année aux alizés du Nord-Est (surtout dans l'après-midi) !</p>
            <p>Vous pouvez pêcher des crabes ici, à condition que vous soyez équipé de chaussures adaptées pour gambader dans les rochers en toute sécurité. L'eau est peu profonde sur cette plage. Vous pouvez longuement marcher vers le large sans difficulté, vous aurez pied sur plusieurs dizaines de mètres.</p>
            <p>En bref, la <strong>Playa Caletón Blanco</strong> est juste sublime et est l'endroit parfait pour lézarder quelques heures au soleil !</p>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6938-1024x768.jpg" alt="Playa Caletón Blanco Lanzarote" className="article-img-full" loading="lazy" /></div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6935-768x1024.jpg" alt="Playa Caletón Blanco Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6933-1024x768.jpg" alt="Playa Caletón Blanco Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Punta Mujeres</h3>
            </div>
            <p>Sur le chemin du retour, petite halte à <strong>Punta Mujeres</strong>, un joli et très calme petit village de pêcheurs. Une partie de l'année, Punta Mujeres se transforme en station balnéaire et est très fréquenté.</p>
            <p>Vous trouverez du coup, parmi toutes les maisons blanches typiques de Lanzarote, de nombreuses locations de vacances, de petites boutiques et de quoi vous restaurer.</p>
            <p>Mais le plus intéressant sont les 2 km de côte ! Vous y découvrirez plusieurs <strong>piscines naturelles</strong>, dont l'eau est renouvelée à chaque marée. Ici par contre, nous vous conseillons de <strong>venir à marée basse</strong>.</p>
            <p>La plupart des piscines sont vraiment naturelles, d'autres sont façonnées par la main de l'homme afin de faciliter leur accès. Autour des bassins, des petites plateformes ont également été aménagées pour poser sa serviette, mais il peut vite être très difficile d'y trouver une petite place…</p>
                                                            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_9357-768x1024.jpg" alt="Punta Mujeres Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_6953-1024x768.jpg" alt="Punta Mujeres Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
            </div>
                        <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_9363-1024x768.jpg" alt="Piscine naturelle Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_9350-768x1024.jpg" alt="Piscine naturelle Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
            </div>
          </section>

          {/* JOUR 5 */}
          <section id="jour-5" className="article-section">
            <div className="article-day-header">
              <span className="article-day-badge">Jour 5</span>
              <h2>El Risco de Famara, la Cueva de los Suecos &amp; la Playa Famara</h2>
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>El Risco de Famara</h3>
            </div>
            <p>Pour cette 5ᵉ journée à la découverte de Lanzarote, nous partons au <strong>Nord-Ouest</strong> de l'île.</p>
            <p>1ᵉʳ stop au <strong>mirador El Risco de Famara</strong>, à plus ou moins 40 minutes en voiture de notre hôtel. Ce point de vue est facilement trouvable car il est plutôt bien indiqué sur la route.</p>
            <p>Nous suivons un chemin de terre accidenté pour accéder au parking. Il ne vous reste plus que 5 minutes de marche ensuite pour arriver au belvédère.</p>
            <p>Sur place, vous trouverez une vue imprenable et vertigineuse sur la <strong>plage de Famara</strong>, mais aussi des tables de pique-nique et des structures de jeu pour enfants. C'est l'endroit idéal pour passer un petit moment en famille.</p>
            <p>Il n'est pas rare de croiser des parapentes et des deltaplanes sur ce spot, car c'est de là qu'ils décollent.</p>
            <p>Depuis ce mirador, la vue est magnifique, mais à 5 minutes à pied de là se trouve un autre point de vue encore plus spectaculaire !</p>

                                                            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220320_133410_551-768x1024.jpg" alt="Mirador El Risco de Famara Lanzarote" loading="lazy" style={{flex:"0.360",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_7140-1024x768.jpg" alt="Mirador El Risco de Famara Lanzarote" loading="lazy" style={{flex:"0.640",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Cueva de los Suecos (ou Cueva de las Cabras)</h3>
            </div>
            <div className="article-must">
              <span className="article-must-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></span>
              <div><strong>Prudence</strong><p>Si vous avez le vertige, nous vous déconseillons vivement de vous y aventurer. Ce spot n'est pas du tout sécurisé, et nous déconseillons fortement l'accès aux enfants.</p></div>
            </div>
            <p>Pour trouver ce mirador, il faut <strong>longer le bord de la falaise</strong>. Une fois sur place, vous apercevrez des <strong>rochers et de grosses marches qui descendent sur la droite</strong>.</p>
            <p>Clairement, même nous qui n'avons pas forcément le vertige, nous avons trouvé cet endroit très impressionnant ! Pour nous rassurer, nous sommes descendues sur les fesses car nous avions les jambes qui tétanisaient.</p>
            <p>Vous prendrez donc un tout petit chemin avant d'arriver dans la grotte. Vous vous retrouverez alors à <strong>623 mètres de hauteur et à flanc de falaise</strong> ! Avec sa vue à couper le souffle, on a trouvé ce lieu tout simplement incroyable… Certainement le plus époustouflant de Lanzarote !</p>
                                                            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220320_131855_002-1024x768.jpg" alt="Cueva de los Suecos Lanzarote" className="article-img-full" loading="lazy" /></div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/DJI_20220320_131446_704-768x1024.jpg" alt="Cueva de los Suecos Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_7212-768x1024.jpg" alt="Cueva de los Suecos Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
            </div>

            <div className="article-day-header article-day-header-tight">
              <h3>Playa Famara</h3>
            </div>
            <p>Après que la <strong>Playa Famara</strong> nous ait fait de l'œil d'en haut, c'est parti pour la rejoindre en voiture en 30 minutes.</p>
            <p>Si vous voulez vous baigner ou barboter en détente, vous n'êtes pas au bon endroit… Il y a généralement pas mal de vent et de belles vagues, ce qui en fait un <strong>paradis pour les surfeurs</strong>, et un spot reconnu dans le monde entier !</p>
            <p>Cette belle et <strong>longue plage de 5 km</strong>, parsemée de dunes et d'abris en pierre (comme ceux visibles sur la Playa Caletón Blanco), est cependant parfaite pour une balade en bord de mer ou une petite séance bronzette à l'abri du vent.</p>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_7268-768x1024.jpg" alt="Playa Famara Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/11/IMG_7308_jpg-768x1024.jpg" alt="Playa Famara" loading="lazy" style={{flex:"0.500",minWidth:0}} />
            </div>
            <p>Non loin de là, se trouve le petit <strong>village de La Caleta</strong>. Très animé en haute saison, vous y trouverez quelques magasins (de surf majoritairement), restaurants et bars.</p>
            <p>Nous y avons fait une petite halte avant de rentrer à l'hôtel. C'était l'occasion parfaite pour profiter des derniers rayons de soleil de la journée autour d'une bonne sangria !</p>
            <div className="article-img-wrap"><img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/11/IMG_7334-1024x768.jpg" alt="Playa Famara dunes" className="article-img-full" loading="lazy" /></div>
            <div className="article-gallery-2">
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_7320_jpg-768x1024.jpg" alt="Playa Famara Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
              <img src="https://blog.mamzellesenvadrouille.com/wp-content/uploads/2022/10/IMG_7340_jpg-768x1024.jpg" alt="Playa Famara Lanzarote" loading="lazy" style={{flex:"0.500",minWidth:0}} />
            </div>
          </section>

          {/* SECTION PRATIQUE */}
          <section id="pratique" className="article-section">
            <div className="article-day-header" style={{paddingBottom:'1px', marginTop:'32px', marginBottom:'4px'}}>
              <h2>Tout savoir pour organiser son voyage à Lanzarote</h2>
            </div>

            <div className="article-day-header article-day-header-tight" style={{marginTop:'0px', paddingTop:'1px'}}>
              <h3>Arriver en avion</h3>
            </div>
            <div className="article-pratique-block article-pratique-block-deplacement">
              <p>Pour arriver à Lanzarote, nous avons voyagé avec la compagnie <a href="https://www.ryanair.com/fr/fr" target="_blank" rel="noopener noreferrer" className="article-link">Ryanair</a> depuis Marseille, en vol direct. Les billets nous sont revenus à 160 € pour deux.</p>
              <p>Nous vous recommandons de comparer les offres des différentes compagnies aériennes sur <a href="https://www.skyscanner.fr" target="_blank" rel="noopener noreferrer" className="article-link">Skyscanner</a> pour vous rendre aux Canaries (ou ailleurs !). On utilise beaucoup ce site pour trouver les vols qui nous conviennent, que ce soit au niveau des horaires ou des tarifs.</p>
              <div className="article-tip">
                <span className="article-tip-icon"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="1.5"><path d="M12 2a7 7 0 00-4 12.74V17a1 1 0 001 1h6a1 1 0 001-1v-2.26A7 7 0 0012 2z"/><line x1="9" y1="21" x2="15" y2="21"/><line x1="10" y1="23" x2="14" y2="23"/></svg></span>
                <div><strong>Bon plan</strong><p>Nous nous sommes rendues à Marseille en voiture. Nous avons laissé notre véhicule directement au parking de l'aéroport. La semaine de stationnement sur le parking Super Éco, à 10 minutes à pied du terminal, nous a coûté seulement 38,40 € (comptez plutôt autour de 44 € aujourd'hui, en réservant quelques semaines à l'avance). Si vous êtes dans notre situation, nous vous conseillons de réserver votre ticket de stationnement à l'avance via <a href="https://www.marseille.aeroport.fr/parkings-et-acces" target="_blank" rel="noopener noreferrer" className="article-link">leur site</a>.</p></div>
              </div>
            </div>

            <div className="article-day-header-tight article-pratique-h3" style={{paddingTop:'1px'}}>
              <h3>Se déplacer à Lanzarote</h3>
            </div>
            <div className="article-pratique-block article-pratique-block-deplacement" style={{paddingBottom:'1px'}}>
              <p>Quelle que soit la compagnie que vous choisirez, vous atterrirez à l'<strong>aeropuerto César Manrique</strong>. De là, nous vous conseillons vivement de <strong>récupérer un véhicule</strong> afin d'être autonome sur Lanzarote, les endroits à visiter étant difficilement accessibles en transport en commun.</p>
              <p>Nous sommes passées par <a href="https://www.cicar.com/FR" target="_blank" rel="noopener noreferrer" className="article-link">Cicar</a> et avons loué une Fiat 500XL. Comme nous vous l'avons déjà recommandé, évitez de louer un « pot de yaourt » qui pourrait vous mettre en difficulté sur les routes accidentées pour rejoindre certains spots.</p>
              <p>Leurs tarifs de location sont les plus intéressants de l'île. Nous vous conseillons de réserver votre véhicule avant votre arrivée. Plus vous le ferez tôt, plus les tarifs seront avantageux. Pour autant, rien ne vous sera prélevé sur votre carte, vous réglerez tout sur place.</p>
              <p>Du coup, si vous louez comme nous votre voiture chez Cicar, rendez-vous à la sortie de l'aéroport. Leur bureau est facilement reconnaissable, c'est celui où il y a foule ! Il faudra prendre votre mal en patience pour récupérer votre véhicule. Pour gagner un peu de temps, n'hésitez pas à sortir de la zone de débarquement pour aller au guichet du côté de la sortie. De là, on vous remettra votre clé, leur parking est situé juste en face de l'aéroport. Pratique !</p>
            </div>

            <div className="article-day-header-tight article-pratique-h3 article-pratique-h3-last" style={{marginTop:'2px', paddingTop:'1px'}}>
              <h3>Quand partir ?</h3>
            </div>
            <div className="article-pratique-block article-pratique-block-deplacement">
              <p>Comme pour toutes les îles des Canaries, c'est assez facile de répondre : <strong>tout le temps</strong> ! Le climat est très tempéré, il fait entre 20 et 28 degrés toute l'année.</p>
              <p>Nous vous conseillons donc de partir quand les températures sont basses en France, pour profiter d'un peu de douceur !</p>
              <p style={{marginBottom:0}}>Évitez malgré tout de vous rendre à Lanzarote pendant les mois de juillet et août qui peuvent être très chauds. Hormis la chaleur, vous éviterez également la foule.</p>
            </div>


          </section>

          <section className="article-comments-section">
            <h2 className="article-comments-title">Commentaires</h2>
            <CommentsList comments={[
              {
                id: '1',
                author: 'TITI',
                date: '9 mars 2023',
                text: "Bravo les filles pour votre site !! Les articles sont complets et les photos trop canons. 🤩 J'adore ! 👏🏼",
                reply: { author: 'MamZelles en vadrouille', date: '10 mars 2023', text: "Un grand merci pour ce gentil commentaire... Ça nous fait tellement plaisir ! 😍😍✨" }
              },
              {
                id: '2',
                author: 'Laurence',
                date: '9 nov. 2024',
                text: "Merciiîi pour ce partage Fabuleux, magnifique, hâte d'y être, encore quelques jours de patience pour découvrir cette île mystérieuse",
                reply: { author: 'MamZelles en vadrouille', date: '9 nov. 2024', text: "Avec grand plaisir ! 😊 On vous souhaite un beau voyage sur cette magnifique île lunaire. Profitez de chaque moment... 🤗" }
              },
              {
                id: '3',
                author: 'Piat',
                date: '18 janv. 2025',
                text: "Merci pour vos chouettes articles qui nous donnent envie de découvrir ces coins et recoins de l'île. 🫶 Pour nous, ce sera mi-mars. Par contre, nous avons déjà loué et ce sera une Fiat 500 😥😉. Nous serons prudents et éviterons (tant pis) certains spots. Cordialement. Martine et Etienne",
                reply: { author: 'MamZelles en vadrouille', date: '23 fév. 2025', text: "Heureuses de savoir qu'on a pu vous aider à y voir plus clair sur l'organisation de votre voyage ! 😍😍 Bons préparatifs et bon voyage à vous ! Vous allez voir, cette île est magique ! 🌑🌴🤩" }
              },
              {
                id: '4',
                author: 'Sylvie Figueiredo',
                date: '4 mai 2025',
                text: "Wow les filles ! Trop hâte d'y être, dans quelques jours. Merci pour le partage. Canon les photos ! Nous avons loué une Jeep 😅",
                reply: { author: 'MamZelles en vadrouille', date: '7 mai 2025', text: "Hey bonjour ! À bientôt ! 😊" }
              },
            ]} />
            <CommentForm
              articleTitle={"Que faire à Lanzarote ? Road trip d'une semaine"}
              articleUrl="https://mamzellesenvadrouille.com/road-trip-a-lanzarote"
            />
          </section>

          <NewsletterForm />

          {/* ARTICLES LIES */}
          <ArticlesLies currentSlug="road-trip-a-lanzarote" />

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
              <h3 className="sidebar-cta-title">Vous rêvez d&apos;un voyage<br className="mobile-only-br" /> <em>sur mesure ?</em></h3>
              <p className="sidebar-cta-text">Nous créons des itinéraires personnalisés, pensés selon vos envies, votre rythme<br className="mobile-only-br" /> et votre budget.</p>
              <a href="/formules#formulaire" className="btn-gold">Créer mon voyage</a>
            </div>
          </div>
        </aside>
      </div>

      <ScrollToTop />

      <Footer />

    </>
  );
}
