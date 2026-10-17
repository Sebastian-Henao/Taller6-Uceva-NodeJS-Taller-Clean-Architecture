import { GetAllPersonajesUseCase } from "../../../application/usecases/get-all-personajes.usecase";
import { HandleError } from "../erros/handle.error";
import { Request, Response } from "express";

export class PersonajesController {
    constructor(private getAllPersonajesUseCase: GetAllPersonajesUseCase){}

    getAllPersonajes = (req: Request, res: Response): void => {
        const { countPersonajes } = req.params;

        setTimeout(() => {
            this.getAllPersonajesUseCase
            .execute(Number(countPersonajes))
            .then((personajes) => res.status(201).json(personajes))
            .catch((error) => HandleError.error(error, res));
        }, 3000);
    };
}