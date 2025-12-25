export default function Page() {
  return (
    <section className="section">
      <div className="container-main">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Datenschutz</h2>
        <p className="text-neutral-300">Stand: 29.10.2025</p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">1. Verantwortlicher</h2>
          <p>
            Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
            <strong>Linus Knoch</strong><br />
            Zum Kleinbahnhof 2, 99090 Erfurt, Deutschland<br />
            E-Mail: folgt
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">2. Zugriffsdaten</h2>
          <p>
            Beim Aufrufen der Website werden durch den Browser automatisch
            Informationen an den Server gesendet (z.&nbsp;B. IP-Adresse, Datum,
            Referrer, Browser). Diese Daten werden für den sicheren Betrieb der
            Seite benötigt (Art. 6 Abs. 1 lit. f DSGVO).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">3. Cookies</h2>
          <p>
            Diese Website kann Cookies oder ähnliche Technologien verwenden.
            Soweit erforderlich, geschieht dies auf Grundlage Ihrer Einwilligung
            (Art. 6 Abs. 1 lit. a DSGVO).
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">4. Kontaktformular</h2>
          <p>
            Wenn Sie das Kontaktformular nutzen, werden Ihre Angaben zur
            Bearbeitung Ihrer Anfrage verarbeitet (Art. 6 Abs. 1 lit. b DSGVO).
            Ggf. werden die Daten über den Dienstleister (z. B. Formspree)
            verarbeitet.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">5. Eingebetteter Twitch-Player</h2>
          <p>
            Auf dieser Website ist ein Twitch-Player eingebettet. Beim Laden des
            Players können personenbezogene Daten (z.&nbsp;B. IP-Adresse) an
            Twitch Interactive, Inc. übermittelt werden. Details siehe
            Datenschutzerklärung von Twitch.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">6. Rechte der Betroffenen</h2>
          <ul className="list-disc list-inside text-white/80">
            <li>Auskunft (Art. 15 DSGVO)</li>
            <li>Berichtigung (Art. 16 DSGVO)</li>
            <li>Löschung (Art. 17 DSGVO)</li>
            <li>Widerspruch (Art. 21 DSGVO)</li>
            <li>Datenübertragbarkeit (Art. 20 DSGVO)</li>
          </ul>
        </section>
      </div>
    </section>
  );
}
