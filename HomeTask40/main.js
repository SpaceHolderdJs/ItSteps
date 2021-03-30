const main = document.querySelector("main");

const colorWrapper = document.querySelector(".colorset");

const p = document.querySelector("p");

const button = document.querySelector("button");

class Color {
  constructor() {
    this.color = `rgb(${Math.floor(Math.random() * 250)},${Math.floor(
      Math.random() * 250
    )},${Math.floor(Math.random() * 250)})`;

    const element = document.createElement("div");
    element.classList.add("color");

    element.style.backgroundColor = this.color;

    element.addEventListener("click", () => {
      p.style.color = this.color;
    });

    colorWrapper.appendChild(element);
  }
}

function colorSet(n) {
  for (let i = 0; i < n; i++) {
    new Color();
  }
}

colorSet(6);

button.addEventListener("click", function () {
  p.style.color = `rgb(${Math.floor(Math.random() * 250)},${Math.floor(
    Math.random() * 250
  )},${Math.floor(Math.random() * 250)})`;
});

const input = document.querySelector("input");

const cities = document.querySelector(".cities");

input.clear = function () {
  [...cities.children].forEach((e) => cities.removeChild(e));
};

input.addEventListener("mouseover", function () {
  !this.data && (this.data = ["London", "Berlin", "Washington"]);
  this.clear();
  this.data.forEach((e) => (cities.innerHTML += `<p>${e}</p>`));

  cities.style.display = "flex";
  [...cities.children].forEach((e) =>
    e.addEventListener("click", function () {
      input.value = this.textContent;
      this.parentElement.style.display = "none";
    })
  );
});

input.addEventListener("change", function () {
  cities.style.display = "none";
});
