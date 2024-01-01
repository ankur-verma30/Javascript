// fetch('http://httpstat.us/200').then((Response)=>{
//     return Response;
// }).then(()=> console.log('success'));

/*
//this will not be handled using the catch block
fetch('http://httpstat.us/404').then((Response)=>{
    return Response;
}).then(()=> console.log('success'))
.catch((error)=>console.log('error'));
*/

//catch do handles the network erorrs

fetch('http://hello123.net').then((Response)=>{return Response})
.then(()=> console.log('success'))
.catch((error)=>console.log(error));