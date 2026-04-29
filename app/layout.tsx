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
    default: "VV Agence Consulting — Stratégie, Innovation & RSE",
    template: "%s | VV Agence Consulting",
  },
  description:
    "Cabinet de conseil digital, solutions SaaS et RSE pour entreprises ambitieuses. Missions sur mesure, intégration IA et développement durable. Discutons de votre projet.",
  keywords: [
    "agence consulting", "conseil digital", "missions sur mesure", "solutions SaaS",
    "conseil RSE", "intégration IA", "automatisation", "développement durable",
    "stratégie entreprise", "transformation digitale", "VV Agence Consulting",
  ],
  authors: [{ name: "VV Agence Consulting" }],
  creator: "VV Agence Consulting",
  publisher: "VV Agence Consulting",
  formatDetection: { telephone: true, email: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "VV Agence Consulting",
    title: "VV Agence Consulting — Stratégie, Innovation & RSE",
    description:
      "Cabinet de conseil digital, solutions SaaS et RSE. Missions sur mesure, intégration IA et stratégie développement durable pour entreprises ambitieuses.",
    url: siteUrl,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "VV Agence Consulting" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "VV Agence Consulting — Stratégie, Innovation & RSE",
    description:
      "Cabinet de conseil digital, solutions SaaS et RSE. Missions sur mesure, intégration IA et développement durable.",
    images: ["/opengraph-image"],
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

const BASE_URL = siteUrl;

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${BASE_URL}/#organization`,
      name: "VV Agence Consulting",
      description:
        "Cabinet de conseil digital, solutions SaaS et RSE. Missions sur mesure, intégration IA et stratégie développement durable pour entreprises ambitieuses.",
      url: BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${BASE_URL}/logo.svg`,
        width: 200,
        height: 60,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+33-6-73-83-75-75",
          email: "vito.ferrandis@edhec.com",
          contactType: "customer service",
          areaServed: "FR",
          availableLanguage: "French",
        },
        {
          "@type": "ContactPoint",
          telephone: "+33-6-46-87-75-15",
          email: "victor.casen@edhec.com",
          contactType: "customer service",
          areaServed: "FR",
          availableLanguage: "French",
        },
      ],
      founder: [
        { "@type": "Person", name: "Victor", jobTitle: "Co-fondateur, Responsable Marketing & Consultant" },
        { "@type": "Person", name: "Vito", jobTitle: "Co-fondateur, Développeur & Consultant" },
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Services VV Agence Consulting",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Missions sur mesure — Conseil digital & IA", url: `${BASE_URL}/missions-sur-mesure` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Solutions SaaS — Gestion des avis clients", url: `${BASE_URL}/solutions-saas` } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conseil RSE & Stratégie développement durable", url: `${BASE_URL}/conseil-rse` } },
        ],
      },
      areaServed: { "@type": "Country", name: "France" },
      knowsLanguage: "fr",
      sameAs: [],
    },
  ],
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
