

/* Create the sketch grid */
createGrid(16);
styleGrid(16);
addGridHoverListener();
setupClearButton();

function createGrid(numSideSquares) {
    let grid = document.getElementById("sketch-grid");

    for (let i = 0; i < numSideSquares**2; i++) {
        let square = document.createElement("div");
        grid.appendChild(square);
    }

    console.log(grid.childNodes);
}

function styleGrid(numSideSquares) {
    let grid = document.getElementById("sketch-grid");
    let squares = grid.childNodes;

    grid.classList.add("square-grid");
    let squareWidth = Math.floor(1/numSideSquares * 100) / 1.25;
    grid.style["grid-template-columns"] = `repeat(${numSideSquares}, ${squareWidth}vh)`;

    squares.forEach((square) => {
        square.classList.add("square");
    });
}

function addGridHoverListener() {
    let grid = document.getElementById("sketch-grid");
    let squares = grid.childNodes;

    squares.forEach((square) => {
        square.addEventListener('mouseover', fillSquare);
    });
}

function fillSquare() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);

    this.style.transition = "background-color 0.2s";
    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function setupClearButton() {
    let clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener('click', setNewGrid);
}

function setNewGrid() {
    let grid = document.getElementById("sketch-grid");
    grid.innerHTML = "";

    let dim = getNewGridDimension();
    createGrid(dim);
    styleGrid(dim);
    addGridHoverListener();
}

function getNewGridDimension() {
    let dim;
    do {
        dim = prompt("How many squares long? (Enter a number between 1 and 100 inclusive)");
    } while (Number(dim) <= 0 || Number(dim) > 100);

    return Number(dim);
}

