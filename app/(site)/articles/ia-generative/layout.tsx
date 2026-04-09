import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA Générative — Opportunités concrètes pour les PME (2026)",
  description: "Comment intégrer l'IA générative dans votre PME pour augmenter la valeur délivrée et optimiser vos opérations. Guide pratique et cas d'usage.",
  alternates: { canonical: "/articles/ia-generative" },
  openGraph: {
    title: "IA Générative pour les PME | VV Consulting",
    description: "Guide pratique pour intégrer l'IA générative dans votre PME : cas d'usage concrets et stratégie d'adoption.",
    url: "/articles/ia-generative",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "IA générative : opportunités concrètes et rentables pour les PME",
  description:
    "Comment intégrer l'IA générative dans votre PME pour augmenter la valeur délivrée et optimiser vos opérations. Guide pratique et cas d'usage concrets.",
  url: "https://vv-agence-consulting.com/articles/ia-generative",
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
  mainEntityOfPage: "https://vv-agence-consulting.com/articles/ia-generative",
  about: [
    { "@type": "Thing", name: "Intelligence artificielle générative" },
    { "@type": "Thing", name: "PME" },
    { "@type": "Thing", name: "Productivité" },
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
