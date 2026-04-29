import type { Metadata } from "next";

const BASE_URL = "https://vv-agence-consulting.com";

export const metadata: Metadata = {
  title: "Missions sur Mesure — Conseil Digital & Automatisation IA",
  description:
    "Création de sites web, automatisation IA et conseil digital sur mesure pour PME. n8n, Make, Zapier, LLMs et stratégie digitale. ROI mesurable, diagnostic gratuit sous 48h.",
  alternates: { canonical: "/missions-sur-mesure" },
  openGraph: {
    title: "Missions sur Mesure — Conseil Digital & Automatisation IA | VV Agence Consulting",
    description:
      "Création de sites web performants, intégration IA et conseil en transformation digitale. Solutions sur mesure orientées ROI pour PME et ETI.",
    url: "/missions-sur-mesure",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Missions sur Mesure — VV Agence Consulting" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Missions sur Mesure — Conseil Digital & Automatisation IA",
  description:
    "Création de sites web performants, automatisation des processus métier avec n8n, Make et Zapier, intégration IA (LLMs) et conseil en transformation digitale pour PME et ETI.",
  url: `${BASE_URL}/missions-sur-mesure`,
  serviceType: "Conseil Digital & Automatisation",
  areaServed: { "@type": "Country", name: "France" },
  provider: {
    "@type": "Organization",
    name: "VV Agence Consulting",
    url: BASE_URL,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Missions sur Mesure",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Création de sites web performants & SEO" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisation des processus métier (n8n, Make, Zapier)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Intégration IA & LLMs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conseil en transformation digitale & audit de maturité" } },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {children}
    </>
  );
}
