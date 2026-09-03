// app/voyage/[slug]/ListeDeVoyageBanner.tsx
// À placer dans : /Users/lauriemelaye/Desktop/mamzelles-front/app/voyage/[slug]/ListeDeVoyageBanner.tsx
//
// Bannière discrète pointant vers la Liste de Voyage, à afficher sur le
// carnet principal si la fonctionnalité est activée pour ce couple.
// N'affiche rien si onParticipeUrl n'est pas renseigné.

export default function ListeDeVoyageBanner({ slug, actif }: { slug: string; actif: boolean }) {
  if (!actif) return null;

  return (
    <div
      style={{
        maxWidth: 900,
        margin: "0 auto 40px",
        padding: "20px 24px",
        background: "#1a1512",
        borderRadius: 6,
        textAlign: "center",
      }}
    >
      <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, color: "#fff", marginBottom: 6 }}>
        Votre voyage peut aussi être offert par vos proches
      </p>
      <p style={{ fontSize: 13.5, color: "#cfc4b8", marginBottom: 14, lineHeight: 1.5 }}>
        Partagez votre Liste de Voyage et laissez vos proches choisir une expérience à vous offrir.
      </p>
      <a
        href={`/voyage/${slug}/liste-de-voyage/gerer`}
        style={{
          display: "inline-block",
          fontFamily: "Inter, sans-serif",
          fontSize: 13,
          fontWeight: 600,
          color: "#fff",
          background: "#c8956c",
          padding: "10px 20px",
          borderRadius: 4,
          textDecoration: "none",
        }}
      >
        Gérer ma Liste de Voyage
      </a>
    </div>
  );
}
