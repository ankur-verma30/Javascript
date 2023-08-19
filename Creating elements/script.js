const div=document.createElement('div');
div.className="JsMadeClassName";//adds class to the div
div.id="JsMadeId";//this is to add the id to the div
div.setAttribute("title","My Element");//this is used to set the attributes of the div

//to add some content in the div
//Method 1
// div.innerText="Hello, world!";//not the best way to write the new element

//Method 2
const text=document.createTextNode("Hello, world!");
div.appendChild(text);//this is the method used to add the content to the element

//if you want to append at the end of the body 
document.body.appendChild(div);//hello world is appended at the bottom of the webpage as the last content of the body


console.log(div);
