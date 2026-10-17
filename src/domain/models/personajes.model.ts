/**
 * Representa un personaje generado por la aplicación.
 *
 * @remarks
 * Contiene los datos básicos del personaje y su categoría de rol.
 *
 * @example
 * ```ts
 * const personaje: Personaje = {
 *   id: 1,
 *   nombre: "Nombre de ejemplo",
 *   alias: "alias",
 *   juego: "Juego de ejemplo",
 *   habilidad: "Habilidad de ejemplo",
 *   rol: "Vanguardia"
 * };
 * ```
 */
export interface Personaje {
    /** Identificador secuencial del personaje */
    id: number;

    /** Nombre del personaje */
    nombre: string;

    /** Alias del personaje */
    alias: string;

    /** Juego asociado al personaje */
    juego: string;

    /** Habilidad del personaje */
    habilidad: string;

    /** Categoría de rol del personaje */
    rol: RolCategoria;
}

/**
 * Categorías permitidas para el rol de un personaje.
 *
 * @example
 * ```ts
 * const rol: RolCategoria = "Vanguardia";
 * ```
 */
export type RolCategoria = 'Vanguardia' | 'Ladron' | 'Jefe' | 'Ilusionista' | 'Explorador';