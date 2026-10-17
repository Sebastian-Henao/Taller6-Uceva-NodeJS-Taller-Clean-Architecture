/** Canción devuelta por el módulo de música. */
export interface Music {
  /** Identificador único de la canción. */
  id: number;
  /** Título de la canción. */
  title: string;
  /** Nombre del artista. */
  artist: string;
  /** Nombre del álbum. */
  album: string;
  /** Género musical. */
  genre: string;
  /** Duración en segundos. */
  duration: number;
}
