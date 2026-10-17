import { Router } from "express";
import { UsersRoutes } from "./users.routes";
import { ProductsRoutes } from "./products.routes";
import { PersonajesRoutes } from "./personajes.routes";
import { MusicRoutes } from "./music.routes";
import { MusicDatasource } from "../../datasources/music.datasource";
import { MusicRepositoryImpl } from "../../repositories/music.repository.impl";
import { GetAllMusicUseCase } from "../../../application/usecases/get-all-music.usecase";
import { MusicController } from "../controllers/music.controller";

/**
 * Clase encargada de centralizar todas las rutas de la aplicación.
 *
 * @remarks
 * Proporciona un único punto de acceso a los endpoints
 * del backend, agrupando los módulos de usuarios, productos, personajes y música.
 *
 * @example
 * ```ts
 * import express from 'express';
 * import { AppRoutes } from './app.routes';
 *
 * const app = express();
 * app.use(AppRoutes.routes);
 * ```
 */
export class AppRoutes {

  /**
   * Devuelve el router principal de la aplicación.
   *
   * @returns Router de Express con todas las rutas registradas
   */
  static get routes(): Router {
    const router = Router();
    const musicRepository = new MusicRepositoryImpl(new MusicDatasource());
    const getAllMusic = new GetAllMusicUseCase(musicRepository);
    const musicController = new MusicController(getAllMusic);

    // Composición global de dependencias y registro de rutas.
    router.use("/api/users", UsersRoutes.routes);
    router.use("/api/products", ProductsRoutes.routes);
    router.use("/api/personajes", PersonajesRoutes.routes);
    router.use("/api/music", MusicRoutes.createRoutes(musicController));

    return router;
  }
}