var HEIGHT = window.innerHeight,
    WIDTH = window.innerWidth;

//1280 * 726

console.log(HEIGHT);

class Visual {
    constructor() {
        this.element = null;
        this.x = 0;
        this.y = 0;
    }
    
    draw() {
        this.element.style.bottom = this.y + "px";
        this.element.style.right = this.x + "px";
    }
    
    update() {
        this.draw();
    }
}