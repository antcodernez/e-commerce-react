/**
 * This function calculates total price of a new order
 * @param {Array} products cartProduct:Array of Objects 
 * @returns {Number} total price 
 */

const totalPrice = (products) => products.reduce((sum, product) => sum + product.price, 0)

export {totalPrice}