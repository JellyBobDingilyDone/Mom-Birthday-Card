const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

const stars = [];
const STAR_COUNT = 140;

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

function createStars() {
  stars.length = 0;

  for (let i = 0; i < STAR_COUNT; i += 1) {
    stars.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 1.8 + 0.2,
      speed: Math.random() * 0.25 + 0.05,
      alpha: Math.random() * 0.5 + 0.3,
    });
  }
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (const star of stars) {
    ctx.globalAlpha = star.alpha;
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ffffff";
    ctx.fill();

    star.y += star.speed;

    if (star.y > canvas.height) {
      star.y = -5;
      star.x = Math.random() * canvas.width;
    }
  }

  ctx.globalAlpha = 1;
  requestAnimationFrame(drawStars);
}

resizeCanvas();
createStars();
drawStars();

window.addEventListener("resize", () => {
  resizeCanvas();
  createStars();
});
