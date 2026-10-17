import { Personaje } from "../models/personajes.model";

export abstract class PersonajeRepository {
    abstract getAll(countPersonajes: number): Promise<Personaje[]>;
}