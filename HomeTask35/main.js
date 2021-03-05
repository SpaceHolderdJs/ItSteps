SVG.on(document, "DOMContentLoaded", function () {
  const draw = SVG()
    .addTo("body")
    .size(`${window.innerWidth}`, `${window.innerHeight}`);

  const gradient = draw.gradient("linear", function (add) {
    add.stop(0, "black");
    add.stop(1, "darkblue");
    add.stop(2, "blue");
  });

  draw
    .circle(400)
    .move(window.innerWidth / 2 - 200, window.innerHeight / 2 - 200)
    .fill(gradient);

  const starStorage = [];

  class Stars {
    constructor() {
      const star = draw
        .circle(Math.floor(Math.random() * 5))
        .move(
          window.innerWidth / 2 - Math.floor(Math.random() * 350) + 200,
          window.innerHeight / 2 - Math.floor(Math.random() * 350) + 200
        )
        .fill("lightblue");

      starStorage.push(star);
    }
  }

  for (let i = 0; i < 300; i++) {
    new Stars();
  }

  console.log(starStorage);

  let text = draw
    .text("@SpaceHolder")
    .font({
      family: "Impact",
      size: 70,
      anchor: "middle",
      leading: "1.5em",
    })
    .move(window.innerWidth / 2 - 200, window.innerHeight / 2 - 75)
    .fill("wheat")
    .animate(1000)
    .ease("<>")
    .move(550, 350)
    .loop(true, true);

  function anim() {
    window.requestAnimationFrame(anim);

    starStorage.forEach((e) =>
      e.node.cx.baseVal.value >= 950 || e.node.cy.baseVal.value >= 600
        ? e.move(
            window.innerWidth / 2 - Math.random() * 150 - 200,
            window.innerHeight / 2 - Math.random() * 300 + Math.random() * 50
          )
        : e.dmove(0.5, 0.3)
    );
  }

  anim();

  const coords = [];

  setInterval(() => {
    const el = starStorage[Math.floor(Math.random() * starStorage.length)];

    coords.length > 10
      ? (coords.length = 0)
      : [
          coords.push(el.node.cx.baseVal.value),
          coords.push(el.node.cy.baseVal.value),
        ];

    const polyline = draw.polyline(coords);
    polyline.stroke({
      color: "lightblue",
      width: 1,
      linecap: "round",
      linejoin: "round",
    });
    polyline.fill("none");

    return setTimeout(() => {
      polyline.remove();
    }, 5000);
  }, 1000);
});
