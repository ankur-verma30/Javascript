//insert Adjecent elements 
function insertAdjecentElement(){
  const filter=document.querySelector(".filter");
  const h1=document.createElement("h1");
  h1.textContent="This is the JS made h1";
  filter.insertAdjacentElement("beforeend",h1);
  //afterbegin,beforebegin helps to put the conente above the referenced element 
  // beforeend and beforebegin place the content after the reference element

}

//InsertAdjecentText
function insertAdjacentText(){
    const item=document.querySelector("li:first-child");
    item.insertAdjacentText("afterbegin","this is the text");//afterbegin puts text electly before the text of the referenced element but the before begin put the content before the text of the referenced element
}
insertAdjecentElement();
insertAdjacentText();

//insertBefore
function insertBeforeElement(){
    const ul=document.querySelector("ul");
    const li=document.createElement("li");
    li.textContent = "insertBefore";
    const thirdItem=document.querySelector('li:nth-child(3)');
    ul.insertBefore(li,thirdItem);//this is done by selecting the parent element then passing the parameters what to insert and which position then the content will be added before the inserted parameters
}
insertBeforeElement();//this is added before the third child of the list