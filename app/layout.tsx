import type { Metadata } from "next";
import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import IntroOverlay from "@/app/components/IntroOverlay";
import ZoomLock from "@/app/components/ZoomLock";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
});

const siteUrl = "https://vv-agence-consulting.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "VV Consulting | Conseil stratégique & automatisation pour entreprises",
    template: "%s | VV Consulting",
  },
  description:
    "VV Consulting accompagne les entreprises dans leur transformation : conseil stratégique, automatisation des processus, solutions IA et études quantitatives & qualitatives.",
  keywords: [
    "consulting", "conseil stratégique", "automatisation", "intelligence artificielle",
    "transformation digitale", "enquête quantitative", "enquête qualitative",
    "solution IA", "VV Consulting", "conseil entreprise",
  ],
  authors: [{ name: "VV Consulting" }],
  creator: "VV Consulting",
  publisher: "VV Consulting",
  formatDetection: { telephone: true, email: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "VV Consulting",
    title: "VV Consulting | Conseil stratégique & automatisation pour entreprises",
    description:
      "Agence de consulting & automatisation. Du diagnostic stratégique à l'implémentation opérationnelle, nous transformons vos processus pour libérer votre potentiel.",
    url: siteUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "VV Consulting | Conseil stratégique & automatisation",
    description:
      "Agence de consulting & automatisation. Nous accompagnons les entreprises dans leur transformation digitale.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  verification: {
    google: "wQHL03rlzHkOyhAyxgjm5LiXj3Rd62ELycKlp6Y5WZs",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "VV Consulting",
  description:
    "Agence de consulting & automatisation. Conseil stratégique, solutions IA, automatisation des processus et études quantitatives & qualitatives.",
  url: siteUrl,
  logo: `${siteUrl}/logo.svg`,
  contactPoint: [
    { "@type": "ContactPoint", telephone: "+33-6-73-83-75-75", email: "vito.ferrandis@edhec.com", contactType: "customer service", areaServed: "FR", availableLanguage: "French" },
    { "@type": "ContactPoint", telephone: "+33-6-46-87-75-15", email: "victor.casen@edhec.com", contactType: "customer service", areaServed: "FR", availableLanguage: "French" },
  ],
  founder: [
    { "@type": "Person", name: "Victor Casen", jobTitle: "Co-fondateur, Responsable Marketing & Consultant" },
    { "@type": "Person", name: "Vito Ferrandis", jobTitle: "Co-fondateur, Développeur & Consultant" },
  ],
  serviceType: [
    "Conseil stratégique",
    "Automatisation des processus",
    "Solutions Intelligence Artificielle",
    "Enquêtes quantitatives",
    "Enquêtes qualitatives",
  ],
  areaServed: { "@type": "Country", name: "France" },
  knowsLanguage: "fr",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${cormorant.variable}`}>
        <ZoomLock />
        <IntroOverlay />
        {children}
      </body>
    </html>
  );
}
