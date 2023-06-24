const item=["book ","table" ,"chair"]

for(let itmes of item){
    console.log(itmes)
}

//loop through strings

const str="Hello, world!"

for(const letter of str){
    console.log(letter)
}

//for in loop
const colorObj={
    color1:"red",
    color2:"green",
    color3:"yellow",
    color4:"blue",

};
for(const key in colorObj){
    console.log(key+":"+colorObj[key])
  
}

//can use for in loop for the arrays also but widely used for the objects always output the keys
