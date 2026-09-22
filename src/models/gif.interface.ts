/**
 Conserva las propiedades existentes y agrega detailUrl y altText como opcionales. La galería usará una imagen de 
tamaño moderado y el detalle podrá usar una versión mayor.
 */

export type GifRating = "g" | "pg" | "pg-13";
export interface Gif {
  id: string;
  title: string;
  url: string;
  detailUrl?: string;
  altText?: string;
  username?: string;
  tags: string[];
  rating: GifRating;
}
