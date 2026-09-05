import "./styles/style.css";
import type { Gif } from "./models/gif.interface";
/*
import typescriptLogo from "./assets/typescript.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { setupCounter } from "./counter.ts";
*/

const MEDIA_URL = "https://media.giphy.com/media";
const gifs: Gif[] = [
  {
    id: "cat-01",
    title: "Gato programando",
    url: `${MEDIA_URL}/JIX9t2j0ZTN9S/giphy.gif`,
    username: "gifinder",
    tags: ["gato", "programacion", "computadora"],
    rating: "g",
  },
  {
    id: "celebration-01",
    title: "Celebracion del equipo",
    url: `${MEDIA_URL}/g9582DNuQppxC/giphy.gif`,
    tags: ["celebracion", "equipo", "trabajo"],
    rating: "g",
  },

  {
    id: "coding-01",
    title: "Código en progreso",
    url: `${MEDIA_URL}/13HgwGsXF0aiGY/giphy.gif`,
    username: "developer",
    tags: ["código", "desarrollo", "teclado"],
    rating: "pg",
  },
  {
    id: "idea-01",
    title: "Nueva idea",
    url: `${MEDIA_URL}/l0HlRnAWXxn0MhKLK/giphy.gif`,
    tags: ["idea", "creatividad", "solución"],
    rating: "g",
  },
];

// Titulos de los gifs en la consola, codigo de prueba.
//forEach sirve para ejecutar una acción por elemento. Cuando termines la comprobación puedes conservarlo
//durante la práctica o eliminarlo antes de la entrega para evitar mensajes innecesarios.
gifs.forEach((gif, index) => {
  console.log(`${index + 1}. ${gif.title}`);
});

/*Selecciona el contenedor principal y valida que exista. Después genera el encabezado, el formulario, el
mensaje de estado y la galería.*/
const app = document.querySelector<HTMLDivElement>("#app")!;

if (!app) {
  throw new Error("No se encontró el elemento #app.");
}

app.innerHTML = `
      <main class="app-shell">
<header class="hero">
<p class="eyebrow">EC1 - Fundamentos de TypeScript</p>
<h1>GIFinder</h1>
<p>Explora una colección local de GIFs.</p>
</header>
<form id="search-form" class="search-form">
<label for="search-input">
Buscar por título, autor o etiqueta
</label>
<div class="search-row">
<input id="search-input" name="query"
type="search" placeholder="Ejemplo: gato"
autocomplete="off" />
<button type="submit">Buscar</button>
</div>
</form>
<p id="search-status" class="status"
aria-live="polite"></p>
<section id="gif-gallery" class="gallery"
aria-label="Resultados"></section>
</main>
`;

const form = document.querySelector<HTMLFormElement>("#search-form");
const input = document.querySelector<HTMLInputElement>("#search-input");
const gallery = document.querySelector<HTMLDivElement>("#gif-gallery")!;
const status = document.querySelector<HTMLParagraphElement>("#search-status");

/*La validación elimina la posibilidad de null para el resto del archivo. Después del if, TypeScript sabe que los
cuatro elementos existen.*/
if (!form || !input || !gallery || !status) {
  throw new Error("No se pudo inicializar los elementos del formulario.");
}

/*trim() elimina espacios al inicio y al final. toLocaleLowerCase('es-MX') convierte a minúsculas de acuerdo con
la configuración del español de México. Así, la búsqueda no depende de mayúsculas ni espacios externos. */
function normalizeText(value: string): string {
  return value.trim().toLocaleLowerCase("es-MX");
}

/*El operador ?? sustituye username por una cadena vacía cuando la propiedad es null o undefined. El operador
spread ... inserta cada etiqueta en el arreglo de textos. Finalmente, join forma una sola cadena para buscar
en ella.*/

function matchesQuery(gif: Gif, query: string): boolean {
  const searchableText = [gif.title, gif.username ?? "", ...gif.tags].join(" ");
  return normalizeText(searchableText).includes(query);
}

/*La función recibe la colección y el texto escrito. Si la consulta queda vacía, devuelve una copia superficial
mediante spread. Si existe texto, filter crea un arreglo nuevo con las coincidencias. El arreglo original no se
modifica.*/
function searchGifs(collection: Gif[], value: string): Gif[] {
  const query = normalizeText(value);
  if (!query) {
    return [...collection];
  }
  return collection.filter((gif) => matchesQuery(gif, query));
}

//ME QUEDE EN EL PASO 12: TRANSFORMAR UN OBJETO EN TARJETA HTML
/*map transforma cada etiqueta en un texto con # y join une las etiquetas. El atributo loading="lazy" solicita
que el navegador cargue las imágenes conforme sean necesarias.*/
function createGifCard(gif: Gif): string {
  const { title, url, username = "Autor no disponible", tags, rating } = gif;
  return `
    <article class="gif-card">
      <img src="${url}" alt="${title}"
        loading="lazy" />
      <div class="gif-card__content">
        <h2>${title}</h2>
        <p>${username} - Clasificación
          ${rating.toUpperCase()}</p>
        <p class="tags">
          ${tags.map((tag) => `#${tag}`).join(" ")}
        </p>
      </div>
    </article>
  `;
}

/* El tipo de retorno void indica que la función actualiza la interfaz pero no produce un valor para quien la
invoca. El operador ternario selecciona singular o plural. El retorno temprano evita continuar cuando no
existen resultados.*/

function renderGifs(collection: Gif[]): void {
  const total = collection.length;
  const label = total === 1 ? "resultado" : "resultados";

  //status se quedo con un error de tipo null, por eso se le agrega el operador ! para decirle a TS que no es null
  status!.textContent = `${total} ${label}`;

  if (total === 0) {
    gallery.innerHTML = `
      <p class="empty-state">
      No se encontraron GIFs.
      Prueba con otra palabra.
      </p>
    `;
    return;
  }
  gallery.innerHTML = collection.map(createGifCard).join("");
}

form.addEventListener("submit", (event: SubmitEvent) => {
  event.preventDefault();
  const results = searchGifs(gifs, input.value);

  renderGifs(results);
});
input.addEventListener("input", () => {
  if (input.value.trim() === "") {
    renderGifs(gifs);
  }
});

//ME QUEDE EN EL PASO 15
const firstSafeGif = gifs.find((gif) => gif.rating === "g");
console.log(`Primer GIF clasificación G: ${firstSafeGif?.title ?? "Ninguno"}`);
renderGifs(gifs);

/*
document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
<section id="center">
  <div class="hero">
    <img src="${heroImg}" class="base" width="170" height="179">
    <img src="${typescriptLogo}" class="framework" alt="TypeScript logo"/>
    <img src="${viteLogo}" class="vite" alt="Vite logo" />
  </div>
  <div>
    <h1>Mi primer proyecto con Vite y TypeScript</h1>
    <h2>Hugo Martinez Galaz</h2>
    <h2>Diseño Front-End</h2>
    <h3>Espero empezar a usar los benditos frontend</h3>
    <p>Edit <code>src/main.ts</code> and save to test <code>HMR</code></p>
  </div>
  <button id="counter" type="button" class="counter"></button>
</section>

<div class="ticks"></div>

<section id="next-steps">
  <div id="docs">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#documentation-icon"></use></svg>
    <h2>Documentation</h2>
    <p>Your questions, answered</p>
    <ul>
      <li>
        <a href="https://vite.dev/" target="_blank">
          <img class="logo" src="${viteLogo}" alt="" />
          Explore Vite
        </a>
      </li>
      <li>
        <a href="https://www.typescriptlang.org" target="_blank">
          <img class="button-icon" src="${typescriptLogo}" alt="">
          Learn more
        </a>
      </li>
    </ul>
  </div>
  <div id="social">
    <svg class="icon" role="presentation" aria-hidden="true"><use href="/icons.svg#social-icon"></use></svg>
    <h2>Connect with us</h2>
    <p>Join the Vite community</p>
    <ul>
      <li><a href="https://github.com/vitejs/vite" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#github-icon"></use></svg>GitHub</a></li>
      <li><a href="https://chat.vite.dev/" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#discord-icon"></use></svg>Discord</a></li>
      <li><a href="https://x.com/vite_js" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#x-icon"></use></svg>X.com</a></li>
      <li><a href="https://bsky.app/profile/vite.dev" target="_blank"><svg class="button-icon" role="presentation" aria-hidden="true"><use href="/icons.svg#bluesky-icon"></use></svg>Bluesky</a></li>
    </ul>
  </div>
</section>

<div class="ticks"></div>
<section id="spacer"></section>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
*/
