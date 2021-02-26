class Barricade extends GameObject {
    constructor(ctx,x,y,life)
    {
        super(x,y,20,'../img/orzeszek.png');
        this.dimension = { width: 80, height: 96 };
        this.x = x;
        this.y = y;
        this.life = life;
        this.demage = 0;
        this.ctx = ctx;
    }

    getX = () => this.x;
    getY = () => this.y;
    getLife = () => this.life;
    getDemage = () => this.demage;
};