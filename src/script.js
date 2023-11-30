const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;

const balls = Array.from({ length: 20 }, () => createRandomBall(canvasWidth, canvasHeight));

function drawBall(ball) {
    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fillStyle = ball.color; 
    ctx.fill();
    ctx.closePath();
}

function drawBorder() {
    ctx.strokeStyle = '#000';
    ctx.lineWidth = 2;
    ctx.strokeRect(0, 0, canvasWidth, canvasHeight);
}

function draw() {
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);

    drawBorder();

    handleCollisions(balls);

    balls.forEach((ball) => {
        drawBall(ball);

        ball.x += ball.dx;
        ball.y += ball.dy;
         // Collision with the horizontal walls
        if (ball.x + ball.radius > canvasWidth || ball.x - ball.radius < 0) {
            ball.dx = -ball.dx;
        }

        // Check for collision with the vertical walls
        if (ball.y + ball.radius > canvasHeight || ball.y - ball.radius < 0) {
            ball.dy = -ball.dy;
        }
    });

    requestAnimationFrame(draw);
}

draw();
