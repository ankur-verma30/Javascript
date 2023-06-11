let x;
let d=new Date();
x=d;
console.log(d.toString(),typeof d);

d=d.getFullYear();
console.log(d);

d=x.getMonth()+1;//month is 0 based
console.log(d);

d=x.getDay();
console.log(d);

//can use template literal using the backticks 
y=new Date();
x=Intl.DateTimeFormat('en-US').format(y);
console.log(x);

x=Intl.DateTimeFormat('en-GB').format(y);//this is the API version
console.log(x);

x=Intl.DateTimeFormat('default').format(y);
console.log(x);

//more better than Intl methods
x=y.toLocaleString('default',{month:'short'});//gives the short version of the month
console.log(x);

