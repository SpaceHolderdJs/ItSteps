//Task1
alert(`Open F12 to se result`);

function same(){ 

  let allArrays = [...arguments].filter(e=>e instanceof Array).sort((e1,e2)=>e2.length-e1. length);
  let biggest = allArrays.shift();
 
  return Array.from(new Set(biggest.filter((e)=>allArrays.every(elem => elem.includes(e)))));
         
}

console.log(same([1,2,3,4,5], [1,2,3,55,2,1], [1,2,3], [0,0,1])); //Любое кол-ство выборок

console.log(same(["apple", "banana", "pear"], ["apple", "pineapple"], ["banana","apple"]));


//Task2

function diff(){

  let allArrays = [...arguments].filter(e=>e instanceof Array);
  let res = [];

  allArrays.forEach(arr=>{
    arr.forEach(e=>res.push(e));
  });

  return Array.from(new Set(res.filter((e)=>!allArrays.every(elem => elem.includes(e)))));
}

console.log(diff([1,2,3,45],[11,23,1]));
