const mainModule = [

  function(age = prompt("Enter ur age"), res){
    age <= 2 ? res = alert("Child"):
      age >= 12 && age <=18 ?  res = alert("Teen-er"):
        age> 18 && age <=60 ? res = alert("Older"):
          age > 60 ? res = alert("Oldest"): res = ("Wrong Age");
            return res; 
  },

  function( 
    items = ["`","!","@","#","$","%","^","&","*","(",")"],
    number = prompt("Enter number"), 
    res
  ){
      number>9 || number < 0 ? res = alert("Invalid number"):
       res = alert(`Number is :${number} symbol is: ${items[number]}`);
       return res;
  },

  function(number = prompt("Enter number"),res){
    res =  number.split("").filter((e,i)=> number.indexOf(e) !== i);
    res == ""? res = "NO any same elements": res;
    return alert(res);
  },

  function(year = parseInt(prompt("Enter year")), res){
    (year % 4 == 0 || year % 400 == 0) && year % 100 !== 0 ? res = "Vysokosnyy": 
    res = "NeVysykosnyy"; 
    return alert(res);
  },

  function(number = prompt("Enter number").split(""), isPalid = true){
    for(let i = 0; i < number.length; i++){
      if(number[i] !== number[number.length-1 - i]) isPalid = false;
    }
     return alert(isPalid);
  },

  function(
    $ = parseInt(prompt("Enter USD")),
    converTo = prompt("EUR? UAN? AZN?").toUpperCase(),
    res
    ){
      switch(converTo){
        case "EUR":
          res = $*0.85;
        break;

        case "UAN":
          res = $*28.5;
        break;

        case "AZN":
          res  = $*1.7;
        break;

        default:
         res = "Invalid operation";
        break;
      }
       return alert(res.toFixed(2));
    },

    function(sum = parseInt(prompt("Enter check value")), discount, res){
      sum<200? discount = 0:
       sum>=200 && sum<=300? discount = 0.03:
        sum>300 && sum<=500? discount = 0.05:
         discount = 0.07;

      res = sum  - sum*discount;

      return alert(`Ur sum is : ${sum} Dicount is : ${(discount*100).toFixed(1)}% U have to pay : ${res}`);
    },
   
    function(
      circleLength = parseInt(prompt("Enter circle length")), 
      p = parseInt(prompt("Enter P")),
      side = p/4,
      circleDiameter = circleLength / 3.14
      ){
       return side>=circleDiameter? alert("Yes") : alert("No");
    },

    function(

      qsts = ["What is JS?", "What is HTML?", "What is React?"],

      answers = [ 
        {
          "first":"Programming lang",
          "second":"Markup lang for web",
          "third":"framework for Java"
        },
        {
          "first":"Tool for android development",
          "second":"Markup lang for web",
          "third":"OOP-lang",
        },
        {
          "first":"FrameWork for web dev",
          "second":"New progpamming lang",
          "third":"Video-game"
        },
      ],

      correct  = [1,2,1],

      score = 0,
      
      ){

        class QST{
          constructor(qst, answer, correct){
           let {first,second,third} = answer;
           this.userAnswer = prompt(
             `${qst} 
              1) ${first}
              2) ${second}
              3) ${third}
            `);
           this.correct = correct;
           
           if(this.userAnswer == this.correct){
             alert("Correct!");
             score+=2
           }else{
             alert("Incorrect!");
             score-=2;
            }
          }
        }

        for(let i= 0; i<qsts.length; i++){
           let sample = new QST(qsts[i], answers[i], correct[i]);
        } 

        return alert(`Ur final score is: ${score}`);

    },

    function(today = new Date(), tommorow = new Date(today)){
      tommorow.setDate(tommorow.getDate()+1)
       return alert(`
      Today is:${today}.

      Tomorrow is ${tommorow}
      `);

    }

];


function Starter(){
  mainModule.forEach(e=>e());
};

Starter();