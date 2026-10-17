import { Request, Response } from "express";
import { GetAllMusicUseCase } from "../../../application/usecases/get-all-music.usecase";
import { HandleError } from "../erros/handle.error";

export class MusicController {
  constructor(private readonly getAllMusicUseCase: GetAllMusicUseCase) {}

  getAllMusic = async (req: Request, res: Response): Promise<void> => {
    const countMusic = Number(req.params.countMusic);

    if (!Number.isSafeInteger(countMusic) || countMusic < 1) {
      res.status(400).json({
        error: "countMusic debe ser un entero positivo",
      });
      return;
    }

    try {
      const music = await this.getAllMusicUseCase.execute(countMusic);
      res.status(200).json(music);
    } catch (error) {
      HandleError.error(error, res);
    }
  };
}
