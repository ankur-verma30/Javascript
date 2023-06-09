//ways to declare a variable 
//1. var
//2. const
//3. let

let firstName = "John";
let lastName = "Doe";
console.log(firstName, lastName);
/*
variables name can only be letter,numbers ,underscores and dollor signs
can't start with a nummber or underscore or dollor
Mutli-Word Formatting
1.CamelCase-firstName
2.underscore-first_name
3.PascalCase-FirstName
4.lowercase-fristname
*/
let age = 32;
console.log(age);
//Reassigning variables
age = 35;
console.log(age);

const x = 11;
// x=12; reassignment of the const variables give the error

//const can also have to be initalized when declared at the same time otherwise it will give an error
const data = 0;
const arr = [1, 2, 3, 4, 5];
//can use methods with the array
arr.push(23);
console.log(arr);

const person = { name: 'John', age: 22 };
console.log(person.name);
//we can also do this
person.name = 'Ankur';
console.log(person.name);
//can also add some of the key in the person object
person.email = 'ankurverma7619@gmail.com';
console.log(person);

//declare multiple values at once;
let a, b, c;
const d = 10, e = 20, f = 30;

//without assignment of the variables what we will get
console.log(a);//this will give undefied which is one of the datatuypes in the javascript
console.log(d);