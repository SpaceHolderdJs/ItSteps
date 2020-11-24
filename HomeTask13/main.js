function Task1(){

  const list  = [
    {
      name : "carrot",
      quantity : 2,
      isBuy : true
    },

    {
      name : "banana",
      quantity : 5,
      isBuy : true
    },

    {
      name : "milk",
      quantity : 1,
      isBuy : false
    },

    {
      name : "potato",
      quantity : 8,
      isBuy : true
    }
  ];

  function show(){
    return  console.table(this.sort(e=>e.isBuy));
  }

  Object.defineProperty(list, "show", {enumerable: false , value : show});  //Один из вариантов добавления скрытого метода в JS, в данном случае он не отобразился в таблице-списке свойст-значений в консоли

  function addItem(name, quantity, isBuy){
    for(let i of this){
      if(i.name == name) {
        i.quantity+=quantity;
        return this.show();
      }
    }

    this.push({
      name : name,
      quantity : quantity,
      isBuy : isBuy
    });

    return this.show();
  }

  Object.defineProperty(list, "addItem", {enumerable: false , value : addItem});


  function toBuy(name){
    for(let i of this){
      if(i.name == name){ 
        i.isBuy = true;
        return this.show();
      };

    }

    return console.warn(`item, named ${name} is apcent in your list`);
  }

  Object.defineProperty(list, "toBuy", {enumerable: false , value : toBuy});

  list.show();
  list.addItem("carrot", 10, true);
  list.addItem("chocolate", 2, false);
  list.toBuy("milk");

}


console.group("===Task1===");
Task1();
console.groupEnd("===Task1===");


function Task2(){

  const list = [
    {
      name : "pop-corn",
      quantity : 2,
      price : 50
    },

    {
      name : "eggs",
      quantity : 10,
      price : 2
    },

    {
      name : "juice",
      quantity : 2,
      price : 50
    },

    {
      name : "sweets",
      quantity : 7,
      price : 6
    },

    {
      name : "fish",
      quantity : 9,
      price : 8
    }
  ];



  function mostExpensive(){
    let res = [];
    this.forEach(e=>{
      res.push(e.quantity * e.price); 
    });
    let max = Math.max.apply(null,res);
    return `Most expensive price is: ${max} $ paid for ${this[res.indexOf(max)].name}`;
  }

  Object.defineProperty(list, "mostExpensive", {enumerable: false, value: mostExpensive});

  function total(){
    let sum = 0;
    this.forEach(e=>{
    sum += e.quantity * e.price;
    });
    return sum;
  }

  Object.defineProperty(list, "total", {enumerable: false, value: total});
  
  function avg(){
    let sum = 0;
    this.forEach(e=>{
      sum += e.price * e.quantity;
    });

    return +sum/this.length.toFixed(2);
  }
   
  Object.defineProperty(list, "avg", {enumerable: false, value: avg});

  function check(){
    prediction = () =>{
     let predictionList = [
       "Some good things will happens to u today!",
       "Prepare for big changes!",
       "U will fall in love!",
       "U will meet one of the most sagnificant person for u today!",
       "Enjoy the sun!",
       "JavaScript is awensome!"
     ];  // Предсказания как в Сильпо на чеках 😁
      return predictionList[Math.floor(Math.random()*predictionList.length)];
    };
    console.log("===Check===");
    console.table(this);
    console.log("Total sum is: ",this.total(),"$");
    console.log(this.mostExpensive());
    console.log("Avarage is :", this.avg());
    console.log(prediction());
  }

  Object.defineProperty(list, "check", {enumerable: false, value: check});

  list.check();

}


console.group("===Task2===");
Task2();
console.groupEnd("===Task2===")


function Task3(){

  const styles = [
    {"color": "blue"},
    {"font-size": "150px"},
    {"font-family": "'Courier New', 'Courier', 'monospace'"},
    {"font-weight": "bold"},
  ];
  
  const p = document.querySelector("p");

  function addP(text, styles){ // Это немного мой способ, так нагляднее и удобнее
    p.textContent = text;
    styles.forEach(e=>p.style[Object.keys(e)[0]] = Object.values(e)[0]);

  }

  addP( "JavaScript", styles );

  //Это для красоты чисто :) 
  document.querySelector(".wrapper").addEventListener("mousemove", function(e){
     this.style.backgroundPosition = `${e.pageX/10}px ${e.pageY/10}px`;
  });
  
}


console.group("===Task3===");
Task3();
console.groupEnd("===Task3===");



function Task4(){

  const list = [
    {
      name : "frontend1",
      sitPlaces : 15,
      fac : "ComputerSience"
    },

    {
      name : "frontend2",
      sitPlaces : 20,
      fac : "ComputerSience"
    },

    {
      name : "managment1",
      sitPlaces : 10,
      fac : "Economic"
    },

    {
      name : "frontend3",
      sitPlaces : 17,
      fac : "ComputerSience"
    },

    {
      name : "managment2",
      sitPlaces : 15,
      fac : "Economic"
    },

    {
      name : "history1",
      sitPlaces : 20,
      fac : "History"
    }
    
  ];
 
  class Group{            // Это конструктор для группы (см. 3 пункт)
    constructor(name, students, fac){
      this.name = name;
      this.students = students;
      this.fac = fac;
    }
  }

  let bestGroup = new Group("F-04", 11, "ComputerSience");
  let someOtherGroup = new Group("D-10", 15, "Economic");

  function show(fac = null, group = null) {  //Задания 1-3 в одной функции параметрально 
    console.log("Finded:");
    if( fac !== null && typeof fac == "string"){
     
      return console.table(list.filter(e=>e.fac == fac));
    }
    if( group !== null && typeof group == "object"){
      return console.table(
        list.filter(e=>e.sitPlaces >= group.students && e.fac == group.fac)
      );
    }

    return console.table(this);
  }

  Object.defineProperty(list, "show", {enumerable: false, value: show});
  
  list.show("History");
  list.show(null, bestGroup);
  list.show(null, someOtherGroup);


  function sortBy(places = null,name = null){  //Задания 4-5
    if(places !== null){
      console.log("Sorted by sitPlaces");
       let res = [...this];
      return console.table(res.sort((e1,e2)=> e2.sitPlaces - e1.sitPlaces));
    }

    if(name !== null){
      console.log("Sorted by names");
       let res = [...this];
      return console.table(res.sort((e1,e2)=>{
          return e1.name.toLowerCase() > e2.name.toLowerCase() ? -1 : 1;
      }));

    }
  }

  Object.defineProperty(list, "sortBy", {enumerable: false, value: sortBy});

  list.sortBy("places", null);
  list.sortBy(null,"names");

}


console.group("===Task4===");
Task4();
console.groupEnd("===Task4===");