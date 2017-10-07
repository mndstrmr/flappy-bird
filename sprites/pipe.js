class Pipe extends Visual {
    constructor(pipe, upsideDown) {
        super();
        this.upsideDown = upsideDown;
        this.element = pipe;
        this.active = false;
        this.y = 1000;
        this.scored = false;
    }
    
    update() {
        super.update();
        if (this.active) { this.x += 10; }
        if (this.x > WIDTH) { this.active = false; }
        if (this.x > Bird.START_X && !this.scored && this.upsideDown) {
            var e = document.getElementById("score")
            e.innerHTML = parseInt(e.innerHTML) + 1;
            this.scored = true;
        }
    }
    
    reset(y) {
        this.x = -100;
        if (!this.upsideDown) {
            this.y = y - Pipe.HEIGHT;
        } else {
            this.y = y;
        }
        this.active = true;
        this.scored = false;
    }
}

Pipe.HEIGHT = 600;
Pipe.WIDTH = 80;``