import Link from "next/link";

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:h-18 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Cabañas Chávez
        </Link>
        <nav className="flex items-center gap-5 text-sm font-semibold text-slate-700">
          <Link
            href="/cabanas"
            className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
          >
            Cabañas
          </Link>
          <a
            href="#contacto"
            className="rounded-full px-3 py-2 transition hover:bg-slate-100 hover:text-slate-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-300"
          >
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
}
