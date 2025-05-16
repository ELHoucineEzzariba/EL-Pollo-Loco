class Endboss extends MovableObject {

    y = 60;
    height = 500;
    width = 300;

    ImagesWalking = [
        'img/4_enemie_boss_chicken/2_alert/G5.png',
        'img/4_enemie_boss_chicken/2_alert/G6.png',
        'img/4_enemie_boss_chicken/2_alert/G7.png',
        'img/4_enemie_boss_chicken/2_alert/G8.png',
        'img/4_enemie_boss_chicken/2_alert/G9.png',
        'img/4_enemie_boss_chicken/2_alert/G10.png',
        'img/4_enemie_boss_chicken/2_alert/G11.png',
        'img/4_enemie_boss_chicken/2_alert/G12.png',
    ];

    constructor() {
        super();
        this.currentImage = 0;
        this.loadImage(this.ImagesWalking[0]);
        this.loadImages(this.ImagesWalking);
        this.x = 3500;
        this.animate();
    }

    animate() {
        setInterval(() => {
            let i = this.currentImage % this.ImagesWalking.length;
            let path = this.ImagesWalking[i];
            this.img = this.imageCache[path];
            this.currentImage++;
        }, 300);
    }
}
