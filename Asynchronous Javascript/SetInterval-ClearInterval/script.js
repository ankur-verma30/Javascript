const intervalID=setInterval(mycallback,1000,"Ankur");//to get interval id also we can pass arguments which will repeatedly shown in console after a particular interval

function mycallback(a){
    console.log(a,Date.now());//this will give the time stamp after every second as we have passed 1000ms
}
function stopChange(){
    clearInterval(intervalID);//using interval id we can stop it after some time 
}
document.getElementById("stop").addEventListener("click",stopChange);//after clicking the stop button events fire of to stop the change 

//change colors
let intervalid;

function startchange(){
if(!intervalid){
    // intervalid=setInterval(changeColor,1000);//for changing black and white
        intervalid=setInterval(RandomColor,1000);//for changing in multi color
}
}
function changeColor(){
    if(document.body.style.backgroundColor!=='black'){
        document.body.style.backgroundColor='black';
        document.body.style.color='white';
    }
    else{ 
        document.body.style.backgroundColor='white';
        document.body.style.color='black';
    }
}

function RandomColor(){
    const ran= Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor=`#${ran}`;
}
 
function stopChange2(){
    clearInterval(intervalid);
}
document.getElementById("startColor").addEventListener("click",startchange);
document.getElementById("stopColor").addEventListener("click",stopChange2);