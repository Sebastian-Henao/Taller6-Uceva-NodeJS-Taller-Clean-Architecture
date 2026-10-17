import { Request, Response } from "express";
import { GetAllJunglersUseCase } from "../../../application/usecases/get-all-junglers.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con campeones junglers de League of Legends.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Frameworks & Drivers**
 * y actúa como un **adaptador HTTP** entre Express y la capa de Application.
 *
 * Su función es:
 * - Interpretar la request HTTP
 * - Extraer parámetros de la URL
 * - Delegar la ejecución al caso de uso correspondiente
 * - Retornar la respuesta JSON o delegar el error
 *
 * @see {@link GetAllJunglersUseCase}
 */
export class JunglersController {

  /**
   * Crea una nueva instancia del controlador de junglers.
   *
   * @param getAllJunglersUseCase - Caso de uso encargado de obtener los junglers
   */
  constructor(private getAllJunglersUseCase: GetAllJunglersUseCase) {}

  /**
   * Maneja la petición HTTP para obtener junglers.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
  getAllJunglers = (req: Request, res: Response): void => {
    const { countJunglers } = req.params;
    const count = Number(countJunglers) || 20;

    setTimeout(() => {
      this.getAllJunglersUseCase
        .execute(count)
        .then((junglers) => res.status(200).json(junglers))
        .catch((error) => HandleError.error(error, res));
    }, 1000);
  };
}
