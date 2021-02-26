class Creature extends GameObject{
    constructor(ctx,x,y) {
        super(x, y, 20, '../img/zombie01.png');
        this.x = x;
        this.y = y;
        this.life = 50;
        this.strength = 5;
        this.speed = Math.floor((Math.random() * 4) + 1);
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
        this.position.y += y * this.speed;
        this.draw();
    };


    run = function() {
        this.draw();
        let int = setInterval(() => {
            this.move(0,1);
           
            if(this.y >= 200) {
                document.body.removeChild(this.gameObject);
                delete this;
                clearInterval(int);
                console.log(this.y)
            }
        }, 1000/24);
    }
    getX = () => this.x;
    getY = () => this.y;
    getLife = () => this.life;
    getSpeed = () => this.speed;
    getStrength = () => this.strength;
};