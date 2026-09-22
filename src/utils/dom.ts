/*La validación se convierte en una función genérica reutilizable. Si el selector no existe, la aplicación falla con un 
mensaje preciso y TypeScript devuelve un elemento no nulo al resto del programa.
 */

export function getRequiredElement<T extends Element>(selector: string): T {
  const element = document.querySelector<T>(selector);
  if (!element) {
    throw new Error(`No se encontró el elemento ${selector}.`);
  }
  return element;
}
