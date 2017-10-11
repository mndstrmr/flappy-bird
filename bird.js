class Bird extends Visual {
    constructor() {
        super();
        this.element = document.getElementById("bird");
        this.yIncrease = 1;
        this.x = Bird.START_X;
        this.y = HEIGHT / 2;
    }
    
    update() {
        this.y += this.yIncrease;
        this.yIncrease -= SCALE_Y * 0.2;
    }
    
    crashCheck(pipes) {
        if (this.y <= 0) {
            return true;
        }
        
        if (this.y + Bird.HEIGHT >= HEIGHT) {
            this.yIncrease = -this.yIncrease + (this.yIncrease / 10);
        }
        
        var corners = [[this.x, this.y], 
                       [this.x + Bird.WIDTH, this.y], 
                       [this.x, this.y + Bird.HEIGHT], 
                       [this.x + Bird.WIDTH, this.y + Bird.HEIGHT]];
        for (var corner = 0; corner < corners.length; corner++) {
            var c = corners[corner];
            for (var i = 0; i < pipes.length; i++) {
                var e = pipes[i].element;
                var xRight = pipes[i].x,
                    xLeft = pipes[i].x + Pipe.WIDTH,
                    yTop = pipes[i].y + Pipe.HEIGHT,
                    yBottom = pipes[i].y;
                if (c[0] > xRight && c[0] < xLeft && c[1] > yBottom && c[1] < yTop) {
                    return true;
                }
            }
        }
        
        return false;
    }
    
    flap() {
        this.yIncrease += SCALE_Y * 4.5;
    }
    
    reset() {
        this.yIncrease = 1;
        this.x = Bird.START_X;
        this.y = HEIGHT / 2;
    }
}

Bird.START_X = (WIDTH / 3) * 2;
Bird.HEIGHT = 70 * SCALE_Y;
Bird.WIDTH = 90 * SCALE_X;