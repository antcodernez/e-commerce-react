/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct:Array of Objects 
 * @returns {Number} total price 
 */

const totalPrice = (products) => products.reduce((sum, product) => sum + product.price, 0)


/**
 * This function returns a random string
 * @returns {String} random id
 */
const generateId = () => Date.now().toString(32) + Math.random().toString(32).substring(2);
// toString(32) convierte ese número en una cadena en base 32.
// toString(32) convierte ese número en una cadena en base 32.
// substring(2) se utiliza para eliminar el "0." al principio de la cadena generada por Math.random().

//un sistema numérico con una base de 32. El sistema numérico en base 32 utiliza los dígitos 0-9 y las letras a-v (o A-V) para representar los valores.


export {totalPrice, generateId}