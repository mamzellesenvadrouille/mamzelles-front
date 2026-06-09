import type { Metadata } from 'next';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | MamZelles en vadrouille',
  description: "Politique de confidentialité et protection des données personnelles de MamZelles en vadrouille, conformément au RGPD.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/confidentialite' },
};

export default function Confidentialite() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>

      <section className="hero hero-small" style={{ minHeight: '220px' }}>
        <Navbar />
        <div className="hero-overlay" />
        <div className="hero-content" style={{ paddingBottom: '40px' }}>
          <h1 style={{ fontSize: 'clamp(28px, 4vw, 48px)' }}>Politique de <em>confidentialité</em></h1>
        </div>
      </section>

      <section style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 30px 80px', fontFamily: 'Inter, sans-serif', color: 'var(--dark)', lineHeight: '1.8' }}>

        <p style={{ color: '#888', fontSize: '13px', marginBottom: '40px' }}>Dernière mise à jour : juin 2026</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '500', marginBottom: '12px', marginTop: '40px' }}>1. Qui sommes-nous ?</h2>
        <p>MamZelles en vadrouille est un service de travel planning sur mesure créé par Amélie et Laurie, basé à Antibes (06600, France).</p>
        <p>Contact : <a href="mailto:contact@mamzellesenvadrouille.com" style={{ color: 'var(--gold)' }}>contact@mamzellesenvadrouille.com</a></p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '500', marginBottom: '12px', marginTop: '40px' }}>2. Quelles données collectons-nous ?</h2>
        <p>Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>Votre <strong>adresse email</strong> via le formulaire d&rsquo;inscription à la newsletter</li>
          <li>Votre <strong>nom, adresse email et message</strong> via le formulaire de contact et de demande de devis</li>
        </ul>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '500', marginBottom: '12px', marginTop: '40px' }}>3. Comment utilisons-nous vos données ?</h2>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>Envoi de notre newsletter voyage, itinéraires et bons plans (via <strong>Brevo</strong>)</li>
          <li>Réponse à vos demandes de renseignements et devis (via <strong>Resend</strong>)</li>
          <li>Nous ne vendons jamais vos données à des tiers et ne les utilisons à aucune fin commerciale autre que celles mentionnées ci-dessus</li>
        </ul>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '500', marginBottom: '12px', marginTop: '40px' }}>4. Durée de conservation</h2>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li><strong>Newsletter</strong> : vos données sont conservées jusqu&rsquo;à votre désinscription</li>
          <li><strong>Formulaire de contact</strong> : vos données sont conservées 3 ans maximum à compter de notre dernier échange</li>
        </ul>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '500', marginBottom: '12px', marginTop: '40px' }}>5. Vos droits (RGPD)</h2>
        <p>Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :</p>
        <ul style={{ paddingLeft: '20px', marginTop: '8px' }}>
          <li>Droit d&rsquo;<strong>accès</strong> à vos données personnelles</li>
          <li>Droit de <strong>rectification</strong> de vos données</li>
          <li>Droit à l&rsquo;<strong>effacement</strong> de vos données</li>
          <li>Droit d&rsquo;<strong>opposition</strong> au traitement de vos données</li>
          <li>Droit à la <strong>portabilité</strong> de vos données</li>
        </ul>
        <p style={{ marginTop: '12px' }}>Pour exercer ces droits, écrivez-nous à : <a href="mailto:contact@mamzellesenvadrouille.com" style={{ color: 'var(--gold)' }}>contact@mamzellesenvadrouille.com</a></p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '500', marginBottom: '12px', marginTop: '40px' }}>6. Cookies</h2>
        <p>Notre site utilise uniquement des cookies techniques strictement nécessaires à son bon fonctionnement. Nous n&rsquo;utilisons aucun cookie publicitaire, de tracking ou d&rsquo;analyse comportementale.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '500', marginBottom: '12px', marginTop: '40px' }}>7. Hébergement et sécurité</h2>
        <p>Votre site est hébergé par <strong>Vercel</strong> (infrastructure sécurisée, certifiée SOC 2). Les données newsletter sont gérées par <strong>Brevo</strong>, société française conforme au RGPD.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '26px', fontWeight: '500', marginBottom: '12px', marginTop: '40px' }}>8. Contact & réclamation</h2>
        <p>Pour toute question relative à vos données personnelles : <a href="mailto:contact@mamzellesenvadrouille.com" style={{ color: 'var(--gold)' }}>contact@mamzellesenvadrouille.com</a></p>
        <p style={{ marginTop: '8px' }}>Vous avez également le droit d&rsquo;introduire une réclamation auprès de la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>www.cnil.fr</a></p>

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
          © 2026 MamZelles en vadrouille — Tous droits réservés
        </div>
      </footer>

    </div>
  );
}
