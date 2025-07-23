export class UIManager {
    constructor() {
        this.healthElement = document.getElementById('health');
        this.armorElement = document.getElementById('armor');
    }

    update(player) {
        this.healthElement.textContent = `VIDA: ${player.health}`;
        this.armorElement.textContent = `ARMADURA: ${player.armor}`;
    }
}