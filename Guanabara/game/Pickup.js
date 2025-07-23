export class Pickup {
    constructor(scene, position, type, value) {
        this.scene = scene;
        this.type = type; // 'health' ou 'armor'
        this.value = value;
        this.isCollected = false;

        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshStandardMaterial({ color: this.type === 'health' ? 0x00ff00 : 0x0000ff });
        
        this.mesh = new THREE.Mesh(geometry, material);
        this.mesh.position.copy(position);
        
        this.scene.add(this.mesh);
    }

    collect() {
        this.isCollected = true;
        this.scene.remove(this.mesh);
        console.log(`Coletou ${this.type} (+${this.value})`);
    }
}