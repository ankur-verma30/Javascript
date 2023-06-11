//Array literal
const arr=[1,2,3,4,5,6,78,9];
console.log(arr,typeof arr);

//Array constructor
const fruits=new Array("apple", "orange", "grapes","mangoes");
console.log(fruits);
//can access specific elments of the array
console.log(fruits[2]);

//can use inside of template literal 

x=`My favourite fruit is ${fruits[2]} and ${fruits[3]}`;
console.log(x);

let y;
y=arr.length;//gives the length of the array
console.log(y);

fruits[2]="cherry";
console.log(fruits);//they are mutable can be changed
//can add more elements 

//other way of adding more elements is 
fruits[fruits.length]="blueberry";
console.log(fruits);//added one more element

//Methods used on the array
fruits.push("banana");
console.log(fruits);

//to add some thing in th beginning of the array we use

fruits.unshift("apple");
console.log("fruits");
//to remove the first element we use shift 

fruits.shift();
console.log("fruits");//apple is removed from the array

//can reverse the array
fruits.reverse();
console.log(fruits);

//include method to check if is it in the array or not it will give true or false

//indexof method to get the index of the element
let d;
d=fruits.indexOf("blueberry");
console.log(d);


d=fruits.slice(1,4);//it will give the araray from 1 indexed ot 3rd indexex  it does not change the original array
console.log(d);

// d=fruits.splice(1,4);//splice take two arguments where to start and how many not the index like the slice takes 
// console.log(d);
// console.log(fruits);//it alter the original array as it deleted the spliced elements from the original array


//can use multiple methods at once
d=fruits.splice(1,4).reverse().toString().charAt(3);//first it spliced the original array then it reversed it then converted to src string and get the character after words
console.log(d);
