// app/voyage/[slug]/liste-de-voyage/gerer/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/liste-de-voyage/gerer/page.tsx
import { notFound } from "next/navigation";
import QRCode from "qrcode";
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
      {item.contributions && item.contributions.length > 0 && (
        <div style={{ fontSize: 12, color: "#a89a8c", marginTop: 6 }}>
          Offert par {item.contributions.map((c) => c.prenom || "Anonyme").join(", ")}
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

  // QR code générés en local, à chaque affichage : aucune dépendance à un
  // service externe (pas de risque de panne le jour du mariage).
  const qrAffichage = await QRCode.toDataURL(lienPublic, {
    width: 200,
    margin: 1,
    color: { dark: "#1a1512", light: "#ffffff" },
  });

  // Version imprimable : le QR code brut habillé dans une vraie carte
  // (prénoms, cadre, phrase d'accroche), composée puis rasterisée en PNG.
  const qrBrut = await QRCode.toDataURL(lienPublic, {
    width: 560,
    margin: 0,
    color: { dark: "#1a1512", light: "#ffffff" },
  });
  // Échappe les caractères spéciaux XML (le "&" de "Camille & Hugo" cassait le SVG)
  const echapperXml = (texte: string) =>
    texte.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  const svgCarte = `
    <svg width="900" height="1200" viewBox="0 0 900 1200" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="1200" fill="#f8f4ef"/>
      <rect x="36" y="36" width="828" height="1128" fill="#fffdfa" stroke="#c8956c" stroke-width="1.5"/>
      <rect x="52" y="52" width="796" height="1096" fill="none" stroke="#e6ddd1" stroke-width="1"/>
      <text x="450" y="150" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-style="italic" font-size="30" fill="#c8956c">La Liste de Voyage</text>
      <text x="450" y="245" text-anchor="middle" font-family="Georgia, 'Times New Roman', serif" font-size="52" fill="#1a1512">${echapperXml(carnet.client.prenoms)}</text>
      <text x="450" y="288" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="20" letter-spacing="1" fill="#c8956c">${echapperXml(carnet.destination)}</text>
      <image x="170" y="340" width="560" height="560" href="${qrBrut}"/>
      <text x="450" y="960" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="600" fill="#1a1512">Scannez pour découvrir notre Liste de Voyage</text>
      <text x="450" y="1005" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="19" fill="#8a7f74">et participer à notre lune de miel</text>
      <g transform="translate(434, 1055) scale(1.25)">
        <path
          d="M12 21s-7.5-4.6-10-9.3C.4 8.3 2 4.5 5.7 4c2.2-.3 4.2.9 6.3 3 2.1-2.1 4.1-3.3 6.3-3 3.7.5 5.3 4.3 3.7 7.7C19.5 16.4 12 21 12 21Z"
          fill="none"
          stroke="#c8956c"
          stroke-width="1.5"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  `.trim();
  const bufferImpression = Buffer.from(svgCarte, "utf-8");
  const qrImpression = `data:image/svg+xml;base64,${bufferImpression.toString("base64")}`;

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
          <div style={{ padding: "32px 28px", borderBottom: `1px solid ${LINE}`, textAlign: "center" }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 600, marginBottom: 24 }}>
              Partagez votre Liste de Voyage
            </h2>

            <div style={{ background: CREAM, border: `1px solid ${LINE}`, borderRadius: 8, padding: "24px 20px" }}>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                <div style={{ display: "inline-block", padding: 10, background: "#fff", border: `1px solid ${LINE}`, borderRadius: 10, marginBottom: 12 }}>
                  <img
                    src={qrAffichage}
                    alt="QR code de la Liste de Voyage"
                    width={100}
                    height={100}
                    style={{ display: "block", borderRadius: 4 }}
                  />
                </div>
                <a
                  href={qrImpression}
                  download="qr-code-liste-de-voyage.svg"
                  style={{
                    fontSize: 12.5,
                    fontWeight: 500,
                    color: GOLD,
                    textDecoration: "underline",
                    textUnderlineOffset: "3px",
                    marginBottom: 14,
                  }}
                >
                  Télécharger le QR code
                </a>
              </div>
              <p style={{ fontSize: 13, color: "#8a7f74", lineHeight: 1.5, maxWidth: 320, margin: "0 auto" }}>
                À afficher le jour J : vos proches scannent, et arrivent directement sur la liste.
              </p>

              <div style={{ display: "flex", justifyContent: "center", margin: "22px 0" }}>
                <svg width="66" height="15" viewBox="0 0 110 24" fill="none">
                  <circle cx="6" cy="12" r="2" fill={GOLD} />
                  <path d="M18 12c12-9 25-9 37 0s25 9 37 0" stroke={GOLD} strokeWidth={1.5} strokeLinecap="round" />
                  <circle cx="104" cy="12" r="2" fill={GOLD} />
                </svg>
              </div>

              <div style={{ fontSize: 11.5, color: "#8a7f74", textTransform: "uppercase", letterSpacing: "0.04em", marginBottom: 11 }}>
                Ou envoyez-leur simplement ce lien :
              </div>
              <CopierLien lien={lienPublic} />
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

          <div style={{ padding: "14px 24px 18px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div style={{ fontSize: 15, fontWeight: 500 }}>Un montant libre</div>
              <div style={{ fontSize: 13.5, color: "#6b6158" }}>{carnet.contributionLibreReunie ?? 0} € réunis</div>
            </div>
            <div style={{ fontSize: 12.5, color: "#8a7f74", marginTop: 2 }}>Contributions libres, sans élément précis.</div>
            {carnet.contributionsLibres && carnet.contributionsLibres.length > 0 && (
              <div style={{ fontSize: 12, color: "#a89a8c", marginTop: 6, paddingBottom: 18 }}>
                Offert par {carnet.contributionsLibres.map((c) => c.prenom || "Anonyme").join(", ")}
              </div>
            )}
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
