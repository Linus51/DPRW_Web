export default function Footer() {
  return (
    <footer className="mt-20 border-t border-neutral-800">
      <div className="container-main py-10 text-sm text-neutral-400 flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} DPRW — Realistische Bodenschlachten</p>
        <div className="flex gap-5">
          <a href="/impressum">Impressum</a>
          <a href="/datenschutz">Datenschutz</a>
        </div>
      </div>
    </footer>
  );
}
