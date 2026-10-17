import { Jungler } from "../../domain/models/jungler.model";
import { JunglerRepository } from "../../domain/repositories/jungler.repository";
import { JunglerDatasource } from "../datasources/jungler.datasource";

/**
 * Implementación concreta del repositorio de campeones junglers.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa como
 * un **adaptador (Repository Implementation)** entre:
 *
 * - El contrato del dominio {@link JunglerRepository}
 * - La fuente de datos {@link JunglerDatasource}
 *
 * Su responsabilidad es:
 * - Cumplir el contrato definido por el dominio
 * - Delegar la obtención de datos al datasource
 * - Adaptar o transformar los datos si fuese necesario
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No debe ser utilizada directamente por los casos de uso.
 *
 * Los casos de uso dependen únicamente del contrato
 * {@link JunglerRepository}, no de esta implementación.
 *
 * @see {@link JunglerRepository}
 * @see {@link JunglerDatasource}
 */
export class JunglerRepositoryImpl extends JunglerRepository {

  /**
   * Crea una nueva instancia del repositorio de junglers.
   *
   * @param datasource - Fuente de datos utilizada para
   * obtener la información de junglers
   */
  constructor(private datasource: JunglerDatasource) {
    super();
  }

  /**
   * Obtiene el listado de campeones junglers.
   *
   * @remarks
   * Implementa el método definido en
   * {@link JunglerRepository#getAll}.
   *
   * @param countJunglers - Cantidad de junglers a obtener
   * @returns Promesa que resuelve un arreglo de {@link Jungler}
   *
   * @example
   * ```ts
   * const repository = new JunglerRepositoryImpl(new JunglerDatasource());
   * const junglers = await repository.getAll(10);
   * ```
   */
  getAll(countJunglers: number): Promise<Jungler[]> {
    return this.datasource.getAll(countJunglers);
  }
}
