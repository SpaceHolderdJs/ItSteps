//Task-1
const JSONCreator = (obj => JSON.stringify({ keys : Object.keys(obj), values : Object.values(obj)}));
    
console.log(JSONCreator({
    name: "Igor",
    age : 21
}));

function flatMap(obj){

   for(let i in obj){
     typeof obj[i] == "object" && [Object.keys(obj[i]).forEach((e,indx)=>obj[e] = Object.values(obj[i])[indx]), delete obj[i]]
  }
   return console.log(JSON.stringify(obj));
}

//Task-2
flatMap({
  name : "Igor",
  age : 21,
  skills : {
             web:"html",
             logic:"Js",
             interface:"React"
           }
});

