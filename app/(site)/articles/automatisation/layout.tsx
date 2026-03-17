import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "L'automatisation, levier de compétitivité en 2026",
  description: "Les entreprises qui automatisent leurs processus gagnent en moyenne 25% de productivité. Découvrez comment l'automatisation peut transformer votre organisation.",
  alternates: { canonical: "/articles/automatisation" },
  openGraph: {
    title: "L'automatisation, levier de compétitivité | VV Consulting",
    description: "Comment l'automatisation des processus peut accélérer votre croissance et améliorer votre productivité de 25%.",
    url: "/articles/automatisation",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
