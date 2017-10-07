document.onkeypress = function (e) {
    e = e || window.event;
    if (e.keyCode == 32 && !bird.crashCheck(pipes)) { bird.flap(); }
};

document.onmousedown = function (e) {
    bird.flap();
}

document.ontouchstart = function (e) {
    bird.flap();
}

function createPipe() {
    for (var i = 0; i < pipes.length; i++) {
        if (!pipes[i].active) {
            var center = Math.round(Math.random() * (HEIGHT / 6.05)) + (HEIGHT / 4.84),
                radius = center / 2,
                pos = Math.round(Math.random() * (HEIGHT / 2)) + (HEIGHT / 4);
            pipes[i].reset(pos + radius);
            pipes[i + 1].reset(pos - radius);
            return;
        }
    }
}

function update() {
    bird.update();
    for (var i = 0; i < pipes.length; i++) { pipes[i].update(); }
    if (new Date().getTime() - lastCreated > 1000 && Math.round(Math.random() * 2) == 1) {
        createPipe(); 
        lastCreated = new Date().getTime();
    }
    
    if (!bird.crashCheck(pipes)) { requestAnimationFrame(update); }
}

var pipes = [];
for (var i = 0; i < 4; i++) {
    var element = document.createElement("img");
    element.setAttribute("src", "images/pipe.png"); element.setAttribute("alt", ""); element.setAttribute("class", "pipe");
    if (i % 2 == 0) { element.setAttribute("style", "transform: rotateZ(180deg);"); }
    document.body.appendChild(element);

    pipes.push(new Pipe(element, i % 2 == 0));
}

var lastCreated = new Date().getTime();
var bird = new Bird();
requestAnimationFrame(update);