class Wave {
    constructor(level, ctx, player){
        this.player = player;
        this.ctx = ctx;
        this.level = level;
        this.table = new Array();
<<<<<<< HEAD
        for(let i = 0;i < 10 * level; i++){
            this.table.push(new Creature(this.ctx));
        }
        setInterval(() => {
            this.table.forEach(element => {
                element.move(-1,1);
                element.draw();
            });
          }, 1000/24);
=======
        for(let i = 0;i < 1 * level; i++){
            this.table.push(new Creature(this.ctx, Math.floor((Math.random() * 650) + 140),Math.floor((Math.random() * 500) - 500)));
            this.table[i].run();
        }
>>>>>>> 6ccfa2906be4127ff660881401f0b6950060ff3f
    };
    getLevel = () => this.level;
    getTable = () => this.table;
};



