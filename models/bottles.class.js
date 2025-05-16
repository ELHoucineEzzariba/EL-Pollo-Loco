class Bottle extends MovableObject {
    y = 450;
    height = 80;
    width = 80;
    imgPath = 'img/6_salsa_bottle/1_salsa_bottle_on_ground.png';

    constructor() {
        super().loadImage(this.imgPath);
        this.x = 400 + Math.random() * 1000;
    }
}

