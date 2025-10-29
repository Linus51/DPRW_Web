export default function Page() {
  return (
    <section className="section">
      <div className="container-main max-w-2xl">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Kontakt</h2>
        <div className="card p-6 space-y-3">
          <p>Bevorzugt via Discord.</p>
          <a className="btn btn-primary" href="/discord">Zum Discord</a>
        </div>
      </div>
    </section>
  );
}
