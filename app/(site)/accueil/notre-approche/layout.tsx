import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notre approche — Méthodologie et engagements",
  description: "Notre méthodologie : diagnostic, conception, implémentation et optimisation. Découvrez nos engagements qualité, transparence et respect des délais.",
  alternates: { canonical: "/accueil/notre-approche" },
  openGraph: {
    title: "Notre approche | VV Consulting",
    description: "Une approche pragmatique et rigoureuse : comprendre avant d'agir, pour des solutions durables et évolutives.",
    url: "/accueil/notre-approche",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
