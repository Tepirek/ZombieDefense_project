class Board {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.canvas = document.querySelector('canvas');
        this.ctx = this.canvas.getContext("2d");
        this.image = new Image();
        this.image.src="../img/lava3.jpg";
        this.image.onload = () => {
            this.ctx.drawImage(this.image, 0, 0)
         }
    };
    getCanvas = () => this.canvas;
    getCtx = () => this.ctx;
    getWidth = () => this.width;
    getWidth = () => this.width;
    getImage = () => this.image;
    draw = () => {
        
    }
}