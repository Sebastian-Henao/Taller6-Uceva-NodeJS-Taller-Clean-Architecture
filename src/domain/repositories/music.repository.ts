import { Music } from "../models/music.model";

export abstract class MusicRepository {
  abstract getAll(countMusic: number): Promise<Music[]>;
}
