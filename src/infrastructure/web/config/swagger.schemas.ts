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
export {};