import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import ServiceWorkerRegister from "./ServiceWorkerRegister";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://mamzellesenvadrouille.com"),
  title: "MamZelles en Vadrouille",
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
      </head>
      <body>
        {children}
        {/* Service Worker : cache hors-ligne pour les carnets de voyage (cartes, pages, checklists) */}
        <ServiceWorkerRegister />
        {/* Vercel Analytics : cookieless, données agrégées et anonymes, aucun consentement requis. */}
        <Analytics />
      </body>
    </html>
  );
}
