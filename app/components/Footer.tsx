export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-col">
          <div className="footer-logo-wrap">
            <span className="footer-logo-main">MamZelles en vadrouille</span>
            <span className="footer-logo-sub">Créatrices de voyages sur mesure</span>
          </div>
        </div>
        <div className="footer-col-sep" />
        <div className="footer-col">
          <a href="https://instagram.com/mamzellesenvadrouille" target="_blank" rel="noopener noreferrer" className="footer-social-item">
            <div className="footer-social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </div>
            <div className="footer-social-text">
              <span className="footer-social-label">Suivez nos aventures</span>
              <span className="footer-social-value">@mamzellesenvadrouille</span>
            </div>
          </a>
        </div>
        <div className="footer-col-sep" />
        <div className="footer-col">
          <a href="mailto:contact@mamzellesenvadrouille.com" className="footer-social-item">
            <div className="footer-social-icon">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
            </div>
            <div className="footer-social-text">
              <span className="footer-social-label">Écrivez-nous</span>
              <span className="footer-social-value">contact@mamzellesenvadrouille.com</span>
            </div>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        © 2026 MamZelles en vadrouille — Tous droits réservés · <a href="/confidentialite" style={{ color: 'rgba(26,21,18,0.5)', fontSize: '12px', textDecoration: 'underline' }}>Politique de confidentialité</a> · <a href="/cgv" style={{ color: 'rgba(26,21,18,0.5)', fontSize: '12px', textDecoration: 'underline' }}>CGV</a>
      </div>
    </footer>
  );
}
