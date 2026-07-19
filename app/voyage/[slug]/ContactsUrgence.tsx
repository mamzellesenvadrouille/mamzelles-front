// app/voyage/[slug]/ContactsUrgence.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ContactsUrgence.tsx
//
// Affiche les contacts d'urgence prévus dans le carnet + permet au client
// d'ajouter les siens (ex : un proche à prévenir). Sauvegardé côté serveur,
// partagé entre tous ses appareils.
"use client";

import { useState } from "react";
import type { ContactUrgence } from "@/lib/carnets";
import styles from "./carnet.module.css";

async function sauvegarder(slug: string, contactsCustom: { label: string; valeur: string }[]) {
  try {
    await fetch("/api/carnet-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, progress: { contactsCustom } }),
    });
  } catch {
    // pas grave si la sauvegarde échoue ponctuellement
  }
}

export default function ContactsUrgence({
  contacts,
  slug,
  contactsCustomInitiaux,
}: {
  contacts: ContactUrgence[];
  slug: string;
  contactsCustomInitiaux: { label: string; valeur: string }[];
}) {
  const [custom, setCustom] = useState(contactsCustomInitiaux);
  const [nouveauLabel, setNouveauLabel] = useState("");
  const [nouvelleValeur, setNouvelleValeur] = useState("");

  function ajouter() {
    if (!nouveauLabel.trim() || !nouvelleValeur.trim()) return;
    const next = [...custom, { label: nouveauLabel.trim(), valeur: nouvelleValeur.trim() }];
    setCustom(next);
    sauvegarder(slug, next);
    setNouveauLabel("");
    setNouvelleValeur("");
  }

  function supprimer(i: number) {
    const next = custom.filter((_, idx) => idx !== i);
    setCustom(next);
    sauvegarder(slug, next);
  }

  return (
    <div>
      <div className={styles.practicalBox}>
        {contacts.map((c, i) => (
          <p key={`base-${i}`}>
            <strong>{c.label} :</strong> {c.valeur}
          </p>
        ))}
        {custom.map((c, i) => (
          <p key={`custom-${i}`} style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ flex: 1 }}>
              <strong>{c.label} :</strong> {c.valeur}{" "}
              <span style={{ fontSize: 10.5, color: "#c8956c" }}>(ajouté par vous)</span>
            </span>
            <button
              onClick={() => supprimer(i)}
              style={{ background: "none", border: "none", color: "#c0392b", cursor: "pointer", fontSize: 13 }}
              title="Retirer"
            >
              ✕
            </button>
          </p>
        ))}
      </div>

      <div style={{ marginTop: 16, display: "flex", gap: 8, flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="Nom (ex : Ma sœur)"
          value={nouveauLabel}
          onChange={(e) => setNouveauLabel(e.target.value)}
          style={{
            flex: 1,
            minWidth: 120,
            height: 38,
            padding: "0 12px",
            fontSize: 13,
            borderRadius: 3,
            fontFamily: "Inter, sans-serif",
            border: "1px solid #e8e0d6",
            outline: "none",
            background: "#fff",
            boxSizing: "border-box",
          }}
        />
        <input
          type="tel"
          placeholder="Numéro de téléphone"
          value={nouvelleValeur}
          onChange={(e) => setNouvelleValeur(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && ajouter()}
          style={{
            flex: 1,
            minWidth: 120,
            height: 38,
            padding: "0 12px",
            fontSize: 13,
            borderRadius: 3,
            fontFamily: "Inter, sans-serif",
            border: "1px solid #e8e0d6",
            outline: "none",
            background: "#fff",
            boxSizing: "border-box",
          }}
        />
        <button
          onClick={ajouter}
          style={{
            fontSize: 12,
            fontWeight: 600,
            color: "#fff",
            background: "#c8956c",
            border: "none",
            height: 38,
            padding: "0 12px",
            margin: 0,
            borderRadius: 3,
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            boxSizing: "border-box",
            WebkitAppearance: "none",
            appearance: "none",
            lineHeight: "normal",
            fontFamily: "Inter, sans-serif",
          }}
        >
          Ajouter
        </button>
      </div>
    </div>
  );
}
