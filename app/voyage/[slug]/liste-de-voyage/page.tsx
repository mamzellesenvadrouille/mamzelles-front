// app/voyage/[slug]/liste-de-voyage/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/page.tsx
import { notFound } from "next/navigation";
import { getCarnetComplet, getElementsListeDeVoyage } from "@/lib/carnets";
import ListeDeVoyageCarte from "./ListeDeVoyageCarte";

export const dynamic = "force-dynamic";

const GOLD = "#c8956c";
const DARK = "#1a1512";
const CREAM = "#f8f4ef";
const WHITE = "#fffdfa";
const LINE = "#e6ddd1";

const IconAvion = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: -1, marginRight: 4 }}>
    <path d="m22 2-7 20-4-9-9-4Z" stroke={GOLD} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
    <path d="M22 2 11 13" stroke={GOLD} strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const IconCadeau = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: -1, marginRight: 4 }}>
    <path
      d="M20 12V22H4V12M22 7H2V12H22V7ZM12 22V7M12 7H7.5C6.83696 7 6.20107 6.73661 5.73223 6.26777C5.26339 5.79893 5 5.16304 5 4.5C5 3.83696 5.26339 3.20107 5.73223 2.73223C6.20107 2.26339 6.83696 2 7.5 2C11 2 12 7 12 7ZM12 7H16.5C17.163 7 17.7989 6.73661 18.2678 6.26777C18.7366 5.79893 19 5.16304 19 4.5C19 3.83696 18.7366 3.20107 18.2678 2.73223C17.7989 2.26339 17.163 2 16.5 2C13 2 12 7 12 7Z"
      stroke={GOLD}
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconCoeur = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: -3 }}>
    <path
      d="M12 21s-7.5-4.6-10-9.3C.4 8.3 2 4.5 5.7 4c2.2-.3 4.2.9 6.3 3 2.1-2.1 4.1-3.3 6.3-3 3.7.5 5.3 4.3 3.7 7.7C19.5 16.4 12 21 12 21Z"
      stroke={GOLD}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);

const CATEGORIES: { key: "transport" | "cadeau"; titre: string; eyebrow: string; icone: () => React.JSX.Element }[] = [
  { key: "transport", titre: "Transports", eyebrow: "Pour vivre notre voyage", icone: IconAvion },
  { key: "cadeau", titre: "Essentiels du voyage", eyebrow: "Pour préparer notre voyage", icone: IconCadeau },
];

export default async function ListeDeVoyagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carnet = await getCarnetComplet(slug);
  if (!carnet) notFound();

  const elements = getElementsListeDeVoyage(carnet);
  if (!carnet.onParticipeUrl || elements.length === 0) notFound();

  const prenoms = carnet.client.prenoms;

  return (
    <div style={{ background: CREAM, minHeight: "100vh", fontFamily: "Inter, sans-serif", color: DARK }}>
      {/* Hero */}
      <div
        style={{
          padding: "56px 24px 36px",
          textAlign: "center",
          background: `linear-gradient(180deg, #fff 0%, ${CREAM} 100%)`,
          borderBottom: `1px solid ${LINE}`,
        }}
      >
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 16, color: GOLD, marginBottom: 14 }}>
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
          }}
        >
          Participez à un voyage <em style={{ fontStyle: "italic", color: GOLD }}>inoubliable</em> <IconCoeur />
        </h1>
        <p style={{ maxWidth: 420, margin: "0 auto", fontSize: 15, lineHeight: 1.6, color: "#4a423c" }}>
          Parce que les plus beaux cadeaux sont ceux qui deviennent des souvenirs, nous vous invitons à participer à
          notre voyage de noces et à écrire avec nous une petite part de cette belle aventure.
        </p>
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 20, marginTop: 20 }}>
          {prenoms}
        </div>
      </div>

      {/* Bandeau cagnotte */}
      <div style={{ maxWidth: 560, margin: "28px auto 0", padding: "0 24px" }}>
        <div style={{ background: DARK, borderRadius: 8, padding: "22px 24px", textAlign: "center" }}>
          <a
            href={carnet.onParticipeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: 4,
              fontSize: 13,
              fontWeight: 600,
              background: GOLD,
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 24,
              textDecoration: "none",
            }}
          >
            Participer via OnParticipe
          </a>
          <div style={{ fontSize: 11.5, color: "#a89a8c", marginTop: 18, lineHeight: 1.5 }}>
            Un seul et même lien pour tous les éléments ci-dessous. Indiquez simplement, si vous le souhaitez, à quoi
            correspond votre participation.
          </div>
        </div>
      </div>

      {/* Catégories */}
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "44px 24px 8px" }}>
        {CATEGORIES.map(({ key, titre, eyebrow, icone: Icone }) => {
          const items = elements.filter((el) => el.categorie === key);
          if (items.length === 0) return null;
          return (
            <div key={key} style={{ marginBottom: 44 }}>
              <div style={{ fontSize: 14.5, color: "#a89a8c", marginBottom: 10 }}>
                <Icone />
                {eyebrow}
              </div>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500 }}>{titre}</h2>
                <span style={{ fontSize: 14, color: "#a89a8c" }}>
                  {items.length} élément{items.length > 1 ? "s" : ""}
                </span>
              </div>
              {items.map((item) => (
                <ListeDeVoyageCarte key={item.id} slug={slug} item={item} onParticipeUrl={carnet.onParticipeUrl!} />
              ))}
            </div>
          );
        })}
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "32px 28px 44px", background: DARK }}>
        <p style={{ fontSize: 13, color: "#cfc4b8", lineHeight: 1.7, maxWidth: 480, margin: "0 auto" }}>
          Toutes les participations sont réunies dans une seule cagnotte pour notre voyage. Vous choisissez le moment
          ou le cadeau que vous souhaitez soutenir, nous utiliserons ensuite les fonds pour réserver et profiter de
          notre voyage.
        </p>
      </div>
    </div>
  );
}
