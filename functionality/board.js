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

const slider = document.querySelector("#myRange");
const colorBtn = document.querySelector("#colorbtn");
const deleteBtn = document.querySelector("#clear");

slider.oninput = function() {
    let sizeTitle = document.querySelector("#size-title");
    sizeTitle.textContent = "Grid Size: " + slider.value + ' x ' + slider.value;
    board_init(slider.value);
}

colorBtn.addEventListener('click', () => {
    if (rainbowMode == true) {
        colorBtn.textContent = "Rainbow Mode";
        rainbowMode = false;
    }
    else {
        colorBtn.textContent = "Black Mode";
        rainbowMode = true;
    }
});

deleteBtn.addEventListener('click', () => {
    const squares = document.querySelectorAll(".square");

    squares.forEach(square => {
        square.style.backgroundColor = "white";
    });
});


let array = [3,4,5,6,7];
