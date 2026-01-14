"use client";

import { useEffect, useRef, useState } from "react";
import { Great_Vibes } from "next/font/google";

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
});

export default function Home() {
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const [solidHeader, setSolidHeader] = useState(false);

  useEffect(() => {
    const el = sentinelRef.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([entry]) => setSolidHeader(!entry.isIntersecting),
      { threshold: 0.01 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const headerBase =
    "fixed top-0 left-0 right-0 z-50 transition-colors duration-300";
  const headerTransparent = "bg-transparent text-white";
  const headerSolid = "bg-white/92 text-zinc-900 backdrop-blur-md";

  // Lines visible but not pure white
  const lineTransparent = "border-white/30";
  const lineSolid = "border-zinc-200";

  const menuLink = "hover:opacity-100 transition-opacity opacity-80";

  return (
    <main className="min-h-screen">
      {/* ================= HEADER ================= */}
      <header
        className={`${headerBase} ${
          solidHeader ? headerSolid : headerTransparent
        }`}
      >
        {/* Top thin bar */}
        <div className={`border-b ${solidHeader ? lineSolid : lineTransparent}`}>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 py-2">
            <div className="text-[11px] tracking-[0.28em] uppercase opacity-90 whitespace-nowrap">
              VV <span className="tracking-[0.38em]">c o n s u l t i n g</span>
            </div>

            <div className="hidden sm:block text-[11px] opacity-85 whitespace-nowrap">
              Consulting &amp; automatisation
            </div>
          </div>
        </div>

        {/* Nav bar */}
        <div className={`border-b ${solidHeader ? lineSolid : lineTransparent}`}>
          <div className="mx-auto flex max-w-6xl items-center justify-between px-6 md:px-10 py-3 gap-4">
            {/* Left logo (monogram) */}
            <div className="flex items-center gap-3 shrink-0">
              <div
                className={[
                  "h-8 w-8 rounded-md flex items-center justify-center",
                  "border",
                  solidHeader
                    ? "border-zinc-300 text-zinc-900"
                    : "border-white/40 text-white",
                  "bg-white/10 backdrop-blur-sm",
                ].join(" ")}
                aria-label="VV Consulting"
              >
                <span className="text-[12px] font-semibold tracking-[0.18em]">
                  VV
                </span>
              </div>

              <span className="hidden lg:block text-[11px] tracking-[0.22em] uppercase opacity-80 whitespace-nowrap">
                VV consulting
              </span>
            </div>

            {/* Menu (smaller) */}
            <nav className="hidden md:flex flex-1 justify-center min-w-0">
              <div className="flex items-center gap-10 text-[12px] font-medium tracking-[0.18em] uppercase whitespace-nowrap">
                <a href="#accueil" className={menuLink}>
                  Accueil
                </a>
                <a href="#prestations" className={menuLink}>
                  Nos prestations
                </a>
                <a href="#structure" className={menuLink}>
                  Notre structure
                </a>
              </div>
            </nav>

            {/* CTA header (FIX OVERFLOW) */}
            <div className="flex justify-end shrink-0">
              <a
                href="#contact"
                className={[
                  "inline-flex items-center justify-center",
                  // + compact en mobile, normal en desktop
                  "h-9 px-3 sm:px-4 md:px-5 rounded-md",
                  "border",
                  solidHeader
                    ? "border-zinc-300 text-zinc-900"
                    : "border-white/40 text-white",
                  "bg-white/10 backdrop-blur-sm",
                  // taille/spacing plus petits pour éviter de dépasser
                  "text-[10px] sm:text-[11px] font-medium tracking-[0.14em] uppercase",
                  "hover:bg-white/15 transition",
                  "whitespace-nowrap",
                  // sécurité anti-débordement
                  "max-w-[180px] sm:max-w-none truncate",
                ].join(" ")}
              >
                Demander un devis
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section id="accueil" className="relative min-h-[92vh] overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-[center_60%]"
          style={{ backgroundImage: "url(/hero.png)" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30" />

        {/* Text top-left */}
        <div className="relative pt-[110px]">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="max-w-xl text-white/85">
              <p className="text-[14px] leading-relaxed">
                Agence de consulting &amp; automatisation.
                <br />
                Des systèmes clairs, performants et durables.
              </p>
            </div>
          </div>
        </div>

        {/* LIMITLESS calligraphie (plus transparent + posé sur l'horizon) */}
        {/* Ajuste top-[46%] si tu veux 45% ou 47% */}
        <div className="pointer-events-none absolute left-1/2 top-[46%] w-full -translate-x-1/2 -translate-y-1/2">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="flex items-center justify-center gap-5">
              {/* traits plus discrets */}
              <span className="h-px w-20 md:w-28 bg-white/16" />

              <span
                className={[
                  greatVibes.className,
                  // calligraphie + très transparent
                  "text-white/18",
                  // taille: plus élégant (pas trop gros)
                  "text-[28px] sm:text-[32px] md:text-[36px]",
                  // petit effet “signature”
                  "leading-none",
                  // légère inclinaison naturelle (optionnel)
                  "translate-y-[1px]",
                  // adoucit l’affichage
                  "antialiased",
                ].join(" ")}
              >
                Limitless
              </span>

              <span className="h-px w-20 md:w-28 bg-white/16" />
            </div>
          </div>
        </div>

        {/* Bottom CTAs */}
        <div className="absolute bottom-10 left-0 right-0">
          <div className="mx-auto max-w-6xl px-6 md:px-10">
            <div className="flex items-end justify-between gap-6">
              <a
                href="#contact"
                className={[
                  "inline-flex items-center justify-center",
                  "h-12 px-8 rounded-md",
                  "border border-white/40",
                  "bg-white/10 backdrop-blur-sm",
                  "text-[11px] font-medium tracking-[0.22em] uppercase text-white",
                  "hover:bg-white/15 transition",
                  "whitespace-nowrap",
                ].join(" ")}
              >
                Demander un devis
              </a>

              <a
                href="#rdv"
                className={[
                  "inline-flex items-center justify-center",
                  "h-12 px-8 rounded-md",
                  "border border-white/40",
                  "bg-white/10 backdrop-blur-sm",
                  "text-[11px] font-medium tracking-[0.22em] uppercase text-white",
                  "hover:bg-white/15 transition",
                  "whitespace-nowrap",
                ].join(" ")}
              >
                Prendre RDV
              </a>
            </div>
          </div>
        </div>

        {/* Sentinel: when leaving hero => header becomes solid */}
        <div
          ref={sentinelRef}
          className="absolute bottom-0 left-0 right-0 h-1"
        />
      </section>

      {/* ================= PRESTATIONS ================= */}
      <section id="prestations" className="bg-white text-zinc-900">
        <div className="border-t border-zinc-200" />

        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20">
          <div className="border-b border-zinc-200 pb-10">
            <h2 className="text-3xl font-semibold tracking-tight">
              Nos prestations
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-600">
              Audit, automatisation et IA appliquée, conçus pour des résultats
              concrets.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3">
            <div className="py-10 md:py-12 md:pr-10 border-b border-zinc-200 md:border-b-0 md:border-r">
              <div className="text-[15px] font-semibold">Audit</div>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
                Cartographie, priorités, quick wins et plan d’action clair.
              </p>
            </div>

            <div className="py-10 md:py-12 md:px-10 border-b border-zinc-200 md:border-b-0 md:border-r">
              <div className="text-[15px] font-semibold">Automatisation</div>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
                Workflows robustes, intégrations, reporting et réduction des
                tâches manuelles.
              </p>
            </div>

            <div className="py-10 md:py-12 md:pl-10">
              <div className="text-[15px] font-semibold">IA appliquée</div>
              <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
                Assistants et agents, qualification, support, génération et aide
                à la décision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= STRUCTURE ================= */}
      <section id="structure" className="bg-white text-zinc-900">
        <div className="border-t border-zinc-200" />

        <div className="mx-auto max-w-6xl px-6 md:px-10 pb-20">
          <div className="border-b border-zinc-200 pb-10">
            <h2 className="text-3xl font-semibold tracking-tight">
              Notre structure
            </h2>
            <p className="mt-4 max-w-2xl text-zinc-600">
              Une méthode simple : cadrer, construire, déployer, améliorer.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-4 border border-zinc-200">
            {[
              {
                n: "01",
                t: "Cadrage",
                d: "Objectifs, périmètre, priorités, planning.",
              },
              {
                n: "02",
                t: "Construction",
                d: "Architecture, outils, automatisations.",
              },
              {
                n: "03",
                t: "Déploiement",
                d: "Mise en prod, formation, documentation.",
              },
              {
                n: "04",
                t: "Amélioration",
                d: "Mesure, itérations, optimisation continue.",
              },
            ].map((s, idx) => (
              <div
                key={s.n}
                className={[
                  "p-6",
                  "border-zinc-200",
                  idx < 3 ? "md:border-r" : "",
                  "border-b md:border-b-0",
                  idx === 3 ? "border-b-0" : "",
                ].join(" ")}
              >
                <div className="text-[11px] font-semibold text-zinc-500 tracking-wider">
                  {s.n}
                </div>
                <div className="mt-2 text-[15px] font-semibold">{s.t}</div>
                <p className="mt-3 text-[14px] leading-relaxed text-zinc-600">
                  {s.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact" className="bg-white text-zinc-900">
        <div className="border-t border-zinc-200" />

        <div className="mx-auto max-w-6xl px-6 md:px-10 py-20">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-4 max-w-2xl text-zinc-600">
            Ajoutons ici ton email, un formulaire ou un lien Calendly.
          </p>
        </div>
      </section>

      <section id="rdv" className="bg-white pb-20" />
    </main>
  );
}
