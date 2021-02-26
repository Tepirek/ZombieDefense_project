class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext("2d");
    };
    
    getCanvas = () => this.canvas;
    getCtx = () => this.ctx;
    getWidth = () => this.width;
    getWidth = () => this.width;
    draw = function () {
    };
    
}