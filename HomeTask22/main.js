const keyboard = document.querySelector(".keyboard");
const collection = [];
class Key{

    constructor(letter, parent){
       const key = document.createElement("div");
       collection.push(key);
       key.classList.add("key");
       key.textContent = letter;
       return parent.appendChild(key);
    }    

}

const quantity = ["qwertyuiop","asdfghjkl","zxcvbnm"];


function initKeyBoard(){
    quantity.forEach(e=>{

      let wrapper = document.createElement("div");
      wrapper.classList.add("wrapper")
      keyboard.appendChild(wrapper);

      let i = 0;

       while(i<e.length){
          new Key(e[i].toUpperCase(), wrapper);
          i++;
       }

    });  
}

initKeyBoard();


window.addEventListener("keydown", function(e){
   collection.find(el=>el.textContent.toLowerCase() == e.key.toLowerCase()).classList.add("active");
   window.runOnKeys(()=>alert("Hello"), "x","q","r");
   window.runOnKeys(JS, "j","s");
});

window.addEventListener("keyup", function(e){
    collection.find(el=>el.textContent.toLowerCase() == e.key.toLowerCase()).classList.remove("active");
});


window.runOnKeys = function(func){
  const keys = [...arguments].filter(e=> typeof e == "string" && e.length == 1);
  document.querySelectorAll("p")[0].textContent = `Need to press: ${keys.join("+")}`;
  const active = collection.filter(el => el.classList.contains("active"));
  keys.every(e => active.some(elm => elm.textContent.toLowerCase() == e.toLowerCase()) ) && active.length == keys.length ?  func() : false
}

 function JS ( 
     j = collection.find(e=>e.textContent.toLowerCase()=="j"),
     s = collection.find(e=>e.textContent.toLowerCase()=="s")
     ){
     j.classList.add("js");
     s.classList.add("js");
     j.style.transform = `scale(2.5) translateX(-180px)`;
     s.style.transform = `scale(2.5) translateX(180px)`;

     setTimeout(()=>{

        j.classList.remove("js");
        s.classList.remove("js");
        j.style.transform = `none`;
        s.style.transform = `none`;

     }, 4000);
 }

