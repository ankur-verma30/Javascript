// 1. Arithmetic operators(addition,substraction , multiplication,division,modulo)
let x;
x=5+5;
console.log(x);

//concatenation 
x='Hello'+" World!";
console.log(x);


//exponent **
x=2**3;
console.log(x);

//Increment and decrement
x=x++;//this will give 8 because in postincrement it first assigns the value then increments it so first it will assign the value 8 to the x then increments it
x++;
console.log(x);

//assignment operator
x=10;


//3. comparison operator

x=2==2;
console.log(x);
x=2=='2';//rarely used or not use ==
console.log(x);//this will also say true because == only checks the value irrespective of the data type 
// for checking both value and the type we have ===(triple equals to)
x=2==='2';
console.log(x);//this will give false as one in number and othe is string 

//not equals 
x=2!='2';
console.log(x);//this will give false
x=2!=='2';
console.log(x);//true


