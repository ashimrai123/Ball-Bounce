
/**
 *
 * @param {number} canvasWidth
 * @param {number} canvasHeight
 * @returns {Object}
 * @property {number} x
 * @property {number} y
 * @property {number} radius
 * @property {number} dx
 * @property {number} dy
 * @property {string} color 
 */
function createRandomBall(canvasWidth, canvasHeight) {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    return {
        x: getRandomNumber(0, canvasWidth),
        y: getRandomNumber(0, canvasHeight),
        radius: getRandomNumber(10, 30),
        dx: getRandomSign() * getRandomNumber(1, 3), 
        dy: getRandomSign() * getRandomNumber(1, 3), 
        color: randomColor,
    };
}


/**
 *
 * @param {Object} ball1 
 * @param {Object} ball2 
 * @returns {boolean} 
 */
function checkCollision(ball1, ball2) {
    const distance = Math.sqrt((ball1.x - ball2.x)**2 + (ball1.y - ball2.y)**2);
    return distance < ball1.radius + ball2.radius;
}


/**
 *
 * @param {Array} balls 
 */
function handleCollisions(balls) {
    for (let i = 0; i < balls.length; i++) {
        for (let j = i + 1; j < balls.length; j++) {
            if (checkCollision(balls[i], balls[j])) {
                [balls[i].dx, balls[j].dx] = [balls[j].dx, balls[i].dx];
                [balls[i].dy, balls[j].dy] = [balls[j].dy, balls[i].dy];
            }
        }
    }
}

