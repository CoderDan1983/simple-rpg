// const canvas = document.getElementById("gameCanvas");
// const ctx = canvas.getContext("2d");

// function draw() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     ctx.font = "28px Arial";
//     ctx.fillStyle = "#ffffff";
//     ctx.textAlign = "center";
//     ctx.textBaseline = "middle";
//     ctx.fillText("Game Framework Active", canvas.width / 2, canvas.height / 2);
// }

// draw();

import { Game } from "./game.js";

console.log("Initializing Simple RPG...");

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const game = new Game(canvas, ctx);
game.start();