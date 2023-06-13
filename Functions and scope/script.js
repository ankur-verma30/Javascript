function sayhello(){
    console.log("hello world!!")

}
sayhello();

function add(num1,num2){
    console.log(num1+num2)
}
add(3,3);

//
function substract(num1,num2){
    return num1-num2;
    console.log("this is a substract function")//this will not be executed as the function exits as soon as it hits the return statement
}
let x;
x=substract(3,3);
console.log(x);
//can also do
console.log(x,substract(10,2))

//Arguments and parameters
let user;
function register_user(user){
return user + 'is registered'

}
console.log(user)
console.log(register_user("Ankur"))

//default parameters
function default_parameters(user='Bot'){
    return user+' is registered'

}
console.log(default_parameters())

//Rest parameters
function sum(...numbers){
    return numbers
}
console.log(sum(1,2,3,4))//makes it a array
function suk2(...numbers){
    let total = 0;
for(const num of numbers){
    total += num;
}
return total;
}
console.log(suk2(1,2,3,4,5,6))

//objects as parameters
const user2={
    name:"Ankur",id:1,age:30
}
function loginUser(user2){
    return `The user ${user2.name} with the id ${user2.id} is logged in successfully`
}
console.log(loginUser(user2))

//can pass this way also gives the same result
console.log(loginUser({
    id:1,name:"Ankur"
}))

//Array as params

function getRandom(arr){
    const randomIndex=Math.floor(Math.random() * arr.length)
    const item =arr[randomIndex];
    console.log(item)
}
getRandom([1,2,3,4,56,7,8,9,10,11,12]);

//global and local function scope 
//variable shadowing -when the local variable overrides the global variable
const a=100;
function multiply(){
    let a =10;
    const b=5;
    console.log(a*b);
}
multiply();//taking global value //500
// multiply();//gives 50 as it now gives the prefrence to the local scope

//block level scope 

//var is a global scope but let and const are local scope or block scope but with some exceptions

if(true){
    const c=10;
    let d=20;
    var e=30;;
    //all will work under the block but which one will work outside of the scope
}
// console.log(c) this will give error
// console.log(d)//this will also give error 
console.log(e)//it works as it works outside the scope but not all the time

function error(){
    var err=10;
    console.log(err);

}
error();//this works 
// console.log(err);
// this gives error because once the fuction executes all its presence is removed from the main program

//nested function





//nested function
function first(){
    const g=100;
    function second(){
        const h=100;
        console.log(g+h);      
    }
    second();
}
first();

//can access parent within the child but vice versa is not possible it will give error in the block of scope

if(true){
    const x=100;
    if(x===100)
    {
        const y=200;
        console.log(y);//child can access parent
        console.log(x);

    }
    console.log(y);//this will give the error that while is not fefined

}