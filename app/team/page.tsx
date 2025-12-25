export default function Page() {
  const members = [
    { name: "Linus", role: "Leitung", bio: "Administration, Organisation & Entscheidungsfindung." },
    { name: "Offen", role: "Stelv. Leitung", bio: "Administration, Organisation & Entscheidungsfindung." },
    { name: "Offen", role: "Moderation", bio: "Chat-/Voice-Moderation, Regelüberwachung." },
    { name: "Offen", role: "Organisation & Planung", bio: "Events, Community-Aktionen." },
    { name: "Offen", role: "Ideen & Konzeptentwicklung", bio: "Struktur, Formate, Neuerungen." },
    { name: "Offen", role: "Support", bio: "Ansprechpartner für Mitgliederation." },
  ];
  return (
    <section className="section">
      <div className="container-main">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Über uns</h2>
        <p className="text-neutral-300 mb-8">DPRW steht für realistische Bodenschlachten in War Thunder. Wir setzen auf Disziplin, Teamplay und Kameradschaft — ohne toxisches Verhalten.</p>
        <div className="grid md:grid-cols-3 gap-6">
          {members.map((m) => (
            <div key={m.name} className="card p-6">
              <h3 className="text-xl font-semibold">{m.name}</h3>
              <p className="text-sand">{m.role}</p>
              <p className="text-neutral-300 mt-2">{m.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
