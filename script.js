const parentContainer = document.querySelector(".container");
const bodyContainer = document.querySelector("body");

//setting up the grid
let userChoice = prompt ("How many grids do you want in your sketchpad?");
while(userChoice > 1000 || userChoice <= 0) {
    alert("Sorry, the number of grids has to be between 1 and 1000");
    userChoice = prompt ("How many grids do you want in your sketchpad? (max 1000)");
}

bodyContainer.style.width = (userChoice * 0.5) + "px";
bodyContainer.style.height = (userChoice * 0.5) + "px";

for (let i = 0; i < userChoice; i++) {
    const gridDiv = document.createElement("div");
    gridDiv.classList = "grid";
    parentContainer.appendChild(gridDiv);
}