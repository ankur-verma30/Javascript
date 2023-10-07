const jokeEl=document.getElementById('joke');

const jokebtn=document.getElementById('jokebtn');


const generateJoke=()=>{
    const xhr=new XMLHttpRequest();

    xhr.open('GET', 'https://api.chucknorris.io/jokes/random');

    xhr.onreadystatechange=function(){
      if(this.readyState===4 ){
      if(this.status===200) {

       jokeEl.innerHTML=JSON.parse(this.responseText).value;
     
      } 
      else{
   jokeEl.innerHTML='Something went wrong (Not funny)';
      }
    }
    };
    xhr.send();
};


jokebtn.addEventListener('click',generateJoke);
document.addEventListener('DOMContentLoaded',generateJoke); //document content will load instantly and we will able to see loading just for a instant 