setTimeout(() => {
    console.log('Hello from callback');
}, 2000);//2000 is the time after which the function will be called
//even if we make it 0 it will not run first before the globol console log as it gets queued in the task queue 

console.log('Hello from global scope');


//changing heading 
function changeText(){
    document.querySelector("h1").textContent="Hello from the callback";
}
//every settime out has timerid and we need timerid to use cleartimeout function

//cleartime out
const timerId=setTimeout(changeText,3000);//this will change the heading of the tag after 3 seconds

document.querySelector("#cancel").addEventListener('click',()=>{
    console.log(timerId);//2
    clearTimeout(timerId);
    console.log("Timer cancelled");
    //this prevents it from changing if we cancel the timeout before its execution completes;
})