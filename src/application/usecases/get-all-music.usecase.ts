import { Music } from "../../domain/models/music.model";
import { MusicRepository } from "../../domain/repositories/music.repository";

export class GetAllMusicUseCase {
  constructor(private readonly musicRepository: MusicRepository) {}

  execute(countMusic: number): Promise<Music[]> {
    return this.musicRepository.getAll(countMusic);
  }
}
