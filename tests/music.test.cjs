const assert = require("node:assert/strict");
const { test, describe } = require("node:test");
const { GetAllMusicUseCase } = require("../src/application/usecases/get-all-music.usecase");
const { MusicDatasource } = require("../src/infrastructure/datasources/music.datasource");
const { MusicRepositoryImpl } = require("../src/infrastructure/repositories/music.repository.impl");
const { MusicController } = require("../src/infrastructure/web/controllers/music.controller");
const { swaggerSpec } = require("../src/infrastructure/web/config/swagger");

describe("Caso de uso de consulta de música", () => {
  test("delega la cantidad solicitada al repositorio", async () => {
    const songs = [{ id: 1, title: "Canción", artist: "Artista", album: "Álbum", genre: "Pop", duration: 180 }];
    let requestedCount;
    const repository = {
      getAll: async (count) => {
        requestedCount = count;
        return songs;
      },
    };

    const result = await new GetAllMusicUseCase(repository).execute(1);

    assert.equal(requestedCount, 1);
    assert.equal(result, songs);
  });
});

describe("Implementación del repositorio de música", () => {
  test("delega la cantidad solicitada al datasource", async () => {
    const songs = [{ id: 1 }];
    let requestedCount;
    const datasource = {
      getAll: async (count) => {
        requestedCount = count;
        return songs;
      },
    };

    const result = await new MusicRepositoryImpl(datasource).getAll(2);

    assert.equal(requestedCount, 2);
    assert.equal(result, songs);
  });
});

describe("Datasource de música", () => {
  test("genera la cantidad solicitada con todos los campos válidos", async () => {
    const songs = await new MusicDatasource().getAll(4);

    assert.equal(songs.length, 4);
    for (const [index, song] of songs.entries()) {
      assert.equal(song.id, index + 1);
      assert.equal(typeof song.title, "string");
      assert.equal(typeof song.artist, "string");
      assert.equal(typeof song.album, "string");
      assert.equal(typeof song.genre, "string");
      assert.ok(Number.isInteger(song.duration));
      assert.ok(song.duration >= 90 && song.duration <= 420);
    }
  });

  test("devuelve una lista vacía si se solicitan cero canciones", async () => {
    assert.deepEqual(await new MusicDatasource().getAll(0), []);
  });
});

describe("Controlador de música", () => {
  function createResponse() {
    return {
      statusCode: undefined,
      body: undefined,
      status(code) {
        this.statusCode = code;
        return this;
      },
      json(body) {
        this.body = body;
        return this;
      },
    };
  }

  test("devuelve las canciones solicitadas con HTTP 200", async () => {
    const songs = [{ id: 1, title: "Canción" }];
    let requestedCount;
    const useCase = {
      execute: async (count) => {
        requestedCount = count;
        return songs;
      },
    };
    const response = createResponse();

    await new MusicController(useCase).getAllMusic(
      { params: { countMusic: "3" } },
      response,
    );

    assert.equal(requestedCount, 3);
    assert.equal(response.statusCode, 200);
    assert.equal(response.body, songs);
  });

  test("rechaza cantidades cero, no numéricas y fuera del rango seguro", async (context) => {
    const useCase = { execute: context.mock.fn() };
    const controller = new MusicController(useCase);

    for (const countMusic of ["0", "abc", "9007199254740992"]) {
      const response = createResponse();
      await controller.getAllMusic({ params: { countMusic } }, response);

      assert.equal(response.statusCode, 400);
      assert.deepEqual(response.body, {
        error: "countMusic debe ser un entero positivo",
      });
    }

    assert.equal(useCase.execute.mock.callCount(), 0);
  });

  test("envía los errores inesperados al manejador compartido", async () => {
    const response = createResponse();
    const originalLog = console.log;
    console.log = () => {};

    try {
      await new MusicController({
        execute: async () => {
          throw new Error("fallo de prueba");
        },
      }).getAllMusic({ params: { countMusic: "1" } }, response);
    } finally {
      console.log = originalLog;
    }

    assert.equal(response.statusCode, 500);
    assert.deepEqual(response.body, { error: "Internal Server error" });
  });
});

describe("Documentación OpenAPI de música", () => {
  test("publica la ruta y el esquema completos", () => {
    const operation = swaggerSpec.paths["/api/music/{countMusic}"].get;
    const schema = swaggerSpec.components.schemas.Music;

    assert.equal(operation.parameters[0].name, "countMusic");
    assert.equal(operation.tags[0], "Música");
    assert.equal(
      operation.responses[200].content["application/json"].schema.items.$ref,
      "#/components/schemas/Music",
    );
    assert.deepEqual(schema.required, [
      "id",
      "title",
      "artist",
      "album",
      "genre",
      "duration",
    ]);
  });
});
