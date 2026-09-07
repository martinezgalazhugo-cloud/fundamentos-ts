==
Materia: Diseño Frontend con Frameworks.

Actividad: EC2 A2 Configuración del entorno

Esta actividad trata sobre la configuracion del IDE Visual Studio Code para el desarrollo de las actividades y proyectos futuros para la materia, con el objetivo de que el alumno se familiarice con las herramientas.

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

1. ¿Qué problema resuelve la interfaz Gif dentro del proyecto?
   La interfaz Gif define la estructura que debe tener cada GIF del proyecto. Especifica qué propiedades tiene, como id, title, o url

Ejemplo:

export type GifRating = "g" | "pg" | "pg-13";
export interface Gif {
id: string;
title: string;
url: string;
username?: string;
tags: string[];
rating: GifRating;
}

2. ¿Qué diferencia existe entre una interfaz y un objeto literal?
   La interfaz define cómo debe estar estructurado un objeto, pero no contiene datos reales. El objeto literal es el que contiene los valores.

3. ¿Qué significa Gif[] y qué error evita en el arreglo local?
   Gif[] significa que gifs es un arreglo compuesto únicamente por objetos de tipo Gif.
   const gifs: Gif[] = [...]
   Esto evita introducir datos que no tengan la estructura de un GIF definida en la interfaz.

4. ¿Por qué username y description pueden declararse como propiedades opcionales?
   Porque algunos GIFs pueden no tener esas propiedades. En TypeScript se utiliza ? para indicar que una propiedad es opcional

5. ¿En qué situación utilizarías let en lugar de const dentro de esta actividad?
   Utilizaría let cuando necesitara reasignar una variable.
   En cambio, const se utiliza cuando la variable no será reasignada.

6. ¿Qué reciben y qué devuelven normalizeText, searchGifs y createGifCard?
   normalizeText recibe un string y devuelve un string normalizado.
   searchGifs recibe un arreglo de Gif y un texto de búsqueda, y devuelve un arreglo Gif[] con las coincidencias.
   createGifCard recibe un objeto Gif y devuelve un string que contiene el HTML de la tarjeta.

7. ¿Qué diferencia existe entre forEach, filter, map y find?
   forEach: recorre los elementos y ejecuta una acción. En tu código lo utilizaste para mostrar los títulos en consola.
   filter: crea un nuevo arreglo con los elementos que cumplen una condición. Lo utilizaste en searchGifs.
   map: crea un nuevo arreglo transformando cada elemento. Lo utilizaste para generar las tarjetas y también para mostrar las etiquetas.
   find: busca y devuelve el primer elemento que cumple una condición.

8. ¿Por qué find puede devolver undefined y cómo se controló ese resultado?
   Porque puede no existir ningún elemento que cumpla la condición.

9. ¿Qué es un callback? Identifica dos callbacks presentes en tu solución.
   Un callback es una función que se pasa como argumento a otra función para que esta la ejecute.

gifs.forEach((gif, index) => {
console.log(`${index + 1}. ${gif.title}`);
});

collection.filter((gif) => matchesQuery(gif, query));

10. ¿Qué ventaja ofrecen las template strings al construir las tarjetas?
    Permiten construir HTML de forma más sencilla, insertando directamente variables mediante ${}.

11. ¿Para qué se utilizó la destructuración y el valor predeterminado de username?

Para extraer varias propiedades del objeto gif directamente:

const { title, url, username = "Autor no disponible", tags, rating } = gif;

El valor predeterminado:

username = "Autor no disponible"

Hace que se muestre ese texto cuando el GIF no tiene un username.

12. ¿Por qué querySelector puede devolver null y cómo se validaron los elementos?
    querySelector puede devolver null si no encuentra el elemento solicitado.

Por eso primero aparecen los elementos:

const form = document.querySelector<HTMLFormElement>("#search-form");
const input = document.querySelector<HTMLInputElement>("#search-input");

y posteriormente se validan:

if (!form || !input || !gallery || !status) {
throw new Error("No se pudo inicializar los elementos del formulario.");
}

Después de esa validación, TypeScript sabe que los elementos existen.

13. ¿Qué función cumple preventDefault en el envío del formulario?
    Evita el comportamiento predeterminado del formulario, que normalmente sería recargar o cambiar la página.

event.preventDefault();

14. ¿Cómo responde la aplicación cuando la búsqueda no obtiene coincidencias?

searchGifs devuelve un arreglo vacío, luego renderGifs detecta que el número de resultados es 0:

if (total === 0)

y muestra:

No se encontraron GIFs. Prueba con otra palabra.

15. ¿Qué cambiará cuando el arreglo local sea sustituido por datos de Giphy API?
    Actualmente los GIFs están almacenados directamente en:

const gifs: Gif[] = [...]

Al utilizar Giphy API, los GIFs ya no vendrán de ese arreglo, sino de una petición a una API.

16. ¿Qué error o dificultad encontraste y cómo comprobaste que quedó resuelto?

Principalmente los errores que me encontre venian de antiguas funciones heredadas de la primera actividad, nada realmente grave, se soluciono convirtiendolos en comentarios.
