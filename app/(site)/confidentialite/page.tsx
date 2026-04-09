import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export default function Confidentialite() {
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
            Politique de confidentialité
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
              1. Responsable du traitement
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              VV Consulting est responsable du traitement des données personnelles collectées via le site vv-agence-consulting.com. Pour toute question relative à vos données, contactez-nous à :{" "}
              <a href="mailto:vito.ferrandis@edhec.com" style={{ color: "#18181b" }}>
                vito.ferrandis@edhec.com
              </a>
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
              2. Données collectées
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              Nous collectons uniquement les données que vous nous transmettez volontairement via le formulaire de contact ou lors de la prise de rendez-vous :
            </p>
            <ul
              style={{
                fontSize: "15px",
                lineHeight: 2,
                color: "#52525b",
                marginTop: "12px",
                paddingLeft: "24px",
              }}
            >
              <li>Nom et prénom</li>
              <li>Adresse email professionnelle</li>
              <li>Numéro de téléphone (optionnel)</li>
              <li>Nom de l'entreprise</li>
              <li>Message et description de votre projet</li>
            </ul>
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
              3. Finalité du traitement
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              Vos données sont utilisées exclusivement pour :
            </p>
            <ul
              style={{
                fontSize: "15px",
                lineHeight: 2,
                color: "#52525b",
                marginTop: "12px",
                paddingLeft: "24px",
              }}
            >
              <li>Répondre à vos demandes de contact et de devis</li>
              <li>Organiser et confirmer les rendez-vous</li>
              <li>Vous adresser des propositions commerciales adaptées</li>
            </ul>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#52525b",
                marginTop: "12px",
              }}
            >
              Vos données ne sont jamais vendues ni partagées à des fins commerciales avec des tiers.
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
              4. Durée de conservation
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              Vos données sont conservées pendant une durée de 3 ans à compter du dernier contact, ou jusqu'à votre demande de suppression.
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
              5. Vos droits (RGPD)
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
            </p>
            <ul
              style={{
                fontSize: "15px",
                lineHeight: 2,
                color: "#52525b",
                marginTop: "12px",
                paddingLeft: "24px",
              }}
            >
              <li><strong>Droit d'accès</strong> : obtenir une copie de vos données</li>
              <li><strong>Droit de rectification</strong> : corriger des données inexactes</li>
              <li><strong>Droit à l'effacement</strong> : demander la suppression de vos données</li>
              <li><strong>Droit à la portabilité</strong> : récupérer vos données dans un format structuré</li>
              <li><strong>Droit d'opposition</strong> : vous opposer au traitement de vos données</li>
            </ul>
            <p
              style={{
                fontSize: "15px",
                lineHeight: 1.8,
                color: "#52525b",
                marginTop: "16px",
              }}
            >
              Pour exercer ces droits, contactez-nous à{" "}
              <a href="mailto:vito.ferrandis@edhec.com" style={{ color: "#18181b" }}>
                vito.ferrandis@edhec.com
              </a>
              . En cas de litige, vous pouvez saisir la{" "}
              <strong>CNIL</strong> (Commission Nationale de l'Informatique et des Libertés) sur{" "}
              <a href="https://www.cnil.fr" target="_blank" rel="noopener noreferrer" style={{ color: "#18181b" }}>
                www.cnil.fr
              </a>
              .
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
              6. Cookies
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#52525b" }}>
              Ce site n'utilise pas de cookies de traçage ni d'outils d'analyse comportementale. Seuls des cookies techniques strictement nécessaires au fonctionnement du site peuvent être déposés.
            </p>
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
}
