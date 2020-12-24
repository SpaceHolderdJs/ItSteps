function Task1 () { 
const p = document.querySelector("p");
const data = p.textContent.split("");

p.textContent = "";

  class Span{
    constructor(letter){
      const span = document.createElement("span");
      span.textContent = letter;

      span.addEventListener("click", function(){
        return this.classList.add("selected");
      });

      return span;
    }
  }

  data.forEach(e=>p.appendChild(new Span(e)));
  
}

Task1();

function Task2(){
  
  const msg = document.createElement("p");
  msg.textContent = "Now click and hold ur mouse";
  document.body.appendChild(msg);

  let intervalUp, intervalDown;
  window.addEventListener("mousedown", function(){
    const colors = {
      r:0,
      g:0,
      b:0
    }
    clearInterval(intervalDown);
    intervalUp = setInterval(() => {

      colors.r <= 255 ? colors.r +=5 : colors.g <= 255 ? colors.g +=5 : colors.b +=5

      document.body.style.backgroundColor = `rgb(${colors.r},${colors.g},${colors.b})`;
    }, 100);

    window.addEventListener("mouseup", function(){
       clearInterval(intervalUp);
       intervalDown = setInterval(() => {
        colors.r > 0 ? colors.r -=5 : colors.g > 0 ? colors.g -=5 : colors.b -=5

        document.body.style.backgroundColor = `rgb(${colors.r},${colors.g},${colors.b})`;
       }, 100);
    });
    
  });
}
const button = document.querySelector("button");

 button.addEventListener("click",Task2,1);
