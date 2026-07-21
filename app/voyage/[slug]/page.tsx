// app/voyage/[slug]/page.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/page.tsx
import { notFound } from "next/navigation";
import { Lightbulb, Plane } from "lucide-react";
import { getCarnetComplet, getMeteoActuelle, getCarnetProgress } from "@/lib/carnets";
import DestinationTabs from "./DestinationTabs";
import ParcoursSection from "./ParcoursSection";
import CheckList from "./CheckList";
import ReservationList from "./ReservationList";
import ContactsUrgence from "./ContactsUrgence";
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
              <div className={styles.countdownNum}>J-{joursAvantDepart}</div>
            </>
          ) : (
            <div className={styles.countdownNum} style={{ fontSize: 26 }}>
              <Plane size={22} color="#a8734c" strokeWidth={2} style={{ marginRight: 10, verticalAlign: "-4px" }} />
              C&apos;est aujourd&apos;hui ! Bon voyage
            </div>
          )}
        </div>
      )}

      <section className={styles.wrap}>
        <div className={styles.welcome}>
          <span className={styles.eyebrow}>Bienvenue</span>
          <p className={styles.bodySerif}>{carnet.bienvenue.message}</p>
          <div className={styles.signature}>Amélie & Laurie</div>
        </div>
      </section>

      <section className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Votre voyage</span>
          <h2 className={styles.display2}>
            En un coup <em>d&apos;œil</em>
          </h2>
        </div>
        <div className={styles.overviewGrid}>
          <div className={styles.overviewItem}>
            <div className={styles.val}>{carnet.overview.decalage}</div>
            <div className={styles.lbl}>Décalage horaire</div>
          </div>
          <div className={styles.overviewItem}>
            <div className={styles.val}>{carnet.overview.dureeJours} jours</div>
            <div className={styles.lbl}>Durée du séjour</div>
          </div>
        </div>

        {carnet.budget.length > 0 && (
          <>
            <h2 className={styles.display2} style={{ marginTop: 44, marginBottom: 28 }}>
              Budget <em>prévu</em>
            </h2>
            <div className={styles.budgetList}>
              {carnet.budget.map((ligne, i) => {
                const total = carnet.budget.reduce((s, l) => s + l.montant, 0);
                const pct = total > 0 ? Math.round((ligne.montant / total) * 100) : 0;
                return (
                  <div className={styles.budgetRow} key={i}>
                    <div className={styles.top}>
                      <span className={styles.label}>{ligne.poste}</span>
                      <span className={styles.amount}>{ligne.montant.toLocaleString("fr-FR")} €</span>
                    </div>
                    <div className={styles.budgetTrack}>
                      <div className={styles.budgetFill} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                );
              })}
            </div>
            <div className={styles.budgetTotal}>
              <span className={styles.label}>Total prévu</span>
              <span className={styles.amount}>
                {carnet.budget.reduce((s, l) => s + l.montant, 0).toLocaleString("fr-FR")} €
              </span>
            </div>
          </>
        )}
      </section>

      <section className={styles.wrap}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>Le parcours</span>
          <h2 className={styles.display2}>
            {parcoursNomsAffiches.length} <em>étapes</em>
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
          slug={carnet.slug}
          derouleCustomInitial={progress.derouleCustom}
        />
      </section>

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
                    <Lightbulb size={18} color="#c8956c" strokeWidth={2} className={styles.tagIcon} /> Notre astuce
                  </>
                )}
                {c.type === "coup-de-coeur" && (
                  <>
                    <span className={styles.tagIcon}>❤</span> Coup de cœur
                  </>
                )}
                {c.type === "a-eviter" && (
                  <>
                    <span className={styles.tagIcon}>⚠</span> À éviter
                  </>
                )}
              </div>
              <p className={styles.bodySerif}>{c.texte}</p>
            </div>
          ))}
        </section>
      )}

      {carnet.reservations.length > 0 && (
        <section className={styles.wrap}>
          <div className={styles.sectionHead} style={{ marginBottom: 30 }}>
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
      </section>

      {carnet.checklistValise.length > 0 && (
        <section className={styles.wrap}>
          <div className={styles.sectionHead} style={{ marginBottom: 30 }}>
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
          <div className={styles.sectionHead} style={{ marginBottom: 30 }}>
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

      <div className={styles.footerEnd}>
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
