import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CookieBanner from "./components/CookieBanner";

export const metadata: Metadata = {
  title: "MamZelles en vadrouille",
  description: "Votre travel planner sur-mesure",
  alternates: {
    canonical: "https://mamzellesenvadrouille.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        {/* GA script chargé uniquement si l'utilisateur accepte — déclenché depuis CookieBanner */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-85C1JHTMSH"
          strategy="lazyOnload"
          id="ga-script"
        />
      </head>
      <body>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
