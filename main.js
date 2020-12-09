function isPalid(str){
  return str == str.split("").reverse().join("");
}

console.log(isPalid("ded"));

function numberParser(str){
  let sum =  0;
   str.split("").forEach(el => !isNaN(parseInt(el))  ? sum += parseInt(el) : el);
  return sum;
} 

console.log("Sum is:",numberParser("$123"));


function zeros(num,zer,zn){
   let res = num.toString().split("");
   counter =  zer - res.length;
   for(let i = 0; i < counter; i++ ){
     res.push("0");
   }

   res.unshift(zn);
   return zn ? res.join("") : res.join("");
}

console.log(zeros(134, 6, '+'));

function compramision(){
   return ! [...arguments].every((e,i,arr)=>arr[0].toLowerCase() === arr[i].toLowerCase()) ? false : true;
}

console.log(compramision("AaAb","aAab")); //true
console.log(compramision("AaAb","aAab","cz","aa")) //false
