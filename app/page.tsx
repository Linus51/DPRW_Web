import Link from "next/link";

export default function Page() {
  return (
    <>
      <section className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <iframe className="w-[177.78vh] h-[60vh] min-w-full min-h-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          src="https://www.youtube.com/watch?v=miVz9nsMYEw&list=RDmiVz9nsMYEw&start_radio=1"
          title="Background video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
    ></iframe>
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />
        </div>
        <div className="container-main relative h-[60vh] flex items-end pb-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{fontFamily: "var(--font-blackops)"}}>DPRW</h1>
            <p className="mt-4 text-neutral-300">Realistische Bodenschlachten • Taktik • Kameradschaft</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/apply" className="btn btn-primary">Jetzt beitreten</Link>
              <Link href="/discord" className="btn btn-outline">Discord</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-main grid md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Taktik & Teamplay</h3>
            <p className="text-neutral-300">Gefechte mit Funk, Rollenverteilung und abgestimmten Manövern.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Disziplin & Fairness</h3>
            <p className="text-neutral-300">Respektvoller Umgang, klare Regeln und Spaß an der Sache.</p>
          </div>
          <div className="card p-6">
            <h3 className="text-lg font-semibold mb-2">Events & Training</h3>
            <p className="text-neutral-300">Regelmäßige Einsätze, Trainings und gemeinsame Operationen.</p>
          </div>
        </div>
      </section>
    </>
  );
}
