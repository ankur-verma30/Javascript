const post={
    title:"post2",
    id:1,
    body:"this is a body"
}
console.log(post)

//convert to JSON String 

const str=JSON.stringify(post);
console.log(str)


//Parse

const obj1=JSON.parse(str);
console.log(obj1)//back to string

//if we want to access the specific value of any key  of the json file we can't do directly first we have to parse it to objects then it is possible 