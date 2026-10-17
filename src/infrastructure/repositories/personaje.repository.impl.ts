import { Personaje } from "../../domain/models/personajes.model";
import { PersonajeRepository } from "../../domain/repositories/personaje.repository";
import { PersonajeDatasource } from "../datasources/personaje.datasource";

/**
 * Implementación de infraestructura del repositorio de personajes.
 *
 * @remarks
 * Adapta el contrato {@link PersonajeRepository} delegando la obtención
 * de datos a {@link PersonajeDatasource}.
 *
 * @see {@link PersonajeRepository}
 * @see {@link PersonajeDatasource}
 */
export class PersonajeRepositoryImpl extends PersonajeRepository {
    /**
     * Crea el repositorio con su fuente de datos.
     *
     * @param datasource - Fuente de datos que proporciona los personajes
     */
    constructor(private datasource: PersonajeDatasource) {
        super();
    }

    /**
     * Obtiene personajes delegando la operación al datasource.
     *
     * @param countPersonajes - Cantidad de personajes a obtener
     * @returns Promesa que resuelve un arreglo de {@link Personaje}
     */
    getAll(countPersonajes: number): Promise<Personaje[]> {
        return this.datasource.getAll(countPersonajes);
    }
}