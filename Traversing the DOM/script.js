//properties
let output;

//get child element from the parent
const parent= document.querySelector(".parent");
output=parent.children;
output=parent.children[1];//gives child 2 
console.log(output);//gives the html collection of the child elements 
console.dir(output);//shows all the properties and methods can be used
let output2;
output2=parent.children[1].className;
console.log(output2);//gives the class name of the child elements
let output3;
output3=parent.children[2].nodeName;
console.log(output3);//part of the node div
//can change the content of the element
parent.children[1].innerText="child two";//the text has been changed can also add styling

parent.firstElementChild.innerText="child one";//the text has been changed
parent.lastElementChild.innerText="child three";//the text has been changed
let output4;
const child=document.querySelector(".child");
output4=child.parentElement;//gives the parent element

//can change the parent with the help of the child
child.parentElement.style.border="1px solid black"; 
console.log(output4);

//siblings elements
const secondItem=document.querySelector(".child:nth-child(2)");
console.log(secondItem);
let output5;
output5=secondItem.nextElementSibling;
secondItem.nextElementSibling.style.color="green";//this makes the next element green to the second one
//there is one property for the previous siblings also
secondItem.previousElementSibling.style.color="aqua";
//previous to the second item thatis first

 
  
