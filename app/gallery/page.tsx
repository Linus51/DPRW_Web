export default function Page() {
  const items = Array.from({ length: 9 }).map((_, i) => `/images/shot-${i+1}.jpg`);
  return (
    <section className="section">
      <div className="container-main">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Galerie</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((src) => (
            <div key={src} className="relative aspect-video overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/50">
              <img src={src} alt="" className="h-full w-full object-cover opacity-80" />
            </div>
          ))}
        </div>
        <p className="text-sm text-neutral-400 mt-4">Lege eigene Screenshots in <code>/public/images/shot-*.jpg</code> ab.</p>
      </div>
    </section>
  );
}
