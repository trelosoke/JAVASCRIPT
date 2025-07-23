import { Game } from './Game.js';

// Garante que o DOM está carregado antes de iniciar o jogo
window.addEventListener('DOMContentLoaded', () => {
    const game = new Game();
    game.init();
});