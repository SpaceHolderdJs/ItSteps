alert("Open F12 to see result");  

class Rectangle {

  constructor(a,b, x1 = 0, y1 = b, x2 = a ,y2 = 0){
    this.a = a;
    this.b = b;
    this.pointsObj = {
      1: {x:x1, y:y1},
      2: {x:x2, y:y2}
    }
  }

  show(){                              
    return console.table(this);
  }


  showPoints(){
    return console.table(this.pointsObj);
  }

  width(){
    return console.log(`Width is: ${this.a}`);
  }
  
  height(){
    return console.log(`Heigth is: ${this.b}`);
  }

  S(){
    return console.log(`S = ${this.a * this.b}`);
  }

  P(){
    return console.log(`P = ${this.a*2 + this.b*2}`);
  }

  changeWidth(a){
    console.log("Width was changed.");
    this.a = a;
    this.pointsObj[2].x = a;
    return this.show();
  }

  changeHeigth(b){
    console.log("Heigth was changed.");
    this.b = b;
    this.pointsObj[1].y = b;
    return this.show();
  }
  
  changeWidthAndHeigth(a,b){
    console.log("Heigth and Width were changed.")
    this.a = a;
    this.pointsObj[2].x = a;
    this.b = b;
    this.pointsObj[1].y = b;
    return this.show();
  }

  removerX(n, msg = console.log("Rectangle was moved (x)"), points = this.showPoints()){
    this.pointsObj[1].x +=n;
    this.pointsObj[2].x +=n;
  }

  removerY(n, msg = console.log("Rectangle was moved (y)"), points = this.showPoints()){
    this.pointsObj[1].y +=n;
    this.pointsObj[2].y +=n;
  }

  removerXY(n,m, msg=console.log("Rectangle was moved (x,y)"), points = this.showPoints()){
   
    this.removerX(n, null, null);
    this.removerY(m, null, null);
     return points;
  }

  initPoint(x,y){
    return console.log( (x >= this.pointsObj[1].x && x <= this.pointsObj[2].x) && 
           (y <= this.pointsObj[1].y && y >= this.pointsObj[2].y) );
  }

}

let sample = new Rectangle(10,20);

sample.showPoints();    //1

sample.width();         //2
sample.height();        //3

sample.S();             //4
sample.P();             //5

sample.changeWidth(30);  //6
sample.changeHeigth(10); //7

sample.changeWidthAndHeigth(40,20); //8

sample.removerX(20);     //9
sample.removerY(40);     //10

sample.removerXY(10,10); //11

sample.initPoint(40,50);       //12 true
sample.initPoint(10,100);      //12 false