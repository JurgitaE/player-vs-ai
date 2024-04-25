import { Food } from './Food.js';
import InputHandler from './InputHandler.js';
import { ArrowKeyboard, WsadKeyboard, ComputerAi } from './Player.js';
import UI from './UI.js';

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width;
        this.height;

        this.cellSize = 50;
        this.columns;
        this.rows;

        this.eventTimer = 0;
        this.eventInterval = 200;
        this.eventUpdate = false;

        this.input = new InputHandler(this);
        this.player1;
        this.player2;
        this.player3;
        this.food;
        this.gameObjects;
        this.ui = new UI(this);

        this.resize(window.innerWidth, window.innerHeight);
    }

    resize(width, height) {
        this.canvas.width = width - (width % this.cellSize);
        this.canvas.height = height - (height % this.cellSize);
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx.font = `${(this.cellSize / 5) * 3}px Impact`;
        this.ctx.textBaseline = 'top';

        this.columns = Math.floor(this.width / this.cellSize);
        this.rows = Math.floor(this.height / this.cellSize);

        this.player1 = new ArrowKeyboard(this, 0, 0, 1, 0, 'magenta');
        this.player2 = new WsadKeyboard(this, this.columns - 1, 0, 0, 1, 'orange');
        this.player3 = new ComputerAi(this, this.columns - 1, this.rows - 1, -1, 0, 'blue');
        this.player4 = new ComputerAi(this, 0, this.rows - 1, 0, -1, 'yellow');
        this.food = new Food(this);
        this.gameObjects = [this.player1, this.player2, this.player3, this.player4, this.food];

        // this.render();
    }

    drawGrid() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                this.ctx.strokeRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
            }
        }
    }

    checkCollision(a, b) {
        return a.x === b.x && a.y === b.y;
    }

    handlePeriodicEvents(deltaTime) {
        if (this.eventTimer < this.eventInterval) {
            this.eventTimer += deltaTime;
            this.eventUpdate = false;
        } else {
            this.eventTimer = 0;
            this.eventUpdate = true;
        }
    }

    render(deltaTime) {
        this.handlePeriodicEvents(deltaTime);
        if (this.eventUpdate) {
            this.ctx.clearRect(0, 0, this.width, this.height);
            this.drawGrid();

            this.gameObjects.forEach(object => {
                object.draw();
                object.update();
            });
            this.ui.drawStatusText();
        }
    }
}

export default Game;
