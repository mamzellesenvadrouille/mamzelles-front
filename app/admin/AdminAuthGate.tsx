// app/admin/AdminAuthGate.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/AdminAuthGate.tsx
"use client";

import { useState, useEffect, type ReactNode, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import adminStyles from "./adminStyles";

// Variable en mémoire (pas sessionStorage) : elle survit quand on navigue
// d'une page admin à une autre en cliquant sur des liens (la page ne
// recharge pas, donc cette variable reste en vie), mais elle repart à
// zéro si la page est rechargée pour de vrai (F5) — puisque tout le
// JavaScript se réexécute depuis le début dans ce cas.
let dejaConnecteeCetteSession = false;

export default function AdminAuthGate({
  onAuthenticated,
  children,
  label,
  redirectAfterLoginTo,
}: {
  onAuthenticated?: () => void;
  children: ReactNode;
  label?: string;
  // Si fourni, après connexion on redirige vers cette page (ex: la liste)
  // plutôt que d'afficher le contenu de la page actuelle.
  redirectAfterLoginTo?: string;
}) {
  const router = useRouter();
  const [auth, setAuth] = useState(dejaConnecteeCetteSession);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    if (dejaConnecteeCetteSession) {
      onAuthenticated?.();
    }
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
      dejaConnecteeCetteSession = true;
      setAuthError("");
      if (redirectAfterLoginTo) {
        router.push(redirectAfterLoginTo);
      } else {
        setAuth(true);
        onAuthenticated?.();
      }
    } else {
      setAuthError("Mot de passe incorrect.");
    }
  }

  if (!auth) {
    return (
      <div style={adminStyles.authWrap}>
        <form onSubmit={handleAuth} style={adminStyles.authCard}>
          <div style={adminStyles.logo}>MamZelles en Vadrouille</div>
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
