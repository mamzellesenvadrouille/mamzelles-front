import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | MamZelles en vadrouille',
  description: "Politique de confidentialité et protection des données personnelles de MamZelles en vadrouille, conformément au RGPD.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/confidentialite' },
};

export default function Confidentialite() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', overflowY: 'visible' }}>

      <section className="hero hero-confidentialite">
        <Navbar />
        <img className="hero-bg" src="/home-hero.webp" alt="Politique de confidentialité MamZelles en vadrouille" />
        <div className="hero-overlay" />
        <div className="hero-content" style={{ paddingBottom: '32px' }}>
          <p className="eyebrow" style={{ marginBottom: '8px', fontSize: '10px' }}>Informations légales</p>
          <h1 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', lineHeight: '1.2' }}>Politique de <em>confidentialité</em></h1>
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

      <Footer />

    </div>
  );
}
