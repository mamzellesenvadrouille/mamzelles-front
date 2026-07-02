import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paiement annulé — MamZelles en vadrouille',
  robots: { index: false },
};

export default function Annulation() {
  return (
    <div style={{ width: '100%', overflowX: 'hidden' }}>
      <nav style={{ padding: '20px 40px', borderBottom: '1px solid #e8e0d6', textAlign: 'center' }}>
        <span style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 20, color: '#c8956c' }}>
          MamZelles en vadrouille
        </span>
      </nav>
      <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 20px' }}>
        <div style={{ textAlign: 'center', maxWidth: 520, width: '100%', margin: '0 auto' }}>
          <img src="/icon.png" alt="MamZelles en vadrouille" style={{ width: 70, height: 70, objectFit: 'contain', marginBottom: 24, opacity: 0.85 }} />
          <h1 style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: 36, color: '#1a1512', marginBottom: 16, fontWeight: 600 }}>
            Paiement annulé
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 15, color: '#1a1512', opacity: 0.7, lineHeight: 1.7, marginBottom: 32 }}>
            Votre paiement n'a pas été finalisé. Si vous avez rencontré un problème, n'hésitez pas à nous contacter directement.
          </p>
          <a
            href="mailto:contact@mamzellesenvadrouille.com"
            style={{ display: 'inline-block', marginTop: 16, padding: '12px 32px', background: '#c8956c', color: '#fff', fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}
          >
            Nous contacter
          </a>
        </div>
      </div>
    </div>
  );
}
