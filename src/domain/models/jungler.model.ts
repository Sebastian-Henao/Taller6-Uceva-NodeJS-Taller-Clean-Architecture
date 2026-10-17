/**
 * Interfaz que representa un campeón de la jungla de League of Legends.
 *
 * Contiene la información detallada de cada campeón jungler
 * para su presentación en listas, tablas o componentes de detalle.
 *
 * @remarks
 * Cada jungler posee identificador numérico, nombre, título honorífico,
 * rol/clase dentro del juego, nivel de dificultad, región de procedencia,
 * descripción de lore y sus habilidades principales.
 *
 * @example
 * ```ts
 * const jungler: Jungler = {
 *   id: 1,
 *   name: 'Lee Sin',
 *   title: 'El Monje Ciego',
 *   role: 'Luchador',
 *   difficulty: 'Alta',
 *   region: 'Jonia',
 *   description: 'Un maestro de las artes marciales de Jonia.',
 *   mainAbilities: 'Onda Sónica, Salvaguarda, Tempestad, Ira del Dragón'
 * };
 * ```
 */
export interface Jungler {
  /** Identificador único del campeón */
  id: number;

  /** Nombre del campeón */
  name: string;

  /** Título o apodo característico del campeón */
  title: string;

  /** Rol o clase de combate del campeón en el juego */
  role: JunglerRole;

  /** Dificultad de dominio del campeón */
  difficulty: JunglerDifficulty;

  /** Región del universo de Runaterra a la que pertenece */
  region: string;

  /** Descripción o trasfondo narrativo (lore) */
  description: string;

  /** Habilidades principales o habilidades clave */
  mainAbilities: string;
}

/**
 * Roles o clases tácticas de los junglers.
 *
 * @remarks
 * Clasificación de estilo de combate:
 * - 'Luchador': Campeones cuerpo a cuerpo resistentes y con buen daño continuo.
 * - 'Asesino': Campeones de alta movilidad y daño súbito (burst).
 * - 'Tanque': Campeones resistentes con habilidades de control de masas para iniciar batallas.
 * - 'Mago': Campeones basados en poder de habilidad (AP) con control o daño a distancia.
 * - 'Tirador': Campeones de daño físico sostenido a distancia en la jungla.
 */
export type JunglerRole = 'Luchador' | 'Asesino' | 'Tanque' | 'Mago' | 'Tirador';

/**
 * Nivel de dificultad mecánica del campeón.
 */
export type JunglerDifficulty = 'Baja' | 'Media' | 'Alta';
