import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'automatisation, levier de compétitivité décisif en 2026",
  description: "Les entreprises qui automatisent leurs processus gagnent en moyenne 25% de productivité. Découvrez comment l'automatisation peut transformer votre organisation.",
  alternates: { canonical: "/articles/automatisation" },
  openGraph: {
    title: "L'automatisation, levier de compétitivité | VV Consulting",
    description: "Comment l'automatisation des processus peut accélérer votre croissance et améliorer votre productivité de 25%.",
    url: "/articles/automatisation",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "L'automatisation : levier de compétitivité décisif en 2026",
  description:
    "Les entreprises qui automatisent leurs processus gagnent en moyenne 25% de productivité. Découvrez comment l'automatisation transforme la compétitivité des PME.",
  url: "https://vv-agence-consulting.com/articles/automatisation",
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
  mainEntityOfPage: "https://vv-agence-consulting.com/articles/automatisation",
  about: [
    { "@type": "Thing", name: "Automatisation des processus" },
    { "@type": "Thing", name: "Productivité entreprise" },
    { "@type": "Thing", name: "Transformation digitale" },
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
