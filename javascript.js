// Initial grid creation
createGrid(16 * 16);

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

        gridSquare.addEventListener("mouseenter", () => {
            gridSquare.setAttribute('style', 'background-color: black; width:' + gridSquareSideLength + 'px; height:' + gridSquareSideLength + 'px;');
        });
    }
}



// Adjusts grid size with dropdown menu
const dropdown = document.querySelectorAll("a");
dropdown.forEach((a) => {
    a.addEventListener("click", () => {

        let buttonText = a.textContent;

        if (buttonText == "Other") {
            let customSize = prompt("How many squares would you like per side?");

            if (customSize <= 100) {
                createGrid(customSize * customSize);
            } else {
                while (customSize > 100) {
                    alert("You must pick a value less than 100!")
                    let customSize = prompt("How many squares would you like per side?");
                    if (customSize <= 100) {
                        createGrid(customSize * customSize);
                        break;
                    }
                }
            }
        } else {
            gridSize = eval(buttonText);
            createGrid(gridSize); // Update the grid with the new size
        }


    });
});
