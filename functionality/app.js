let mouseDown = false
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);

let drawColor = "rgb(0,0,0)";
let currSize = 16;

board_init(16);
