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

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
