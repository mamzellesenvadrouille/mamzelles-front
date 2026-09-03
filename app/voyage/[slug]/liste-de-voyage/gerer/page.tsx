// app/voyage/[slug]/liste-de-voyage/gerer/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/gerer/page.tsx
import { notFound } from "next/navigation";
import { getCarnetComplet, getElementsListeDeVoyage, type ElementListeDeVoyage } from "@/lib/carnets";
import GererCadeaux from "./GererCadeaux";
import CopierLien from "./CopierLien";

export const dynamic = "force-dynamic";

const GOLD = "#c8956c";
const DARK = "#1a1512";
const CREAM = "#f8f4ef";
const LINE = "#e6ddd1";
const FUNDED = "#8a9a7e";

function LigneElement({ item }: { item: ElementListeDeVoyage }) {
  const reuni = item.montantReuni ?? 0;
  const prix = item.prixIndicatif;
  const financee = prix != null && reuni >= prix;
  const pourcentage = prix && prix > 0 ? Math.min(100, Math.round((reuni / prix) * 100)) : 0;

  let meta: string;
  if (financee) meta = "Financé";
  else if (reuni === 0) meta = "Pas encore de participation";
  else meta = `${reuni} € réunis`;

  return (
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12, marginBottom: 8 }}>
        <div>
          <div style={{ fontSize: 15, fontWeight: 500 }}>{item.nom}</div>
          <div style={{ fontSize: 12.5, color: financee ? FUNDED : "#8a7f74", marginTop: 2 }}>{meta}</div>
        </div>
        {prix != null && (
          <div style={{ fontSize: 13.5, color: "#6b6158", flexShrink: 0, whiteSpace: "nowrap" }}>
            {reuni} € / {prix} €
          </div>
        )}
      </div>
      {prix != null && (
        <div style={{ height: 5, background: LINE, borderRadius: 3, overflow: "hidden" }}>
          <div style={{ height: "100%", width: `${pourcentage}%`, background: financee ? FUNDED : GOLD, borderRadius: 3 }} />
        </div>
      )}
    </div>
  );
}

export default async function GererListeDeVoyagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carnet = await getCarnetComplet(slug);
  if (!carnet) notFound();
  if (!carnet.onParticipeUrl) notFound();

  const elements = getElementsListeDeVoyage(carnet, carnet.destinationsCompletes);
  const lienPublic = `https://mamzellesenvadrouille.com/voyage/${slug}/liste-de-voyage`;

  const transports = elements.filter((el) => el.categorie === "transport");
  const hebergements = elements.filter((el) => el.categorie === "hebergement");
  const activites = elements.filter((el) => el.categorie === "activite");

  const totalReuni = elements.reduce((s, el) => s + (el.montantReuni ?? 0), 0) + (carnet.contributionLibreReunie ?? 0);
  const totalParticipations = elements.filter((el) => (el.montantReuni ?? 0) > 0).length;

  return (
    <div style={{ background: CREAM, minHeight: "100vh", padding: "48px 24px 80px", fontFamily: "Inter, sans-serif", color: DARK }}>
      <div style={{ maxWidth: 620, margin: "0 auto" }}>
        <div style={{ fontSize: 14, color: "#a89a8c", marginBottom: 6 }}>Carnet de voyage, {carnet.destination}</div>
        <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 30, fontWeight: 500, marginBottom: 28 }}>
          Gérez votre voyage
        </h1>

        <div style={{ background: "#fffdfa", border: `1px solid ${LINE}`, borderRadius: 6, overflow: "hidden" }}>
          <div style={{ padding: "24px 26px 20px", borderBottom: `1px solid ${LINE}` }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 500, marginBottom: 6 }}>
              La Liste de Voyage
            </h2>
            <p style={{ fontSize: 14.5, color: "#6b6158", lineHeight: 1.6 }}>
              Une seule cagnotte OnParticipe pour tout le voyage. Partagez le lien avec vos proches.
            </p>

            <div style={{ marginTop: 18 }}>
              <CopierLien lien={lienPublic} />
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 18, marginTop: 16, paddingTop: 18, borderTop: `1px dashed ${LINE}` }}>
              <img
                src={`https://api.qrserver.com/v1/create-qr-code/?size=160x160&color=1a1512&bgcolor=fffdfa&data=${encodeURIComponent(lienPublic)}`}
                alt="QR code de la Liste de Voyage"
                width={80}
                height={80}
                style={{ borderRadius: 6, border: `1px solid ${LINE}`, flexShrink: 0 }}
              />
              <div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 18.5, fontWeight: 500, marginBottom: 3 }}>
                  À afficher le jour J
                </p>
                <p style={{ fontSize: 13, color: "#6b6158", lineHeight: 1.5 }}>
                  Un QR code prêt à imprimer, pour que vos invités découvrent la Liste de Voyage directement au mariage.
                </p>
              </div>
            </div>
          </div>

          <div style={{ padding: "8px 14px 4px" }}>
            {transports.length > 0 && (
              <>
                <div style={{ padding: "22px 4px 12px", fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 500 }}>
                  Transports
                </div>
                {transports.map((item) => (
                  <LigneElement key={item.id} item={item} />
                ))}
              </>
            )}

            {hebergements.length > 0 && (
              <>
                <div style={{ padding: "22px 4px 12px", fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 500 }}>
                  Hébergements
                </div>
                {hebergements.map((item) => (
                  <LigneElement key={item.id} item={item} />
                ))}
              </>
            )}

            {activites.length > 0 && (
              <>
                <div style={{ padding: "22px 4px 12px", fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 500 }}>
                  Activités
                </div>
                {activites.map((item) => (
                  <LigneElement key={item.id} item={item} />
                ))}
              </>
            )}

            <div style={{ padding: "22px 4px 12px", fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 500 }}>
              Équipements
            </div>
          </div>

          <GererCadeaux slug={slug} cadeauxInitiaux={carnet.listeVoyageCadeaux ?? []} />

          <div style={{ padding: "14px 24px 4px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 500 }}>Un montant libre</div>
              <div style={{ fontSize: 13.5, color: "#6b6158" }}>{carnet.contributionLibreReunie ?? 0} € réunis</div>
            </div>
            <div style={{ fontSize: 12.5, color: "#8a7f74", marginTop: 2, paddingBottom: 18 }}>
              Contributions libres, sans élément précis.
            </div>
          </div>

          <div
            style={{
              padding: "20px 26px 24px",
              borderTop: `1px solid ${LINE}`,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 10,
              background: CREAM,
            }}
          >
            <div style={{ fontSize: 13.5, color: "#6b6158", lineHeight: 1.5 }}>
              <strong style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 17, color: DARK }}>{totalReuni} €</strong>{" "}
              réunis · {totalParticipations} élément{totalParticipations > 1 ? "s" : ""} avec participation
            </div>
            <a
              href={lienPublic}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: GOLD, border: `1px solid #e4c9ae`, padding: "8px 16px", borderRadius: 20, textDecoration: "none", fontWeight: 500, whiteSpace: "nowrap" }}
            >
              Voir côté invités →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
