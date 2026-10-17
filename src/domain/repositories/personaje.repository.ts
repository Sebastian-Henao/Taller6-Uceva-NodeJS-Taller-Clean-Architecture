import { Personaje } from "../models/personajes.model";

/**
 * Contrato del repositorio de personajes.
 *
 * @remarks
 * Pertenece a la capa de dominio y define las operaciones que deben
 * implementar las fuentes de datos de personajes, sin acoplar el dominio
 * a una tecnología de almacenamiento concreta.
 *
 * @see {@link Personaje}
 */
export abstract class PersonajeRepository {
    /**
     * Obtiene una cantidad determinada de personajes.
     *
     * @param countPersonajes - Cantidad de personajes que se desea obtener
     * @returns Promesa que resuelve un arreglo de {@link Personaje}
     */
    abstract getAll(countPersonajes: number): Promise<Personaje[]>;
}