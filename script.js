const parentContainer = document.querySelector(".container");
const bodyContainer = document.querySelector("body");

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

