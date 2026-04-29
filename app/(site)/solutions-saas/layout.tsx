import type { Metadata } from "next";

const BASE_URL = "https://vv-agence-consulting.com";

export const metadata: Metadata = {
  title: "Solutions SaaS — Gestion des Avis Clients en Temps Réel",
  description:
    "Centralisez et analysez vos avis Google en temps réel. Dashboard intuitif, réponse rapide, catégorisation intelligente et rapport mensuel automatisé. SaaS simple pour PME.",
  alternates: { canonical: "/solutions-saas" },
  openGraph: {
    title: "Solutions SaaS — Gestion des Avis Clients | VV Agence Consulting",
    description:
      "Plateforme SaaS de gestion et d'analyse des avis clients. Centralisez Google, Tripadvisor et plus. Dashboard temps réel, rapport mensuel narratif. Demandez une démo.",
    url: "/solutions-saas",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Solutions SaaS — VV Agence Consulting" }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "VV SaaS — Gestion & Analyse des Avis Clients",
  description:
    "Plateforme SaaS de centralisation, analyse et réponse aux avis clients en temps réel. Dashboard, catégorisation intelligente, rapport mensuel automatisé et filtrage des mots-clés.",
  url: `${BASE_URL}/solutions-saas`,
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    priceCurrency: "EUR",
    availability: "https://schema.org/OnlineOnly",
  },
  provider: {
    "@type": "Organization",
    name: "VV Agence Consulting",
    url: BASE_URL,
  },
  featureList: [
    "Dashboard temps réel multi-plateformes",
    "Réponse aux avis depuis la plateforme",
    "Catégorisation intelligente par thématique",
    "Rapport mensuel automatisé",
    "Audit interne des axes d'amélioration",
    "Filtrage des mots-clés récurrents",
  ],
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
