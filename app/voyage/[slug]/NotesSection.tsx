// app/voyage/[slug]/NotesSection.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/NotesSection.tsx
//
// Une simple zone de texte libre pour le client (idées, questions à se
// souvenir, listes perso...). Sauvegardée côté serveur (partagée entre ses
// appareils), mais jamais visible côté admin — strictement privée au client.
// La zone s'agrandit automatiquement selon le contenu (pas de scroll interne
// à faire pour relire un long texte).
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./carnet.module.css";

async function sauvegarder(slug: string, notesLibres: string) {
  try {
    await fetch("/api/carnet-progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug, progress: { notesLibres } }),
    });
  } catch {
    // pas grave si la sauvegarde échoue ponctuellement
  }
}

export default function NotesSection({
  slug,
  notesInitiales,
}: {
  slug: string;
  notesInitiales: string;
}) {
  const [notes, setNotes] = useState(notesInitiales);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  function ajusterHauteur() {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto"; // on réinitialise pour pouvoir mesurer le vrai scrollHeight
    el.style.height = `${el.scrollHeight}px`;
  }

  // Ajuste la hauteur au chargement initial (si des notes existent déjà)
  useLayoutEffect(() => {
    ajusterHauteur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  function onChange(valeur: string) {
    setNotes(valeur);
    ajusterHauteur();
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => sauvegarder(slug, valeur), 600);
  }

  return (
    <textarea
      ref={textareaRef}
      value={notes}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Vos notes personnelles pour ce voyage..."
      className={styles.meta}
      style={{
        width: "100%",
        minHeight: 140,
        padding: 16,
        border: "1px solid #e8e0d6",
        borderRadius: 6,
        fontFamily: "Inter, sans-serif",
        fontSize: 13.5,
        color: "#1a1512",
        outline: "none",
        resize: "none", // plus besoin de redimensionner à la main, ça s'agrandit tout seul
        overflow: "hidden", // évite une barre de scroll qui apparaîtrait brièvement pendant l'ajustement
        background: "#fff",
        boxSizing: "border-box",
        lineHeight: 1.6,
      }}
    />
  );
}
