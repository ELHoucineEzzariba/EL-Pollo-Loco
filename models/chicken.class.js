class Chicken extends MovableObject {
    y = 430;
    height = 100;
    ImagesWalking = [
        'img/3_enemies_chicken/chicken_normal/1_walk/1_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/2_w.png',
        'img/3_enemies_chicken/chicken_normal/1_walk/3_w.png',
    ];
    currentImage = 0;

    constructor() {
        super().loadImage(this.ImagesWalking[0]);
        this.loadImages(this.ImagesWalking);

        this.x = 2800 + Math.random() * 500;
        this.speed = 3 + Math.random() * 0.5;

        this.startAnimationWithDelay();
    }

    startAnimationWithDelay() {
        const delay = Math.random() * 2000;
        setTimeout(() => this.animate(), delay);
    }

    animate() {
        this.moveLeft();

        setInterval(() => {
            let i = this.currentImage % this.ImagesWalking.length;
            let path = this.ImagesWalking[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 300);
    }
}
