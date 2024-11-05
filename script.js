const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 400;
canvas.height = 400;

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  for(let i = 1; i <= 10 ; i++)
  {
    ctx.fillText(i, 10, 30 * i);
  }
}

setInterval(draw, 1000 / 60); // Run game loop at 60 FPS
