class Character extends MovableObject {

    height = 390;
    y = 150;
    speed = 4;
    ImagesWalking = [
        'img/2_character_pepe/2_walk/W-21.png',
        'img/2_character_pepe/2_walk/W-22.png',
        'img/2_character_pepe/2_walk/W-23.png',
        'img/2_character_pepe/2_walk/W-24.png',
        'img/2_character_pepe/2_walk/W-25.png',
        'img/2_character_pepe/2_walk/W-26.png',
    ];
    currentImage = 0; 
    world;
    collectedCoins = 0;
    collectedBottles = 0;


    constructor(){
        super().loadImage('img/2_character_pepe/2_walk/W-21.png');
        this.loadImages(this.ImagesWalking);

        this.animate();
    }

    animate(){
        setInterval(()=>{
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x){
                this.x += this.speed;
                this.otherDirection = false;
            } 

            if (this.world.keyboard.left && this.x > 0){
                this.x -= this.speed;
                this.otherDirection = true;
            }
            this.world.camera_x = -this.x + 100;
        },1000 / 60);

        setInterval(() => {
            if (this.world.keyboard.right || this.world.keyboard.left) {
                let i = this.currentImage % this.ImagesWalking.length;
                let path = this.ImagesWalking[i];
                this.img = this.imageCache[path];
                this.currentImage++;
            }
        }, 50);

        setInterval(() => {
            if (this.world.keyboard.right && this.x < this.world.level.level_end_x) {
                this.x += this.speed;
                this.otherDirection = false;
            }
            if (this.world.keyboard.left && this.x > 0) {
                this.x -= this.speed;
                this.otherDirection = true;
            }
        
            this.checkCollectables(); // <- HIER
            this.world.camera_x = -this.x + 100;
        }, 1000 / 60);
        
    }

    checkCollectables() {
        // Coins
        this.world.level.coins = this.world.level.coins.filter(coin => {
            if (this.isColliding(coin)) {
                this.collectedCoins++;
                return false; // Entferne die Coin
            }
            return true;
        });
    
        // Bottles
        this.world.level.bottles = this.world.level.bottles.filter(bottle => {
            if (this.isColliding(bottle)) {
                this.collectedBottles++;
                return false; // Entferne die Bottle
            }
            return true;
        });
    }
    

    jump(){}
}