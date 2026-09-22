/**Los títulos, autores y textos alternativos ya no son escritos por el estudiante; provienen de una fuente externa. 
escapeHtml sustituye caracteres que podrían interpretarse como etiquetas al utilizar innerHTML. */

const HTML_ENTITIES: Record<string, string> = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;",
};
export function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => HTML_ENTITIES[character]);
}

/**Nota: Esta medida reduce riesgos al construir plantillas HTML, pero en proyectos mayores es preferible crear nodos 
del DOM y asignar texto mediante textContent.
 */
