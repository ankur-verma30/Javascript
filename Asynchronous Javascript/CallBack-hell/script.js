function GetData(endpoint){
    const xhr= new XMLHttpRequest();
    xhr.open('GET', endpoint);

    xhr.onreadystatechange = function(){
        if((this.readyState===4) & (this.status===200)){
            console.log(JSON.parse(this.responseText));
        }
    };
    setTimeout(()=>{
xhr.send();
    },Math.floor(Math.random()*3000)+1000);
}


GetData('Asynchronous Javascript\CallBack-hell\movies.json');
GetData('Asynchronous Javascript\CallBack-hell\actors.json');
GetData('Asynchronous Javascript\CallBack-hell\directors.json');