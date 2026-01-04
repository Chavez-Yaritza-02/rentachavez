type Params = {
  phoneE164: string;
  nombre: string;
  entrada?: string;
  salida?: string;
  personas?: string | number;
};

const fallback = "____";

export function buildWaLink({
  phoneE164,
  nombre,
  entrada,
  salida,
  personas,
}: Params): string {
  const text = `Hola! Quiero cotizar ${nombre || fallback}. Entrada: ${
    entrada || fallback
  }. Salida: ${salida || fallback}. Personas: ${
    personas ? String(personas) : fallback
  }.`;

  return `https://wa.me/${phoneE164}?text=${encodeURIComponent(text)}`;
}
