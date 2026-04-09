import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Automatisation des processus — Libérez vos équipes",
  description: "Automatisez vos processus métier : finance, RH, commercial et opérations. Réduisez les erreurs, gagnez du temps et concentrez-vous sur les activités à forte valeur ajoutée.",
  alternates: { canonical: "/prestations/automatisation" },
  openGraph: {
    title: "Automatisation | VV Consulting",
    description: "Automatisation des processus métier pour libérer vos équipes des tâches répétitives et accélérer votre croissance.",
    url: "/prestations/automatisation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Automatisation des processus métier",
  description:
    "Automatisation des processus finance, RH, commercial et opérations. Réduction des tâches répétitives, élimination des erreurs humaines et gain de productivité de 20 à 50%.",
  url: "https://vv-agence-consulting.com/prestations/automatisation",
  serviceType: "Automatisation des processus",
  areaServed: { "@type": "Country", name: "France" },
  provider: {
    "@type": "ProfessionalService",
    name: "VV Consulting",
    url: "https://vv-agence-consulting.com",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Solutions d'automatisation",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisation de la facturation et des relances" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisation commerciale et CRM" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automatisation de l'organisation interne" } },
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
