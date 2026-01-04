import { CabanaCard } from "@/components/CabanaCard";
import { cabanas } from "@/data/cabanas";

export default function CabanasPage() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
      <header className="mb-10 text-center sm:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          Cabañas
        </h1>
        <p className="mt-2 text-sm text-slate-600">
          Elige tu estancia ideal. Respuesta rápida por WhatsApp, sin compromiso.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cabanas.map((cabana) => (
          <CabanaCard
            key={cabana.slug}
            slug={cabana.slug}
            nombre={cabana.nombre}
            capacidad={cabana.capacidad}
            ubicacion={cabana.ubicacion}
            precio={cabana.precio}
            imageSrc={cabana.fotos?.[0]}
          />
        ))}
      </div>
    </section>
  );
}
