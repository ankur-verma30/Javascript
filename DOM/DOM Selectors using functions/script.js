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