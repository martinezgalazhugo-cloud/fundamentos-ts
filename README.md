==
Materia: Diseño Frontend con Frameworks.

Actividad: EC1 F2 A4 Consumo de la API de GIPHY con Fetch y programación asíncrona

Refactorizar el proyecto GIFinder para distribuir el código en módulos con responsabilidades específicas,
consolidar el sistema de tipos de TypeScript, mostrar la información detallada de un GIF seleccionado y
representar los estados de la interfaz.
En esta actividad no construirás una aplicación nueva. Mejorarás la estructura interna del proyecto
desarrollado en F1 A2 sin perder la funcionalidad que ya opera correctamente.

Alumno: Martinez Galaz Hugo

Maestro: ESPINOZA ZEPEDA JALIL GERARDO

==

===Referencias, indexados y comandos===

src/ Código fuente que modificarás durante el EC1.

public/ Archivos estáticos que se sirven sin transformación.

index.html Documento HTML de entrada de la aplicación.

package.json Metadatos, scripts y dependencias del proyecto.

pnpm-lock.yaml Versiones exactas para instalaciones reproducibles.

tsconfig.json Reglas de compilación y análisis de TypeScript.

node_modules/ Paquetes descargados; puede ocupar mucho espacio.

dist/ Resultado generado por pnpm build.

pwd --Muestra la carpeta actual.

ls --Lista archivos y carpetas.

cd --nombre Entra en una carpeta.

cd .. --Sube a la carpeta superior.

mkdir --nombre Crea una carpeta.

clear --Limpia la pantalla de la terminal.

1. getApiKey obtiene la clave y genera un error si falta.
2. buildUrl usa URL y URLSearchParams para codificar los parámetros.
3. requestGifs espera fetch y comprueba response.ok.
4. response.json convierte el cuerpo de la respuesta.
5. mapGiphyGif transforma cada GiphyGif en un Gif simple.
6. getTrendingGifs consulta el endpoint trending.
7. searchGifs consulta search o recupera tendencias cuando el texto está vacío.
8. findGifById conserva la funcionalidad del detalle.

## Funcionalidad EC1 F3 A4

GIFinder consulta GIPHY API para mostrar tendencias,
realizar búsquedas y consultar el detalle de un GIF.

## Configuración de la API

1. Crear una clave individual en GIPHY Developers.
2. Crear `.env.local` en la raíz del proyecto.
3. Agregar la variable:

```text
VITE_GIPHY_API_KEY=E0fIqpb14DDlly64g6LSFOpPcsknVtft
```

4. Reiniciar el servidor de Vite.
   `.env.local` no debe publicarse. El repositorio incluye
   `.env.example` únicamente como referencia.

## Verificación

```bash
pnpm install
pnpm dev
pnpm build
```
