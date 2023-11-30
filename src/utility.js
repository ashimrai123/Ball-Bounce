/** 
 * 
 * @param {number} min 
 * @param {number} max 
 * @returns {number} 
 */
function getRandomNumber(min, max) {
    return min + Math.random() * (max - min);
}


/**
 *
 * @returns {number} 
 */
function getRandomSign() {
    return Math.random() < 0.5 ? -1 : 1;
}
