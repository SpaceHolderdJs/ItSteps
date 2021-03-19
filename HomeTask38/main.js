$(document).ready(function () {
  let counter = 0;
  const circles = [...$(".circle")];
  function anim1() {
    $(circles[counter])
      .animate(
        {
          width: 50,
          height: 50,
        },
        1000
      )
      .animate(
        {
          width: 30,
          height: 30,
        },
        1000
      );

    counter >= 3 ? (counter = 0) : counter++;
  }

  setInterval(anim1, 500);

  const bigCircle = $(".big-circle");
  let size = 100;
  let border = 50;
  function anim2() {
    size >= 1000 ? (size = 100) : (size += 100);
    border <= 0 ? (border = 50) : (border -= 5);
    $(".big-circle p").text(size / 10 + "%");
    $(bigCircle).animate(
      {
        width: `${size}px`,
        height: `${size}px`,
        "border-radius": `${border}%`,
      },
      100
    );
  }

  setInterval(anim2, 1000);
});
