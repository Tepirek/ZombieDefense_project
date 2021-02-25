class Gun {
    constructor(player) {
        this.damage = 5;
        this.fireRate = 5;
        this.currentAmmo = 30;
        this.maxAmmo = 30;
        this.reloadTime = 5;
        this.reloading = false;
        this.player = player;
    };
    reload = () => {
        this.reloading = true;
        setTimeout(() => {
            this.currentAmmo = this.maxAmmo;
            this.reloading = false;
        }, this.reloadTime);
    };
    shoot = (x, y) => {
        let bullet = new Bullet(x, y);
    };
};