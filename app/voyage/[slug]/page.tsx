// app/voyage/[slug]/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Lightbulb, Plane, Heart, AlertTriangle } from "lucide-react";
import { getCarnetComplet, getMeteoActuelle, getCarnetProgress, getTauxDevise, deviseDepuisPays } from "@/lib/carnets";
import DestinationTabs from "./DestinationTabs";
import ParcoursSection from "./ParcoursSection";
import BudgetSection from "./BudgetSection";
import CheckList from "./CheckList";
import ReservationList from "./ReservationList";
import ContactsUrgence from "./ContactsUrgence";
import NotesSection from "./NotesSection";
import ScrollToTop from "./ScrollToTop";
import styles from "./carnet.module.css";

export default async function CarnetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const carnet = await getCarnetComplet(slug);

  if (!carnet) notFound();

  const progress = await getCarnetProgress(slug);

  // Météo en temps réel pour CHAQUE destination (îles différentes = climats différents)
  const meteoParDestination = await Promise.all(
    carnet.destinationsCompletes.map((dest) =>
      typeof dest.lat === "number" && typeof dest.lng === "number"
        ? getMeteoActuelle(dest.lat, dest.lng)
        : Promise.resolve(null)
    )
  );

  // Taux de change en temps réel pour chaque destination ayant une devise détectée
  // (récupéré côté serveur, comme la météo, pour fiabilité maximale)
  const tauxParDestination = await Promise.all(
    carnet.destinationsCompletes.map((dest) => {
      const devise = deviseDepuisPays(dest.pays);
      return devise && dest.afficherConvertisseur !== false ? getTauxDevise(devise) : Promise.resolve(null);
    })
  );

  // Étapes du parcours construites automatiquement : ville de départ → chaque destination du carnet → retour.
  // Si "villeDepart" n'est pas renseignée, on retombe sur la saisie manuelle historique.
  const etapesAuto =
    carnet.villeDepart && typeof carnet.villeDepart.lat === "number" && typeof carnet.villeDepart.lng === "number"
      ? [
          carnet.villeDepart,
          ...(carnet.escales ?? []),
          ...carnet.destinationsCompletes
            .filter((d): d is typeof d & { lat: number; lng: number } => typeof d.lat === "number" && typeof d.lng === "number")
            .map((d) => ({ nom: d.nom, lat: d.lat, lng: d.lng })),
          carnet.villeDepart,
        ]
      : null;
  const parcoursCoordsAffiche = etapesAuto ?? carnet.parcoursCoords ?? [];
  const parcoursNomsAffiches = etapesAuto ? etapesAuto.map((e) => e.nom) : carnet.parcours;

  // Compte à rebours avant le départ (uniquement si le voyage n'a pas encore commencé)
  const aujourdhui = new Date();
  aujourdhui.setHours(0, 0, 0, 0);
  const dateDepart = new Date(carnet.dates.debut);
  dateDepart.setHours(0, 0, 0, 0);
  const joursAvantDepart = Math.round((dateDepart.getTime() - aujourdhui.getTime()) / (1000 * 60 * 60 * 24));

  // Pendant le voyage : jour actuel / durée totale, pour la barre de progression
  const dateFin = new Date(carnet.dates.fin);
  dateFin.setHours(0, 0, 0, 0);
  const enVoyage = joursAvantDepart < 0 && aujourdhui <= dateFin;
  const dureeTotaleJours = Math.round((dateFin.getTime() - dateDepart.getTime()) / (1000 * 60 * 60 * 24)) + 1;
  const jourActuel = Math.round((aujourdhui.getTime() - dateDepart.getTime()) / (1000 * 60 * 60 * 24)) + 1;

  return (
    <main className={styles.body}>
      <div className={styles.hero} style={{ backgroundImage: `url('${carnet.hero.photo}')` }}>
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>{carnet.client.typeVoyage}</span>
          <h1 className={styles.display1}>{carnet.client.prenoms}</h1>
          <div className={styles.place}>{carnet.destination}</div>
          <div className={styles.dates}>
            {new Date(carnet.dates.debut).toLocaleDateString("fr-FR", { day: "numeric", month: "long" })}
            {" — "}
            {new Date(carnet.dates.fin).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </div>
        </div>
      </div>

      {joursAvantDepart >= 0 && (
        <div className={styles.countdownBand}>
          {joursAvantDepart > 0 ? (
            <>
              <div className={styles.countdownLabel}>Avant le départ</div>
              <div className={styles.countdownNum} style={{ fontSize: 30, display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <Plane size={20} color="#a8734c" strokeWidth={2} />
                J-{joursAvantDepart}
                <span style={{ width: 0, display: "inline-block" }} aria-hidden="true" />
              </div>
            </>
          ) : (
            <>
              <div className={styles.countdownLabel}>Aujourd&apos;hui</div>
              <div className={styles.countdownNum} style={{ fontSize: 30, display: "flex", alignItems: "center", justifyContent: "center", gap: 10 }}>
                <Plane size={22} color="#a8734c" strokeWidth={2} />
                Bon voyage !
                <span style={{ width: 2, display: "inline-block" }} aria-hidden="true" />
              </div>
            </>
          )}
        </div>
      )}

      {enVoyage && (
        <div className={styles.countdownBand}>
          <div className={styles.countdownLabel}>Votre séjour</div>
          <div className={styles.countdownNum} style={{ fontSize: 30 }}>Jour {jourActuel} sur {dureeTotaleJours}</div>
        </div>
      )}

      <section className={styles.wrap}>
        <div className={styles.welcome}>
          <h2 className={styles.display2}>Bienvenue</h2>
          <p className={styles.bodySerif}>{carnet.bienvenue.message}</p>
          <div className={styles.signature}>Amélie & Laurie</div>
        </div>
      </section>

      <section className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Votre voyage</span>
          <h2 className={styles.display2}>
            En <em>bref</em>
          </h2>
        </div>
        <div className={styles.overviewGrid} style={{ marginTop: -12 }}>
          <div className={styles.overviewItem}>
            <div className={styles.val}>{carnet.overview.decalage.replace(/^([+-])\s*(\d+)\s*h/, "$1 $2 h")}</div>
            <div className={styles.lbl}>Décalage horaire</div>
          </div>
          <div className={styles.overviewItem}>
            <div className={styles.val}>{carnet.overview.dureeJours} jours</div>
            <div className={styles.lbl}>Durée du séjour</div>
          </div>
          <div className={styles.overviewItem}>
            <div className={styles.val}>{carnet.destinationsCompletes.length}</div>
            <div className={styles.lbl}>Destination{carnet.destinationsCompletes.length > 1 ? "s" : ""}</div>
          </div>
        </div>

        {(carnet.budget.length > 0 || progress.budgetCustom.length > 0) && (
          <>
            <h2 className={styles.display2} style={{ marginTop: 75, marginBottom: 32 }}>
              Budget <em>estimé</em>
            </h2>
            <BudgetSection budget={carnet.budget} slug={carnet.slug} budgetCustomInitial={progress.budgetCustom} />
          </>
        )}
      </section>

      <section className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Le parcours</span>
          <h2 className={styles.display2}>
            Vos <em>étapes</em>
          </h2>
        </div>
        <ParcoursSection
          parcours={parcoursNomsAffiches}
          parcoursCoords={parcoursCoordsAffiche}
          apiKey={process.env.GOOGLE_MAPS_API_KEY ?? ""}
        />
      </section>

      <section className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Votre séjour</span>
          <h2 className={styles.display2}>
            Par <em>destination</em>
          </h2>
        </div>
        <DestinationTabs
          destinations={carnet.destinationsCompletes}
          googleMapsApiKey={process.env.GOOGLE_MAPS_API_KEY ?? ""}
          meteoParDestination={meteoParDestination}
          tauxParDestination={tauxParDestination}
          slug={carnet.slug}
          derouleCustomInitial={progress.derouleCustom}
          dateDebutVoyage={carnet.dates.debut}
        />
      </section>

      {carnet.reservations.length > 0 && (
        <section className={styles.wrap}>
          <div className={styles.sectionHead} style={{ marginBottom: 38 }}>
            <span className={styles.eyebrow}>À préparer</span>
            <h2 className={styles.display2}>
              Vos <em>réservations</em>
            </h2>
          </div>
          <ReservationList
            items={carnet.reservations}
            storageKey={`mamzelles-reservations-${carnet.slug}`}
            slug={carnet.slug}
            listeType="reservations"
            progressInitiale={progress.reservations}
          />
        </section>
      )}

      {carnet.conseils.length > 0 && (
        <section className={styles.wrap}>
          <div className={styles.sectionHead}>
            <span className={styles.eyebrow}>Notre expertise</span>
            <h2 className={styles.display2}>
              Les conseils des <em>MamZelles</em>
            </h2>
          </div>
          {carnet.conseils.map((c, i) => (
            <div className={styles.advice} key={i}>
              <div className={styles.tag}>
                {c.type === "conseil" && (
                  <>
                    <Lightbulb size={18} color="#c8956c" strokeWidth={2} className={styles.tagIcon} style={{ marginTop: -3 }} /> Notre astuce
                  </>
                )}
                {c.type === "coup-de-coeur" && (
                  <>
                    <Heart size={18} color="#c8956c" strokeWidth={2} className={styles.tagIcon} style={{ marginTop: -3 }} /> Coup de cœur
                  </>
                )}
                {c.type === "a-eviter" && (
                  <>
                    <AlertTriangle size={18} color="#c8956c" strokeWidth={2} className={styles.tagIcon} style={{ marginTop: -3 }} /> À éviter
                  </>
                )}
              </div>
              <p className={styles.bodySerif}>{c.texte}</p>
            </div>
          ))}
        </section>
      )}

      <section className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>À vérifier avant de partir</span>
          <h2 className={styles.display2}>
            Les <em>indispensables</em>
          </h2>
        </div>
        <div className={styles.practicalBox}>
          <p><strong>Visa :</strong> {carnet.indispensables.visa}</p>
          <p><strong>Passeport :</strong> {carnet.indispensables.passeport}</p>
          <p><strong>Vaccins :</strong> {carnet.indispensables.vaccins}</p>
          <p><strong>Assurance voyage :</strong> {carnet.indispensables.assurance}</p>
          <p><strong>Monnaie :</strong> {carnet.indispensables.monnaie}</p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 20 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              background: "#fff",
              border: "1px solid #e8e0d6",
              borderRadius: 10,
              padding: "16px 20px",
            }}
          >
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1a1512", marginBottom: 3 }}>
                Sites & activités - GetYourGuide
              </div>
              <div style={{ fontSize: 12.5, color: "#8a8074" }}>
                -5% avec le code <strong style={{ color: "#c8956c" }}>MAMZELLESENVADROUILLE5</strong>
              </div>
            </div>
            <a
              href="https://www.getyourguide.fr"
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                flexShrink: 0,
                background: "#c8956c",
                color: "#fff",
                fontSize: 11.5,
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: 18,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              En profiter
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              background: "#fff",
              border: "1px solid #e8e0d6",
              borderRadius: 10,
              padding: "16px 20px",
            }}
          >
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1a1512", marginBottom: 3 }}>
                Connexion (eSIM) - Holafly
              </div>
              <div style={{ fontSize: 12.5, color: "#8a8074" }}>
                -5% avec le code <strong style={{ color: "#c8956c" }}>MAMZELLES</strong>
              </div>
            </div>
            <a
              href="https://holafly.sjv.io/jR2Ezn"
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                flexShrink: 0,
                background: "#c8956c",
                color: "#fff",
                fontSize: 11.5,
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: 18,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              En profiter
            </a>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 16,
              background: "#fff",
              border: "1px solid #e8e0d6",
              borderRadius: 10,
              padding: "16px 20px",
            }}
          >
            <div>
              <div style={{ fontSize: 13.5, fontWeight: 600, color: "#1a1512", marginBottom: 3 }}>
                Assurance voyage - Chapka
              </div>
              <div style={{ fontSize: 12.5, color: "#8a8074" }}>
                -5% via <strong style={{ color: "#c8956c" }}>NOTRE LIEN</strong>
              </div>
            </div>
            <a
              href="https://www.chapkadirect.fr/index.php?action=produit&id=924&app=Mamzellesenvadrouille"
              target="_blank"
              rel="noopener noreferrer sponsored"
              style={{
                flexShrink: 0,
                background: "#c8956c",
                color: "#fff",
                fontSize: 11.5,
                fontWeight: 600,
                padding: "6px 12px",
                borderRadius: 18,
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              En profiter
            </a>
          </div>
        </div>
      </section>

      {carnet.checklistValise.length > 0 && (
        <section className={styles.wrap}>
          <div className={styles.sectionHead} style={{ marginBottom: 20 }}>
            <span className={styles.eyebrow}>Avant de partir</span>
            <h2 className={styles.display2}>
              Checklist <em>valise</em>
            </h2>
          </div>
          <CheckList
            items={carnet.checklistValise}
            storageKey={`mamzelles-checklist-valise-${carnet.slug}`}
            slug={carnet.slug}
            listeType="checklistValise"
            progressInitiale={progress.checklistValise}
          />
        </section>
      )}

      {carnet.checklistVoyage && carnet.checklistVoyage.length > 0 && (
        <section className={styles.wrap}>
          <div className={styles.sectionHead} style={{ marginBottom: 20 }}>
            <span className={styles.eyebrow}>Démarches à prévoir</span>
            <h2 className={styles.display2}>
              Checklist <em>voyage</em>
            </h2>
          </div>
          <CheckList
            items={carnet.checklistVoyage}
            storageKey={`mamzelles-checklist-voyage-${carnet.slug}`}
            slug={carnet.slug}
            listeType="checklistVoyage"
            progressInitiale={progress.checklistVoyage}
          />
        </section>
      )}


      <section className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Pense-bête</span>
          <h2 className={styles.display2}>
            Vos <em>notes</em>
          </h2>
        </div>
        <NotesSection slug={carnet.slug} notesInitiales={progress.notesLibres} />
      </section>

      <section className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>En cas de besoin</span>
          <h2 className={styles.display2}>
            Contacts <em>d&apos;urgence</em>
          </h2>
        </div>
        <ContactsUrgence
          contacts={carnet.contactsUrgence ?? []}
          slug={carnet.slug}
          contactsCustomInitiaux={progress.contactsCustom}
        />
      </section>

      <ScrollToTop />

      <div className={styles.footerEnd} style={{ marginTop: 32 }}>
        <p>
          Il y a des voyages qu&apos;on oublie.
          <br />
          Et ceux qui changent une vie.
        </p>
        <div className={styles.brand}>MamZelles en Vadrouille</div>
      </div>
    </main>
  );
}
