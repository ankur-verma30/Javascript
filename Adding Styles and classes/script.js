const text=document.querySelector("p");
const itemList=document.querySelector(".item-list");
const items=itemList.querySelectorAll("li");

function run(){
   console.log(itemList.className);  
   text.className=" card dark";//overwrite the class of the paragraph
}



//classlist property
console.log(text.classList);//gives DOM token list and on this list forEach method can be used to traverse through
// text.classList.add("dark");
// text.classList.remove("card");
text.classList.toggle("dark");
document.querySelector("button").onclick=run;//here run is the function