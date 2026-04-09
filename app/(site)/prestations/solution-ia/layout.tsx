import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions IA sur mesure — Intelligence artificielle appliquée",
  description: "Développement de solutions IA sur mesure : analyse de données, automatisation cognitive, IA conversationnelle, modèles prédictifs et NLP. Transformez vos données en valeur.",
  alternates: { canonical: "/prestations/solution-ia" },
  openGraph: {
    title: "Solutions IA | VV Consulting",
    description: "Solutions d'intelligence artificielle sur mesure pour transformer vos données en avantage compétitif durable.",
    url: "/prestations/solution-ia",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Solutions Intelligence Artificielle sur mesure",
  description:
    "Développement de solutions IA sur mesure : analyse de données, automatisation cognitive, IA conversationnelle, modèles prédictifs et traitement du langage naturel.",
  url: "https://vv-agence-consulting.com/prestations/solution-ia",
  serviceType: "Intelligence Artificielle",
  areaServed: { "@type": "Country", name: "France" },
  provider: {
    "@type": "ProfessionalService",
    name: "VV Consulting",
    url: "https://vv-agence-consulting.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solutions IA",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Analyse de données et IA prédictive" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisation cognitive" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IA conversationnelle et chatbots" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "NLP et text mining" } },
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
