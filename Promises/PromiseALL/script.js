function GetData(endpoint){
    return new Promise((resovle,reject)=>{
        const xhr=new XMLHttpRequest();

        xhr.open('GET', endpoint);
        xhr.onreadystatechange = function(){
            if(this.readyState==4){
                if(this.status==200){
                    resovle(JSON.parse(this.responseText));
        }
        else{
            reject("Something went wrong");
        }
    }
};
        setTimeout(()=>{
        xhr.send();
        },Math.floor(Math.random()*3000)+1000);
    });
}

const moviesPromise=GetData('./movies.json');
const actorsPromise=GetData('./actors.json');
const directorsPromise=GetData('./directors.json');

//Dummy promise is
const DummyPromise=new Promise((resolve,reject)=>{
    resolve("This is the dummy promise");
});

//can add a dummy promise in the array list 
Promise.all([moviesPromise, actorsPromise,directorsPromise,DummyPromise]).then((data) => {
    console.log(data);
}).catch((error)=>{
    console.log(error);
});



