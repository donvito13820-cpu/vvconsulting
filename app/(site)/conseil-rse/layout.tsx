import type { Metadata } from "next";

const BASE_URL = "https://vv-agence-consulting.com";

export const metadata: Metadata = {
  title: "Conseil RSE — Stratégie Développement Durable Entreprise",
  description:
    "Cabinet conseil RSE : diagnostic, conception de projets durables, financement (subventions, ESG) et pilotage. CSRD, bilan carbone, labellisation RSE. Contactez-nous.",
  alternates: { canonical: "/conseil-rse" },
  openGraph: {
    title: "Conseil RSE — Stratégie Développement Durable | VV Agence Consulting",
    description:
      "Accompagnement RSE complet : diagnostic, projets sur mesure, montage financier et pilotage. Expertise CSRD, taxonomie européenne et loi Pacte pour grandes entreprises et ETI.",
    url: "/conseil-rse",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Conseil RSE — VV Agence Consulting" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Conseil RSE & Stratégie Développement Durable",
  description:
    "Accompagnement RSE de bout en bout : diagnostic initial, conception de projets durables sur mesure, montage financier (subventions, fonds ESG) et pilotage long terme. Expertise CSRD, taxonomie européenne, bilan carbone et labellisation RSE.",
  url: `${BASE_URL}/conseil-rse`,
  serviceType: "Conseil RSE & Développement Durable",
  areaServed: { "@type": "Country", name: "France" },
  provider: {
    "@type": "Organization",
    name: "VV Agence Consulting",
    url: BASE_URL,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services Conseil RSE",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Diagnostic RSE initial & cartographie des impacts" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Conception de projets RSE sur mesure" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Montage financier — aides, subventions, fonds ESG" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Pilotage, reporting RSE et communication" } },
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
