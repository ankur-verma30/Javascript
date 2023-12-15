//creating promises
const promise=new Promise((resolve,reject)=>{
    //Do some async task
    setTimeout(() => {
        console.log("Async task completed successfully");
        resolve();
    }, 1000);

});

promise.then(()=>{
    console.log("Promise consumed ...");
});

//showing that promise is asynchronous 
console.log("Hello from the global scope ...");


//promise.then can be added at the time of the creation of the promise

//works the same way 
new Promise((resolve,reject)=>{
    //Do some async task
    setTimeout(() => {
        console.log("Async task 2 completed successfully");
        resolve({name : 'John', age: 30});//sometimes we use resolve to return the value 
    }, 1000);

}).then((user)=>{
    console.log(user);
});

//what happens when we encounter an error
const GetUserError=new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error=true;
        if(!error){
            resolve({name : 'John', age: 30});
        }
        else{
            reject("Error: Something went wrong in the promise");
        }
    },1000);
});

GetUserError.then((user)=>console.log(user)).catch((error)=>console.group(error)).finally(()=>console.log("The promise will be either resolved or rejected"));





