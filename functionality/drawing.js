function startDrawing(e) {
    mouseDown = true;
    colorize(e);
}

function draw(e) {
    if (mouseDown == true) 
        colorize(e);
}

function stopDrawing(e) {
    mouseDown = false;
}

function colorize(e) {
    const item = e.target;
    item.style.backgroundColor = drawColor;

}