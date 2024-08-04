let squares = prompt("how many squares per side?");
let area = squares*squares;
let size = 480/squares;
const gridContainer = document.getElementById("GRIDCONTAINER");

for (let i = 0; i < area; i++) { 
    gridContainer.appendChild(document.createElement("div"));

}

const childrenDivs = gridContainer.querySelectorAll("div");

for (let i = 0; i < area; i++) { 
    childrenDivs[i].textContent = "I";
    childrenDivs[i].style.height = (size + "px");
    childrenDivs[i].style.width = (size + "px")
}