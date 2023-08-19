//document.getElementById()
console.log(document.getElementById("para"))

//get attributes using the methods
console.log(document.getElementById("para").getAttribute("id"))
console.log(document.getElementById("para").getAttribute("class"))


//change the id
let newPara;
newPara=document.getElementById("para").id="new-para"
console.log(newPara)
//now if we use old id it will not work and give null 

//using the setAttribute method
document.getElementById("new-para").setAttribute("class", "class-paragraph")
console.log(document.getElementById("new-para").getAttribute("class"))
const title=document.getElementById("new-para");
//putting some styles using the javascript 
title.style.color = "green";
//camel case in javascript
title.style.backgroundColor="aqua"; 

//document.querySelector()
console.log(document.querySelector('h2'));
console.log(document.querySelector(('.main')));
console.log(document.querySelector('.subheading'));


//use these methods on other elements 
const list=document.querySelector('ul');
console.log(list);
console.log(list.innerHTML); 
const firstItem=list.querySelector('li');
firstItem.style.color = 'red';


//query selector all()

const listItems=document.querySelectorAll("li");
console.log(listItems);

//can not put style all at once
listItems[1].style.fontWeight="bold";

listItems.forEach((item)=>{
    item.style.lineHeight=1.5;
});