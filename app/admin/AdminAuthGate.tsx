// app/admin/AdminAuthGate.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/AdminAuthGate.tsx
//
// Composant partagé pour protéger n'importe quelle page admin par mot de passe.
// Reprend exactement les styles de l'écran de connexion de /admin/devis,
// pour que toutes les pages admin (devis, carnets, futures...) soient identiques.
"use client";

import { useState, type ReactNode, type FormEvent } from "react";

const styles: Record<string, React.CSSProperties> = {
  authWrap: { minHeight: "100vh", background: "#f8f4ef", display: "flex", alignItems: "center", justifyContent: "center" },
  authCard: { background: "#fff", padding: "40px 48px", border: "1px solid #e8e0d6", maxWidth: 360, width: "100%", display: "flex", flexDirection: "column", gap: 16 },
  logo: { fontFamily: "Cormorant Garamond, serif", fontSize: 18, color: "#c8956c", letterSpacing: "0.05em", marginBottom: 4 },
  authTitle: { fontFamily: "Cormorant Garamond, serif", fontSize: 22, color: "#1a1512", textAlign: "center" },
  input: { width: "100%", padding: "10px 14px", border: "1px solid #e8e0d6", fontFamily: "Inter, sans-serif", fontSize: 14, color: "#1a1512", background: "#fafaf8", outline: "none", boxSizing: "border-box" },
  error: { fontFamily: "Inter, sans-serif", fontSize: 13, color: "#c0392b" },
  btnGold: { width: "100%", padding: "13px", background: "#c8956c", color: "#fff", border: "none", fontFamily: "Inter, sans-serif", fontSize: 12.5, fontWeight: 500, letterSpacing: "0.08em", textTransform: "uppercase", cursor: "pointer" },
};

export default function AdminAuthGate({
  onAuthenticated,
  children,
}: {
  onAuthenticated?: () => void;
  children: ReactNode;
}) {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  async function handleAuth(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuth(true);
      setAuthError("");
      onAuthenticated?.();
    } else {
      setAuthError("Mot de passe incorrect.");
    }
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
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            autoFocus
          />
          {authError && <div style={styles.error}>{authError}</div>}
          <button type="submit" style={styles.btnGold}>Accéder</button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
