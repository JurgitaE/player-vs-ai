import Game from './Game.js';

export default function gameLaunch() {
    window.addEventListener('load', () => {
        const canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const game = new Game(canvas, ctx);

        function animate() {
            ctx.clearRect(0, 0, game.width, game.height);
            game.render();

            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    });
}
