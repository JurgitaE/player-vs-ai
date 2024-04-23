class Player {
    constructor(game, x, y, speedX, speedY, color) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.color = color;
        this.width = this.game.cellSize;
        this.height = this.game.cellSize;
        this.moving = true;
    }
    update() {
        if (
            (this.x <= 0 && this.speedX < 0) ||
            (this.x >= this.game.columns - 1 && this.speedX > 0) ||
            (this.y <= 0 && this.speedY < 0) ||
            (this.y >= this.game.rows - 1 && this.speedY > 0)
        ) {
            this.moving = false;
        }
        if (this.moving) {
            this.x += this.speedX;
            this.y += this.speedY;
        }
    }
    draw() {
        this.game.ctx.fillStyle = this.color;
        this.game.ctx.fillRect(this.x * this.game.cellSize, this.y * this.game.cellSize, this.width, this.height);
    }
    turnUp() {
        this.speedY = -1;
        this.speedX = 0;
        this.moving = true;
    }
    turnDown() {
        this.speedY = 1;
        this.speedX = 0;
        this.moving = true;
    }
    turnLeft() {
        this.speedY = 0;
        this.speedX = -1;
        this.moving = true;
    }
    turnRight() {
        this.speedY = 0;
        this.speedX = 1;
        this.moving = true;
    }
}

class Keyboard1 extends Player {
    constructor(game, x, y, speedX, speedY, color) {
        super(game, x, y, speedX, speedY, color);
        window.addEventListener('keydown', e => {
            if (e.key === 'ArrowRight') this.turnRight();
            if (e.key === 'ArrowLeft') this.turnLeft();
            if (e.key === 'ArrowUp') this.turnUp();
            if (e.key === 'ArrowDown') this.turnDown();
        });
    }
}
export { Keyboard1 };
