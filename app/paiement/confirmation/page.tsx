import type { Metadata } from 'next';
import Navbar from '../../components/Navbar';

export const metadata: Metadata = {
  title: 'Paiement confirmé — MamZelles en vadrouille',
  robots: { index: false },
};

export default function Confirmation() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <nav style={{ padding: '20px 40px', borderBottom: '1px solid #e8e0d6' }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, color: '#c8956c' }}>
          MamZelles en vadrouille
        </span>
      </nav>
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: 520 }}>
          <div style={{ fontSize: 48, marginBottom: 24 }}>✈️</div>
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, color: '#1a1512', marginBottom: 16, fontWeight: 600 }}>
            Paiement confirmé !
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#1a1512', opacity: 0.7, lineHeight: 1.7, marginBottom: 32 }}>
            Merci pour votre confiance. Nous avons bien reçu votre paiement et nous allons maintenant préparer votre itinéraire avec tout le soin qu'il mérite.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#c8956c' }}>
            Vous recevrez un email de confirmation dans quelques instants.
          </p>
          <a
            href="/"
            style={{ display: 'inline-block', marginTop: 40, padding: '12px 32px', background: '#c8956c', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  );
}
