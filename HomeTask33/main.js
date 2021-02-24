const buttonSearch = document.querySelector("a");
const input = document.querySelector("input");
const select = document.querySelector("select");

const main = document.querySelector("main");

const info = document.querySelector("#info");

class Card {
  constructor(data, parent) {
    parent.innerHTML += `
    <div class="card">
      <div class="card-image">
        <img src="${data.Poster}">
      </div>
      <div class="card-content">
        <h5>${data.Title}</h5>
        <p>Year : ${data.Year}</p>
        <p>${data.Type}</p>
      </div>
      <div class="card-action">
        <a href = "#info" class = "teal-text more" data-film-id = "${data.imdbID}">More</a>
      </div>
    </div>
    `;
  }
}

class InfoCard {
  constructor(data, parent) {
    parent.innerHTML += `
    <div class="card horizontal">
      <div class="card-image">
        <img src="${data.Poster}">
      </div>
      <div class="card-stacked">
        <div class="card-content">
          <h3>${data.Title}</h3>
          <p>Year: ${data.Year}</p>
          <p>Country: ${data.Country}</p>
          <p>Raiting: ${data.imdbRating}</p>
          <div class="progress">
            <div class="determinate" style="width: ${
              data.imdbRating * 10
            }%"></div>
          </div>
          <p>Duration:  ${Math.trunc(+data.Runtime.split(" ")[0] / 60)}h : ${
      +data.Runtime.split(" ")[0] % 60
    }min</p>
          <p>Genre: ${data.Genre}</p>
          <p>Production: ${data.Production}</p>
          <h4>History</h4>
          <p>${data.Plot}</p>
        </div>
    </div>
    `;
  }
}

function contentInit(n) {
  const pagination = document.createElement("ul");
  pagination.innerHTML += `<li><button><i class="material-icons">chevron_left</i></button></li>`;

  for (let i = 0; i <= Math.floor(n / 3); i++) {
    const section = document.createElement("section");
    section.id = `sect${i}`;
    main.appendChild(section);

    const li = document.createElement("li");

    const button = document.createElement("button");

    button.textContent = i;

    button.classList.add("waves-effect");

    li.appendChild(button);

    pagination.appendChild(li);
  }

  main.appendChild(pagination);

  pagination.innerHTML += `<li><button><i class="material-icons">chevron_right</i></button></li>`;
  pagination.style.display = "flex";

  document.querySelector("#sect0").style.display = "flex";
}

buttonSearch.addEventListener("click", function () {
  main.children.length > 0 &&
    [...main.children].forEach((e) => main.removeChild(e));

  const filmName = input.value;
  const filmType = select.value;

  if (input.value == "") return M.toast({ html: "Input is empty" });

  fetch(
    `http://www.omdbapi.com/?apikey=2a02f365&s=${filmName}&type=${filmType}`
  )
    .then((response) => response.json())
    .then((data) => {
      contentInit(data.Search.length);
      data.Search.forEach(
        (e, i) =>
          new Card(e, document.querySelector(`#sect${Math.trunc(i / 3)}`))
      );

      const pagination = document.querySelector("ul");
      const pagins = [...pagination.children].slice(
        1,
        pagination.children.length - 1
      );

      pagins.forEach((e) =>
        e.addEventListener("click", function () {
          document
            .querySelectorAll("section")
            .forEach((e) => (e.style.display = "none"));

          document.querySelector(`#sect${this.textContent}`).style.display =
            "flex";
        })
      );

      const linksMore = document.querySelectorAll(".more");

      linksMore.forEach((e) =>
        e.addEventListener("click", function () {
          info.children.length > 0 &&
            [...info.children].forEach((e) => info.removeChild(e));
          fetch(
            `http://www.omdbapi.com/?apikey=2a02f365&i=${this.dataset.filmId}`
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              new InfoCard(data, info);
            });
        })
      );
    });
});
