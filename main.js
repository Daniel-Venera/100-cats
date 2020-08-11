let log = console.log;
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal__content");
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");

for (let i = 0; i < 100; i++) {
  fetch(`https://api.thecatapi.com/v1/images/search`)
    .then((response) => response.json())
    .then((data) => createImage(data));
}

function createImage(data) {
  var newDiv = document.createElement("div");
  var newImage = document.createElement("img");
  newImage.src = data[0].url;
  newDiv.appendChild(newImage);
  container.appendChild(newDiv);
}

btn.addEventListener("click", function () {
  for (let i = 0; i < 101; i++) {
    fetch(`https://api.thecatapi.com/v1/images/search`)
      .then((response) => response.json())
      .then((data) => createImage(data));
  }
});

var modalTimeOut = setTimeout(function () {
  modal.style.opacity = 0;
  setTimeout(function () {
    modal.style.display = "none";
  }, 1000);
}, 12000);
