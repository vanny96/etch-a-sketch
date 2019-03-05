let body = document.querySelector("body");
let button = document.querySelector("#delete");

let boxes = [];

let container;

generateGrid(16);

button.addEventListener("click", () => {
    let dimension = prompt("How many rows do you want?");
    generateGrid(dimension);    
})

function generateGrid (number){

    if(document.contains(document.querySelector(".container"))){
        body.removeChild(document.querySelector(".container"));
    }

    container = document.createElement("div");
    container.setAttribute("class", "container");
    container.setAttribute("style", "grid-template: repeat(" + number + ", 1fr) / repeat(" + number + ",1fr);")

    for(let i = 0; i < number * number; i++){
        let box = document.createElement("div");
        box.setAttribute("class", "box")
        container.appendChild(box);
        boxes.push(box);
    }

    body.insertBefore(container, button);

    assignBoxes();
 }


function assignBoxes(){
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            e.target.style.background = "black";
        })
    })
}

