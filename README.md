==
Materia: Diseño Frontend con Frameworks.

Actividad: EC1 F2 A3 Configuración del entorno

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

## 1. ¿Qué significa refactorizar una aplicación?

Refactorizar significa modificar la estructura interna del código sin cambiar su funcionamiento principal. En este proyecto se reorganizó el código en módulos como components, services, models y data, para hacerlo más ordenado, reutilizable y fácil de mantener.

## 2. ¿Por qué el proyecto se dividió en módulos?

Se dividió en módulos para aplicar una separación de responsabilidades.

## 3. ¿Cuál es la responsabilidad de main.ts?

main.ts funciona como el punto principal de la aplicación. Se encarga de:

1. Inicializar la interfaz.
2. Obtener los elementos del DOM.
3. Registrar los eventos.
4. Llamar a los servicios y componentes.
5. Coordinar la interacción entre las diferentes partes del proyecto.

## 4. ¿Qué diferencias existen entre una interfaz, un tipo unión y una enumeración?

Interfaz (interface): define la estructura que debe tener un objeto. Por ejemplo, un GIF puede tener id, title, author, etc.
Tipo unión (union type): permite que una variable pueda tener uno de varios tipos o valores. Por ejemplo: "loading" | "success" | "error".
Enumeración (enum): define un conjunto de valores con nombres específicos. En este proyecto se utiliza RequestStatus para representar estados como Loading, Empty, Success, Initial y Error.

## 5. ¿Para qué se utiliza import type?

import type se utiliza cuando únicamente necesitamos importar un tipo de TypeScript y no necesitamos ese elemento durante la ejecución de JavaScript.

## 6. ¿Dónde se aplicaron la desestructuración, spread y rest?

Desestructuracion: createGifCard(); gif.servise.ts

spread: matchesQuery(); gallery

rest: secundadyTAgs... gif-detail

## 7. ¿Por qué searchGifs recibe la colección como parámetro?

Porque hace que la función sea más reutilizable y menos dependiente de una colección específica.

## 8. ¿Por qué findGifById puede devolver undefined?

Porque puede ocurrir que no exista un GIF con el ID proporcionado.

## 9. ¿Qué función cumple data-gif-id?

data-gif-id es un atributo personalizado de HTML que permite guardar el ID del GIF directamente en un elemento.

## 10. ¿Qué es la delegación de eventos?

La delegación de eventos consiste en colocar un evento en un elemento padre para controlar los eventos de sus elementos hijos.

## 11. ¿Por qué el estado Loading podría no observarse?

Porque el cambio a Loading ocurre inmediatamente antes de realizar la búsqueda.

## 12. ¿Qué dificultad se presentó durante la refactorización y cómo se resolvió?

Principalmente fue separar correctamente las responsabilidades sin romper la comunicación entre los módulos.
