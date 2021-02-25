class Gun {
    constructor(player, ctx) {
        this.damage = 5;
        this.fireRate = 5;
        this.currentAmmo = 10;
        this.maxAmmo = 10;
        this.reloadTime = 2000;
        this.reloading = false;
        this.player = player;
        this.position = {
            x: this.player.position.x + 12,
            y: this.player.position.y - 15
        };
        this.ctx = ctx;
        this.bullets = [];
    };
    canShoot = () => (this.reloading) ? false : true;
    reload = () => {
        this.reloading = true;
        setTimeout(() => {
            this.currentAmmo = this.maxAmmo;
            this.reloading = false;
        }, this.reloadTime);
    };
    clear = () => {
        this.ctx.clearRect(this.position.x, this.position.y, 6, 30);
    }
    draw = () => {
        this.ctx.fillRect(this.position.x, this.position.y, 6, 30);
    };
    shoot = (x, y) => {
        if(this.currentAmmo == 0) {
            this.reload();
            return;
        }
        let mx = x - this.position.x;
        let my = y - this.position.y;
        let lambda = 1 / Math.sqrt(Math.abs(mx)^2 + Math.abs(my)^2);
        mx *= lambda;
        my *= lambda;
        let bullet = new Bullet(this.position.x, this.position.y, mx, my, this.ctx);
        this.currentAmmo--;
        this.bullets.push(bullet);
        this.draw();
    };
    drawBullets = () => {
        this.bullets.forEach(bullet => {
            bullet.move();
        });
    }
    moveGun = (x, y) => {
        this.clear();
        this.position.x += x;
        this.position.y += y;
        this.draw();
    };
};