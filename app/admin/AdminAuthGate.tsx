// app/admin/AdminAuthGate.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/AdminAuthGate.tsx
"use client";

import { useState, useEffect, type ReactNode, type FormEvent } from "react";
import adminStyles from "./adminStyles";

const SESSION_KEY = "mamzelles-admin-auth";

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
  const [checked, setChecked] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    const dejaConnecte = sessionStorage.getItem(SESSION_KEY) === "ok";
    if (dejaConnecte) {
      setAuth(true);
      onAuthenticated?.();
    }
    setChecked(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function handleAuth(e: FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      sessionStorage.setItem(SESSION_KEY, "ok");
      setAuth(true);
      setAuthError("");
      onAuthenticated?.();
    } else {
      setAuthError("Mot de passe incorrect.");
    }
  }

  if (!checked) return null;

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
