//Primitive Data Types
/*
1. String-sequence of characters . must be in quotes or backticks

2. Number-sequence number integer as well as floating point numbers

3.Boolean- Logical entities true/false

4.Null-intentional absence of any object value

5.undefined-a variable that has not yet been defined/assigned

6.Symbol-Built-in whose constructor returns a unique symbol

7.BigInt-Numbers that are greater than the "Numbers" type can handle
*/
// Refrence types(objects)-objects,literals, arrays and functions are all refrence types

//javascript is a dynamically typed language 
//typescript is a superset of javascript which allow static-typing. Thic can make your code more verbose and less prone to errros.Typescript may be something you want to look into later
//strig
const firstName = "sara";
console.log(firstName, typeof firstName);
//number
const age = 30;
console.log(age, typeof age);

const float_num = 20.9;
console.log(float_num, typeof float_num);

const aptnumber = null;
console.log(aptnumber, typeof aptnumber);

const a = undefined;
console.log(a, typeof a);

//symbol
const id = Symbol('id');
console.log(id, typeof id);

const n = 1234567899999999999n;//for the big int we should add n after the number
console.log(n, typeof n);

function sayhello() {
    console.log('hello');

}
const output = sayhello;
console.log(output, typeof output);
