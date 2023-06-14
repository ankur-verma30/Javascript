// function add(a,b){
//     return a+b;
// }

// Rewrited as arrow function
//removes function keywords in the function expression and after the parameter parentheses put the arrow sign then the body of the function
const add=(a,b) =>{
    return a+b;
}
console.log(add(34,34));

//function without retur statements implicit return 
const substract=(a,b) =>a-b;
console.log(substract(34,34));//no use of the return statement

//if we have the single parameter we can have it without the paranthesis
const increment=a =>++a;
console.log(increment(5));

//returing  objects
const createObj = () => ({
    name:'Ankur Verma',
});
console.log(createObj());


const numbers=[1,2,3,4,5]
// numbers.forEach(function (n) {
//     console.log(n);
// });

//Arrow function in a callback
numbers.forEach((n) => console.log(n));