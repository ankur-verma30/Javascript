const promise= new Promise((resolve,reject)=>{
    setTimeout(() => {
        let error=true;  //flag value is set true 
        if(!error){
            resolve({name:"John" , age:30});
        }
        else{
            reject("Something went wrong");//this will work when flag is true
        }
    }, 2000);
});

promise.then((user)=>{
    console.log(user);//what we return in .then can be accessed in another .then
    return user.name;
})
.then((name)=>{console.log(name)//chaning 1 then 
    return name.length;
})
.then((length)=>{console.log("the length of the name is ",length)}).catch((error)=>{console.log(error);
    return 123;
}).then((x)=>{
    console.log("This value is returned by the catch block of this code",x);
});//chaining another .then we can do as many as we want

//we can also return from the catch an put it inside .then 
