let amount='100';
console.log(amount,typeof amount);


//to convert the string into a number
//These are the three ways to convert the string into a number
amount=parseInt(amount);
amount=+amount;
amount=Number(amount);

console.log(amount,typeof amount);//string changed to number

//change number to string
amount=amount.toString();
console.log(amount,typeof amount);//number changed to string
//another way to change the number to string 
amount=String(amount);

// change string to decimal
float_1=99.9;
float_1=parseFloat(float_1);
console.log(float_1,typeof float_1);//string changed to number


//convert number to booleam 
data=2;
data=Boolean(data);
console.log(data,typeof data);

//except 0 all numbers give true
//these are the 5 ways to get a Nan
data_2='hello';
//where numbers can't be parsed
data_2=parseInt(data_2);
console.log(data_2,typeof data_2);//it will give the Nan that means not a numbers

//Maths operations where the result is not a real number
console.log(Math.sqrt(-1));

console.log(1+NaN);
console.log(undefined+undefined);
console.log('foo'/3);
