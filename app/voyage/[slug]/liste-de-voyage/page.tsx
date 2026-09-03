// app/voyage/[slug]/liste-de-voyage/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/page.tsx
import { notFound } from "next/navigation";
import { getCarnetComplet, getElementsListeDeVoyage } from "@/lib/carnets";
import ListeDeVoyageCarte from "./ListeDeVoyageCarte";
import ListeDeVoyageCarteLibre from "./ListeDeVoyageCarteLibre";

export const dynamic = "force-dynamic";

const GOLD = "#c8956c";
const DARK = "#1a1512";
const CREAM = "#f8f4ef";
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

const IconEtoile = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="none" style={{ verticalAlign: -4, marginRight: 2 }}>
    <path
      d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"
      stroke={GOLD}
      strokeWidth={1.6}
      strokeLinecap="round"
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

export default async function ListeDeVoyagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carnet = await getCarnetComplet(slug);
  if (!carnet) notFound();

  const elements = getElementsListeDeVoyage(carnet, carnet.destinationsCompletes);
  if (!carnet.onParticipeUrl || elements.length === 0) notFound();

  const totalReuni = elements.reduce((s, el) => s + (el.montantReuni ?? 0), 0) + (carnet.contributionLibreReunie ?? 0);
  const prenoms = carnet.client.prenoms;

  const transports = elements.filter((el) => el.categorie === "transport");
  const hebergements = elements.filter((el) => el.categorie === "hebergement");
  const activites = elements.filter((el) => el.categorie === "activite");
  const equipement = elements.filter((el) => el.categorie === "cadeau");

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
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: 20, color: GOLD, marginBottom: 14 }}>
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
        <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, marginTop: 20 }}>
          {prenoms}
        </div>
      </div>

      {/* Bandeau cagnotte */}
      <div style={{ maxWidth: 560, margin: "28px auto 0", padding: "0 24px" }}>
        <div style={{ background: DARK, borderRadius: 8, padding: "24px 24px", textAlign: "center" }}>
          <div style={{ fontSize: 12, letterSpacing: "0.08em", textTransform: "uppercase", color: GOLD, marginBottom: 2 }}>
            Déjà réuni pour notre voyage
          </div>
          <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 48, fontWeight: 500, color: "#e4c9ae", lineHeight: 1.1 }}>
            {totalReuni} €
          </div>
        </div>
      </div>

      {/* Catégories */}
      <div style={{ maxWidth: 560, margin: "0 auto", padding: "44px 24px 8px" }}>
        {(transports.length > 0 || hebergements.length > 0 || activites.length > 0) && (
          <div style={{ fontSize: 14.5, color: "#a89a8c", marginBottom: 10 }}>
            <IconAvion />
            Pour vivre notre voyage
          </div>
        )}

        {transports.length > 0 && (
          <div style={{ marginBottom: 44 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500 }}>Transports</h2>
              <span style={{ fontSize: 14, color: "#a89a8c", fontStyle: "italic" }}>
                {transports.length} élément{transports.length > 1 ? "s" : ""}
              </span>
            </div>
            {transports.map((item) => (
              <ListeDeVoyageCarte key={item.id} slug={slug} item={item} onParticipeUrl={carnet.onParticipeUrl!} />
            ))}
          </div>
        )}

        {hebergements.length > 0 && (
          <div style={{ marginBottom: 44 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500 }}>Hébergements</h2>
              <span style={{ fontSize: 14, color: "#a89a8c", fontStyle: "italic" }}>
                {hebergements.length} élément{hebergements.length > 1 ? "s" : ""}
              </span>
            </div>
            {hebergements.map((item) => (
              <ListeDeVoyageCarte key={item.id} slug={slug} item={item} onParticipeUrl={carnet.onParticipeUrl!} />
            ))}
          </div>
        )}

        {activites.length > 0 && (
          <div style={{ marginBottom: 44 }}>
            <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500 }}>Activités</h2>
              <span style={{ fontSize: 14, color: "#a89a8c", fontStyle: "italic" }}>
                {activites.length} élément{activites.length > 1 ? "s" : ""}
              </span>
            </div>
            {activites.map((item) => (
              <ListeDeVoyageCarte key={item.id} slug={slug} item={item} onParticipeUrl={carnet.onParticipeUrl!} />
            ))}
          </div>
        )}

        {equipement.length > 0 && (
          <>
            <div style={{ fontSize: 14.5, color: "#a89a8c", marginBottom: 10 }}>
              <IconCadeau />
              Pour préparer notre voyage
            </div>
            <div style={{ marginBottom: 44 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500 }}>Équipements</h2>
                <span style={{ fontSize: 14, color: "#a89a8c", fontStyle: "italic" }}>
                  {equipement.length} élément{equipement.length > 1 ? "s" : ""}
                </span>
              </div>
              <p style={{ fontSize: 14.5, color: "#6b6158", lineHeight: 1.6, margin: "-8px 0 18px" }}>
                Quelques indispensables qui nous accompagneront pendant notre lune de miel.
              </p>
              {equipement.map((item) => (
                <ListeDeVoyageCarte key={item.id} slug={slug} item={item} onParticipeUrl={carnet.onParticipeUrl!} />
              ))}
            </div>
          </>
        )}

        <div style={{ fontSize: 14.5, color: "#a89a8c", marginBottom: 10 }}>
          <IconEtoile />
          Une petite folie pour le voyage
        </div>
        <div style={{ marginBottom: 44 }}>
          <div style={{ marginBottom: 18 }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 500 }}>À vous de choisir</h2>
          </div>
          <ListeDeVoyageCarteLibre slug={slug} onParticipeUrl={carnet.onParticipeUrl} montantReuniInitial={carnet.contributionLibreReunie ?? 0} />
        </div>
      </div>

      {/* Footer */}
      <div style={{ textAlign: "center", padding: "32px 28px 44px", background: DARK }}>
        <p style={{ fontSize: 13, color: "#cfc4b8", lineHeight: 1.9, maxWidth: 480, margin: "0 auto" }}>
          Merci du fond du cœur d&apos;être présents dans notre vie.
          <br />
          Chaque participation nous touche profondément et nous aidera à faire de ce voyage de noces un véritable
          conte de fées.
          <br />
          Choisissez le moment ou le cadeau qui vous parle, et nous nous chargerons du reste… avec tout notre amour.
        </p>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginTop: 16 }}>
          <path
            d="M12 21s-7.5-4.6-10-9.3C.4 8.3 2 4.5 5.7 4c2.2-.3 4.2.9 6.3 3 2.1-2.1 4.1-3.3 6.3-3 3.7.5 5.3 4.3 3.7 7.7C19.5 16.4 12 21 12 21Z"
            stroke={GOLD}
            strokeWidth={1.5}
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
