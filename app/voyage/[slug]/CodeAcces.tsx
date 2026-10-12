// app/voyage/[slug]/CodeAcces.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/CodeAcces.tsx
//
// Écran affiché à la place du carnet (ou de la page "Gérer" de la Liste de
// Voyage) tant que le bon code n'a pas été entré sur cet appareil.
// Le champ est un vrai champ "mot de passe" : le téléphone propose de
// l'enregistrer dans le trousseau et le remplit tout seul la fois suivante.
"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";

const GOLD = "#c8956c";
const DARK = "#1a1512";
const CREAM = "#f8f4ef";

const TEXTES = {
  carnet: {
    surTitre: "Carnet de voyage",
    titre: "Bienvenue",
    titreAccent: "à bord",
    consigne: "Entrez le code reçu avec votre lien pour ouvrir votre carnet.",
    bouton: "Ouvrir mon carnet",
  },
  liste: {
    surTitre: "La Liste de Voyage",
    titre: "Gérez",
    titreAccent: "votre liste",
    consigne: "Entrez le code reçu avec votre carnet.",
    bouton: "Accéder à ma liste",
  },
};

export default function CodeAcces({
  slug,
  prenoms,
  variante,
}: {
  slug: string;
  prenoms: string;
  variante: "carnet" | "liste";
}) {
  const router = useRouter();
  const t = TEXTES[variante];
  const [code, setCode] = useState("");
  const [erreur, setErreur] = useState(false);
  const [enCours, setEnCours] = useState(false);

  async function valider(e: FormEvent) {
    e.preventDefault();
    if (!code.trim()) return;
    setEnCours(true);
    setErreur(false);
    try {
      const res = await fetch("/api/carnet-acces", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, code }),
      });
      if (res.ok) {
        router.refresh();
        return;
      }
      setErreur(true);
    } catch {
      setErreur(true);
    }
    setEnCours(false);
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: CREAM,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "48px 24px",
        fontFamily: "Inter, sans-serif",
        color: DARK,
      }}
    >
      <form onSubmit={valider} style={{ width: "100%", maxWidth: 380, textAlign: "center" }}>
        <img src="/icon.png" alt="MamZelles en Vadrouille" width={64} height={64} style={{ display: "block", margin: "0 auto 22px" }} />
        <div style={{ fontSize: 11, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", color: "#8a5f3d", marginBottom: 10 }}>
          {t.surTitre}
        </div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: 34, lineHeight: 1.1, marginBottom: 6 }}>
          {t.titre} <em style={{ color: GOLD }}>{t.titreAccent}</em>
        </h1>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#a8764f", marginBottom: 26 }}>
          {prenoms}
        </div>
        <p style={{ fontSize: 13.5, color: "#6b5a4c", lineHeight: 1.55, margin: "0 auto 22px", maxWidth: 300 }}>{t.consigne}</p>

        {/* Identifiant caché : permet au trousseau du téléphone d'associer le code à ce carnet */}
        <input type="text" name="username" autoComplete="username" value={slug} readOnly hidden />
        <input
          type="password"
          name="password"
          autoComplete="current-password"
          value={code}
          onChange={(e) => {
            setCode(e.target.value);
            if (erreur) setErreur(false);
          }}
          aria-label="Code d'accès"
          autoFocus
          style={{
            display: "block",
            width: 220,
            height: 46,
            margin: "0 auto 14px",
            boxSizing: "border-box",
            border: `1px solid ${erreur ? GOLD : "#d9c3ad"}`,
            borderRadius: 6,
            background: "#fff",
            textAlign: "center",
            fontFamily: "Inter, sans-serif",
            fontSize: 18,
            letterSpacing: "0.35em",
            color: DARK,
            outline: "none",
          }}
        />
        <button
          type="submit"
          disabled={enCours}
          style={{
            height: 38,
            padding: "0 22px",
            border: "none",
            borderRadius: 20,
            background: GOLD,
            color: "#fff",
            fontFamily: "Inter, sans-serif",
            fontSize: 12.5,
            fontWeight: 600,
            cursor: "pointer",
            boxShadow: "0 3px 10px rgba(200, 149, 108, 0.3)",
            opacity: enCours ? 0.7 : 1,
          }}
        >
          {enCours ? "..." : t.bouton}
        </button>
        {erreur && (
          <p style={{ fontSize: 12.5, color: "#a8764f", marginTop: 12 }}>Ce code ne correspond pas. Vérifiez-le et réessayez.</p>
        )}
        <p style={{ fontSize: 11.5, color: "#a89a8c", marginTop: 26, lineHeight: 1.5 }}>
          Code oublié ? Écrivez-nous via le{" "}
          <a href="/formules#formulaire" style={{ color: "#a89a8c" }}>
            formulaire de contact
          </a>
          ,<br />
          on vous le renvoie.
        </p>
      </form>
    </div>
  );
}
