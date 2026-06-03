'use client';
import { useState } from 'react';

interface CommentFormProps {
  articleTitle: string;
  articleUrl: string;
}

export default function CommentForm({ articleTitle, articleUrl }: CommentFormProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit() {
    if (!name.trim() || !email.trim() || !message.trim()) return;
    setStatus('loading');
    try {
      const res = await fetch('/api/commentaire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message, articleTitle, articleUrl }),
      });
      if (res.ok) {
        setStatus('success');
        setName(''); setEmail(''); setMessage('');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <div className="comment-form">
      <h3 className="comment-form-title">Laisser un commentaire</h3>
      {status === 'success' ? (
        <div className="comment-form-success">
          <p>Merci pour votre commentaire ! Nous le publierons très bientôt. 😊</p>
        </div>
      ) : (
        <>
          <div className="comment-form-row">
            <div className="comment-form-field">
              <label>Prénom / Nom <span>*</span></label>
              <input
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Votre nom"
              />
            </div>
            <div className="comment-form-field">
              <label>Email <span>*</span></label>
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="votre@email.com"
              />
              <span className="comment-form-hint">Votre email ne sera pas publié.</span>
            </div>
          </div>
          <div className="comment-form-field">
            <label>Message <span>*</span></label>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Votre commentaire..."
              rows={5}
            />
          </div>
          {status === 'error' && (
            <p className="comment-form-error">Une erreur est survenue. Veuillez réessayer.</p>
          )}
          <button
            className="btn-gold comment-form-submit"
            onClick={handleSubmit}
            disabled={status === 'loading' || !name.trim() || !email.trim() || !message.trim()}
          >
            {status === 'loading' ? 'Envoi en cours...' : 'Envoyer mon commentaire'}
          </button>
        </>
      )}
    </div>
  );
}
