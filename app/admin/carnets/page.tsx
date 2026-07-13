// app/admin/carnets/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/carnets/page.tsx
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { Carnet } from "@/lib/carnets";

export default function AdminCarnetsPage() {
  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");
  const [carnets, setCarnets] = useState<Carnet[]>([]);
  const [loading, setLoading] = useState(true);

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuth(true);
      setAuthError("");
    } else {
      setAuthError("Mot de passe incorrect.");
    }
  }

  useEffect(() => {
    if (!auth) return;
    fetch("/api/carnet-list")
      .then((r) => r.json())
      .then((data) => setCarnets(data.carnets ?? []))
      .finally(() => setLoading(false));
  }, [auth]);

  async function supprimer(slug: string) {
    if (!confirm(`Supprimer le carnet "${slug}" ? Cette action est irréversible.`)) return;
    await fetch("/api/carnet-delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    setCarnets((prev) => prev.filter((c) => c.slug !== slug));
  }

  if (!auth) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f4ef" }}>
        <form
          onSubmit={handleAuth}
          style={{ background: "#fff", padding: "40px 36px", borderRadius: 8, boxShadow: "0 4px 24px rgba(26,21,18,0.08)", width: 320, textAlign: "center" }}
        >
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, letterSpacing: ".04em", color: "#a8734c", marginBottom: 4 }}>
            MamZelles en vadrouille
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, marginBottom: 20 }}>Espace admin</div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 4, fontSize: 14, marginBottom: 10, fontFamily: "Inter, sans-serif" }}
          />
          {authError && <div style={{ color: "#b33", fontSize: 13, marginBottom: 10 }}>{authError}</div>}
          <button
            type="submit"
            style={{ width: "100%", background: "#c8956c", color: "#fff", padding: "10px 20px", borderRadius: 4, border: "none", fontSize: 14, cursor: "pointer", fontFamily: "Inter, sans-serif" }}
          >
            Accéder
          </button>
        </form>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32 }}>Carnets MamZelles</h1>
        <Link
          href="/admin/carnets/nouveau"
          style={{ background: "#1a1512", color: "#fff", padding: "10px 20px", borderRadius: 4, textDecoration: "none", fontSize: 14 }}
        >
          + Nouveau carnet
        </Link>
      </div>

      {loading && <p>Chargement...</p>}
      {!loading && carnets.length === 0 && <p>Aucun carnet pour l'instant.</p>}

      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {carnets.map((c) => (
          <div
            key={c.slug}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 20px",
              border: "1px solid #eee",
              borderRadius: 6,
            }}
          >
            <div>
              <strong>{c.client?.prenoms}</strong> — {c.destination}
              <div style={{ fontSize: 13, color: "#888" }}>
                /voyage/{c.slug} · {c.dates?.debut} → {c.dates?.fin}
              </div>
            </div>
            <div style={{ display: "flex", gap: 8 }}>
              <Link href={`/voyage/${c.slug}`} target="_blank" style={{ fontSize: 13, color: "#a8734c" }}>
                Voir
              </Link>
              <Link href={`/admin/carnets/${c.slug}`} style={{ fontSize: 13, color: "#a8734c" }}>
                Éditer
              </Link>
              <button
                onClick={() => supprimer(c.slug)}
                style={{ fontSize: 13, color: "#b33", background: "none", border: "none", cursor: "pointer" }}
              >
                Supprimer
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
