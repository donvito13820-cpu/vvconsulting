import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pourquoi nous choisir — Nos avantages",
  description: "Pourquoi faire appel à VV Consulting ? Expertise sur mesure, approche pragmatique, résultats mesurables et accompagnement de bout en bout.",
  alternates: { canonical: "/accueil/pourquoi-faire-appel-a-nous" },
  openGraph: {
    title: "Pourquoi nous choisir | VV Consulting",
    description: "Des résultats mesurables, une expertise pointue et un accompagnement personnalisé pour votre transformation.",
    url: "/accueil/pourquoi-faire-appel-a-nous",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
