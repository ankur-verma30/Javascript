class Rectangle {
  constructor(name, width, height) {
    this.name = name;
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
  perimeter() {
    //no need for the function keyword
    return 2 * (this.width + this.height);
  }
  isSquare() {
    return this.width === this.height;
  }
  //this can be used to call the function of the class also
  LogArea() {
    console.log("Rectangle area is  " + this.area());
  }
}

const Rectangle1 = new Rectangle("Rectangle1", 20, 20);
console.log(Rectangle1);
console.log("The area of the rectangle is " + Rectangle1.area());
console.log("The perimeter of the rectangle is " + Rectangle1.perimeter());
Rectangle1.LogArea();

//class inheritance

//parent class
class shape {
  constructor(name) {
    this.name = name;
  }
  logName() {
    console.log("Shape Name " + this.name);
  }
}

//subclass
class Rect extends shape {
  constructor(name, width, height) {
    super(name); //this calls the constructor of the parent class
    this.width = width;
    this.height = height;
  }
  logName() {
    console.log("Rect Name " + this.name);
  }
}

//another subclass of shape
class Circle extends shape {
  constructor(name, radius) {
    super(name);
    this.radius = radius;
  }
  logName() {
    //override this method of the parent class
    console.log("Circle Name " + this.name);
  }
}

const r1 = new Rect("R1", 20, 30);
console.log(r1);
r1.logName();

//works for all the classes
const c1 = new Circle("C1", 20);
console.log(c1);
c1.logName();


//checking whether r1 is instance of both rect and shape
console.log(r1 instanceof shape);//instance of both the classes
console.log(r1 instanceof Rect);