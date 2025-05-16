class MovableObject{
    x = 20;
    height = 400;
    y = 150;
    width = 130;
    img;
    imageCache = {};
    speed = 0.15;
    otherDirection = false;

    loadImage(path){
        this.img = new Image();
        this.img.src = path;
    }

    loadImages(arr){
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveRight(){}

    moveLeft(){
        setInterval(()=>{
            this.x -= this.speed;  
        },1000 / 60);
    }

    isColliding(other) {
        return this.x + this.width > other.x &&
               this.x < other.x + other.width &&
               this.y + this.height > other.y &&
               this.y < other.y + other.height;
    }
    
}