import { Jungler } from "../models/jungler.model";

/**
 * Contrato del repositorio de junglers de League of Legends.
 *
 * @remarks
 * Esta clase abstracta pertenece a la **capa de Domain**
 * y define el contrato que deben cumplir todas las
 * implementaciones de repositorios de junglers.
 *
 * El dominio:
 * - NO conoce detalles de infraestructura
 * - NO sabe de bases de datos, APIs o frameworks
 *
 * Cualquier fuente de datos (en memoria, API externa, etc.)
 * puede ser utilizada siempre que implemente este contrato.
 *
 * Los casos de uso dependen exclusivamente de esta abstracción.
 *
 * @see {@link Jungler}
 */
export abstract class JunglerRepository {
  /**
   * Obtiene un listado de campeones junglers.
   *
   * @remarks
   * Define la operación de negocio para recuperar los campeones junglers,
   * sin especificar cómo ni desde dónde se obtienen.
   *
   * @param countJunglers - Cantidad máxima de junglers a obtener
   * @returns Promesa que resuelve un arreglo de {@link Jungler}
   */
  abstract getAll(countJunglers: number): Promise<Jungler[]>;
}
