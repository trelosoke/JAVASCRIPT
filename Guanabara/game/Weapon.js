export class Weapon {
    constructor(scene, camera) {
        this.scene = scene;
        this.camera = camera;
        this.raycaster = new THREE.Raycaster();
        this.damage = 25;
        this.fireRate = 250; // ms
        this.lastFireTime = 0;
    }

    shoot(targets) {
        const now = Date.now();
        if (now - this.lastFireTime < this.fireRate) return;

        this.lastFireTime = now;

        this.raycaster.setFromCamera({ x: 0, y: 0 }, this.camera);
        const intersects = this.raycaster.intersectObjects(targets.map(t => t.mesh));

        if (intersects.length > 0) {
            const hit = intersects[0];
            // userData.parent armazena a referência para a instância da classe Enemy
            if (hit.object.userData.parent) {
                hit.object.userData.parent.takeDamage(this.damage);
            }
        }
    }
}