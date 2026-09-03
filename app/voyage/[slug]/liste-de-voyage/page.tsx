// app/voyage/[slug]/liste-de-voyage/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/page.tsx
import { notFound } from "next/navigation";
import { getCarnetComplet, getElementsListeDeVoyage } from "@/lib/carnets";
import ListeDeVoyageCarte from "./ListeDeVoyageCarte";

// Comme le reste du carnet : jamais mis en cache, recalculé à chaque visite.
export const dynamic = "force-dynamic";

const CATEGORIES: { key: "transport" | "cadeau"; titre: string }[] = [
  { key: "transport", titre: "Transports" },
  { key: "cadeau", titre: "Essentiels du voyage" },
];

export default async function ListeDeVoyagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const complet = await getCarnetComplet(slug);
  if (!complet) notFound();

  const carnet = complet;
  const elements = getElementsListeDeVoyage(carnet);

  // Pas de lien de cagnotte renseigné = la fonctionnalité n'est pas activée pour ce carnet.
  if (!carnet.onParticipeUrl || elements.length === 0) notFound();

  const prenoms = carnet.client.prenoms;

  return (
    <div style={{ background: "#f8f4ef", minHeight: "100vh" }}>
      <div
        style={{
          padding: "56px 24px 36px",
          textAlign: "center",
          background: "linear-gradient(180deg, #fff 0%, #f8f4ef 100%)",
          borderBottom: "1px solid #e6ddd1",
        }}
      >
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 16, color: "#c8956c", marginBottom: 14 }}>
          La Liste de Voyage
        </div>
        <h1
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 40,
            fontWeight: 500,
            lineHeight: 1.35,
            maxWidth: 480,
            margin: "0 auto 18px",
            color: "#1a1512",
          }}
        >
          Participez à un voyage <em style={{ color: "#c8956c", fontStyle: "italic" }}>inoubliable</em>
        </h1>
        <p style={{ maxWidth: 420, margin: "0 auto", fontSize: 15, lineHeight: 1.6, color: "#4a423c" }}>
          Pour notre voyage de noces, nous avons imaginé une sélection d&apos;expériences et de petites attentions.
          Choisissez celle qui vous fait envie.
        </p>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 20, color: "#1a1512", marginTop: 20 }}>
          {prenoms}
        </div>
      </div>

      <div style={{ maxWidth: 560, margin: "0 auto", padding: "44px 24px 8px" }}>
        {CATEGORIES.map(({ key, titre }) => {
          const items = elements.filter((el) => el.categorie === key);
          if (items.length === 0) return null;
          return (
            <div key={key} style={{ marginBottom: 44 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500, color: "#1a1512" }}>{titre}</h2>
                <span style={{ fontSize: 14, color: "#a89a8c" }}>
                  {items.length} élément{items.length > 1 ? "s" : ""}
                </span>
              </div>
              {items.map((item) => (
                <ListeDeVoyageCarte key={item.id} item={item} onParticipeUrl={carnet.onParticipeUrl!} />
              ))}
            </div>
          );
        })}
      </div>

      <div style={{ textAlign: "center", padding: "24px 24px 60px", background: "#1a1512" }}>
        <p style={{ fontSize: 13, color: "#cfc4b8", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
          Toutes les participations sont réunies dans une seule cagnotte pour notre voyage. Vous choisissez le moment
          ou le cadeau que vous souhaitez soutenir, nous utiliserons ensuite les fonds pour réserver et profiter de
          notre voyage.
        </p>
      </div>
    </div>
  );
}
