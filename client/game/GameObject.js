function GameObject(cx, cy, cs, image) {
    this.position = { x:cx, y:cy };
    this.dimension = { width: 48, height: 96 };
    this.speed = cs;
    this.gameObject = document.createElement('div');
    this.image = image;

    this.getPosition = () => this.position;
    this.getDimension = () => this.dimension;
    this.getSpeed = () => this.speed;
    this.draw = () => {
        this.gameObject.style = `width:${this.dimension.width}px;height:${this.dimension.height}px;position:absolute;top:${this.position.y};left:${this.position.x};z-index:1000;background-size:cover;border: 1px solid #ff0000`;
        this.gameObject.style.backgroundImage = `url('${this.image}')`;
        document.body.appendChild(this.gameObject);
    };
    this.collision = (other) => {
        if(this.position.x < other.position.x + other.dimension.width && this.position.x + this.dimension.width > other.position.x && this.position.y < other.position.y + other.dimension.height && this.position.y + this.dimension.height > other.position.y) {

        };
    };
};

GameObject.prototype.move = function() {
    console.log(this.position);
    object.position.y += object.speed;
    object.gameObject.style.top = `${object.position.y}px`;
    object.gameObject.style.left = `${object.position.x}px`;
}

GameObject.prototype.getInfo = function() {
    console.log(this);
}