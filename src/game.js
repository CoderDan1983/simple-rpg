import { Player } from "./entities/player.js";
import { InputHandler } from "./systems/input.js";

export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.running = false;

        this.input = new InputHandler();
        this.player = new Player(100, 100);
    }

    start() {
        this.running = true;
        console.log("Game started!");
        this.loop();
    }

    loop() {
        if (!this.running) return;

        // Clear
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Update player
        this.player.update(this.input.getKeys());
        this.player.draw(this.ctx);

        // Display player info (temporary)
        this.ctx.fillStyle = "white";
        this.ctx.font = "16px Arial";
        this.ctx.fillText(`Health: ${this.player.health}`, 10, 20);
        this.ctx.fillText(`Mana: ${this.player.mana}`, 10, 40);

        requestAnimationFrame(() => this.loop());
    }
}