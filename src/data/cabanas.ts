import fs from "node:fs";
import path from "node:path";

export type Cabana = {
  slug: string;
  nombre: string;
  capacidad: string;
  ubicacion: string;
  precio: string;
  descripcion: string;
  amenidades: string[];
  descripcionCorta?: string;
  incluye?: string[];
  fotos: string[];
};

const defaultAmenidades = [
  "Chimenea",
  "Cocina equipada",
  "Estancia acogedora",
  "Estacionamiento en sitio",
];

const defaultDescripcion = "Descripción pendiente. Contáctanos para más detalles.";
const defaultUbicacion = "Mazamitla, Jalisco";
const defaultPrecio = "Cotiza por WhatsApp";

const validExtensions = new Set([".jpg", ".jpeg", ".png"]);

const fotos = (slug: string) => {
  try {
    const dir = path.join(process.cwd(), "public", "img", slug);
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    const collator = new Intl.Collator(undefined, {
      numeric: true,
      sensitivity: "base",
    });

    return entries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => validExtensions.has(path.extname(name).toLowerCase()))
      .sort((a, b) => collator.compare(a, b))
      .map((name) => `/img/${slug}/${name}`);
  } catch {
    return [];
  }
};

const placeholderFotos = Array.from(
  { length: 10 },
  () => "/img/placeholder.jpg",
);

export const cabanas: Cabana[] = [
  {
    slug: "apolo",
    nombre: "Cabaña Apolo",
    capacidad: "12",
    ubicacion: "Mazamitla, Jalisco",
    precio: defaultPrecio,
    descripcion: `
Nuestra cabaña está equipada para que disfruten una estancia cómoda, cálida y divertida.

🛏 4 habitaciones
2 habitaciones con 2 camas matrimoniales
2 habitaciones con 1 cama matrimonial

🏠 3 habitaciones en planta alta y 1 en planta baja

🚿 2 baños completos
🍳 Cocina equipada
🛋 Sala
🔥 Chimenea
🍽 Comedor
🌄 Terraza con barra
🎱 Mesa de billar
🔊 Bocina Bluetooth
🌿 Jardín
🚗 Estacionamiento
📶 WIFI Starlink
🏞 Balcón con sala exterior y vista arbolada
🏐 Malla de voleibol y balón
💧 Agua caliente 24/7

🧴 Incluye durante su estancia:
🔥 Una carga de leña
💧 Un galón de agua (4L)
🛁 4 toallas grandes + 2 de mano
🎲 Juegos de mesa y para niños
🧼 Jabón para manos
🍽 Jabón para trastes
`,
    descripcionCorta:
      "Nuestra cabaña está equipada para que disfruten una estancia cómoda, cálida y divertida.",
    amenidades: [
      "🛏 4 habitaciones",
      "2 habitaciones con 2 camas matrimoniales cada una",
      "2 habitaciones con 1 cama matrimonial cada una",
      "🏠 3 habitaciones en planta alta, 1 en planta baja",
      "🚿 2 baños completos (1 planta alta, 1 planta baja)",
      "🍳 Cocina equipada",
      "🛋 Sala",
      "🔥 Chimenea",
      "🍽 Comedor",
      "🌄 Terraza con barra",
      "🎱 Mesa de billar",
      "🔊 Bocina Bluetooth",
      "🌿 Jardín",
      "🚗 Estacionamiento",
      "📶 WIFI STARLINK",
      "🏞 Balcón con sala exterior y vista arbolada",
      "🏐 Malla de voleibol y balón",
      "💧 Agua caliente 24/7",
    ],
    incluye: [
      "🔥 Una carga de leña",
      "💧 Un galón de 4 litros de agua",
      "🛁 4 toallas grandes + 2 toallas de mano",
      "🎲 Juegos de mesa y para niños (sube y baja, resbaladilla y columpios)",
      "🧼 Jabón para manos",
      "🍽 Jabón para trastes",
    ],
    fotos: [
      "/img/apolo/1.jpg",
      "/img/apolo/2.jpg",
      "/img/apolo/3.jpg",
      "/img/apolo/4.jpg",
      "/img/apolo/5.jpg",
      "/img/apolo/6.jpg",
      "/img/apolo/7.jpg",
      "/img/apolo/8.jpg",
      "/img/apolo/9.jpg",
    ],
  },
  {
    slug: "duplex",
    nombre: "Cabaña Duplex",
    capacidad: "Hasta 20 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("duplex"),
  },
  {
    slug: "cabania-luna",
    nombre: "Cabaña Luna",
    capacidad: "Hasta 6 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("cabania-luna"),
  },
  {
    slug: "cabania-suite",
    nombre: "Cabaña Suite",
    capacidad: "Hasta 2 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("cabania-suite"),
  },
  {
    slug: "cabania-gemela",
    nombre: "Cabaña Gemela",
    capacidad: "Hasta 22 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("cabania-gemela"),
  },
  {
    slug: "cabania-rio-de-la-montana",
    nombre: "Cabaña Río de la Montaña",
    capacidad: "Hasta 10 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: [
      "👨‍👩‍👧‍👦 Capacidad para 10 personas",
      "🛏️ 3 habitaciones",
      "🛌 5 camas matrimoniales",
      "🚿 1 baño completo",
      "🚽 1 medio baño",
      "🍳 Cocina equipada",
      "🛋️ Sala de estar",
      "📺 Smart TV",
      "🌲 Jardín amplio",
      "⛩️ 2 terrazas (frontal y trasera)",
      "🍖 Asador",
      "🔥 Fogatera",
      "🔥 Chimenea interior",
      "🪑 Hamaca",
      "🎯 Futbolito",
      "🚗 Estacionamiento privado",
      "🐶 Pet friendly",
      "💧 Galón de agua incluido",
      "🪵 Carga de leña incluida",
    ],
    fotos: fotos("cabania-rio-de-la-montana"),
  },
  {
    slug: "cabania-joel",
    nombre: "Cabaña Joel",
    capacidad: "Hasta 6 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("cabania-joel"),
  },
  {
    slug: "cabania-loma-alta",
    nombre: "Cabaña Loma Alta",
    capacidad: "Hasta 12 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion:
      "Cabaña Loma Alta es el punto de encuentro para familias y amigos que buscan relajarse y convivir. Amplia, cálida y con vistas arboladas, tiene espacios para cocinar juntos, ver pelis o prender el fogatero bajo el cielo estrellado.",
    amenidades: [
      "🛏️ 4 habitaciones",
      "🛌 4 camas matrimoniales",
      "🛏️ 3 camas individuales",
      "🛋️ 1 sofá cama",
      "🏠 2 habitaciones en planta alta, 2 en planta baja",
      "🚿 2 baños completos",
      "🍳 Cocina equipada",
      "🛋️ Sala",
      "📺 TV y WiFi",
      "🍽️ Comedor",
      "🌿 Terraza",
      "🍖 Asador",
      "🪑 Bancas",
      "🎲 Juegos de mesa",
      "🔥 Fogatero",
      "☄️ Columpios",
      "🚗 Estacionamiento privado",
    ],
    fotos: fotos("cabania-loma-alta"),
  },
  {
    slug: "dos-pinos-12",
    nombre: "Cabaña Dos Pinos",
    capacidad: "Hasta 12 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("dos-pinos-12"),
  },
  {
    slug: "cabania-azteca-1",
    nombre: "Cabaña Azteca 1",
    capacidad: "Hasta 10 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("cabania-azteca-1"),
  },
  {
    slug: "cabania-el-potrillo",
    nombre: "Cabaña El Potrillo",
    capacidad: "Hasta 5 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("cabania-el-potrillo"),
  },
  {
    slug: "cabania-lindo-amanecer",
    nombre: "Cabaña Lindo Amanecer",
    capacidad: "Hasta 8 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("cabania-lindo-amanecer"),
  },
  {
    slug: "cabania-los-carnales-2",
    nombre: "Cabaña Los Carnales 2",
    capacidad: "Hasta 6 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("cabania-los-carnales-2"),
  },
  {
    slug: "cabania-los-carnales-1",
    nombre: "Cabaña Los Carnales 1",
    capacidad: "Hasta 12 personas",
    ubicacion: defaultUbicacion,
    precio: defaultPrecio,
    descripcion: defaultDescripcion,
    amenidades: defaultAmenidades,
    fotos: fotos("cabania-los-carnales-1"),
  },
];
