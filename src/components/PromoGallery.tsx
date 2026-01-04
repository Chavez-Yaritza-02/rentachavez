import Image from "next/image";

type PromoItem = {
  src: string;
  alt: string;
  title: string;
  description: string;
};

const items: PromoItem[] = [
  {
    src: "/img/promo-1.jpg",
    alt: "Fogata frente a la cabaña",
    title: "Escapada de fin de semana",
    description: "Pack de 2 noches con chimenea lista y horario extendido.",
  },
  {
    src: "/img/promo-2.jpg",
    alt: "Bosque y cabañas",
    title: "Experiencia bosque",
    description: "Muestra tus vistas, recorridos y momentos de temporada.",
  },
  {
    src: "/img/promo-3.jpg",
    alt: "Mesa con desayuno campestre",
    title: "Temporada de lluvias",
    description: "Promoción con desayunos locales y early check-in.",
  },
];

export function PromoGallery() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Promos y campañas visuales
          </h2>
          <p className="text-sm text-slate-600">
            Destaca ofertas, experiencias y temporadas con fotos y videos.
          </p>
        </div>
        <a
          href="/cabanas"
          className="text-sm font-semibold text-slate-900 underline-offset-4 hover:underline"
        >
          Ver cabañas
        </a>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <div
            key={item.title}
            className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
              <Image
                src={item.src || "/img/placeholder.jpg"}
                alt={item.alt}
                fill
                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                priority={false}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-60" />
            </div>
            <div className="space-y-1 p-4">
              <h3 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
