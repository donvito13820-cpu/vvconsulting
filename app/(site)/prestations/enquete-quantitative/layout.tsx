import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquête Quantitative — Études statistiques sur mesure",
  description: "Collectez des données chiffrées fiables grâce à nos enquêtes quantitatives. Méthodologie rigoureuse, échantillons représentatifs et analyses statistiques avancées pour éclairer vos décisions stratégiques.",
  alternates: { canonical: "/prestations/enquete-quantitative" },
  openGraph: {
    title: "Enquête Quantitative | VV Consulting",
    description: "Méthodologie rigoureuse pour des données chiffrées fiables. Analyses statistiques avancées pour des décisions éclairées.",
    url: "/prestations/enquete-quantitative",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enquête quantitative — Études statistiques sur mesure",
  description:
    "Collecte de données chiffrées fiables : conception de questionnaires, échantillons représentatifs, analyses statistiques avancées et restitution actionnables.",
  url: "https://vv-agence-consulting.com/prestations/enquete-quantitative",
  serviceType: "Étude quantitative",
  areaServed: { "@type": "Country", name: "France" },
  provider: {
    "@type": "ProfessionalService",
    name: "VV Consulting",
    url: "https://vv-agence-consulting.com",
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
