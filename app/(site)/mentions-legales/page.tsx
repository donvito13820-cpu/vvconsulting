import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function MentionsLegales() {
  return (
    <>
      <Header variant="solid" />

      <main style={{ backgroundColor: "#ffffff", paddingTop: "72px" }}>
        <div
          className="sp-narrow"
          style={{ paddingTop: "80px", paddingBottom: "100px" }}
        >
          <h1
            style={{
              fontSize: "36px",
              fontWeight: 300,
              color: "#18181b",
              marginBottom: "8px",
            }}
          >
            Mentions légales
          </h1>
          <p
            style={{
              fontSize: "13px",
              color: "#a1a1aa",
              marginBottom: "64px",
            }}
          >
            Dernière mise à jour : mars 2026
          </p>

          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#18181b",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: "1px solid #e4e4e7",
              }}
            >
              1. Éditeur du site
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              Le site <strong>vv-agence-consulting.com</strong> est édité par <strong>VV Consulting</strong>, cabinet de conseil stratégique et d'automatisation.
            </p>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#52525b",
                marginTop: "12px",
              }}
            >
              <strong>Responsables de la publication :</strong>
              <br />
              Victor Casen — <a href="mailto:victor.casen@edhec.com" style={{ color: "#18181b" }}>victor.casen@edhec.com</a>
              <br />
              Vito Ferrandis — <a href="mailto:vito.ferrandis@edhec.com" style={{ color: "#18181b" }}>vito.ferrandis@edhec.com</a>
              <br />
              <br />
              <strong>Téléphone :</strong> 06 73 83 75 75 / 06 46 87 75 15
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#18181b",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: "1px solid #e4e4e7",
              }}
            >
              2. Hébergement
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              Ce site est hébergé par <strong>Vercel Inc.</strong>
              <br />
              340 Pine Street, Suite 701 — San Francisco, CA 94104, États-Unis
              <br />
              Site web : <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "#18181b" }}>vercel.com</a>
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#18181b",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: "1px solid #e4e4e7",
              }}
            >
              3. Propriété intellectuelle
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              L'ensemble du contenu de ce site (textes, graphiques, logos, icônes, images) est la propriété exclusive de VV Consulting et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle. Toute reproduction, distribution, modification ou utilisation de ces contenus, sans l'accord exprès et écrit de VV Consulting, est strictement interdite.
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#18181b",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: "1px solid #e4e4e7",
              }}
            >
              4. Limitation de responsabilité
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              VV Consulting s'efforce de fournir des informations aussi précises et à jour que possible. Cependant, VV Consulting ne saurait être tenu responsable des omissions, des inexactitudes et des carences dans la mise à jour, qu'elles soient de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>

          <section style={{ marginBottom: "48px" }}>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#18181b",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: "1px solid #e4e4e7",
              }}
            >
              5. Liens hypertextes
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              Le site vv-agence-consulting.com peut contenir des liens hypertextes vers d'autres sites internet. VV Consulting ne saurait être responsable du contenu de ces sites tiers ni des conséquences de leur consultation.
            </p>
          </section>

          <section>
            <h2
              style={{
                fontSize: "18px",
                fontWeight: 500,
                color: "#18181b",
                marginBottom: "16px",
                paddingBottom: "12px",
                borderBottom: "1px solid #e4e4e7",
              }}
            >
              6. Droit applicable
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              Les présentes mentions légales sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
