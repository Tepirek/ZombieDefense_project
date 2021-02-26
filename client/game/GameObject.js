class GameObject {
    constructor(cx, cy, cs, image) {
        this.position = { x:cx, y:cy };
        this.dimension = { width: 48, height: 96 };
        this.speed = cs;
        this.gameObject = document.createElement('div');
        this.image = image;
    }
    run = function() {
<<<<<<< HEAD
<<<<<<< HEAD
        this.draw();
        setInterval(() => {
            this.move(0, 1);
        }, 1000/24);
=======
=======
>>>>>>> 6ccfa2906be4127ff660881401f0b6950060ff3f
       
        setInterval(() => {
            this.move(0, 1);
        }, 1000/24);
        this.draw();
<<<<<<< HEAD
>>>>>>> 6ccfa2906be4127ff660881401f0b6950060ff3f
=======
>>>>>>> 6ccfa2906be4127ff660881401f0b6950060ff3f
    }
};

GameObject.prototype.getPosition = function() {
    return this.position;
}

GameObject.prototype.getDimension = function() {
    return this.dimension;
}

GameObject.prototype.getSpeed = function() {
    return this.speed;
}

GameObject.prototype.draw = function() {
    this.gameObject.style = `width:${this.dimension.width}px;height:${this.dimension.height}px;position:absolute;top:${this.position.y};left:${this.position.x};z-index:1000;background-size:cover;`;
    this.gameObject.style.backgroundImage = `url('${this.image}')`;
<<<<<<< HEAD
<<<<<<< HEAD
=======
    this.gameObject.style.top = `${this.position.y}px`;
    this.gameObject.style.left = `${this.position.x}px`;
>>>>>>> 6ccfa2906be4127ff660881401f0b6950060ff3f
=======
    this.gameObject.style.top = `${this.position.y}px`;
    this.gameObject.style.left = `${this.position.x}px`;
>>>>>>> 6ccfa2906be4127ff660881401f0b6950060ff3f
    document.body.appendChild(this.gameObject);
};

GameObject.prototype.move = function(dx, dy) {
    this.position.x += dx * this.speed;
    this.position.y += dy * this.speed;
    this.gameObject.style.top = `${this.position.y}px`;
    this.gameObject.style.left = `${this.position.x}px`;
}

GameObject.prototype.collision = function() {
    if(this.position.x < other.position.x + other.dimension.width && this.position.x + this.dimension.width > other.position.x && this.position.y < other.position.y + other.dimension.height && this.position.y + this.dimension.height > other.position.y) {

    };
};

GameObject.prototype.getInfo = function() {
    console.log(this);
}