const xhr=new XMLHttpRequest();
xhr.open('GET',"https://api.github.com/users/ankur-verma30/repos");//this us used to fetch any api from the internet and use as a json object and get the value from it 
const xhr2=new XMLHttpRequest();
xhr2.open('GET',"./movies.json");

//ready state has 5 possible values
//0- request is not initialized
//1- server connection established
//2- request recieved
//3-processing request
//4-request finished and response is ready

xhr.onreadystatechange=function(){
    if(this .readyState==4 && this.status==200){
        // console.log(JSON.parse(this.responseText));
        const data=JSON.parse(this.responseText);

        data.forEach((repo)=>{
            const li=document.createElement("li");
            li.innerHTML=`<strong>${repo.name}</strong> -${repo.description} <br><br>`;//this will give the gap after every li statement in the text
            document.querySelector('#results').appendChild(li);
            
        });
    }
};


xhr.send();

xhr2.onreadystatechange =function(){
    if(this.readyState==4 && this.status==200){
        const data1=JSON.parse(this.responseText);

        data1.forEach((movie)=>{
         const li=document.createElement("li");
         li.innerHTML=`<h2>${movie.title}</h2> Year : ${movie.year}`
         document.querySelector("#results").appendChild(li);
        });
    }
};

xhr2.send();