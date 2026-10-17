import { Personaje, RolCategoria } from "../../domain/models/personajes.model";
import { faker } from '@faker-js/faker';

/**
 * Fuente de datos que genera personajes simulados.
 *
 * @remarks
 * Pertenece a la capa de infraestructura y utiliza Faker para crear
 * datos ficticios. La información no se persiste.
 */
export class PersonajeDatasource {
    /** Roles disponibles para asignar a los personajes generados */
    private roles: RolCategoria[] = [
        'Vanguardia',
        'Ladron',
        'Jefe',
        'Ilusionista',
        'Explorador'
    ];

    /**
     * Genera una lista de personajes simulados.
     *
     * @param countPersonajes - Cantidad de personajes a generar
     * @returns Promesa que resuelve un arreglo de {@link Personaje}
     *
     * @example
     * ```ts
     * const datasource = new PersonajeDatasource();
     * const personajes = await datasource.getAll(10);
     * ```
     */
    async getAll(countPersonajes: number): Promise<Personaje[]> {
        const personajes: Promise<Personaje>[] = [];

        for(let i = 1; i <= countPersonajes; i++){
            personajes.push(this.generarPersonaje(i));
        }
        return Promise.all(personajes);
    }

    /**
     * Genera un personaje simulado con un identificador asignado.
     *
     * @param id - Identificador del personaje
     * @returns Promesa que resuelve un {@link Personaje}
     */
    private generarPersonaje(id: number): Promise<Personaje> {
        return Promise.resolve({
            id,
            nombre: faker.person.fullName(),
            alias: faker.word.noun(),
            juego: faker.company.name(),
            habilidad: faker.commerce.productName(),
            rol: faker.helpers.arrayElement(this.roles),
        });
    }
}