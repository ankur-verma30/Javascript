function Rectangle(name, width, height) {
  console.log("this is the function of rectangle ");
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

const rect1 = new Rectangle("rect1", 10, 10);
console.log(rect1);
console.log("This is the area of rectangel " + rect1.area());

//now we can create as many instances we want

console.log(rect1.constructor);
/*
Rectangle(name, width, height) {
  console.log("this is the function of rectangle ");
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return th…   //this is the value returned by the this constructor method
*/
console.log(rect1 instanceof Rectangle); //it gives the bool value that it is instanceof Rectangle or not

//literals vs constructors

const strlit = "Hello world";
const strObj = new String("Hello world");

console.log(strlit, typeof strlit);
console.log(strObj, typeof strObj);

//Boxing -it means methods cannot be directly applied to string literals hence javascript wraps them inside the string object itself
console.log(strlit.toUpperCase());

//Unboxing - it means we started as a object and converted it into a string literal
console.log(strObj.valueOf(), typeof strObj.valueOf());

//other types

const numlit = 20;
const numObj = new Number(20);

console.log(numlit, typeof numlit);
console.log(numObj, typeof numObj);

const boollit = true;
const boolObj = new Boolean(true);

console.log(boollit, typeof boollit);
console.log(boolObj, typeof boolObj);


//arrays are primitive values
const arrlit = [1, 2, 3, 4, 5, 6]; //here it is both object
const arrObj = new Array(1, 2, 3, 4, 5, 6);
   
console.log(arrlit, typeof arrlit); //both are objects in case of arrays
console.log(arrObj, typeof arrObj);

//function as object
const funcLit=function(x){
  return x*x;
};

console.log(funcLit, typeof funcLit);

//function using constructor
const funcObj=new Function('x','return x*x');
console.log(funcObj(9)); 

console.log(funcObj,typeof funcObj);

//creating empty object
const obj1={};
const obj2=new Object();

console.log(obj1,typeof obj1);
console.log(obj2,typeof obj2);