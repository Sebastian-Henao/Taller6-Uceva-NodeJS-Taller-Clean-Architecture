import { faker } from "@faker-js/faker";
import { Music } from "../../domain/models/music.model";

export class MusicDatasource {
  async getAll(countMusic: number): Promise<Music[]> {
    return Array.from({ length: countMusic }, (_, index) => ({
      id: index + 1,
      title: faker.music.songName(),
      artist: faker.music.artist(),
      album: faker.music.songName(),
      genre: faker.music.genre(),
      duration: faker.number.int({ min: 90, max: 420 }),
    }));
  }
}
