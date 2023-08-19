const parent=document.querySelector(".parent");
let output;
output=parent.childNodes;
console.log(output);
var output2;
output2=parent.childNodes[0];// whitespace is counted as text  
console.log(output2);
output2=output2.textContent;//this will not show any text
console.log(output2);
let output3;
output3=parent.childNodes[0].nodeName;
console.log(output3); 
let output4;
output4=parent.childNodes[1].outerHTML;//this will give the whole html code
console.log(output4);
output4=parent.childNodes[1].innerHTML;
console.log(output4);//this will give the html content inside the  


