export class LevelManager {
    constructor(scene) {
        this.scene = scene;
        this.tileSize = 4; // Tamanho de cada "bloco" do mapa
        // 0: Vazio, 1: Parede, 2: Inimigo, 3: Pickup de Vida
        this.mapLayout = [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 3, 1],
            [1, 0, 1, 1, 0, 2, 1, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 0, 1],
            [1, 2, 1, 0, 1, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 3, 0, 1],
            [1, 0, 0, 0, 0, 0, 1, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];
        this.collidables = [];
        this.enemyPositions = [];
        this.pickupPositions = [];
    }

    buildLevel() {
        const wallTexture = this.createPixelTexture(16, '#888', '#666');
        const floorTexture = this.createPixelTexture(16, '#555', '#444');
        const ceilingTexture = this.createPixelTexture(16, '#777', '#5a5a5a');

        const wallMaterial = new THREE.MeshLambertMaterial({ map: wallTexture });
        const floorMaterial = new THREE.MeshLambertMaterial({ map: floorTexture });
        const ceilingMaterial = new THREE.MeshLambertMaterial({ map: ceilingTexture });
        
        const mapHeight = this.mapLayout.length;
        const mapWidth = this.mapLayout[0].length;

        // Gerar Paredes, Inimigos e Pickups
        this.mapLayout.forEach((row, z) => {
            row.forEach((tile, x) => {
                const worldX = (x - mapWidth / 2) * this.tileSize;
                const worldZ = (z - mapHeight / 2) * this.tileSize;

                if (tile === 1) {
                    const wallGeo = new THREE.BoxGeometry(this.tileSize, this.tileSize, this.tileSize);
                    const wall = new THREE.Mesh(wallGeo, wallMaterial);
                    wall.position.set(worldX, this.tileSize / 2, worldZ);
                    this.scene.add(wall);
                    this.collidables.push(wall);
                } else if (tile === 2) {
                    this.enemyPositions.push(new THREE.Vector3(worldX, 1, worldZ));
                } else if (tile === 3) {
                    this.pickupPositions.push(new THREE.Vector3(worldX, 1, worldZ));
                }
            });
        });

        // Chão e Teto
        const floorGeo = new THREE.PlaneGeometry(mapWidth * this.tileSize, mapHeight * this.tileSize);
        const floor = new THREE.Mesh(floorGeo, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        this.scene.add(floor);

        const ceiling = new THREE.Mesh(floorGeo, ceilingMaterial);
        ceiling.position.y = this.tileSize;
        ceiling.rotation.x = Math.PI / 2;
        this.scene.add(ceiling);

        return this.collidables;
    }
    
    // Funções para a classe Game obter as posições
    getEnemyPositions() { return this.enemyPositions; }
    getPickupPositions() { return this.pickupPositions; }

    // Gera uma textura pixelada procedural
    createPixelTexture(size, color1, color2) {
        const canvas = document.createElement('canvas');
        canvas.width = size;
        canvas.height = size;
        const context = canvas.getContext('2d');
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                context.fillStyle = Math.random() > 0.5 ? color1 : color2;
                context.fillRect(i, j, 1, 1);
            }
        }
        const texture = new THREE.CanvasTexture(canvas);
        texture.magFilter = THREE.NearestFilter; // Mantém o visual pixelado
        texture.minFilter = THREE.NearestFilter;
        return texture;
    }
}