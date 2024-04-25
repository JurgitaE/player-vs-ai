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
        this.score = 0;
    }
    update() {
        if (this.game.checkCollision(this, this.game.food)) {
            this.score++;
            this.game.food.reset();
        }
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

class ArrowKeyboard extends Player {
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
class WsadKeyboard extends Player {
    constructor(game, x, y, speedX, speedY, color) {
        super(game, x, y, speedX, speedY, color);
        window.addEventListener('keydown', e => {
            if (e.key.toLowerCase() === 'd') this.turnRight();
            if (e.key.toLowerCase() === 'a') this.turnLeft();
            if (e.key.toLowerCase() === 'w') this.turnUp();
            if (e.key.toLowerCase() === 's') this.turnDown();
        });
    }
}
class ComputerAi extends Player {
    constructor(game, x, y, speedX, speedY, color) {
        super(game, x, y, speedX, speedY, color);
        this.turnTimer = 0;
        this.turnInterval = Math.floor(Math.random() * this.game.columns + 1);
    }
    update() {
        super.update();
        if (this.turnTimer < this.turnInterval) {
            this.turnTimer += 1;
        } else {
            this.turnTimer = 0;
            this.turn();
            this.turnInterval = Math.floor(Math.random() * this.game.columns + 1);
        }
    }

    turn() {
        if (this.speedY === 0) {
            Math.random() < 0.5 ? this.turnUp() : this.turnDown();
        } else if (this.speedX === 0) {
            Math.random() < 0.5 ? this.turnLeft() : this.turnRight();
        }
    }
}
export { ArrowKeyboard, WsadKeyboard, ComputerAi };
