import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IA Générative — Opportunités concrètes pour les PME",
  description: "Comment intégrer l'IA générative dans votre PME pour augmenter la valeur délivrée et optimiser vos opérations. Guide pratique et cas d'usage.",
  alternates: { canonical: "/articles/ia-generative" },
  openGraph: {
    title: "IA Générative pour les PME | VV Consulting",
    description: "Guide pratique pour intégrer l'IA générative dans votre PME : cas d'usage concrets et stratégie d'adoption.",
    url: "/articles/ia-generative",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
