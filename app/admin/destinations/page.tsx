// app/admin/destinations/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/destinations/page.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import type { Destination } from "@/lib/carnets";
import AdminAuthGate from "../AdminAuthGate";
import adminStyles from "../adminStyles";

export default function AdminDestinationsPage() {
  const [destinations, setDestinations] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(true);

  function charger() {
    fetch("/api/destination-list")
      .then((r) => r.json())
      .then((data) => setDestinations(data.destinations ?? []))
      .finally(() => setLoading(false));
  }

  async function supprimer(id: string, nom: string) {
    if (!confirm(`Supprimer la fiche "${nom}" ? Elle sera retirée de tous les carnets qui l'utilisent.`)) return;
    await fetch("/api/destination-delete", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });
    setDestinations((prev) => prev.filter((d) => d.id !== id));
  }

  return (
    <AdminAuthGate onAuthenticated={charger} label="Destinations">
      <div style={adminStyles.wrap}>
        <div style={{ ...adminStyles.card, maxWidth: 900 }}>
          <div style={adminStyles.header}>
            <div>
              <div style={adminStyles.logo}>MamZelles en vadrouille</div>
              <div style={adminStyles.title}>Destinations</div>
            </div>
            <Link
              href="/admin/destinations/nouvelle"
              style={{ ...adminStyles.btnGold, textDecoration: "none", display: "inline-block", padding: "9px 16px", fontSize: 11 }}
            >
              + Nouvelle destination
            </Link>
          </div>

          {loading && <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#888" }}>Chargement...</p>}
          {!loading && destinations.length === 0 && (
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: "#888" }}>Aucune fiche destination pour l&apos;instant.</p>
          )}

          {destinations.length > 0 && (
            <table style={adminStyles.table}>
              <thead>
                <tr>
                  <th style={adminStyles.th}>Nom</th>
                  <th style={adminStyles.th}>Hébergements</th>
                  <th style={adminStyles.th}>Restaurants</th>
                  <th style={adminStyles.th}>Activités</th>
                  <th style={adminStyles.th}>Lien</th>
                </tr>
              </thead>
              <tbody>
                {destinations.map((d, i) => (
                  <tr key={d.id} style={i % 2 === 0 ? adminStyles.trOdd : adminStyles.trEven}>
                    <td style={adminStyles.td}>{d.nom}</td>
                    <td style={adminStyles.td}>{d.hebergements?.length ?? 0}</td>
                    <td style={adminStyles.td}>{d.restaurants?.length ?? 0}</td>
                    <td style={adminStyles.td}>{d.activites?.length ?? 0}</td>
                    <td style={adminStyles.td}>
                      <div style={{ display: "flex", gap: 6, alignItems: "center" }}>
                        <Link href={`/admin/destinations/${d.id}`} style={{ ...adminStyles.btnLinks, width: 76, textAlign: "center" }}>
                          Éditer
                        </Link>
                        <button onClick={() => supprimer(d.id, d.nom)} style={adminStyles.btnDelete} title="Supprimer">
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
