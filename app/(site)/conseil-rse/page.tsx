"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const approach = [
  {
    num: "01",
    title: "Diagnostic RSE initial",
    desc: "Évaluation complète des pratiques actuelles : cartographie des impacts environnementaux, sociaux et de gouvernance, benchmarking sectoriel et identification des écarts réglementaires. Durée : 2 à 4 semaines. Livrable : rapport de diagnostic avec scores et priorités.",
  },
  {
    num: "02",
    title: "Conception du projet RSE",
    desc: "Définition d'objectifs SMART, sélection des axes prioritaires (environnement, social, gouvernance), planification opérationnelle et chiffrage. Chaque projet RSE que nous concevons est concret, mesurable et communicable en interne comme auprès des parties prenantes externes.",
  },
  {
    num: "03",
    title: "Montage financier",
    desc: "Identification des aides et financements disponibles : ADEME, BPI France, fonds régionaux, dispositifs sectoriels, sponsors privés et fonds ESG. Structuration des dossiers de financement et accompagnement dans les démarches de labellisation (ISO 14001, AFNOR RSE, B Corp...).",
  },
  {
    num: "04",
    title: "Pilotage & reporting",
    desc: "Accompagnement dans la durée : indicateurs de suivi, reporting RSE structuré (compatible CSRD), communication interne et externe, préparation aux audits et certifications. Vous disposez à chaque étape d'une vision claire de l'avancement et de l'impact réel de vos actions.",
  },
];

const domains = [
  {
    icon: "◆",
    title: "Économie circulaire & matériaux",
    desc: "Réduction des déchets à la source, mise en place de filières de réemploi et de recyclage, écoconception des produits et emballages. Mesure et réduction de l'empreinte matière.",
  },
  {
    icon: "◇",
    title: "Rénovation & infrastructures durables",
    desc: "Efficacité énergétique des bâtiments, matériaux biosourcés et bas carbone, solutions de production d'énergie renouvelable, certification HQE et BREEAM.",
  },
  {
    icon: "○",
    title: "Engagement social & gouvernance",
    desc: "Diversité et inclusion, conditions de travail et bien-être des collaborateurs, gouvernance participative, ancrage territorial et relations avec les parties prenantes locales.",
  },
  {
    icon: "□",
    title: "Transition énergétique",
    desc: "Bilan carbone scope 1, 2 et 3, plan de réduction des émissions de GES, compensation carbone certifiée, transition vers les énergies renouvelables et mobilité durable.",
  },
];

const regulatoryContext = [
  {
    label: "CSRD",
    full: "Corporate Sustainability Reporting Directive",
    detail: "Oblige les entreprises de +250 salariés à publier un rapport de durabilité standardisé (ESRS). En vigueur dès 2025-2026 selon la taille.",
  },
  {
    label: "Taxonomie EU",
    full: "Taxonomie européenne des activités durables",
    detail: "Classifie les activités économiques selon leur durabilité. Conditionne l'accès aux financements verts et aux fonds ESG.",
  },
  {
    label: "Loi Pacte",
    full: "Loi PACTE (France, 2019)",
    detail: "Introduit la notion de raison d'être et de société à mission dans le droit français des sociétés.",
  },
];

const faq = [
  {
    q: "Mon entreprise est-elle concernée par la CSRD ?",
    a: "La CSRD s'applique progressivement. Les grandes entreprises (> 500 salariés ou CA > 150M€) sont concernées dès 2025 pour le reporting 2024. Les entreprises cotées et PME (+250 salariés ou +40M€ CA) suivront en 2026-2027. Même si vous n'êtes pas encore dans le périmètre réglementaire direct, vos clients grands comptes peuvent vous imposer leur propre reporting RSE fournisseurs. Mieux vaut anticiper.",
  },
  {
    q: "Existe-t-il des aides financières pour mettre en place une démarche RSE ?",
    a: "Oui, de nombreux dispositifs existent : ADEME (transitions écologiques), BPI France (innovation durable), fonds régionaux (FEDER, FEADER), aides sectorielles (agriculture, tourisme, industrie) et financements privés via des partenariats sponsors ou des fonds d'impact. Notre rôle est précisément d'identifier et de monter ces financements pour nos clients.",
  },
  {
    q: "Quelle est la différence entre RSE et développement durable ?",
    a: "Le développement durable est un concept global (répondre aux besoins présents sans compromettre les générations futures). La RSE en est la déclinaison opérationnelle pour les entreprises : elle intègre les dimensions environnementales, sociales et de gouvernance (ESG) dans la stratégie et les pratiques business. Le RSE est donc la mise en œuvre concrète du développement durable au niveau d'une organisation.",
  },
  {
    q: "Peut-on mesurer le ROI d'une démarche RSE ?",
    a: "Absolument. Les bénéfices mesurables incluent : réduction des coûts opérationnels (énergie, déchets, matières), accès à de nouveaux financements et marchés publics, amélioration de l'image employeur (réduction du turnover), conformité réglementaire évitant des pénalités, et valorisation de l'entreprise auprès des investisseurs ESG. Nous construisons un tableau de bord ROI RSE dès la phase de conception du projet.",
  },
  {
    q: "Combien de temps faut-il pour obtenir une labellisation RSE ou une certification ?",
    a: "Cela dépend du référentiel cible : la labellisation AFNOR Engagement RSE prend 3 à 6 mois, l'ISO 14001 de 6 à 18 mois selon l'état de départ, et le B Corp de 12 à 24 mois avec un processus d'évaluation rigoureux. Nous accompagnons chaque étape du parcours de certification et préparons vos équipes aux audits.",
  },
];

export default function ConseilRSEPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredDomain, setHoveredDomain] = useState<number | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
      { threshold: 0.08 }
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
              backgroundImage: "url(https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=1600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.35), rgba(0,0,0,0.72))" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
              <div className="site-container" style={{ width: "100%" }}>
                <p className="animate-slideUp" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "16px" }}>
                  Nos services
                </p>
                <h1 className="animate-slideUp sp-hero-title" style={{ fontSize: "48px", fontWeight: 300, color: "#ffffff", maxWidth: "700px", lineHeight: 1.15, animationDelay: "0.1s" }}>
                  Conseil RSE & Développement Durable
                </h1>
                <p className="animate-slideUp" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "520px", lineHeight: 1.6, marginTop: "16px", animationDelay: "0.2s" }}>
                  Du diagnostic à la réalisation. Nous accompagnons les entreprises dans la conception, le financement et le pilotage de projets RSE ambitieux et concrets.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro — RSE comme levier stratégique */}
        <section
          id="intro"
          ref={(el) => { sectionRefs.current["intro"] = el; }}
          style={{ padding: "100px 0", borderBottom: "1px solid #f4f4f5" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "center" }}>
              <div
                style={{
                  opacity: isVisible("intro") ? 1 : 0,
                  transform: isVisible("intro") ? "translateX(0)" : "translateX(-50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                  Pourquoi le RSE maintenant
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, marginBottom: "24px" }}>
                  Le RSE n&apos;est Plus une Option — C&apos;est un Levier Stratégique
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "20px" }}>
                  Pendant des années, la Responsabilité Sociétale des Entreprises a été perçue comme une contrainte réglementaire ou un exercice de communication institutionnelle. Ce temps est révolu. Sous l&apos;effet conjugué de nouvelles obligations légales, de la pression des investisseurs ESG et des attentes croissantes des consommateurs et des salariés, le RSE est devenu un levier de compétitivité, de financement et de durabilité à part entière.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                  VV Agence Consulting accompagne les grandes entreprises, ETI et institutions dans la conception, le financement et la mise en œuvre de projets RSE ambitieux, concrets et mesurables. Nous ne nous arrêtons pas à la production de livrables — nous portons les projets jusqu&apos;à leur aboutissement.
                </p>
              </div>
              <div
                style={{
                  opacity: isVisible("intro") ? 1 : 0,
                  transform: isVisible("intro") ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.2s",
                }}
              >
                <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "24px" }}>
                  Contexte réglementaire
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {regulatoryContext.map((reg, i) => (
                    <div key={i} style={{ padding: "24px 0", borderBottom: i < regulatoryContext.length - 1 ? "1px solid #f4f4f5" : "none" }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                        <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", backgroundColor: "#18181b", color: "#ffffff", padding: "3px 10px" }}>
                          {reg.label}
                        </span>
                        <span style={{ fontSize: "13px", color: "#71717a" }}>{reg.full}</span>
                      </div>
                      <p style={{ fontSize: "14px", color: "#52525b", lineHeight: 1.6 }}>{reg.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre approche — 4 étapes */}
        <section
          id="approach"
          ref={(el) => { sectionRefs.current["approach"] = el; }}
          style={{ backgroundColor: "#fafafa", padding: "100px 0" }}
        >
          <div className="site-container">
            <div
              style={{
                opacity: isVisible("approach") ? 1 : 0,
                transform: isVisible("approach") ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                marginBottom: "64px",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Notre accompagnement
              </p>
              <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#18181b", maxWidth: "680px", lineHeight: 1.3 }}>
                De la Stratégie RSE à la Réalisation — 4 Étapes
              </h2>
            </div>

            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "start" }}>
              {/* Étapes à gauche */}
              <div style={{ position: "relative" }}>
                <div style={{ position: "absolute", left: "15px", top: "0", bottom: "0", width: "2px", backgroundColor: "#e4e4e7" }}>
                  <div style={{ width: "100%", backgroundColor: "#18181b", height: `${((activeStep + 1) / approach.length) * 100}%`, transition: "height 0.5s ease" }} />
                </div>
                {approach.map((step, i) => (
                  <div
                    key={i}
                    onClick={() => setActiveStep(i)}
                    style={{
                      display: "flex",
                      gap: "24px",
                      padding: "28px 0",
                      cursor: "pointer",
                      opacity: isVisible("approach") ? 1 : 0,
                      transform: isVisible("approach") ? "translateX(0)" : "translateX(-40px)",
                      transition: "opacity 0.5s ease, transform 0.6s ease",
                      transitionDelay: `${i * 0.1}s`,
                    }}
                  >
                    <div
                      style={{
                        width: "32px",
                        height: "32px",
                        borderRadius: "50%",
                        backgroundColor: activeStep >= i ? "#18181b" : "#ffffff",
                        border: "2px solid",
                        borderColor: activeStep >= i ? "#18181b" : "#e4e4e7",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        transition: "all 0.3s ease",
                      }}
                    >
                      <span style={{ fontSize: "12px", fontWeight: 500, color: activeStep >= i ? "#ffffff" : "#a1a1aa" }}>{i + 1}</span>
                    </div>
                    <div>
                      <h3 style={{ fontSize: "17px", fontWeight: activeStep === i ? 500 : 400, color: "#18181b", marginBottom: "4px", transition: "font-weight 0.2s" }}>
                        {step.num} — {step.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>

              {/* Détail de l'étape active */}
              <div
                style={{
                  backgroundColor: "#ffffff",
                  padding: "40px",
                  border: "1px solid #e4e4e7",
                  opacity: isVisible("approach") ? 1 : 0,
                  transform: isVisible("approach") ? "translateX(0)" : "translateX(40px)",
                  transition: "opacity 0.6s ease, transform 0.6s ease",
                  transitionDelay: "0.2s",
                  minHeight: "200px",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                  Étape {approach[activeStep].num}
                </p>
                <h3 style={{ fontSize: "22px", fontWeight: 400, color: "#18181b", marginBottom: "20px" }}>
                  {approach[activeStep].title}
                </h3>
                <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
                  {approach[activeStep].desc}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Domaines d'intervention */}
        <section
          id="domains"
          ref={(el) => { sectionRefs.current["domains"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div className="site-container">
            <div
              style={{
                opacity: isVisible("domains") ? 1 : 0,
                transform: isVisible("domains") ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                marginBottom: "64px",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Expertise sectorielle
              </p>
              <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#18181b", maxWidth: "600px", lineHeight: 1.3 }}>
                Nos Domaines d&apos;Intervention RSE
              </h2>
            </div>

            <div className="sp-grid-2" style={{ gap: "24px" }}>
              {domains.map((domain, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredDomain(i)}
                  onMouseLeave={() => setHoveredDomain(null)}
                  style={{
                    padding: "48px 40px",
                    border: "1px solid #e4e4e7",
                    cursor: "default",
                    opacity: isVisible("domains") ? 1 : 0,
                    transform: isVisible("domains") ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease, box-shadow 0.3s ease",
                    transitionDelay: `${i * 0.1}s, ${i * 0.1}s, 0s`,
                    boxShadow: hoveredDomain === i ? "0 20px 40px rgba(0,0,0,0.08)" : "none",
                  }}
                >
                  <div style={{ fontSize: "24px", color: "#18181b", marginBottom: "20px" }}>{domain.icon}</div>
                  <h3 style={{ fontSize: "19px", fontWeight: 500, color: "#18181b", marginBottom: "14px" }}>{domain.title}</h3>
                  <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#71717a" }}>{domain.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* À qui + valeur ajoutée */}
        <section
          id="clients"
          ref={(el) => { sectionRefs.current["clients"] = el; }}
          style={{ backgroundColor: "#09090b", padding: "100px 0" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "start" }}>
              <div
                style={{
                  opacity: isVisible("clients") ? 1 : 0,
                  transform: isVisible("clients") ? "translateX(0)" : "translateX(-50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52525b", marginBottom: "20px" }}>
                  Nos clients
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", lineHeight: 1.35, marginBottom: "24px" }}>
                  À Qui Nous Adressons-Nous ?
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#a1a1aa", marginBottom: "32px" }}>
                  Nous travaillons avec des structures qui ont une image publique à valoriser, des engagements RSE à tenir et, souvent, des financements à mobiliser.
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                  {[
                    { label: "Grandes entreprises", detail: "Soumises à la CSRD, obligations de reporting et d'engagement stakeholders" },
                    { label: "ETI", detail: "Cherchant à structurer leur démarche RSE pour accéder à de nouveaux marchés et financements" },
                    { label: "Associations & institutions", detail: "Culturelles, sportives ou sociales souhaitant formaliser et valoriser leurs engagements" },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "20px 24px", border: "1px solid #27272a" }}>
                      <p style={{ fontSize: "15px", fontWeight: 500, color: "#ffffff", marginBottom: "6px" }}>{item.label}</p>
                      <p style={{ fontSize: "13px", color: "#71717a", lineHeight: 1.5 }}>{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div
                style={{
                  opacity: isVisible("clients") ? 1 : 0,
                  transform: isVisible("clients") ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.2s",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52525b", marginBottom: "20px" }}>
                  Notre valeur ajoutée
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", lineHeight: 1.35, marginBottom: "24px" }}>
                  Du Conseil à la Réalisation — Pas Seulement des Livrables
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#a1a1aa", marginBottom: "24px" }}>
                  La plupart des cabinets conseil RSE s&apos;arrêtent à la production de livrables — rapport de diagnostic, feuille de route, quelques slides. Nous allons radicalement plus loin.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#a1a1aa" }}>
                  Nous <strong style={{ color: "#ffffff", fontWeight: 400 }}>mobilisons les financements</strong>, nous gérons les relations avec les partenaires et financeurs, et nous accompagnons la mise en œuvre concrète des projets jusqu&apos;à leur aboutissement — y compris dans la durée. Notre engagement est sur les résultats, pas sur les honoraires de conseil.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          ref={(el) => { sectionRefs.current["faq"] = el; }}
          style={{ backgroundColor: "#fafafa", padding: "100px 0" }}
        >
          <div className="site-container">
            <div
              style={{
                opacity: isVisible("faq") ? 1 : 0,
                transform: isVisible("faq") ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                marginBottom: "56px",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Questions fréquentes
              </p>
              <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b" }}>Conseil RSE — vos questions</h2>
            </div>
            <div style={{ maxWidth: "800px" }}>
              {faq.map((item, i) => (
                <div
                  key={i}
                  style={{
                    borderBottom: "1px solid #e4e4e7",
                    opacity: isVisible("faq") ? 1 : 0,
                    transform: isVisible("faq") ? "translateY(0)" : "translateY(20px)",
                    transition: "opacity 0.5s ease, transform 0.5s ease",
                    transitionDelay: `${i * 0.07}s`,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    style={{
                      width: "100%", textAlign: "left", padding: "24px 0",
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      background: "none", border: "none", cursor: "pointer",
                    }}
                  >
                    <span style={{ fontSize: "16px", fontWeight: 500, color: "#18181b", lineHeight: 1.4, paddingRight: "24px" }}>{item.q}</span>
                    <span style={{ fontSize: "20px", color: "#a1a1aa", flexShrink: 0, transform: openFaq === i ? "rotate(45deg)" : "none", transition: "transform 0.3s ease" }}>+</span>
                  </button>
                  <div style={{ maxHeight: openFaq === i ? "400px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
                    <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#71717a", paddingBottom: "24px" }}>{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ backgroundColor: "#18181b", padding: "100px 0" }}>
          <div className="site-container" style={{ textAlign: "center" }}>
            <h2 className="sp-cta-title" style={{ fontSize: "36px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              Construisons votre projet RSE ensemble
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "520px", margin: "0 auto 16px", lineHeight: 1.7 }}>
              Diagnostic gratuit, identification des financements disponibles et feuille de route RSE sur mesure. Discutons de votre projet.
            </p>
            <p style={{ fontSize: "13px", color: "#52525b", maxWidth: "520px", margin: "0 auto 40px" }}>
              Découvrez aussi nos{" "}
              <Link href="/missions-sur-mesure" style={{ color: "#a1a1aa", textDecoration: "underline" }}>Missions sur Mesure</Link>{" "}
              et nos{" "}
              <Link href="/solutions-saas" style={{ color: "#a1a1aa", textDecoration: "underline" }}>Solutions SaaS</Link>.
            </p>
            <div className="sp-cta-row">
              <Link
                href="/contact"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "52px", padding: "0 40px", backgroundColor: "#ffffff", color: "#18181b",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Discutons de votre projet RSE
              </Link>
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "52px", padding: "0 40px", border: "1px solid #3f3f46", color: "#ffffff",
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
