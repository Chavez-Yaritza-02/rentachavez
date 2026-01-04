import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { CabanaDetailClient } from "./CabanaDetailClient";
import { cabanas } from "@/data/cabanas";

type PageProps = {
  params: { slug: string };
};

const FALLBACK_IMG = "/img/placeholder.jpg";

const getCabanaBySlug = (slug: string) =>
  cabanas.find((cabana) => cabana.slug === slug);

export const dynamicParams = true;
export const revalidate = 0;

export function generateMetadata({ params }: PageProps): Metadata {
  const cabana = getCabanaBySlug(params.slug);

  if (!cabana) {
    return {
      title: "Cabaña no encontrada | Cabañas",
      description: "La cabaña solicitada no existe.",
    };
  }

  const descRaw = `${cabana.capacidad} · ${cabana.ubicacion}. ${cabana.descripcion}`;
  const description =
    descRaw.length > 160 ? `${descRaw.slice(0, 157)}...` : descRaw;
  const photo = cabana.fotos?.[0] ?? FALLBACK_IMG;

  return {
    title: `${cabana.nombre} | Cabañas`,
    description,
    openGraph: {
      title: `${cabana.nombre} | Cabañas`,
      description,
      images: [photo],
    },
    twitter: {
      card: "summary_large_image",
      title: `${cabana.nombre} | Cabañas`,
      description,
      images: [photo],
    },
  };
}

export default function CabanaDetailPage({ params }: PageProps) {
  const cabana = getCabanaBySlug(params.slug);

  if (!cabana) return notFound();

  return <CabanaDetailClient cabana={cabana} />;
}

export function generateStaticParams() {
  return cabanas.map((cabana) => ({ slug: cabana.slug }));
}
