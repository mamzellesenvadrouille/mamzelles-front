'use client';
import { useState } from 'react';

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

export default function AdminDevis() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState('');
  const [authError, setAuthError] = useState('');

  const [clientName, setClientName] = useState('');
  const [formuleIndex, setFormuleIndex] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState<{ index: number; qty: number }[]>([]);
  const [remise, setRemise] = useState(0);
  const [noteClient, setNoteClient] = useState('');
  const [loading, setLoading] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('');
  const [copied, setCopied] = useState(false);
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
    } else {
      setAuthError('Mot de passe incorrect.');
    }
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
  const optionsTotal = selectedOptions.reduce((sum, o) => sum + OPTIONS[o.index].prix * o.qty, 0);
  const total = Math.max(0, formule.prix + optionsTotal - remise);

  function buildDescription() {
    const lines = [`Formule : ${formule.label}`];
    selectedOptions.forEach(o => {
      lines.push(`${OPTIONS[o.index].label} × ${o.qty} (+${OPTIONS[o.index].prix * o.qty} €)`);
    });
    if (remise > 0) lines.push(`Remise : -${remise} €`);
    if (noteClient) lines.push(`Note : ${noteClient}`);
    return lines.join('\n');
  }

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    if (!clientName.trim()) { setError('Merci de renseigner le nom de la cliente.'); return; }
    setError('');
    setLoading(true);
    setPaymentUrl('');

    const res = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        clientName: clientName.trim(),
        formule: formule.label,
        montant: total,
        description: buildDescription(),
      }),
    });

    const data = await res.json();
    setLoading(false);
    if (data.url) {
      setPaymentUrl(data.url);
    } else {
      setError('Erreur lors de la génération du lien. Réessaie.');
    }
  }

  function handleCopy() {
    navigator.clipboard.writeText(paymentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  function handleReset() {
    setClientName('');
    setFormuleIndex(0);
    setSelectedOptions([]);
    setRemise(0);
    setNoteClient('');
    setPaymentUrl('');
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

        {paymentUrl ? (
          <div style={styles.successWrap}>
            <div style={styles.successTitle}>✅ Lien de paiement prêt</div>
            <div style={styles.successInfo}>
              <strong>{clientName}</strong> — {formule.label} — <strong>{total} €</strong>
            </div>
            <div style={styles.urlBox}>{paymentUrl}</div>
            <div style={styles.btnRow}>
              <button onClick={handleCopy} style={styles.btnGold}>
                {copied ? '✓ Copié !' : 'Copier le lien'}
              </button>
              <button onClick={handleReset} style={styles.btnOutline}>Nouveau devis</button>
            </div>
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
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  authWrap: { minHeight: '100vh', background: '#f8f4ef', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  authCard: { background: '#fff', padding: '40px 48px', border: '1px solid #e8e0d6', maxWidth: 360, width: '100%', display: 'flex', flexDirection: 'column', gap: 16 },
  wrap: { minHeight: '100vh', background: '#f8f4ef', padding: '40px 20px', display: 'flex', justifyContent: 'center' },
  card: { background: '#fff', border: '1px solid #e8e0d6', padding: '40px 48px', maxWidth: 600, width: '100%', height: 'fit-content' },
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
  error: { fontFamily: 'Inter, sans-serif', fontSize: 13, color: '#c0392b', marginBottom: 12 },
};
