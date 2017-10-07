var HEIGHT = window.innerHeight,
    WIDTH = window.innerWidth;

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