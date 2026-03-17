"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import AnimatedCounter from "@/app/components/AnimatedCounter";
import { motion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "@/app/components/motion/Reveal";
import TextReveal from "@/app/components/motion/TextReveal";
import HoverScale from "@/app/components/motion/HoverScale";

const stats = [
  {
    value: "73%",
    label: "des entreprises constatent une amélioration de leur performance après un accompagnement conseil",
    source: "Global Consulting Survey 2024",
  },
  {
    value: "4.2x",
    label: "retour sur investissement moyen pour les projets d'automatisation des processus",
    source: "Deloitte Automation Report",
  },
  {
    value: "40%",
    label: "de réduction des coûts opérationnels grâce à l'intégration de solutions IA",
    source: "McKinsey AI Impact Study",
  },
  {
    value: "89%",
    label: "des dirigeants considèrent la transformation digitale comme prioritaire pour leur croissance",
    source: "PwC CEO Survey 2024",
  },
];

const methodSteps = [
  { title: "Prise de contact", highlight: "immédiate", desc: "Échange initial pour comprendre vos besoins" },
  { title: "Diagnostic", highlight: "sous 48h", desc: "Analyse de l'existant et proposition d'intervention" },
  { title: "Cadrage", highlight: "collaboratif", desc: "Définition des objectifs et du périmètre avec vous" },
  { title: "Réalisation", highlight: "opérationnelle", desc: "Implémentation des solutions par nos experts" },
  { title: "Livraison", highlight: "& suivi", desc: "Restitution des résultats et accompagnement" },
];

const insights = [
  {
    category: "Transformation",
    title: "L'automatisation, levier de compétitivité en 2026",
    excerpt: "Les entreprises qui automatisent leurs processus gagnent en moyenne 25% de productivité.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
    href: "/articles/automatisation",
  },
  {
    category: "Intelligence artificielle",
    title: "IA générative : opportunités concrètes pour les PME",
    excerpt: "Comment intégrer l'IA pour augmenter la valeur délivrée tout en optimisant les opérations.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80",
    href: "/articles/ia-generative",
  },
  {
    category: "Stratégie",
    title: "Pourquoi externaliser son expertise conseil ?",
    excerpt: "Accédez à une expertise pointue sans les coûts fixes d'un recrutement.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    href: "/articles/expertise-conseil",
  },
];

const icons = [
  <svg key="phone" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  <svg key="send" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>,
  <svg key="users" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
  <svg key="cog" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>,
  <svg key="chart" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 20V10M12 20V4M6 20v-6"/></svg>,
];

export default function Home() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineLineRef = useRef<HTMLDivElement>(null);
  const methodCardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const cards = methodCardRefs.current.filter(Boolean);
    if (!timelineRef.current || !timelineLineRef.current || !cards.length) return;

    const ctx = gsap.context(() => {
      gsap.set(timelineLineRef.current, { scaleX: 0, transformOrigin: "left center" });
      gsap.set(cards, { opacity: 0, x: 80, scale: 0.92 });

      gsap.to(timelineLineRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 80%",
          end: "bottom 50%",
          scrub: 0.5,
        },
      });

      gsap.to(cards, {
        opacity: 1,
        x: 0,
        scale: 1,
        stagger: 0.22,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: {
          trigger: timelineRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });
    }, timelineRef);

    return () => { ctx.revert(); };
  }, []);

  return (
    <>
      <Header variant="transparent" />

      <main>
        {/* HERO */}
        <section style={{ position: "relative", height: "100vh", minHeight: "600px", overflow: "hidden" }}>
          <div className="home-hero-bg" style={{ position: "absolute", inset: 0, backgroundImage: "url(/hero.png)", backgroundSize: "cover", backgroundPosition: "center 60%" }} />
          <div className="home-hero-overlay" style={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.35)" }} />

          {/* Texte haut gauche */}
          <Reveal x={0} y={36} style={{ position: "relative", paddingTop: "140px" }}>
            <div className="site-container">
              <h1 style={{ fontSize: "15px", lineHeight: 1.7, color: "rgba(255,255,255,0.9)", fontWeight: 300, maxWidth: "420px", margin: 0 }}>
                Agence de consulting &amp; automatisation.
                <br />
                Des systèmes clairs, performants et durables.
              </h1>
            </div>
          </Reveal>

          {/* CTAs */}
          <Reveal x={0} y={30} delay={0.18} style={{ position: "absolute", bottom: "48px", left: 0, right: 0 }}>
            <div className="site-container hero-cta-row">
              <Link
                href="/contact"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "50px", padding: "0 36px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.3)",
                  backgroundColor: "rgba(255,255,255,0.05)", color: "#ffffff",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Demander un devis
              </Link>
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Prendre rendez-vous sur Calendly (nouvelle fenêtre)"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  height: "50px", padding: "0 36px", borderRadius: "6px", backgroundColor: "#ffffff", color: "#18181b",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase",
                  textDecoration: "none",
                }}
              >
                Prendre RDV
              </a>
            </div>
          </Reveal>

          {/* Scroll indicator */}
          <div className="animate-pulse" style={{ position: "absolute", bottom: "48px", left: "50%", transform: "translateX(-50%)" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "8px" }}>
              <span style={{ fontSize: "10px", letterSpacing: "0.3em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>Scroll</span>
              <div style={{ width: "1px", height: "32px", background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)" }} />
            </div>
          </div>
        </section>

        {/* INTRO */}
        <section style={{ backgroundColor: "#ffffff", padding: "96px 0" }}>
          <Reveal className="site-container">
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "24px" }}>
              VV Consulting
            </p>
            <h2 style={{ maxWidth: "900px", fontSize: "34px", fontWeight: 300, lineHeight: 1.4, color: "#18181b" }}>
              <TextReveal text="Nous accompagnons les entreprises dans leur transformation" />
              <span style={{ color: "#a1a1aa" }}> — du diagnostic stratégique à l&apos;implémentation opérationnelle.</span>
            </h2>
          </Reveal>
        </section>

        {/* STATISTIQUES */}
        <section style={{ backgroundColor: "#09090b", padding: "80px 0" }}>
          <Reveal className="site-container">
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#52525b", marginBottom: "16px" }}>
              L&apos;impact du conseil
            </p>
            <h2 style={{ fontSize: "26px", fontWeight: 300, color: "rgba(255,255,255,0.9)", marginBottom: "48px" }}>
              Des résultats prouvés, mesurables
            </h2>

            <div className="grid-stats" style={{ backgroundColor: "#27272a" }}>
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="stat-card"
                  style={{ backgroundColor: "#09090b", padding: "40px 32px" }}
                  initial={{ opacity: 0, x: 60, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <div style={{ fontSize: "48px", fontWeight: 200, color: "#ffffff", marginBottom: "16px", lineHeight: 1 }}>
                    <AnimatedCounter value={stat.value} duration={2000} />
                  </div>
                  <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#a1a1aa", marginBottom: "16px" }}>{stat.label}</p>
                  <p style={{ fontSize: "11px", color: "#52525b" }}>{stat.source}</p>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* MÉTHODOLOGIE - Timeline animée */}
        <section ref={timelineRef} style={{ backgroundColor: "#ffffff", padding: "100px 0" }}>
          <div className="site-container">
            <div style={{ textAlign: "center", marginBottom: "72px" }}>
              <h2 style={{ fontSize: "34px", fontWeight: 300, color: "#18181b", marginBottom: "12px" }}>Notre démarche</h2>
              <div style={{ width: "60px", height: "3px", backgroundColor: "#18181b", margin: "0 auto" }} />
            </div>

            {/* Timeline avec animation */}
            <div style={{ position: "relative", padding: "60px 0" }}>
              {/* Ligne de fond (grise) — hidden on mobile via CSS */}
              <div className="method-timeline-lines" style={{
                position: "absolute", top: "50%", left: "10%", right: "10%",
                height: "3px", backgroundColor: "#e4e4e7", transform: "translateY(-50%)", zIndex: 1
              }} />
              
              {/* Ligne animée (noire) — hidden on mobile via CSS */}
              <div
                ref={timelineLineRef}
                className="method-timeline-lines"
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "10%",
                  width: "80%",
                  height: "3px",
                  backgroundColor: "#18181b",
                  transform: "translateY(-50%)",
                  zIndex: 2,
                }}
              />

              {/* Étapes */}
              <div className="grid-method">
                {methodSteps.map((step, i) => (
                  <div
                    key={i}
                    ref={(el) => {
                      methodCardRefs.current[i] = el;
                    }}
                    className="method-step"
                    style={{
                      textAlign: "center",
                      opacity: 0,
                      transform: "translateX(80px) scale(0.92)",
                    }}
                  >
                    <div
                      style={{
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        backgroundColor: "#ffffff",
                        border: "2px solid #18181b",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        margin: "0 auto 20px",
                        color: "#18181b",
                        transition: "all 0.4s ease",
                        boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
                      }}
                    >
                      {icons[i]}
                    </div>
                    <h3 style={{ fontSize: "15px", fontWeight: 500, color: "#18181b", marginBottom: "4px" }}>
                      {step.title} <span style={{ fontStyle: "italic", color: "#71717a" }}>{step.highlight}</span>
                    </h3>
                    <p style={{ fontSize: "13px", color: "#a1a1aa", lineHeight: 1.5, maxWidth: "180px", margin: "0 auto" }}>
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INSIGHTS - Version dynamique */}
        <section style={{ backgroundColor: "#fafafa", padding: "100px 0" }}>
          <Reveal className="site-container">
            <div className="insights-header">
              <div>
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                  Actualités & Insights
                </p>
                <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#18181b" }}>
                  Dernières perspectives
                </h2>
              </div>
              <HoverScale scale={1.03} y={-1}>
                <Link
                  href="/accueil/notre-approche"
                  className="btn-hover"
                  style={{
                    display: "inline-flex", alignItems: "center", gap: "8px",
                    fontSize: "12px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase",
                    color: "#18181b", textDecoration: "none", padding: "12px 24px",
                    border: "1px solid #18181b",
                  }}
                >
                  Tout voir
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </HoverScale>
            </div>

            <div className="grid-insights">
              {/* Article principal */}
              <motion.div
                initial={{ opacity: 0, x: 70, filter: "blur(4px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
              >
                <Link href={insights[0].href} style={{ textDecoration: "none", gridRow: "span 2" }}>
                <article className="insight-card" style={{ position: "relative", overflow: "hidden", backgroundColor: "#ffffff", height: "100%" }}>
                  <div style={{ position: "relative", height: "100%", minHeight: "500px" }}>
                    <div
                      style={{
                        position: "absolute", inset: 0,
                        backgroundImage: `url(${insights[0].image})`,
                        backgroundSize: "cover", backgroundPosition: "center",
                        transition: "transform 0.6s ease",
                      }}
                      className="insight-img"
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.2) 50%, transparent 100%)" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "40px" }}>
                      <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", marginBottom: "16px" }}>
                        {insights[0].category}
                      </p>
                      <h3 style={{ fontSize: "24px", fontWeight: 400, color: "#ffffff", marginBottom: "16px", lineHeight: 1.3 }}>
                        {insights[0].title}
                      </h3>
                      <p style={{ fontSize: "14px", lineHeight: 1.6, color: "rgba(255,255,255,0.75)", maxWidth: "400px" }}>
                        {insights[0].excerpt}
                      </p>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px", fontSize: "12px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "rgba(255,255,255,0.8)" }}>
                        Lire l&apos;article
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                    </div>
                  </div>
                </article>
                </Link>
              </motion.div>

              {/* Articles secondaires */}
              {insights.slice(1).map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 60, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4 }}
                >
                  <Link href={item.href} style={{ textDecoration: "none" }}>
                    <article className="insight-card insight-secondary-card">
                      <div
                        className="insight-secondary-img"
                        style={{ backgroundImage: `url(${item.image})` }}
                      />
                      <div style={{ padding: "32px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                        <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "12px" }}>
                          {item.category}
                        </p>
                        <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#18181b", marginBottom: "12px", lineHeight: 1.4 }}>
                          {item.title}
                        </h3>
                        <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#71717a", marginBottom: "16px" }}>
                          {item.excerpt}
                        </p>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "12px", fontWeight: 500, letterSpacing: "0.12em", textTransform: "uppercase", color: "#18181b" }}>
                          Lire
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* CTA FINAL */}
        <section style={{ backgroundColor: "#18181b", padding: "100px 0" }}>
          <Reveal className="site-container" style={{ textAlign: "center" }}>
            <h2 style={{ fontSize: "36px", fontWeight: 300, color: "#ffffff", marginBottom: "24px" }}>
              <TextReveal text="Prêt à transformer votre organisation ?" />
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "550px", margin: "0 auto 48px", lineHeight: 1.7 }}>
              Discutons de vos enjeux et découvrez comment notre expertise peut accélérer votre croissance.
            </p>
            <div className="cta-final-buttons">
              <Link
                href="/contact"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  minWidth: "240px", height: "56px", padding: "0 48px", borderRadius: "6px",
                  backgroundColor: "#ffffff", color: "#18181b",
                  fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Demander un devis
              </Link>
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Planifier un appel sur Calendly (nouvelle fenêtre)"
                className="btn-hover"
                style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  minWidth: "240px", height: "56px", padding: "0 48px", borderRadius: "6px",
                  backgroundColor: "#dc2626", color: "#ffffff",
                  fontSize: "12px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Planifier un appel
              </a>
            </div>
          </Reveal>
        </section>
      </main>

      <Footer />
    </>
  );
}
