var canvas = document.getElementById("game");
var ctx = canvas.getContext("2d");

console.log(canvas)

ctx.beginPath();
ctx.moveTo(250, 200);
ctx.lineTo(250, 400);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(250, 350);
ctx.lineTo(200, 350);
ctx.lineTo(250, 200);
ctx.stroke();
ctx.fillStyle = "silver";
ctx.fill();

