export default function Page() {
  return (
    <section className="section">
      <div className="container-main">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Impressum</h2>
        <p className="text-neutral-300">Stand: 29.10.2025</p>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>Linus Knoch</strong><br />
            Zum Kleinbahnhof 2<br />
            99090 Erfurt<br />
            Deutschland
          </p>
          <p>
            <strong>Kontakt</strong><br />
            Discord: linus51; creppe4444
            <br />
            Telefon: Auf Anfrage
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte
            verantwortlich. Nach §§ 8 bis 10 TMG sind wir jedoch nicht
            verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
            überwachen oder nach Umständen zu forschen, die auf eine
            rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Haftung für Links</h2>
          <p>
            Unser Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
            fremden Inhalte keine Gewähr übernehmen.
          </p>
        </section>

        <section className="space-y-2">
          <h2 className="text-xl font-semibold">Urheberrecht</h2>
          <p>
            Die durch die Seitenbetreiber erstellten Inhalte und Werke auf
            diesen Seiten unterliegen dem deutschen Urheberrecht.
          </p>
        </section>
      </div>
    </section>
  );
}
