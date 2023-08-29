const  itemInput=document.getElementById("item-input");
const  priorityInput=document.getElementById("priority-input");

const  checkbox=document.getElementById("checkbox");

const  heading=document.querySelector("h1");


function OnInput(e){
    // console.log("Key is pressed");
    //to get the value typed in the form field not a particular key biut the whole value
    console.log(e.target.value);
    //for getting the seprate keys we want
    console.log(e.key);
    //dynamic with the heading 
    // heading.textContent = e.target.value; not very useful though
}
itemInput.addEventListener("keydown",OnInput);


//using the change event\
function OnInputChange(e){
    heading.textContent = e.target.value;
}
priorityInput.addEventListener("change",OnInputChange);

//working of the checkboxes to get to know that the checkboxes are checked or not
function OnChecked(e){
    console.log(e.target.checked);
    const isChecked = e.target.checked;
    heading.textContent=isChecked?"Checked":"Disabled";//this is done to get the status of the checkboxes
}
checkbox.addEventListener("input",OnChecked);

//Use of focus and blur event listeners generally used for styling purposes
function OnFocus(e){
    console.log("Input is focused");
    e.style.outlineStyle="solid";
    e.style.outlineWidth="5px";
    e.style.outlineColor="green";
    e.style.backgroundColor="green";
}
function OnBlur(e){
    console.log("Input is not focused");
    e.style.outlineStyle="none";
    e.style.outlineWidth="0px";
    e.style.backgroundColor="none";
}
itemInput.addEventListener("focus",OnFocus);
itemInput.addEventListener("blur",OnBlur);   