import Link from "next/link";
import { getNextEvent } from "@/lib/events";

export default function SiteBanner() {
  const next = getNextEvent();
  if (!next) return null;

  return (
    <div className="border-b border-neutral-800 bg-neutral-900/60">
      <div className="container-main py-2 text-sm text-neutral-200 flex items-center justify-between gap-3">
        <span className="truncate">
          🎉 <span className="font-semibold">{next.title}</span> — {next.date}
        </span>
        <Link href="/events" className="text-sand whitespace-nowrap">
          Details →
        </Link>
      </div>
    </div>
  );
}
