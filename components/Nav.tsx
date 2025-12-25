'use client';
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/", label: "Start" },
  { href: "/team", label: "Über uns" },
  { href: "/apply", label: "Beitritt" },
  { href: "/events", label: "Einsätze" },
  { href: "/gallery", label: "Galerie" },
  { href: "/karriere", label: "Karriere" },
  { href: "/contact", label: "Kontakt" },
  { href: "/discord", label: "Discord" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/95 backdrop-blur">
      <div className="container-main flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3">
          <img src="/logo-dprw.svg" alt="DPRW" className="h-9 w-9 rounded-md" />
          <span className="font-[700] tracking-widest" style={{fontFamily: "var(--font-blackops)"}}>DPRW</span>
        </Link>
        <nav className="hidden md:flex items-center gap-7">
          {links.map(l => (
            <Link key={l.href} href={l.href} className="text-sm hover:text-white relative after:absolute after:-bottom-1 after:left-0 after:h-[2px] after:w-0 after:bg-sand after:transition-[width] hover:after:w-full">
              {l.label}
            </Link>
          ))}
        </nav>
        <button aria-label="Menü" onClick={() => setOpen(v => !v)} className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-lg border border-neutral-800">≡</button>
      </div>
      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-neutral-950">
          <div className="container-main py-3 flex flex-col gap-2">
            {links.map(l => (
              <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2">
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
