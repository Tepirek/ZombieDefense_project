class Player extends GameObject {
    constructor() {
        super(200, 400, 20, '../img/tank01.png');
        this.dimension = { width: 96, height: 96 };
        this.gun = new Gun(this.position.x + 40, this.position.y - 40, this.speed);
        this.draw();
        this.gun.draw();
    };

    movePlayer = (keyCode) => {
        // W - 87, A - 65, S - 83, D - 68, SPACEBAR - 32
        if(keyCode == 87) {
            this.move(0, -1);
            this.gun.move(0, -1);
        }
        if(keyCode == 65) {
            this.move(-1, 0);
            this.gun.move(-1, 0);
        }
        if(keyCode == 83) {
            this.move(0, 1);
            this.gun.move(0, 1);
        }
        if(keyCode == 68) {
            this.move(1, 0);
            this.gun.move(1, 0);
        }
        if(keyCode == 32) {
            if(this.gun.canShoot()) this.gun.shoot();
        }
    };
};