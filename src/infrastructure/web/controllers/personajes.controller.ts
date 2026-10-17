import { GetAllPersonajesUseCase } from "../../../application/usecases/get-all-personajes.usecase";
import { HandleError } from "../erros/handle.error";
import { Request, Response } from "express";

/**
 * Controlador HTTP para operaciones de personajes.
 *
 * @remarks
 * Recibe solicitudes, extrae sus parámetros, delega el trabajo al caso de uso
 * y responde en JSON. No contiene lógica de negocio ni accede directamente
 * a repositorios o fuentes de datos.
 *
 * @see {@link GetAllPersonajesUseCase}
 */
export class PersonajesController {
    /**
     * Crea una instancia del controlador.
     *
     * @param getAllPersonajesUseCase - Caso de uso encargado de obtener personajes
     */
    constructor(private getAllPersonajesUseCase: GetAllPersonajesUseCase){}

    /**
     * Atiende la solicitud HTTP para obtener una lista de personajes.
     *
     * @remarks
     * Lee `countPersonajes` de la ruta, ejecuta el caso de uso y devuelve
     * el resultado con estado HTTP 201. El retraso simula latencia y los
     * errores se delegan al manejador centralizado.
     *
     * @param req - Solicitud de Express
     * @param res - Respuesta de Express
     */
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