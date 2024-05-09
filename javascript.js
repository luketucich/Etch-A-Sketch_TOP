// Initial grid creation
createGrid(10 * 10);

// Function to create the grid
function createGrid(gridSize) {
    // Clear existing grid
    const gridContainer = document.getElementById("gridContainer");
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



// Adjusts grid size with dropdown menu
const dropdown = document.querySelectorAll("a");
dropdown.forEach((a) => {
    a.addEventListener("click", () => {

        let buttonText = a.textContent;

        if (buttonText == "Other") {
            let customSize = prompt("How many squares would you like per side?");
            let customSizeArea = customSize * customSize;
            while (customSize > 100) {
                alert("You must pick a value less than 100!")
                let customSize = prompt("How many squares would you like per side?");
            }
            createGrid(customSizeArea);
        } else {
            gridSize = eval(buttonText);
            createGrid(gridSize); // Update the grid with the new size
        }


    });
});


