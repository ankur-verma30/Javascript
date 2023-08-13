console.log(window.document)
//not required to write the window object
console.log(document)
console.log(document.body)
console.log(document.body.innerHTML)
console.log(document.body.innerText)
console.log(document.links)
// document.body.innerHTML ="<h1> Hello world!</h1>"//changes the whole content of the body of the webpage to the desired content+



//can access all the elements in the webpage

let output;
output=document.all;//NOT USED WITH so often that's why it is been striked out

console.log(output)

//can be done in the form of array to access the elements 
output=document.all[6];//its is the heading so with this we can access any elements though not preferred very much 
console.log(output)


//can also check how many elements are there in the webpage
let length;
length=document.all.length
console.log(length)//18 

output=document.documentElement
console.log(output)//ggives the whole html element

//can access the specific element 
output =document.head
console.log(output)

//can get the children of the elements 
output=document.body.children
console.log(output)
output=document.doctype
console.log(output)
let data;
data=document.domain//marked as deprecated here
console.log(data)
data=document.URL
console.log(data)
data=document.characterSet
console.log(data)
 data=document.contentType
 console.log(data)

//  data=document.forms
//  console.log(data)
//  //for forms we can do many things like 
//  data=document.form.id
//  console.log(data)//shows undefined here as there is no form here
//  //can also get the method from it
//  data=document.form.method
//  console.log(data)
//  //can also get where the forms submits through its action content
//  data=document.form.action
//  console.log(data)
output=document.links[0]
console.log(output)
output=document.links
console.log(output)
document.links.id="google-links"
output=document.links.id
console.log(output)
output=document.links[0].href
console.log(output) 
document.links[0].href="http://google.com"
output=document.links[0].href
console.log(output)
output=document.links[0].id
console.log(output)
output= document.links[0].id="google"
console.log(output)


//can be done with images also
output=document.images//through this we get an HTML collection
console.log(output)


//changing into array and using the for each loop
const links=Array.from(document.links);
links.forEach((link)=>console.log(link))