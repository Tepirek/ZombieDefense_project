class Wave {
    constructor(level, ctx, player){
        this.player = player;
        this.ctx = ctx;
        this.level = level;
        this.table = new Array();
        for(let i = 0;i < 10 * level; i++){
            this.position = {
                x: Math.floor((Math.random() * 700) + 140),
                y: Math.floor((Math.random() * 500) - 500),
            };
            this.table.push(new Creature(this.ctx,this.position.x,this.position.y));
            this.table[i].run();
        };
    };
    getLevel = () => this.level;
    getTable = () => this.table;
};



