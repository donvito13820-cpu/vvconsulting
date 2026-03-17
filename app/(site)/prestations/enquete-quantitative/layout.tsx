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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
