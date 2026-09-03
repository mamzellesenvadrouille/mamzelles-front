// app/voyage/[slug]/liste-de-voyage/gerer/GererCadeaux.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/gerer/GererCadeaux.tsx
"use client";

import { useState } from "react";
import type { CSSProperties } from "react";
import type { ElementCadeauCustom } from "@/lib/carnets";

export default function GererCadeaux({
  slug,
  cadeauxInitiaux,
}: {
  slug: string;
  cadeauxInitiaux: ElementCadeauCustom[];
}) {
  const [cadeaux, setCadeaux] = useState<ElementCadeauCustom[]>(cadeauxInitiaux);
  const [ouvert, setOuvert] = useState(false);
  const [nom, setNom] = useState("");
  const [description, setDescription] = useState("");
  const [prix, setPrix] = useState("");
  const [url, setUrl] = useState("");
  const [enCours, setEnCours] = useState(false);

  async function ajouter() {
    if (!nom.trim()) return;
    setEnCours(true);
    try {
      const res = await fetch("/api/liste-de-voyage-cadeaux", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          slug,
          nom: nom.trim(),
          description: description.trim() || undefined,
          prixIndicatif: prix ? Number(prix) : undefined,
          url: url.trim() || undefined,
        }),
      });
      const data = await res.json();
      if (data.listeVoyageCadeaux) {
        setCadeaux(data.listeVoyageCadeaux);
        setNom("");
        setDescription("");
        setPrix("");
        setUrl("");
        setOuvert(false);
      }
    } catch {
      // pas grave, l'utilisateur peut réessayer
    } finally {
      setEnCours(false);
    }
  }

  async function supprimer(id: string) {
    setCadeaux((prev) => prev.filter((c) => c.id !== id)); // optimiste
    try {
      const res = await fetch("/api/liste-de-voyage-cadeaux", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, id }),
      });
      const data = await res.json();
      if (data.listeVoyageCadeaux) setCadeaux(data.listeVoyageCadeaux);
    } catch {
      // en cas d'échec, l'élément reste retiré visuellement jusqu'au prochain chargement
    }
  }

  return (
    <div style={{ padding: "16px 24px 22px", borderTop: "1px solid #e6ddd1" }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "#a89a8c", marginBottom: 8 }}>
        Vos idées de cadeaux
      </div>

      {cadeaux.map((c) => (
        <div key={c.id} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 4px", fontSize: 14 }}>
          <div>
            <div style={{ color: "#1a1512" }}>{c.nom}</div>
            {c.description && <div style={{ fontSize: 12.5, color: "#8a7f74" }}>{c.description}</div>}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span style={{ color: "#6b6158" }}>{c.prixIndicatif != null ? `${c.prixIndicatif} €` : ""}</span>
            <button
              onClick={() => supprimer(c.id)}
              aria-label="Supprimer"
              style={{ background: "none", border: "none", color: "#c4b8ab", fontSize: 18, lineHeight: 1, cursor: "pointer" }}
            >
              ×
            </button>
          </div>
        </div>
      ))}

      {!ouvert ? (
        <button
          onClick={() => setOuvert(true)}
          style={{
            display: "block",
            width: "100%",
            marginTop: 10,
            fontFamily: "Inter, sans-serif",
            fontSize: 13,
            fontWeight: 500,
            color: "#c8956c",
            background: "transparent",
            border: "1px dashed #e4c9ae",
            borderRadius: 4,
            padding: "10px 14px",
            cursor: "pointer",
          }}
        >
          + Ajouter une idée de cadeau
        </button>
      ) : (
        <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
          <input
            placeholder="Nom (ex : Sac à dos de randonnée)"
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            style={champStyle}
          />
          <input
            placeholder="Description (optionnel)"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            style={champStyle}
          />
          <input
            type="number"
            placeholder="Prix indicatif €"
            value={prix}
            onChange={(e) => setPrix(e.target.value)}
            style={champStyle}
          />
          <input
            placeholder="Lien (où vous l'avez trouvé, optionnel)"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            style={champStyle}
          />
          <div style={{ display: "flex", gap: 8, marginTop: 4 }}>
            <button
              onClick={ajouter}
              disabled={enCours || !nom.trim()}
              style={{
                flex: 1,
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                color: "#fff",
                background: "#c8956c",
                border: "none",
                borderRadius: 4,
                padding: "10px 14px",
                cursor: "pointer",
                opacity: enCours || !nom.trim() ? 0.6 : 1,
              }}
            >
              {enCours ? "Ajout..." : "Ajouter"}
            </button>
            <button
              onClick={() => setOuvert(false)}
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
                color: "#8a7f74",
                background: "transparent",
                border: "none",
                cursor: "pointer",
              }}
            >
              Annuler
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

const champStyle: CSSProperties = {
  fontFamily: "Inter, sans-serif",
  fontSize: 13,
  padding: "9px 12px",
  border: "1px solid #e6ddd1",
  borderRadius: 4,
  background: "#f8f4ef",
  color: "#1a1512",
  outline: "none",
};
