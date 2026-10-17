# Clean Architecture en NodeJS

```
src
├── domain
│   ├── models
│   │   ├── user.entity.ts
│   │   ├── product.entity.ts
│   │   └── personajes.model.ts
│   └── repositories
│       ├── user.repository.ts
│       ├── product.repository.ts
│       └── personaje.repository.ts
│
├── application
│   └── use-cases
│       ├── get-all-users.usecase.ts
│       ├── get-all-products.usecase.ts
│       └── get-all-personajes.usecase.ts
│
├── infrastructure
│   ├── controllers
│   │   ├── user.controller.ts
│   │   ├── product.controller.ts
│   │   └── personajes.controller.ts
│   ├── repositories
│   │   ├── user.repository.impl.ts
│   │   ├── product.repository.impl.ts
│   │   └── personaje.repository.impl.ts
│   ├── datasources
│   │   ├── user.datasource.ts
│   │   ├── product.datasource.ts
│   │   └── personaje.datasource.ts
│   └── web
│       ├── config/
│       ├── errors/
│       ├── interfaces/
│       ├── controllers/
│       ├── routes/
│       │   ├── users.routes.ts
│       │   ├── products.routes.ts
│       │   └── personajes.routes.ts
│       └── server.ts
│
└── app.ts
```

## Paso 1 - Crear Modelos

```
src//domain/models/
├── user.model.ts
├── product.model.ts
└── personajes.model.ts
```

## Paso 2 - Crear Repositorios

```
src/domain/repositories/
├── user.repository.ts
├── product.repository.ts
└── personaje.repository.ts
```

## Paso 3 - Crear Casos de Uso

```
src/application/usecases/
├── get-all-users.usecase.ts
├── get-all-products.usecase.ts
└── get-all-personajes.usecase.ts
```

## Paso 4 - Crear Datasources

```
src/infrastructure/datasource/
├── user.datasource.ts
├── product.datasource.ts
└── personaje.datasource.ts
```

## Paso 5 - Crear Repositorios Implementadores

```
src/infrastructure/repositories/
├── user.repository.impl.ts
├── product.repository.impl.ts
└── personaje.repository.impl.ts
```

## Paso 6 - Implementar Web (Express – Framework Externo)

```
src/infrastructure/web/
├── config/
├── errors/
├── interfaces/
├── controllers/
├── routes/
└── server.ts
```

# Funcionamiento del Backend

## Ejecutar Backend
```
npm run start
```

## Urls Consumo
```
http://localhost:3000/api/docs
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/personajes/{countPersonajes}
http://localhost:3000/api/music/{countMusic}
```

## Módulo de música

`GET /api/music/{countMusic}` genera una lista de canciones simuladas. El parámetro
`countMusic` debe ser un entero positivo seguro. Cada canción contiene `id`,
`title`, `artist`, `album`, `genre` y `duration` (en segundos).

La especificación OpenAPI y la interfaz interactiva están disponibles en
`http://localhost:3000/api/docs`.

El módulo sigue las capas de Clean Architecture:

- `src/domain/models/music.model.ts`: modelo de canción.
- `src/domain/repositories/music.repository.ts`: contrato del repositorio.
- `src/application/usecases/get-all-music.usecase.ts`: caso de uso de consulta.
- `src/infrastructure/datasources/music.datasource.ts`: generación de datos simulados.
- `src/infrastructure/repositories/music.repository.impl.ts`: implementación del contrato.
- `src/infrastructure/web/routes/routes.ts`: composición global de dependencias y registro de rutas.
- `src/infrastructure/web/routes/music.routes.ts`: ruta HTTP del módulo.
- `src/infrastructure/web/controllers/music.controller.ts`: validación del parámetro y respuesta HTTP.

## Pruebas unitarias

Ejecuta `npm test` para correr las pruebas unitarias del módulo de música. El
comando mide la cobertura de sus casos de uso, datasource, repositorio y
controlador, y exige al menos un 90 % de cobertura de líneas.
