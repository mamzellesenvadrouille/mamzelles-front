// app/admin/carnets/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/carnets/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import type { Carnet } from "@/lib/carnets";
import AdminAuthGate from "../AdminAuthGate";

export default function AdminCarnetsPage() {
  const [carnets, setCarnets] = useState<Carnet[]>([]);
  const [loading, setLoading] = useState(true);

  function chargerCarnets() {
    fetch("/api/carnet-list")
      .then((r) => r.json())
      .then((data) => setCarnets(data.carnets ?? []))
      .finally(() => setLoading(false));
  }

  async function supprimer(slug: string) {
    if (!confirm(`Supprimer le carnet "${slug}" ? Cette action est irréversible.`)) return;
    await fetch("/api/carnet-delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    setCarnets((prev) => prev.filter((c) => c.slug !== slug));
  }

  return (
    <AdminAuthGate onAuthenticated={chargerCarnets}>
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
    </AdminAuthGate>
  );
}
