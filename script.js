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

const styleDiv = document.createElement("div");
styleDiv.classList.add("div-style");  // Fixed the typo here

const colorButton = document.createElement("button");
colorButton.classList.add("colorButton");
colorButton.textContent = "Select Random Color";

const RedButton = document.createElement("button");
RedButton.classList.add("RedButton");
RedButton.textContent = "Black Color";

styleDiv.appendChild(colorButton);
styleDiv.appendChild(RedButton);

container.appendChild(styleDiv);

let randomColor = null;


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
            cell.style.backgroundColor = randomColor;
        });
    });
}

// Initial grid creation with default size of 16 
createGrid(parseInt(x.value));

//On clicking the button, we have added event listener that on clicking takes the current input value and recreats the grid.
button.addEventListener("click", () => {
    createGrid(parseInt(x.value)); // Recreate the grid based on input value
});

RedButton.addEventListener("click", () => {
    randomColor = "black";
})

colorButton.addEventListener("click", () => {
    for (let i = 0; i < 10; i++) {
        randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }
})