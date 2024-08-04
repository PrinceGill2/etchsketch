const gridContainer = document.getElementById("GRIDCONTAINER");
let childrenDivs;
let squares;
let area;
let size;
function ask() { 
    squares = prompt("how many squares per side?");
    area = squares*squares;
    size = 480/squares;

    
}

function addChildren() { 
    for (let i = 0; i < area; i++) { 
        gridContainer.appendChild(document.createElement("div"));
    
    }

}

function activateChildren() { 
    childrenDivs = gridContainer.querySelectorAll("div");
    for (let i = 0; i < area; i++) { 
        childrenDivs[i].style.height = (size + "px");
        childrenDivs[i].style.width = (size + "px")
        childrenDivs[i].addEventListener("mouseover", () => { 
            childrenDivs[i].style.backgroundColor = "#808080"
        })
    }

}

function ridChildren()  {
    gridContainer.replaceChildren();
    

}


    



function createGrid() { 
    ask();
    addChildren();
    activateChildren();
    
}

createGrid();












const button = document.getElementById("button");
button.addEventListener("click", () => { 
    ridChildren();
    ask();
    addChildren();
    activateChildren();
});

