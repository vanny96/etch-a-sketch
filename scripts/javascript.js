let body = document. querySelector("body");

let paragraph = document.createElement("p");
paragraph.setAttribute("style", "color: red");
paragraph.textContent = "Hey I'm red!";
body.appendChild(paragraph);

let semiTitle = document.createElement("h3");
semiTitle.setAttribute("style", "color: blue");
semiTitle.textContent = "Hey I'm blue h3";
body.appendChild(semiTitle);

let strangeDiv = document.createElement("div");
strangeDiv.setAttribute("style", "border-color: black; background-color: pink");

let title = document.createElement("h1");
title.textContent = "I'm h1 in a Div!";
strangeDiv.appendChild(title);

let para = document.createElement("p");
para.textContent = "ME TOO!";
strangeDiv.appendChild(para);

body.appendChild(strangeDiv);

let button = document.querySelector("#test");
button.addEventListener('dblclick', () => {
    console.log("Called");
  });
