// app/admin/LieuSearchField.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/LieuSearchField.tsx
//
// Champ de recherche de lieu : tape un nom d'établissement, une liste de
// résultats apparaît (via Google Places, la plus complète pour les petits
// établissements locaux type hôtels/restaurants), clique sur le bon résultat
// et les coordonnées GPS se remplissent automatiquement.
//
// La recherche passe par la route interne /api/lieu-search : la clé Google
// reste entièrement côté serveur, jamais visible dans le code du navigateur.
"use client";

import { useState, useRef, useEffect } from "react";

interface Resultat {
  nom: string;
  lat: number;
  lng: number;
}

export default function LieuSearchField({
  onSelect,
  placeholder,
}: {
  onSelect: (lieu: Resultat) => void;
  placeholder?: string;
}) {
  const [saisie, setSaisie] = useState("");
  const [resultats, setResultats] = useState<Resultat[]>([]);
  const [recherche, setRecherche] = useState(false);
  const [ouvert, setOuvert] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickDehors(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
        setOuvert(false);
      }
    }
    document.addEventListener("mousedown", onClickDehors);
    return () => document.removeEventListener("mousedown", onClickDehors);
  }, []);

  function handleChange(valeur: string) {
    setSaisie(valeur);
    if (timerRef.current) clearTimeout(timerRef.current);

    if (valeur.trim().length < 3) {
      setResultats([]);
      setOuvert(false);
      return;
    }

    // On attend 400ms après la dernière frappe avant de lancer la recherche,
    // pour ne pas surcharger l'API à chaque lettre tapée.
    timerRef.current = setTimeout(async () => {
      setRecherche(true);
      try {
        const res = await fetch(`/api/lieu-search?q=${encodeURIComponent(valeur)}`);
        const data = await res.json();
        const items: Resultat[] = data.resultats ?? [];
        setResultats(items);
        setOuvert(items.length > 0);
      } catch {
        setResultats([]);
      } finally {
        setRecherche(false);
      }
    }, 400);
  }

  function choisir(r: Resultat) {
    onSelect(r);
    setSaisie("");
    setResultats([]);
    setOuvert(false);
  }

  return (
    <div ref={wrapRef} style={{ position: "relative", marginBottom: 10 }}>
      <input
        style={{
          width: "100%",
          height: 36,
          padding: "0 12px",
          fontSize: 13,
          borderRadius: 4,
          fontFamily: "Inter, sans-serif",
          border: "1px solid #d8cdbc",
          outline: "none",
          background: "#fffaf3",
          boxSizing: "border-box",
        }}
        placeholder={placeholder ?? "🔍 Rechercher un lieu (nom + ville)..."}
        value={saisie}
        onChange={(e) => handleChange(e.target.value)}
        onFocus={() => resultats.length > 0 && setOuvert(true)}
      />
      {recherche && (
        <span style={{ position: "absolute", right: 10, top: 8, fontSize: 11, color: "#aaa", fontFamily: "Inter, sans-serif" }}>
          ...
        </span>
      )}
      {ouvert && resultats.length > 0 && (
        <div
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            zIndex: 20,
            background: "#fff",
            border: "1px solid #e8e0d6",
            borderRadius: 4,
            marginTop: 2,
            boxShadow: "0 4px 12px rgba(0,0,0,.08)",
            maxHeight: 220,
            overflowY: "auto",
          }}
        >
          {resultats.map((r, i) => (
            <button
              key={i}
              onClick={() => choisir(r)}
              style={{
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "8px 12px",
                fontSize: 12.5,
                fontFamily: "Inter, sans-serif",
                color: "#1a1512",
                background: "none",
                border: "none",
                borderBottom: i < resultats.length - 1 ? "1px solid #f0ebe4" : "none",
                cursor: "pointer",
              }}
            >
              {r.nom}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
