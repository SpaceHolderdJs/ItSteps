//task1


class Shape{
    
    show(){
        console.table(this);
    }

    P(){
        this instanceof Triangle ? this.p = this.a + this.b + this.c : 
        this.p = 2*this.a + 2*this.b;

        console.log(this.p);
    }

    S(){
        this instanceof Triangle ? this.s =  Math.sqrt((this.p/2) * (this.p/2 - this.a) * (this.p/2 - this.b) * (this.p/2 - this.c)).toFixed(2) : 
        this.s = this.a * this.b;
        
        console.log(this.s);
    }
}

class Triangle extends Shape{
     constructor(a,b,c){
         super();
         this.a = a;
         this.b = b;
         this.c = c;
     }

} 

class Square extends Shape{
     constructor(a,b) {
         super();
         this.a = a;
         this.b =b;
     }
}


const triangle = new Triangle(10,10,10);
triangle.P();
triangle.S();

const square = new Square(10,20);
square.P();
square.S();


//task2
class Counter{

    constructor(min, max, current) {

       this.min = Math.min(min, max);
       this.max = Math.max(min, max);
       this.current = current >= this.max ? this.max : current <= min ? this.min : current;
       
    }

    show(){
        console.table(this);
    }

    inc(n=1){
       this.current ++;
       this.current > this.max ? this.current = this.min : true;
       this.show();
    }

    dec(n=1){
       this.current --;
       this.current < this.min ? this.current = this.max : true;
       this.show();
    }

}

class RandomCounter extends Counter{
    constructor(){
        super(
            Math.floor(Math.random()*10),
            Math.floor(Math.random()*10), 
            Math.floor(Math.random()*10)
        );
    }
}

const sample = new Counter(12,6,2);
sample.show();

sample.dec();
sample.inc();

const randomSample = new RandomCounter();
randomSample.show();
randomSample.inc();