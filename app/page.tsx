import { Clock, Heart, Map, User } from 'lucide-react';
import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* HERO */}
      <section className="hero hero-home">
        <Navbar activePage="accueil" />
        <img className="hero-bg" src="/home-hero.jpg" alt="" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Vous l&apos;imaginez,<br /><em>On le réalise.</em></h1>
          <div className="hero-rule" />
          <p className="hero-desc">Le plus beau voyage,<br />c&apos;est celui qui vous ressemble.</p>
          <a href="/formules#formulaire" className="btn-gold-outline-hero">Créer mon itinéraire</a>
        </div>
      </section>

      {/* NOTRE VISION */}
      <section className="home-vision" id="approche">
        <div className="home-vision-left">
          <p className="eyebrow-dark">Vos Travel Planners</p>
          <h2 className="home-h2">Pensé pour vous,<br /><em>créé avec passion.</em></h2>
          <div className="home-rule" />
          <p className="home-vision-text">Avant d&apos;être Travel Planners, <br />nous sommes surtout deux voyageuses. <br />Deux regards sensibles à l&apos;équilibre d&apos;un voyage, <br />à la façon dont chacun aime découvrir le monde <br />et à tout ce qui en fait sa richesse. <br />Grâce à nos expériences de terrain et à une préparation <br />pensée avec soin, nous créons des voyages personnalisés, <br />inspirants et mémorables.</p>
        </div>
        <div className="home-vision-right">
          <img src="/vision.jpg" alt="Voyage sur mesure" className="home-vision-img" loading="lazy" />
        </div>
      </section>

      {/* VOS TRAVEL PLANNERS */}
      <section className="home-planners">
        <div className="home-planners-header">
          <h2 className="home-h2">Pourquoi voyager <em>avec <br className="mobile-only-br" />nous&nbsp;?</em></h2>
        </div>
        <div className="home-planners-grid">
          <div className="home-planner-card">
            <Clock size={32} strokeWidth={1.3} className="planner-icon" />
            <h3>Un gain de temps précieux</h3>
            <p>Fini les heures passées à organiser chaque étape du voyage. Nous recherchons et comparons transports, hôtels et activités pour vous.</p>
          </div>
          <div className="home-planner-card">
            <Map size={32} strokeWidth={1.3} className="planner-icon" />
            <h3>Un itinéraire 100% personnalisé</h3>
            <p>Chaque voyage est imaginé selon vos envies, votre rythme et votre budget. Aucun itinéraire ne se ressemble.</p>
          </div>
          <div className="home-planner-card">
            <User size={32} strokeWidth={1.3} className="planner-icon" />
            <h3>Un accompagnement humain</h3>
            <p>Questions, ajustements, derniers détails… nous restons à vos côtés jusqu&apos;à ce que votre voyage soit prêt.</p>
          </div>
          <div className="home-planner-card">
            <Heart size={32} strokeWidth={1.3} className="planner-icon" />
            <h3>Un voyage en toute sérénité</h3>
            <p>Votre carnet de voyage vous attend — informations essentielles, adresses sélectionnées, tout est là. Il ne vous reste plus qu&apos;à partir.</p>
          </div>
        </div>
        <div className="home-planners-cta">
          <a href="/formules#nos-formules" className="btn-gold-outline-hero">Découvrir nos formules →</a>
        </div>
      </section>


      {/* BANDEAU PHOTO */}
      <section className="home-banner">
        <img src="/bandeau.jpg" alt="" className="home-banner-bg" loading="lazy" />
        <div className="home-banner-overlay" />
        <div className="home-banner-content">
          <p className="home-banner-text">Votre voyage <em>commence ici</em></p>
          <div className="home-banner-rule" />
          <p className="home-banner-sub">Chaque itinéraire est imaginé<br />pour vous laisser vivre l&apos;essentiel :<br />découvrir, ressentir, ralentir.</p>
        </div>
      </section>

      {/* QUI SOMMES-NOUS */}
      <section className="home-about">
        <div className="home-about-img-wrap">
          <img src="/champ.png" alt="Amélie et Laurie" className="home-about-img" loading="lazy" />
        </div>
        <div className="home-about-content">
          <p className="eyebrow-dark">Qui sommes-nous</p>
          <h2 className="home-about-h2">Deux voyageuses,<br />Une même <em>vision du voyage.</em></h2>
          <div className="home-rule" />
          <p className="home-about-text">Nous, c&rsquo;est Amélie et Laurie — deux amoureuses de la vie et <br />du voyage, installées à Antibes depuis plus de 13 ans. <br /><br />Les voyages nous ont appris à profiter pleinement de l&rsquo;instant <br />présent et à voir la beauté dans les choses simples. <br /><br />Aujourd&rsquo;hui, nous imaginons des voyages inspirés par tout ce que <br />nous aimons vivre nous-mêmes : la spontanéité, les rencontres et <br />tous ces moments qui font les vrais souvenirs.</p>
          <a href="/qui-sommes-nous" className="home-about-link">Notre histoire →</a>
        </div>
      </section>

      {/* BLOG */}
      <section className="home-blog">
        <div className="home-blog-header">
          <div>
            <p className="eyebrow-dark">Inspirations de voyage</p>
            <h2 className="home-h2">Des idées pour nourrir <em>vos envies d&apos;ailleurs</em></h2>
          </div>
          <a href="https://mamzellesenvadrouille.com/destinations/" target="_blank" rel="noopener noreferrer" className="home-link">Voir tous les articles →</a>
        </div>
        <div className="home-blog-grid">
          <a href="https://mamzellesenvadrouille.com/visiter-madrid-en-3-jours/" target="_blank" rel="noopener noreferrer" className="home-blog-card">
            <div className="home-blog-img-wrap">
              <img src="/Madrid.jpg" alt="" className="home-blog-img madrid" loading="lazy" />
            </div>
            <div className="home-blog-body">
              <h3>Madrid en 3 jours : que voir ? Lieux incontournables & bons plans</h3>
              <span className="home-blog-read">Lire l&apos;article →</span>
            </div>
          </a>
          <a href="https://mamzellesenvadrouille.com/dormir-dans-le-desert-agafay/" target="_blank" rel="noopener noreferrer" className="home-blog-card">
            <div className="home-blog-img-wrap">
              <img src="/Agafay.jpg" alt="" className="home-blog-img" loading="lazy" />
            </div>
            <div className="home-blog-body">
              <h3>Désert d&apos;Agafay : notre guide pour une nuit près de Marrakech</h3>
              <span className="home-blog-read">Lire l&apos;article →</span>
            </div>
          </a>
          <a href="https://mamzellesenvadrouille.com/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient/" target="_blank" rel="noopener noreferrer" className="home-blog-card">
            <div className="home-blog-img-wrap">
              <img src="/Philippines.jpg" alt="" className="home-blog-img" loading="lazy" />
            </div>
            <div className="home-blog-body">
              <h3>Itinéraire Philippines : 3 semaines pour découvrir la perle de l&apos;Orient</h3>
              <span className="home-blog-read">Lire l&apos;article →</span>
            </div>
          </a>
        </div>
      </section>

      {/* CTA FORMULAIRE */}
      <section className="home-cta">
        <img src="/cta.jpg" alt="" className="home-cta-bg" />
        <div className="home-cta-overlay" />
        <div className="home-cta-content">
          <p className="eyebrow">Votre voyage sur mesure</p>
          <h2>Prêt·e à créer<br />votre <em>prochain voyage ?</em></h2>
          <p className="home-cta-sub">Dites-nous ce que vous imaginez.<br />On s&apos;occupe du reste.</p>
          <a href="/formules#formulaire" className="btn-gold-outline-hero">Commencer mon projet</a>
        </div>
      </section>

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
