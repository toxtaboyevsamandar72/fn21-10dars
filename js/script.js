let form = document.querySelector("form");
let input = document.querySelector("input");
let div = document.querySelector("div");
let button = document.querySelector("button")

let url = "https://restcountries.com/v3.1/name/uzb";
let template = document.querySelector("template");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  fetch(url + input.value)
    .then((data) => {
      return data.json();
    })
    .then((posts) => {
      updateUI(posts);
    })
    .catch();
});


function updateUI(data) {
    console.log(data[0]);
    let clone = template.content.cloneNode(true);
    let image = clone.querySelector("img");
    clone.querySelector("img");
    image.src = data[0].flags.svg;
    image.alt = data[0].flags.alt;
    div.appendChild(clone);
    input.value = "";
    new Audio("./music - Copy/res.mp3").play();
}


input.addEventListener("input", () => {
  new Audio("./music - Copy/analog-appliance-button-2-185277.mp3").play();
});

