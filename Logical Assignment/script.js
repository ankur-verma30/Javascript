let a =false;

//-----Method 1----
// if(!a){
//     a=10;
// }


//-----Method 2----
// a=a||10;
//10 will be assigned only to a when the right side is a falsy value and a 


//it shorthand is
//-----Method 3---- 
a||=10;
console.log(a);