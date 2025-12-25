'use client';

import Link from "next/link";
import HomeAnnouncementModal from "@/components/HomeAnnouncementModal";
import { useEffect, useRef, useState } from "react";

export default function Page() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  // Beim Laden: Autoplay sicherstellen und Lautstärke vorbereiten
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    v.volume = 0.1;   // 10% (wird relevant, sobald unmuted)
    v.muted = true;   // Autoplay-Policy
    v.play().catch(() => {}); // falls Browser zickt
  }, []);

  const toggleMute = async () => {
    const v = videoRef.current;
    if (!v) return;

    // Wenn wir von mute -> unmute gehen: immer 10%
    const nextMuted = !isMuted;

    v.volume = 0.1;
    v.muted = !nextMuted ? true : false; // nextMuted=false => muted=true

    // besser lesbar:
    // v.muted = nextMuted; // wäre falsch, weil nextMuted bedeutet "User will muted?"
    // Wir setzen direkt:
    if (nextMuted === false) {
      v.muted = true;
    } else {
      v.muted = false;
      v.volume = 0.1;
    }

    // Play nochmal triggern (manche Browser brauchen das nach Interaktion)
    try { await v.play(); } catch {}

    setIsMuted(!nextMuted ? true : false); // sync state
  };

  // Kleine Korrektur: state sauber halten
  const onToggle = async () => {
    const v = videoRef.current;
    if (!v) return;

    const willUnmute = isMuted; // wenn gerade muted, dann wollen wir unmute
    if (willUnmute) {
      v.muted = false;
      v.volume = 0.05;
    } else {
      v.muted = true;
    }
    try { await v.play(); } catch {}
    setIsMuted(!willUnmute);
  };

  return (
    <>
      <HomeAnnouncementModal />

      <section className="relative">
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={videoRef}
            className="h-[60vh] w-full object-cover object-center"
            autoPlay
            loop
            muted   // start muted => autoplay klappt
            playsInline
            poster="/images/hero-poster.jpg"
          >
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>

          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />

          {/* 🔊 Mute/Unmute Button (oben rechts im Hero) */}
          <button
            type="button"
            onClick={onToggle}
            className="absolute right-4 top-4 z-20 btn btn-outline"
          >
            {isMuted ? "🔇 Ton an" : "🔊 Ton aus"}
          </button>
        </div>

        <div className="container-main relative h-[60vh] flex items-end pb-10">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight" style={{fontFamily: "var(--font-blackops)"}}>
              DPRW
            </h1>
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
