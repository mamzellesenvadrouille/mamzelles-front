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

      <section className="hero hero-home" style={{ minHeight: 'clamp(160px, 30vh, 280px)' }}>
        <Navbar />
        <img className="hero-bg" src="/home-hero.webp" alt="Politique de confidentialité MamZelles en vadrouille" />
        <div className="hero-overlay" />
        <div className="hero-content" style={{ paddingBottom: '48px' }}>
          <p className="eyebrow" style={{ marginBottom: '12px' }}>Informations légales</p>
          <h1>Politique de <em>confidentialité</em></h1>
        </div>
      </section>

      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '56px 24px 80px', fontFamily: 'Inter, sans-serif', color: 'var(--dark)', lineHeight: '1.8', fontSize: '15px' }}>

        <p style={{ color: '#aaa', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '48px' }}>Dernière mise à jour : juin 2026</p>

        <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '20px', marginBottom: '40px' }}>
          <p style={{ margin: 0, color: 'var(--dark)', opacity: 0.7 }}>MamZelles en vadrouille est un service de travel planning sur mesure créé par Amélie et Laurie, basé à Antibes (06600, France). Contact : <a href="mailto:contact@mamzellesenvadrouille.com" style={{ color: 'var(--gold)' }}>contact@mamzellesenvadrouille.com</a></p>
        </div>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Quelles données collectons-nous ?</h2>
        <p style={{ marginBottom: '8px' }}>Nous collectons uniquement les données que vous nous transmettez volontairement :</p>
        <ul style={{ paddingLeft: '18px', margin: '0' }}>
          <li>Votre <strong>adresse email</strong> via le formulaire d&rsquo;inscription à la newsletter</li>
          <li>Votre <strong>nom, adresse email et message</strong> via le formulaire de contact et de demande de devis</li>
        </ul>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Comment utilisons-nous vos données ?</h2>
        <ul style={{ paddingLeft: '18px', margin: '0' }}>
          <li>Envoi de notre newsletter voyage, itinéraires et bons plans (via <strong>Brevo</strong>)</li>
          <li>Réponse à vos demandes de renseignements et devis (via <strong>Resend</strong>)</li>
          <li>Nous ne vendons jamais vos données à des tiers</li>
        </ul>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Durée de conservation</h2>
        <ul style={{ paddingLeft: '18px', margin: '0' }}>
          <li><strong>Newsletter</strong> : jusqu&rsquo;à votre désinscription</li>
          <li><strong>Formulaire de contact</strong> : 3 ans maximum à compter de notre dernier échange</li>
        </ul>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Vos droits (RGPD)</h2>
        <p style={{ marginBottom: '8px' }}>Conformément au RGPD, vous disposez des droits d&rsquo;accès, de rectification, d&rsquo;effacement, d&rsquo;opposition et de portabilité de vos données.</p>
        <p>Pour exercer ces droits : <a href="mailto:contact@mamzellesenvadrouille.com" style={{ color: 'var(--gold)' }}>contact@mamzellesenvadrouille.com</a></p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Cookies</h2>
        <p>Notre site utilise uniquement des cookies techniques nécessaires à son bon fonctionnement. Aucun cookie publicitaire ou de tracking.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Hébergement & sécurité</h2>
        <p>Site hébergé par <strong>Vercel</strong> (certifié SOC 2). Newsletter gérée par <strong>Brevo</strong>, conforme au RGPD.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Réclamation</h2>
        <p>Vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>www.cnil.fr</a></p>

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
          © 2026 MamZelles en vadrouille — Tous droits réservés · <a href="/confidentialite" style={{ color: 'rgba(26,21,18,0.5)', fontSize: '12px', textDecoration: 'underline' }}>Politique de confidentialité</a>
        </div>
      </footer>

    </div>
  );
}
