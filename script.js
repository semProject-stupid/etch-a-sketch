const parentContainer = document.querySelector(".container");
const bodyContainer = document.querySelector("body");
const resetButton = document.querySelector("#reset");
const newButton = document.querySelector("#new");
const eraserButton = document.querySelector("#eraser");

const greenButton = document.querySelector("#green");
const pinkButton = document.querySelector("#pink");
const redButton = document.querySelector("#red");
const blackButton = document.querySelector("#black");
const whiteButton = document.querySelector("#white");
const yellowButton = document.querySelector("#yellow");
const orangeButton = document.querySelector("#orange");
const brownButton = document.querySelector("#brown");

//to delete exsiting grids when setting up new grid
function deleteGrids() {
    const gridList = document.querySelectorAll(".grid");
    gridList.forEach(grid => {
        grid.remove();
    })
}

function createNew() {
    document.body.classList.remove("eraser-cursor");
    //setting up the grid
    let userChoice = prompt ("Enter the size of grid you would like in your sketchpad: (min 1 and max 40)");
    if (userChoice == null) {
        return;
    }

    while((userChoice > 40 || userChoice <= 0) && userChoice != null) {
        alert("Sorry, the number of grids has to be between 1 and 40");
        userChoice = prompt ("Enter the size of grid you would like in your sketchpad: (min 1 and max 40)");
    }

    //clearing existing grid elements
    deleteGrids();

    //setting up rows
    for (let i = 0; i < userChoice; i++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList = "row-container";
        parentContainer.appendChild(rowDiv);

        //setting up cols
        for (let j = 0; j < userChoice; j++) {
            const gridCell = document.createElement("div");
            gridCell.classList = "grid";
            rowDiv.appendChild(gridCell);
        }
    }
}


//clearing existing sketchpad
function resetGrid() {
    document.body.classList.remove("eraser-cursor");
    const newGridDivs = document.querySelectorAll(".grid");
    newGridDivs.forEach(grid => {
        grid.style.backgroundColor = "white";
    })
}

//erasing function
function eraserFunction() {
    //toggling cursor
    if (eraserState) {
        document.body.classList.remove("eraser-cursor");
    } else {
        document.body.classList.add("eraser-cursor");
    }
    eraserState = !eraserState;
    
    //erasing functionality
    const gridCells = document.querySelectorAll(".grid");
    gridCells.forEach(cell => {
        cell.addEventListener("mouseenter", () => {
            cell.style.backgroundColor = "white";
        })
    })
}

//functions for colors
function setColor(color, values) {
    document.body.classList.add("brush-cursor");

    //adding colors effect
    const gridDivs = document.querySelectorAll(".grid");
    let hoverState = false;
    gridDivs.forEach(grid => {
        let randomRed = Math.floor(Math.random() * (values[0]-values[1]) + values[1]);
        let randomBlue = Math.floor(Math.random() * (values[2] - values[3]) + values[3]);
        let randomGreen = Math.floor(Math.random() * (values[4]-values[5]) + values[5]);

        grid.addEventListener("click", () => {
            hoverState = !hoverState;
        })
        grid.addEventListener("mouseenter", () => {
            if (hoverState) {
                grid.style.backgroundColor = `rgba(${randomRed}, ${randomGreen}, ${randomBlue}, 1)`;
            } 
        })
    })
}

//event listeners
resetButton.addEventListener("click", () => resetGrid());
newButton.addEventListener("click", createNew);
let eraserState = false;
eraserButton.addEventListener("click", eraserFunction);
let brushState = false;
greenButton.addEventListener("click", () => setColor("green", [30,0,144,0,255,205]));
pinkButton.addEventListener("click", () => setColor("pink", [255, 200, 150, 100, 180, 100]));
redButton.addEventListener("click", () => setColor("red", [255, 180, 100, 0, 100, 0]));
blackButton.addEventListener("click", () => setColor("black", [30, 0, 30, 0, 30, 0]));
whiteButton.addEventListener("click", () => setColor("white", [255, 240, 255, 240, 255, 240]));
yellowButton.addEventListener("click", () =>
  setColor("yellow", [255, 240, 10, 0, 255, 240])
);
brownButton.addEventListener("click", () => setColor("brown", [139, 80, 100, 40, 100, 40]));
orangeButton.addEventListener("click", () =>
  setColor("orange", [255, 200, 20, 0, 180, 120])
);
/* personal:
for (let i = 0; i < totalSquares * totalSquares; i++) {
        newGridDivs[i].style.backgroundColor = "white";
} //rmbr it returns nodelist, so have to use [i]

*/

