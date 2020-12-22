class Alert{

  constructor(text, color, isFadeble){

     const wrapper = document.createElement("div");
     wrapper.classList.add("alert");

     const msg = document.createElement("p");
     msg.textContent = text;

     wrapper.appendChild(msg);

     wrapper.colors = {
       info : `rgb(72,168,212)`,
       primary : `rgb(125,146,141)`,
       success : `rgb(84,204,86)`,
       danger : `rgb(139,0,0)`,
       warning : `rgb(193,216,68)`,
       secondary : `rgb(95,111,107)`
     }

     wrapper.style.backgroundColor = wrapper.colors[color]!==undefined ?
      wrapper.colors[color] : white;

     if (isFadeble) {
      let btn =  document.createElement("button");
      btn.textContent = "OK";
      wrapper.appendChild(btn);

      btn.addEventListener("click", function(){
        return document.body.removeChild(this.parentElement);
      });
    };

     return document.body.appendChild(wrapper);
     
  }

}

new Alert("Ghost","info",true);
new Alert("Ghost","danger",true);
new Alert("text", "success", true);