import PageLayout from "@/app/components/PageLayout";

export default function ContactPage() {
  return (
    <PageLayout
      title="Contact"
      subtitle="Échangeons sur vos enjeux et découvrez comment nous pouvons vous accompagner."
      heroImage="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80"
    >
      {/* Contact options */}
      <section style={{ padding: "64px 0", borderBottom: "1px solid #f4f4f5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "32px" }}>
          {/* Devis */}
          <div style={{ padding: "48px", backgroundColor: "#fafafa", border: "1px solid #f4f4f5" }}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
              Demander un devis
            </p>
            <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#18181b", marginBottom: "16px" }}>
              Décrivez votre projet
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#71717a", marginBottom: "32px" }}>
              Transmettez-nous les éléments clés de votre projet et recevez une proposition détaillée sous 48 heures.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "32px" }}>
              <a
                href="mailto:vito.ferrandis@edhec.com"
                style={{ fontSize: "15px", color: "#18181b", textDecoration: "none", fontWeight: 500 }}
              >
                vito.ferrandis@edhec.com
              </a>
              <a
                href="mailto:victor.casen@edhec.com"
                style={{ fontSize: "15px", color: "#18181b", textDecoration: "none", fontWeight: 500 }}
              >
                victor.casen@edhec.com
              </a>
            </div>

            <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
              <a
                href="mailto:vito.ferrandis@edhec.com?cc=victor.casen@edhec.com&subject=Demande de devis — VV Consulting"
                style={{
                  display: "inline-flex", alignItems: "center", height: "48px", padding: "0 32px",
                  border: "1px solid #e4e4e7", backgroundColor: "#ffffff", color: "#18181b",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Envoyer un email
              </a>
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Planifier un appel sur Calendly (nouvelle fenêtre)"
                style={{
                  display: "inline-flex", alignItems: "center", height: "48px", padding: "0 32px",
                  border: "1px solid #e4e4e7", backgroundColor: "#ffffff", color: "#18181b",
                  fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
                }}
              >
                Planifier un appel
              </a>
            </div>
          </div>

          {/* RDV */}
          <div style={{ padding: "48px", backgroundColor: "#18181b" }}>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#52525b", marginBottom: "16px" }}>
              Prendre rendez-vous
            </p>
            <h2 style={{ fontSize: "24px", fontWeight: 400, color: "#ffffff", marginBottom: "16px" }}>
              Réservez un créneau
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#a1a1aa", marginBottom: "32px" }}>
              Planifiez un entretien de 30 minutes pour discuter de vos besoins avec un consultant.
            </p>
            <a
              href="https://calendly.com/vito-ferrandis-edhec/30min"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Réserver un créneau sur Calendly (nouvelle fenêtre)"
              style={{
                display: "inline-flex", alignItems: "center", height: "48px", padding: "0 32px",
                backgroundColor: "#ffffff", color: "#18181b",
                fontSize: "11px", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", textDecoration: "none",
              }}
            >
              Accéder au calendrier
            </a>
          </div>
        </div>
      </section>

      {/* Coordinates */}
      <section style={{ padding: "64px 0", borderBottom: "1px solid #f4f4f5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa" }}>
              Coordonnées
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#18181b", marginBottom: "12px" }}>Email</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <a href="mailto:vito.ferrandis@edhec.com" style={{ fontSize: "15px", color: "#71717a", textDecoration: "none" }}>
                  vito.ferrandis@edhec.com
                </a>
                <a href="mailto:victor.casen@edhec.com" style={{ fontSize: "15px", color: "#71717a", textDecoration: "none" }}>
                  victor.casen@edhec.com
                </a>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#18181b", marginBottom: "12px" }}>Téléphone</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <a href="tel:+33673837575" style={{ fontSize: "15px", color: "#71717a", textDecoration: "none" }}>
                  06 73 83 75 75
                </a>
                <a href="tel:+33646877515" style={{ fontSize: "15px", color: "#71717a", textDecoration: "none" }}>
                  06 46 87 75 15
                </a>
              </div>
            </div>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#18181b", marginBottom: "8px" }}>Rendez-vous</h3>
              <a
                href="https://calendly.com/vito-ferrandis-edhec/30min"
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "15px", color: "#71717a", textDecoration: "none" }}
              >
                Réserver un créneau en ligne
              </a>
            </div>
            <div>
              <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#18181b", marginBottom: "8px" }}>Horaires</h3>
              <p style={{ fontSize: "15px", color: "#71717a" }}>Lun - Dim : 8h - 23h</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa" }}>
              Comment ça se passe
            </p>
          </div>
          <div>
            {[
              { num: "01", title: "Prise de contact", desc: "Échange initial pour comprendre vos besoins et votre contexte." },
              { num: "02", title: "Analyse", desc: "Étude approfondie de votre situation et identification des leviers." },
              { num: "03", title: "Proposition", desc: "Présentation d'une offre détaillée avec planning et budget." },
            ].map((item, i) => (
              <div key={item.num} style={{ display: "flex", gap: "24px", padding: "24px 0", borderBottom: i < 2 ? "1px solid #f4f4f5" : "none" }}>
                <span style={{ width: "40px", height: "40px", backgroundColor: "#fafafa", border: "1px solid #e4e4e7", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 500, color: "#71717a", flexShrink: 0 }}>
                  {item.num}
                </span>
                <div>
                  <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#18181b", marginBottom: "8px" }}>{item.title}</h3>
                  <p style={{ fontSize: "14px", color: "#71717a" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
