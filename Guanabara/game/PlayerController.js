export class PlayerController {
    constructor(camera, domElement, scene) {
        this.camera = camera;
        this.controls = new THREE.PointerLockControls(camera, domElement);
        this.scene = scene;

        // Bloqueia o cursor ao clicar
        const blocker = document.getElementById('blocker');
        const instructions = document.getElementById('instructions');
        domElement.addEventListener('click', () => this.controls.lock());
        this.controls.addEventListener('lock', () => blocker.style.display = 'none');
        this.controls.addEventListener('unlock', () => blocker.style.display = 'flex');

        this.health = 100;
        this.armor = 0;
        
        this.velocity = new THREE.Vector3();
        this.direction = new THREE.Vector3();
        this.movementSpeed = 20.0;
        this.gravity = 30.0;

        this.keys = {
            forward: false,
            backward: false,
            left: false,
            right: false,
        };

        document.addEventListener('keydown', (e) => this.onKey(e.code, true));
        document.addEventListener('keyup', (e) => this.onKey(e.code, false));

        // Posição inicial do jogador
        this.controls.getObject().position.set(0, 2, 0);
    }

    onKey(code, isPressed) {
        switch (code) {
            case 'KeyW': case 'ArrowUp': this.keys.forward = isPressed; break;
            case 'KeyS': case 'ArrowDown': this.keys.backward = isPressed; break;
            case 'KeyA': case 'ArrowLeft': this.keys.left = isPressed; break;
            case 'KeyD': case 'ArrowRight': this.keys.right = isPressed; break;
        }
    }

    update(deltaTime, collidables) {
        if (!this.controls.isLocked) return;
        
        const prevPosition = this.controls.getObject().position.clone();

        // Aplicar "gravidade" simples
        this.velocity.y -= this.gravity * deltaTime;
        if (this.controls.getObject().position.y < 2) {
             this.velocity.y = 0;
             this.controls.getObject().position.y = 2; // Simula chão
        }
        
        // Zera a velocidade horizontal
        this.velocity.x = 0;
        this.velocity.z = 0;

        // Calcula a direção do movimento
        this.direction.z = Number(this.keys.forward) - Number(this.keys.backward);
        this.direction.x = Number(this.keys.right) - Number(this.keys.left);
        this.direction.normalize(); // Garante velocidade consistente em todas as direções

        if (this.keys.forward || this.keys.backward) this.velocity.z = this.direction.z * this.movementSpeed;
        if (this.keys.left || this.keys.right) this.velocity.x = this.direction.x * this.movementSpeed;
        
        // Move o jogador
        this.controls.moveForward(-this.velocity.z * deltaTime);
        this.controls.moveRight(this.velocity.x * deltaTime);
        this.controls.getObject().position.y += this.velocity.y * deltaTime;

        // Checagem de colisão simples
        const playerBox = new THREE.Box3().setFromCenterAndSize(this.controls.getObject().position, new THREE.Vector3(1, 2, 1));
        
        for (const object of collidables) {
            const objectBox = new THREE.Box3().setFromObject(object);
            if (playerBox.intersectsBox(objectBox)) {
                // Se colidiu, reverte para a posição anterior
                this.controls.getObject().position.copy(prevPosition);
                break;
            }
        }
    }
    
    getPosition() {
        return this.controls.getObject().position;
    }

    takeDamage(amount) {
        if (this.armor > 0) {
            const absorbed = Math.min(this.armor, amount);
            this.armor -= absorbed;
            amount -= absorbed;
        }
        this.health -= amount;
        if (this.health < 0) this.health = 0;
        console.log(`Vida: ${this.health}, Armadura: ${this.armor}`);
        // TODO: Lógica de morte do jogador
    }

    addHealth(amount) {
        this.health = Math.min(100, this.health + amount);
    }
}