class Wave {
    constructor(level, ctx){
        this.ctx = ctx;
        this.level = level;
        this.table = new Array();
        for(let i = 0;i < 10 * level; i++){
            this.table.push(new Creature(this.ctx));
        }
        setInterval(() => {
            this.table.forEach(element => {
                element.move(-1,1);
                element.draw();
            });
          }, 1000/24);
    }


getLevel = () => this.level;
getTable = () => this.table;

};



