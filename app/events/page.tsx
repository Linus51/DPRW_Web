export default function Page() {
  const events = [
    { date: "2025-11-02 20:00", title: "Training – Stadtgefechte", desc: "Urbanes Manöver, 60 Min." },
    { date: "2025-11-09 19:30", title: "Einsatz – Operation Eisenpfad", desc: "Koordiniertes Vorgehen, 90 Min." },
    { date: "2025-11-16 20:00", title: "Scharfschießen & Aufklärung", desc: "Rollenübungen, 75 Min." },
  ];
  return (
    <section className="section">
      <div className="container-main">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Einsätze & Termine</h2>
        <div className="space-y-4">
          {events.map((e) => (
            <div key={e.title} className="card p-6 flex items-start justify-between">
              <div>
                <h3 className="text-xl font-semibold">{e.title}</h3>
                <p className="text-neutral-300">{e.desc}</p>
              </div>
              <div className="text-sand whitespace-nowrap">{e.date}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
