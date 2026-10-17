import { Personaje } from "../../domain/models/personajes.model";
import { PersonajeRepository } from "../../domain/repositories/personaje.repository";
import { PersonajeDatasource } from "../datasources/personaje.datasource";

export class PersonajeRepositoryImpl extends PersonajeRepository {
    constructor(private datasource: PersonajeDatasource) {
        super();
    }

    getAll(countPersonajes: number): Promise<Personaje[]> {
        return this.datasource.getAll(countPersonajes);
    }
}