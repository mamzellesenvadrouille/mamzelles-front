// app/admin/carnets/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/carnets/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import type { Carnet } from "@/lib/carnets";
import AdminAuthGate from "../AdminAuthGate";
import adminStyles from "../adminStyles";

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
    <AdminAuthGate onAuthenticated={chargerCarnets} label="Carnets">
      <div style={adminStyles.wrap}>
        <div style={{ ...adminStyles.card, maxWidth: 900 }}>
          <div style={adminStyles.header}>
            <div>
              <div style={adminStyles.logo}>MamZelles en vadrouille</div>
              <div style={adminStyles.title}>Carnets</div>
            </div>
            <Link
              href="/admin/carnets/nouveau"
              style={{ ...adminStyles.btnGold, textDecoration: "none", display: "inline-block", padding: "9px 16px", fontSize: 11 }}
            >
              + Nouveau carnet
            </Link>
          </div>

          {loading && <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#888" }}>Chargement...</p>}
          {!loading && carnets.length === 0 && (
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#888" }}>Aucun carnet pour l&apos;instant.</p>
          )}

          {carnets.length > 0 && (
            <table style={adminStyles.table}>
              <thead>
                <tr>
                  <th style={adminStyles.th}>Client</th>
                  <th style={adminStyles.th}>Destination</th>
                  <th style={adminStyles.th}>Dates</th>
                  <th style={adminStyles.th}>Lien</th>
                  <th style={adminStyles.th}></th>
                </tr>
              </thead>
              <tbody>
                {carnets.map((c, i) => (
                  <tr key={c.slug} style={i % 2 === 0 ? adminStyles.trOdd : adminStyles.trEven}>
                    <td style={adminStyles.td}>{c.client?.prenoms}</td>
                    <td style={adminStyles.td}>{c.destination}</td>
                    <td style={adminStyles.td}>{c.dates?.debut} → {c.dates?.fin}</td>
                    <td style={adminStyles.td}>
                      <Link href={`/voyage/${c.slug}`} target="_blank" style={{ ...adminStyles.btnLinks, width: 60, textAlign: "center" }}>
                        Voir
                      </Link>
                    </td>
                    <td style={adminStyles.td}>
                      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
                        <Link href={`/admin/carnets/${c.slug}`} style={{ ...adminStyles.btnLinks, width: 60, textAlign: "center" }}>
                          Éditer
                        </Link>
                        <button onClick={() => supprimer(c.slug)} style={adminStyles.btnDelete} title="Supprimer">
                          ✕
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </AdminAuthGate>
  );
}
