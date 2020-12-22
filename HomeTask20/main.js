window.addEventListener("load", function() { 

   window.elements = {
     input : document.createElement("input"),
     button : document.createElement("button")
   } 
    
   window.elements.button.textContent = "Render";

   const events = [
     { 
       type : "change",
       function : () => {
         const value = this.value;
       }
     },

     {
       type : "click",
       function : () => {
         const div = document.createElement("div");
         div.classList.add("item");
         div.textContent = window.elements.input.value;
         div.style.animation = `appends 0.6s linear 1`;
         div.style.backgroundColor = `rgb(${Math.floor(Math.random()*150)+100},${Math.floor(Math.random()*150)+100},${Math.floor(Math.random()*150)+100})`;
         return document.body.appendChild(div);
       }
     }
   ];

  

   for(let i in window.elements) {
     document.body.appendChild(window.elements[i]);
   }

   Object.values(window.elements).forEach((e,i,arr)=>arr[i].addEventListener(events[i]["type"], events[i]["function"]));


});

