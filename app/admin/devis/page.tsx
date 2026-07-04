'use client';
import { useState, useEffect } from 'react';

const FORMULES = [
  { label: "L'Escale", prix: 179 },
  { label: 'La Vadrouille', prix: 329 },
  { label: 'La Grande Vadrouille', prix: 499 },
  { label: 'Sur-mesure', prix: 549 },
];

const OPTIONS = [
  { label: 'Adulte supplémentaire (12 ans et +)', prix: 25 },
  { label: 'Enfant (2 à 11 ans)', prix: 15 },
  { label: 'Destination supplémentaire', prix: 35 },
];

type DevisRecord = {
  id: string;
  clientName: string;
  formule: string;
  total: number;
  note: string;
  date: string;
  acompteUrl?: string;
  soldeUrl?: string;
  acomptePaye?: boolean;
  soldePaye?: boolean;
};

export default function AdminDevis() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');
  const [historique, setHistorique] = useState<DevisRecord[]>([]);
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);
  const [loadingHistorique, setLoadingHistorique] = useState(false);
  const [visibleLinks, setVisibleLinks] = useState<string | null>(null);
  const [clientName, setClientName] = useState('');
  const [formuleIndex, setFormuleIndex] = useState(0);
  const [prixSurMesure, setPrixSurMesure] = useState(549);
  const [selectedOptions, setSelectedOptions] = useState<{ index: number; qty: number }[]>([]);
  const [remise, setRemise] = useState(0);
  const [noteClient, setNoteClient] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');
  const [soldeUrl, setSoldeUrl] = useState('');
  const [copied, setCopied] = useState<'acompte' | 'solde' | null>(null);
  const [error, setError] = useState('');

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch('/api/admin-auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuth(true);
      setAuthError('');
      loadHistorique();
    } else {
      setAuthError('Mot de passe incorrect.');
    }
  }

  async function loadHistorique() {
    setLoadingHistorique(true);
    try {
      const res = await fetch('/api/devis-list');
      const data = await res.json();
      setHistorique(data);
    } catch {}
    setLoadingHistorique(false);
  }

  async function deleteDevis(id: string) {
    await fetch('/api/devis-save', {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id }),
    });
    setConfirmDeleteId(null);
    loadHistorique();
  }

  async function toggleStatut(d: DevisRecord, field: 'acomptePaye' | 'soldePaye') {
    await fetch('/api/devis-save', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: d.id, field, value: !d[field] }),
    });
    loadHistorique();
  }

  function toggleOption(index: number) {
    setSelectedOptions(prev => {
      const exists = prev.find(o => o.index === index);
      if (exists) return prev.filter(o => o.index !== index);
      return [...prev, { index, qty: 1 }];
    });
  }

  function setOptionQty(index: number, qty: number) {
    setSelectedOptions(prev =>
      prev.map(o => o.index === index ? { ...o, qty: Math.max(1, qty) } : o)
    );
  }

  function getOptionQty(index: number) {
    return selectedOptions.find(o => o.index === index)?.qty ?? 1;
  }

  function isOptionSelected(index: number) {
    return selectedOptions.some(o => o.index === index);
  }

  const formule = FORMULES[formuleIndex];
  const isSurMesure = formule.label === 'Sur-mesure';
  const prixBase = isSurMesure ? prixSurMesure : formule.prix;
  const optionsTotal = selectedOptions.reduce((sum, o) => sum + OPTIONS[o.index].prix * o.qty, 0);
  const total = Math.max(0, prixBase + optionsTotal - remise);

  function buildDescription() {
    const lines: string[] = [];
    selectedOptions.forEach(o => {
      lines.push(`${OPTIONS[o.index].label} × ${o.qty}`);
    });
    if (remise > 0) lines.push(`Remise appliquée : -${remise} €`);
    return lines.join(' — ');
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!clientName.trim()) { setError('Merci de renseigner le nom de la cliente.'); return; }
    setError('');
    setLoading(true);
    setPaymentUrl('');
    setSoldeUrl('');

    const acompte = Math.round(total * 0.5 * 100) / 100;
    const solde = Math.round((total - acompte) * 100) / 100;

    const [resAcompte, resSolde] = await Promise.all([
      fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: clientName.trim(),
          formule: formule.label,
          montant: acompte,
          description: [noteClient, buildDescription(), 'ACOMPTE 50%'].filter(Boolean).join('\n'),
        }),
      }),
      fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: clientName.trim(),
          formule: formule.label,
          montant: solde,
          description: [noteClient, buildDescription(), 'SOLDE 50%'].filter(Boolean).join('\n'),
        }),
      }),
    ]);

    const dataAcompte = await resAcompte.json();
    const dataSolde = await resSolde.json();
    setLoading(false);

    if (dataAcompte.url && dataSolde.url) {
      setPaymentUrl(dataAcompte.url);
      setSoldeUrl(dataSolde.url);
      // Sauvegarder dans l'historique avec les liens
      await fetch('/api/devis-save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName: clientName.trim(),
          formule: formule.label,
          total,
          note: noteClient,
          acompteUrl: dataAcompte.url,
          soldeUrl: dataSolde.url,
        }),
      });
      loadHistorique();
    } else {
      setError('Erreur lors de la génération des liens. Réessaie.');
    }
  }

  function handleCopy(url: string, type: 'acompte' | 'solde') {
    navigator.clipboard.writeText(url);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  }

  function handleReset() {
    setClientName('');
    setFormuleIndex(0);
    setPrixSurMesure(549);
    setSelectedOptions([]);
    setRemise(0);
    setNoteClient('');
    setPaymentUrl('');
    setSoldeUrl('');
    setError('');
  }

  if (!auth) {
    return (
      <div style={styles.authWrap}>
        <form onSubmit={handleAuth} style={styles.authCard}>
          <div style={styles.logo}>MamZelles en vadrouille</div>
          <div style={styles.authTitle}>Espace admin</div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={e => setPassword(e.target.value)}
            style={styles.input}
            autoFocus
          />
          {authError && <div style={styles.error}>{authError}</div>}
          <button type="submit" style={styles.btnGold}>Accéder</button>
        </form>
      </div>
    );
  }

  return (
    <div style={styles.wrap}>
      <div style={styles.card}>
        <div style={styles.header}>
          <div style={styles.logo}>MamZelles en vadrouille</div>
          <div style={styles.title}>Générer un devis</div>
        </div>

        {paymentUrl && soldeUrl ? (
          <div style={styles.successWrap}>
            <div style={styles.successTitle}>Liens de paiement prêts</div>
            <div style={styles.successInfo}>
              <strong>{clientName}</strong> — {formule.label} — Total : <strong>{total} €</strong>
            </div>

            <div style={styles.linkBlock}>
              <div style={styles.linkLabel}>ACOMPTE 50% — {Math.round(total * 0.5 * 100) / 100} € <span style={styles.linkHint}>→ à envoyer maintenant</span></div>
              <div style={styles.urlBox}>{paymentUrl}</div>
              <button onClick={() => handleCopy(paymentUrl, 'acompte')} style={styles.btnGold}>
                {copied === 'acompte' ? '✓ Copié !' : 'Copier le lien acompte'}
              </button>
            </div>

            <div style={styles.linkBlock}>
              <div style={styles.linkLabel}>SOLDE 50% — {Math.round((total - Math.round(total * 0.5 * 100) / 100) * 100) / 100} € <span style={styles.linkHint}>→ à envoyer à la livraison</span></div>
              <div style={styles.urlBox}>{soldeUrl}</div>
              <button onClick={() => handleCopy(soldeUrl, 'solde')} style={{ ...styles.btnGold, background: '#1a1512' }}>
                {copied === 'solde' ? '✓ Copié !' : 'Copier le lien solde'}
              </button>
            </div>

            <button onClick={handleReset} style={styles.btnOutline}>Nouveau devis</button>
          </div>
        ) : (
          <form onSubmit={handleGenerate}>
            {/* Nom cliente */}
            <div style={styles.field}>
              <label style={styles.label}>Nom de la cliente</label>
              <input
                type="text"
                placeholder="Ex : Sophie Martin"
                value={clientName}
                onChange={e => setClientName(e.target.value)}
                style={styles.input}
              />
            </div>

            {/* Formule */}
            <div style={styles.field}>
              <label style={styles.label}>Formule</label>
              <div style={styles.formulesGrid}>
                {FORMULES.map((f, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setFormuleIndex(i)}
                    style={i === formuleIndex ? styles.formuleCardActive : styles.formuleCard}
                  >
                    <div style={styles.formuleName}>{f.label}</div>
                    <div style={styles.formulePrix}>{f.prix} €</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Prix sur-mesure */}
            {isSurMesure && (
              <div style={styles.field}>
                <label style={styles.label}>Prix sur-mesure (€)</label>
                <input
                  type="number"
                  min={549}
                  value={prixSurMesure || ''}
                  onChange={e => setPrixSurMesure(parseInt(e.target.value) || 549)}
                  placeholder="549"
                  style={{ ...styles.input, width: 160 }}
                />
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#888', marginTop: 6 }}>À partir de 549 € — ajuste selon le projet</div>
              </div>
            )}

            {/* Options */}
            <div style={styles.field}>
              <label style={styles.label}>Options supplémentaires</label>
              {OPTIONS.map((opt, i) => (
                <div key={i} style={styles.optionRow}>
                  <label style={styles.optionLabel}>
                    <input
                      type="checkbox"
                      checked={isOptionSelected(i)}
                      onChange={() => toggleOption(i)}
                      style={{ marginRight: 8 }}
                    />
                    {opt.label} <span style={styles.optionPrix}>+{opt.prix} €</span>
                  </label>
                  {isOptionSelected(i) && (
                    <div style={styles.qtyWrap}>
                      <span style={styles.qtyLabel}>Quantité :</span>
                      <input
                        type="number"
                        min={1}
                        value={getOptionQty(i)}
                        onChange={e => setOptionQty(i, parseInt(e.target.value) || 1)}
                        style={styles.qtyInput}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Remise */}
            <div style={styles.field}>
              <label style={styles.label}>Remise (€)</label>
              <input
                type="number"
                min={0}
                value={remise || ''}
                onChange={e => setRemise(parseInt(e.target.value) || 0)}
                placeholder="0"
                style={{ ...styles.input, width: 120 }}
              />
            </div>

            {/* Note */}
            <div style={styles.field}>
              <label style={styles.label}>Note (apparaîtra sur le reçu)</label>
              <textarea
                value={noteClient}
                onChange={e => setNoteClient(e.target.value)}
                placeholder="Ex : Voyage Bali 10 jours, mai 2027"
                style={styles.textarea}
                rows={2}
              />
            </div>

            {/* Total */}
            <div style={styles.totalBox}>
              <span>Total à encaisser</span>
              <strong style={styles.totalMontant}>{total} €</strong>
            </div>

            {error && <div style={styles.error}>{error}</div>}

            <button type="submit" style={styles.btnGold} disabled={loading}>
              {loading ? 'Génération...' : 'Générer le lien de paiement'}
            </button>
          </form>
        )}
      </div>

      {/* Historique des devis */}
      <div style={{ ...styles.card, marginTop: 24, maxWidth: 1100 }}>
        <div style={{ ...styles.header, marginBottom: 20 }}>
          <div style={styles.title}>Historique des devis</div>
        </div>
        {loadingHistorique ? (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#888' }}>Chargement...</p>
        ) : historique.length === 0 ? (
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#888' }}>Aucun devis généré pour l'instant.</p>
        ) : (
          <>
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>Date</th>
                <th style={styles.th}>Cliente</th>
                <th style={styles.th}>Formule</th>
                <th style={styles.th}>Note</th>
                <th style={styles.th}>Total</th>
                <th style={styles.th}>Acompte</th>
                <th style={styles.th}>A. reçu</th>
                <th style={styles.th}>S. reçu</th>
                <th style={styles.th}></th>
                <th style={styles.th}></th>
              </tr>
            </thead>
            <tbody>
              {historique.map((d, i) => (
                <>
                <tr key={i} style={d.acomptePaye && d.soldePaye ? styles.trDone : i % 2 === 0 ? styles.trEven : styles.trOdd}>
                  <td style={styles.td}>{new Date(d.date).toLocaleDateString('fr-FR')}</td>
                  <td style={styles.td}>{d.clientName}</td>
                  <td style={styles.td}>{d.formule}</td>
                  <td style={styles.td}>{d.note || '—'}</td>
                  <td style={{ ...styles.td, fontWeight: 600 }}>{d.total} €</td>
                  <td style={{ ...styles.td, color: '#c8956c', fontWeight: 600 }}>{Math.round(d.total * 0.5 * 100) / 100} €</td>
                  <td style={{ ...styles.td, textAlign: 'center' }}>
                    <input type="checkbox" checked={!!d.acomptePaye} onChange={() => toggleStatut(d, 'acomptePaye')} style={{ cursor: 'pointer', accentColor: '#c8956c', width: 16, height: 16 }} />
                  </td>
                  <td style={{ ...styles.td, textAlign: 'center' }}>
                    <input type="checkbox" checked={!!d.soldePaye} onChange={() => toggleStatut(d, 'soldePaye')} style={{ cursor: 'pointer', accentColor: '#c8956c', width: 16, height: 16 }} />
                  </td>
                  <td style={styles.td}>
                    <button onClick={() => setVisibleLinks(visibleLinks === d.id ? null : d.id)} style={styles.btnLinks}>Liens</button>
                  </td>
                  <td style={styles.td}>
                    {confirmDeleteId === d.id ? (
                      <span style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
                        <button onClick={() => deleteDevis(d.id)} style={{ ...styles.btnCopySmall, background: '#c0392b', fontSize: 11, padding: '3px 8px' }}>Oui</button>
                        <button onClick={() => setConfirmDeleteId(null)} style={{ ...styles.btnLinks, fontSize: 11 }}>Non</button>
                      </span>
                    ) : (
                      <button onClick={() => setConfirmDeleteId(d.id)} style={styles.btnDelete} title="Supprimer">✕</button>
                    )}
                  </td>
                </tr>
                {visibleLinks === d.id && (
                  <tr style={{ background: '#f8f4ef' }}>
                    <td colSpan={10} style={{ padding: '12px 16px' }}>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, marginBottom: 8 }}>
                        <strong style={{ fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#888' }}>Acompte 50% — {Math.round(d.total * 0.5 * 100) / 100} €</strong>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
                          <span style={{ color: '#888', wordBreak: 'break-all', flex: 1 }}>{d.acompteUrl || '—'}</span>
                          {d.acompteUrl && <button onClick={() => { navigator.clipboard.writeText(d.acompteUrl!); }} style={styles.btnCopySmall}>Copier</button>}
                        </div>
                      </div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: 12 }}>
                        <strong style={{ fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase', color: '#888' }}>Solde 50% — {Math.round((d.total - Math.round(d.total * 0.5 * 100) / 100) * 100) / 100} €</strong>
                        <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginTop: 4 }}>
                          <span style={{ color: '#888', wordBreak: 'break-all', flex: 1 }}>{d.soldeUrl || '—'}</span>
                          {d.soldeUrl && <button onClick={() => { navigator.clipboard.writeText(d.soldeUrl!); }} style={styles.btnCopySmall}>Copier</button>}
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
                </>
              ))}
            </tbody>
          </table>
          </>
        )}
      </div>
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  authWrap: { minHeight: '100vh', background: '#f8f4ef', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  authCard: { background: '#fff', padding: '40px 48px', border: '1px solid #e8e0d6', maxWidth: 360, width: '100%', display: 'flex', flexDirection: 'column', gap: 16 },
  wrap: { minHeight: '100vh', background: '#f8f4ef', padding: '40px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center' },
  card: { background: '#fff', border: '1px solid #e8e0d6', padding: '40px 48px', maxWidth: 700, width: '100%', height: 'fit-content' },
  header: { marginBottom: 32, borderBottom: '1px solid #e8e0d6', paddingBottom: 20 },
  logo: { fontFamily: 'Cormorant Garamond, serif', fontSize: 18, color: '#c8956c', letterSpacing: '0.05em', marginBottom: 4 },
  title: { fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#1a1512', fontWeight: 600 },
  authTitle: { fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: '#1a1512', textAlign: 'center' },
  field: { marginBottom: 24 },
  label: { display: 'block', fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1a1512', opacity: 0.6, marginBottom: 10 },
  input: { width: '100%', padding: '10px 14px', border: '1px solid #e8e0d6', fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1a1512', background: '#fafaf8', outline: 'none', boxSizing: 'border-box' },
  textarea: { width: '100%', padding: '10px 14px', border: '1px solid #e8e0d6', fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1a1512', background: '#fafaf8', outline: 'none', resize: 'vertical', boxSizing: 'border-box' },
  formulesGrid: { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 },
  formuleCard: { padding: '14px 16px', border: '1.5px solid #e8e0d6', background: '#fafaf8', cursor: 'pointer', textAlign: 'left', transition: 'border-color 0.2s' },
  formuleCardActive: { padding: '14px 16px', border: '1.5px solid #c8956c', background: '#fff8f4', cursor: 'pointer', textAlign: 'left' },
  formuleName: { fontFamily: 'Cormorant Garamond, serif', fontSize: 16, fontWeight: 600, color: '#1a1512', marginBottom: 4 },
  formulePrix: { fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#c8956c', fontWeight: 500 },
  optionRow: { marginBottom: 10 },
  optionLabel: { fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1a1512', display: 'flex', alignItems: 'center', cursor: 'pointer' },
  optionPrix: { color: '#c8956c', marginLeft: 6, fontWeight: 500 },
  qtyWrap: { display: 'flex', alignItems: 'center', gap: 8, marginTop: 6, marginLeft: 24 },
  qtyLabel: { fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#888' },
  qtyInput: { width: 60, padding: '4px 8px', border: '1px solid #e8e0d6', fontFamily: 'Inter, sans-serif', fontSize: 14 },
  totalBox: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 20px', background: '#f8f4ef', marginBottom: 24, fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1a1512' },
  totalMontant: { fontFamily: 'Cormorant Garamond, serif', fontSize: 28, color: '#c8956c' },
  btnGold: { width: '100%', padding: '13px', background: '#c8956c', color: '#fff', border: 'none', fontFamily: 'Inter, sans-serif', fontSize: 12.5, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer' },
  btnOutline: { width: '100%', padding: '13px', background: 'transparent', color: '#1a1512', border: '1px solid #e8e0d6', fontFamily: 'Inter, sans-serif', fontSize: 12.5, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', marginTop: 10 },
  btnRow: { display: 'flex', flexDirection: 'column', gap: 0 },
  successWrap: { display: 'flex', flexDirection: 'column', gap: 16 },
  successTitle: { fontFamily: 'Cormorant Garamond, serif', fontSize: 22, color: '#1a1512' },
  successInfo: { fontFamily: 'Inter, sans-serif', fontSize: 14, color: '#1a1512', opacity: 0.8 },
  urlBox: { padding: '12px 16px', background: '#f8f4ef', border: '1px solid #e8e0d6', fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#888', wordBreak: 'break-all', lineHeight: 1.5 },
  linkBlock: { display: 'flex', flexDirection: 'column', gap: 10, padding: '16px', background: '#f8f4ef', border: '1px solid #e8e0d6' },
  linkLabel: { fontFamily: 'Inter, sans-serif', fontSize: 12, fontWeight: 600, letterSpacing: '0.05em', color: '#1a1512', textTransform: 'uppercase' as const },
  linkHint: { fontWeight: 400, color: '#888', textTransform: 'none' as const },
  table: { width: '100%', borderCollapse: 'collapse' as const, fontFamily: 'Inter, sans-serif', fontSize: 13 },
  th: { textAlign: 'left' as const, padding: '12px 16px', fontSize: 11, letterSpacing: '0.07em', textTransform: 'uppercase' as const, color: '#888', borderBottom: '2px solid #e8e0d6', whiteSpace: 'nowrap' as const },
  td: { padding: '14px 16px', color: '#1a1512', verticalAlign: 'middle' as const },
  trEven: { background: '#fff', borderBottom: '1px solid #f0ebe4' },
  trOdd: { background: '#fafaf8', borderBottom: '1px solid #f0ebe4' },
  trDone: { background: '#f0faf0', borderBottom: '1px solid #d4edda' },
  btnDelete: { background: 'none', border: 'none', color: '#ccc', cursor: 'pointer', fontSize: 14, padding: '2px 6px', fontFamily: 'Inter, sans-serif' },
  btnLinks: { background: 'none', border: '1px solid #e8e0d6', color: '#1a1512', cursor: 'pointer', fontSize: 11, padding: '3px 8px', fontFamily: 'Inter, sans-serif', letterSpacing: '0.05em' },
  btnCopySmall: { background: '#c8956c', border: 'none', color: '#fff', cursor: 'pointer', fontSize: 11, padding: '4px 10px', fontFamily: 'Inter, sans-serif', flexShrink: 0 },
  btnClear: { marginTop: 16, background: 'none', border: 'none', fontFamily: 'Inter, sans-serif', fontSize: 12, color: '#888', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3, padding: 0 },
};
