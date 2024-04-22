import InputHandler from './InputHandler.js';
import Player from './Player.js';

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width;
        this.height;

        this.input = new InputHandler(this);
        this.player = new Player(this, 0, 0, 1, 0);

        this.cellSize = 50;
        this.columns;
        this.rows;

        this.resize(window.innerWidth, window.innerHeight);
    }

    resize(width, height) {
        this.canvas.width = width - (width % this.cellSize);
        this.canvas.height = height - height / this.cellSize;
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx.fillStyle = 'blue';

        this.columns = Math.floor(this.width / this.cellSize);
        this.rows = Math.floor(this.height / this.cellSize);

        this.render();
    }

    drawGrid() {
        for (let y = 0; y < this.rows; y++) {
            for (let x = 0; x < this.columns; x++) {
                this.ctx.strokeRect(x * this.cellSize, y * this.cellSize, this.cellSize, this.cellSize);
            }
        }
    }

    render() {
        this.drawGrid();
        // this.player.update();
        // this.player.draw();
    }
}

export default Game;
