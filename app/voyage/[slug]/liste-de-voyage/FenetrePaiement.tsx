// app/voyage/[slug]/liste-de-voyage/FenetrePaiement.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/FenetrePaiement.tsx
//
// Fenêtre ouverte quand un invité clique sur "Participer" : elle rappelle le
// montant et le cadeau, puis affiche les coordonnées des mariés (virement,
// Wero, et la cagnotte en ligne si un lien est renseigné). Le clic sur
// "J'ai fait mon virement" (ou équivalent) enregistre la participation.
"use client";

import { useEffect, useState } from "react";
import type { InfosPaiementListe } from "@/lib/carnets";

const GOLD = "#c8956c";
const DARK = "#1a1512";
const LINE = "#e6ddd1";
const CREAM = "#f8f4ef";

type Onglet = "virement" | "wero" | "cagnotte";

// Affiche l'IBAN par groupes de 4 caractères, plus lisible
function formaterIban(iban: string) {
  return iban.replace(/\s+/g, "").toUpperCase().replace(/(.{4})/g, "$1 ").trim();
}

function Champ({ label, valeur, aCopier }: { label: string; valeur: string; aCopier?: string }) {
  const [copie, setCopie] = useState(false);

  async function copier() {
    try {
      await navigator.clipboard.writeText(aCopier ?? valeur);
      setCopie(true);
      setTimeout(() => setCopie(false), 2000);
    } catch {
      // presse-papiers indisponible : l'invité peut toujours recopier à la main
    }
  }

  return (
    <div
      style={{
        border: `1px solid ${LINE}`,
        borderRadius: 6,
        background: CREAM,
        padding: "10px 12px",
        marginBottom: 9,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: 10,
      }}
    >
      <div style={{ minWidth: 0 }}>
        <div style={{ fontSize: 10.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a89a8c", marginBottom: 3 }}>
          {label}
        </div>
        <div style={{ fontSize: 13.5, fontWeight: 500, color: DARK, fontVariantNumeric: "tabular-nums", wordBreak: "break-word" }}>
          {valeur}
        </div>
      </div>
      {aCopier !== undefined && (
        <button
          type="button"
          onClick={copier}
          style={{
            flexShrink: 0,
            fontFamily: "Inter, sans-serif",
            fontSize: 11.5,
            fontWeight: 600,
            color: copie ? "#8a9a7e" : GOLD,
            border: `1px solid ${copie ? "#c9d3c1" : "#e3cdb7"}`,
            borderRadius: 14,
            padding: "5px 11px",
            background: "#fff",
            cursor: "pointer",
            whiteSpace: "nowrap",
          }}
        >
          {copie ? "✓ Copié" : "Copier"}
        </button>
      )}
    </div>
  );
}

export default function FenetrePaiement({
  montant,
  nomCadeau,
  paiement,
  enCours,
  onConfirme,
  onFermer,
}: {
  montant: number;
  nomCadeau: string;
  paiement: InfosPaiementListe;
  enCours: boolean;
  onConfirme: () => void;
  onFermer: () => void;
}) {
  const onglets: { id: Onglet; label: string }[] = [];
  if (paiement.iban) onglets.push({ id: "virement", label: "Par virement" });
  if (paiement.wero) onglets.push({ id: "wero", label: "Par Wero" });
  if (paiement.cagnotteUrl) onglets.push({ id: "cagnotte", label: "Cagnotte en ligne" });

  const [onglet, setOnglet] = useState<Onglet>(onglets[0]?.id ?? "virement");

  // Fermeture avec la touche Échap + blocage du défilement de la page derrière
  useEffect(() => {
    const surTouche = (e: KeyboardEvent) => {
      if (e.key === "Escape") onFermer();
    };
    window.addEventListener("keydown", surTouche);
    const overflowAvant = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", surTouche);
      document.body.style.overflow = overflowAvant;
    };
  }, [onFermer]);

  const libelleBouton =
    onglet === "virement" ? "J'ai fait mon virement" : onglet === "wero" ? "J'ai fait mon Wero" : "J'ai participé";

  return (
    <div
      onClick={onFermer}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1000,
        background: "rgba(26, 21, 18, 0.45)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 16,
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: 420,
          maxHeight: "calc(100vh - 32px)",
          overflowY: "auto",
          background: "#fffdfa",
          borderRadius: 10,
          padding: "26px 24px 22px",
          boxShadow: "0 20px 50px rgba(26, 21, 18, 0.25)",
          fontFamily: "Inter, sans-serif",
          color: DARK,
        }}
      >
        <button
          type="button"
          onClick={onFermer}
          aria-label="Fermer"
          style={{
            position: "absolute",
            top: 10,
            right: 12,
            width: 32,
            height: 32,
            border: "none",
            background: "none",
            fontSize: 22,
            lineHeight: 1,
            color: "#a89a8c",
            cursor: "pointer",
          }}
        >
          ×
        </button>

        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500, lineHeight: 1.1, marginBottom: 6, paddingRight: 24 }}>
          Votre participation&nbsp;:{" "}
          <em style={{ color: GOLD, whiteSpace: "nowrap", fontVariantNumeric: "lining-nums" }}>{montant}&nbsp;€</em>
        </div>
        <div style={{ fontSize: 13, color: "#6b5a4c", lineHeight: 1.5, marginBottom: 18 }}>Pour « {nomCadeau} »</div>

        {onglets.length > 1 && (
          <div style={{ display: "flex", borderBottom: `1px solid ${LINE}`, marginBottom: 16 }}>
            {onglets.map((o) => (
              <button
                key={o.id}
                type="button"
                onClick={() => setOnglet(o.id)}
                style={{
                  flex: 1,
                  fontFamily: "Inter, sans-serif",
                  fontSize: 12.5,
                  fontWeight: 600,
                  padding: "10px 0",
                  background: "none",
                  border: "none",
                  borderBottom: onglet === o.id ? `2px solid ${GOLD}` : "2px solid transparent",
                  marginBottom: -1,
                  color: onglet === o.id ? DARK : "#a89a8c",
                  cursor: "pointer",
                }}
              >
                {o.label}
              </button>
            ))}
          </div>
        )}

        {onglet === "virement" && paiement.iban && (
          <>
            {paiement.titulaire && <Champ label="Titulaire" valeur={paiement.titulaire} />}
            <Champ label="IBAN" valeur={formaterIban(paiement.iban)} aCopier={paiement.iban.replace(/\s+/g, "")} />
          </>
        )}

        {onglet === "wero" && paiement.wero && <Champ label="Numéro Wero" valeur={paiement.wero} aCopier={paiement.wero.replace(/\s+/g, "")} />}

        {onglet === "cagnotte" && paiement.cagnotteUrl && (
          <a
            href={paiement.cagnotteUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              fontSize: 13,
              fontWeight: 600,
              color: GOLD,
              border: `1px solid #e3cdb7`,
              borderRadius: 6,
              padding: "12px 14px",
              background: CREAM,
              textDecoration: "none",
            }}
          >
            Ouvrir la cagnotte ↗
          </a>
        )}

        <div style={{ display: "flex", justifyContent: "flex-end", marginTop: 18 }}>
          <button
            type="button"
            onClick={onConfirme}
            disabled={enCours}
            style={{
              height: 36,
              fontFamily: "Inter, sans-serif",
              fontSize: 12,
              fontWeight: 600,
              background: GOLD,
              color: "#fff",
              border: "none",
              padding: "0 16px",
              borderRadius: 20,
              whiteSpace: "nowrap",
              cursor: "pointer",
              boxShadow: "0 3px 10px rgba(200, 149, 108, 0.3)",
              opacity: enCours ? 0.7 : 1,
            }}
          >
            {enCours ? "..." : libelleBouton}
          </button>
        </div>
      </div>
    </div>
  );
}
