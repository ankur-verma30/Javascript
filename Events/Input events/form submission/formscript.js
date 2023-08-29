//action is used to submit the form when we use backend like node.js and php in some file
const Form=document.getElementById("item-form");
function OnSubmit(){
    e.preventDefault();
    // console.log("Form submitted");
    const item=document.getElementById("item-input").value;
    const priority=document.getElementById("priority-input").value;
    if(item==="" || priority==="0")
    {
    alert("Please fill all the details.");
    return; 
    }
    console.log(item,priority);
}
Form.addEventListener("submit",OnSubmit);


//Using the form data object
function Onsubmit2(e){
    e.preventDefault();

    const formdata=new FormData(Form);
    console.log(formdata)

    // const item=formdata.get('item'); //for using the get method i the from we use the name attribute in the form

    // const priority=formdata.get('priority');

    // console.log(item,priority)//this is the most newer way to get the data we have putted in the form 

    const entries=formdata.entries();
    // console.log(entries)//this will give us the iterator through which we have to loop through 
    for(let entry of entries){
        console.log(entry)
    }
}
Form.addEventListener("submit",Onsubmit2)