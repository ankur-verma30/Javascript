const firstName="Ankur";
const lastName="Verma";
const age=20;

const person={
    // firstName: firstName,lastName: lastName,age: age can do it other way
    firstName,lastName,age
}
console.log(person)

//Destructuring 

const todo={
    id:1, title:"Object1"
};
const {id ,title}=todo
console.log(id,title)

// const {
//     id:todoId,//this is renaming
//     user:{name},//this is destructuring 
// }=todo;
//Desctruturing arrays
const numbers=[23,67,33,49];
const [first,second,...rest]=numbers;
console.log(first,second,rest)//put the remaining elements of the array into the subarray

