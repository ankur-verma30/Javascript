const num=5;

console.log(num,typeof num);
x= num.toString();
console.log(x);

x= x.substring().length;
console.log(x);
//2 decimal places 
x=num.toFixed(2);
//2 digits in the total 
x=num.toPrecision(2);

x=num.toExponential(3);
console.log(x);
//highes number possible 
  x=Number.MAX_VALUE;
  console.log(x);
//lowest number possible
  x=Number.MIN_VALUE;
  console.log(x);
