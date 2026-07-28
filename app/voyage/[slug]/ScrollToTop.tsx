// app/voyage/[slug]/ScrollToTop.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ScrollToTop.tsx
//
// Petit bouton flottant qui apparaît après un peu de défilement, pour
// remonter en haut de page en un clic (pratique sur un carnet aussi long).
"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      setVisible(window.scrollY > 600);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  function remonter() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  if (!visible) return null;

  return (
    <button
      onClick={remonter}
      aria-label="Remonter en haut de la page"
      style={{
        position: "fixed",
        bottom: 24,
        right: "max(24px, calc(50% - 300px - 60px))",
        width: 44,
        height: 44,
        background: "none",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        zIndex: 50,
      }}
    >
      <ArrowUp size={26} color="#a8734c" strokeWidth={2} />
    </button>
  );
}
