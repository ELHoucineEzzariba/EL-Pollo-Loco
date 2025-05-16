class Coin extends MovableObject {
    y = 350;
    height = 80;
    width = 80;
    imgPath = 'img/8_coin/coin_1.png'; 

    constructor() {
        super().loadImage(this.imgPath);
        this.x = 400 + Math.random() * 1000;
    }
}
