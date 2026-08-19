// app/admin/PhotoField.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/PhotoField.tsx
//
// Champ réutilisable pour renseigner une photo : soit en collant une URL,
// soit en important directement un fichier depuis l'ordinateur (upload
// vers Vercel Blob).
"use client";

import { useState, useRef } from "react";
import adminStyles from "./adminStyles";

// Redimensionne et compresse une image dans le navigateur avant l'envoi,
// pour rester bien sous la limite de taille de requête de Vercel (qui bloque
// les uploads trop lourds avant même d'atteindre notre code, avec une erreur
// en texte brut plutôt qu'en JSON — d'où l'importance d'anticiper côté client).
async function compresserImage(file: File, maxLargeur = 1920, qualite = 0.82): Promise<File> {
  // On ne touche pas aux formats déjà légers ou non compatibles canvas (ex: gif animé)
  if (file.type === "image/gif") return file;

  const bitmap = await createImageBitmap(file);
  const ratio = Math.min(1, maxLargeur / bitmap.width);
  const largeur = Math.round(bitmap.width * ratio);
  const hauteur = Math.round(bitmap.height * ratio);

  const canvas = document.createElement("canvas");
  canvas.width = largeur;
  canvas.height = hauteur;
  const ctx = canvas.getContext("2d");
  if (!ctx) return file;
  ctx.drawImage(bitmap, 0, 0, largeur, hauteur);

  const blob: Blob | null = await new Promise((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", qualite)
  );
  if (!blob) return file;

  const nomCompresse = file.name.replace(/\.[^.]+$/, "") + ".jpg";
  return new File([blob], nomCompresse, { type: "image/jpeg" });
}

export default function PhotoField({
  value,
  onChange,
  placeholder,
  style,
}: {
  value: string;
  onChange: (url: string) => void;
  placeholder?: string;
  style?: React.CSSProperties;
}) {
  const [uploading, setUploading] = useState(false);
  const [erreur, setErreur] = useState("");
  const inputFileRef = useRef<HTMLInputElement>(null);

  async function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setErreur("");
    try {
      const fichierCompresse = await compresserImage(file);

      const formData = new FormData();
      formData.append("file", fichierCompresse);
      const res = await fetch("/api/upload-photo", { method: "POST", body: formData });

      // On sécurise le parsing : si le serveur (ou Vercel lui-même) renvoie du texte
      // brut au lieu de JSON (ex: requête trop lourde bloquée en amont), on affiche
      // un message clair plutôt que de planter sur un message technique confus.
      let data: { url?: string; error?: string } = {};
      try {
        data = await res.json();
      } catch {
        throw new Error(
          res.status === 413
            ? "Cette photo est trop volumineuse, même après compression. Essayez une autre image."
            : "Erreur lors de l'envoi, réessayez."
        );
      }

      if (!res.ok) throw new Error(data.error || "Erreur d'upload");
      if (!data.url) throw new Error("Réponse invalide du serveur");
      onChange(data.url);
    } catch (err) {
      setErreur(err instanceof Error ? err.message : "Erreur d'upload");
    } finally {
      setUploading(false);
      if (inputFileRef.current) inputFileRef.current.value = "";
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4, ...style }}>
      <div style={{ display: "flex", gap: 6 }}>
        <input
          style={{ ...adminStyles.input, flex: 1 }}
          placeholder={placeholder ?? "Photo (URL)"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <button
          type="button"
          onClick={() => inputFileRef.current?.click()}
          disabled={uploading}
          style={{
            fontSize: 12,
            padding: "0 12px",
            border: "1px solid #e8e0d6",
            background: "#fff",
            borderRadius: 4,
            cursor: "pointer",
            whiteSpace: "nowrap",
            color: "#1a1512",
          }}
        >
          {uploading ? "Compression..." : "Importer"}
        </button>
        <input
          ref={inputFileRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
      {erreur && <span style={{ fontSize: 11, color: "#c0392b" }}>{erreur}</span>}
      {value && (
        <img
          src={value}
          alt=""
          style={{ height: 50, borderRadius: 3, objectFit: "cover", alignSelf: "flex-start" }}
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      )}
    </div>
  );
}
