class App {
  constructor() {
    this.button = document.querySelector("button");
    this.getIp();

    this.button.addEventListener("click", () => {
      this.getInfo();
    });
  }

  getIp() {
    fetch(`https://api.ipify.org/?format=json`)
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        this.ip = data.ip;
        this.button.classList.remove("disabled");
        M.toast({ html: `Your ip: ${this.ip}` });
        interfaceLogic(data.ip, 100);
      });
  }

  getInfo() {
    fetch(`http://ip-api.com/json/${this.ip}`)
      .then((resp) => resp.json())
      .then((data) => {
        this.data = data;
        console.log(this.data);
        this.renderer(document.querySelector(".render"), this.data);
      });
  }

  renderer(parent, data) {
    parent.innerHTML = `
    <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">${data.country}</span>
      <p>${data.as}</p>
      <p>${data.city}</p>
      <p>${data.query}</p>
      <p>${data.timezone}</p>
    </div>
  </div>
    `;
  }
}

const appp = new App();

function interfaceLogic(ip, q) {
  for (let i = 0; i < q; i++) {
    const elm = document.createElement("p");
    elm.textContent = ip;

    elm.classList.add("decor");

    elm.style.left = `${Math.floor(Math.random() * window.innerWidth)}px`;
    elm.style.top = `${Math.floor(Math.random() * window.innerHeight)}px`;

    document.body.appendChild(elm);

    window.addEventListener("mousemove", function (evt) {
      [...document.querySelectorAll(".decor")].forEach(
        (e) =>
          (e.style.transform = `rotateZ(90deg) translateZ(${
            (evt.pageX - window.innerWidth / 2) / 5
          }px)`)
      );
    });
  }

  function animate() {
    requestAnimationFrame(animate);
    [...document.querySelectorAll(".decor")].forEach((e) => {
      const top = +e.style.top.replace("px", "");
      const speed = Math.floor(Math.random() * 10);
      top >= window.innerHeight + 20
        ? (e.style.top = "-130px")
        : (e.style.top = `${top + speed}px`);
    });
  }

  animate();
}
