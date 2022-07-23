const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210, 200, 15, 100);
ctx.fillRect(350, 200, 15, 100);
ctx.fillRect(260, 200, 60, 100);

ctx.arc(285, 150, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.arc(260, 150, 8, 0, 2 * Math.PI);
ctx.arc(310, 150, 8, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();
