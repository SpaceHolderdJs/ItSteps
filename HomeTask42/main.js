function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function eraseCookie() {
  [...arguments].forEach((e) => (document.cookie = e + "=; Max-Age=0"));
}

const button = document.querySelector("button");

button.addEventListener("click", function () {
  setCookie("experiment", "novalue", { "max-age": 300 });
  M.toast({ html: "Сookie was added" });
  getCookie("user") == undefined
    ? setCookie("user", true)
    : setCookie("user", false);

  new Card(
    { experiment: getCookie("experiment"), user: getCookie("user") },
    document.querySelector(".card-wrapper")
  );
});

class Card {
  constructor(data, parent) {
    parent.innerHTML = `
        <div class="card blue-grey darken-1">
            <div class="card-content white-text">
                <span class="card-title">Info:</span>
                    <p>Experiment: ${data.experiment}, will expires : <span class = "timer"></span></p>
                    <p>New user: ${data.user}</p>
             </div>
        </div>
       `;
    timer.interval && clearInterval(timer.interval);
    timer(300);
  }
}

function timer(sec) {
  timer.interval = setInterval(() => {
    const date = new Date(sec-- * 1000);
    document.querySelector(
      ".timer"
    ).textContent = `${date.getMinutes()}:${date.getSeconds()}`;
    sec < 0 && [
      M.toast({ html: "Cookie was removed" }),
      clearInterval(timer.interval),
    ];
  }, 1000);
}
