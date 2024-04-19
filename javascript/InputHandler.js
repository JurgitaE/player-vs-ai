class InputHandler {
    constructor(game) {
        this.game = game;

        window.addEventListener('resize', e =>
            this.game.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight)
        );
    }
}
export default InputHandler;
