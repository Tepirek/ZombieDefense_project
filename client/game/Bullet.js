class Bullet {
    constructor(x, y, mx, my, ctx) {
        this.position = {
            x: x,
            y: y
        };
        this.mx = mx;
        this.my = my;
        this.ctx = ctx;
    };
    move = () => {
        this.ctx.clearRect(this.position.x, this.position.y, 5, 5);
        this.position.x += Math.floor(this.mx);
        this.position.y += Math.floor(this.my);
        this.ctx.fillRect(this.position.x, this.position.y, 5, 5);
    };
};