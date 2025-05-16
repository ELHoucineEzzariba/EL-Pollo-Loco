class World{

    character = new Character();
    level = level1;
    canvas;
    ctx;
    keyboard;
    camera_x = 0;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
 
        this.coinIcon = new Image();
        this.coinIcon.src = 'img/8_coin/coin_1.png';
    
        this.bottleIcon = new Image();
        this.bottleIcon.src = 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png';

        this.setWorld();
    
        this.spawnChickensInWaves();
        this.spawnCoinsInWaves();
        this.spawnBottlesInWaves();
        this.draw();
    }
    

    setWorld(){
        this.character.world = this;
    }

    draw(){
        this.ctx.clearRect(0,0, this.canvas.width, this.canvas.height);

        this.ctx.translate(this.camera_x, 0);

        this.addObjectsToMap(this.level.backgroundObjects);
        this.addToMap(this.character);
        this.addObjectsToMap(this.level.clouds);
        this.addObjectsToMap(this.level.enemies);
        this.addObjectsToMap(this.level.coins);
        this.addObjectsToMap(this.level.bottles);

        this.ctx.translate(-this.camera_x, 0);


        let self = this;
        requestAnimationFrame(function(){
            self.draw();
        });

        this.drawHUD();
    }

    drawHUD() {
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
    
        if (this.coinIcon.complete) {
            this.drawProgressBarWithIcon(this.coinIcon, 20, 20, this.character.collectedCoins, 9, 'gold');
        }
    
        if (this.bottleIcon.complete) {
            this.drawProgressBarWithIcon(this.bottleIcon, 20, 60, this.character.collectedBottles, 9, 'deepskyblue');
        }
    
        this.ctx.restore();
    }
     

    addObjectsToMap(objects){
        objects.forEach(o => {
            this.addToMap(o);
        })
    }

    addToMap(mo){
        if (mo.otherDirection) {
            this.ctx.save();
            this.ctx.translate(mo.x + mo.width, 0); 
            this.ctx.scale(-1, 1);
            this.ctx.drawImage(mo.img, 0, mo.y, mo.width, mo.height); 
            this.ctx.restore();
        } else {
            this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
        }
    }

    isPositionFarEnough(newX, existingObjects, minDistance = 100) {
        return !existingObjects.some(obj => Math.abs(obj.x - newX) < minDistance);
    }
    
    spawnChickensInWaves(chickensPerWave = 2, waveInterval = 2000, maxWaves = 3) {
        let wavesSpawned = 0;
        const interval = setInterval(() => {
            if (wavesSpawned >= maxWaves) {
                clearInterval(interval);
                return;
            }
    
            for (let i = 0; i < chickensPerWave; i++) {
                const delay = Math.random() * 3000;
    
                setTimeout(() => {
                    let newX = 2800 + Math.random() * 1000;
                    let attempts = 0;
    
                    while (
                        !this.isPositionFarEnough(newX, this.level.enemies, 150) &&
                        attempts < 10
                    ) {
                        newX = 2800 + Math.random() * 1000;
                        attempts++;
                    }
    
                    const chicken = new Chicken();
                    chicken.x = newX;
                    this.level.enemies.push(chicken);
                }, delay);
            }
    
            wavesSpawned++;
        }, waveInterval);
    }
    
    spawnCoinsInWaves(coinsPerWave = 3, waveInterval = 2500, maxWaves = 2) {
        let wavesSpawned = 0;
        const interval = setInterval(() => {
            if (wavesSpawned >= maxWaves) {
                clearInterval(interval);
                return;
            }
    
            for (let i = 0; i < coinsPerWave; i++) {
                const delay = Math.random() * 2000;
    
                setTimeout(() => {
                    let newX = 1500 + Math.random() * 1000;
                    let attempts = 0;
    
                    while (
                        !this.isPositionFarEnough(newX, this.level.coins, 120) &&
                        attempts < 10
                    ) {
                        newX = 1500 + Math.random() * 1000;
                        attempts++;
                    }
    
                    const coin = new Coin();
                    coin.x = newX;
                    this.level.coins.push(coin);
                }, delay);
            }
    
            wavesSpawned++;
        }, waveInterval);
    }
    
    spawnBottlesInWaves(bottlesPerWave = 3, waveInterval = 2500, maxWaves = 2) {
        let wavesSpawned = 0;
        const interval = setInterval(() => {
            if (wavesSpawned >= maxWaves) {
                clearInterval(interval);
                return;
            }
    
            for (let i = 0; i < bottlesPerWave; i++) {
                const delay = Math.random() * 2000;
    
                setTimeout(() => {
                    let newX = 1500 + Math.random() * 1000;
                    let attempts = 0;
    
                    while (
                        !this.isPositionFarEnough(newX, this.level.bottles, 120) &&
                        attempts < 10
                    ) {
                        newX = 1500 + Math.random() * 1000;
                        attempts++;
                    }
    
                    const bottle = new Bottle();
                    bottle.x = newX;
                    this.level.bottles.push(bottle);
                }, delay);
            }
    
            wavesSpawned++;
        }, waveInterval);
    }

    drawProgressBarWithIcon(image, x, y, value, max, color) {
        const barX = x + 50;
        const barY = y;
        const barWidth = 150;
        const barHeight = 20;
        const radius = 8;
        const filled = (value / max) * barWidth;
    
        // Icon (z. B. Coin oder Bottle)
        this.ctx.drawImage(image, x, y - 15, 50, 50);
    
        // Hintergrund
        this.ctx.beginPath();
        this.ctx.fillStyle = 'lightcyan';
        this.roundedRect(barX, barY, barWidth, barHeight, radius);
        this.ctx.fill();
    
        // Füllung
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.roundedRect(barX, barY, filled, barHeight, radius);
        this.ctx.fill();
    
        // Rahmen
        this.ctx.beginPath();
        this.ctx.strokeStyle = 'white';
        this.roundedRect(barX, barY, barWidth, barHeight, radius);
        this.ctx.stroke();
    }
    
    roundedRect(x, y, width, height, radius) {
        this.ctx.beginPath();
        this.ctx.moveTo(x + radius, y);
        this.ctx.lineTo(x + width - radius, y);
        this.ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
        this.ctx.lineTo(x + width, y + height - radius);
        this.ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
        this.ctx.lineTo(x + radius, y + height);
        this.ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
        this.ctx.lineTo(x, y + radius);
        this.ctx.quadraticCurveTo(x, y, x + radius, y);
        this.ctx.closePath();
    }
    
    
}    