/*trim() elimina espacios al inicio y al final. toLocaleLowerCase('es-MX') convierte a minúsculas de acuerdo con
la configuración del español de México. Así, la búsqueda no depende de mayúsculas ni espacios externos. */
export function normalizeText(value: string): string {
  return value.trim().toLocaleLowerCase("es-MX");
}
