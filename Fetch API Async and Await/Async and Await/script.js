const promise = new Promise((resolve, reject) =>{
    setTimeout(() => {
        resolve({name:'Ankur',age:20})
    },1000);
});

// promise.then((data)=>console.log(data));

//works same as promise.then
async function getPromise() {
    const response=await promise;
    console.log(response);
    console.log("This is the use of async and await with promise");
}

// getPromise();

//using async and await with fetch API
async function getUsers(){
    const res=await fetch('https://api.twitter.com/users');
    const data=res.json();
    console.log(data);
    console.log('This is the using async and await with fetch API');
}
getUsers();


//how it works with arrow functions

const getposts= async()=>{
    const res=await fetch('https://api.twitter.com/posts');
    const data=res.json();
    console.log(data);
    console.log("This is the async arrow function ")
}
getposts();