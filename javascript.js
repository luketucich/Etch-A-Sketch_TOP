// Creates the grid
const gridContainer = document.getElementById("gridContainer");
var gridSize = 64;
var gridSizeSqrt = Math.sqrt(gridSize);

for (let i = 0; i < gridSize; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    // Adjusts the squares in the grid to fit the grid container
    gridSquare.setAttribute("style", `flex: 0 0 calc(100%/${gridSizeSqrt}); `);
    gridContainer.appendChild(gridSquare);
}
// 

