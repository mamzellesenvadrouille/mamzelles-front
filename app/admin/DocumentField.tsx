// app/admin/DocumentField.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/DocumentField.tsx
//
// Champ réutilisable pour renseigner un document (billet, PDF...) : soit
// en collant une URL, soit en important directement un fichier depuis
// l'ordinateur (upload vers Vercel Blob, même route que les photos).
"use client";

import { useState, useRef } from "react";
import adminStyles from "./adminStyles";

export default function DocumentField({
  value,
  onChange,
  placeholder,
}: {
  value: string;
  onChange: (url: string) => void;
  placeholder?: string;
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
      const formData = new FormData();
      formData.append("file", file);
      const res = await fetch("/api/upload-photo", { method: "POST", body: formData });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Erreur d'upload");
      onChange(data.url);
    } catch (err) {
      setErreur(err instanceof Error ? err.message : "Erreur d'upload");
    } finally {
      setUploading(false);
      if (inputFileRef.current) inputFileRef.current.value = "";
    }
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
      <div style={{ display: "flex", gap: 6 }}>
        <input
          style={{ ...adminStyles.input, flex: 1 }}
          placeholder={placeholder ?? "Lien du document (URL)"}
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
          {uploading ? "Envoi..." : "Importer"}
        </button>
        <input
          ref={inputFileRef}
          type="file"
          accept=".pdf,image/*"
          onChange={handleFileChange}
          style={{ display: "none" }}
        />
      </div>
      {erreur && <span style={{ fontSize: 11, color: "#c0392b" }}>{erreur}</span>}
      {value && (
        <a href={value} target="_blank" rel="noopener noreferrer" style={{ fontSize: 11, color: "#a8734c" }}>
          Voir le fichier importé →
        </a>
      )}
    </div>
  );
}
