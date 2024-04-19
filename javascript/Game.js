import InputHandler from './InputHandler.js';

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.input = new InputHandler(this);
    }

    resize(width, height) {
        this.canvas.width = Math.floor(width);
        this.width = this.canvas.width;
        this.canvas.height = Math.floor(height);
        this.height = this.canvas.height;
    }
}

export default Game;
