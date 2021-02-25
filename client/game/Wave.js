class Wave {
    constructor(level){
        this.table = new Array();
    }
};


createWave = (ctx) => {
    for(let i = 0; i < 10*level; i++)
    {
        let y = new Creature(ctx);
        this.table.push(y);
    }
};


moveWave = () => { 
    setInterval(() => {
        for(let i = 1;i<10*level;i++) {
        table[i].move(-1,-1);
        }
      }, 1000/24);
};