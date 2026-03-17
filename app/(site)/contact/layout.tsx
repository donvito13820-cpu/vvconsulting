import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Discutons de votre projet",
  description: "Contactez VV Consulting pour discuter de vos enjeux. Demandez un devis ou planifiez un appel avec nos consultants experts.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact | VV Consulting",
    description: "Prenez contact avec VV Consulting. Devis gratuit et accompagnement personnalisé pour votre transformation.",
    url: "/contact",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
