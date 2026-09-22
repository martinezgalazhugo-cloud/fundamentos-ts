/**El detalle utiliza detailUrl cuando existe y conserva url como alternativa. También escapa los textos antes de 
agregarlos mediante innerHTML.
 */

import type { Gif } from "../models/gif.interface";
import { escapeHtml } from "../utils/html";
export function renderGifDetail(gif: Gif, container: HTMLElement): void {
  const {
    title,
    url,
    detailUrl = url,
    altText = title,
    username = "Autor no disponible",
    rating,
  } = gif;
  container.innerHTML = `
 <article class="gif-detail">
 <button
 type="button"
 data-action="close-detail"
 aria-label="Cerrar detalle"
 >
 Cerrar
 </button>
 <h2>${escapeHtml(title)}</h2>
 <img
 src="${detailUrl}"
 alt="${escapeHtml(altText)}"
 />
 <p>Autor: ${escapeHtml(username)}</p>
 <p>Clasificación: ${rating.toUpperCase()}</p>
 </article>
 `;
}
export function clearGifDetail(container: HTMLElement): void {
  container.replaceChildren();
}

/*
import type { Gif } from "../models/gif.interface";
export function renderGifDetail(gif: Gif, container: HTMLElement): void {
  const {
    id,
    title,
    url,
    username = "Autor no disponible",
    rating,
    tags,
  } = gif;
  const [mainTag = "Sin etiqueta", ...secondaryTags] = tags;
  const relatedTags =
    secondaryTags.length > 0 ? secondaryTags.join(", ") : "Ninguna";
  container.innerHTML = `
 <article class="gif-detail">
 <button
 type="button"
 data-action="close-detail"
 aria-label="Cerrar detalle"
 >
 Cerrar
 </button>
 <img
 src="${url}"
 alt="${title}"
 loading="lazy"
 />
 <h2>${title}</h2>
 <p><strong>Identificador:</strong> ${id}</p>
 <p><strong>Autor:</strong> ${username}</p>
 <p>
 <strong>Clasificación:</strong>
 ${rating.toUpperCase()}
 </p>
 <p>
 <strong>Etiqueta principal:</strong>
 ${mainTag}
 </p>
 <p>
 <strong>Otras etiquetas:</strong>
 ${relatedTags}
 </p>
 </article>
 `;
}
export function clearGifDetail(container: HTMLElement): void {
  container.replaceChildren();
}
*/
/*
La expresión const [mainTag, ...secondaryTags] aplica desestructuración de arreglos y rest. 
clearGifDetail concentra la limpieza del componente; no debes crear otra función que repita la misma 
operación.
*/
