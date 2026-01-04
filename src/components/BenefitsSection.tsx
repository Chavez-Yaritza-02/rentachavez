const benefits = [
  {
    title: "Atención personalizada",
    desc: "Coordinamos tu llegada, recomendaciones y apoyo durante toda tu estancia.",
  },
  {
    title: "Ubicaciones únicas",
    desc: "Cabañas rodeadas de bosque, con vistas y cercanía a actividades locales.",
  },
  {
    title: "Confort garantizado",
    desc: "Camas cómodas, chimenea y amenidades listas para descansar en serio.",
  },
  {
    title: "Check-in flexible",
    desc: "Opciones de early check-in y late check-out según disponibilidad.",
  },
];

export function BenefitsSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold tracking-tight">Beneficios</h2>
        <p className="text-sm text-slate-600">
          Un servicio pensado para que disfrutes sin preocupaciones.
        </p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {benefits.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            <h3 className="text-lg font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm text-slate-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
