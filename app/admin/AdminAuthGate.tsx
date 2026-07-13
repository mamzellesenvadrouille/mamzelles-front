// app/admin/AdminAuthGate.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/AdminAuthGate.tsx
"use client";

import { useState, type ReactNode, type FormEvent } from "react";
import adminStyles from "./adminStyles";

export default function AdminAuthGate({
  onAuthenticated,
  children,
  label,
}: {
  onAuthenticated?: () => void;
  children: ReactNode;
  label?: string;
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
      <div style={adminStyles.authWrap}>
        <form onSubmit={handleAuth} style={adminStyles.authCard}>
          <div style={adminStyles.logo}>MamZelles en vadrouille</div>
          <div style={adminStyles.authTitle}>Espace admin{label ? ` — ${label}` : ""}</div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={adminStyles.input}
            autoFocus
          />
          {authError && <div style={adminStyles.error}>{authError}</div>}
          <button type="submit" style={adminStyles.btnGoldFull}>Accéder</button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
}
