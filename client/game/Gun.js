class Gun extends GameObject {
    constructor(x, y, speed) {
        super(x, y, speed, '../img/tank01.png');
        this.dimension = { width: 30, height: 60 };
        this.damage = 5;
        this.fireRate = 5;
        this.currentAmmo = 10;
        this.maxAmmo = 10;
        this.reloadTime = 2000;
        this.reloading = false;
        this.bullets = [];
    }
    canShoot = () => (this.reloading) ? false : true;
    reload = () => {
        this.reloading = true;
        setTimeout(() => {
            this.currentAmmo = this.maxAmmo;
            this.reloading = false;
        }, this.reloadTime);
    };
    shoot = function() {
        if(this.currentAmmo == 0) {
            this.reload();
            return;
        }
        let bullet = new Bullet(this.position.x, this.position.y);
        bullet.run();
        this.bullets.push(bullet);
    };
};