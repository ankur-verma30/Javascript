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

let b=20;
// b=b&&10;
b&&=10;
console.log(b);

// ??= nullish coalesing operator
//assign the right side value only if the left is null or undefined

let c;//because here c is undefined n 
c??=20;
console.log(c);

//mutliple lines in the terniary operator
const auth = true;
 const redirect = auth ? (alert("Welcome to the dashboard!"),"/dashboard") : (alert('Access denied!!'),'/login');
 console.log(redirect);

  