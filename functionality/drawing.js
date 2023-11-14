function startDrawing(e) {
    e.preventDefault();
    mouseDown = true;
    colorize(e);
}

function draw(e) {
    e.preventDefault();
    if (mouseDown == true) 
        colorize(e);
}

function stopDrawing(e) {
    e.preventDefault();
    mouseDown = false;
}

function colorize(e) {
    e.preventDefault();
    const item = e.target;

    if (rainbowMode == true) {
        let red =   Math.floor( Math.random() * 100000 )  % 256;
        let green = Math.floor( Math.random() * 100000 )  % 256;
        let blue =  Math.floor( Math.random() * 100000 )  % 256;
        drawColor = "rgb(" + red + "," + green + "," + blue + ")";
    }
    else {
        drawColor = "rgb(0,0,0)";
    }
    item.style.backgroundColor = drawColor;
}