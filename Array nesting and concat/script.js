const fruits=["apple", "orange"]
const furits_new=fruits
const berries=["strawberry", "blueberry", "raspberry"]

fruits.push(berries)
console.log(fruits)
//berries is the new element in the fruits containing one array of berries itself
let x;
x=fruits[2][1];
console.log(x)
const allfuits=[fruits,berries]
x=allfuits[1][0]
console.log(x)

x=furits_new.concat(berries)
console.log(x)

//using the spread operator(...)
x=[...fruits,...berries]
console.log(x)

//Flatten array
const array=[1,2,[3,4]]
x=array.flat();//makes the single array

console.log(x)

x=Array.isArray(furits_new)
console.log(x)//checkst that is array or not

x=Array.from('12345')//makes it as a array

console.log(x)

const a=1
const b=2
const c=3

x=Array.of(a,b,c)//also converts this into a array
console.log(x)
//challenge 1 solution
x=[1,2,3,4,5]
x.unshift(0)
console.log(x)
x.push(6)
console.log(x)
x.reverse()
console.log(x)

const d=[1,2,3,4,5]
const e=[5,6,7,8,9,10]

//challenge 2 solution
//solution 1
const array3=d.slice(0,4).concat(e)
console.log(array3)

//solution 2
const array4=[...d, ...e]
array4.splice(4,1)
console.log(array4)