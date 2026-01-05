"use client";

import Image from "next/image";
import type React from "react";
import { useCallback, useMemo, useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import type { Cabana } from "@/data/cabanas";

const FALLBACK_IMG = "/img/placeholder.jpg";

type Props = {
  cabana: Cabana;
};

export function CabanaDetailClient({ cabana }: Props) {
  const [entrada, setEntrada] = useState("");
  const [salida, setSalida] = useState("");
  const [personas, setPersonas] = useState("");

  const fechaError =
    entrada && salida && new Date(salida) < new Date(entrada)
      ? "La fecha de salida debe ser posterior a la de entrada."
      : "";

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    e.currentTarget.src = FALLBACK_IMG;
  };

  const photos =
    cabana.fotos?.length && cabana.fotos.length > 0
      ? cabana.fotos.map((src) => src || FALLBACK_IMG)
      : [FALLBACK_IMG];

  const [primary, secondary, tertiary] = [
    photos[0] ?? FALLBACK_IMG,
    photos[1] ?? FALLBACK_IMG,
    photos[2] ?? FALLBACK_IMG,
  ];
  const remaining = photos.slice(3);

  const whatsappHref = useMemo(
    () =>
      buildWhatsAppLink({
        nombre: cabana.nombre,
        ubicacion: cabana.ubicacion,
        entrada,
        salida,
        personas,
      }),
    [cabana.nombre, cabana.ubicacion, entrada, personas, salida],
  );

  const handleWhatsAppClick = useCallback(() => {
    if (fechaError) return;
    window.open(whatsappHref, "_blank");
  }, [fechaError, whatsappHref]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <div className="mb-8 space-y-2">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">
          {cabana.nombre}
        </h1>
        <p className="text-slate-600">
          {cabana.capacidad} · {cabana.ubicacion}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[2fr_1fr]">
        <div className="space-y-8">
          <div className="grid gap-4 md:grid-cols-3">
            <div className="relative h-[320px] overflow-hidden rounded-xl bg-neutral-200 md:col-span-2 md:h-[360px]">
              <Image
                src={primary}
                alt={`Foto principal de ${cabana.nombre}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 66vw, (min-width: 768px) 60vw, 100vw"
                priority
                onError={handleImageError}
              />
            </div>
            <div className="grid gap-4">
              <div className="relative h-[150px] overflow-hidden rounded-xl bg-neutral-200 md:h-[172px]">
                <Image
                  src={secondary}
                  alt={`Foto secundaria de ${cabana.nombre}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 34vw, (min-width: 768px) 40vw, 100vw"
                  onError={handleImageError}
                />
              </div>
              <div className="relative h-[150px] overflow-hidden rounded-xl bg-neutral-200 md:h-[172px]">
                <Image
                  src={tertiary}
                  alt={`Foto secundaria de ${cabana.nombre}`}
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 34vw, (min-width: 768px) 40vw, 100vw"
                  onError={handleImageError}
                />
              </div>
            </div>
          </div>
          {remaining.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {remaining.map((photo, idx) => (
                <div
                  key={`${photo}-${idx}`}
                  className="relative h-32 overflow-hidden rounded-xl bg-neutral-200 sm:h-36"
                >
                  <Image
                    src={photo || FALLBACK_IMG}
                    alt={`Vista de ${cabana.nombre} ${idx + 4}`}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, 50vw"
                    onError={handleImageError}
                  />
                </div>
              ))}
            </div>
          )}

          <div className="space-y-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">
                Descripción
              </h2>
              <p className="text-slate-700">
                {cabana.descripcionCorta || "Descripción próximamente."}
              </p>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">
                Amenidades
              </h2>
              {cabana.amenidades?.length ? (
                <ul className="space-y-2 text-sm text-slate-700">
                  {cabana.amenidades.map((amenidad) => (
                    <li
                      key={amenidad}
                      className="flex gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                    >
                      <span>{amenidad}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-600">
                  Amenidades próximamente.
                </p>
              )}
            </div>

            <div className="space-y-2">
              <h2 className="text-xl font-semibold text-slate-900">
                Incluye durante tu estancia
              </h2>
              {cabana.incluye?.length ? (
                <ul className="space-y-2 text-sm text-slate-700">
                  {cabana.incluye.map((item) => (
                    <li
                      key={item}
                      className="flex gap-2 rounded-lg border border-slate-100 bg-slate-50 px-3 py-2"
                    >
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-slate-600">
                  Incluye próximamente.
                </p>
              )}
            </div>
          </div>
        </div>

        <aside className="rounded-xl border border-slate-200 bg-white p-5 shadow-sm lg:sticky lg:top-24">
          <p className="text-lg font-semibold text-slate-900">
            {cabana.precio}
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Cotiza fechas y número de personas. Respuesta rápida por WhatsApp.
          </p>
          <div className="mt-4 space-y-3">
            <label className="block text-sm font-medium text-slate-900">
              Entrada
              <input
                type="date"
                value={entrada}
                onChange={(e) => setEntrada(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-inner shadow-slate-100 focus:border-slate-400 focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-slate-900">
              Salida
              <input
                type="date"
                value={salida}
                onChange={(e) => setSalida(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-inner shadow-slate-100 focus:border-slate-400 focus:outline-none"
              />
            </label>
            <label className="block text-sm font-medium text-slate-900">
              Personas
              <input
                type="number"
                min={1}
                value={personas}
                onChange={(e) => setPersonas(e.target.value)}
                className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm text-slate-900 shadow-inner shadow-slate-100 focus:border-slate-400 focus:outline-none"
              />
            </label>
            {fechaError && (
              <p className="text-sm text-red-600">{fechaError}</p>
            )}
          </div>
          <button
            type="button"
            onClick={handleWhatsAppClick}
            className={`mt-4 inline-flex w-full items-center justify-center rounded-full bg-green-500 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-green-500/30 ${fechaError ? "cursor-not-allowed opacity-60" : ""}`}
            aria-disabled={Boolean(fechaError)}
            disabled={Boolean(fechaError)}
          >
            Cotizar por WhatsApp
          </button>
        </aside>
      </div>
    </section>
  );
}
