function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
}

const rect1 = new Rectangle("Rectangle1", 20, 20);

//we can get the prototype of any object
console.log(Object.getPrototypeOf(rect1));

//add methods to the prototype chain
//making area function prototype
Rectangle.prototype.area = function () {
  return this.width * this.height;
};

Rectangle.prototype.perimeter = function () {
  return 2 * (this.width + this.height);
};

Rectangle.prototype.isSquare = function () {
  return this.width === this.height;
};

Rectangle.prototype.ChangeName = function (name) {
  return (this.name = name);
}

//checking the added prototypes
console.log(rect1.area()); //this works just fine
console.log(rect1.perimeter());
console.log(rect1.isSquare());
// console.log(rect1.ChangeName("ChangeName"));

console.log(rect1);
