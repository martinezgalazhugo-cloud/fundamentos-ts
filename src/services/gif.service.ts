import type { Gif } from "../models/gif.interface";
import { normalizeText } from "../utils/text";

/*El operador ?? sustituye username por una cadena vacía cuando la propiedad es null o undefined. El operador
spread ... inserta cada etiqueta en el arreglo de textos. Finalmente, join forma una sola cadena para buscar
en ella.*/

export function matchesQuery(gif: Gif, query: string): boolean {
  const searchableText = [gif.title, gif.username ?? "", ...gif.tags].join(" ");
  return normalizeText(searchableText).includes(query);
}

/*La función recibe la colección y el texto escrito. Si la consulta queda vacía, devuelve una copia superficial
mediante spread. Si existe texto, filter crea un arreglo nuevo con las coincidencias. El arreglo original no se
modifica.*/
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
