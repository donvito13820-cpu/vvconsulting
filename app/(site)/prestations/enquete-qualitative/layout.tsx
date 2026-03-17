import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Enquête Qualitative — Comprendre les motivations profondes",
  description: "Explorez en profondeur les motivations et perceptions de vos cibles. Entretiens individuels, focus groups et études ethnographiques pour des insights uniques.",
  alternates: { canonical: "/prestations/enquete-qualitative" },
  openGraph: {
    title: "Enquête Qualitative | VV Consulting",
    description: "Entretiens, focus groups et observation terrain pour comprendre le pourquoi derrière les comportements de vos cibles.",
    url: "/prestations/enquete-qualitative",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
