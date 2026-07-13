// app/admin/adminStyles.ts
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/adminStyles.ts
//
// Styles partagés pour toutes les pages admin (devis, carnets, futures...).
// Copiés exactement depuis l'objet `styles` de app/admin/devis/page.tsx,
// pour que toutes les pages admin aient la même identité visuelle.

const adminStyles: Record<string, React.CSSProperties> = {
  authWrap: { minHeight: "100vh", background: "#f8f4ef", display: "flex", alignItems: "center", justifyContent: "center" },
  authCard: { background: "#fff", padding: "40px 48px", border: "1px solid #e8e0d6", maxWidth: 360, width: "100%", display: "flex", flexDirection: "column", gap: 16 },
  wrap: { minHeight: "100vh", background: "#f8f4ef", padding: "40px 20px", display: "flex", flexDirection: "column", alignItems: "center" },
  card: { background: "#fff", border: "1px solid #e8e0d6", padding: "40px 48px", maxWidth: 700, width: "100%", height: "fit-content" },
  header: { marginBottom: 32, borderBottom: "1px solid #e8e0d6", paddingBottom: 20, display: "flex", justifyContent: "space-between", alignItems: "center" },
  logo: { fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "#c8956c", letterSpacing: "0.05em", marginBottom: 4 },
  title: { fontFamily: "Cormorant Garamond, serif", fontSize: 28, color: "#1a1512", fontWeight: 600 },
  authTitle: { fontFamily: "Cormorant Garamond, serif", fontSize: 22, color: "#1a1512", textAlign: "center" },
  field: { marginBottom: 24 },
  label: { display: "block", fontFamily: "Inter, sans-serif", fontSize: 12, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", color: "#1a1512", opacity: 0.6, marginBottom: 10 },
  input: { width: "100%", padding: "10px 14px", border: "1px solid #e8e0d6", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#1a1512", background: "#fafaf8", outline: "none", boxSizing: "border-box" },
  textarea: { width: "100%", padding: "10px 14px", border: "1px solid #e8e0d6", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#1a1512", background: "#fafaf8", outline: "none", resize: "vertical", boxSizing: "border-box" },
  error: { fontFamily: "Inter, sans-serif", fontSize: 13, color: "#c0392b" },
  btnGold: { padding: "13px 24px", background: "#c8956c", color: "#fff", border: "none", fontFamily: "Inter, sans-serif", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" },
  btnGoldFull: { width: "100%", padding: "13px", background: "#c8956c", color: "#fff", border: "none", fontFamily: "Inter, sans-serif", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" },
  btnOutline: { width: "100%", padding: "13px", background: "transparent", color: "#1a1512", border: "1px solid #e8e0d6", fontFamily: "Inter, sans-serif", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer", marginTop: 10 },
  table: { width: "100%", borderCollapse: "collapse", fontFamily: "Inter, sans-serif", fontSize: 13 },
  th: { textAlign: "left", padding: "12px 16px", fontSize: 11, letterSpacing: "0.07em", textTransform: "uppercase", color: "#888", borderBottom: "2px solid #e8e0d6", whiteSpace: "nowrap" },
  td: { padding: "14px 16px", color: "#1a1512", verticalAlign: "middle" },
  trEven: { background: "#fff", borderBottom: "1px solid #f0ebe4" },
  trOdd: { background: "#fafaf8", borderBottom: "1px solid #f0ebe4" },
  btnDelete: { background: "none", border: "none", color: "#ccc", cursor: "pointer", fontSize: 14, padding: "2px 6px", fontFamily: "Inter, sans-serif" },
  btnLinks: { background: "none", border: "1px solid #e8e0d6", color: "#1a1512", cursor: "pointer", fontSize: 11, padding: "3px 8px", fontFamily: "Inter, sans-serif", letterSpacing: "0.05em", textDecoration: "none", display: "inline-block" },
  btnCopySmall: { background: "#c8956c", border: "none", color: "#fff", cursor: "pointer", fontSize: 11, padding: "4px 10px", fontFamily: "Inter, sans-serif", flexShrink: 0 },
};

export default adminStyles;
