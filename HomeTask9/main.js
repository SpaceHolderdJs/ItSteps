const main = () =>{
  while(confirm("Want to compare?")){
  
    let a = parseInt(prompt("Enter first num"));
    let b = parseInt(prompt("Enter second number"));
  
     if(isNaN(a)) return alert("Error> First argumnet is not a number ");
     if(isNaN(b)) return alert("Error> Second argumnet is not a number ");

     alert(
       a>b? `${a} > ${b}`:
       a<b? `${a} < ${b}`: `${a} = ${b}`
     );

  }
}

main();