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

export function buildWhatsAppLink({
  nombre,
  ubicacion,
  entrada,
  salida,
  personas,
}: {
  nombre: string;
  ubicacion?: string;
  entrada: string;
  salida: string;
  personas: string;
}) {
  const mensaje = `
Hola 👋
Me gustaría cotizar la siguiente cabaña:

🏡 Cabaña: ${nombre}
📍 Ubicación: ${ubicacion || "Mazamitla, Jalisco"}

📅 Entrada: ${entrada}
📅 Salida: ${salida}
👥 Personas: ${personas}

  Gracias 😊
  `.trim();

  const telefono = "5213312726618";
  return `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
}
