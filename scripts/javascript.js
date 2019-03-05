let body = document.querySelector("body");
let button = document.querySelector("#delete");

let boxes = [];

let container;

generateGrid(16);

button.addEventListener("click", () => {
    let dimension = prompt("How many rows do you want?");
    generateGrid(dimension);    
})

//Here are declared the functions to run the main code
function generateGrid (number){

    if(document.contains(document.querySelector(".container"))){
        body.removeChild(document.querySelector(".container"));
    }

    container = document.createElement("div");
    container.setAttribute("class", "container");
    container.setAttribute("style", "grid-template: repeat(" + number + ", 1fr) / repeat(" + number + ",1fr);")

    for(let i = 0; i < number * number; i++){

        let box = document.createElement("div");
        box.setAttribute("class", "box");
        box.setAttribute("style", "background : white");

        let blackOverlay = document.createElement("div");
        blackOverlay.setAttribute("class", "overlay");
        blackOverlay.setAttribute("style","width: 100%; height: 100%; background-color: black; opacity: 0;");
        box.appendChild(blackOverlay);

        container.appendChild(box);
        boxes.push(box);
    }

    body.insertBefore(container, button);

    assignBoxes();
 }

 function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


function assignBoxes(){
    boxes.forEach((box) => {
        box.addEventListener("mouseenter", (e) => {
            if(e.target.style["background-color"] == "white"){
            e.target.style.background = getRandomColor();
            } else {
                if(e.target.firstChild.style.opacity <= 1){
                e.target.firstChild.style.opacity = +e.target.firstChild.style.opacity + 0.1;
                }
            }
        })
    })
}


