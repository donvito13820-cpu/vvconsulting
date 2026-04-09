import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Externaliser son expertise conseil — Avantages et stratégie (2026)",
  description: "Pourquoi externaliser votre expertise conseil ? Accédez à des compétences pointues sans les coûts fixes d'un recrutement, avec flexibilité et expertise.",
  alternates: { canonical: "/articles/expertise-conseil" },
  openGraph: {
    title: "Externaliser son expertise conseil | VV Consulting",
    description: "Les avantages de l'externalisation du conseil : expertise pointue, flexibilité et maîtrise des coûts.",
    url: "/articles/expertise-conseil",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Pourquoi externaliser son expertise conseil ? Avantages et stratégie",
  description:
    "Accédez à une expertise pointue sans les coûts fixes d'un recrutement. Les avantages concrets de l'externalisation du conseil stratégique pour les entreprises.",
  url: "https://vv-agence-consulting.com/articles/expertise-conseil",
  datePublished: "2026-02-01",
  dateModified: "2026-02-01",
  author: {
    "@type": "Organization",
    name: "VV Consulting",
    url: "https://vv-agence-consulting.com",
  },
  publisher: {
    "@type": "Organization",
    name: "VV Consulting",
    url: "https://vv-agence-consulting.com",
    logo: { "@type": "ImageObject", url: "https://vv-agence-consulting.com/logo.svg" },
  },
  mainEntityOfPage: "https://vv-agence-consulting.com/articles/expertise-conseil",
  about: [
    { "@type": "Thing", name: "Conseil stratégique externalisé" },
    { "@type": "Thing", name: "Consulting PME" },
    { "@type": "Thing", name: "Externalisation" },
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
