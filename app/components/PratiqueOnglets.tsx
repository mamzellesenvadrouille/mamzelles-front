'use client';

import { useState, type ReactNode } from 'react';

interface PratiqueOnglet {
  id: string;
  label: string;
  icon: ReactNode;
  content: ReactNode;
}

interface PratiqueOngletsProps {
  onglets: PratiqueOnglet[];
}

export default function PratiqueOnglets({ onglets }: PratiqueOngletsProps) {
  const [actifId, setActifId] = useState(onglets[0]?.id ?? '');

  return (
    <div className="article-pratique-onglets">
      <nav className="article-pratique-nav" role="tablist">
        {onglets.map((o) => (
          <button
            key={o.id}
            type="button"
            role="tab"
            aria-selected={o.id === actifId}
            className={
              o.id === actifId
                ? 'article-pratique-nav-btn article-pratique-nav-btn-actif'
                : 'article-pratique-nav-btn'
            }
            onClick={() => setActifId(o.id)}
          >
            <span className="article-pratique-nav-icon">{o.icon}</span>
            {o.label}
          </button>
        ))}
      </nav>
      {onglets.map((o) => (
        <div
          key={o.id}
          role="tabpanel"
          className="article-pratique-sub"
          hidden={o.id !== actifId}
        >
          {o.content}
        </div>
      ))}
    </div>
  );
}
