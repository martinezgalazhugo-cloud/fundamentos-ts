/*map transforma cada etiqueta en un texto con # y join une las etiquetas. El atributo loading="lazy" solicita
que el navegador cargue las imágenes conforme sean necesarias.*/
/* El tipo de retorno void indica que la función actualiza la interfaz pero no produce un valor para quien la
invoca. El operador ternario selecciona singular o plural. El retorno temprano evita continuar cuando no
existen resultados.*/
/*
import type { Gif } from "../models/gif.interface";
export function createGifCard(gif: Gif): string {
  const {
    id,
    title,
    url,
    username = "Autor no disponible",
    tags,
    rating,
  } = gif;
  return `
 <article class="gif-card">
 <img
 src="${url}"
 alt="${title}"
 loading="lazy"
 />
 <div class="gif-card__content">
 <h2>${title}</h2>
 <p>
 ${username} - Clasificación
 ${rating.toUpperCase()}
 </p>
 <p class="tags">
 ${tags.map((tag) => `#${tag}`).join(" ")}
 </p>
 <button
 type="button"
 data-gif-id="${id}"
 >
 Ver detalle
 </button>
 </div>
 </article>
 `;
}
export function renderGallery(collection: Gif[], container: HTMLElement): void {
  container.innerHTML = collection.map(createGifCard).join("");
}
*/

/**La galería conserva el botón data-gif-id, pero ahora escapa los textos recibidos y utiliza altText para mejorar la 
accesibilidad de las imágenes. */

import type { Gif } from "../models/gif.interface";
import { escapeHtml } from "../utils/html";
function createGifCard(gif: Gif): string {
  const {
    id,
    title,
    url,
    altText = title,
    username = "Autor no disponible",
    rating,
  } = gif;
  return `
 <article class="gif-card">
 <img
 src="${url}"
 alt="${escapeHtml(altText)}"
 loading="lazy"
 />
 <div class="gif-card__content">
 <h2>${escapeHtml(title)}</h2>
 <p>
 ${escapeHtml(username)} - Clasificación
 ${rating.toUpperCase()}
 </p>
 <button
 type="button"
 data-gif-id="${id}"
  >
 Ver detalle
 </button>
 </div>
 </article>
 `;
}
export function renderGallery(collection: Gif[], container: HTMLElement): void {
  container.innerHTML = collection.map(createGifCard).join("");
}
