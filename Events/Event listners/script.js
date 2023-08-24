const ClearBtn=document.querySelector(".btn");
//Javascript event listeners
ClearBtn.onclick=function(){
    alert("clear the items from the list");
}

//Mouse events
const logo=document.querySelector("img");
const onclick=() => {console.log("click event");}
const OnDoubleClick=() => {console.log(" double click event");}


//event listeners
logo.addEventListener("click",onclick);
logo.addEventListener('dblclick',ondblclick);//double click is not working 

//on right click event
const RightClickEvent =()=>console.log("Right click event");

logo.addEventListener('contextmenu',RightClickEvent);
 
const OnMouseDown=()=>console.log("mouse down event is called")
logo.addEventListener('mousedown',OnMouseDown);//here mousedown and click event are called simultaneously when we click and hold mouse down event is called

const OnMouseUp=()=>console.log("mouse up event is called");
logo.addEventListener('mouseup',OnMouseUp);//when we release the hold of the mosue then mouse up event is called

// const onMouseWheel=()=>console.log("mouse wheel event is called");
// logo.addEventListener('wheel',onMouseWheel);//when

const OnMouseOver=()=>console.log("mouse over event is called");
logo.addEventListener('mouseover',OnMouseOver);
const OnMouseOut=()=>console.log("mouse out event is called");
logo.addEventListener('mouseout',OnMouseOut); 


const onDragStart=()=>console.log("onDragStart is called");
logo.addEventListener('dragstart',onDragStart);

const OnDrag=()=>console.log("OnDrag is called");
const OnDragEnd=()=>console.log("OnDragEnd is called");

logo.addEventListener('drag',OnDrag);
logo.addEventListener('dragend',OnDragEnd);