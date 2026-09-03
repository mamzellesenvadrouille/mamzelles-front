// app/voyage/[slug]/liste-de-voyage/gerer/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/gerer/page.tsx
import { notFound } from "next/navigation";
import { getCarnetComplet, getElementsListeDeVoyage } from "@/lib/carnets";
import GererCadeaux from "./GererCadeaux";
import CopierLien from "./CopierLien";

export const dynamic = "force-dynamic";

const CATEGORIES: { key: "transport" | "hebergement" | "activite"; titre: string }[] = [
  { key: "transport", titre: "Transports" },
  { key: "hebergement", titre: "Hébergements" },
  { key: "activite", titre: "Activités" },
];

export default async function GererListeDeVoyagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const complet = await getCarnetComplet(slug);
  if (!complet) notFound();

  const carnet = complet;
  if (!carnet.onParticipeUrl) notFound();

  const elements = getElementsListeDeVoyage(carnet);
  const lienPublic = `https://mamzellesenvadrouille.com/voyage/${slug}/liste-de-voyage`;

  return (
    <div style={{ background: "#f8f4ef", minHeight: "100vh", padding: "48px 24px 80px" }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <div style={{ fontSize: 14, color: "#a89a8c", marginBottom: 6 }}>Carnet de voyage, {carnet.destination}</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 500, marginBottom: 28, color: "#1a1512" }}>
          Gérez votre Liste de Voyage
        </h1>

        <div style={{ background: "#fffdfa", border: "1px solid #e6ddd1", borderRadius: 6, overflow: "hidden" }}>
          <div style={{ padding: "24px 26px 20px", borderBottom: "1px solid #e6ddd1" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, marginBottom: 6, color: "#1a1512" }}>
              Partagez votre liste
            </h2>
            <p style={{ fontSize: 14, color: "#6b6158", lineHeight: 1.5 }}>
              Un seul lien à envoyer à vos proches. Ils y retrouvent tout ce que vous avez choisi de partager.
            </p>
            <CopierLien lien={lienPublic} />

            <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 20, paddingTop: 18, borderTop: "1px dashed #e6ddd1" }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&color=1a1512&bgcolor=fffdfa&data=${encodeURIComponent(lienPublic)}`}
                alt="QR code de la Liste de Voyage"
                width={80}
                height={80}
                style={{ borderRadius: 6, border: "1px solid #e6ddd1", flexShrink: 0 }}
              />
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, fontWeight: 500, marginBottom: 3, color: "#1a1512" }}>
                  À afficher le jour J
                </p>
                <p style={{ fontSize: 13, color: "#6b6158", lineHeight: 1.5 }}>
                  Un QR code prêt à imprimer, pour que vos invités découvrent la Liste de Voyage directement au mariage.
                </p>
              </div>
            </div>
          </div>

          <div style={{ padding: "20px 24px" }}>
            {CATEGORIES.map(({ key, titre }) => {
              const items = elements.filter((el) => el.categorie === key);
              if (items.length === 0) return null;
              return (
                <div key={key} style={{ marginBottom: 20 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18, color: "#a89a8c", marginBottom: 8 }}>{titre}</div>
                  {items.map((item) => (
                    <div key={item.id} style={{ display: "flex", justifyContent: "space-between", padding: "8px 4px", fontSize: 14 }}>
                      <span style={{ color: "#1a1512" }}>{item.nom}</span>
                      <span style={{ color: "#6b6158" }}>{item.prixIndicatif != null ? `${item.prixIndicatif} €` : ""}</span>
                    </div>
                  ))}
                </div>
              );
            })}
            <p style={{ fontSize: 12.5, color: "#a89a8c", lineHeight: 1.5, marginTop: 4 }}>
              Cette partie est préparée par MamZelles depuis votre carnet. Pour en modifier le contenu, contactez-nous.
            </p>
          </div>

          <GererCadeaux slug={slug} cadeauxInitiaux={carnet.listeVoyageCadeaux ?? []} />
        </div>
      </div>
    </div>
  );
}
