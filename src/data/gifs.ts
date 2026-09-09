//export permite que main.ts importe la colección. import type comunica que Gif solo se utiliza durante la
//comprobación de tipos.

import type { Gif } from "../models/gif.interface";

const MEDIA_URL = "https://media.giphy.com/media";

export const gifs: Gif[] = [
  {
    id: "cat-01",
    title: "Gato programando",
    url: `${MEDIA_URL}/JIX9t2j0ZTN9S/giphy.gif`,
    username: "gifinder",
    tags: ["gato", "programacion", "computadora"],
    rating: "g",
  },
  {
    id: "celebration-01",
    title: "Celebracion del equipo",
    url: `${MEDIA_URL}/g9582DNuQppxC/giphy.gif`,
    tags: ["celebracion", "equipo", "trabajo"],
    rating: "g",
  },

  {
    id: "coding-01",
    title: "Código en progreso",
    url: `${MEDIA_URL}/13HgwGsXF0aiGY/giphy.gif`,
    username: "developer",
    tags: ["código", "desarrollo", "teclado"],
    rating: "pg",
  },
  {
    id: "idea-01",
    title: "Nueva idea",
    url: `${MEDIA_URL}/l0HlRnAWXxn0MhKLK/giphy.gif`,
    tags: ["idea", "creatividad", "solución"],
    rating: "g",
  },
];
