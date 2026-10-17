import { Personaje } from "../../domain/models/personajes.model";
import { PersonajeRepository } from "../../domain/repositories/personaje.repository";

/**
 * Caso de uso para obtener un listado de personajes.
 *
 * @remarks
 * Pertenece a la capa de aplicación y delega la consulta al contrato
 * {@link PersonajeRepository}, sin depender de su implementación concreta.
 *
 * @see {@link Personaje}
 * @see {@link PersonajeRepository}
 */
export class GetAllPersonajesUseCase {
    /**
     * Crea una instancia del caso de uso.
     *
     * @param personajeRepository - Repositorio utilizado para obtener personajes
     */
    constructor(private personajeRepository: PersonajeRepository) {}

    /**
     * Ejecuta el caso de uso para obtener personajes.
     *
     * @param countPersonajes - Cantidad de personajes que se desea obtener
     * @returns Promesa que resuelve un arreglo de {@link Personaje}
     *
     * @example
     * ```ts
     * const useCase = new GetAllPersonajesUseCase(personajeRepository);
     * const personajes = await useCase.execute(10);
     * ```
     */
    execute(countPersonajes: number): Promise<Personaje[]> {
        return this.personajeRepository.getAll(countPersonajes);
    }
}