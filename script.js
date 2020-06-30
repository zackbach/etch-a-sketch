//initial grid size
const INITIAL_GRID_SIZE = 16;
let currentGridSize = INITIAL_GRID_SIZE

const container = document.getElementById("container");

//changes the grid for the container and creates children divs
function setGrid(gridSize) {
    container.style.gridTemplate = `repeat(${gridSize}, 1fr) / repeat(${gridSize}, 1fr)`;
    for (let i=0; i<gridSize; i++) {
        for(let j=0; j<gridSize; j++) {
            let newDiv = document.createElement("div");
            newDiv.classList.add('pre-hover');
            container.appendChild(newDiv);
        }
    }
}

//creates listeners for mouse entering
function setEvents() {
    const allDivs = container.childNodes;
    allDivs.forEach((div) => {
        div.addEventListener('mouseenter', () => {
            div.classList.add('post-hover');
        });
    });
}

setGrid(INITIAL_GRID_SIZE);
setEvents()

//clears the grid and makes a new one of the same size
function updateGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
    setGrid(currentGridSize);
    setEvents();
}

//clears the grid and makes a new one of a new size
function newGrid() {
    currentGridSize = prompt('Enter a new size');
    //removes all children divs
    updateGrid();
}