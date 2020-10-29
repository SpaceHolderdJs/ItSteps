
const mainModule  = [
  function(
    num1 = parseInt(prompt("Enter number 1")),
    num2 = parseInt(prompt("Enter number 2")),
    res = 0
  ){
    while(num1<=num2){
      res += num1;
      num1++;
    }
     return alert(res);
    },

    function(
      num1 = parseInt(prompt("Enter number 1")),
      num2 = parseInt(prompt("Enter number 2")),
    ){
      if(num2 > 0) { 
        let k = num1%num2;
        return mainModule[1](num2, k); 
      } 
      else { 
        return alert(Math.abs(num1));  
      }
    },

    function(num = parseInt(prompt("Enter number 1")),counter=1,res = "No any"){
       if(num > 0){
         res = [];
         while(counter<=num){
           if(num%counter == 0){
             res.push(counter);
           }
           counter++;
         }
       }
       return alert(res);
    },

    function(num = prompt("Enter number")){
      return alert(`${num.length} items`);
    },

    function(
      array = [],
      positiveNumbers = [],
      negativenumbers = [],
      zeros = [],
      odds = [],
      evens = [],
      others = []
    ){      
        for(let i = 0; i < 10; i++ ){
         array[i] = parseInt(prompt(`Enter ${i} value`));
        }

        array.forEach(e=>{
         
          e%2 ==0 ? evens.push(e): odds.push(e);

          e == 0 ? zeros.push(e) :
           e < 0 ? negativenumbers.push(e) :
            e > 0 ? positiveNumbers.push(e) :
              others.push(e);
        });

        return alert(`
          All ur values: ${array}, Total:${array.length}
          Positive values: ${positiveNumbers}, Total:${positiveNumbers.length};
          Negative values: ${negativenumbers}, Total:${negativenumbers.length};
          Zero values: ${zeros}, Total:${zeros.length};
          Odds values: ${odds}, Total:${odds.length};
          Evens values: ${evens}, Total:${evens.length};
          Others value: ${others}, Total:${others.length};
        `);
      
    },

    function(
      operations = {
        "+": ()=>{
          return alert(parseInt(prompt("Enter 1st value")) + parseInt(prompt("Enter 2 value")));
        },

        "-": ()=>{
          return alert(parseInt(prompt("Enter 1st value")) - parseInt(prompt("Enter 2 value")));
        },

        "*": ()=>{
          return alert(parseInt(prompt("Enter 1st value")) * parseInt(prompt("Enter 2 value")));
        },

        "/": ()=>{
          return alert(parseInt(prompt("Enter 1st value")) / parseInt(prompt("Enter 2 value")));
        }
      }
    ){
      while(confirm("Want to solve?")){
        operations[prompt("Enter [+,-,*,/]")]();
      }
      return;
    },

    function(
      number  = prompt("Enter number"),
      steps = prompt("Enter steps"),
      array = number.split(""),
    ){
      array.sort((e,i)=>{
        if(i<=steps){
          return -1;
        }else{
          return 1;
        }
      });

      return alert(array.join(""));
    },

    function(
      today = new Date().getDate(),
      counter = 1
    ){
      alert(`Today is: ${today}`);
      while(confirm("Want to see next day?")){
       let date  = new Date();
       date.setDate(today+counter);
       alert(`Next day is ${date.getDate()}`);
       counter++;
      }
      return;
    },

    function(res = "", counter = 1){
      res+=`В консоли есть полная версия таблицы \n`;
      for(let i = 2; i<=9; i++){
        res += `___${i}___: \n`;
        while(counter<=9){
          res+= ` ${i} * ${counter} = ${i*counter} \n`;
          counter++;
        }
         counter = 1;
      }
      console.warn(
        `%c ${res}`, 
        `background:grey;
         color:whitesmoke; 
         font-size:30px;
         border:2px solid black; 
         border-radius:15px;
         margin:10px 50px 0px 50px;`
      );
      
      return alert(res);
    },

    function(number = prompt("Enter number"), n = 0, m = 100, array = []){
      
      function Check(n,m){
        array = [];
          for(let i = n; i<=m; i++){
            array.push(i);
          }
          if(array.length == 2 ) {
           return  alert(`Ur number is ${number} so go fuck yourself!`);
          }
          alert(array);
          let middle = array[Math.floor(array.length/2)];
           
          if(confirm(`number>=${middle}?`)){
            Check(middle, m);
          }else if(confirm(`number<=${middle}?`)){
            Check(n,middle);
          }else{
           return alert(`Ur number is ${middle} and go fuck yourself!`);
          }
          
      }
      return Check(n,m);
      
    }
  



];


function Starter(){
  mainModule.forEach((e)=>e());
}

Starter();