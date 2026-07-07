'use client';
import { useEffect, useState } from 'react';

const COOKIE_KEY = 'mamzelles_analytics_consent';
const EXPIRY_DAYS = 180;

function setConsent(value: 'accepted' | 'refused') {
  const expires = new Date();
  expires.setDate(expires.getDate() + EXPIRY_DAYS);
  localStorage.setItem(COOKIE_KEY, JSON.stringify({ value, expires: expires.toISOString() }));
}

function getConsent(): 'accepted' | 'refused' | null {
  try {
    const raw = localStorage.getItem(COOKIE_KEY);
    if (!raw) return null;
    const { value, expires } = JSON.parse(raw);
    if (new Date(expires) < new Date()) {
      localStorage.removeItem(COOKIE_KEY);
      return null;
    }
    return value;
  } catch {
    return null;
  }
}

export function initGA() {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) { window.dataLayer.push(args); }
  // Consent Mode v2 : on informe Google que la personne a accepté,
  // sinon les hits restent bloqués même après gtag('config', ...).
  gtag('consent', 'update', {
    ad_storage: 'granted',
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    analytics_storage: 'granted',
  });
  gtag('js', new Date());
  gtag('config', 'G-85C1JHTMSH');
}

declare global {
  interface Window {
    dataLayer: unknown[];
  }
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = getConsent();
    if (consent === 'accepted') {
      initGA();
    } else if (consent === null) {
      setVisible(true);
    }
  }, []);

  function handleAccept() {
    setConsent('accepted');
    initGA();
    setVisible(false);
  }

  function handleRefuse() {
    setConsent('refused');
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <>
      <style>{`
        .cookie-banner {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          z-index: 9999;
          background: #ffffff;
          border-top: 1.5px solid var(--gold, #c8956c);
          padding: 20px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 14px;
          box-shadow: 0 -4px 24px rgba(26,21,18,0.07);
          text-align: center;
        }
        .cookie-text {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: var(--dark, #1a1512);
          line-height: 1.55;
          opacity: 0.85;
        }
        .cookie-text a {
          color: var(--gold, #c8956c);
          text-decoration: underline;
          text-underline-offset: 3px;
        }
        .cookie-actions {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .cookie-btn-refuse {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          color: var(--dark, #1a1512);
          opacity: 0.45;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: underline;
          text-underline-offset: 3px;
          padding: 0;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .cookie-btn-refuse:hover {
          opacity: 0.7;
        }
        .cookie-btn-accept {
          font-family: 'Inter', sans-serif;
          font-size: 12.5px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          background: var(--gold, #c8956c);
          color: #fff;
          border: none;
          padding: 9px 22px;
          cursor: pointer;
          transition: background 0.2s;
          white-space: nowrap;
        }
        .cookie-btn-accept:hover {
          background: var(--gold2, #b8834f);
        }
        @media (max-width: 640px) {
          .cookie-banner {
            padding: 16px 20px;
          }
        }
      `}</style>
      <div className="cookie-banner" role="dialog" aria-label="Gestion des cookies">
        <p className="cookie-text">
          Nous utilisons des cookies pour analyser notre audience et améliorer votre expérience.{' '}
          <a href="/confidentialite">En savoir plus</a>
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn-refuse" onClick={handleRefuse}>Refuser</button>
          <button className="cookie-btn-accept" onClick={handleAccept}>Accepter</button>
        </div>
      </div>
    </>
  );
}
