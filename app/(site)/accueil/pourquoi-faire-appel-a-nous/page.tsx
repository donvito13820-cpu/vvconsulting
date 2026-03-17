import PageLayout from "@/app/components/PageLayout";

export const metadata = {
  title: "Pourquoi faire appel à nous | VV Consulting",
  description: "Les raisons de choisir VV Consulting pour vos projets de transformation.",
};

export default function PourquoiNousPage() {
  return (
    <PageLayout
      title="Pourquoi nous choisir"
      subtitle="Des compétences éprouvées et un engagement total pour la réussite de vos projets."
      heroImage="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80"
    >
      {/* Expertise */}
      <section style={{ padding: "64px 0", borderBottom: "1px solid #f4f4f5" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "64px", alignItems: "start" }}>
          <div>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa" }}>
              Expertise
            </p>
          </div>
          <div>
            <p style={{ fontSize: "16px", lineHeight: 1.8, color: "#3f3f46" }}>
              Notre équipe possède une connaissance approfondie des enjeux propres à différents secteurs d'activité. Cette expertise nous permet d'identifier rapidement les leviers d'optimisation pertinents.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section style={{ padding: "64px 0", borderBottom: "1px solid #f4f4f5" }}>
        <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "32px" }}>
          Nos atouts
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px" }}>
          {[
            { num: "01", title: "Approche sur mesure", desc: "Chaque mission est unique. Nous concevons des solutions personnalisées qui s'intègrent à votre environnement." },
            { num: "02", title: "Résultats mesurables", desc: "Nous définissons des indicateurs de performance clairs et assurons un suivi rigoureux des résultats." },
            { num: "03", title: "Accompagnement continu", desc: "Notre engagement ne s'arrête pas à la livraison. Nous assurons un suivi post-déploiement." },
            { num: "04", title: "Transfert de compétences", desc: "Nous formons vos équipes pour qu'elles puissent maintenir et faire évoluer les solutions." },
          ].map((item) => (
            <div key={item.num} style={{ display: "flex", gap: "24px" }}>
              <span style={{ fontSize: "48px", fontWeight: 200, color: "#e4e4e7", lineHeight: 1 }}>{item.num}</span>
              <div>
                <h3 style={{ fontSize: "18px", fontWeight: 500, color: "#18181b", marginBottom: "12px" }}>{item.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#71717a" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quality with image */}
      <section style={{ padding: "64px 0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "center" }}>
          <div
            style={{
              height: "350px",
              backgroundImage: "url(https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=800&q=80)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div>
            <p style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: "#a1a1aa", marginBottom: "16px" }}>
              Engagement qualité
            </p>
            <h2 style={{ fontSize: "28px", fontWeight: 300, color: "#18181b", marginBottom: "24px", lineHeight: 1.4 }}>
              La satisfaction client au cœur de notre démarche
            </h2>
            <p style={{ fontSize: "15px", lineHeight: 1.8, color: "#71717a" }}>
              La qualité de nos livrables et la satisfaction de nos clients sont notre priorité. Nous nous engageons sur des résultats concrets et maintenons une communication transparente.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}
