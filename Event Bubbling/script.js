const button=document.getElementById("form-button")
const div=document.querySelector("form div:nth-child(2)")
const form=document.querySelector("form")
button.addEventListener("click",(e)=>{
    alert("Button clicked");//not working but if it would have then it would show that first button is clicked then div is clicked then form is clicked then body is clicked
    // this is called event bubbling

    //for stopping the propagation we use
    e.stopPropagation();
});
div.addEventListener("click",()=>{
    alert("Div was clicked");
})
form.addEventListener("click",()=>{
    alert("form is clicked")
})
document.body.addEventListener("click",()=>{
    alert("Body of the page is clicked")
})