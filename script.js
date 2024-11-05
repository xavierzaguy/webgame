const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'blue';
  ctx.fillRect(50, 50, 100, 100); // Example rectangle
}

setInterval(draw, 1000 / 60); // Run game loop at 60 FPS
