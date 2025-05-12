class MovableObject{
    x = 20;
    height = 400;
    y = 150;
    width = 130;
    img;


    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    moveRight(){}
}