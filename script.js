

/* Create the sketch grid */
createGrid(50);
styleGrid();
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

function styleGrid() {
    let grid = document.getElementById("sketch-grid");
    let squares = grid.childNodes;

    grid.classList.add("square-grid");

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

    this.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function setupClearButton() {
    let clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener('click', setNewGrid);
}

function setNewGrid() {
    let grid = document.getElementById("sketch-grid");
    grid.innerHTML = "";

    let dim = prompt("How many squares long?");
    dim = Number(dim);
    createGrid(50);
    styleGrid();
    addGridHoverListener();
}

