class Wave {
    constructor(level, ctx, player){
        this.player = player;
        this.ctx = ctx;
        this.level = level;
        this.table = new Array();
        for(let i = 0;i < 1 * level; i++){
            this.table.push(new Creature(this.ctx, Math.floor((Math.random() * 650) + 140),Math.floor((Math.random() * 500) - 500)));
            this.table[i].run();
        }
    };
    getLevel = () => this.level;
    getTable = () => this.table;
};



