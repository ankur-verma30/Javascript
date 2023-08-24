function RemoveButton(){
    document.querySelector(".filter").remove();
}
RemoveButton();//removes the content having the filter class

//Removing the child elements
function RemoveChild(){
    const ul=document.querySelector("ul");
    const li=document.querySelector("li:nth-child(2)");
    ul.removeChild(li);
}
// RemoveChild();
//oranges is gone from the list

//remove any of the elements from the list
function RemoveItems(itemNumber){
    const ul=document.querySelector("ul");
    const li=document.querySelector(`li:nth-child(${itemNumber})`);
    ul.removeChild(li);
}
RemoveItems(4);//can remove any items from the list

//Another method
function RemoveItems2(itemNumber){
    const ul=document.querySelector("ul");
    const li=document.querySelectorAll("li")[itemNumber ];//this will work as the array index element type not the type of the nth child as it is zero based
    ul.removeChild(li);
}
RemoveItems2(2);


//Shorter way of doing this is 
const removeItems4 = (itemNumber) =>document.querySelectorAll("li")[itemNumber-1].remove();
removeItems4(1);//Mango is removed from the list 
