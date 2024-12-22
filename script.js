const container = document.querySelector("#container");

// Creating an input element for the grid size (x)

var x = document.createElement("INPUT");
x.setAttribute("type", "number");
x.setAttribute("value", "16");
x.setAttribute("min", "2");
x.setAttribute("max", "100");
x.setAttribute("step", "1");
container.appendChild(x);

const button = document.createElement("button");
button.classList.add("button");
button.textContent = "Reset Grid";
container.appendChild(button);

// Creating a grid of given size
function createGrid(size) {

    const existingGrid = document.querySelector(".grid");
    if (existingGrid) {
        existingGrid.remove();
    }

    const grid = document.createElement("div");
    grid.classList.add("grid");

    // Set CSS dynamically based on the input size
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;

    // Create the cells based on the input size
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const cell = document.createElement("div");
            cell.classList.add("cell");
            grid.appendChild(cell);
        }
    }

    // Append the grid to the container
    container.appendChild(grid);

    // Add event listeners for coloring cells
    const cells = grid.querySelectorAll(".cell");

    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "red";
        });
    });
}

// Initial grid creation with default size of 16 
createGrid(parseInt(x.value));

//On clicking the button, we have added event listener that on clicking takes the current input value and recreats the grid.
button.addEventListener("click", () => {
    createGrid(parseInt(x.value)); // Recreate the grid based on input value
});