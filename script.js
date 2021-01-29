

/* Create the sketch grid */
createGrid(16);
styleGrid();
addGridHoverListener();

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

}

