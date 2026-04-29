"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const services = [
  {
    num: "01",
    title: "Création de Sites Web",
    desc: "Design, performance et SEO technique. Des sites qui génèrent des résultats mesurables, pas de simples vitrines.",
  },
  {
    num: "02",
    title: "Automatisation & IA",
    desc: "Workflows intelligents avec n8n, Make, Zapier et LLMs. Libérez vos équipes des tâches répétitives.",
  },
  {
    num: "03",
    title: "Conseil Digital",
    desc: "Audit de maturité digitale, feuille de route et accompagnement stratégique orienté ROI.",
  },
];

const automationUseCases = [
  { title: "Qualification de leads", desc: "Enrichissement CRM automatique, scoring et notification instantanée de l'équipe commerciale." },
  { title: "Traitement de documents", desc: "Synthèse automatique de contrats, emails et comptes-rendus via LLM. Extraction de données structurées." },
  { title: "Reporting automatisé", desc: "Consolidation des KPIs depuis vos sources de données, calcul d'indicateurs et envoi hebdomadaire." },
  { title: "Intégration inter-outils", desc: "Synchronisation ERP, CRM, e-commerce et outils internes. Fini la ressaisie manuelle et les doublons." },
  { title: "Support & avis clients", desc: "Réponses assistées par IA, triage automatique des tickets et analyse des feedbacks en temps réel." },
  { title: "Facturation & relances", desc: "Création automatique des factures, suivi des paiements et relances graduées sans intervention manuelle." },
];

const tools = ["n8n", "Make", "Zapier", "Power Automate", "OpenAI API", "Anthropic API", "Python", "APIs REST", "Webhooks"];

const faq = [
  {
    q: "Quelle est la différence entre VV Agence Consulting et une agence web classique ?",
    a: "Une agence web classique se concentre sur la création du site et s'arrête là. Nous allons plus loin : nous intégrons le SEO dès la conception, nous automatisons les processus liés au site (formulaires, CRM, notifications) et nous accompagnons la stratégie digitale sur la durée. Vous avez un partenaire unique pour l'ensemble de votre écosystème digital.",
  },
  {
    q: "Mon entreprise est-elle trop petite pour bénéficier de l'IA et de l'automatisation ?",
    a: "Non. Avec des outils comme n8n ou Make, l'automatisation est accessible dès 10 à 50 € par mois. Une PME de 5 personnes qui passe 2h par jour sur des tâches répétitives peut automatiser 80% de ces tâches en quelques semaines. Le ROI est souvent visible dès le premier mois.",
  },
  {
    q: "Combien de temps faut-il pour créer un site web performant et bien référencé ?",
    a: "Pour un site vitrine professionnel avec SEO technique optimisé, comptez 4 à 8 semaines selon la complexité. Pour un site e-commerce ou une plateforme avec fonctionnalités sur mesure, 8 à 16 semaines. Chaque projet démarre par un diagnostic de 48h pour calibrer précisément le périmètre.",
  },
  {
    q: "Proposez-vous un accompagnement après la livraison du projet ?",
    a: "Oui, systématiquement. Nous proposons des formules de suivi mensuel couvrant la maintenance technique, l'optimisation continue des automatisations, le monitoring des performances SEO et les ajustements stratégiques. Votre investissement continue de produire des résultats dans la durée.",
  },
];

export default function MissionsSurMesurePage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoveredCase, setHoveredCase] = useState<number | null>(null);
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
              backgroundImage: "url(https://images.unsplash.com/photo-1551434678-e076c223a692?w=1600&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.72))" }} />
            <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "flex-end", paddingBottom: "60px" }}>
              <div className="site-container" style={{ width: "100%" }}>
                <p className="animate-slideUp" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "rgba(255,255,255,0.65)", marginBottom: "16px" }}>
                  Nos services
                </p>
                <h1 className="animate-slideUp sp-hero-title" style={{ fontSize: "48px", fontWeight: 300, color: "#ffffff", maxWidth: "700px", lineHeight: 1.15, animationDelay: "0.1s" }}>
                  Missions sur Mesure
                </h1>
                <p className="animate-slideUp" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "520px", lineHeight: 1.6, marginTop: "16px", animationDelay: "0.2s" }}>
                  Création de sites web, automatisation IA et conseil en transformation digitale. Des solutions conçues à partir de votre réalité, pas d&apos;un catalogue.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Intro — 3 axes */}
        <section
          id="intro"
          ref={(el) => { sectionRefs.current["intro"] = el; }}
          style={{ padding: "100px 0", borderBottom: "1px solid #f4f4f5" }}
        >
          <div className="site-container">
            <div
              style={{
                opacity: isVisible("intro") ? 1 : 0,
                transform: isVisible("intro") ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                marginBottom: "64px",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                Notre approche
              </p>
              <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, maxWidth: "750px", marginBottom: "24px" }}>
                Des solutions digitales conçues pour votre réalité
              </h2>
              <p style={{ fontSize: "17px", lineHeight: 1.8, color: "#52525b", maxWidth: "700px" }}>
                L&apos;ère du numérique impose aux entreprises une capacité d&apos;adaptation permanente. Plutôt que d&apos;appliquer des méthodologies standardisées, nous concevons chaque solution à partir de vos contraintes réelles, de vos objectifs mesurables et de votre secteur d&apos;activité. Nos missions sur mesure couvrent l&apos;ensemble du spectre digital — du premier audit à l&apos;implémentation opérationnelle.
              </p>
            </div>

            <div className="sp-grid-3" style={{ gap: "1px", backgroundColor: "#f4f4f5" }}>
              {services.map((s, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: "#ffffff",
                    padding: "48px 40px",
                    opacity: isVisible("intro") ? 1 : 0,
                    transform: isVisible("intro") ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.6s ease, transform 0.6s ease",
                    transitionDelay: `${0.15 + i * 0.1}s`,
                  }}
                >
                  <span style={{ fontSize: "12px", fontWeight: 500, color: "#a1a1aa", letterSpacing: "0.1em", display: "block", marginBottom: "20px" }}>{s.num}</span>
                  <h3 style={{ fontSize: "20px", fontWeight: 500, color: "#18181b", marginBottom: "12px" }}>{s.title}</h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#71717a" }}>{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section Création de sites web */}
        <section
          id="web"
          ref={(el) => { sectionRefs.current["web"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "start" }}>
              <div
                style={{
                  opacity: isVisible("web") ? 1 : 0,
                  transform: isVisible("web") ? "translateX(0)" : "translateX(-50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                  Création de sites web
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, marginBottom: "24px" }}>
                  La Base de Toute Stratégie Digitale
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "20px" }}>
                  Un site web n&apos;est plus une vitrine, c&apos;est le cœur opérationnel de votre présence en ligne. En 2026, plus de 87&nbsp;% des décisions d&apos;achat B2B passent par une recherche en ligne avant tout contact commercial. Un site lent, mal structuré ou invisible sur Google représente une perte de revenus directe et évitable.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "32px" }}>
                  Nous concevons des sites web qui répondent à trois impératifs non négociables : la <strong style={{ fontWeight: 500, color: "#18181b" }}>performance technique</strong> (Core Web Vitals, temps de chargement, hébergement adapté), le <strong style={{ fontWeight: 500, color: "#18181b" }}>SEO dès la conception</strong> (architecture URL, balisage sémantique, données structurées, sitemap dynamique), et la <strong style={{ fontWeight: 500, color: "#18181b" }}>conversion</strong> (parcours utilisateur, CTAs stratégiques, formulaires optimisés).
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#71717a" }}>
                  Nos réalisations s&apos;adressent aux PME, startups, cabinets professionnels et toute structure qui souhaite faire de son site un vrai outil commercial — et pas une dépense marketing inerte qu&apos;on oublie le lendemain de la mise en ligne.
                </p>
              </div>
              <div
                style={{
                  opacity: isVisible("web") ? 1 : 0,
                  transform: isVisible("web") ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.2s",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {[
                    { label: "Design & UX", detail: "Interface soignée, mobile-first, cohérence de marque" },
                    { label: "Performance", detail: "LCP < 2,5s, CLS < 0,1, First Input Delay optimisé" },
                    { label: "SEO technique", detail: "Balises, canonicals, schema.org, sitemap XML dynamique" },
                    { label: "Sécurité", detail: "HTTPS, headers de sécurité, protection des formulaires" },
                    { label: "Intégrations", detail: "CRM, analytics, outils marketing, automatisations" },
                  ].map((item, i) => (
                    <div key={i} style={{ padding: "24px 0", borderBottom: "1px solid #f4f4f5", display: "flex", gap: "24px", alignItems: "start" }}>
                      <span style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#18181b", marginTop: "8px", flexShrink: 0 }} />
                      <div>
                        <p style={{ fontSize: "15px", fontWeight: 500, color: "#18181b", marginBottom: "4px" }}>{item.label}</p>
                        <p style={{ fontSize: "13px", color: "#71717a" }}>{item.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section Automatisation & IA */}
        <section
          id="automation"
          ref={(el) => { sectionRefs.current["automation"] = el; }}
          style={{ backgroundColor: "#09090b", padding: "100px 0" }}
        >
          <div className="site-container">
            <div
              style={{
                opacity: isVisible("automation") ? 1 : 0,
                transform: isVisible("automation") ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                marginBottom: "64px",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52525b", marginBottom: "20px" }}>
                Automatisation & Intégration IA
              </p>
              <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#ffffff", lineHeight: 1.35, maxWidth: "700px", marginBottom: "24px" }}>
                Libérez Votre Potentiel — Automatisez ce qui n&apos;a pas besoin d&apos;un humain
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#a1a1aa", maxWidth: "700px" }}>
                L&apos;automatisation n&apos;est plus réservée aux grands groupes. Avec des outils comme <strong style={{ color: "#ffffff", fontWeight: 400 }}>n8n</strong>, <strong style={{ color: "#ffffff", fontWeight: 400 }}>Make</strong> ou <strong style={{ color: "#ffffff", fontWeight: 400 }}>Zapier</strong>, et l&apos;émergence des LLMs accessibles via API, chaque PME peut aujourd&apos;hui automatiser des processus qui lui coûtent des heures chaque semaine. Notre approche est pragmatique : on n&apos;automatise pas pour automatiser — on identifie les tâches répétitives à fort volume et faible valeur ajoutée, et on les élimine.
              </p>
            </div>

            <div className="sp-grid-3" style={{ gap: "1px", backgroundColor: "#27272a" }}>
              {automationUseCases.map((uc, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredCase(i)}
                  onMouseLeave={() => setHoveredCase(null)}
                  style={{
                    backgroundColor: hoveredCase === i ? "#18181b" : "#09090b",
                    padding: "40px 32px",
                    cursor: "default",
                    opacity: isVisible("automation") ? 1 : 0,
                    transform: isVisible("automation") ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease, background-color 0.3s ease",
                    transitionDelay: `${i * 0.07}s, ${i * 0.07}s, 0s`,
                  }}
                >
                  <h3 style={{ fontSize: "16px", fontWeight: 500, color: hoveredCase === i ? "#ffffff" : "rgba(255,255,255,0.9)", marginBottom: "12px", transition: "color 0.3s" }}>
                    {uc.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: hoveredCase === i ? "#a1a1aa" : "#52525b", transition: "color 0.3s" }}>
                    {uc.desc}
                  </p>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "48px",
                padding: "32px 40px",
                backgroundColor: "#18181b",
                border: "1px solid #27272a",
                opacity: isVisible("automation") ? 1 : 0,
                transform: isVisible("automation") ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease, transform 0.6s ease",
                transitionDelay: "0.4s",
              }}
            >
              <p style={{ fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52525b", marginBottom: "16px" }}>
                Technologies maîtrisées
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                {tools.map((tool, i) => (
                  <span key={i} style={{ padding: "8px 20px", border: "1px solid #27272a", fontSize: "13px", fontWeight: 500, color: "#a1a1aa" }}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section Conseil Digital */}
        <section
          id="conseil"
          ref={(el) => { sectionRefs.current["conseil"] = el; }}
          style={{ padding: "100px 0", backgroundColor: "#fafafa" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "center" }}>
              <div
                style={{
                  opacity: isVisible("conseil") ? 1 : 0,
                  transform: isVisible("conseil") ? "translateX(0)" : "translateX(-50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                  Conseil en transformation digitale
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, marginBottom: "24px" }}>
                  Stratégie & Feuille de Route Digitale
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "20px" }}>
                  Avant d&apos;agir, il faut comprendre. Notre mission de conseil digital démarre systématiquement par un <strong style={{ fontWeight: 500, color: "#18181b" }}>audit de maturité digitale</strong> : où en êtes-vous réellement sur les axes outils, processus, data et compétences ? Quels sont les quick wins et les chantiers structurants ?
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "20px" }}>
                  À l&apos;issue de cet audit, nous produisons une <strong style={{ fontWeight: 500, color: "#18181b" }}>feuille de route actionnable</strong> : priorisée, budgétisée, calibrée à votre organisation. Pas un PowerPoint de 100 slides — une synthèse opérationnelle que vos équipes peuvent s&apos;approprier dès le lendemain.
                </p>
                <p style={{ fontSize: "15px", lineHeight: 1.75, color: "#71717a" }}>
                  Notre accompagnement couvre la sélection d&apos;outils (CRM, ERP, outils collaboratifs), la formation des équipes, le pilotage de projets digitaux complexes et l&apos;optimisation continue des dispositifs en place.
                </p>
              </div>
              <div
                style={{
                  opacity: isVisible("conseil") ? 1 : 0,
                  transform: isVisible("conseil") ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.2s",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
                  {[
                    { num: "01", title: "Audit de maturité digitale", desc: "Évaluation de l'existant sur 4 axes : outils, processus, data et compétences. Livrables en 2 semaines." },
                    { num: "02", title: "Feuille de route stratégique", desc: "Priorisation des actions, estimation budgétaire et planning d'implémentation clé en main." },
                    { num: "03", title: "Accompagnement & formation", desc: "Présence à vos côtés pendant la mise en oeuvre, formation des équipes et transfert de compétences." },
                    { num: "04", title: "Mesure & optimisation continue", desc: "Suivi des indicateurs, ajustements itératifs et optimisation des dispositifs sur la durée." },
                  ].map((step, i) => (
                    <div key={i} style={{ display: "flex", gap: "20px", alignItems: "start" }}>
                      <span style={{ fontSize: "12px", fontWeight: 500, color: "#a1a1aa", letterSpacing: "0.05em", width: "28px", flexShrink: 0, paddingTop: "3px" }}>{step.num}</span>
                      <div>
                        <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#18181b", marginBottom: "6px" }}>{step.title}</h3>
                        <p style={{ fontSize: "14px", color: "#71717a", lineHeight: 1.6 }}>{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Notre approche */}
        <section
          id="approach"
          ref={(el) => { sectionRefs.current["approach"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div className="site-container">
            <div
              style={{
                opacity: isVisible("approach") ? 1 : 0,
                transform: isVisible("approach") ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                Comment nous travaillons
              </p>
              <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, maxWidth: "600px", marginBottom: "24px" }}>
                Sur Mesure, Itératif, Orienté ROI
              </h2>
            </div>
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "center", marginTop: "40px" }}>
              <div
                style={{
                  opacity: isVisible("approach") ? 1 : 0,
                  transform: isVisible("approach") ? "translateX(0)" : "translateX(-40px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.1s",
                }}
              >
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "20px" }}>
                  Chaque projet démarre par une prise de contact rapide, un diagnostic sous 48h et une proposition cadrée avec périmètre, budget et planning. Nous travaillons en cycles courts avec des points de validation réguliers — l&apos;objectif est de livrer de la valeur à chaque étape, pas uniquement à la fin du projet.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                  Notre engagement : des résultats mesurables, documentés et transmissibles à vos équipes. Vous restez maître de votre écosystème digital à l&apos;issue de chaque mission.
                </p>
              </div>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "16px",
                  opacity: isVisible("approach") ? 1 : 0,
                  transform: isVisible("approach") ? "translateX(0)" : "translateX(40px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.2s",
                }}
              >
                {[
                  { val: "48h", label: "Pour un premier diagnostic" },
                  { val: "ROI", label: "Mesuré dès le 1er mois" },
                  { val: "100%", label: "Sur mesure, zéro template" },
                  { val: "∞", label: "Suivi post-livraison possible" },
                ].map((kpi, i) => (
                  <div key={i} style={{ padding: "32px", backgroundColor: "#fafafa", border: "1px solid #f4f4f5", textAlign: "center" }}>
                    <p style={{ fontSize: "30px", fontWeight: 200, color: "#18181b", marginBottom: "8px" }}>{kpi.val}</p>
                    <p style={{ fontSize: "13px", color: "#71717a", lineHeight: 1.4 }}>{kpi.label}</p>
                  </div>
                ))}
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
              <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b" }}>Ce que nos clients nous demandent</h2>
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
                    transitionDelay: `${i * 0.08}s`,
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
                  <div style={{ maxHeight: openFaq === i ? "300px" : "0", overflow: "hidden", transition: "max-height 0.4s ease" }}>
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
              Démarrons votre projet digital
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "520px", margin: "0 auto 16px", lineHeight: 1.7 }}>
              Diagnostic gratuit sous 48h. Prenez contact et recevez une première analyse de vos opportunités digitales.
            </p>
            <p style={{ fontSize: "13px", color: "#52525b", maxWidth: "520px", margin: "0 auto 40px" }}>
              Découvrez aussi nos{" "}
              <Link href="/solutions-saas" style={{ color: "#a1a1aa", textDecoration: "underline" }}>Solutions SaaS</Link>{" "}
              et notre offre{" "}
              <Link href="/conseil-rse" style={{ color: "#a1a1aa", textDecoration: "underline" }}>Conseil RSE</Link>.
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
                Demander un audit gratuit
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
