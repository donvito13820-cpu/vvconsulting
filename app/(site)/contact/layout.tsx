import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Parlons de Votre Projet",
  description:
    "Contactez VV Agence Consulting pour vos projets digitaux, SaaS ou RSE. Devis gratuit sous 48h et rendez-vous en ligne disponibles. Réponse garantie.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Parlons de Votre Projet | VV Agence Consulting",
    description:
      "Prenez contact avec VV Agence Consulting. Devis gratuit sous 48h pour vos projets digitaux, SaaS ou RSE. Réservez un créneau en ligne.",
    url: "/contact",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Contact — VV Agence Consulting" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
