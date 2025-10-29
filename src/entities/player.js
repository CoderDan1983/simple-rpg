export class Player {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 40;
        this.height = 40;
        this.color = "deepskyblue";
        this.speed = 3;

        this.health = 100;
        this.mana = 50;
        this.name = "Hero";
        this.classType = "Warrior";
    }

    update(input) {
        if (input["ArrowUp"]) this.y -= this.speed;
        if (input["ArrowDown"]) this.y += this.speed;
        if (input["ArrowLeft"]) this.x -= this.speed;
        if (input["ArrowRight"]) this.x += this.speed;
    }

    draw(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}
