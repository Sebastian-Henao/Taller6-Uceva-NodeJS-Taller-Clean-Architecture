/**
 * @openapi
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       description: Representa un usuario del sistema
 *       required:
 *         - id
 *         - name
 *         - lastName
 *         - age
 *         - email
 *         - engineering
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Carlos
 *         lastName:
 *           type: string
 *           example: Ramírez
 *         age:
 *           type: number
 *           example: 22
 *         email:
 *           type: string
 *           format: email
 *           example: carlos.ramirez@example.com
 *         engineering:
 *           type: string
 *           enum:
 *             - Sistemas
 *             - Electronica
 *             - Biomedica
 *             - Industrial
 *             - Ambiental
 *           example: Sistemas
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       description: Representa un producto del sistema
 *       required:
 *         - id
 *         - name
 *         - category
 *         - price
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Leche entera
 *         category:
 *           type: string
 *           enum:
 *             - Lacteos
 *             - Carnes
 *             - Frutas
 *             - Verduras
 *           example: Lacteos
 *         price:
 *           type: number
 *           example: 4500
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Jungler:
 *       type: object
 *       description: Representa un campeón de la jungla de League of Legends
 *       required:
 *         - id
 *         - name
 *         - title
 *         - role
 *         - difficulty
 *         - region
 *         - description
 *         - mainAbilities
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         name:
 *           type: string
 *           example: Lee Sin
 *         title:
 *           type: string
 *           example: El Monje Ciego
 *         role:
 *           type: string
 *           enum:
 *             - Luchador
 *             - Asesino
 *             - Tanque
 *             - Mago
 *             - Tirador
 *           example: Luchador
 *         difficulty:
 *           type: string
 *           enum:
 *             - Baja
 *             - Media
 *             - Alta
 *           example: Alta
 *         region:
 *           type: string
 *           example: Jonia
 *         description:
 *           type: string
 *           example: Un maestro de las artes marciales de Jonia que canaliza la esencia del dragón.
 *         mainAbilities:
 *           type: string
 *           example: Onda Sónica, Salvaguarda, Tempestad, Ira del Dragón
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Personaje:
 *       type: object
 *       description: Representa un personaje
 *       required:
 *         - id
 *         - nombre
 *         - alias
 *         - juego
 *         - habilidad
 *         - rol
 *       properties:
 *         id:
 *           type: number
 *           example: 1
 *         nombre:
 *           type: string
 *           example: El caballero
 *         alias:
 *           type: string
 *           example: Caballero oscuro
 *         juego:
 *           type: string
 *           example: Hollow Knight
 *         habilidad:
 *           type: string
 *           example: Combate cuerpo a cuerpo
 *         rol:
 *           type: string
 *           enum:
 *             - Vanguardia
 *             - Ladron
 *             - Jefe
 *             - Ilusionista
 *             - Explorador
 *           example: Vanguardia
 */

/**
 * @openapi
 * components:
 *   schemas:
 *     Music:
 *       type: object
 *       description: Representa una canción simulada para el módulo de música
 *       required:
 *         - id
 *         - title
 *         - artist
 *         - album
 *         - genre
 *         - duration
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         title:
 *           type: string
 *           example: Midnight Echoes
 *         artist:
 *           type: string
 *           example: Alex Rivera
 *         album:
 *           type: string
 *           example: City Lights
 *         genre:
 *           type: string
 *           example: Indie
 *         duration:
 *           type: integer
 *           description: Duración en segundos
 *           example: 215
 */
export {};