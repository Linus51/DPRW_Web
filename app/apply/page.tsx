'use client';
import { useState } from "react";

export default function Page() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/apply", { method: "POST", body: fd });
    if (res.ok) setStatus("Danke! Deine Bewerbung wurde übermittelt.");
    else setStatus("Fehler beim Senden. Bitte versuche es erneut.");
  }

  return (
    <section className="section">
      <div className="container-main max-w-2xl">
        <h2 className="text-3xl font-bold mb-6" style={{fontFamily: "var(--font-blackops)"}}>Beitritt / Bewerbung</h2>
        <form onSubmit={onSubmit} className="card p-6 space-y-4">
          <div>
            <label className="block text-sm mb-1">Name / Callsign</label>
            <input name="name" required className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2" />
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm mb-1">Alter</label>
              <input name="age" type="number" min={13} className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm mb-1">Discord-Tag</label>
              <input name="discord" placeholder="name#1234" className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-1">Spielstil / Rolle</label>
            <input name="role" placeholder="z.B. Panzerführer, Aufklärer, Artillerie..." className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2" />
          </div>
          <div>
            <label className="block text-sm mb-1">Motivation</label>
            <textarea name="motivation" rows={4} className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2" />
          </div>
          <button className="btn btn-primary" type="submit">Bewerbung senden</button>
          {status && <p className="text-sm text-neutral-300">{status}</p>}
          <p className="text-xs text-neutral-500">Hinweis: Diese Demo sendet an eine lokale API-Route. Produktion: Verbindung zu Discord/Webhook möglich.</p>
        </form>
      </div>
    </section>
  );
}
