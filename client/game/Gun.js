class Gun extends GameObject {
    constructor(x, y, speed) {
        super(x, y, speed, '../img/tank01.png');
        this.dimension = { width: 30, height: 60 };
        this.damage = 5;
        this.fireRate = 5;
        this.currentAmmo = 30;
        this.ammoCapacity = 30;
        this.maxAmmo = 300;
        this.reloadTime = 2000;
        this.reloading = false;
    }
    shoot = function() {
        if(this.currentAmmo == 0) {
            this.reload();
            return;
        }
        let bullet = new Bullet(this.position.x, this.position.y);
        bullet.run();
        this.currentAmmo--;
    };
};

Gun.prototype.canShoot = function() {
    return !(this.reloading);
};

Gun.prototype.reload = function() {
    this.reloading = true;
    setTimeout(() => {
        this.maxAmmo += (this.currentAmmo - this.ammoCapacity);
        this.currentAmmo += (this.ammoCapacity - this.currentAmmo);
        this.reloading = false;
    }, this.reloadTime);
}