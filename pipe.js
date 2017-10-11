class Pipe extends Visual {
    constructor(pipe, upsideDown) {
        super();
        this.upsideDown = upsideDown;
        this.element = pipe;
        this.new();
    }
    
    update() {
        super.update();
        if (this.active) { this.x += 10 * SCALE_X; }
        if (this.x > WIDTH) { this.active = false; }
        if (this.x > Bird.START_X + Pipe.WIDTH && !this.scored && this.upsideDown) {
            this.score();
        }
    }
    
    score() {
        userScore += 1;
        this.scored = true;
    }
    
    setBack(y) {
        this.x = -100;
        if (!this.upsideDown) {
            this.y = y - Pipe.HEIGHT;
        } else {
            this.y = y;
        }
        this.active = true;
        this.scored = false;
    }
    
    new() {
        this.y = 1000;
        this.scored = true;
        this.active = false;
    }
}

Pipe.HEIGHT = 550 * SCALE_Y;
Pipe.WIDTH = 80 * SCALE_X;