export const metadata = {
  title: "Karriere | DPRW",
  description: "Bewerbung auf offene Stellen bei DPRW.",
};

export default function KarrierePage() {
  return (
    <main style={{ maxWidth: 900, margin: "0 auto", padding: "2rem 1rem" }}>
      <h1>Karriere bei DPRW</h1>

      <p>
        Arbeiten bei DPRW bedeutet Verantwortung, Professionalität und Teamgeist.
        Wir freuen uns über engagierte Bewerberinnen und Bewerber.
      </p>

      <section style={{ marginTop: "2rem" }}>
        <h2>Offene Stellen</h2>
        <ul>
          <li>Derzeit keine ausgeschriebenen Stellen – Initiativbewerbungen sind willkommen.</li>
          {/* Wenn du konkrete Stellen hast:
          <li>Sicherheitsmitarbeiter (m/w/d)</li>
          <li>Objektleiter (m/w/d)</li>
          */}
        </ul>
      </section>

      <section style={{ marginTop: "2rem" }}>
        <h2>Initiativbewerbung</h2>
        <p>
          Du hast lust mit uns zu Arbeiten, dann schreibe uns per Discord (E-Mail derzeit nicht Verfügbar!).
        </p>

        <p>
          E-Mail:{" "}
          <a href="mailto:bewerbung@dprw.de">bewerbung@dprw.de</a>
          {" "} <span style={{ opacity: 0.7 }}>(Adresse ggf. anpassen)</span>
        </p>
      </section>


    </main>
  );
}