document.addEventListener("DOMContentLoaded", function () {
  const elems = document.querySelectorAll(".modal");
  M.Modal.init(elems);

  const select = document.querySelectorAll("select");
  M.FormSelect.init(select);
});

function initModalData(data) {
  console.log(data);
  const modal = document.querySelector("#userInfo");
  const modalContent = modal.querySelector(".modal-content");

  const posts = [...document.querySelectorAll(".post")].filter(
    (e) => e.querySelector(".user-name").textContent == data.username
  );

  let likes = 0;
  posts.forEach((e) => (likes += +e.likes));

  [...modalContent.children].forEach((e) => modalContent.removeChild(e));

  modalContent.innerHTML = `
      <h4 class = "row"><i class="medium material-icons">person</i>${data.username}</h4>
      <span>${data.name}</span>
      <hr>
      <p>Posts: ${posts.length}</p>
      <p>Total likes: ${likes}</p>
      <hr>
      <p class = "row"><i class="material-icons">phone</i>${data.phone}</p>
      <p class = "row"><i class="material-icons">markunread</i>${data.email}</p>
      <hr>
      <span>${data.address.city},</span>
      <span>${data.company.name}</span>
    `;
}

const topButton = document.querySelector(".top");

window.addEventListener("scroll", function () {
  window.scrollY > window.innerHeight / 2
    ? (topButton.style.display = "flex")
    : (topButton.style.display = "none");
});

topButton.addEventListener("click", function () {
  window.scrollTo(0, 0);
});

const addPostButton = document.querySelector(".addPost");

const modal = document.querySelector("#createPost");
const publishPostButton = modal.querySelector(".modal-close");

const input = modal.querySelector("input");
const textarea = modal.querySelector("textarea");
const select = modal.querySelector("select");

publishPostButton.addEventListener("click", function () {
  const data = {
    title: input.value,
    body: textarea.value,
    userId: select.value,
    id: [...document.querySelectorAll(".post")].length,
  };

  new Post(data, window.users, true);

  [...document.querySelectorAll(".post")].forEach((e) => {
    e.querySelector(".user-name").addEventListener("click", function () {
      initModalData(users.find((e) => e.id == data.userId));
    });

    e.querySelector(".like").addEventListener("click", function () {
      this.style.color = "red";
      e.likes++;
      e.querySelector(".likes").textContent = e.likes;
    });

    e.querySelector(".edit").addEventListener("click", function () {
      const modal = document.querySelector("#editPost");
      const button = modal.querySelector(".modal-close");

      const modalInput = modal.querySelector("input");
      const textarea = modal.querySelector("textarea");

      modalInput.value = textarea.value = "";

      button.addEventListener("click", function () {
        e.querySelector("h4").textContent = modalInput.value;
        e.querySelector("p").textContent = textarea.value;

        fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            body: modalInput.value,
            title: textarea.value,
          }),
        })
          .then((response) => response.json())
          .then((d) => {
            console.log(d);
            M.toast({ html: "Post was modyfied" });
          })
          .catch((e) => M.toast({ html: "Something went wrong" }));
      });
    });

    e.querySelector(".delete").addEventListener("click", function () {
      document.querySelector(".posts").removeChild(e);

      fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
        method: "delete",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((d) => M.toast({ html: `Post was removed from sever` }))
        .catch((e) => M.toast({ html: "Something went wrong" }));
    });
  });

  input.value = textarea.value = select.value = "";

  fetch(`https://jsonplaceholder.typicode.com/posts`, {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },

    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((d) => {
      console.log(d);
      M.toast({ html: "Post was added" });
    })
    .catch((e) => M.toast({ html: "Something went wrong" }));
});

const sections = document.querySelectorAll(".section");

const hideAll = function (arr) {
  arr.forEach((e) => e.classList.remove("active"));
};

const links = document
  .querySelector("nav")
  .querySelector("ul")
  .querySelectorAll("a");

links.forEach((e, i) =>
  e.addEventListener("click", function () {
    hideAll(sections);
    sections[i].classList.add("active");
  })
);

class Users {
  constructor() {
    this.parent = document.querySelector(".users");
  }

  getUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((e) => {
          window.users = data;
          new User(e);
          document
            .querySelector("#createPost")
            .querySelector(
              "select"
            ).innerHTML += `<option value = "${e.id}">${e.username}</option>`;
        });
        new Posts().getPosts(data);
      });
  }
}

class User {
  constructor(data) {
    this.parent = document.querySelector(".users");

    this.data = data;

    const div = document.createElement("div");
    div.className = "waves-effect waves-light user-min";

    div.innerHTML += `
        <i class="medium material-icons">person</i>
        <div class = "col">
            <h6>${data.username}</h6>
            <span>${data.name}</span>
        </div> 
    `;

    const a = document.createElement("a");
    a.className = "modal-trigger waves-effect waves-light btn";
    a.href = "#userInfo";
    a.textContent = "More";

    a.addEventListener("click", () => {
      initModalData(this.data);
    });

    div.appendChild(a);

    this.parent.appendChild(div);
  }
}

new Users().getUsers();

class Posts {
  constructor() {
    this.parent = document.querySelector(".posts");
  }

  getPosts(users) {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        data.forEach((e) => new Post(e, users));
      });
  }
}

class Post {
  constructor(data, users, isNew) {
    this.parent = document.querySelector(".posts");

    const div = document.createElement("div");
    div.className = "post waves-effect waves-light col";

    div.likes = Math.floor(Math.random() * 100);

    div.innerHTML = `
      <h4>${data.title}</h4>
      <p>${data.body}</p>
      <hr>
      <div class = "row">
         <div>
          <i class="material-icons">person</i>
          <a class = "user-name modal-trigger" href = "#userInfo">${
            users.find((e) => e.id == data.userId).username
          }</a>
          <span class = "likes">${div.likes}</span>
          <i class = "like material-icons waves-effect waves-red">favorite</i>
         </div>
          <a class = "edit modal-trigger" href = "#editPost"><i class = "material-icons">mode_edit</i></a>
          <i class = "material-icons delete">delete</i>
        
      </div>
    `;

    div.querySelector(".user-name").addEventListener("click", function () {
      initModalData(users.find((e) => e.id == data.userId));
    });

    div.querySelector(".like").addEventListener("click", function () {
      this.style.color = "red";
      div.likes++;
      div.querySelector(".likes").textContent = div.likes;
    });

    div.querySelector(".edit").addEventListener("click", function () {
      const modal = document.querySelector("#editPost");
      const button = modal.querySelector(".modal-close");

      const modalInput = modal.querySelector("input");
      const textarea = modal.querySelector("textarea");

      button.addEventListener("click", function () {
        div.querySelector("h4").textContent = modalInput.value;
        div.querySelector("p").textContent = textarea.value;

        fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
          method: "PATCH",
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
          body: JSON.stringify({
            body: modalInput.value,
            title: textarea.value,
          }),
        })
          .then((response) => response.json())
          .then((d) => {
            console.log(d);
            M.toast({ html: "Post was modyfied" });
          })
          .catch((e) => M.toast({ html: "Something went wrong" }));
      });
    });

    div.querySelector(".delete").addEventListener("click", function () {
      document.querySelector(".posts").removeChild(div);

      fetch(`https://jsonplaceholder.typicode.com/posts/${data.id}`, {
        method: "delete",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((d) => M.toast({ html: `Post was removed from sever` }))
        .catch((e) => M.toast({ html: "Something went wrong" }));
    });

    if (isNew) {
      div.innerHTML += `<span class="new badge red" data-badge-caption="NEW"></span>`;
      this.parent.appendChild(div);

      const childs = [...this.parent.children];

      childs.sort((e1, e2) =>
        e1.querySelector(".badge") !== undefined ? -1 : 1
      );

      [...this.parent.children].forEach((e) => this.parent.removeChild(e));

      return childs.forEach((e) => this.parent.appendChild(e));
    }

    this.parent.appendChild(div);
  }
}
