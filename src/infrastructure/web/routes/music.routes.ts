import { Router } from "express";
import { MusicController } from "../controllers/music.controller";

export class MusicRoutes {
  static createRoutes(controller: MusicController): Router {
    const router = Router();

    /**
     * @openapi
     * /api/music/{countMusic}:
     *   get:
     *     summary: Obtener canciones simuladas
     *     description: Retorna la cantidad solicitada de canciones con datos simulados para desarrollo.
     *     tags:
     *       - Música
     *     parameters:
     *       - in: path
     *         name: countMusic
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de canciones que se desea generar
     *     responses:
     *       200:
     *         description: Lista de canciones generadas
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Music'
     *       400:
     *         description: La cantidad debe ser un entero positivo seguro
     *       500:
     *         description: Error interno al generar las canciones
     */
    router.get("/:countMusic", controller.getAllMusic);

    return router;
  }
}
