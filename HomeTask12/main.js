alert("Open console to see result");
//Task1
console.log("========Task1========");

class constructorOfObj {
  constructor(ch, zn) {
    this.ch = ch;
    this.zn = zn;
  }
  
  sum(obj){
    return new constructorOfObj(
      this.ch * obj.zn + obj.ch * this.zn,
      this.zn * obj.zn
    );
  }

  min(obj){
    return new constructorOfObj(
      this.ch * obj.zn - obj.ch * this.zn,
      this.zn * obj.zn
    );
  }

  mult(obj){
    return new constructorOfObj(
      this.ch * obj.ch,
      this.zn * obj.zn
    );
  }

  div(obj){
    return new constructorOfObj(
      this.ch * obj.zn, 
      obj.ch * this.zn
    );  
  }


  calc(){
    let ch, zn;
    for (let  i = 2; i <= this.ch; i++) {
       if (this.ch % i === 0 &&  this.zn % i === 0){
           ch = this.ch / i, zn = this.zn / i;
       }
    }
    return new constructorOfObj(ch, zn);
  }


}
const obj1 = new constructorOfObj(2,5);
  
const obj2 = new constructorOfObj(1,3);

console.log(obj1.sum(obj2));
console.log(obj1.min(obj2));
console.log(obj1.mult(obj2));
console.log(obj1.div(obj2));
console.log( new constructorOfObj(10,15).calc()) ;

//Task2

console.log("========Task2========");

class Clock {
  constructor(sec,min,hrs){  
    this.sec = sec;
    this.min = min;
    this.hrs = hrs;

    this.fixer();
  }

  show(){
    return console.table(this);
  }

  fixer(){

    
    if(this.hrs < 0) {
      this.min -= -1* +(this.hrs*60).toFixed(0);
      this.hrs = 0;
    }

    if(this.min < 0) {
      if(this.hrs > 0) {
        this.hrs -= +(this.min/60).toFixed(0)>0 ? +(this.min/60).toFixed(0) : 1;
        this.min = 60 + this.min;
      } else {
        this.sec -= -1* +(this.min*60).toFixed(0);
        this.min = 0;
      }
    }

    if(this.sec < 0) {
      if(this.min > 0) {
        this.min -= +(this.sec/60).toFixed(0)>0 ? +(this.sec/60).toFixed(0) : 1;
        this.sec = 60 + this.sec;
      } else {
        this.sec;
      }
    }
  
    if(this.sec >= 60) {
      this.min += +(this.sec/60).toFixed(0);
      this.sec = this.sec % 60; 
    }

    if(this.min >= 60) {
      this.hrs += +(this.min/60).toFixed(0);
      this.min = this.min % 60; 
    }
    
  }

  changeSeconds(n){
    this.sec += n;
    this.fixer();
  };

  changeMins(n){
    this.min += n;
    this.fixer();
  };

  changeHours(n){
    this.hrs += n;
    this.fixer();
  }
}

let sample = new Clock(70,20,1);
sample.show();
sample.changeSeconds(30);
sample.show();
sample.changeHours(10);
sample.show();
sample.changeMins(-20);
sample.show();
sample.changeMins(-2);
sample.show();
sample.changeSeconds(-50);
sample.show();
sample.changeHours(-100);
sample.show();