import { LevelManager } from './LevelManager.js';
import { PlayerController } from './PlayerController.js';
import { UIManager } from './UIManager.js';
import { Enemy } from './Enemy.js';
import { Weapon } from './Weapon.js';
import { Pickup } from './Pickup.js';

export class Game {
    constructor() {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = new THREE.WebGLRenderer({ canvas: document.getElementById('game-canvas') });
        this.clock = new THREE.Clock();
        this.enemies = [];
        this.pickups = [];
    }

    init() {
        // Configuração do renderizador
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.setPixelRatio(window.devicePixelRatio);

        // Iluminação
        const ambientLight = new THREE.AmbientLight(0x404040, 2); // Luz ambiente
        const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5); // Luz direcional tipo sol
        directionalLight.position.set(5, 10, 7.5);
        this.scene.add(ambientLight, directionalLight);

        // Gerenciador de Nível
        this.levelManager = new LevelManager(this.scene);
        this.collidableObjects = this.levelManager.buildLevel();

        // Jogador
        this.player = new PlayerController(this.camera, this.renderer.domElement, this.scene);
        this.scene.add(this.player.controls.getObject());

        // UI
        this.uiManager = new UIManager();
        
        // Arma
        this.weapon = new Weapon(this.scene, this.camera);

        // Inimigos
        this.levelManager.getEnemyPositions().forEach(pos => {
            const enemy = new Enemy(this.scene, pos, this.camera);
            this.enemies.push(enemy);
            this.collidableObjects.push(enemy.mesh); // Inimigos também são obstáculos
        });

        // Pickups
        this.levelManager.getPickupPositions().forEach(pos => {
            const pickup = new Pickup(this.scene, pos, 'health', 25);
            this.pickups.push(pickup);
        });

        // Event listener para tiro
        window.addEventListener('mousedown', () => {
            if (this.player.controls.isLocked) {
                this.weapon.shoot(this.enemies);
            }
        });

        // Loop de animação
        this.animate();
    }

    animate() {
        requestAnimationFrame(this.animate.bind(this));
        
        const deltaTime = this.clock.getDelta();

        // Atualiza jogador e detecta colisões com pickups
        this.player.update(deltaTime, this.collidableObjects);
        this.checkPickupCollisions();

        // Atualiza inimigos (para billboarding)
        this.enemies.forEach(enemy => enemy.update());

        // Filtra inimigos mortos
        this.enemies = this.enemies.filter(enemy => {
            if (enemy.isDead) {
                // Remove o inimigo da lista de objetos colidíveis também
                const index = this.collidableObjects.indexOf(enemy.mesh);
                if (index > -1) this.collidableObjects.splice(index, 1);
                return false;
            }
            return true;
        });

        // Atualiza UI
        this.uiManager.update(this.player);

        this.renderer.render(this.scene, this.camera);
    }
    
    checkPickupCollisions() {
        this.pickups.forEach((pickup, index) => {
            if (!pickup.isCollected) {
                const distance = this.player.getPosition().distanceTo(pickup.mesh.position);
                if (distance < 1.5) { // Raio de coleta
                    pickup.collect();
                    this.player.addHealth(pickup.value);
                    this.pickups.splice(index, 1); // Remove da lista para não checar mais
                }
            }
        });
    }
}