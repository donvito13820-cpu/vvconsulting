import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Qui sommes-nous — L'équipe VV Consulting",
  description: "Découvrez l'équipe VV Consulting : Victor Casen et Vito Ferrandis, co-fondateurs passionnés par le conseil stratégique, le marketing et le développement technologique.",
  alternates: { canonical: "/accueil/qui-sommes-nous" },
  openGraph: {
    title: "Qui sommes-nous | VV Consulting",
    description: "Une équipe d'experts combinant conseil stratégique, marketing et développement technologique au service de votre transformation.",
    url: "/accueil/qui-sommes-nous",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
