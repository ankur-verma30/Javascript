//trick 1
console.log(2+'2'-1);//21

//trick2
console.log([]==![]);//true

//trick3
console.log('5'+3);//53

//trick4
console.log(3=='3');//true

//trick4
console.log(1<2<3);//true

//trick5
console.log(3<2<1);//true

//trick6
console.log(typeof NaN);//number

//trick7
console.log(typeof typeof 1);//string

//trick8
console.log(1+'1'-1);//10

//trick9
console.log([]+[]+'foo'.split(''));//f,o,o

//trick10
var x=0;
console.log(x++);//0
console.log(++x);//2

//trick11
console.log('1'- -'1');//2

//trick12
console.log(!!null);//false

//trick13
console.log(!!undefined);//false

//trick14
console.log(false=='0');//true
console.log(false==='0');//false

//trick15
var a={b:1};
var c=a;
a.b=2
console.log(c.b);//2

//trick16
console.log('hello');//hello

//trick17
console.log([]==0);//true

//trick18
console.log([]==![]);//true

//trick19
console.log(!![]);//true




