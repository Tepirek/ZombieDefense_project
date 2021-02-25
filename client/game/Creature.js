class Creature extends GameObject {
    constructor(ctx,x,y) {
        super(x,y, 20, '../img/zombie01.png');
        this.life = 50;
        this.strength = 5;
        this.speed = Math.floor((Math.random() * 4) + 1);
        this.ctx = ctx;
    }
    
    getLife = () => this.life;
    getSpeed = () => this.speed;
    getStrength = () => this.strength;
};