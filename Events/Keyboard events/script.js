const ItemInput=document.getElementById("item-name");
// const Onkeypress=(e)=>{
//     console.log("keypress");
// };
// // ItemInput.addEventListener('keypress',Onkeypress);//fires of the event whenever you press any key whether fast or slow

// // const OnKeyUp=(e)=>{
// //     console.log("keyup");
// // }
// // ItemInput.addEventListener("keyup",OnKeyUp);

// // const OnKeyDown=(e)=>{
// //     console.log("keydown");
// // }
// // ItemInput.addEventListener("keydown",OnKeyDown);


// const Onkeypress2=(e)=>{
//     //key that are pressed 
//     console.log(e.key);
//     if(e.key=='z')
//     {
//         alert(`This key should not be pressed is ${e.key}`)
//     }//gives the value of the key pressed simultaneously
//     console.log(e.keyCode);//gives the ASCII value of the key pressed
//     console.log(e.code);//tells us which key is pressed in the keyboard
// }
// ItemInput.addEventListener('keypress',Onkeypress2);


// const KeyboardEvents=(e)=>{
//     if(e.keyCode==13)
//     alert("you pressed the enter key");
// if(e.code==='Digit1')
// console.log("you pressed 1");
// if(e.repeat){
//     console.log("you are holding down " + e.key);
// }
// }
// ItemInput.addEventListener('keypress',KeyboardEvents);

const ShiftKeyPress=(e)=>{
    console.log("Shift is pressed "+ e.shiftKey);
    //this gives shifht value as false when shift is not pressed otherwise on pressed it gives true
    //can also done with other keys
    console.log("CTRL is pressed :"+ e.ctrlKey);
    console.log("ALT is pressed :"+ e.altKey);

}
ItemInput.addEventListener("keypress",ShiftKeyPress); 