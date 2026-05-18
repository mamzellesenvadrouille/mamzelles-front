'use client';
import { useState } from 'react';

interface NavbarProps {
  activePage?: 'accueil' | 'formules' | 'blog' | 'qui-sommes-nous';
  contactHref?: string;
}

export default function Navbar({ activePage, contactHref = '/formules#formulaire' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <span className="logo-main">MamZelles en vadrouille</span>
          <span className="logo-sub">Créatrices de voyages sur mesure</span>
        </div>
        <div className="nav-links">
          <a href="/" className={activePage === 'accueil' ? 'nav-active' : ''}>Accueil</a>
          <a href="/formules" className={activePage === 'formules' ? 'nav-active' : ''}>Nos formules</a>
          <a href="/blog" className={activePage === 'blog' ? 'nav-active' : ''}>Notre blog voyages</a>
          <a href="/qui-sommes-nous" className={activePage === 'qui-sommes-nous' ? 'nav-active' : ''}>Qui sommes-nous ?</a>
        </div>
        <a href={contactHref} className="nav-cta nav-cta-desktop">Contact</a>
        <button className="burger-btn" onClick={() => setMenuOpen(true)} aria-label="Menu">
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </nav>

      {menuOpen && (
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>✕</button>
          <a href="/" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a href="/formules" onClick={() => setMenuOpen(false)}>Nos formules</a>
          <a href="/blog" onClick={() => setMenuOpen(false)}>Notre blog voyages</a>
          <a href="/qui-sommes-nous" onClick={() => setMenuOpen(false)}>Qui sommes-nous ?</a>
          <a href={contactHref} onClick={() => setMenuOpen(false)} className="mobile-menu-cta">Contact</a>
        </div>
      )}
    </>
  );
}
