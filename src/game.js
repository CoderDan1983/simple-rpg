export class Game {
    constructor(canvas, ctx) {
        this.canvas = canvas;
        this.ctx = ctx;
        this.running = false;
    }

    start() {
        this.running = true;
        console.log("Game started!");
        this.loop();
    }

    loop() {
        if (!this.running) return;

        // Clear screen
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Placeholder rendering
        this.ctx.fillStyle = "white";
        this.ctx.font = "20px Arial";
        this.ctx.fillText("Game Framework Active", 280, 300);

        requestAnimationFrame(() => this.loop());
    }
}