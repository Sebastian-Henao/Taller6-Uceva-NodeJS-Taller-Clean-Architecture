import { Music } from "../../domain/models/music.model";
import { MusicRepository } from "../../domain/repositories/music.repository";
import { MusicDatasource } from "../datasources/music.datasource";

export class MusicRepositoryImpl extends MusicRepository {
  constructor(private readonly datasource: MusicDatasource) {
    super();
  }

  getAll(countMusic: number): Promise<Music[]> {
    return this.datasource.getAll(countMusic);
  }
}
