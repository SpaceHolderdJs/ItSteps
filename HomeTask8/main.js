const MainModule  = {

  isYearLeap : (y = +prompt("Enter year"))=> alert(new Date(y,2,1,-1).getDate()==29),

  rectangle : (a = +prompt("Enter a"), b =+prompt("Enter b"))=> alert(`S = ${a*b}`),

  season : (month = +prompt("Enter month"))=> {
   return  month<=2 || month ==12 ? alert("Winter"):
           month>2 && month <= 5 ? alert("Spring"):
             month>5 && month <=8 ? alert("Summer"):
              (month>8 && month<=11)  ? alert("Atumn") :
              alert("Invalid number");
  },

  bank : (years = +prompt("Enter years"),sum = +prompt("Enter value of the money"))=>{
    for(let i = 0; i<= years; i++){
      sum+=sum*0.1;
    }
    return alert(sum.toFixed(2));
  },

  isPrime : (num = +prompt("Enter number"))=>{
    for(let i = 2; i < num; i++)
      if(num % i === 0) return alert(false);
    return alert(num > 1);
  },

  date : (
    date = new Date(),
    day = +prompt("Enter day"),
    month = +prompt("Enter month"),
    year = +prompt("Enter year")
  )=>{
    
    date.setDate(day);
    date.setMonth(month);
    date.setFullYear(year);

    return alert(date.getDate()==day);
  }

}

function Starter(){
  Object.values(MainModule).forEach(e => e());
}

Starter();