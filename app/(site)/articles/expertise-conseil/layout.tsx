import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Externaliser son expertise conseil — Avantages et stratégie",
  description: "Pourquoi externaliser votre expertise conseil ? Accédez à des compétences pointues sans les coûts fixes d'un recrutement, avec flexibilité et expertise.",
  alternates: { canonical: "/articles/expertise-conseil" },
  openGraph: {
    title: "Externaliser son expertise conseil | VV Consulting",
    description: "Les avantages de l'externalisation du conseil : expertise pointue, flexibilité et maîtrise des coûts.",
    url: "/articles/expertise-conseil",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
