const person={
    name:"Ankur Verma",
    age:20,
    gender:"Male"
}
console.log(person)
//to ways to access the data inside the person
x=person.name
console.log(x)
x=person['age']
console.log(x)

const address={
    country:"India",
    state:"Uttar Pradesh",
    home_address:{
        Street:"Indira Nagar",
        landmark:"Near Munshipuia Metro",
        sector:17,
        house_number:"559"
    }
}

x=address.home_address.landmark
console.log(x)
//can update any values

address.home_address.Street="Indira Nagar,Lucknow"

console.log(address)

//to remove any property
delete address.home_address.house_number;
console.log(address)

//add new property 

address.permanent_address="yes";


console.log(address)


//Objects spread operator and methods
// const todo={};
const todo=new Object();
todo.id=1;
x=todo;
console.log(x);

const obj1={a:1,b:2,c:3,d:4};
const obj2={e:6,f:7,};
const obj3={obj1,obj2};//object 2 will be the nested object so to unnest or make the main object we have to use spread operator

x=obj3;
// console.log(x);
x={...obj1,...obj2};//spread operator
console.log(x);
//object assign

const obj4=Object.assign({},obj1,obj2);
console.log(obj4);//same works as spread operator

let y;

const todo1=[
    {id:1,name:"ankur"},
    {id:2,name:"deepak"},
    {id:3,name:"suraj"}
]
y=todo1[0]
console.log(y);
 y=Object.keys(todo1)
 console.log(y);
 y=Object.keys(todo1).length;
 console.log(y);
 y=Object.values(todo1)
 console.log(y);

 y=Object.entries(todo1);
 console.log(y);

 y=todo1.hasOwnProperty('age');//checks whether you have the property or not gives the boolean value in result like true or false
 console.log(y);