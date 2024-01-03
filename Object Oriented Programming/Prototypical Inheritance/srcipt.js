function Shape(name){
    this.name = name;
};

Shape.prototype.logName=function(){
    console.log(`Shape is ${this.name}`);
}

function Rectangle(name,width,height){
    Shape.call(this,name);
    this.width = width;
    this.height = height;
}

function Circle(name,radius){
    Shape.call(this,name);
    this.radius = radius;
}


Rectangle.prototype=Object.create(Shape.prototype);
Rectangle.prototype.logName=function(){
    console.log(`Rectangle: ${this.name}`); //shape name get overridden by the rectangle logName method
}


Circle.prototype=Object.create(Shape.prototype);

//creating other kind of shapes


const rect1 = new Rectangle("Rectangle 1",20,20);
console.log(rect1);

const circle1=new Circle("Circle 1",20);
console.log(circle1);
circle1.logName();
rect1.logName();


//Challenge 1 for the OOP prototype
function Player(name){
    this.name=name;
    this.level=1;
    this.points=0;
}
Player.prototype.GainPoints=function(GainPoint){
    this.points+=GainPoint;
    if(this.points>=10){
        this.level++;
        this.points=this.points%10;
    }
    console.log(this.describe());
}

Player.prototype.describe=function(){
    console.log(`The player ${this.name} has ${this.points} and ${this.level} levels`);
}
const player1=new Player('Bob');
const player2=new Player('Alice');

player1.GainPoints(5);
player2.GainPoints(7);
player1.GainPoints(3);
player2.GainPoints(2);
player1.GainPoints(8);
player2.GainPoints(4);

console.log(player1);
console.log(player2);
