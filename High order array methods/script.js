
//for each loop

const socials=["facebook","twitter","whatsapp"]

socials.forEach(function(social){
    console.log(social);
}); 
  

///can be done in the other way also

function logsocials(handles){
    console.log(handles);
}
socials.forEach(logsocials)

// on the objects use of the for each loop
const socialObj=[{
    name:"twitter",url:"http://twitter.com"},
{name:"facebook",url:"http://facebook.com"},
{name:"github",url:"http://github.com"},
]

socialObj.forEach((item)=>console.log(item));

//filter method
const words=["Ram", "Facebook", "battleground", "Twitter", "database"]
//loop through each one of them and give the result
const result=words.filter(word=>word.length>4);
console.log(result);


//Map method

const array1=[1,2,3,4,5]

const double_array1=array1.map((array1)=>array1*2);
console.log(double_array1); 


//chain map method

const squareAndDouble=array1.map((array1)=>Math.sqrt(array1)).map((sqrt)=>sqrt*2);
console.log(squareAndDouble);
//can apply map over anything like over the filter or for each , can have chained methods as much as you want 


//Reduce method
 