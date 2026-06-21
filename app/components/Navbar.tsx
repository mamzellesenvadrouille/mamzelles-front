'use client';
import { useState } from 'react';
import { createPortal } from 'react-dom';

interface NavbarProps {
  activePage?: 'accueil' | 'formules' | 'blog' | 'qui-sommes-nous';
  contactHref?: string;
}

const destinations = [
  {
    pays: 'Espagne',
    liens: [
      { label: 'Madrid', href: '/visiter-madrid-en-3-jours' },
      { label: 'Lanzarote', href: 'https://blog.mamzellesenvadrouille.com/road-trip-a-lanzarote/' },
    ]
  },
  {
    pays: 'Angleterre',
    liens: [
      { label: 'Londres', href: '/visiter-londres' },
    ]
  },
  {
    pays: 'Maroc',
    liens: [
      { label: 'Marrakech', href: 'https://blog.mamzellesenvadrouille.com/visiter-marrakech/' },
      { label: 'Désert d\'Agafay', href: 'https://blog.mamzellesenvadrouille.com/dormir-dans-le-desert-agafay/' },
    ]
  },
  {
    pays: 'Asie',
    liens: [
      { label: 'Itinéraire Philippines', href: '/itineraire-philippines-3-semaines-pour-decouvrir-la-perle-de-lorient' },
      { label: 'Palawan – El Nido & Coron', href: '/palawan-entre-el-nido-coron-decouvrez-le-joyau-des-philippines' },
      { label: 'Palawan – De Puerto à Port Barton', href: '/palawan-de-puerto-princesa-a-port-barton-hors-des-sentiers-battus' },
    ]
  },
];

export default function Navbar({ activePage, contactHref = '/formules#formulaire' }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blogOpen, setBlogOpen] = useState(false);

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
          <div className="nav-blog-wrap">
            <a href="/blog" className={activePage === 'blog' ? 'nav-active' : ''}>Notre blog voyages</a>
            <div className="nav-dropdown">
              <div className="nav-dropdown-inner">
                <a href="/blog" className="nav-dropdown-all">Tous les articles</a>
                <div className="nav-dropdown-grid">
                  {destinations.map(group => (
                    <div key={group.pays} className="nav-dropdown-group">
                      <span className="nav-dropdown-pays">{group.pays}</span>
                      {group.liens.map(lien => (
                        <a key={lien.href} href={lien.href} className="nav-dropdown-link">{lien.label}</a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <a href="/qui-sommes-nous" className={activePage === 'qui-sommes-nous' ? 'nav-active' : ''}>Qui sommes-nous ?</a>
        </div>
        <a href={contactHref} className="nav-cta nav-cta-desktop">Contact</a>
        <button className="burger-btn" onClick={() => setMenuOpen(true)} aria-label="Menu">
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </nav>

      {menuOpen && createPortal(
        <div className="mobile-menu">
          <button className="mobile-menu-close" onClick={() => setMenuOpen(false)}>✕</button>
          <a href="/" onClick={() => setMenuOpen(false)}>Accueil</a>
          <a href="/formules" onClick={() => setMenuOpen(false)}>Nos formules</a>
          <div className="mobile-blog-wrap">
            <button className="mobile-blog-toggle" onClick={() => setBlogOpen(!blogOpen)}>
              Notre blog voyages
              <span className={`mobile-blog-arrow${blogOpen ? ' open' : ''}`}>›</span>
            </button>
            {blogOpen && (
              <div className="mobile-blog-submenu">
                <a href="/blog" onClick={() => setMenuOpen(false)}>Tous les articles</a>
                {destinations.map(group => (
                  <div key={group.pays} className="mobile-blog-group">
                    <span className="mobile-blog-pays">{group.pays}</span>
                    {group.liens.map(lien => (
                      <a key={lien.href} href={lien.href} onClick={() => setMenuOpen(false)} className="mobile-blog-lien">{lien.label}</a>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          <a href="/qui-sommes-nous" onClick={() => setMenuOpen(false)}>Qui sommes-nous ?</a>
          <a href={contactHref} onClick={() => setMenuOpen(false)} className="mobile-menu-cta">Contact</a>
        </div>,
        document.body
      )}
    </>
  );
}
