const table = document.querySelector("table");

const input = document.querySelector("input");

const p = document.querySelector("p");

input.addEventListener("change", function(){

  const msgError = (el) => {
    return [
     el.textContent = "Color is not exist",
     el.style.color = "darkred"
   ];
  };

  const msgSucc = (el) => {
    return [
     el.textContent = "Enter color name",
     el.style.color = "grey"
    ];
  }

  return [
   
    [...table.children].reverse().forEach((e,i,arr)=>[...arr[i].children].reverse().splice(i)
    .forEach(el=>{
      let colorWas = el.style.backgroundColor; 
      el.style.backgroundColor = this.value;
      colorWas == el.style.backgroundColor ? msgError(p) : msgSucc(p) ;
    })),
    
    
  ]
});   

table.fill = function (tr,td){

  for(let i = 0; i<tr; i++){
    let row = document.createElement("tr");
    this.appendChild(row);

     for(let j = 0; j<td; j++){
       let col = document.createElement("td");
       col.textContent = `${j}`;
       row.appendChild(col);
     }
  }

  return [...table.children].forEach((e,i,arr)=>e.children[i].style.animation = "glowing 2s linear infinite");
  
}

table.fill(10,10);  