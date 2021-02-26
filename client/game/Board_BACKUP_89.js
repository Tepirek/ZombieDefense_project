class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
<<<<<<< HEAD
=======
        this.totalScore = 0;
>>>>>>> 6ccfa2906be4127ff660881401f0b6950060ff3f
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext("2d");
    };
    
    getCanvas = () => this.canvas;
    getCtx = () => this.ctx;
    getWidth = () => this.width;
    getWidth = () => this.width;
<<<<<<< HEAD
    draw = function () {
    };
    
=======
    getTotalScore = () => this.totalScore;
    addTotalScore = (s) => this.totalScore += s;
>>>>>>> 6ccfa2906be4127ff660881401f0b6950060ff3f
}