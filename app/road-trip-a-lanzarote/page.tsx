/* ============================================
   LANZAROTE â€” Styles spÃ©cifiques Ã  l'article
   CalquÃ© sur port-barton.css (scopÃ© .article-lanzarote)
   ============================================ */

@media (max-width: 768px) {
  .hero-article .hero-overlay { background: linear-gradient(to bottom, rgba(10,5,2,0.45) 0%, rgba(10,5,2,0.75) 100%) !important; }
  .hero-article .hero-desc { font-size: 13px !important; line-height: 1.7 !important; margin-bottom: 20px !important; }
  .hero-article { height: 45vh !important; min-height: 280px !important; }
  .hero-article .hero-content { padding: 0 24px 36px !important; bottom: -10px !important; }
  .hero-article .hero-content h1 em { font-weight: 600 !important; font-size: 22px !important; white-space: normal !important; }
  .mobile-hero-break { display: inline; }
  .tablet-only-br { display: none; }
  .desktop-tablet-br { display: none; }
  .article-lanzarote .article-section h3 { line-height: 1.1 !important; font-size: 28px !important; }
  .article-day-header h2 { font-size: 32px !important; }
  .article-lanzarote .article-section h4 { line-height: 1.1 !important; font-size: 25px !important; }
  .article-lanzarote .article-section h3.budget-h3 { font-size: 18px !important; }
  .article-lanzarote .article-section h3.budget-h3 i { font-size: 20px !important; }
  .article-budget-grid { grid-template-columns: 1fr !important; }
  .budget-price { white-space: nowrap !important; font-size: 26px !important; }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .hero-article .hero-bg { object-position: center 70% !important; }
  .tablet-only-br { display: inline; }
  .mobile-hero-break { display: none; }
  .desktop-tablet-br { display: inline; }
}

@media (min-width: 1025px) {
  .tablet-only-br { display: none; }
  .mobile-hero-break { display: none; }
  .desktop-tablet-br { display: inline; }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .sidebar-cta-title .mobile-only-br { display: none !important; }
  .sidebar-cta-text .mobile-only-br { display: none !important; }
}

.article-layout { display: grid;
  grid-template-columns: 1fr 280px;
  gap: 48px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 56px 52px;
  align-items: start; }

.article-main { min-width: 0; }

.article-toc { background: #fff;
  border: 1px solid var(--line);
  border-left: 3px solid var(--gold);
  border-radius: 4px;
  padding: 24px 28px;
  margin-bottom: 48px; }

.article-toc-title { font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  font-weight: 600;
  margin-bottom: 16px;
  color: var(--dark); }

.article-toc-list { list-style: none;
  counter-reset: toc;
  display: flex;
  flex-direction: column;
  gap: 10px; }

.article-toc-list li { counter-increment: toc;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 13px; }

.article-toc-list li::before { content: counter(toc, decimal-leading-zero);
  font-size: 11px;
  color: var(--gold);
  font-weight: 600;
  letter-spacing: 1px;
  flex-shrink: 0; }

.article-toc-list a { color: #555;
  transition: color .2s; }

.article-toc-list a:hover { color: var(--gold); }

.article-section { margin-bottom: 32px;
  padding-bottom: 32px;
  border-bottom: 1px solid var(--line); }

.article-section:last-of-type { border-bottom: none; }

.article-section h3 { font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  font-weight: 600;
  color: var(--dark);
  margin: 32px 0 16px; }

.article-section p { font-size: 15px;
  line-height: 1.85;
  color: #444;
  font-weight: 300;
  margin-bottom: 14px; }

.article-intro { font-size: 16px !important;
  color: var(--dark) !important;
  font-weight: 400 !important;
  margin-bottom: 20px !important; }

.article-link { color: var(--gold);
  text-decoration: underline;
  text-underline-offset: 3px;
  transition: color .2s; }

.article-link:hover { color: var(--gold2); }

.article-day-header { margin-bottom: 32px; }

.article-day-badge { display: inline-block;
  background: var(--gold);
  color: #fff;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  padding: 4px 14px;
  border-radius: 20px;
  margin-bottom: 12px; }

.article-day-header h2 { font-family: "Cormorant Garamond", serif;
  font-size: 38px;
  font-weight: 500;
  color: var(--dark);
  line-height: 1.1;
  margin-bottom: 10px; }

.article-pratique-grid { display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px; }

.article-pratique-card { background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 24px; }

.article-pratique-card h3 { font-family: "Cormorant Garamond", serif;
  font-size: 20px;
  font-weight: 600;
  color: var(--dark);
  margin: 0 0 12px !important; }

.article-pratique-card p { font-size: 13px !important;
  margin-bottom: 0 !important; }

.article-sidebar { display: flex;
  flex-direction: column;
  gap: 24px;
  position: sticky;
  bottom: 24px;
  align-self: flex-end; }

.sidebar-card { background: var(--bg);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column; }

.sidebar-about-img-wrap { display: flex;
  justify-content: center;
  margin-bottom: 16px; }

.sidebar-about-img { width: 70px;
  height: 70px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--gold); }

.sidebar-about-title { font-family: "Cormorant Garamond", serif;
  font-size: 28px !important;
  font-weight: 400;
  color: var(--dark);
  margin-bottom: 10px;
  text-align: center; }

.sidebar-about-text { font-size: 13px;
  color: #666;
  line-height: 1.7;
  font-weight: 300;
  text-align: center;
  margin-bottom: 12px; }

.sidebar-link { font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 500;
  text-align: center;
  transition: color .2s; }

.sidebar-link:hover { color: var(--gold2); }

.sidebar-cta { background: var(--dark);
  border-color: var(--dark);
  position: relative;
  overflow: hidden; }

.sidebar-cta-title { font-family: "Cormorant Garamond", serif;
  font-size: 24px;
  font-weight: 400;
  color: #fff;
  line-height: 1.2;
  margin: 8px 0 12px; }

.sidebar-cta-title em { color: var(--gold);
  font-style: italic; }

.sidebar-cta-text { font-size: 13px;
  color: rgba(255,255,255,0.65);
  line-height: 1.7;
  font-weight: 300;
  margin-bottom: 20px; }

@media (max-width: 1024px) {
  .article-layout { grid-template-columns: 1fr;
    padding: 40px 30px;
    gap: 40px; }
  .article-sidebar { position: static; }
  .article-pratique-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .article-layout { padding: 28px 20px; }
  .article-gallery-3 { grid-template-columns: 1fr; }
  .article-gallery-3 img { height: 220px; }
  .article-gallery-2 { grid-template-columns: 1fr; }
  .article-gallery-2 img { height: 220px; }
  .article-day-header h2 { font-size: 34px; }
  .article-lanzarote .article-section h3 { font-size: 28px !important; }
  .article-lanzarote .article-section h4 { font-size: 24px !important; }
}

.article-coup-de-coeur { background: var(--bg);
  border-top: 3px solid var(--gold);
  padding: 40px 52px;
  border-bottom: 1px solid var(--line); }

@media (max-width: 768px) {
  .article-coup-de-coeur { padding: 24px 20px; }
  .article-cdcr-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
}

.hero-article { height: 70vh; }

.article-lanzarote .hero-article .hero-bg { object-position: center 85%; }

.hero-article .hero-content { bottom: 0;
  top: auto;
  transform: none;
  padding: 0 80px 0px; }

.hero-article .hero-content h1 em { font-size: 0.48em;
  display: block;
  line-height: 1.2;
  white-space: nowrap;
  margin-top: 10px;
  text-shadow: 0 2px 8px rgba(0,0,0,0.4); }

.article-layout { display: grid; grid-template-columns: 1fr 280px; gap: 48px; max-width: 1200px; margin: 0 auto; padding: 56px 52px; align-items: start; }

.article-main { min-width: 0; }

.article-toc { background: transparent; border: none; border-left: 2px solid var(--gold); padding: 0 0 0 20px; margin-bottom: 48px; }

.article-toc-title { font-family: "Cormorant Garamond", serif; font-size: 20px; font-weight: 600; margin-bottom: 16px; color: var(--dark); }

.article-toc-list { list-style: none; display: flex; flex-direction: column; gap: 10px; }

.article-toc-list li { display: flex; align-items: center; gap: 12px; font-size: 13px; }

.article-toc-list li::before { content: '\2022'; font-size: 16px; color: var(--gold); flex-shrink: 0; line-height: 1; }

.article-toc-list a { color: #555; transition: color .2s; }

.article-toc-list a:hover { color: var(--gold); }

.article-section { margin-bottom: 32px; padding-bottom: 32px; border-bottom: 1px solid var(--line); }

.article-section:last-of-type { border-bottom: none; }

.article-section h3 { font-family: "Cormorant Garamond", serif; font-size: 24px; font-weight: 600; color: var(--dark); margin: 32px 0 16px; }

.article-section p { font-size: 15px; line-height: 1.85; color: #444; font-weight: 300; margin-bottom: 14px; }

.article-section ul { padding-left: 20px; margin-bottom: 14px; }

.article-section li { font-size: 15px; line-height: 1.85; color: #444; font-weight: 300; margin-bottom: 6px; }

.article-intro { font-size: 16px !important; color: var(--dark) !important; font-weight: 400 !important; margin-bottom: 20px !important; }

.article-link { color: var(--gold); text-decoration: underline; text-underline-offset: 3px; transition: color .2s; }

.article-link:hover { color: var(--gold2); }

.article-day-header { margin-bottom: 32px; }

.article-day-badge { display: inline-block; background: var(--gold); color: #fff; font-size: 10px; letter-spacing: 3px; text-transform: uppercase; padding: 4px 14px; border-radius: 20px; margin-bottom: 20px; }

.article-day-header h2 { font-family: "Cormorant Garamond", serif; font-size: 38px; font-weight: 500; color: var(--dark); line-height: 1.1; margin-bottom: 10px; }

.article-gallery-3 { display: flex; align-items: flex-start; gap: 8px; margin: 8px 0; }

.article-gallery-3 img { width: 100%; height: auto; display: block; transition: transform .4s; min-width: 0; }

.article-gallery-3 img:hover { transform: scale(1.03); }

.article-gallery-2 { display: flex; align-items: flex-start; gap: 8px; margin: 8px 0; }

.article-gallery-2 img { width: 100%; height: auto; display: block; transition: transform .4s; min-width: 0; }

.article-gallery-2 img:hover { transform: scale(1.03); }

.article-img-full { width: 100%; height: auto; display: block; margin: 8px 0; }

.article-pratique-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }

.article-pratique-card { background: var(--bg); border: 1px solid var(--line); border-radius: 8px; padding: 24px; }

.article-pratique-card h3 { font-family: "Cormorant Garamond", serif; font-size: 20px; font-weight: 600; color: var(--dark); margin: 0 0 12px !important; }

.article-pratique-card p { font-size: 13px !important; margin-bottom: 0 !important; }

.article-sidebar { display: flex; flex-direction: column; gap: 24px; position: sticky; bottom: 24px; align-self: flex-end; }

.sidebar-card { background: var(--bg); border: 1px solid var(--line); border-radius: 8px; padding: 24px; display: flex; flex-direction: column; }

.sidebar-about-img-wrap { display: flex; justify-content: center; margin-bottom: 16px; }

.sidebar-about-img { width: 130px; height: 130px; border-radius: 50%; object-fit: cover; border: 2px solid var(--gold); }

@media (min-width: 769px) and (max-width: 1024px) {
  .sidebar-about-title { font-size: 23px !important; }
}

@media (max-width: 768px) {
  .sidebar-about-title { font-size: 30px !important; }
}

.sidebar-about-title::after { content: ""; display: block; width: 30px; height: 2px; background: var(--gold); margin: 8px auto 10px; }

.sidebar-about-em { color: var(--gold); font-style: italic; }

.sidebar-about-text { font-size: 13px; color: #666; line-height: 1.7; font-weight: 300; text-align: center; margin-bottom: 12px; padding: 0 8px; }

.sidebar-link { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); font-weight: 500; text-align: center; transition: color .2s; }

.sidebar-link:hover { color: var(--gold2); }

.sidebar-cta { background: #2a1f14; border-color: #2a1f14; position: relative; overflow: hidden; }

.sidebar-cta-title { font-family: "Cormorant Garamond", serif; font-size: 24px; font-weight: 400; color: #fff; line-height: 1.2; margin: 8px 0 12px; }

.sidebar-cta-title em { color: var(--gold); font-style: italic; }

.sidebar-cta-text { font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.7; font-weight: 300; margin-bottom: 20px; }

.article-coup-de-coeur { background: #e8ddd3; padding: 12px 0 12px 80px; margin-top: 8px; width: 100vw; position: relative; left: 50%; transform: translateX(-50%); }

.article-cdcr-header { display: flex; align-items: center; gap: 14px; margin-bottom: 16px; }

.article-cdcr-icon { font-size: 24px; flex-shrink: 0; }

.article-cdcr-header h2 { font-family: "Cormorant Garamond", serif; font-size: 20px; font-weight: 500; color: #655f59; margin: 0; letter-spacing: 2px; text-transform: uppercase; font-style: normal; }

.article-cdcr-grid { display: flex; gap: 0; width: 100%; }

.article-cdcr-item { display: flex; flex-direction: column; justify-content: flex-start; gap: 8px; padding: 0 16px; border-left: 1px solid var(--line); flex: 1 1 0; min-width: 0; }

.article-cdcr-item:first-child { border-left: 1px solid transparent; padding-left: 0; padding-right: 16px; }

.article-cdcr-item:nth-child(1) { flex: 1 1 0; }

.article-cdcr-item:nth-child(2) { flex: 1 1 0; }

.article-cdcr-item:nth-child(3) { flex: 1 1 0; }

.article-cdcr-item:nth-child(4) { flex: 1 1 0; }

@media (min-width: 769px) and (max-width: 1024px) {
  .article-lanzarote .article-section h3 { line-height: 1.1; }
  .article-lanzarote .article-section h4 { line-height: 1.1 !important; }
  .budget-price { font-size: 22px !important; white-space: nowrap !important; }
  .article-coup-de-coeur { padding: 32px 30px; }
  .article-cdcr-grid { grid-template-columns: repeat(2, 1fr); }
  .article-cdcr-item:nth-child(1) { flex: 1 1 0 !important; }
  .article-cdcr-item:nth-child(2) { flex: 1 1 0 !important; }
  .article-cdcr-item:nth-child(3) { flex: 1 1 0 !important; }
  .article-cdcr-item:nth-child(4) { flex: 1 1 0 !important; }
}

.article-cdcr-item:last-child { padding-right: 0; padding-left: 16px; }

.article-cdcr-label { font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: #8a847e; }

.article-cdcr-value { font-family: "Cormorant Garamond", serif; font-size: 18px; font-weight: 500; color: #3a2e28; font-style: italic; line-height: 1.3; }

.article-avis { display: flex; gap: 16px; background: #fdf4ee; border: 1px solid var(--gold); border-radius: 8px; padding: 18px 24px; margin: 28px 0; }

.article-avis-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }

.article-avis strong { display: block; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; }

.article-avis p { font-size: 13px !important; color: #555 !important; line-height: 1.9 !important; margin-bottom: 0 !important; }

.article-tip { display: flex; gap: 16px; background: #fdf4ee; border: 1px solid var(--gold); border-radius: 8px; padding: 18px 24px; margin: 28px 0; }

.article-tip-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }

.article-tip strong { display: block; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; }

.article-tip strong:first-child { margin-bottom: 8px; }

.article-tip p { font-size: 13px !important; color: #555 !important; line-height: 1.9 !important; margin-bottom: 6px !important; }

.article-tip p:last-child { margin-bottom: 0 !important; }

.article-must { display: flex; gap: 16px; background: #fdf4ee; border: 1px solid var(--gold); border-radius: 8px; padding: 18px 24px; margin: 28px 0 16px; }

.article-must-icon { font-size: 16px; flex-shrink: 0; margin-top: 2px; color: var(--gold); }

.article-must strong { display: block; font-size: 11px; letter-spacing: 2px; text-transform: uppercase; color: var(--gold); margin-bottom: 6px; }

.article-must p { font-size: 13px !important; color: #555 !important; line-height: 1.9 !important; margin-bottom: 0 !important; }

@media (min-width: 769px) and (max-width: 1024px) {
  .article-layout { grid-template-columns: 1fr 240px; padding: 40px 30px; gap: 24px; }
  .article-sidebar { position: sticky; bottom: 24px; align-self: flex-end; }
  .hero-article .hero-desc { font-size: 14px !important; }
  .hero-article .hero-content { max-width: 60% !important; padding-left: 40px !important; }
  .hero-article .hero-overlay { background: linear-gradient(to right, rgba(10,5,2,0.85) 0%, rgba(10,5,2,0.6) 50%, rgba(10,5,2,0.3) 100%) !important; }
  .article-pratique-grid { grid-template-columns: 1fr; }
  .article-coup-de-coeur { padding: 24px 40px !important; overflow: hidden; }
  .article-cdcr-grid { flex-wrap: nowrap !important; gap: 0 !important; }
  .article-cdcr-item:nth-child(1) { flex: 1 1 0 !important; }
  .article-cdcr-item:nth-child(2) { flex: 1 1 0 !important; }
  .article-cdcr-item:nth-child(3) { flex: 1 1 0 !important; }
  .article-cdcr-item:nth-child(4) { flex: 1 1 0 !important; }
  .sidebar-cta-title { font-size: 23px !important; }
  .sidebar-cta .btn-gold { padding: 8px 18px !important; font-size: 9px !important; }
}

@media (max-width: 1024px) {
  .article-pratique-grid { grid-template-columns: 1fr; }
}

@media (max-width: 768px) {
  .article-layout { padding: 28px 20px; grid-template-columns: 1fr !important; overflow-x: hidden; }
  .article-main { order: 1; overflow-x: hidden; }
  .article-sidebar { order: 2; position: static !important; }
  .article-coup-de-coeur { padding: 16px 24px !important; width: 100% !important; left: auto !important; transform: none !important; position: relative !important; }
  .article-gallery-3 { grid-template-columns: 1fr; }
  .article-gallery-3 img { height: auto; aspect-ratio: unset; object-fit: cover; width: 100%; }
  .article-gallery-2 { grid-template-columns: 1fr; }
  .article-gallery-2 img { height: auto; aspect-ratio: unset; object-fit: cover; width: 100%; }
  .article-cdcr-grid { flex-direction: column; }
  .article-cdcr-header h2 { font-size: 18px !important; }
  .article-cdcr-item { flex: 1; border-left: none !important; border-top: 1px solid var(--line); padding: 12px 0 0 !important; }
  .article-cdcr-item:first-child { border-top: none; padding-top: 0 !important; }
  .article-cdcr-item:last-child { padding-left: 0 !important; }
  .article-cdcr-item { display: flex; flex-direction: column; gap: 2px; }
  .hero-article .hero-content { padding: 0 24px 36px !important; }
  .sidebar-cta-title { font-size: 30px !important; }
}

.sidebar-cta { padding: 0 !important; overflow: hidden; background: var(--bg) !important; border-color: var(--line) !important; }

.sidebar-cta-body { padding: 24px 24px 0; display: flex; flex-direction: column; gap: 10px; }

.sidebar-cta-title { font-family: "Cormorant Garamond", serif; font-size: 24px; font-weight: 400; color: var(--dark) !important; line-height: 1.2; margin: 4px 0 8px; }

.sidebar-cta-title em { color: var(--gold); font-style: italic; }

.sidebar-cta-text { font-size: 13px; color: #666 !important; line-height: 1.7; font-weight: 300; margin-bottom: 8px; }

.sidebar-cta { padding: 0 !important; overflow: hidden; position: relative; min-height: 500px; background: var(--bg) !important; border-color: var(--line) !important; }

.sidebar-cta-bg-img { position: absolute; inset: 0; width: 100%; height: 100%; object-fit: cover; object-position: center 40%; z-index: 0; }

.sidebar-cta-gradient { position: absolute; inset: 0; background: linear-gradient(to bottom, rgba(248,244,239,1) 0%, rgba(248,244,239,0.95) 40%, rgba(248,244,239,0.4) 62%, rgba(248,244,239,0) 78%); z-index: 1; }

.sidebar-cta-body { position: relative; z-index: 2; padding: 30px; display: flex; flex-direction: column; gap: 10px; }

.sidebar-cta-title { font-family: "Cormorant Garamond", serif; font-size: 24px; font-weight: 400; color: var(--dark) !important; line-height: 1.2; margin: 0 0 8px; }

.sidebar-cta-title em { color: var(--gold); font-style: italic; }

.sidebar-cta-text { font-size: 13px; color: #555 !important; line-height: 1.7; font-weight: 300; margin-bottom: 8px; }

.sidebar-card-white { background: #fff;
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 24px;
  display: flex;
  flex-direction: column; }

@media (min-width: 1025px) {
  .sidebar-cta-title { font-family: "Cormorant Garamond", serif; font-size: 28px !important; font-weight: 400; color: var(--dark) !important; line-height: 1.15; margin: 0 0 12px; }
  .sidebar-cta-title em { color: var(--gold); font-style: italic; }
}

.sidebar-cta-text { font-size: 13px !important; color: #666 !important; line-height: 1.8; font-weight: 300; margin-bottom: 16px; }

.article-tip div strong + p strong,
.article-avis div strong + p strong,
.article-must div strong + p strong { display: inline; }

.article-bref-bar { display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 12px 20px;
  padding: 16px 40px;
  background: var(--bg);
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line); }

.article-bref-bar-item { display: flex;
  align-items: center;
  gap: 7px;
  font-family: "Inter", sans-serif;
  font-size: 13px;
  color: var(--dark); }

.article-bref-bar-sep { color: var(--gold);
  font-size: 14px; }

@media (max-width: 768px) {
  .article-bref-bar { padding: 14px 20px; gap: 10px 16px; }
  .article-bref-bar-sep { display: none; }
  .article-bref-bar-item { font-size: 12px; }
}



.article-related { margin-top: 32px;
  padding-top: 32px;
  border-top: 1px solid var(--line); }

.article-related-title { font-family: "Cormorant Garamond", serif;
  font-size: 26px;
  font-weight: 600;
  color: var(--dark);
  margin-bottom: 24px; }

.article-related-grid { display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 20px; }

.article-related-card { display: flex;
  flex-direction: column;
  text-decoration: none;
  transition: transform 0.3s ease; }

.article-related-card:hover { transform: translateY(-4px); }

.article-related-img-wrap { width: 100%;
  aspect-ratio: 4/3;
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 12px; }

.article-related-img { width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease; }

.article-related-card:hover .article-related-img { transform: scale(1.04); }

.article-related-body { display: flex;
  flex-direction: column;
  gap: 6px; }

.article-related-cat { font-family: "Inter", sans-serif;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--gold);
  font-weight: 500; }

.article-related-title-card { font-family: "Cormorant Garamond", serif;
  font-size: 16px;
  font-weight: 600;
  color: var(--dark);
  line-height: 1.4;
  margin: 0; }

.article-related-link { font-family: "Inter", sans-serif;
  font-size: 12px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  color: var(--gold);
  text-decoration: none;
  display: inline-block; }

.article-related-link:hover { text-decoration: underline; }

@media (max-width: 768px) {
  .article-related-grid { grid-template-columns: 1fr; gap: 16px; }
}

.article-lanzarote .article-day-header { margin-top: 48px;
  margin-bottom: 32px; }

.article-lanzarote .article-day-badge { margin-bottom: 16px; }

.article-lanzarote .article-section h3 { font-size: 32px;
  margin: 8px 0 16px; }

.article-lanzarote .article-section h4 { font-family: "Cormorant Garamond", serif;
  font-size: 26px;
  font-weight: 600;
  font-style: italic;
  color: var(--gold);
  text-transform: none;
  letter-spacing: 0;
  margin: 28px 0 12px; }

.article-lanzarote .article-section h3.budget-h3 { font-size: 24px !important; }
.article-lanzarote .article-section h3.budget-h3 i { font-size: 26px !important; }

.article-lanzarote .article-section h3 + h4 { margin-top: 2px !important; }

.article-lanzarote .article-day-header + h4 { margin-top: 2px !important; }
.article-lanzarote .article-day-header + .article-day-header-tight { margin-top: -4px !important; }

.article-lanzarote .article-day-header-tight { margin-bottom: 8px !important; }

.article-lanzarote p + .article-day-header-tight,
.article-lanzarote .article-tip + .article-day-header-tight,
.article-lanzarote .article-avis + .article-day-header-tight,
.article-lanzarote .article-must + .article-day-header-tight,
.article-lanzarote .article-gallery-2 + .article-day-header-tight,
.article-lanzarote .article-gallery-3 + .article-day-header-tight,
.article-lanzarote .article-img-full + .article-day-header-tight { margin-top: 40px; }


.article-lanzarote .article-gallery-2 + h4,
.article-lanzarote .article-gallery-3 + h4,
.article-lanzarote .article-img-full + h4 { margin-top: 24px; }

.article-lanzarote .article-gallery-2 { margin: 0; }

.article-lanzarote .article-gallery-3 { margin: 0; }

.article-lanzarote .article-img-full { margin: 0; }

.article-lanzarote p + .article-gallery-2,
.article-lanzarote p + .article-gallery-3,
.article-lanzarote p + .article-img-full,
.article-lanzarote h3 + .article-gallery-2,
.article-lanzarote h3 + .article-gallery-3,
.article-lanzarote h3 + .article-img-full,
.article-lanzarote h4 + .article-gallery-2,
.article-lanzarote h4 + .article-gallery-3,
.article-lanzarote h4 + .article-img-full { margin-top: 24px; }

.article-lanzarote .article-gallery-2 + p,
.article-lanzarote .article-gallery-3 + p,
.article-lanzarote .article-img-full + p,
.article-lanzarote .article-gallery-2 + h4,
.article-lanzarote .article-gallery-3 + h4,
.article-lanzarote .article-img-full + h4 { margin-top: 24px; }

.article-lanzarote .article-gallery-2 + .article-gallery-2,
.article-lanzarote .article-gallery-2 + .article-gallery-3,
.article-lanzarote .article-gallery-3 + .article-gallery-2,
.article-lanzarote .article-gallery-3 + .article-gallery-3,
.article-lanzarote .article-gallery-2 + .article-img-full,
.article-lanzarote .article-img-full + .article-gallery-2,
.article-lanzarote .article-gallery-3 + .article-img-full,
.article-lanzarote .article-img-full + .article-gallery-3 { margin-top: 8px; }

.pratique-list { list-style: none;
  margin: 0 0 32px;
  padding: 0; }

.article-comments-title { font-family: "Cormorant Garamond", serif; font-size: 26px; font-weight: 600; color: var(--dark); margin-bottom: 36px; }

.pratique-label { display: inline-block;
  font-size: 7px;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  font-style: italic;
  color: #c8956c !important;
  background: none;
  border-bottom: 2px solid #c8956c;
  padding: 2px 0;
  font-family: "Inter", sans-serif;
  margin: 24px 0 20px; }

.pratique-label:first-of-type { margin-top: 0; }

.pratique-label-dot { width: 4px; height: 4px; border-radius: 50%; background: #fff; display: inline-block; flex-shrink: 0; }

.pratique-item { display: grid;
  grid-template-columns: 6px 1fr;
  gap: 12px;
  align-items: start;
  padding: 8px 0; }

.pratique-dash { width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--gold);
  margin-top: 9px;
  display: block; }

.pratique-item p { font-size: 14px !important;
  color: #555 !important;
  line-height: 1.9 !important;
  margin: 0 !important; }

.pratique-item p strong { color: var(--dark) !important;
  font-weight: 600 !important; }

.pratique-item a { color: var(--gold) !important;
  text-decoration: underline !important; }
/* ============================================
   BLOCS OÃ™ MANGER â€” Lanzarote
   ============================================ */

.pb-resto-section {
  margin: 32px 0;
  background: #faf7f4;
  border: 1px solid rgba(200,149,108,0.18);
  border-radius: 12px;
  padding: 28px 28px 20px;
}

.pb-resto-title {
  font-family: 'Cormorant Garamond', serif !important;
  font-size: 28px !important;
  font-weight: 600 !important;
  color: #1a1512 !important;
  margin: 0 0 20px !important;
  padding-bottom: 14px !important;
  border-bottom: 1.5px solid rgba(200,149,108,0.30) !important;
  letter-spacing: 0.01em !important;
}

.pb-resto-tier { margin-bottom: 22px; }
.pb-resto-tier:last-child { margin-bottom: 0; }

.pb-resto-tier-header {
  display: flex;
  align-items: center;
  gap: 0;
  margin-bottom: 12px;
}

.pb-resto-tier-badge {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 700;
  color: #fff;
  background: #c8956c;
  border-radius: 6px;
  padding: 5px 16px;
  white-space: nowrap;
  line-height: 1.2;
  letter-spacing: 0.02em;
}

.pb-resto-tier-label { display: none; }

.pb-resto-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
}

.pb-resto-card {
  background: #fff;
  border: 1px solid rgba(200,149,108,0.15);
  border-radius: 8px;
  padding: 12px 14px;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-direction: column;
  gap: 5px;
  transition: box-shadow 0.18s, border-color 0.18s, transform 0.18s;
}

.pb-resto-card:hover {
  box-shadow: 0 4px 18px rgba(200,149,108,0.16);
  border-color: rgba(200,149,108,0.45);
  transform: translateY(-2px);
}

.pb-resto-card-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;
  font-weight: 600;
  color: #1a1512;
  line-height: 1.2;
  transition: color 0.18s;
}

.pb-resto-card:hover .pb-resto-card-name { color: #c8956c; }

.pb-resto-card-desc {
  font-size: 13px;
  color: rgba(26,21,18,0.50);
  line-height: 1.5;
}

@media (max-width: 768px) {
  .pb-resto-section { padding: 20px 16px 14px; }
  .pb-resto-grid { grid-template-columns: 1fr 1fr; gap: 8px; }
  .pb-resto-card { padding: 10px 12px; }
  .pb-resto-card .pb-resto-card-name { font-size: 20px !important; }
  .pb-resto-section h3.pb-resto-title { font-size: 25px !important; }
}

@media (max-width: 480px) {
  .pb-resto-grid { grid-template-columns: 1fr; }
}
.article-resto-link-mobile { display: none; }

@media (max-width: 768px) {
  .article-resto-link-desktop { display: none; }
  .article-resto-link-mobile { display: inline; }
}

@media (min-width: 769px) {
  .article-resto-link-desktop { display: inline; }
}

/* Chevron dorÃ© devant les H2 */
.article-lanzarote .article-day-header h2::before { content: '\276F\276F'; color: var(--gold); font-size: 22px; margin-right: 10px; vertical-align: middle; letter-spacing: -2px; }