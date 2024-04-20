import InputHandler from './InputHandler.js';
import Player from './Player.js';

class Game {
    constructor(canvas, context) {
        this.canvas = canvas;
        this.ctx = context;
        this.width = this.canvas.width;
        this.height = this.canvas.height;

        this.input = new InputHandler(this);
        this.player = new Player(this, 0, 0, 1, 0);

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
        // this.player.update();
        // this.player.draw();
    }
}

export default Game;
