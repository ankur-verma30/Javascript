const x=false;

if(x){
    console.log("This is true");
}
else{
    console.log("This is false");
}
console.log(Boolean(x));

//thuthy and falsy caveats

const children=0;

if(!isNaN(children)){
    console.log(`You have ${children} children`); 
}else{
    console.log("Please enter number of children");
}

//checking for empty array
//empty array gives true so what should we do we can check its length
const post=["post 1"]
if(post.length!=0)
{
    console.log("list posts");
}
else{
    console.log("No post found");
}

//checking for the empty objects 
const user={
    name:"Ankur Verma",
};
if(Object.keys(user).length>0)
{
console.log("List users");
}
else{
console.log("No users found");
}

//loose equality(==)
//always use === when use javascript equality
