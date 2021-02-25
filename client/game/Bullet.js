class Bullet extends GameObject {
    constructor(x, y) {
        super(x, y, 5, '../img/tank01.png');
        this.dimension = { width: 5, height: 5 };
        this.damage = 5;
    };
    run = function() {
        this.draw();
        setInterval(() => {
            this.move(0, -1);
            if(this.position.y <= 100) {
                this.gameObject.parent.removeChild(this.GameObject);
            }
        }, 1000/24);
    }
};