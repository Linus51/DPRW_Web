export default function Page() {
  return (
    <section className="section">
      <div className="container-main max-w-2xl">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Discord</h2>
        <div className="card p-6 space-y-4">
          <p>Hier kannst du unserem Discord beitreten:</p>
          <a className="btn btn-primary" href="https://discord.gg/DEIN_INVITE" target="_blank">Discord beitreten</a>
          <p className="text-sm text-neutral-400">Ersetze den Link in <code>app/discord/page.tsx</code> mit eurem echten Invite.</p>
        </div>
      </div>
    </section>
  );
}
