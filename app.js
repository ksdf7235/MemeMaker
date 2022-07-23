const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.lineWidth = 2;
ctx.moveTo(0, 0);

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "purple"];

function onClick(e) {
  ctx.beginPath();
  ctx.moveTo(0, 0);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.strokeStyle = color;
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
}

canvas.addEventListener("mousemove", onClick);
