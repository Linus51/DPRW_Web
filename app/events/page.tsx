export default function Page() {
  const events = [
    { date: "-", title: "-", desc: "-" },

  ];
  return (
    <section className="section">
      <div className="container-main">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Einsätze & Termine</h2>
        <p className="text-neutral-300 mb-8">Hier folgen Events der DPRW!</p>
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
