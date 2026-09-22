/**
 Declara la variable para que TypeScript proporcione autocompletado y compruebe su nombre. No agregues imports 
ni exports a este archivo de declaración.
 */

/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_GIPHY_API_KEY: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
