import InputHandler from './InputHandler.js';

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.input = new InputHandler(this);

        this.resize(window.innerWidth, window.innerHeight);
    }

    resize(width, height) {
        this.canvas.width = Math.floor(width);
        this.canvas.height = Math.floor(height);
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        this.ctx.fillStyle = 'blue';

        this.render();
    }

    render() {
        this.ctx.clearRect(0, 0, this.width, this.height);
        this.ctx.fillRect(200, 100, 100, 150);
    }
}

export default Game;
