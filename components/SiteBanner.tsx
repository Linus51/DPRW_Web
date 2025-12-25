export default function SiteBanner() {
  // Text hier anpassen:
  const text = "📣 Hinweis: Nächster Einsatz am Sonntag 20:00 Uhr – Details im Discord.";

  return (
    <div className="border-b border-neutral-800 bg-neutral-900/60">
      <div className="container-main py-2 text-sm text-neutral-200 flex items-center justify-between gap-3">
        <span className="truncate">{text}</span>
        <a href="/discord" className="text-sand whitespace-nowrap">
          Zum Discord →
        </a>
      </div>
    </div>
  );
}
