//Во всех заданиях было принято решение расширить функциональную модель каждого экземпляра //глобального класса Object соответствующими заданиям прототипами (prototype);

const Tasks  = {
  
    first: ()=>{
      let salaries = {
        John: 100,
        Ann: 160,
        Pete: 130
      }
    
      Object.prototype.sumOfAllValues = function(sum = 0){

        for(let item in this){
          if(typeof this[item] == "number"){
            sum+=this[item];
          }
        }

        console.log(`The sum of all values from object is ${sum}`);
        return sum;

      }

      return  salaries.sumOfAllValues();

    },

    second: ()=>{
      let menu = {
        width: 200,
        height: 300,
        title: "My menu"
      };

      Object.prototype.multiplyNumeric = function(){

        for(let i in this){
          if(typeof this[i] == "number"){
            this[i] = this[i]*2;
          }
        }
        
        console.table(this);
        return this; // Я всё-таки верну объект, но он, в любом случае, уже изменён 

      }

      return menu.multiplyNumeric();

    },

    third: ()=>{
      let testObj1 = {};                 //Пустой объект

      let testObj2 = {
        "row1" : "Some value",
        "row2" : 1200 
      };                                //Заполненый объект

      

      Object.prototype.isEmpty = function(){
      
        return console.log(Object.values(this).length == 0)
        
      }

      testObj1.isEmpty();
      testObj2.isEmpty();
    
    }

}


function Starter(){
  alert("Visit F12 to see result")
  for(let i in Tasks){
    marker(i);
    Tasks[i]();
  }
  
}

Starter();


function marker(task){
  return console.log(`\n=============Task ${task}==============\n`);
}