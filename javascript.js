// Initial grid creation
createGrid(16 * 16);

// Changes the pen color    
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
    var mouseMove = 0

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
            } else if (customSize == 0) {
                alert("You must have at least 1 square per side");
            } else if (customSize <= 100) {
                createGrid(customSize * customSize);
            } else {
                while (customSize > 100) {
                    alert("You must pick a value less than 100")
                    let customSize = prompt("How many squares would you like per side?");

                    if (customSize === null || customSize == "") {
                        break;
                    } else if (customSize == 0) {
                        alert("You must have at least 1 square per side");
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


const reset = document.getElementById("reset")
reset.addEventListener("click", () => {
    createGrid(16 * 16);
});