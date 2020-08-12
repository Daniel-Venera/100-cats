let log = console.log;
let modal = document.querySelector(".modal");
let modalContent = document.querySelector(".modal__content");
let modalLoading = document.querySelector(".modal__loading");
let count = 0;
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
  if (data[0].width > 2000 || data[0].height > 2000) {
    log(data[0]);
    data[0].width = data[0].width / 2;
    data[0].height = data[0].height / 2;
    log(data[0]);
  }
  if (data[0].width >= data[0].height * 1.5) {
    newDiv.classList.add("horizontal");
  }
  if (data[0].height >= data[0].width * 1.5) {
    newDiv.classList.add("vertical");
  }

  if (data[0].width > 1500 && (data[0].width < data[0].height * 1.5 || data[0].height < data[0].width * 1.5)) {
    newDiv.classList.add("big");
  }

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
}, 11000);

var modalLoadingInterval = setInterval(function () {
  if (count <= 100) {
    modalLoading.innerText = count;
    count++;
  }
}, 100);
