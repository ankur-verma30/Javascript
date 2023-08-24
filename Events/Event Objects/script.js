/*
"target"-The element  that triggered the event
-"currentTarget"-the element that the event listeners is attached to (These are the same in this case)
-"type"-Te type of event that was triggered
"Timestamp"-the time that the event was triggered
"clientX"-the x position of the mouse click relative to the window
clientY"-the y position of the mouse click relative to the window
offsetX"-the x position of the mouse click relative to the element
offsetY"-the y position of the mouse click relative to the element
"pagex"-the x position of the mouse click relative to the page
"pagey"-the y position of the mouse click relative to the element
"screenX"-the x position of the mouse click relative to the screen
"screeny"-the y position of the mouse click relative to the element
*/ 
const logo=document.querySelector("img");


function onclick(e){
// console.log(e.target);
//in this case target and current target are same as
// console.log(e.currentTarget);
// e.target.style.backgroundColor="black";
console.log(e.type);
console.log(e.timeStamp);
console.log(e.clientX);
console.log(e.clientY);
console.log(e.offsetX);
console.log(e.offsetY);
console.log(e.pageX);
console.log(e.pageY);
console.log(e.screenX);
console.log(e.screenY);
}
logo.addEventListener('click',onclick);

// document.body.addEventListener('click',function(e){
//     console.log(e.target);
//     console.log(e.currentTarget);
// });

document.querySelector("a").addEventListener("click",function(e){
    e.preventDefault();
    console.log("the link is already clicked");
})
function OnDrag(e){
    document.querySelector("h1").textContent = `X ${e.clientX} Y ${e.clientY}`;
}
logo.addEventListener("click",OnDrag);
