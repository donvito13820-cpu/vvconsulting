import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "À Propos — Cabinet Conseil Digital & RSE | VV Agence",
  description:
    "Découvrez la vision, les valeurs et le positionnement de VV Agence Consulting. Expertise tech, stratégie et RSE à taille humaine. Agilité d'une startup, rigueur d'un cabinet pro.",
  alternates: { canonical: "/a-propos" },
  openGraph: {
    title: "À Propos — VV Agence Consulting",
    description:
      "Cabinet de conseil digital et RSE à taille humaine. Vision, valeurs et positionnement d'une agence qui allie expertise technique, stratégie et développement durable.",
    url: "/a-propos",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "À propos — VV Agence Consulting" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
