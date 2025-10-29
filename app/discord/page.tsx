export default function Page() {
  return (
    <section className="section">
      <div className="container-main max-w-2xl">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Discord</h2>
        <div className="card p-6 space-y-4">
          <p>Hier kannst du unserem Discord beitreten:</p>
          <a className="btn btn-primary" href="https://discord.gg/FFxYnZsQpX" target="_blank">Discord beitreten</a>
          <p className="text-sm text-neutral-400">Wir freuen uns dich auf unsernen Discord begrüßen zu dürfen.</p>
        </div>
      </div>
    </section>
  );
}
