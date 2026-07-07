'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<string[]>([]);
  const [fieldErrors, setFieldErrors] = useState<Set<string>>(new Set());

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Validation
    const required = [
      { name: 'prenom', label: 'Nom Prénom' },
      { name: 'email', label: 'Email' },
      { name: 'duree', label: 'Durée du voyage' },
      { name: 'destination', label: 'Destination(s)' },
      { name: 'adultes', label: 'Nombre d\'adultes' },
      { name: 'budget', label: 'Budget' },
      { name: 'message', label: 'Votre message' },
    ];
    const errs = required.filter(f => !data.get(f.name)?.toString().trim()).map(f => f.label);
    const missingNames = new Set(required.filter(f => !data.get(f.name)?.toString().trim()).map(f => f.name));
    const email = data.get('email')?.toString() || '';
    if (email && !/^[^@]+@[^@]+\.[^@]+$/.test(email)) { errs.push('Email invalide'); missingNames.add('email'); }

    if (errs.length > 0) {
      setErrors(errs);
      setFieldErrors(missingNames);
      return;
    }

    setErrors([]);
    setFieldErrors(new Set());
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
        form.querySelectorAll('select').forEach((el) => {
          const select = el as HTMLSelectElement;
          select.style.color = '';
          select.style.fontWeight = '';
        });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  function clearFieldError(name: string) {
    setFieldErrors(prev => {
      if (!prev.has(name)) return prev;
      const next = new Set(prev);
      next.delete(name);
      return next;
    });
  }

  return (
    <section className="contact-section" id="formulaire">
      <img src="/cta.webp" alt="" className="contact-bg" />
      <div className="contact-overlay" />
      <div className="contact-inner">
        <div className="contact-header">
          <div>
            <p className="eyebrow-gold">Votre voyage sur mesure</p>
            <h2 className="contact-h2">On planifie votre<br /><em>prochain voyage ?</em></h2>
          </div>
          <p className="contact-sub">Dites-nous où vous rêvez d&apos;aller. On conçoit un voyage qui vous ressemble.<br />Réponse sous 48h.</p>
        </div>

        <form onSubmit={handleSubmit} noValidate>
          <div className="form-grid">
            <input type="text" name="prenom" placeholder="Nom Prénom" className={`fi span2 ${fieldErrors.has('prenom') ? 'field-error' : ''}`} onInput={() => clearFieldError('prenom')} />
            <input type="email" name="email" placeholder="Email" className={`fi span2 ${fieldErrors.has('email') ? 'field-error' : ''}`} onInput={() => clearFieldError('email')} />
            <input type="tel" name="telephone" placeholder="Téléphone (optionnel)" className="fi span2" />
            <select name="duree" className={`fs span2 ${fieldErrors.has('duree') ? 'field-error' : ''}`} defaultValue=""
              onChange={e => { e.target.style.color = e.target.value ? '#1a1512' : ''; e.target.style.fontWeight = e.target.value ? '600' : ''; clearFieldError('duree'); }}>
              <option value="" disabled hidden>Durée du voyage</option>
              <option>L&apos;Escale, 2 à 4 jours</option>
              <option>La Vadrouille, 5 à 8 jours</option>
              <option>La Grande Vadrouille, 9 à 14 jours</option>
              <option>Sur-mesure, + de 2 semaines</option>
            </select>
            <input type="text" name="destination" placeholder="Destination(s) souhaitée(s)" className={`fi span2 ${fieldErrors.has('destination') ? 'field-error' : ''}`} onInput={() => clearFieldError('destination')} />
            <input type="text" name="budget" placeholder="Budget approximatif" className={`fi span2 ${fieldErrors.has('budget') ? 'field-error' : ''}`} onInput={() => clearFieldError('budget')} />
            <select name="adultes" className={`fs span2 ${fieldErrors.has('adultes') ? 'field-error' : ''}`} defaultValue=""
              onChange={e => { e.target.style.color = e.target.value ? '#1a1512' : ''; e.target.style.fontWeight = e.target.value ? '600' : ''; clearFieldError('adultes'); }}>
              <option value="" disabled hidden>Nb adultes (12 ans et +)</option>
              <option>1 adulte</option>
              <option>2 adultes</option>
              <option>3 adultes</option>
              <option>4 adultes</option>
              <option>5 adultes et +</option>
            </select>
            <select name="enfants" className="fs span2" defaultValue=""
              onChange={e => { e.target.style.color = e.target.value ? '#1a1512' : ''; e.target.style.fontWeight = e.target.value ? '600' : ''; }}>
              <option value="" disabled hidden>Nb enfants (2 à 11 ans)</option>
              <option>0 enfant</option>
              <option>1 enfant</option>
              <option>2 enfants</option>
              <option>3 enfants et +</option>
            </select>
          </div>

          <textarea name="message" placeholder="Dites-nous tout sur votre projet de voyage !" className={`ft ${fieldErrors.has('message') ? 'field-error' : ''}`} rows={4} onInput={() => clearFieldError('message')} />

          {errors.length > 0 && (
            <p className="form-error">Merci de remplir tous les champs obligatoires.</p>
          )}
          {status === 'success' && (
            <p className="form-success">Votre demande a bien été envoyée ! On vous répond sous 48h.</p>
          )}
          {status === 'error' && (
            <p className="form-error">Une erreur est survenue. Veuillez réessayer.</p>
          )}

          <div className="form-submit-wrap">
            <button type="submit" className="form-submit" disabled={status === 'loading'}>
              {status === 'loading' ? 'Envoi en cours...' : 'Envoyer ma demande'}
            </button>
          </div>
          {status !== 'success' && (
            <p className="form-note">Réponse garantie sous 48h · Sans engagement</p>
          )}
        </form>
      </div>
    </section>
  );
}
