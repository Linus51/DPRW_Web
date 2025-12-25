"use client";

import { useEffect, useState } from "react";

export default function HomeAnnouncementModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // jedes Mal wenn man die Startseite betritt -> Popup auf
    setOpen(true);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center p-4">
      {/* Overlay */}
      <button
        aria-label="Schließen"
        onClick={() => setOpen(false)}
        className="absolute inset-0 bg-black/70"
      />

      {/* Modal */}
      <div className="relative w-full max-w-lg card p-6">
        <h3
          className="text-2xl font-bold"
          style={{ fontFamily: "var(--font-blackops)" }}
        >
          Mitteilung
        </h3>

        <p className="mt-3 text-neutral-300">
          📌 Willkommen bei DPRW! Bitte tritt unserem Discord bei, um Einsätze,
          Regeln und Updates zu sehen.
        </p>
        <p className="text-red-500 text-lg font-bold">Webseite im Aufbau!
        </p>

        <div className="mt-6 flex gap-3 justify-end">
          <a href="/discord" className="btn btn-primary">
            Discord öffnen
          </a>
          <button onClick={() => setOpen(false)} className="btn btn-outline">
            Schließen
          </button>
        </div>
      </div>
    </div>
  );
}
