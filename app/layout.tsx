import type { Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";
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
        {/* Consent Mode v2 : état par défaut (refusé), déclaré AVANT le chargement de gtag.js.
            Obligatoire pour que Google envoie les hits Analytics une fois le consentement accordé. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('consent', 'default', {
                'ad_storage': 'denied',
                'ad_user_data': 'denied',
                'ad_personalization': 'denied',
                'analytics_storage': 'denied'
              });
            `,
          }}
        />
        {/* GA script chargé uniquement si l'utilisateur accepte — déclenché depuis CookieBanner */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-85C1JHTMSH"
          strategy="afterInteractive"
          id="ga-script"
        />
      </head>
      <body>
        {children}
        <CookieBanner />
        {/* Vercel Analytics : ne dépend pas du consentement cookies (pas de tracking
            individuel, données agrégées et anonymes) — actif immédiatement, en parallèle
            de Google Analytics, le temps que le souci GA4 soit résolu. */}
        <Analytics />
      </body>
    </html>
  );
}
