import type { Metadata } from 'next';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata: Metadata = {
  title: 'Politique de confidentialité | MamZelles en Vadrouille',
  description: "Politique de confidentialité et protection des données personnelles de MamZelles en Vadrouille, conformément au RGPD.",
  alternates: { canonical: 'https://mamzellesenvadrouille.com/confidentialite' },
};

export default function Confidentialite() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden', overflowY: 'visible' }}>

      <section className="hero hero-confidentialite">
        <Navbar />
        <img className="hero-bg" src="/home-hero.webp" alt="Politique de confidentialité MamZelles en Vadrouille" />
        <div className="hero-overlay" />
        <div className="hero-content" style={{ paddingBottom: '32px' }}>
          <p className="eyebrow" style={{ marginBottom: '8px', fontSize: '10px' }}>Informations légales</p>
          <h1 style={{ fontSize: 'clamp(22px, 2.5vw, 36px)', lineHeight: '1.2' }}>Politique de <em>confidentialité</em></h1>
        </div>
      </section>

      <section style={{ maxWidth: '720px', margin: '0 auto', padding: '56px 24px 80px', fontFamily: 'Inter, sans-serif', color: 'var(--dark)', lineHeight: '1.8', fontSize: '15px' }}>

        <p style={{ color: '#aaa', fontSize: '12px', letterSpacing: '1.5px', textTransform: 'uppercase', marginBottom: '48px' }}>Dernière mise à jour : août 2026</p>

        <div style={{ borderLeft: '2px solid var(--gold)', paddingLeft: '20px', marginBottom: '40px' }}>
          <p style={{ margin: '0 0 4px', color: 'var(--dark)', fontWeight: 600, opacity: 0.85 }}>Responsable du traitement des données</p>
          <p style={{ margin: 0, color: 'var(--dark)', opacity: 0.7 }}>MamZelles en Vadrouille — Laurie &amp; Amélie<br />Activité exercée par Amélie Truffaut, auto-entrepreneuse (SIRET 102 900 925 00011)<br />Antibes (06600), France<br />Contact : <a href="mailto:contact@mamzellesenvadrouille.com" style={{ color: 'var(--gold)' }}>contact@mamzellesenvadrouille.com</a></p>
        </div>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Quelles données collectons-nous ?</h2>
        <p style={{ marginBottom: '8px' }}>Nous collectons les données que vous nous transmettez volontairement :</p>
        <ul style={{ paddingLeft: '18px', margin: '0' }}>
          <li>Votre <strong>adresse email</strong> via le formulaire d&rsquo;inscription à la newsletter</li>
          <li>Votre <strong>nom, adresse email et message</strong> via le formulaire de contact et de demande de devis</li>
          <li>Vos <strong>dates de voyage, préférences, budget et informations de contact</strong>, communiquées lors de la conception de votre carnet de voyage personnalisé</li>
          <li>Vos <strong>coordonnées de paiement</strong>, traitées directement et exclusivement par notre prestataire de paiement sécurisé Stripe (nous n&rsquo;avons jamais accès à vos données bancaires complètes)</li>
        </ul>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Comment utilisons-nous vos données ?</h2>
        <ul style={{ paddingLeft: '18px', margin: '0' }}>
          <li>Envoi de notre newsletter voyage, itinéraires et bons plans (via <strong>Brevo</strong>)</li>
          <li>Réponse à vos demandes de renseignements et devis (via <strong>Resend</strong>)</li>
          <li>Création et hébergement de votre carnet de voyage personnalisé (via <strong>Upstash</strong>, base de données sécurisée)</li>
          <li>Traitement de vos paiements et facturation (via <strong>Stripe</strong>)</li>
        </ul>
        <p style={{ marginTop: '10px', fontWeight: 600 }}>Nous ne vendons ni ne cédons jamais vos données personnelles à des tiers.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Base légale des traitements</h2>
        <p style={{ marginBottom: '8px' }}>Les données sont traitées :</p>
        <ul style={{ paddingLeft: '18px', margin: '0' }}>
          <li>sur la base de votre <strong>consentement</strong> pour l&rsquo;envoi de la newsletter ;</li>
          <li>dans le cadre de l&rsquo;<strong>exécution du contrat</strong> pour la création de votre voyage personnalisé ;</li>
          <li>sur la base de notre <strong>intérêt légitime</strong> pour répondre à vos demandes de contact et améliorer nos services.</li>
        </ul>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Destinataires des données</h2>
        <p>Vos données sont uniquement accessibles à MamZelles en Vadrouille ainsi qu&rsquo;à nos prestataires techniques (Brevo, Stripe, Resend, Upstash et Vercel), dans la stricte mesure nécessaire à la fourniture de nos services.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Transferts hors Union européenne</h2>
        <p>Certains de nos prestataires peuvent être amenés à traiter certaines données en dehors de l&rsquo;Union européenne. Lorsque c&rsquo;est le cas, ils mettent en œuvre les garanties prévues par le RGPD, notamment les clauses contractuelles types de la Commission européenne.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Durée de conservation</h2>
        <ul style={{ paddingLeft: '18px', margin: '0' }}>
          <li><strong>Newsletter</strong> : jusqu&rsquo;à votre désinscription</li>
          <li><strong>Formulaire de contact</strong> : 3 ans maximum à compter de notre dernier échange</li>
          <li><strong>Carnet de voyage</strong> : conservé pendant la durée de la prestation, puis archivé. Il peut être supprimé à tout moment sur simple demande du client.</li>
        </ul>
        <p style={{ marginTop: '10px' }}>Le carnet de voyage est accessible via un lien personnel. Le client est responsable de la confidentialité de ce lien et s&rsquo;engage à ne pas le partager publiquement.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Vos droits (RGPD)</h2>
        <p style={{ marginBottom: '8px' }}>Conformément au RGPD, vous disposez des droits d&rsquo;accès, de rectification, d&rsquo;effacement, d&rsquo;opposition et de portabilité de vos données.</p>
        <p>Pour exercer ces droits : <a href="mailto:contact@mamzellesenvadrouille.com" style={{ color: 'var(--gold)' }}>contact@mamzellesenvadrouille.com</a></p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Hébergement &amp; sécurité</h2>
        <p style={{ marginBottom: '8px' }}>Le site est hébergé par <strong>Vercel</strong> (certifié SOC 2). La newsletter est gérée par <strong>Brevo</strong> (conforme au RGPD), les paiements sont sécurisés par <strong>Stripe</strong> et les carnets de voyage sont stockés via <strong>Upstash</strong>.</p>
        <p>Des mesures techniques et organisationnelles appropriées sont mises en œuvre afin d&rsquo;assurer la confidentialité et la sécurité de vos données personnelles.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Liens partenaires</h2>
        <p>Certains liens présents sur ce site (réservations d&rsquo;activités, assurance voyage, etc.) sont des liens d&rsquo;affiliation. Cela signifie que nous pouvons percevoir une commission si vous effectuez un achat via ces liens, sans surcoût pour vous. Nous ne recommandons que des partenaires et services que nous utilisons ou avons testés nous-mêmes.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Cookies</h2>
        <p>Notre site utilise <strong>Vercel Analytics</strong> afin de mesurer la fréquentation du site de manière agrégée et anonyme. Aucun cookie publicitaire ou de suivi individuel n&rsquo;est utilisé.</p>

        <h2 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '20px', fontWeight: '600', marginBottom: '10px', marginTop: '40px', letterSpacing: '0.5px' }}>Réclamation</h2>
        <p>Vous pouvez introduire une réclamation auprès de la <strong>CNIL</strong> : <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--gold)' }}>www.cnil.fr</a></p>

      </section>

      <Footer />

    </div>
  );
}
