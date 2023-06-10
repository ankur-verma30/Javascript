//values are stored in the stack 
const name='John';
const age=30;

//References values are stored on the heap
const person={
    name:'Ankur',age:30
};
let newName=name;
newName="Jonathan";

let newperson=person;
newperson.name="Viper";

console.log(name,newName);
console.log(person,newperson);//both have the same values because they point at the same spot in the heap memory
