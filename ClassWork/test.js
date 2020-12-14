const table = document.querySelector("table");

table.fill = function(tr,td){

  for(let i = 0; i < tr; i++ ){
    let col = document.createElement("tr");
    this.appendChild(col);
      for(let j = 0; j < td; j++){
        let row = document.createElement("td");
        row.innerText = `${j}`;
        col.appendChild(row);
      }
  }

  return [
    //Первое
    [...this.children].forEach(e=>console.log(e.textContent.split(""))),
    //Второе
    [...this.children]
    .forEach((e,i)=>[...e.children][i].style.backgroundColor = 
    `rgb(${250-i*5},${220-i*10},${240-i*50})`),
    //Третье
    [...this.children].reverse().forEach((e,i)=>[...e.children][i].style.backgroundColor = `rgb(${250-i*20},${220-i*5},${240-i*8})`)
  
  ];

}

table.fill(10,10);


