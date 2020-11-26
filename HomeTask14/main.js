alert("Open F12 to see result");

class arrayGenerator {
  constructor(n){
    let arr = [];
    for(let i = 0; i < n; i++){
      arr.push(Math.floor(Math.random()*100));
    }
    console.log("Created array:" , arr);
    return arr;
  }
}

function filterRangeInPlace(arr, from , to){
  let filtered = arr.filter(e=> from <= e && e <= to);
  arr.splice(0, arr.length);
  filtered.forEach(e=>arr.push(e));
  return console.log("modified");
}



let sample = new arrayGenerator(10);
filterRangeInPlace(sample, 10, 20);
console.log(sample);

let array = [1,2,3,4,5,6,7,8,10,22];
filterRangeInPlace(array,5,10);
console.log(array)

