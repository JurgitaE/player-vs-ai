class UI {
    constructor(game) {
        this.game = game;
    }

    drawStatusText() {
        this.game.ctx.fillText('P1: ' + this.game.player1.score, this.game.cellSize, this.game.cellSize);
        this.game.ctx.fillText('P2: ' + this.game.player2.score, this.game.cellSize, this.game.cellSize * 2);
        this.game.ctx.fillText('P3: ' + this.game.player3.score, this.game.cellSize, this.game.cellSize * 3);
        this.game.ctx.fillText('P4: ' + this.game.player4.score, this.game.cellSize, this.game.cellSize * 4);
    }
}
export default UI;
