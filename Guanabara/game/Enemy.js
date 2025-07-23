export class Enemy {
    constructor(scene, position, camera) {
        this.scene = scene;
        this.camera = camera; // Para o billboarding
        this.health = 100;
        this.isDead = false;

        const enemyTexture = this.createEnemyTexture();
        const material = new THREE.MeshBasicMaterial({ 
            map: enemyTexture, 
            transparent: true,
            side: THREE.DoubleSide
        });
        const geometry = new THREE.PlaneGeometry(2, 2);
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(position);
        
        // Link para a instância da classe para ser acessado pelo raycast
        this.mesh.userData.parent = this;
        
        this.scene.add(this.mesh);
    }

    takeDamage(amount) {
        if (this.isDead) return;
        this.health -= amount;
        console.log(`Inimigo atingido! Vida restante: ${this.health}`);
        if (this.health <= 0) {
            this.die();
        }
    }

    die() {
        this.isDead = true;
        this.scene.remove(this.mesh);
        console.log("Inimigo derrotado!");
    }

    update() {
        if (!this.isDead) {
            // Billboarding: faz o sprite sempre encarar a câmera
            this.mesh.lookAt(this.camera.position);
        }
    }

    createEnemyTexture() {
        const canvas = document.createElement('canvas');
        canvas.width = 64;
        canvas.height = 64;
        const ctx = canvas.getContext('2d');
        // Corpo
        ctx.fillStyle = 'red';
        ctx.fillRect(16, 16, 32, 48);
        // Cabeça
        ctx.fillStyle = '#c00';
        ctx.fillRect(24, 4, 16, 16);
        // Olho
        ctx.fillStyle = 'yellow';
        ctx.fillRect(28, 8, 8, 8);
        
        const texture = new THREE.CanvasTexture(canvas);
        texture.magFilter = THREE.NearestFilter;
        texture.minFilter = THREE.NearestFilter;
        return texture;
    }
}