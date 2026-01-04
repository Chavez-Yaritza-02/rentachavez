"use client";

import Image from "next/image";
import Link from "next/link";

type CabanaCardProps = {
  slug: string;
  nombre: string;
  capacidad: string;
  ubicacion: string;
  precio: string;
  imageSrc?: string;
};

const FALLBACK_IMG = "/img/placeholder.jpg";

export function CabanaCard({
  slug,
  nombre,
  capacidad,
  ubicacion,
  precio,
  imageSrc,
}: CabanaCardProps) {
  const src = imageSrc || FALLBACK_IMG;

  return (
    <Link
      href={`/cabanas/${slug}`}
      className="group block overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
    >
      <div className="relative h-36 w-full overflow-hidden bg-neutral-200 sm:h-40">
        <Image
          src={src}
          alt={`Foto de ${nombre}`}
          fill
          className="object-cover"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 45vw, 100vw"
          priority={false}
          onError={(e) => {
            e.currentTarget.src = "/img/placeholder.jpg";
          }}
        />
      </div>
      <div className="space-y-1.5 p-4">
        <h2 className="text-base font-semibold text-slate-900 sm:text-lg">
          {nombre}
        </h2>
        <p className="text-xs text-slate-600 sm:text-sm">
          {capacidad} · {ubicacion}
        </p>
        <p className="text-sm font-semibold text-slate-900">{precio}</p>
      </div>
    </Link>
  );
}
