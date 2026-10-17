import { Router } from "express";
import { JunglerDatasource } from "../../datasources/jungler.datasource";
import { JunglerRepositoryImpl } from "../../repositories/jungler.repository.impl";
import { GetAllJunglersUseCase } from "../../../application/usecases/get-all-junglers.usecase";
import { JunglersController } from "../controllers/junglers.controller";

/**
 * Rutas para el módulo de campeones junglers de League of Legends.
 */
export class JunglersRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new JunglerRepositoryImpl(new JunglerDatasource());
    const getAllJunglers = new GetAllJunglersUseCase(repository);
    const controller = new JunglersController(getAllJunglers);

    /**
     * @openapi
     * /api/junglers/{countJunglers}:
     *   get:
     *     summary: Obtener listado de campeones junglers
     *     description: Retorna una lista de campeones de la jungla de League of Legends según la cantidad solicitada.
     *     tags:
     *       - Junglers
     *     parameters:
     *       - in: path
     *         name: countJunglers
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           maximum: 20
     *           example: 20
     *         description: Cantidad de campeones junglers a obtener
     *     responses:
     *       200:
     *         description: Lista de campeones junglers obtenida exitosamente
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Jungler'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countJunglers", controller.getAllJunglers);

    return router;
  }
}
