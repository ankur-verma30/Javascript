let x;
console.log(x,typeof x);
x=5+'5';//coverted number in the string 
console.log(x,typeof x);
//we want number addition as the result 
x=5+Number('5');
console.log(x,typeof x);
//now it can do opposite on other operator like it can change it to number also
x=5*'5';//because multiplication between string doesn't means anything

console.log(x,typeof x);//changed to number

x=5+null;//impplicitly changed null to 0
console.log(x,typeof x);

x=Number(null);//changes null to 0
console.log(x,typeof x);

x=Number(true);
console.log(x);
//so what would happen if we do this 

x=5+true;
console.log(x);// true changed to 1
