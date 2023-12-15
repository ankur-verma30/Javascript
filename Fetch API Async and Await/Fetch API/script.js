//Fetching the json file
fetch('./movies.json')
.then((Response)=>Response.json())
.then((data)=> console.log(data));


//fetching the text file
 fetch('./TextFile.txt').then((Response)=>Response.text())
 .then((data)=> console.log(data));//this logs the text inside the file
 
 //fetching from an API
 
 fetch('https://api.github.com/users/ankur-verma30')
.then((Response)=>Response.json())
.then((data)=>(document.querySelector('h2').textContent=data.login));//this changes the name of the h2 tag which takes the login data fromn the API
//there is anything we can find 