import type { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Conditions générales de vente | MamZelles en vadrouille',
  description: "Conditions générales de vente de MamZelles en vadrouille, service de création d'itinéraires de voyage sur mesure.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/cgv' },
};

export default function CGV() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      <section className="hero hero-confidentialite">
        <Navbar />
        <img className="hero-bg" src="/home-hero.webp" alt="Conditions générales de vente MamZelles en vadrouille" />
        <div className="hero-overlay" />
        <div className="hero-content" style={{ paddingBottom: '32px' }}>
          <p className="eyebrow" style={{ marginBottom: '8px', fontSize: '10px' }}>Informations légales</p>
          <h1 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', lineHeight: '1.2' }}>Conditions générales de <em>vente</em></h1>
        </div>
      </section>

      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '56px 24px 80px', fontFamily: 'Inter, sans-serif', color: 'var(--dark)', lineHeight: '1.8', fontSize: '15px' }}>

        <p style={{ color: '#aaa', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '48px' }}>Dernière mise à jour : juillet 2026</p>

        <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '20px', marginBottom: '40px' }}>
          <p style={{ margin: 0, color: 'var(--dark)', opacity: 0.7 }}>MamZelles en vadrouille est un service de travel planning sur mesure édité par Amélie Truffaut, auto-entrepreneuse, SIRET 102 900 925 00011, basée à Antibes (06), France. Contact : <a href="mailto:contact@mamzellesenvadrouille.com" style={{ color: 'var(--gold)' }}>contact@mamzellesenvadrouille.com</a></p>
        </div>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Article 1 — Objet</h2>
        <p>Les présentes conditions générales de vente (CGV) régissent les relations contractuelles entre MamZelles en vadrouille et toute personne (« le client ») commandant une prestation de création d&rsquo;itinéraire de voyage personnalisé. Toute commande implique l&rsquo;acceptation pleine et entière des présentes CGV.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Article 2 — Formules et tarifs</h2>
        <p style={{ marginBottom: '8px' }}>MamZelles en vadrouille propose les formules suivantes :</p>
        <ul style={{ paddingLeft: '18px', margin: '0' }}>
          <li><strong>L&rsquo;Escale</strong> (2 à 4 jours) — 179 €</li>
          <li><strong>La Vadrouille</strong> (5 à 8 jours) — 329 €</li>
          <li><strong>La Grande Vadrouille</strong> (9 à 14 jours) — 499 €</li>
          <li><strong>Sur-mesure</strong> — tarif établi sur devis selon la demande</li>
        </ul>
        <p style={{ marginTop: '8px' }}>Les tarifs sont indiqués en euros. En tant qu&rsquo;auto-entrepreneuse, MamZelles en vadrouille n&rsquo;est pas assujettie à la TVA (art. 293 B du Code général des impôts).</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Article 3 — Commande et paiement</h2>
        <p style={{ marginBottom: '8px' }}>La commande est confirmée après réception d&rsquo;un devis personnalisé et acceptation par le client. Le règlement s&rsquo;effectue en deux temps, via la plateforme de paiement sécurisée Stripe :</p>
        <ul style={{ paddingLeft: '18px', margin: '0' }}>
          <li><strong>Un acompte de 50 %</strong> du montant total, versé à la commande, qui déclenche le début du travail de création de l&rsquo;itinéraire</li>
          <li><strong>Le solde de 50 %</strong>, à régler avant la transmission du carnet de voyage finalisé</li>
        </ul>
        <p style={{ marginTop: '8px' }}>Aucune prestation ni document final n&rsquo;est transmis tant que l&rsquo;intégralité du règlement n&rsquo;a pas été perçue.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Article 4 — Livraison</h2>
        <p>L&rsquo;itinéraire personnalisé est transmis par email, au format numérique, dans le délai indiqué lors de la commande (généralement entre 5 et 15 jours selon la formule et la charge en cours). Ce délai court à compter de la réception de l&rsquo;acompte et de l&rsquo;ensemble des informations nécessaires fournies par le client (dates, préférences, budget, etc.).</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Article 5 — Droit de rétractation</h2>
        <p>Conformément à l&rsquo;article L221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les prestations de services pleinement exécutées avant la fin du délai de rétractation et dont l&rsquo;exécution a commencé avec l&rsquo;accord préalable exprès du client. En passant commande et en réglant l&rsquo;acompte, le client demande expressément le commencement immédiat de la prestation et reconnaît renoncer à son droit de rétractation une fois le travail engagé.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Article 6 — Annulation</h2>
        <p>En cas d&rsquo;annulation par le client après le début de la prestation, l&rsquo;acompte de 50 % versé reste acquis à MamZelles en vadrouille, en couverture du travail déjà engagé.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Article 7 — Responsabilité</h2>
        <p>MamZelles en vadrouille agit en tant que conseil et créateur d&rsquo;itinéraires. Les réservations (hébergements, transports, activités) restent à la charge et sous la responsabilité du client, qui reste libre de les effectuer ou non selon les recommandations fournies. MamZelles en vadrouille ne saurait être tenue responsable des modifications tarifaires, de disponibilité, ou d&rsquo;événements indépendants de sa volonté (conditions météorologiques, sanitaires, politiques, etc.) pouvant affecter le voyage.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Article 8 — Propriété intellectuelle</h2>
        <p>L&rsquo;itinéraire personnalisé est conçu pour l&rsquo;usage exclusif du client ayant passé commande. Toute reproduction, revente ou diffusion à des tiers, en tout ou partie, est interdite sans accord préalable de MamZelles en vadrouille.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Article 9 — Litiges</h2>
        <p>En cas de litige, une solution amiable sera recherchée en priorité en contactant <a href="mailto:contact@mamzellesenvadrouille.com" style={{ color: 'var(--gold)' }}>contact@mamzellesenvadrouille.com</a>. À défaut d&rsquo;accord, les tribunaux français seront seuls compétents, conformément au droit français.</p>

      </section>

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
          © 2026 MamZelles en vadrouille — Tous droits réservés · <a href="/confidentialite" style={{ color: 'rgba(26,21,18,0.5)', fontSize: '12px', textDecoration: 'underline' }}>Politique de confidentialité</a> · <a href="/cgv" style={{ color: 'rgba(26,21,18,0.5)', fontSize: '12px', textDecoration: 'underline' }}>CGV</a>
        </div>
      </footer>

    </div>
  );
}
