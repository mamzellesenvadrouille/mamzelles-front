// app/admin/carnets/[slug]/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/admin/carnets/[slug]/page.tsx
//
// Formulaire de création/édition d'un carnet.
// Pour créer un nouveau carnet, va sur /admin/carnets/nouveau
"use client";

import { useEffect, useState, use } from "react";
import { useRouter } from "next/navigation";
import type { Carnet, Destination, CarnetDestinationRef, ConseilMamZelles, BudgetLigne, ChecklistItem } from "@/lib/carnets";

const carnetVide: Carnet = {
  slug: "",
  client: { prenoms: "", typeVoyage: "" },
  destination: "",
  dates: { debut: "", fin: "" },
  hero: { photo: "" },
  bienvenue: { message: "" },
  overview: { meteo: "", budget: 0, decalage: "", dureeJours: 0 },
  parcours: [],
  destinations: [],
  conseils: [],
  budget: [],
  reservations: [],
  checklistValise: [],
  indispensables: { visa: "", passeport: "", vaccins: "", assurance: "", monnaie: "" },
  createdAt: "",
  updatedAt: "",
};

export default function EditCarnetPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const isNew = slug === "nouveau";
  const router = useRouter();

  const [auth, setAuth] = useState(false);
  const [password, setPassword] = useState("");
  const [authError, setAuthError] = useState("");

  const [carnet, setCarnet] = useState<Carnet>(carnetVide);
  const [destinationsDispo, setDestinationsDispo] = useState<Destination[]>([]);
  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);

  async function handleAuth(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/admin-auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setAuth(true);
      setAuthError("");
    } else {
      setAuthError("Mot de passe incorrect.");
    }
  }

  useEffect(() => {
    if (!auth) return;
    fetch("/api/destination-list")
      .then((r) => r.json())
      .then((data) => setDestinationsDispo(data.destinations ?? []));

    if (!isNew) {
      fetch("/api/carnet-list")
        .then((r) => r.json())
        .then((data) => {
          const found = (data.carnets ?? []).find((c: Carnet) => c.slug === slug);
          if (found) setCarnet(found);
          setLoading(false);
        });
    }
  }, [slug, isNew, auth]);

  function update<K extends keyof Carnet>(key: K, value: Carnet[K]) {
    setCarnet((prev) => ({ ...prev, [key]: value }));
  }

  function updateNested<P extends keyof Carnet>(parent: P, key: string, value: unknown) {
    setCarnet((prev) => ({ ...prev, [parent]: { ...(prev[parent] as object), [key]: value } }));
  }

  async function enregistrer() {
    if (!carnet.slug) {
      alert("Le slug (identifiant du lien) est obligatoire.");
      return;
    }
    setSaving(true);
    const res = await fetch("/api/carnet-save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carnet),
    });
    setSaving(false);
    if (res.ok) {
      router.push("/admin/carnets");
    } else {
      alert("Erreur lors de l'enregistrement.");
    }
  }

  function toggleDestination(id: string) {
    const existe = carnet.destinations.find((d) => d.destinationId === id);
    if (existe) {
      update("destinations", carnet.destinations.filter((d) => d.destinationId !== id));
    } else {
      const nouvelleRef: CarnetDestinationRef = { destinationId: id, nuits: 1 };
      update("destinations", [...carnet.destinations, nouvelleRef]);
    }
  }

  function updateNuits(id: string, nuits: number) {
    update(
      "destinations",
      carnet.destinations.map((d) => (d.destinationId === id ? { ...d, nuits } : d))
    );
  }

  // --- listes dynamiques (conseils, budget, checklists) ---
  function ajouterConseil() {
    update("conseils", [...carnet.conseils, { type: "conseil", texte: "" } as ConseilMamZelles]);
  }
  function ajouterBudgetLigne() {
    update("budget", [...carnet.budget, { poste: "", montant: 0 } as BudgetLigne]);
  }
  function ajouterCheckItem(champ: "reservations" | "checklistValise") {
    update(champ, [...carnet[champ], { label: "", coche: false } as ChecklistItem]);
  }

  if (!auth) {
    return (
      <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#f8f4ef" }}>
        <form
          onSubmit={handleAuth}
          style={{ background: "#fff", padding: "40px 36px", borderRadius: 8, boxShadow: "0 4px 24px rgba(26,21,18,0.08)", width: 320, textAlign: "center" }}
        >
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, letterSpacing: ".04em", color: "#a8734c", marginBottom: 4 }}>
            MamZelles en vadrouille
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, marginBottom: 20 }}>Espace admin</div>
          <input
            type="password"
            placeholder="Mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
            style={{ width: "100%", padding: "10px 12px", border: "1px solid #ddd", borderRadius: 4, fontSize: 14, marginBottom: 10, fontFamily: "Inter, sans-serif" }}
          />
          {authError && <div style={{ color: "#b33", fontSize: 13, marginBottom: 10 }}>{authError}</div>}
          <button
            type="submit"
            style={{ width: "100%", background: "#c8956c", color: "#fff", padding: "10px 20px", borderRadius: 4, border: "none", fontSize: 14, cursor: "pointer", fontFamily: "Inter, sans-serif" }}
          >
            Accéder
          </button>
        </form>
      </div>
    );
  }

  if (loading) return <div style={{ padding: 48 }}>Chargement...</div>;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "8px 10px",
    border: "1px solid #ddd",
    borderRadius: 4,
    fontSize: 14,
    fontFamily: "Inter, sans-serif",
  };
  const labelStyle: React.CSSProperties = { fontSize: 12, color: "#888", display: "block", marginBottom: 4, marginTop: 12 };
  const sectionStyle: React.CSSProperties = { border: "1px solid #eee", borderRadius: 6, padding: 20, marginBottom: 20 };

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: "48px 24px", fontFamily: "Inter, sans-serif" }}>
      <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, marginBottom: 24 }}>
        {isNew ? "Nouveau carnet" : `Éditer : ${carnet.client.prenoms}`}
      </h1>

      <div style={sectionStyle}>
        <strong>Infos générales</strong>
        <label style={labelStyle}>Slug (identifiant du lien, ex: julie-thomas-maldives)</label>
        <input style={inputStyle} value={carnet.slug} disabled={!isNew} onChange={(e) => update("slug", e.target.value)} />

        <label style={labelStyle}>Prénoms du client</label>
        <input style={inputStyle} value={carnet.client.prenoms} onChange={(e) => updateNested("client", "prenoms", e.target.value)} />

        <label style={labelStyle}>Type de voyage (ex: Voyage de noces)</label>
        <input style={inputStyle} value={carnet.client.typeVoyage} onChange={(e) => updateNested("client", "typeVoyage", e.target.value)} />

        <label style={labelStyle}>Destination générale (ex: Maldives)</label>
        <input style={inputStyle} value={carnet.destination} onChange={(e) => update("destination", e.target.value)} />

        <div style={{ display: "flex", gap: 12 }}>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Date de début</label>
            <input type="date" style={inputStyle} value={carnet.dates.debut} onChange={(e) => updateNested("dates", "debut", e.target.value)} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={labelStyle}>Date de fin</label>
            <input type="date" style={inputStyle} value={carnet.dates.fin} onChange={(e) => updateNested("dates", "fin", e.target.value)} />
          </div>
        </div>

        <label style={labelStyle}>Photo hero (URL)</label>
        <input style={inputStyle} value={carnet.hero.photo} onChange={(e) => updateNested("hero", "photo", e.target.value)} />

        <label style={labelStyle}>Message de bienvenue</label>
        <textarea style={{ ...inputStyle, minHeight: 80 }} value={carnet.bienvenue.message} onChange={(e) => updateNested("bienvenue", "message", e.target.value)} />
      </div>

      <div style={sectionStyle}>
        <strong>Vue d'ensemble</strong>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <div><label style={labelStyle}>Météo (ex: 28°)</label><input style={inputStyle} value={carnet.overview.meteo} onChange={(e) => updateNested("overview", "meteo", e.target.value)} /></div>
          <div><label style={labelStyle}>Budget prévu (€)</label><input type="number" style={inputStyle} value={carnet.overview.budget} onChange={(e) => updateNested("overview", "budget", Number(e.target.value))} /></div>
          <div><label style={labelStyle}>Décalage horaire</label><input style={inputStyle} value={carnet.overview.decalage} onChange={(e) => updateNested("overview", "decalage", e.target.value)} /></div>
          <div><label style={labelStyle}>Durée (jours)</label><input type="number" style={inputStyle} value={carnet.overview.dureeJours} onChange={(e) => updateNested("overview", "dureeJours", Number(e.target.value))} /></div>
        </div>
        <label style={labelStyle}>Parcours (une étape par ligne, ex: Paris)</label>
        <textarea
          style={{ ...inputStyle, minHeight: 60 }}
          value={carnet.parcours.join("\n")}
          onChange={(e) => update("parcours", e.target.value.split("\n").filter(Boolean))}
        />
      </div>

      <div style={sectionStyle}>
        <strong>Destinations incluses dans ce carnet</strong>
        <p style={{ fontSize: 13, color: "#888" }}>
          Sélectionne parmi tes fiches destination existantes. Pour créer une nouvelle fiche destination, ce sera dans l'admin dédié (à venir).
        </p>
        {destinationsDispo.length === 0 && <p style={{ fontSize: 13 }}>Aucune fiche destination pour l'instant.</p>}
        {destinationsDispo.map((d) => {
          const ref = carnet.destinations.find((r) => r.destinationId === d.id);
          return (
            <div key={d.id} style={{ display: "flex", alignItems: "center", gap: 12, padding: "8px 0", borderBottom: "1px solid #f2f2f2" }}>
              <input type="checkbox" checked={!!ref} onChange={() => toggleDestination(d.id)} />
              <span style={{ flex: 1 }}>{d.nom}</span>
              {ref && (
                <input
                  type="number"
                  style={{ ...inputStyle, width: 80 }}
                  value={ref.nuits}
                  onChange={(e) => updateNuits(d.id, Number(e.target.value))}
                  placeholder="nuits"
                />
              )}
            </div>
          );
        })}
      </div>

      <div style={sectionStyle}>
        <strong>Conseils MamZelles</strong>
        {carnet.conseils.map((c, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <select
              style={{ ...inputStyle, width: 140 }}
              value={c.type}
              onChange={(e) => {
                const copy = [...carnet.conseils];
                copy[i] = { ...copy[i], type: e.target.value as ConseilMamZelles["type"] };
                update("conseils", copy);
              }}
            >
              <option value="conseil">Notre conseil</option>
              <option value="coup-de-coeur">Coup de cœur</option>
              <option value="a-eviter">À éviter</option>
            </select>
            <input
              style={inputStyle}
              value={c.texte}
              onChange={(e) => {
                const copy = [...carnet.conseils];
                copy[i] = { ...copy[i], texte: e.target.value };
                update("conseils", copy);
              }}
            />
          </div>
        ))}
        <button onClick={ajouterConseil} style={{ marginTop: 10, fontSize: 13, color: "#a8734c", background: "none", border: "none", cursor: "pointer" }}>+ Ajouter un conseil</button>
      </div>

      <div style={sectionStyle}>
        <strong>Budget</strong>
        {carnet.budget.map((b, i) => (
          <div key={i} style={{ display: "flex", gap: 8, marginTop: 8 }}>
            <input
              style={inputStyle}
              placeholder="Poste (ex: Vols)"
              value={b.poste}
              onChange={(e) => {
                const copy = [...carnet.budget];
                copy[i] = { ...copy[i], poste: e.target.value };
                update("budget", copy);
              }}
            />
            <input
              type="number"
              style={{ ...inputStyle, width: 120 }}
              placeholder="Montant"
              value={b.montant}
              onChange={(e) => {
                const copy = [...carnet.budget];
                copy[i] = { ...copy[i], montant: Number(e.target.value) };
                update("budget", copy);
              }}
            />
          </div>
        ))}
        <button onClick={ajouterBudgetLigne} style={{ marginTop: 10, fontSize: 13, color: "#a8734c", background: "none", border: "none", cursor: "pointer" }}>+ Ajouter une ligne</button>
      </div>

      <div style={sectionStyle}>
        <strong>Checklist réservations</strong>
        {carnet.reservations.map((item, i) => (
          <input
            key={i}
            style={{ ...inputStyle, marginTop: 8 }}
            value={item.label}
            onChange={(e) => {
              const copy = [...carnet.reservations];
              copy[i] = { ...copy[i], label: e.target.value };
              update("reservations", copy);
            }}
          />
        ))}
        <button onClick={() => ajouterCheckItem("reservations")} style={{ marginTop: 10, fontSize: 13, color: "#a8734c", background: "none", border: "none", cursor: "pointer" }}>+ Ajouter</button>
      </div>

      <div style={sectionStyle}>
        <strong>Checklist valise</strong>
        {carnet.checklistValise.map((item, i) => (
          <input
            key={i}
            style={{ ...inputStyle, marginTop: 8 }}
            value={item.label}
            onChange={(e) => {
              const copy = [...carnet.checklistValise];
              copy[i] = { ...copy[i], label: e.target.value };
              update("checklistValise", copy);
            }}
          />
        ))}
        <button onClick={() => ajouterCheckItem("checklistValise")} style={{ marginTop: 10, fontSize: 13, color: "#a8734c", background: "none", border: "none", cursor: "pointer" }}>+ Ajouter</button>
      </div>

      <div style={sectionStyle}>
        <strong>Indispensables</strong>
        <label style={labelStyle}>Visa</label>
        <input style={inputStyle} value={carnet.indispensables.visa} onChange={(e) => updateNested("indispensables", "visa", e.target.value)} />
        <label style={labelStyle}>Passeport</label>
        <input style={inputStyle} value={carnet.indispensables.passeport} onChange={(e) => updateNested("indispensables", "passeport", e.target.value)} />
        <label style={labelStyle}>Vaccins</label>
        <input style={inputStyle} value={carnet.indispensables.vaccins} onChange={(e) => updateNested("indispensables", "vaccins", e.target.value)} />
        <label style={labelStyle}>Assurance</label>
        <input style={inputStyle} value={carnet.indispensables.assurance} onChange={(e) => updateNested("indispensables", "assurance", e.target.value)} />
        <label style={labelStyle}>Monnaie</label>
        <input style={inputStyle} value={carnet.indispensables.monnaie} onChange={(e) => updateNested("indispensables", "monnaie", e.target.value)} />
      </div>

      <button
        onClick={enregistrer}
        disabled={saving}
        style={{ background: "#1a1512", color: "#fff", padding: "12px 28px", borderRadius: 4, border: "none", fontSize: 14, cursor: "pointer" }}
      >
        {saving ? "Enregistrement..." : "Enregistrer le carnet"}
      </button>
    </div>
  );
}
