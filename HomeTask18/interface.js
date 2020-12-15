const matrix = []
class MatrixPiece {
  constructor(text){
    let element = document.createElement("p");
    element.textContent = text;

    element.className = "matrix";
    element.speed = Math.floor(Math.random()*10+1);

    element.style.left = `${Math.floor(Math.random()*window.innerWidth)}px`;
    element.style.top = `${Math.floor(Math.random()*window.innerHeight)}px `;
    element.style.fontSize = `${Math.floor(Math.random()*12)+3}px`;
    matrix.push(element);

    return document.body.appendChild(element);

  }
}

for(let i = 0; i<290; i++){
  new MatrixPiece("01010010100")
}

document.body.addEventListener("mousemove", function(event){
  matrix.forEach(e=>e.style.transform = `rotateZ(-90deg) translateZ(${event.pageX/10}px)`);
});

function anim(){

  matrix
  .forEach(e=>{
    parseInt(e.style.top.split("").filter(el=>!isNaN(parseInt(el))).join("")) > window.innerHeight +100 ? e.style.top = `-20px`:
    e.style.top = 
      (parseInt(e.style.top.split("").filter(el=>!isNaN(parseInt(el))).join("")) + e.speed)
      .toString()+"px";
  });

  window.requestAnimationFrame(anim);
}

anim();
