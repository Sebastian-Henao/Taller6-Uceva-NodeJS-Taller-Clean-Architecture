import { Jungler } from "../../domain/models/jungler.model";
import { JunglerRepository } from "../../domain/repositories/jungler.repository";

/**
 * Caso de uso para obtener el listado de campeones junglers.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Application**
 * y representa una **regla de negocio de la aplicación**.
 *
 * Su responsabilidad es:
 * - Orquestar la obtención de campeones junglers
 * - Coordinar la interacción con el repositorio de junglers
 *
 * ❗ No conoce detalles de infraestructura.
 * ❗ No depende de implementaciones concretas.
 *
 * Depende únicamente del contrato
 * {@link JunglerRepository} definido en el dominio.
 *
 * @see {@link JunglerRepository}
 * @see {@link Jungler}
 */
export class GetAllJunglersUseCase {

  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param junglerRepository - Repositorio de junglers
   * utilizado para acceder a los datos
   */
  constructor(private junglerRepository: JunglerRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * Obtiene una cantidad determinada de junglers
   * delegando el acceso a datos al repositorio.
   *
   * @param countJunglers - Cantidad de junglers a obtener
   * @returns Promesa que resuelve un arreglo de {@link Jungler}
   *
   * @example
   * ```ts
   * const useCase = new GetAllJunglersUseCase(junglerRepository);
   * const junglers = await useCase.execute(10);
   * ```
   */
  execute(countJunglers: number): Promise<Jungler[]> {
    return this.junglerRepository.getAll(countJunglers);
  }
}
