import type { Metadata } from 'next';
import { Plane, BedDouble, Utensils, MapPin, Map, Compass, Users, User, Calendar, Notebook, Smartphone } from 'lucide-react';
import Navbar from '../components/Navbar';
import ContactForm from '../ContactForm';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Carnet de Voyage Sur Mesure | MamZelles en vadrouille',
  description: "Votre carnet de voyage 100% sur mesure, selon vos envies, votre rythme et votre budget. Appel découverte gratuit, devis sous 48h et sans engagement.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/formules' },
  openGraph: {
    title: 'Carnet de Voyage Sur Mesure | MamZelles en vadrouille',
    description: "Votre carnet de voyage 100% sur mesure, selon vos envies, votre rythme et votre budget. Appel découverte gratuit, devis sous 48h et sans engagement.",
    url: 'https://mamzellesenvadrouille.com/formules',
    siteName: 'MamZelles en vadrouille',
    images: [{ url: 'https://mamzellesenvadrouille.com/og-home.png', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Carnet de Voyage Sur Mesure | MamZelles en vadrouille',
    description: 'Votre carnet de voyage 100% sur mesure, selon vos envies, votre rythme et votre budget. Appel découverte gratuit, devis sous 48h et sans engagement.',
    images: ['https://mamzellesenvadrouille.com/og-home.png'],
  },
};

export default function Formules() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Carnet de Voyage Sur Mesure | MamZelles en vadrouille',
    description: "Votre carnet de voyage 100% sur mesure, selon vos envies, votre rythme et votre budget. Appel découverte gratuit, devis sous 48h et sans engagement.",
    provider: {
      '@type': 'Organization',
      name: 'MamZelles en vadrouille',
      url: 'https://mamzellesenvadrouille.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mamzellesenvadrouille.com/icon.png',
      },
    },
    areaServed: 'FR',
    url: 'https://mamzellesenvadrouille.com/formules',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Nos formules',
      itemListElement: [
        {
          '@type': 'Offer',
          name: "L'Escale",
          priceCurrency: 'EUR',
          price: '179',
        },
        {
          '@type': 'Offer',
          name: 'La Vadrouille',
          priceCurrency: 'EUR',
          price: '329',
        },
        {
          '@type': 'Offer',
          name: 'La Grande Vadrouille',
          priceCurrency: 'EUR',
          price: '499',
        },
        {
          '@type': 'Offer',
          name: 'Sur-mesure',
          priceCurrency: 'EUR',
          price: '549',
        },
      ],
    },
  };

  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <style>{`
      @media (max-width: 768px) {
        .form-right-h2 {
          font-family: 'Cormorant Garamond', serif !important;
          font-size: 26px !important;
          font-style: italic !important;
          font-weight: 600 !important;
          line-height: 1.1 !important;
        }
      }
    `}</style>
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      {/* HERO */}
      <section className="hero hero-formules">
        <Navbar activePage="formules" contactHref="#formulaire" />
        <img className="hero-bg" src="/hero.webp" alt="Voyage sur mesure MamZelles en vadrouille" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>Votre voyage,<br /><em>vos envies,</em><br />votre budget.</h1>
          <div className="hero-rule" />
          <p className="hero-desc">On crée l&apos;itinéraire qui vous ressemble —<span className="formules-m-br"></span> devis<span className="tablet-br"></span> personnalisé<br className="hide-mobile-br" /> sous 48h,<span className="formules-m-br"></span> gratuit &amp; sans engagement.</p>
        </div>
      </section>

      {/* ESSENTIALS */}
      <section className="essentials">
        <p className="section-label">Nos formules</p>
        <h2 className="ess-title">Ce qui est toujours <em>inclus</em></h2>
        <div className="ess-grid">
          <div className="ess-card">
            <Plane size={34} className="ess-icon" strokeWidth={1.2} />
            <h3>Transports</h3>
            <p>Des trajets choisis<br />pour un voyage fluide et<br />serein (avion, train, bus...)</p>
          </div>
          <div className="ess-card">
            <BedDouble size={34} className="ess-icon" strokeWidth={1.2} />
            <h3>Hébergements</h3>
            <p>3 adresses choisies<br />avec soin par destination,<br />selon vos envies</p>
          </div>
          <div className="ess-card">
            <MapPin size={34} className="ess-icon" strokeWidth={1.2} />
            <h3>Sites & activités</h3>
            <p>Des expériences authentiques<br />et des pépites locales</p>
          </div>
          <div className="ess-card">
            <Utensils size={34} className="ess-icon" strokeWidth={1.2} />
            <h3>Restaurants</h3>
            <p>Les meilleures adresses<br />pour vous régaler</p>
          </div>
          <div className="ess-card">
            <Notebook size={34} className="ess-icon" strokeWidth={1.2} />
            <h3>Carnet interactif</h3>
            <p>Itinéraire(s), liens de<br />réservation, cartes Maps,<br />checklists...</p>
          </div>
          <div className="ess-card">
            <Smartphone size={34} className="ess-icon" strokeWidth={1.2} />
            <h3>Cochez, notez,<br />personnalisez</h3>
            <p>Votre carnet devient aussi<br />votre journal de bord !</p>
          </div>
        </div>
      </section>

      {/* FORMULES */}
      <section className="formules" id="nos-formules">

        {/* GAUCHE */}
        <div className="formulas-left">
          <p className="eyebrow-dark">Nos formules</p>
          <h2 className="form-h2">Trouvez celle<br />qui vous <em>correspond</em></h2>

          <div className="fcard">
            <div className="fcard-icon"><Compass size={16} strokeWidth={1.3} /></div>
            <div className="fcard-info">
              <div className="fcard-name">L&apos;Escale</div>
              <div className="fcard-days">2 à 4 jours</div>
            </div>
            <div className="fcard-price"><span>À partir de</span><strong>179 €</strong></div>
            <div className="fcard-arrow-wrap">
              <svg width="16" height="16" className="fcard-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <div className="fcard-tooltip"><p><strong>1 destination incluse</strong></p><p>Suggestions : 5 sites & activités, 5 restaurants</p></div>
            </div>
          </div>

          <div className="fcard fcard-popular">
            <div className="popular-badge">La plus populaire</div>
            <div className="fcard-icon"><Compass size={16} strokeWidth={1.3} /></div>
            <div className="fcard-info">
              <div className="fcard-name">La Vadrouille</div>
              <div className="fcard-days">5 à 8 jours</div>
            </div>
            <div className="fcard-price"><span>À partir de</span><strong>329 €</strong></div>
            <div className="fcard-arrow-wrap">
              <svg width="16" height="16" className="fcard-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <div className="fcard-tooltip"><p><strong>1 destination incluse</strong></p><p>Suggestions : 5 sites & activités, 5 restaurants</p></div>
            </div>
          </div>

          <div className="fcard">
            <div className="fcard-icon"><Compass size={16} strokeWidth={1.3} /></div>
            <div className="fcard-info">
              <div className="fcard-name">La Grande Vadrouille</div>
              <div className="fcard-days">9 à 14 jours</div>
            </div>
            <div className="fcard-price"><span>À partir de</span><strong>499 €</strong></div>
            <div className="fcard-arrow-wrap">
              <svg width="16" height="16" className="fcard-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              <div className="fcard-tooltip"><p><strong>2 destinations incluses</strong></p><p>Suggestions : 5 sites & activités, 5 restaurants par destination</p></div>
            </div>
          </div>

          <a href="#formulaire" className="btn-gold" style={{ marginTop: '24px', display: 'inline-flex', width: 'auto' }}>Demander un devis gratuit</a>
        </div>

        {/* DROITE */}
        <div className="formulas-right">
          <img src="/desert.webp" alt="Désert" className="form-right-img" />
          <div className="form-right-overlay" />
          <div className="form-right-card">
            <span className="frcard-badge">Sur-mesure</span>
            <h2 className="form-right-h2 form-right-h2-mobile">La formule<br /><em>sur-mesure</em></h2>
            <div className="frcard-divider" />
            <div className="frcard-features">
              <div className="frcard-feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                Plus de 2 semaines
              </div>
              <div className="frcard-feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                Multi-destinations
              </div>
              <div className="frcard-feature">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                Suggestions d&apos;adresses<br className="mobile-only-br" /> sur devis
              </div>
            </div>
            <div className="frcard-divider" />
            <div className="form-right-price-block">
              <p className="form-right-price-label">À partir de</p>
              <p className="form-right-price">549 €</p>
            </div>
            <a href="#formulaire" className="btn-dark form-right-cta">Demander un devis gratuit</a>
          </div>
        </div>
      </section>

      {/* OPTIONS À LA CARTE */}
      <section className="options">
        <div className="options-inner">
          <div className="options-left">
            <p className="eyebrow-dark">Options à la carte</p>
            <h2 className="form-h2">Personnalisez <br /><em>votre voyage</em></h2>
            <p>Tarif de base : 2 adultes — bébé(s) de moins de 2 ans inclus.</p>
          </div>
          <div className="options-grid">
            <div className="opt-card">
              <Users size={32} strokeWidth={1.2} className="opt-card-icon" />
              <div className="opt-card-name">Adulte supplémentaire</div>
              <div className="opt-card-sub">(12 ans et +)</div>
              <div className="opt-card-price">+25 €</div>
            </div>
            <div className="opt-card">
              <User size={32} strokeWidth={1.2} className="opt-card-icon" />
              <div className="opt-card-name">Enfant</div>
              <div className="opt-card-sub">(2 à 11 ans)</div>
              <div className="opt-card-price">+15 €</div>
            </div>
            <div className="opt-card">
              <MapPin size={32} strokeWidth={1.2} className="opt-card-icon" />
              <div className="opt-card-name">Destination<br />supplémentaire</div>
              <div className="opt-card-sub">&nbsp;</div>
              <div className="opt-card-price">+35 €</div>
            </div>
            <div className="opt-card">
              <Calendar size={32} strokeWidth={1.2} className="opt-card-icon" />
              <div className="opt-card-name">Planning détaillé<br />jour par jour</div>
              <div className="opt-card-sub">&nbsp;</div>
              <div className="opt-card-price"><em>sur devis</em></div>
            </div>
          </div>
        </div>
      </section>

      {/* MOSAIC + CALL */}
      <section className="mosaic-call">
        <div className="mosaic-col">
          <img src="/photo1.webp" alt="Voyage en couple, souvenirs de voyage" className="mosaic-img-1" />
          <img src="/photo2.webp" alt="Découverte d'une destination, voyage sur mesure" className="mosaic-img-2" />
          <img src="/photo3.webp" alt="Paysage de voyage, aventure et découverte" />
        </div>
        <div className="call-col">
          <p className="eyebrow-dark">Parlons de votre voyage</p>
          <h2>Réservez un appel<br />découverte <em>gratuit</em></h2>
          <div className="call-rule" />
          <p className="call-desc">20 minutes pour échanger sur vos envies et commencer à imaginer votre voyage.</p>
          <a href="https://calendly.com/contact-mamzellesenvadrouille/appel-decouverte-mamzelles-en-vadrouille" target="_blank" rel="noopener noreferrer" className="btn-dark-full">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8a19.79 19.79 0 01-3.07-8.67A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6z"/></svg>
            Réserver mon appel découverte
          </a>
        </div>
      </section>

      {/* COMMENT ÇA SE PASSE */}
      <section className="process">
        <div className="process-header">
          <p className="eyebrow-dark">Comment ça se passe ?</p>
          <h2>Un accompagnement <em>simple et efficace.</em></h2>
          <p className="process-subtitle">De votre première prise de contact à votre départ,<br />nous vous guidons à chaque étape pour une expérience fluide et sereine.</p>
        </div>
        <div className="process-steps">

          <div className="process-step-wrap">
            <div className="process-step">
              <div className="step-circle-wrap">
                <div className="step-num">01</div>
                <div className="step-circle">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>
                </div>
              </div>
              <h3>Prise de contact</h3>
              <p>Via le formulaire ou<br />l&apos;appel découverte.</p>
            </div>
            <div className="process-arrow">›</div>
          </div>

          <div className="process-step-wrap">
            <div className="process-step">
              <div className="step-circle-wrap">
                <div className="step-num">02</div>
                <div className="step-circle">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/></svg>
                </div>
              </div>
              <h3>Validation du devis</h3>
              <p>Le début de la préparation<br />de votre voyage.</p>
            </div>
            <div className="process-arrow">›</div>
          </div>

          <div className="process-step-wrap">
            <div className="process-step">
              <div className="step-circle-wrap">
                <div className="step-num">03</div>
                <div className="step-circle">
                  <Map size={26} strokeWidth={1.4} />
                </div>
              </div>
              <h3>Propositions<br />personnalisées</h3>
              <p>On crée votre itinéraire<br />ensemble.</p>
            </div>
            <div className="process-arrow">›</div>
          </div>

          <div className="process-step-wrap">
            <div className="process-step">
              <div className="step-circle-wrap">
                <div className="step-num">04</div>
                <div className="step-circle">
                  <Notebook size={26} strokeWidth={1.4} />
                </div>
              </div>
              <h3>Réception de votre<br />carnet interactif</h3>
              <p>Sous 15 jours ouvrés.</p>
            </div>
            <div className="process-arrow">›</div>
          </div>

          <div className="process-step-wrap">
            <div className="process-step">
              <div className="step-circle-wrap">
                <div className="step-num">05</div>
                <div className="step-circle">
                  <Plane size={26} strokeWidth={1.4} />
                </div>
              </div>
              <h3>Partez l&apos;esprit léger</h3>
              <p>Et profitez !</p>
            </div>
          </div>

        </div>
      </section>

      {/* FORMULAIRE CONTACT */}
      <ContactForm />

      {/* DISCLAIMER */}
      <section className="disclaimer">
        <div className="disclaimer-inner">
          <div className="disclaimer-icon">i</div>
          <div className="disclaimer-divider" />
          <div className="disclaimer-content">
            <p className="disclaimer-eyebrow">Information importante</p>
            <p>MamZelles en vadrouille est un service de conseil et de planification de voyage. Nous ne procédons à aucune réservation en votre nom. Les liens fournis vous permettent d&apos;effectuer vos réservations en toute liberté et autonomie.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </div>
    </>
  );
}
