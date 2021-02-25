class Player extends GameObject {
    constructor() {
        super(200, 500, 4, '../img/zombie01.png');
    };

    move = (keyCode) => {
        // W - 87, A - 65, S - 83, D - 68, SPACEBAR - 32
        if(keyCode == 87) {
            this.getInfo();
        }
        if(keyCode == 65) {
            this.position.x -= this.speed;
        }
        if(keyCode == 83) {
        }
        if(keyCode == 68) {
            this.position.x += this.speed;
        }
        if(keyCode == 32) {
        }
    };
};