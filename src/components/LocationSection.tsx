export function LocationSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 pb-12 sm:px-6">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-2xl font-bold tracking-tight">
            Ubicación y confianza
          </h2>
          <p className="mt-3 text-sm text-slate-700">
            Placeholder para mapas, referencias y puntos de interés. Destaca la
            cercanía a Mazamitla, seguridad de la zona y acceso sencillo.
          </p>
          <ul className="mt-4 space-y-2 text-sm text-slate-700">
            <li>• Check-in asistido y soporte 24/7.</li>
            <li>• Estacionamiento en sitio y accesos claros.</li>
            <li>• Limpieza profesional antes de cada estancia.</li>
          </ul>
        </div>

        <div className="flex flex-col justify-center rounded-2xl bg-slate-900 px-6 py-8 text-white shadow-lg">
          <h3 className="text-xl font-semibold">
            ¿Listo para reservar?
          </h3>
          <p className="mt-3 text-sm text-white/80">
            Escríbenos y armamos tu cotización al instante.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="/cabanas"
              className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold uppercase tracking-tight text-slate-900 shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-black/30"
            >
              Ver cabañas
            </a>
            <a
              href="https://wa.me/52XXXXXXXXXX"
              className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold uppercase tracking-tight text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:border-white hover:shadow-2xl hover:shadow-black/25"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
