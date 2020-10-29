
const mainModule  = [
  function(){
    return alert(prompt("Enter TRUE or FALSE").toLowerCase()=="true"? "Incorrect"
    : "Correct");
  },

  function(
    number = prompt("Enter number"),
    toCheck = prompt("Enter items to check").split(""),
  ){
    alert(
      `Ur number is ${number},
       We will check that 
       number[first elm] == some of ${toCheck}
    `);
     for(let i = 0; i<toCheck.length; i++){
      toCheck[i]+=` : ${number[0] == toCheck[i]}`;
     }
     return alert(toCheck);
  },

  function(number = prompt("Enter number").split(""), sum1 = 0, sum2 = 0){
     number.forEach((e,i)=>{
       if(i<number.length/2) sum1+=parseInt(e);
    
       if(i>=number.length/2) sum2+=parseInt(e);
     });

     return alert(`Sum1: ${sum1}, Sum2: ${sum2}; ${sum1==sum2}`);
  }
];

function Starter(){
  mainModule.forEach(e=>{
    e();
  });
};


Starter();
