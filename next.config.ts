import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  async redirects() {
    return [
      // Anciennes pages prestations → Missions sur mesure
      { source: "/prestations/enquete-quantitative", destination: "/missions-sur-mesure", permanent: true },
      { source: "/prestations/enquete-qualitative", destination: "/missions-sur-mesure", permanent: true },
      { source: "/prestations/solution-ia", destination: "/missions-sur-mesure", permanent: true },
      { source: "/prestations/automatisation", destination: "/missions-sur-mesure", permanent: true },
      // Anciens articles → pages correspondantes
      { source: "/articles/automatisation", destination: "/missions-sur-mesure", permanent: true },
      { source: "/articles/ia-generative", destination: "/missions-sur-mesure", permanent: true },
      { source: "/articles/expertise-conseil", destination: "/a-propos", permanent: true },
      // Anciennes pages accueil → À propos
      { source: "/accueil/qui-sommes-nous", destination: "/a-propos", permanent: true },
      { source: "/accueil/notre-approche", destination: "/a-propos", permanent: true },
      { source: "/accueil/pourquoi-faire-appel-a-nous", destination: "/a-propos", permanent: true },
    ];
  },
};

export default nextConfig;
