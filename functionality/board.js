function board_init(size) {
    const grid = document.querySelector(".grid");
    grid.innerHTML = '';
    const squareSize = 500 / (size);

    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList = "row";
        row.id = "" + i;

        for (let j = 0; j < size; j++) {
            let square = document.createElement("div");
            square.classList = "square";
            square.id = "" + i + j;
            square.style.width = squareSize + "px";
            square.style.height = squareSize + "px";
            square.style.backgroundColor = "white";

            square.addEventListener('mousedown', startDrawing);
            square.addEventListener('mouseover', draw);
            square.addEventListener('mouseup', stopDrawing);

            row.appendChild(square);
        }
        grid.appendChild(row);
    }
}

const sizeBtn = document.querySelector("#sizebtn");
const colorBtn = document.querySelector("#colorbtn");
const deleteBtn = document.querySelector("#clear");

sizeBtn.addEventListener('click', () => {
    do {
        currSize = prompt("Choose new grid size");
    } while (currSize < 16 || currSize > 100);

    currSize = currSize;
    board_init(currSize);
});

colorBtn.addEventListener('click', () => {
    let red = Math.floor( Math.random() * 100000 )  % 256;
    let green = Math.floor( Math.random() * 100000 )  % 256;
    let blue = Math.floor( Math.random() * 100000 )  % 256;

    drawColor = "rgb(" + red + "," + green + "," + blue + ")";
});

deleteBtn.addEventListener('click', () => {
    board_init(currSize);
});
