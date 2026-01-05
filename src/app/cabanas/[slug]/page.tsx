import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CabanaDetailClient } from "./CabanaDetailClient";
import { cabanas } from "@/data/cabanas";

const FALLBACK_IMG = "/img/placeholder.jpg";

export const dynamicParams = true;
export const revalidate = 0;

export default async function CabanaDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const cabana = cabanas.find((c) => c.slug === slug);

  if (!cabana) {
    return notFound();
  }

  return <CabanaDetailClient cabana={cabana} />;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const cabana = cabanas.find((c) => c.slug === slug);

  const title = cabana?.nombre ?? "Cabaña";
  const description =
    cabana?.descripcionCorta ?? "Renta de cabañas en Mazamitla, Jalisco.";
  const fotoPrincipal = cabana?.fotos?.[0] ?? FALLBACK_IMG;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [fotoPrincipal],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [fotoPrincipal],
    },
  };
}
