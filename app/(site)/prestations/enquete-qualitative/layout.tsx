import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquête Qualitative — Comprendre les motivations profondes",
  description: "Explorez en profondeur les motivations et perceptions de vos cibles. Entretiens individuels, focus groups et études ethnographiques pour des insights uniques.",
  alternates: { canonical: "/prestations/enquete-qualitative" },
  openGraph: {
    title: "Enquête Qualitative | VV Consulting",
    description: "Entretiens, focus groups et observation terrain pour comprendre le pourquoi derrière les comportements de vos cibles.",
    url: "/prestations/enquete-qualitative",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Enquête qualitative — Comprendre les motivations profondes",
  description:
    "Exploration qualitative en profondeur : entretiens individuels, focus groups, études ethnographiques pour comprendre les motivations et perceptions de vos cibles.",
  url: "https://vv-agence-consulting.com/prestations/enquete-qualitative",
  serviceType: "Étude qualitative",
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
