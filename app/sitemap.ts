import type { MetadataRoute } from "next";

const BASE_URL = "https://vv-agence-consulting.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: BASE_URL, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 1 },
    { url: `${BASE_URL}/prestations/solution-ia`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/prestations/automatisation`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/prestations/enquete-quantitative`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/prestations/enquete-qualitative`, lastModified: new Date("2026-01-15"), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/articles/automatisation`, lastModified: new Date("2026-02-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/articles/ia-generative`, lastModified: new Date("2026-02-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/articles/expertise-conseil`, lastModified: new Date("2026-02-01"), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/accueil/qui-sommes-nous`, lastModified: new Date("2026-01-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/accueil/notre-approche`, lastModified: new Date("2026-01-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/accueil/pourquoi-faire-appel-a-nous`, lastModified: new Date("2026-01-01"), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: new Date("2025-12-01"), changeFrequency: "yearly", priority: 0.4 },
    { url: `${BASE_URL}/mentions-legales`, lastModified: new Date("2026-03-01"), changeFrequency: "yearly", priority: 0.2 },
    { url: `${BASE_URL}/confidentialite`, lastModified: new Date("2026-03-01"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
