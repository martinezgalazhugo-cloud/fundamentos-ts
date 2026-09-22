/**Loading ahora podrá observarse porque una solicitud de red tarda en completarse. Los mensajes deben describir lo 
que ocurre sin exponer detalles internos al usuario. */

import { RequestStatus } from "../models/request-status.enum";
export function renderStatus(
  currentStatus: RequestStatus,
  container: HTMLElement,
  amount = 0,
): void {
  container.className = `status status--${currentStatus}`;
  const initialLabel =
    amount === 1 ? "1 GIF disponible." : `${amount} GIF disponibles.`;
  const resultLabel =
    amount === 1
      ? "1 resultado encontrado."
      : `${amount} resultados encontrados.`;
  switch (currentStatus) {
    case RequestStatus.Initial:
      container.textContent = `${initialLabel} Preparando la consulta.`;
      break;
    case RequestStatus.Loading:
      container.textContent = "Consultando GIPHY...";
      break;
    case RequestStatus.Success:
      container.textContent = resultLabel;
      break;
    case RequestStatus.Empty:
      container.textContent = "No se encontraron GIF. Prueba otra búsqueda.";
      break;
    case RequestStatus.Error:
      container.textContent = "No fue posible consultar GIPHY.";
      break;
  }
}

/*
import { RequestStatus } from "../models/request-status.enum";
export function renderStatus(
  currentStatus: RequestStatus,
  container: HTMLElement,
  amount = 0,
): void {
  container.className = `status status--${currentStatus}`;
  const initialLabel =
    amount === 1 ? "1 GIF disponible." : `${amount} GIF disponibles.`;
  const resultLabel =
    amount === 1
      ? "1 resultado encontrado."
      : `${amount} resultados encontrados.`;
  switch (currentStatus) {
    case RequestStatus.Initial:
      container.textContent =
        `${initialLabel} Escribe una búsqueda ` + "o selecciona un GIF.";
      break;
    case RequestStatus.Loading:
      container.textContent = "Buscando contenido...";
      break;
    case RequestStatus.Success:
      container.textContent = resultLabel;
      break;
    case RequestStatus.Empty:
      container.textContent =
        "No se encontraron GIFs. " + "Prueba con otra palabra.";
      break;
    case RequestStatus.Error:
      container.textContent = "No fue posible mostrar la información.";
      break;
  }
}
*/
/*
Estado Significado
Initial La aplicación espera una búsqueda o selección.
Loading La aplicación está procesando una búsqueda.
Success La búsqueda produjo resultados.
Empty La búsqueda no produjo coincidencias.
Error No se pudo completar una operación.
*/
