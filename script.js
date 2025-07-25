const parentContainer = document.querySelector(".container");
const bodyContainer = document.querySelector("body");
const resetButton = document.querySelector("#reset");
const newButton = document.querySelector("#new");

function deleteGrids() {
    const gridList = document.querySelectorAll(".grid");
    gridList.forEach(grid => {
        grid.remove();
    })
}

function createNew() {
    //clearing existing grid elements
    deleteGrids();
    //setting up the grid
    let userChoice = prompt ("Enter the size of grid you would like in your sketchpad: (min 1 and max 100)");
    while(userChoice > 100 || userChoice <= 0) {
        alert("Sorry, the number of grids has to be between 1 and 100");
        userChoice = prompt ("Enter the size of grid you would like in your sketchpad: (min 1 and max 100");
    }

    let totalSquares = Math.floor(600 / userChoice);

    for (let i = 0; i < totalSquares * totalSquares; i++) {
        const gridDiv = document.createElement("div");
        gridDiv.classList = "grid";
        gridDiv.style.height = userChoice + "px";
        gridDiv.style.width = userChoice + "px";
        parentContainer.appendChild(gridDiv);

        //adding hover effect
        gridDiv.addEventListener("mouseenter", () => {
        gridDiv.style.backgroundColor = "black";
        })
    }
}


//clearing existing sketchpad
function resetGrid() {
    const newGridDivs = document.querySelectorAll(".grid");
    newGridDivs.forEach(grid => {
        grid.style.backgroundColor = "white";
    })
}

//event listeners
resetButton.addEventListener("click", () => resetGrid());
newButton.addEventListener("click", createNew);


/* personal:
for (let i = 0; i < totalSquares * totalSquares; i++) {
        newGridDivs[i].style.backgroundColor = "white";
} //rmbr it returns nodelist, so have to use [i]

*/

