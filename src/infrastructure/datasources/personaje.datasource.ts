import { Personaje, RolCategoria } from "../../domain/models/personajes.model";
import { faker } from '@faker-js/faker';

export class PersonajeDatasource {
    private roles: RolCategoria[] = [
        'Vanguardia',
        'Ladron',
        'Jefe',
        'Ilusionista',
        'Explorador'
    ];

    async getAll(countPersonajes: number): Promise<Personaje[]> {
        const personajes: Promise<Personaje>[] = [];

        for(let i = 1; i <= countPersonajes; i++){
            personajes.push(this.generarPersonaje(i));
        }
        return Promise.all(personajes);
    }

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