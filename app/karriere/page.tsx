'use client';

import { useState } from "react";
import Link from "next/link";

export default function Page() {
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const jobs = [
    {
      title: "Initiativbewerbung",
      desc: "Du möchtest uns unterstützen? Dann bewirb dich initiativ über das Formular unten.",
      badge: "Immer offen",
    },
    // Wenn ihr später echte Stellen habt, einfach ergänzen:
    // { title: "Moderator (m/w/d)", desc: "Unterstützung im Community- & Eventbereich.", badge: "Offen" },
  ];

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const fd = new FormData(e.currentTarget);
    const res = await fetch("/api/bewerbung", { method: "POST", body: fd });

    setLoading(false);

    if (res.ok) {
      setStatus("Danke! Deine Bewerbung wurde übermittelt.");
      e.currentTarget.reset();
    } else {
      const data = await res.json().catch(() => ({}));
      setStatus(data?.error ?? "Fehler beim Senden. Bitte versuche es erneut.");
    }
  }

  return (
    <section className="section">
      <div className="container-main">
        <div className="mb-8">
          <h2
            className="text-3xl font-bold mb-2"
            style={{ fontFamily: "var(--font-blackops)" }}
          >
            Karriere
          </h2>
          <p className="text-neutral-300 max-w-2xl">
            Du willst Teil der DPRW werden und mit uns etwas aufbauen? Dann sende uns eine
            Bewerbung (oder schreibe uns direkt über Discord).
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link href="/discord" className="btn btn-outline">
              Discord öffnen
            </Link>
            <Link href="/apply" className="btn btn-outline">
              Beitritt (Kampfgruppe)
            </Link>
          </div>
        </div>

        {/* Offene "Stellen" / Kacheln */}
        <div className="grid md:grid-cols-2 gap-4 mb-10">
          {jobs.map((j) => (
            <div key={j.title} className="card p-6">
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-xl font-semibold">{j.title}</h3>
                <span className="text-xs px-2 py-1 rounded-lg bg-neutral-800 text-sand whitespace-nowrap">
                  {j.badge}
                </span>
              </div>
              <p className="text-neutral-300 mt-2">{j.desc}</p>
            </div>
          ))}
        </div>

        {/* Bewerbung */}
        <div className="grid lg:grid-cols-2 gap-6 items-start">
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-2">Bewerben</h3>
            <p className="text-neutral-300 mb-5">
              Fülle das Formular aus. Wir melden uns bei dir (E-Mail muss erreichbar sein). 
            </p>
            <p className="text-red-500">Bewerbungsformular funktioniert derzeit nicht, Bitte per Discord schriben!!</p>
            <p> 
            </p>

            <form onSubmit={onSubmit} className="space-y-4">
              <div>
                <label className="block text-sm mb-1">Name / Callsign</label>
                <input
                  name="name"
                  required
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-1">E-Mail</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1">Alter</label>
                  <input
                    name="age"
                    type="number"
                    min={13}
                    className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm mb-1">Nachricht</label>
                <textarea
                  name="message"
                  rows={4}
                  className="w-full rounded-lg bg-neutral-900 border border-neutral-800 px-3 py-2"
                  placeholder="Kurz vorstellen, was du machen möchtest, Erfahrung, Verfügbarkeit, etc."
                />
              </div>

              <button className="btn btn-primary" type="submit" disabled={loading}>
                {loading ? "Senden..." : "Bewerbung senden"}
              </button>

              {status && <p className="text-sm text-neutral-300">{status}</p>}

              <p className="text-xs text-neutral-500">
                Hinweis: Deine Bewerbung wird serverseitig verarbeitet (DB / E-Mail / Discord Webhook),
                je nach Server-Konfiguration.
              </p>
            </form>
          </div>

          {/* Info-Card rechts */}
          <div className="card p-6">
            <h3 className="text-xl font-semibold mb-2">Was wir suchen</h3>
            <ul className="text-neutral-300 space-y-2 list-disc pl-5">
              <li>Zuverlässigkeit & Teamplay</li>
              <li>Aktivität (nach Möglichkeit)</li>
              <li>Kommunikation über Discord</li>
              <li>Motivation, Events/Community mitzugestalten</li>
            </ul>

            <div className="mt-6 border-t border-neutral-800 pt-5">
              <p className="text-neutral-300">
                Wenn du lieber direkt schreiben willst:
              </p>
              <Link href="/discord" className="btn btn-outline mt-3">
                Discord beitreten
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
