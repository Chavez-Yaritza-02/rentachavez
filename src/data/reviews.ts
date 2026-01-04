export type Review = {
  name: string;
  rating: number;
  message: string;
};

export const reviews: Review[] = [
  {
    name: "Ana",
    rating: 5,
    message: "Cabaña impecable, chimenea lista y anfitrión super atento.",
  },
  {
    name: "Luis",
    rating: 5,
    message: "Vistas hermosas y WiFi estable, ideal para trabajar y desconectar.",
  },
  {
    name: "María",
    rating: 4,
    message: "Llegamos tarde y nos recibieron con todo preparado. Volveremos.",
  },
  {
    name: "Jorge",
    rating: 4,
    message: "Zona segura y cercana al centro, la terraza es perfecta en la tarde.",
  },
  {
    name: "Sofía",
    rating: 5,
    message: "Dormimos súper bien, la calefacción y la limpieza estuvieron de 10.",
  },
];
