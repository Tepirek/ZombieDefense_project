class Bullet extends GameObject {
    constructor(x, y) {
        super(x, y, 5, '../img/tank01.png');
        this.dimension = { width: 10, height: 10 };
        this.damage = 5;
    };
    run = function() {
        this.draw();
        let int = setInterval(() => {
            this.move(0, -1);
            if(this.position.y <= -1) {
                document.body.removeChild(this.gameObject);
                delete this;
                clearInterval(int);
            }
        }, 1000/24);
    }
};