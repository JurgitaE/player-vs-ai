import Game from './Game.js';

export default function gameLaunch() {
    window.addEventListener('load', () => {
        const canvas = document.getElementById('canvas1');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const game = new Game(canvas, ctx);

        let lastTime = 0;
        function animate(timeStamp) {
            const deltaTime = timeStamp - lastTime;
            lastTime = timeStamp;
            // console.log(deltaTime);

            game.render(deltaTime);

            requestAnimationFrame(animate);
        }
        requestAnimationFrame(animate);
    });
}
