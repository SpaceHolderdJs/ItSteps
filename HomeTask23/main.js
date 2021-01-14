//Task1
const inputs = document.querySelectorAll("input");

const selection = document.querySelector("select");

const p = document.querySelector("p");

for(let i = 1; i<=20; i++){
    let opt = document.createElement("option");
    opt.value = i;
    opt.textContent = i;
    selection.appendChild(opt);
}

[...document.body.children].forEach(e=>e.addEventListener("change", function(){
    p.textContent = `${(parseInt(inputs[0].value)*parseInt(inputs[1].value)*parseInt(selection.value))/100}`;
}));

document.body.addEventListener("mousemove", function(e){
    this.style.backgroundColor = `rgb(${e.pageX/10},${e.pageY/10},${20})`;
});

//Task2

//method1 (primitive)

function Method1(){

    console.group("Method 1");

    let head = {
        glasses: 1
      };
      
      let table = {
        pen: 3
      };
      
      let bed = {
        sheet: 1,
        pillow: 2
      };
      
      let pockets = {
        money: 2000
      };

      const obj = {};

     const collection =  [pockets, bed, table, head];

     collection.forEach((e,i)=>e.__proto__ = [...collection][i+1]);

     console.log(pockets.pen); 
     console.log(bed.glasses);
     // работает норм
     console.groupCollapsed("__");

}

Method1();

//method2 (advenced) es5

function Method2() {

    console.group("Method 2");

    function Head(glasses) {
        this.glasses = glasses; 
    }

    function Table(pen) {
        this.pen = pen;
    }

    function Bed(sheet, pillow) {
        this.sheet = sheet;
        this.pillow = pillow;
    }

    function Pockets(money) {
        this.money = money;
    }
    
    Table.prototype = new Head(1);
    Bed.prototype = new Table(3);
    Pockets.prototype = new Bed(1,2);

    const pokets = new Pockets(2000);

    console.log(pokets.glasses);// первая по иерархии вложенность (поле из head)
    console.groupCollapsed("__");
}

Method2();

function Method3(){
   console.group("Method 3")

    class Head{
        constructor(glasses){
           this.glasses = glasses;
        }
    }

    class Table extends Head{
        constructor(glasses,pen){
            super(glasses);
            this.pen = pen;
        }
    }

    class Bed extends Table{
        constructor(glasses,pen,sheet, pillow){
            super(glasses,pen);
            this.sheet = sheet;
            this.pillow = pillow;
        }
    }

    class Pockets extends Bed{
        constructor(glasses,pen,sheet,pillow,money){
            super(glasses,pen,sheet,pillow);
            this.money = money;
        }
    }

    const bed = new Bed(1,3,1,2);
    const pockets = new Pockets(1,3,1,2,2000);
    
    console.log(pockets.glasses);
    console.log(bed.glasses);

    console.groupCollapsed("__");
}

Method3();

