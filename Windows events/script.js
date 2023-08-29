//if we put out javascript inside this then we will get no error as it will apply js when the page gets loaded
// window.onload=function(){
//     document.querySelector("h1").textContent="Hello World"//if we place the javascript in the head then we can get the error of cannot set properties of null
// }
//another method
window.addEventListener("load",()=>{
    console.log("page loaded")
})//waits for the whole page to load
//another one
window.addEventListener("DOMContentLoaded",()=>{
    console.log("DOMContentLoaded")
})//only waits this the dom gets loaded
//this loads after then the above load event listner

console.log("Run me")
// document.querySelector("h1").innerText="this is the heading"


window.addEventListener("resize",()=>{
    document.querySelector("h1").innerText=`Resized to ${window.innerWidth}x${window.innerHeight}`;
});
window.addEventListener("scroll",()=>{
    console.log(`Srolled: ${window.scrollX}X ${window.scrollY}`)
    if(window.scrollY>70){
        document.body.style.backgroundColor="black";
        document.body.style.color="white";
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="black";
    }
})