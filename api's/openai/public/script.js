const display = document.getElementById("display");
const button = document.getElementById("button");

function getAPI() {
  fetch("http://localhost:3000/api")
    .then((response) => response.json())
    .then((data) => {
      display.innerHTML = data.name;
    });
}

button.addEventListener("click", getAPI);
