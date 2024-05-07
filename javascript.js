// Creates the grid
const gridContainer = document.getElementById("gridContainer");
var gridSize = 16 * 16;
var gridSizeSqrt = Math.sqrt(gridSize);

for (let i = 0; i < gridSize; i++) {
    let gridSquare = document.createElement("div");
    gridSquare.classList.add("gridSquare");
    gridSquare.setAttribute("style", `flex: 0 0 calc(100%/${gridSizeSqrt}); `);
    gridContainer.appendChild(gridSquare);
}
// 

// Adjusts grid container width based off grid size
// var gridContainerWidth = gridSizeSqrt * 25;
// gridContainer.setAttribute("style", `width: ${gridContainerWidth};`);