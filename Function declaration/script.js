//function Declarations
console.log(addDollorSign(5))//it works even we have called the statement before the function definition this is called hoisting

function addDollorSign(value){
    return '$'+ value;
}
//can not do hoisting with the function expression

//Fucntion expressions
const func=function (value){
    return '$'+value;
};
console.log(func(6));