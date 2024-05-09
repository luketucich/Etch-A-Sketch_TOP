// // Creates the grid
// const gridContainer = document.getElementById("gridContainer");
// var gridSize = 120 * 120;
// var gridSizeSqrt = Math.sqrt(gridSize);
// var gridSquareSideLength = 500 / gridSizeSqrt;


// for (let i = 0; i < gridSize; i++) {
//     let gridSquare = document.createElement("div");
//     gridSquare.classList.add("gridSquare");
//     gridSquare.setAttribute('style', 'width:' + gridSquareSideLength + 'px; height:' + gridSquareSideLength + 'px;');
//     gridContainer.appendChild(gridSquare);
// }
// // 

// // Adjusts grid size with dropdwon menu
// const dropdown = document.querySelectorAll("a");
// dropdown.forEach((a) => {
//     a.addEventListener("click", () => {
//         let buttonText = a.textContent;
//         gridSize = eval(buttonText);
//     });
// });

// Function to create the grid
function createGrid(gridSize) {
    // Clear existing grid
    gridContainer.innerHTML = '';
    var gridSizeSqrt = Math.sqrt(gridSize);
    var gridSquareSideLength = 500 / gridSizeSqrt;

    // Create new grid
    for (let i = 0; i < gridSize; i++) {
        let gridSquare = document.createElement("div");
        gridSquare.classList.add("gridSquare");
        gridSquare.setAttribute('style', 'width:' + gridSquareSideLength + 'px; height:' + gridSquareSideLength + 'px;');
        gridContainer.appendChild(gridSquare);
    }
}

// Initial grid creation
createGrid(5 * 5);

// Adjusts grid size with dropdown menu
const dropdown = document.querySelectorAll("a");
dropdown.forEach((a) => {
    a.addEventListener("click", () => {
        let buttonText = a.textContent;
        gridSize = eval(buttonText);
        createGrid(gridSize); // Update the grid with the new size
    });
});


