import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CabanaDetailClient } from "../cabanas/[slug]/CabanaDetailClient";
import { cabanas } from "@/data/cabanas";

const SLUG = "apolo";
const FALLBACK_IMG = "/img/placeholder.jpg";

const cabanaApolo = cabanas.find((cabana) => cabana.slug === SLUG);

const descriptionRaw = cabanaApolo
  ? `${cabanaApolo.capacidad} · ${cabanaApolo.ubicacion}. ${cabanaApolo.descripcion}`
  : "";

const description =
  descriptionRaw.length > 160
    ? `${descriptionRaw.slice(0, 157)}...`
    : descriptionRaw;

const heroImage =
  (cabanaApolo?.fotos?.length && cabanaApolo.fotos[0]) || FALLBACK_IMG;

export const metadata: Metadata = cabanaApolo
  ? {
      title: `${cabanaApolo.nombre} | Cabañas`,
      description,
      openGraph: {
        title: `${cabanaApolo.nombre} | Cabañas`,
        description,
        images: [heroImage],
      },
      twitter: {
        card: "summary_large_image",
        title: `${cabanaApolo.nombre} | Cabañas`,
        description,
        images: [heroImage],
      },
    }
  : {
      title: "Cabaña Apolo | Cabañas",
    };

export default function ApoloPage() {
  if (!cabanaApolo) return notFound();

  return <CabanaDetailClient cabana={cabanaApolo} />;
}
