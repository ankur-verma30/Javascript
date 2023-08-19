const listItems=document.querySelectorAll(".items");
console.log(listItems[2]);console.log(listItems[3].innerText);

// listItems.style.color='red'; this will not work as style works on the specified element
//we can do like this
listItems[2].style.color='green'; 
//all styling at once can be done using the for each loop
listItems.forEach((item,index)=>{
    item.style.color='red';
    if(index===1){
        item.remove();//mango is removed form the list
    }
    if(index===0){
        item.innerHTML="Oranges";
        // the difference between innertext and innerhtml is that we can addd whole html code in innerhtml and modify it accordingly
    }
})
//can also pass index in the forEach method

//create more methods
const listItems2=document.getElementsByClassName("items");
console.log(listItems2);
//can access individulal items of the nodelist
console.log(listItems2[2].innerText);
 

// listItems2.forEach((item)=>{
//     console.log(item);
// });//this will not work as it does not work on html collections first we have to convert it into the array
const listArray=Array.from(listItems2);
listArray.forEach((item)=>{
    console.log(item)
})
;//after converting into array foreach will work

//another method is 
const listItems3=document.getElementsByTagName("li");
//gives the first items and similarly we have to convert in into the array as it is also a html collection