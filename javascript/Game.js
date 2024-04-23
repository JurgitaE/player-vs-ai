import InputHandler from './InputHandler.js';
import { Keyboard1 } from './Player.js';

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
        this.eventInterval = 400;
        this.eventUpdate = false;

        this.input = new InputHandler(this);
        this.player = new Keyboard1(this, 5, 0, 0, 1, 'magenta');

        this.resize(window.innerWidth, window.innerHeight);
    }

    resize(width, height) {
        this.canvas.width = width - (width % this.cellSize);
        this.canvas.height = height - height / this.cellSize;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.columns = Math.floor(this.width / this.cellSize);
        this.rows = Math.floor(this.height / this.cellSize);

        // this.render();
    }

    drawGrid() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                this.ctx.strokeRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
            }
        }
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
            this.player.draw();
            this.player.update();
        }
    }
}

export default Game;
