//concatenation
x='Hello' +" world!"
console.log(x);
name="Ankur Verma ";
age=30;
//concatenation
x="hello my name is "+name +"and my age is "+age;
console.log(x);

//Template literals
x=`Hello my name is ${name}and my age is ${age}`;
console.log(x);

//Properties and methods of string
const s="Hello world";
x=s.length;
console.log(x);

x=s[0];//same goes for array 
// so we can do indexing and slicing

console.log(x);
console.log(x=s.__proto__);//this can be seen in the browser console

console.log(s);
x=s.toUpperCase();//same  there is lower case
console.log(x);


//to get the index 
x=s.indexOf('f');//if the element is not present in the word it will give -1
console.log(x);
//same as slicing
x=s.substring(0,7);
console.log(x);
//only difference in slice and substring that we can use negative values in the slice
x=s.slice(-11,-6);
console.log(x);
x=s.trim();
console.log(x);//it get rid of the whitespace
x=s.replace('o','l');
console.log(x);

x=s.includes("ol");//ol is not present in the string
console.log(x);

x=s.valueOf();
console.log(x);