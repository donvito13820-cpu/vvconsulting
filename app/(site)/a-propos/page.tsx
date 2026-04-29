"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const values = [
  {
    icon: "◆",
    title: "Agilité",
    desc: "Capacité à s'adapter rapidement, à pivoter si nécessaire, à livrer de la valeur à chaque étape sans attendre la fin du projet. Les contextes changent — nos solutions aussi.",
  },
  {
    icon: "◇",
    title: "Excellence",
    desc: "Rigueur dans l'exécution, qualité des livrables, respect des engagements. Nous ne transigeons pas sur la qualité, même sous contrainte de délai.",
  },
  {
    icon: "○",
    title: "Impact",
    desc: "Chaque mission vise des résultats concrets, mesurables et durables. Nous mesurons notre succès à l'aune de l'impact réel produit pour nos clients — pas au nombre de slides livrées.",
  },
  {
    icon: "□",
    title: "Transparence",
    desc: "Communication honnête à chaque étape, y compris lorsque c'est difficile. Si un projet dérive ou qu'une approche ne fonctionne pas, vous le savez immédiatement.",
  },
];

const positioning = [
  {
    label: "Vs grande SSII",
    vv: "Réactivité, engagement personnel, pas de processus bureaucratiques",
    other: "Délais longs, interlocuteurs multiples, facturation opaque",
  },
  {
    label: "Vs freelance",
    vv: "Expertise multidisciplinaire, capacité à absorber des projets complexes",
    other: "Limité à une seule expertise, disponibilité variable",
  },
  {
    label: "Notre position",
    vv: "Cabinet à taille humaine : agilité + expertise + engagement",
    other: "",
  },
];

const team = [
  {
    initial: "V",
    name: "Victor",
    role: "Co-fondateur · Marketing & Conseil stratégique",
    desc: "Expertise en positionnement de marque, stratégie commerciale, développement RSE et accompagnement à la croissance. Victor porte les missions de conseil stratégique et la relation client.",
  },
  {
    initial: "V",
    name: "Vito",
    role: "Co-fondateur · Développement & Automatisation",
    desc: "Expertise en développement web, architecture de solutions IA, automatisation des processus et conception de produits SaaS. Vito pilote les missions techniques et le développement produit.",
  },
];

export default function AProposPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoveredValue, setHoveredValue] = useState<number | null>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, []);

  const isVisible = (id: string) => visibleSections.has(id);

  return (
    <>
      <Header variant="solid" />

      <main style={{ backgroundColor: "#ffffff" }}>
        {/* Hero */}
        <section style={{ paddingTop: "72px" }}>
          <div
            style={{
              position: "relative",
              height: "55vh",
              minHeight: "420px",
              backgroundImage: "url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.68))" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
              <div className="site-container" style={{ width: "100%" }}>
                <p className="animate-slideUp" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "16px" }}>
                  Le cabinet
                </p>
                <h1 className="animate-slideUp sp-hero-title" style={{ fontSize: "48px", fontWeight: 300, color: "#ffffff", maxWidth: "700px", lineHeight: 1.15, animationDelay: "0.1s" }}>
                  À Propos — VV Agence Consulting
                </h1>
                <p className="animate-slideUp" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "520px", lineHeight: 1.6, marginTop: "16px", animationDelay: "0.2s" }}>
                  Une agence née d&apos;une conviction : les entreprises méritent un partenaire qui comprend à la fois la technologie, la stratégie et les enjeux de demain.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Notre histoire & vision */}
        <section
          id="story"
          ref={(el) => { sectionRefs.current["story"] = el; }}
          style={{ padding: "100px 0", borderBottom: "1px solid #f4f4f5" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "start" }}>
              <div
                style={{
                  opacity: isVisible("story") ? 1 : 0,
                  transform: isVisible("story") ? "translateX(0)" : "translateX(-50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                  Notre histoire
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, marginBottom: "24px" }}>
                  Une Agence Née d&apos;une Conviction
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "20px" }}>
                  VV Agence Consulting est née d&apos;un constat simple : les entreprises ont besoin d&apos;un partenaire qui comprend à la fois la technologie, la stratégie et les enjeux de demain — sans avoir à choisir entre une grande SSII impersonnelle et un freelance isolé. Nous avons fondé VV Agence pour combler cet écart.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                  Depuis, nous avons développé trois axes d&apos;expertise complémentaires : les <strong style={{ fontWeight: 500, color: "#18181b" }}>missions digitales sur mesure</strong> (conseil, automatisation IA, création web), notre <strong style={{ fontWeight: 500, color: "#18181b" }}>plateforme SaaS</strong> de gestion des avis clients, et le <strong style={{ fontWeight: 500, color: "#18181b" }}>conseil RSE</strong> pour les entreprises qui veulent faire du développement durable un levier stratégique réel.
                </p>
              </div>
              <div
                style={{
                  opacity: isVisible("story") ? 1 : 0,
                  transform: isVisible("story") ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.2s",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                  Notre vision
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, marginBottom: "24px" }}>
                  Simplicité, Clarté, Impact Durable
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "20px" }}>
                  Dans un monde où l&apos;IA redéfinit les règles du jeu et où les enjeux RSE deviennent incontournables, ce qui crée de la valeur durable, ce n&apos;est pas la complexité. C&apos;est la clarté des objectifs, la simplicité des solutions et l&apos;engagement authentique dans leur mise en œuvre.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                  Nous croyons que les entreprises qui réussiront les transitions à venir — digitale, environnementale, organisationnelle — sont celles qui sauront allier <strong style={{ fontWeight: 500, color: "#18181b" }}>performance et responsabilité</strong>. C&apos;est précisément l&apos;intersection dans laquelle nous opérons.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nos valeurs */}
        <section
          id="values"
          ref={(el) => { sectionRefs.current["values"] = el; }}
          style={{ backgroundColor: "#fafafa", padding: "100px 0" }}
        >
          <div className="site-container">
            <div
              style={{
                opacity: isVisible("values") ? 1 : 0,
                transform: isVisible("values") ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                textAlign: "center",
                marginBottom: "64px",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Ce qui nous guide
              </p>
              <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#18181b" }}>Nos Valeurs</h2>
            </div>

            <div className="sp-grid-4" style={{ gap: "24px" }}>
              {values.map((value, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredValue(i)}
                  onMouseLeave={() => setHoveredValue(null)}
                  style={{
                    backgroundColor: hoveredValue === i ? "#18181b" : "#ffffff",
                    padding: "40px 32px",
                    textAlign: "center",
                    border: "1px solid #e4e4e7",
                    opacity: isVisible("values") ? 1 : 0,
                    transform: isVisible("values") ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease, background-color 0.3s ease",
                    transitionDelay: `${i * 0.08}s, ${i * 0.08}s, 0s`,
                    cursor: "default",
                  }}
                >
                  <div style={{ fontSize: "28px", color: hoveredValue === i ? "#ffffff" : "#18181b", marginBottom: "20px", transition: "color 0.3s" }}>
                    {value.icon}
                  </div>
                  <h3 style={{ fontSize: "18px", fontWeight: 500, color: hoveredValue === i ? "#ffffff" : "#18181b", marginBottom: "12px", transition: "color 0.3s" }}>
                    {value.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: hoveredValue === i ? "rgba(255,255,255,0.7)" : "#71717a", transition: "color 0.3s" }}>
                    {value.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Positionnement */}
        <section
          id="positioning"
          ref={(el) => { sectionRefs.current["positioning"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "center" }}>
              <div
                style={{
                  opacity: isVisible("positioning") ? 1 : 0,
                  transform: isVisible("positioning") ? "translateX(0)" : "translateX(-50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                  Notre positionnement
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, marginBottom: "24px" }}>
                  Ni SSII, ni Freelance — Un Cabinet à Taille Humaine
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "20px" }}>
                  Nous ne sommes pas une grande SSII avec ses processus rigides, ses délais interminables et ses lignes de facturation opaques. Nous ne sommes pas non plus un freelance isolé, limité dans sa capacité à absorber des projets complexes ou multidisciplinaires.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "32px" }}>
                  VV Agence Consulting est un cabinet à taille humaine : petite structure pour une réactivité et un engagement personnels maximaux, expertise étendue pour couvrir des projets ambitieux qui croisent tech, stratégie et RSE.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, fontStyle: "italic", color: "#71717a", borderLeft: "3px solid #18181b", paddingLeft: "20px" }}>
                  &ldquo;Pour les dirigeants qui veulent des résultats concrets, pas des slides PowerPoint.&rdquo;
                </p>
              </div>
              <div
                style={{
                  opacity: isVisible("positioning") ? 1 : 0,
                  transform: isVisible("positioning") ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.2s",
                }}
              >
                {positioning.map((row, i) => (
                  <div
                    key={i}
                    style={{
                      padding: "28px 0",
                      borderBottom: i < positioning.length - 1 ? "1px solid #f4f4f5" : "none",
                    }}
                  >
                    <p style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "10px" }}>{row.label}</p>
                    <p style={{ fontSize: "15px", fontWeight: 500, color: "#18181b", marginBottom: row.other ? "8px" : "0" }}>{row.vv}</p>
                    {row.other && <p style={{ fontSize: "14px", color: "#a1a1aa" }}>{row.other}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* L'équipe */}
        <section
          id="team"
          ref={(el) => { sectionRefs.current["team"] = el; }}
          style={{ backgroundColor: "#09090b", padding: "100px 0" }}
        >
          <div className="site-container">
            <div
              style={{
                opacity: isVisible("team") ? 1 : 0,
                transform: isVisible("team") ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                marginBottom: "64px",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#52525b", marginBottom: "16px" }}>
                Derrière le cabinet
              </p>
              <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#ffffff" }}>L&apos;Équipe</h2>
            </div>

            <div className="sp-grid-2" style={{ gap: "32px", maxWidth: "860px" }}>
              {team.map((member, i) => (
                <div
                  key={i}
                  style={{
                    padding: "48px 40px",
                    border: "1px solid #27272a",
                    opacity: isVisible("team") ? 1 : 0,
                    transform: isVisible("team") ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    transitionDelay: `${i * 0.15}s`,
                  }}
                >
                  <div
                    style={{
                      width: "64px",
                      height: "64px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      border: "1px solid #3f3f46",
                      backgroundColor: "#18181b",
                      marginBottom: "24px",
                    }}
                  >
                    <span style={{ fontSize: "20px", fontWeight: 300, color: "#ffffff", letterSpacing: "0.05em" }}>
                      {member.initial}
                    </span>
                  </div>
                  <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#ffffff", marginBottom: "6px" }}>
                    {member.name}
                  </h3>
                  <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.1em", textTransform: "uppercase", color: "#52525b", marginBottom: "20px" }}>
                    {member.role}
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: 1.75, color: "#a1a1aa" }}>{member.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#ffffff", padding: "100px 0" }}>
          <div className="site-container" style={{ textAlign: "center" }}>
            <h2 className="sp-cta-title" style={{ fontSize: "36px", fontWeight: 300, color: "#18181b", marginBottom: "24px" }}>
              Travaillons ensemble
            </h2>
            <p style={{ fontSize: "16px", color: "#71717a", maxWidth: "520px", margin: "0 auto 16px", lineHeight: 1.7 }}>
              Découvrez comment notre équipe peut accompagner votre transformation digitale et RSE. Premier échange sans engagement.
            </p>
            <p style={{ fontSize: "13px", color: "#a1a1aa", maxWidth: "520px", margin: "0 auto 40px" }}>
              Explorez nos services :{" "}
              <Link href="/missions-sur-mesure" style={{ color: "#71717a", textDecoration: "underline" }}>Missions sur Mesure</Link>,{" "}
              <Link href="/solutions-saas" style={{ color: "#71717a", textDecoration: "underline" }}>Solutions SaaS</Link>,{" "}
              <Link href="/conseil-rse" style={{ color: "#71717a", textDecoration: "underline" }}>Conseil RSE</Link>.
            </p>
            <div className="sp-cta-row">
              <Link
                href="/contact"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "52px", padding: "0 40px", backgroundColor: "#18181b", color: "#ffffff",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Nous contacter
              </Link>
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "52px", padding: "0 40px", border: "1px solid #e4e4e7", color: "#18181b",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Prendre RDV
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
