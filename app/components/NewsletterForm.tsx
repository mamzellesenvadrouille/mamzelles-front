'use client';
import { useState } from 'react';

export default function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      if (res.ok) { setStatus('success'); setEmail(''); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  return (
    <div className="article-newsletter">
      <img src="/home-hero.webp" alt="" className="article-newsletter-bg" />
      <div className="article-newsletter-overlay" />
      <div className="article-newsletter-inner">
        <div className="article-newsletter-text">
          <span className="eyebrow-gold">Carnets de voyage</span>
          <h3>Recevez nos prochains itinéraires</h3>
          <p>À chaque nouvel article publié, nos itinéraires, bonnes adresses et inspirations directement dans votre boîte mail.</p>
        </div>
        <form className="article-newsletter-form" onSubmit={handleSubmit}>
          {status === 'success' ? (
            <p className="newsletter-success">✓ Merci ! Vous êtes inscrit·e.</p>
          ) : (
            <>
              <input type="email" placeholder="Votre adresse email" value={email} onChange={e => setEmail(e.target.value)} required className="newsletter-input" />
              <button type="submit" className="btn-gold" disabled={status === 'loading'}>{status === 'loading' ? '...' : "Je m'abonne"}</button>
              {status === 'error' && <p className="newsletter-error">Une erreur est survenue, réessayez.</p>}
            </>
          )}
        </form>
      </div>
    </div>
  );
}
