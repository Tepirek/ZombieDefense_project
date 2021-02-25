class Creature {
    constructor(ctx) {
        this.position = {
            x: Math.floor((Math.random() * 400) + 1),
            y: Math.floor((Math.random() * 400) - 400),
        };
        this.life = 50;
        this.strength = 5;
        this.speed = 1;
        this.ctx = ctx;
    }
    clear = () => {
        this.ctx.clearRect(this.position.x, this.position.y, 10, 10);
    }
    draw = () => {
        this.ctx.fillRect(this.position.x, this.position.y, 10, 10);
    };
    move = (x, y) => {
        this.clear();
       // this.position.x += x * this.speed; może byc jesli beda sie odbijaly od scian 
        this.position.y -= y * this.speed;
        this.draw();
    };
};