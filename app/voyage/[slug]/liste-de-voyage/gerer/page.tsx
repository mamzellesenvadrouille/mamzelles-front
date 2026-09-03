// app/voyage/[slug]/liste-de-voyage/gerer/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/gerer/page.tsx
import { notFound } from "next/navigation";
import { getCarnetComplet, getElementsListeDeVoyage } from "@/lib/carnets";
import GererCadeaux from "./GererCadeaux";
import CopierLien from "./CopierLien";

export const dynamic = "force-dynamic";

const GOLD = "#c8956c";
const DARK = "#1a1512";
const CREAM = "#f8f4ef";
const LINE = "#e6ddd1";

const CATEGORIES: { key: "transport"; titre: string }[] = [{ key: "transport", titre: "Transports" }];

export default async function GererListeDeVoyagePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carnet = await getCarnetComplet(slug);
  if (!carnet) notFound();
  if (!carnet.onParticipeUrl) notFound();

  const elements = getElementsListeDeVoyage(carnet);
  const lienPublic = `https://mamzellesenvadrouille.com/voyage/${slug}/liste-de-voyage`;

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

          <div style={{ padding: "8px 14px 20px" }}>
            {CATEGORIES.map(({ key, titre }) => {
              const items = elements.filter((el) => el.categorie === key);
              if (items.length === 0) return null;
              return (
                <div key={key}>
                  <div style={{ padding: "22px 4px 12px", fontFamily: "'Cormorant Garamond', serif", fontSize: 21, fontWeight: 500 }}>
                    {titre}
                  </div>
                  {items.map((item) => (
                    <div key={item.id} style={{ padding: "12px 14px", borderRadius: 4 }}>
                      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 12 }}>
                        <div>
                          <div style={{ fontSize: 15, fontWeight: 500 }}>{item.nom}</div>
                          {item.description && <div style={{ fontSize: 13, color: "#8a7f74", marginTop: 2 }}>{item.description}.</div>}
                        </div>
                        <div style={{ fontSize: 13.5, color: "#6b6158", flexShrink: 0, whiteSpace: "nowrap" }}>
                          {item.prixIndicatif != null ? `${item.prixIndicatif} €` : ""}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              );
            })}
            <p style={{ fontSize: 12.5, color: "#a89a8c", lineHeight: 1.5, padding: "10px 14px 0" }}>
              Cette partie est préparée par MamZelles depuis votre carnet. Pour en modifier le contenu, contactez-nous.
            </p>
          </div>

          <GererCadeaux slug={slug} cadeauxInitiaux={carnet.listeVoyageCadeaux ?? []} />

          <div style={{ padding: "16px 26px 22px", borderTop: `1px solid ${LINE}` }}>
            <a
              href={lienPublic}
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: 13, color: GOLD, fontWeight: 500, textDecoration: "none" }}
            >
              Voir ma Liste de Voyage côté invités →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
