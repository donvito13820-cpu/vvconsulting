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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
