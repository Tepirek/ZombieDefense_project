class Player {
    constructor(ctx) {
        this.position = {
            x: 200,
            y: 350
        }
        this.ctx = ctx;
        this.speed = 20;
        this.gun = new Gun(this, this.ctx);
    };
    getGun = () => this.gun;
    clear = () => {
        this.ctx.clearRect(this.position.x, this.position.y, 30, 30);
    }
    draw = () => {
        this.ctx.fillRect(this.position.x, this.position.y, 30, 30);
    };
    move = (keyCode) => {
        this.clear();
        // W - 87, A - 65, S - 83, D - 68
        if(keyCode == 87) {
            this.position.y -= this.speed;
            this.gun.moveGun(0, -this.speed);
        }
        if(keyCode == 65) {
            this.position.x -= this.speed;
            this.gun.moveGun(-this.speed, 0);
        }
        if(keyCode == 83) {
            this.position.y += this.speed;
            this.gun.moveGun(0, this.speed);
        }
        if(keyCode == 68) {
            this.position.x += this.speed;
            this.gun.moveGun(this.speed, 0);
        }
        this.draw();
    };
};