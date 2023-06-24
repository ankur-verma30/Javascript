
//for each loop

const socials=["facebook","twitter","whatsapp"]

socials.forEach(function(social){
    console.log(social);
}); 
  

///can be done in the other way also

function logsocials(handles){
    console.log(handles);
}
socials.forEach(logsocials)

// on the objects use of the for each loop
const socialObj=[{
    name:"twitter",url:"http://twitter.com"},
{name:"facebook",url:"http://facebook.com"},
{name:"github",url:"http://github.com"},
]

socialObj.forEach((item)=>console.log(item));

//filter method
const words=["Ram", "Facebook", "battleground", "Twitter", "database"]

const result=words.filter(word=>word.length>4);
console.log(result);
