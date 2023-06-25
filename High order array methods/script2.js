//Other high order array methods

//reduce method

const numbers=[1,2,3,4,5,6,7,8,9,10]
const sum=numbers.reduce(function(accumulator,currentvalue){
return accumulator + currentvalue;
},0);
console.log(sum);


//shorthand method 
const sum2=numbers.reduce((acc,curr) => acc+curr,0);
console.log(sum2);

//using the for loop
const sum3=()=>{
    let acc=0;
    for(const cur of numbers){
        acc+=cur;
    }return acc;

}
console.log(sum3());

const cart=[{id:1, name:"Product 1",Price:123},
{
    id:2, name:"Product 2",Price:345
},{id:3, name:"Product 3",Price:678}];
const  totalprice=cart.reduce((acc=0,Product)=> acc+Product.Price,0);
console.log(totalprice)
//----------------------------------------------------------------

//Challenge 1: Take th people array and create an array called youngPeople that stores obects with only name and email properties of all the people that are 25 and under.The name property should have their first and last name
//array method challenges


const people=[{
    firstName: "John",
    lastName:"Doe",
    email:"john@example.com",
    phone:'111-111-1111',
age:34},
{
    firstName: "Jane",
    lastName:"Poe",
    email:"jane@example.com",
    phone:'222-222-2222',
    age:24},
{
    firstName: "Bob",
    lastName:"Foe",
    email:"Bob@example.com",
    phone:'333-333-3333',
    age:26},
{
     firstName:"Sara",
    lastName:"Soe",
    email:"Sara@example.com",
    phone:'444-444-4444',
    age:25
}
];
//using the map and he filter method
const youngPeople=people.filter((person) => person.age >25)
.map((person) => ({name:person.firstName +" "+person.lastName,email:person.email}))
console.log(youngPeople)

//Challenge2 : sum of the  positive number in the array

const arr=[2,-30,50,20,-12,-9,7]

const  PositiveSum=arr.filter((arr)=>arr>0).reduce((acc=0,curr)=>acc+curr,0)
console.log(PositiveSum)


//challenge 3: Create a new array called capitalzedWords with the words from the words array with the first letter of each word capitalized

const words=['coder','developer','programmer']
const capitalzedWords=words.map((capitalize)=>
  capitalize[0].toUpperCase()+ capitalize.slice(1,capitalize.length));
console.log(capitalzedWords)