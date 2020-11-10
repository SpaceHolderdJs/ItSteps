const mainModule = [

  function(res = {}, from = -5, to = 5){
    for(let i = from; i<=to; i+=0.5){
      res[i] = 5 - (Math.pow(i,2)/2)
    }
    alert("Result is in console");
     return console.table(res);
  },

  function(items = [], res = {}){

    for(let i = 0; i<10; i++){
      items.push(+prompt(`Enter ${i} number`));
    }

    res.positive = items.filter(e=>e>0);
    res.negative = items.filter(e=>e<0);
    res.zeros = items.filter(e=>e==0);

    res.odd = items.filter(e=>e%2!==0);
    res.even = items.filter(e=>e%2==0);
    
    alert("Result is in console"); 
    return console.table(res);    
  },

  function(){
    
    while(confirm("Want to solve?")){
      let a = +prompt("Enter a"); 
      let b = +prompt("Enter b");
      let operation = prompt("Enter operation");
      this.cases = {
        "+": a+b,
        "-": a-b,
        "*": a*b,
        "/": a/b
      };
      alert(`Result is ${this.cases[operation]}`);

    }
    return;
  },

  function(){
    for(let i = 2; i<=10; i++){
       console.log(`%c << ${i}  >>`, 
       "background-color:teal;color:white;margin:10px;font-size:20px;"
       );
      for(let j = 1; j<=10; j++){
        console.log(`%c ${i} * ${j} = ${i*j}`,
        `background-color: rgb(${250/i},${140},${i*10}); padding:10px; font-size:18px;`
        );
      }
    }
    return alert("Result is in console");
  } 


];

function Starter(){
  return mainModule.forEach(e=>e());
}

Starter();