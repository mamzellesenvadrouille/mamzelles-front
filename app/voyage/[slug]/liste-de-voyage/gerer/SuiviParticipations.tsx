// app/voyage/[slug]/liste-de-voyage/gerer/SuiviParticipations.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/gerer/SuiviParticipations.tsx
//
// Suivi des participations pour les mariés : regroupées par cadeau dans
// l'ordre du carnet, avec une case "reçu" et un lien "Corriger" (montant à 0
// = participation retirée). Les invités ne voient jamais ces informations.
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { Contribution } from "@/lib/carnets";

const GOLD = "#c8956c";
const DARK = "#1a1512";
const CREAM = "#f8f4ef";
const LINE = "#e6ddd1";
const FUNDED = "#8a9a7e";

export interface GroupeParticipations {
  elementId: string;
  nom: string;
  prixIndicatif?: number;
  montantReuni: number;
  contributions: Contribution[];
}

export default function SuiviParticipations({ slug, groupesInitiaux }: { slug: string; groupesInitiaux: GroupeParticipations[] }) {
  const router = useRouter();
  const [groupes, setGroupes] = useState<GroupeParticipations[]>(groupesInitiaux);
  const [edition, setEdition] = useState<{ elementId: string; index: number } | null>(null);
  const [nouveauMontant, setNouveauMontant] = useState("");
  const [enCours, setEnCours] = useState(false);

  const toutes = groupes.flatMap((g) => g.contributions);
  const totalAnnonce = toutes.reduce((s, c) => s + c.montant, 0);
  const totalRecu = toutes.filter((c) => c.recu).reduce((s, c) => s + c.montant, 0);
  const groupesVisibles = groupes.filter((g) => g.contributions.length > 0);

  async function envoyer(elementId: string, index: number, modif: { montant?: number; recu?: boolean }) {
    const res = await fetch("/api/liste-de-voyage-contribution", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, elementId, index, ...modif }),
    });
    return res.ok;
  }

  // Applique localement la même modification que le serveur
  function appliquer(elementId: string, index: number, modif: { montant?: number; recu?: boolean }) {
    setGroupes((prev) =>
      prev.map((g) => {
        if (g.elementId !== elementId) return g;
        const contributions = [...g.contributions];
        const actuelle = contributions[index];
        if (!actuelle) return g;
        let delta = 0;
        const modifiee: Contribution = { ...actuelle };
        if (modif.recu !== undefined) modifiee.recu = modif.recu;
        if (modif.montant !== undefined) {
          delta = modif.montant - actuelle.montant;
          modifiee.montant = modif.montant;
        }
        if (modifiee.montant <= 0) contributions.splice(index, 1);
        else contributions[index] = modifiee;
        return { ...g, contributions, montantReuni: Math.max(0, g.montantReuni + delta) };
      })
    );
  }

  async function basculerRecu(elementId: string, index: number, recu: boolean) {
    appliquer(elementId, index, { recu }); // optimiste
    const ok = await envoyer(elementId, index, { recu }).catch(() => false);
    if (!ok) appliquer(elementId, index, { recu: !recu });
  }

  function ouvrirCorrection(elementId: string, index: number, montant: number) {
    setEdition({ elementId, index });
    setNouveauMontant(String(montant));
  }

  async function enregistrerCorrection() {
    if (!edition) return;
    const valeur = Number(nouveauMontant);
    if (!Number.isFinite(valeur) || valeur < 0) return;
    setEnCours(true);
    const ok = await envoyer(edition.elementId, edition.index, { montant: valeur }).catch(() => false);
    setEnCours(false);
    if (ok) {
      appliquer(edition.elementId, edition.index, { montant: valeur });
      setEdition(null);
      router.refresh(); // met à jour les barres et le total du reste de la page
    }
  }

  return (
    <div style={{ padding: "26px 18px 22px", borderTop: `1px solid ${LINE}` }}>
      <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600, marginBottom: 6, padding: "0 4px" }}>
        Participations
      </h2>
      <p style={{ fontSize: 13, color: "#8a7f74", lineHeight: 1.5, marginBottom: 18, padding: "0 4px" }}>
        Cochez quand l&apos;argent est arrivé sur votre compte.
        <br />« Corriger » permet de changer un montant.
      </p>

      <div style={{ display: "flex", gap: 10, marginBottom: 6, padding: "0 4px" }}>
        {[
          { label: "Annoncé", valeur: totalAnnonce, couleur: DARK },
          { label: "Reçu", valeur: totalRecu, couleur: FUNDED },
        ].map((t) => (
          <div key={t.label} style={{ flex: 1, border: `1px solid ${LINE}`, borderRadius: 6, padding: "10px 12px", background: CREAM }}>
            <div style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a89a8c", marginBottom: 3 }}>
              {t.label}
            </div>
            <div style={{ fontSize: 18, fontWeight: 600, color: t.couleur, fontVariantNumeric: "tabular-nums" }}>{t.valeur} €</div>
          </div>
        ))}
      </div>

      {groupesVisibles.length === 0 && (
        <div style={{ fontSize: 13, color: "#a89a8c", padding: "16px 4px 0" }}>Pas encore de participation.</div>
      )}

      {groupesVisibles.map((g) => (
        <div key={g.elementId} style={{ padding: "0 4px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: 12,
              margin: "20px 0 2px",
              paddingBottom: 6,
              borderBottom: `1px solid ${LINE}`,
            }}
          >
            <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 19, fontWeight: 500 }}>{g.nom}</div>
            <div style={{ fontSize: 12, color: "#8a7f74", whiteSpace: "nowrap" }}>
              {g.prixIndicatif != null ? `${g.montantReuni} € sur ${g.prixIndicatif} €` : `${g.montantReuni} €`}
            </div>
          </div>

          {g.contributions.map((c, index) => {
            const enEdition = edition?.elementId === g.elementId && edition.index === index;
            return (
              <div key={`${index}-${c.date ?? ""}-${c.prenom ?? ""}`}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 12,
                    padding: "10px 0",
                    borderBottom: `1px solid #efe7dd`,
                    fontSize: 13,
                  }}
                >
                  <label style={{ display: "flex", alignItems: "center", gap: 12, flex: 1, minWidth: 0, cursor: "pointer" }}>
                    <input
                      type="checkbox"
                      checked={!!c.recu}
                      onChange={(e) => basculerRecu(g.elementId, index, e.target.checked)}
                      style={{ width: 18, height: 18, accentColor: FUNDED, flexShrink: 0, cursor: "pointer" }}
                    />
                    <span style={{ fontWeight: 600, color: DARK, overflow: "hidden", textOverflow: "ellipsis" }}>
                      {c.prenom || "Anonyme"}
                    </span>
                  </label>
                  <span style={{ fontWeight: 600, fontVariantNumeric: "tabular-nums", whiteSpace: "nowrap" }}>{c.montant} €</span>
                  <button
                    type="button"
                    onClick={() => (enEdition ? setEdition(null) : ouvrirCorrection(g.elementId, index, c.montant))}
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                      fontWeight: 600,
                      color: GOLD,
                      background: "none",
                      border: "none",
                      padding: 0,
                      textDecoration: "underline",
                      textUnderlineOffset: 3,
                      cursor: "pointer",
                    }}
                  >
                    Corriger
                  </button>
                </div>

                {enEdition && (
                  <div
                    style={{
                      background: CREAM,
                      border: `1px solid ${LINE}`,
                      borderRadius: 6,
                      padding: "12px 14px",
                      margin: "8px 0 6px",
                      display: "flex",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 10,
                      fontSize: 12.5,
                    }}
                  >
                    <span style={{ color: "#6b5a4c" }}>Nouveau montant</span>
                    <input
                      type="number"
                      min={0}
                      value={nouveauMontant}
                      onChange={(e) => setNouveauMontant(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") enregistrerCorrection();
                      }}
                      style={{
                        width: 80,
                        height: 30,
                        boxSizing: "border-box",
                        border: `1px solid ${LINE}`,
                        borderRadius: 4,
                        background: "#fff",
                        padding: "0 10px",
                        fontFamily: "Inter, sans-serif",
                        fontSize: 12.5,
                        color: DARK,
                        outline: "none",
                      }}
                    />
                    <button
                      type="button"
                      onClick={enregistrerCorrection}
                      disabled={enCours}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11.5,
                        fontWeight: 600,
                        color: "#fff",
                        background: GOLD,
                        border: "none",
                        borderRadius: 14,
                        padding: "6px 13px",
                        cursor: "pointer",
                        opacity: enCours ? 0.7 : 1,
                      }}
                    >
                      {enCours ? "..." : "Enregistrer"}
                    </button>
                    <button
                      type="button"
                      onClick={() => setEdition(null)}
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 11.5,
                        color: "#a89a8c",
                        background: "none",
                        border: "none",
                        padding: 0,
                        textDecoration: "underline",
                        textUnderlineOffset: 3,
                        cursor: "pointer",
                      }}
                    >
                      Annuler
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
