"use client";

import { useEffect, useRef, useState } from "react";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Link from "next/link";

const features = [
  {
    num: "01",
    title: "Dashboard temps réel",
    desc: "Visualisez en un coup d'œil l'ensemble de vos avis sur toutes les plateformes connectées. Note globale, évolution mensuelle, volume d'avis, alertes sur les notes basses — tout est centralisé dans une interface claire et actionnable.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    num: "02",
    title: "Réponse rapide",
    desc: "Répondez directement aux avis depuis la plateforme, sans jongler entre plusieurs comptes et onglets. Des templates personnalisables accélèrent le traitement des avis récurrents tout en préservant l'authenticité de vos réponses.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    num: "03",
    title: "Catégorisation intelligente",
    desc: "Le système classe automatiquement vos avis par thématique : service, prix, qualité, accueil, délai, propreté… Vous identifiez immédiatement les points forts à valoriser et les points faibles à corriger, sans lire chaque avis un par un.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    ),
  },
  {
    num: "04",
    title: "Rapport mensuel automatisé",
    desc: "Chaque mois, recevez un compte-rendu détaillé et narratif : analyse des tendances, comparaison avec le mois précédent, thématiques émergentes et recommandations concrètes. Un rapport que vous pouvez partager directement avec votre équipe ou vos associés.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    num: "05",
    title: "Audit interne",
    desc: "Au-delà des avis, notre plateforme croise les données pour identifier les axes d'amélioration prioritaires dans votre activité. Qu'est-ce qui génère de la satisfaction ? Où se concentrent les insatisfactions ? Quels collaborateurs ou quelles périodes posent problème ?",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
  },
  {
    num: "06",
    title: "Filtrage des mots-clés récurrents",
    desc: "Détectez les problèmes systémiques avant qu'ils s'aggravent. Si 15 clients mentionnent \"attente\" ou \"température\" dans leurs avis ce mois-ci, vous le savez immédiatement — avec le contexte, le volume et la tendance sur les 3 derniers mois.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
      </svg>
    ),
  },
];

const targets = [
  { icon: "◆", label: "Restaurants & hôtels" },
  { icon: "◇", label: "Commerces de proximité" },
  { icon: "○", label: "Artisans & prestataires" },
  { icon: "□", label: "Professions libérales" },
  { icon: "△", label: "Chaînes multi-sites" },
  { icon: "▽", label: "PME avec avis en ligne" },
];

const faq = [
  {
    q: "Quelles plateformes d'avis sont supportées par votre solution ?",
    a: "Notre plateforme supporte Google Business Profile, Tripadvisor et les principales plateformes sectorielles. De nouvelles intégrations sont ajoutées régulièrement. Contactez-nous pour vérifier la compatibilité avec votre secteur spécifique.",
  },
  {
    q: "Répondre aux avis négatifs peut-il aggraver la situation ?",
    a: "Non, bien au contraire. Les études montrent que répondre aux avis négatifs de manière professionnelle augmente la confiance des futurs clients. Notre plateforme propose des templates de réponse adaptés à chaque type d'insatisfaction, aidant à transformer une expérience négative en démonstration de professionnalisme.",
  },
  {
    q: "Combien de temps faut-il pour voir une amélioration de sa note Google ?",
    a: "Les résultats varient selon le volume d'avis existants et la fréquence des nouvelles évaluations. En général, les établissements qui utilisent notre plateforme observent une amélioration de 0,2 à 0,5 point de leur note moyenne en 3 à 6 mois, grâce à une meilleure gestion des réponses et à l'identification des points d'amélioration prioritaires.",
  },
  {
    q: "Est-il possible de signaler ou supprimer un faux avis ?",
    a: "Oui. Notre plateforme intègre un module de signalement des avis suspects directement auprès des plateformes concernées (Google, Tripadvisor). Nous guidons également nos clients dans le processus de contestation — qui, bien mené, aboutit à la suppression dans 40 à 60 % des cas selon les plateformes.",
  },
  {
    q: "Notre équipe n'est pas technique — la prise en main est-elle compliquée ?",
    a: "La simplicité d'usage est au cœur de notre conception. Si vous savez consulter vos emails et naviguer sur un smartphone, vous saurez utiliser notre plateforme. La prise en main complète se fait en moins d'une heure, et nous assurons un onboarding personnalisé pour chaque nouveau client.",
  },
];

export default function SolutionsSaaSPage() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
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
              backgroundImage: "url(https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1600&q=80)",
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
                  Solutions SaaS
                </h1>
                <p className="animate-slideUp" style={{ fontSize: "16px", color: "rgba(255,255,255,0.75)", maxWidth: "520px", lineHeight: 1.6, marginTop: "16px", animationDelay: "0.2s" }}>
                  Gestion et analyse des avis clients en temps réel. Une plateforme pensée pour l&apos;action, pas pour les équipes marketing dédiées.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pourquoi nous avons créé ce SaaS */}
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
                  Pourquoi nous avons créé ce SaaS
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, marginBottom: "24px" }}>
                  La Simplicité que le Marché n&apos;Offrait Pas
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "20px" }}>
                  Nos clients avaient un problème récurrent : ils recevaient des dizaines d&apos;avis chaque semaine sur Google, Tripadvisor ou d&apos;autres plateformes, sans aucun outil simple pour les centraliser, les analyser et y répondre efficacement. Les solutions existantes sur le marché étaient soit trop complexes, soit trop chères pour des PME, soit peu adaptées à une utilisation quotidienne par des non-techniciens.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                  Nous avons développé notre propre plateforme SaaS de gestion des avis clients : une interface intuitive, pensée pour l&apos;action, qui permet à n&apos;importe quel responsable de commerce ou de service de reprendre le contrôle de sa réputation en ligne en moins d&apos;une heure. Deux choses que l&apos;IA seule ne peut pas offrir — la <strong style={{ fontWeight: 500, color: "#18181b" }}>simplicité</strong> et la <strong style={{ fontWeight: 500, color: "#18181b" }}>visibilité</strong>.
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
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
                  {[
                    { val: "Tout centralisé", label: "Google, Tripadvisor & plus" },
                    { val: "Temps réel", label: "Alertes instantanées" },
                    { val: "1h", label: "Pour être opérationnel" },
                    { val: "Mensuel", label: "Rapport narratif automatique" },
                  ].map((kpi, i) => (
                    <div key={i} style={{ padding: "32px", backgroundColor: "#fafafa", border: "1px solid #f4f4f5", textAlign: "center" }}>
                      <p style={{ fontSize: "22px", fontWeight: 400, color: "#18181b", marginBottom: "8px", lineHeight: 1.2 }}>{kpi.val}</p>
                      <p style={{ fontSize: "12px", color: "#71717a", lineHeight: 1.4 }}>{kpi.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section
          id="features"
          ref={(el) => { sectionRefs.current["features"] = el; }}
          style={{ backgroundColor: "#fafafa", padding: "100px 0" }}
        >
          <div className="site-container">
            <div
              style={{
                opacity: isVisible("features") ? 1 : 0,
                transform: isVisible("features") ? "translateY(0)" : "translateY(40px)",
                transition: "opacity 0.7s ease, transform 0.7s ease",
                marginBottom: "64px",
              }}
            >
              <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.25em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
                Fonctionnalités clés
              </p>
              <h2 style={{ fontSize: "30px", fontWeight: 300, color: "#18181b", maxWidth: "600px", lineHeight: 1.3 }}>
                Une Plateforme Conçue pour la Gestion des Avis au Quotidien
              </h2>
            </div>

            <div className="sp-grid-3" style={{ gap: "24px" }}>
              {features.map((feature, i) => (
                <div
                  key={i}
                  onMouseEnter={() => setHoveredFeature(i)}
                  onMouseLeave={() => setHoveredFeature(null)}
                  style={{
                    backgroundColor: hoveredFeature === i ? "#18181b" : "#ffffff",
                    padding: "40px 32px",
                    border: "1px solid #e4e4e7",
                    cursor: "default",
                    opacity: isVisible("features") ? 1 : 0,
                    transform: isVisible("features") ? "translateY(0)" : "translateY(40px)",
                    transition: "opacity 0.5s ease, transform 0.6s ease, background-color 0.3s ease, box-shadow 0.3s ease",
                    transitionDelay: `${i * 0.07}s, ${i * 0.07}s, 0s, 0s`,
                    boxShadow: hoveredFeature === i ? "0 20px 40px rgba(0,0,0,0.12)" : "none",
                  }}
                >
                  <div style={{ color: hoveredFeature === i ? "#ffffff" : "#18181b", marginBottom: "20px", transition: "color 0.3s" }}>
                    {feature.icon}
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 500, color: hoveredFeature === i ? "rgba(255,255,255,0.4)" : "#a1a1aa", letterSpacing: "0.1em", display: "block", marginBottom: "12px", transition: "color 0.3s" }}>
                    {feature.num}
                  </span>
                  <h3 style={{ fontSize: "18px", fontWeight: 500, color: hoveredFeature === i ? "#ffffff" : "#18181b", marginBottom: "12px", transition: "color 0.3s" }}>
                    {feature.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.75, color: hoveredFeature === i ? "rgba(255,255,255,0.7)" : "#71717a", transition: "color 0.3s" }}>
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pour qui */}
        <section
          id="target"
          ref={(el) => { sectionRefs.current["target"] = el; }}
          style={{ padding: "100px 0" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "center" }}>
              <div
                style={{
                  opacity: isVisible("target") ? 1 : 0,
                  transform: isVisible("target") ? "translateX(0)" : "translateX(-50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "20px" }}>
                  À qui s&apos;adresse notre solution
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", lineHeight: 1.35, marginBottom: "24px" }}>
                  Toute Entreprise dont la Réputation en Ligne est un Levier Commercial
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b", marginBottom: "24px" }}>
                  Notre plateforme SaaS est conçue pour les structures qui reçoivent des avis en ligne de manière régulière et pour lesquelles la note Google ou Tripadvisor a un impact direct sur leur chiffre d&apos;affaires. Une amélioration d&apos;un seul point de note sur Google peut augmenter le taux de clic de 25 % et les réservations de 15 à 20 %.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#52525b" }}>
                  Notre solution convient particulièrement aux structures qui n&apos;ont pas d&apos;équipe marketing dédiée à la gestion de la réputation — c&apos;est-à-dire la grande majorité des PME françaises.
                </p>
              </div>
              <div
                style={{
                  opacity: isVisible("target") ? 1 : 0,
                  transform: isVisible("target") ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.2s",
                }}
              >
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", backgroundColor: "#f4f4f5" }}>
                  {targets.map((t, i) => (
                    <div key={i} style={{ backgroundColor: "#fafafa", padding: "28px 24px", display: "flex", alignItems: "center", gap: "14px" }}>
                      <span style={{ fontSize: "16px", color: "#18181b" }}>{t.icon}</span>
                      <span style={{ fontSize: "14px", fontWeight: 500, color: "#3f3f46" }}>{t.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ce qui nous différencie */}
        <section
          id="diff"
          ref={(el) => { sectionRefs.current["diff"] = el; }}
          style={{ backgroundColor: "#09090b", padding: "100px 0" }}
        >
          <div className="site-container">
            <div className="sp-grid-2" style={{ gap: "80px", alignItems: "center" }}>
              <div
                style={{
                  opacity: isVisible("diff") ? 1 : 0,
                  transform: isVisible("diff") ? "translateX(0)" : "translateX(-50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                }}
              >
                <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52525b", marginBottom: "20px" }}>
                  Notre différence
                </p>
                <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#ffffff", lineHeight: 1.35, marginBottom: "24px" }}>
                  Conçu pour le Quotidien, Pas pour les Analystes
                </h2>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#a1a1aa", marginBottom: "20px" }}>
                  La plupart des outils de gestion des avis sont conçus pour des équipes marketing dédiées avec du temps et une expertise analytique. Notre solution est pensée pour le responsable ou gérant qui n&apos;a pas 2 heures par semaine à consacrer à sa e-réputation.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#a1a1aa" }}>
                  Interface simplifiée, <strong style={{ color: "#ffffff", fontWeight: 400 }}>rapport mensuel narratif</strong> (pas un tableau de chiffres bruts impossible à interpréter), et un focus permanent sur les <strong style={{ color: "#ffffff", fontWeight: 400 }}>actions concrètes</strong> plutôt que sur les métriques pour les métriques.
                </p>
              </div>
              <div
                style={{
                  opacity: isVisible("diff") ? 1 : 0,
                  transform: isVisible("diff") ? "translateX(0)" : "translateX(50px)",
                  transition: "opacity 0.7s ease, transform 0.7s ease",
                  transitionDelay: "0.2s",
                }}
              >
                {[
                  { label: "Interface", nous: "Simple & intuitive", eux: "Complexe & technique" },
                  { label: "Rapport", nous: "Narratif & actionnable", eux: "Tableau de données brutes" },
                  { label: "Prise en main", nous: "< 1 heure", eux: "Formation nécessaire" },
                  { label: "Focus", nous: "Actions concrètes", eux: "Métriques & dashboards" },
                  { label: "Prix", nous: "Adapté PME", eux: "Forfaits grands comptes" },
                ].map((row, i) => (
                  <div key={i} style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "0", borderBottom: "1px solid #27272a", padding: "16px 0" }}>
                    <span style={{ fontSize: "12px", fontWeight: 500, color: "#52525b", textTransform: "uppercase", letterSpacing: "0.05em" }}>{row.label}</span>
                    <span style={{ fontSize: "14px", color: "#ffffff", fontWeight: 500 }}>{row.nous}</span>
                    <span style={{ fontSize: "14px", color: "#52525b" }}>{row.eux}</span>
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
              <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b" }}>Gestion des avis clients — vos questions</h2>
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
              Reprenez le contrôle de votre réputation en ligne
            </h2>
            <p style={{ fontSize: "16px", color: "#a1a1aa", maxWidth: "520px", margin: "0 auto 16px", lineHeight: 1.7 }}>
              Demandez une démo gratuite et découvrez comment notre plateforme peut transformer la gestion de vos avis clients.
            </p>
            <p style={{ fontSize: "13px", color: "#52525b", maxWidth: "520px", margin: "0 auto 40px" }}>
              Découvrez aussi nos{" "}
              <Link href="/missions-sur-mesure" style={{ color: "#a1a1aa", textDecoration: "underline" }}>Missions sur Mesure</Link>{" "}
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
                Demander une démo
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
