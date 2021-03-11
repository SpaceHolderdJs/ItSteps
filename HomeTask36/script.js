const input = document.querySelector("input");

const res = document.querySelector(".content");

class Movie {
  constructor(url, content = document.querySelector(".content")) {
    this.url = url;
    this.content = content;
  }

  getData() {
    fetch(this.url)
      .then((response) => response.json())
      .then((data) => new Render(data.Search).render());
  }
}

class Render {
  constructor(data) {
    this.data = data;
  }

  render() {
    [...res.children].length > 0 &&
      [...res.children].forEach((e) => res.removeChild(e));

    this.data.forEach((e) => new Card(e));
  }
}

class Card {
  constructor(data) {
    const div = document.createElement("div");

    div.classList.add("card");

    div.innerHTML += `
          <img src = ${data.Poster}>
          <h2>${data.Title}</h2>
          <p>${data.Year}</p>
      `;

    div.addEventListener("click", function () {
      fetch(`http://www.omdbapi.com/?apikey=ae256541&i=${data.imdbID}`)
        .then((response) => response.json())
        .then((data) => {
          new Full(data);
          console.log(data);
        });
    });

    res.appendChild(div);
  }
}

class Full {
  constructor(data) {
    [...res.children].find((e) => e.classList.contains("full")) &&
      res.removeChild(
        [...res.children].find((e) => e.classList.contains("full"))
      );

    const div = document.createElement("div");
    div.classList.add("full");

    div.innerHTML += `<img src  = ${data.Poster}/>`;

    const section = document.createElement("section");

    section.innerHTML += ` 
           <h4>${data.Title}</h4>
           <p>${data.Plot}</p>
           <p>${data.Year}</p>
           <p>${data.Released}</p>
      `;

    const button = document.createElement("button");

    button.addEventListener("click", function () {
      [...res.children].find((e) => e.classList.contains("full")) &&
        res.removeChild(
          [...res.children].find((e) => e.classList.contains("full"))
        );
    });

    button.textContent = "Close";

    div.appendChild(section);

    section.appendChild(button);

    res.appendChild(div);
  }
}

const btn = document.querySelector("button");

btn.addEventListener("click", function () {
  if (input.value.length == 0) return new Toast("Input is empty");
  const url = `http://www.omdbapi.com/?apikey=ae256541&s=${input.value}`;
  const movie = new Movie(url);
  movie.getData();
});

class Toast {
  constructor(msg) {
    const toast = document.createElement("div");
    toast.classList.add("toast");

    const p = document.createElement("p");
    p.textContent = msg;
    toast.appendChild(p);

    document.body.appendChild(toast);

    toast.style.animation = `append 2s linear 1`;

    setTimeout(() => {
      toast.style.animation = `hide 1s linear 1`;
    }, 2000);

    return setTimeout(() => {
      document.body.removeChild(toast);
    }, 3000);
  }
}
