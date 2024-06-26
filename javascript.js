// Initial grid creation
createGrid(16 * 16);

// If a value is a decimal, return true
function isDecimal(num) {
    return Number(num) === num && num % 1 !== 0;
}

// Changes the active tool
let tool = "blackPen";

const blackPen = document.getElementById("blackPen")
blackPen.addEventListener("click", () => {
    tool = "blackPen";
});

const rainbowPen = document.getElementById("rainbowPen")
rainbowPen.addEventListener("click", () => {
    tool = "rainbowPen";
});

const eraser = document.getElementById("eraser")
eraser.addEventListener("click", () => {
    tool = "eraser";
});
// 

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

        // Add a trail when mouse moves over grid
        gridSquare.addEventListener("mouseenter", () => {

            if (tool == "rainbowPen") {
                gridSquare.setAttribute('style', `background-color: rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)}); width:` + gridSquareSideLength + 'px; height:' + gridSquareSideLength + 'px;');

            } else if (tool == "blackPen") {
                gridSquare.setAttribute('style', `background-color: black; width:` + gridSquareSideLength + 'px; height:' + gridSquareSideLength + 'px;');

            } else if (tool == "eraser") {
                gridSquare.setAttribute('style', `background-color: white; width:` + gridSquareSideLength + 'px; height:' + gridSquareSideLength + 'px;');
            }
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

            if (customSize === null || customSize == "") {
                // If the user clicks out of the prompt or doesn't enter a value, the prompt is cancelled
            } else if (customSize.includes("-")) {
                alert('You most enter a positive number');

            } else if (customSize == 0) {
                alert("You must have at least 1 square per side");

            } else if (isDecimal(Number(customSize)) == true || customSize.includes("/")) {
                alert("You must enter a whole number");

            } else if (customSize <= 100) {
                createGrid(customSize * customSize);

            } else {
                while (customSize > 100) {
                    alert("You must pick a value less than 100")
                    let customSize = prompt("How many squares would you like per side?");

                    if (customSize === null || customSize == "") {
                        break;

                    } else if (customSize.includes("-")) {
                        alert('You most enter a positive number');
                        break;

                    } else if (customSize == 0) {
                        alert("You must have at least 1 square per side");
                        break;

                    } else if (isDecimal(Number(customSize)) == true || customSize.includes("/")) {
                        alert("You must enter a whole number");
                        break;

                    } else if (customSize <= 100) {
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

// Reset button clears grid and returns it to 16x16
const reset = document.getElementById("reset")

reset.addEventListener("click", () => {
    createGrid(16 * 16);
});
