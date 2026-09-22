/** 
 * El servicio concentrará la clave, la construcción de direcciones, la solicitud, la comprobación HTTP, la conversión 
JSON y el mapeo al modelo interno. Reemplaza por completo el contenido anterior del archivo.
 */

import type { Gif, GifRating } from "../models/gif.interface";
import type {
  GiphyGif,
  GiphyResponse,
} from "../models/giphy-response.interface";
const API_BASE_URL = "https://api.giphy.com/v1/gifs";
const RESULT_LIMIT = 12;
type GiphyEndpoint = "trending" | "search";
function getApiKey(): string {
  const apiKey = import.meta.env.VITE_GIPHY_API_KEY;
  if (!apiKey) {
    throw new Error("Falta VITE_GIPHY_API_KEY en .env.local.");
  }
  return apiKey;
}
function isGifRating(value: string): value is GifRating {
  return value === "g" || value === "pg" || value === "pg-13";
}
function mapGiphyGif(item: GiphyGif): Gif {
  const { id, title, username, rating, alt_text: altText, images } = item;
  const safeTitle = title || "GIF sin título";
  const previewImage = images.fixed_width ?? images.original;
  return {
    id,
    title: safeTitle,
    url: previewImage.url,
    detailUrl: images.original.url,
    altText: altText || safeTitle,
    username: username || undefined,
    tags: [],
    rating: isGifRating(rating) ? rating : "g",
  };
}
function buildUrl(
  endpoint: GiphyEndpoint,
  parameters: Record<string, string> = {},
): URL {
  const url = new URL(`${API_BASE_URL}/${endpoint}`);
  url.search = new URLSearchParams({
    api_key: getApiKey(),
    limit: String(RESULT_LIMIT),
    rating: "g",
    ...parameters,
  }).toString();
  return url;
}
async function requestGifs(url: URL): Promise<Gif[]> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`GIPHY respondió con el estado ${response.status}.`);
  }
  const result = (await response.json()) as GiphyResponse;
  if (result.meta.status !== 200) {
    throw new Error(result.meta.msg || "Respuesta inválida de GIPHY.");
  }
  return result.data.map(mapGiphyGif);
}

export async function getTrendingGifs(): Promise<Gif[]> {
  return requestGifs(buildUrl("trending"));
}
export async function searchGifs(value: string): Promise<Gif[]> {
  const query = value.trim();
  if (!query) {
    return getTrendingGifs();
  }
  return requestGifs(
    buildUrl("search", {
      q: query,
      lang: "es",
    }),
  );
}
export function findGifById(collection: Gif[], id: string): Gif | undefined {
  return collection.find((gif) => gif.id === id);
}

/*
import type { Gif } from "../models/gif.interface";
import { normalizeText } from "../utils/text";

/*El operador ?? sustituye username por una cadena vacía cuando la propiedad es null o undefined. El operador
spread ... inserta cada etiqueta en el arreglo de textos. Finalmente, join forma una sola cadena para buscar
en ella.*/
/*
export function matchesQuery(gif: Gif, query: string): boolean {
  const searchableText = [gif.title, gif.username ?? "", ...gif.tags].join(" ");
  return normalizeText(searchableText).includes(query);
}

/*La función recibe la colección y el texto escrito. Si la consulta queda vacía, devuelve una copia superficial
mediante spread. Si existe texto, filter crea un arreglo nuevo con las coincidencias. El arreglo original no se
modifica.*/
/*
export function searchGifs(collection: Gif[], value: string): Gif[] {
  const query = normalizeText(value);
  if (!query) {
    return [...collection];
  }
  return collection.filter((gif) => matchesQuery(gif, query));
}
export function findGifById(collection: Gif[], id: string): Gif | undefined {
  return collection.find((gif) => gif.id === id);
}

/*En este módulo se aplican los siguientes conceptos:
• spread: ...gif.tags incorpora las etiquetas al texto de búsqueda.
• spread: [...collection] crea una copia superficial del arreglo.
• filter: conserva todos los objetos que cumplen la condición.
• find: devuelve el primer GIF coincidente o undefined.
• retorno tipado: Gif | undefined obliga a validar el resultado.
*/
