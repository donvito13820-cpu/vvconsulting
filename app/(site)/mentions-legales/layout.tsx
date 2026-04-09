import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales",
  description: "Mentions légales de VV Consulting — éditeur, hébergeur, responsable de publication et informations légales obligatoires.",
  alternates: { canonical: "/mentions-legales" },
  robots: { index: true, follow: false },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
