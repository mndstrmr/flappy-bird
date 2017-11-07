var lastCreated,
        bird,
        running,
        pipes,
        userScore;

document.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode == 32) { 
        if (running) { bird.flap(); }
        else {
            restart();
            requestAnimationFrame(update);
        }
    }
};

document.onmousedown = function (e) {
    if (running) { bird.flap(); }
    else {
        restart();
        requestAnimationFrame(update);
    }
}

document.ontouchstart = function (e) {
    if (running) { bird.flap(); }
    else { 
        restart();
        requestAnimationFrame(update);
    }
}

function createPipe() {
    for (var i = 0; i < pipes.length; i++) {
        if (!pipes[i].active) {
            var center = Math.round(Math.random() * (200 * SCALE_Y)) + (120 * SCALE_Y),
                radius = center / 2,
                pos = Math.round(Math.random() * (HEIGHT / 2)) + (HEIGHT / 4);
            pipes[i].setBack(pos + radius);
            pipes[i + 1].setBack(pos - radius);
            return;
        }
    }
}

function update() {
    running = true;
    document.getElementById("score").innerHTML = userScore;
    
    bird.update();
    for (var i = 0; i < pipes.length; i++) { pipes[i].update(); }
    drawAll();

    var date = new Date().getTime();
    if (date - lastCreated > 1000 && Math.round(Math.random() * 2) == 1) {
        createPipe();
        lastCreated = date;
    }
    
    
    if (!bird.crashCheck(pipes)) { requestAnimationFrame(update); }
    else { running = false; }
}

function drawAll() {
    for (var i = 0; i < pipes.length; i++) {
        pipes[i].draw();
    }
    bird.draw();
}

function createPipes() {
    var result = [];
    for (var i = 0; i < 4; i++) {
        var element = document.createElement("img");
        element.setAttribute("src", "images/pipe.png"); element.setAttribute("alt", " "); element.setAttribute("class", "pipe");
        if (i % 2 == 0) { element.setAttribute("style", "transform: rotateZ(180deg);"); }
        document.body.appendChild(element);

        result.push(new Pipe(element, i % 2 == 0));
    }
    return result;
}

function restart() {
    for (var i = 0; i < pipes.length; i++) {
        pipes[i].new();
    }
    bird.reset();
    userScore = 0;
}

function start() {
    lastCreated = new Date().getTime();
    bird = new Bird();
    running = false;
    pipes = createPipes();
    userScore = 0;
    drawAll();
}
