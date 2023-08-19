//methods for replacing the elements in the list
//80
function replaceFirstItem(){
    const firstItem=document.querySelector("li:first-child");//step 1 selected first item of the list
    const li=document.createElement("li");// Step 2 created item for the replacement
    li.textContent="replaced first item";//step 3 the content of the replacing item
    firstItem.replaceWith(li);//step 4 the method to replace the first item

}
replaceFirstItem();//Step 5 call the fumction for replacement