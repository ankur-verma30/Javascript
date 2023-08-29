// const listItems=document.querySelectorAll("li");
// listItems.forEach(item=>{
//     item.addEventListener("click",(e)=>{
//         console.log(e.target.remove())
//     })
// })//not the best way for large numbers

//we use event delegation
const list =document.querySelector("ul");
list.addEventListener("click", (e) =>{
    console.log(e.target)//still working like the above
    //here we have selected the common parent and applied the single event listner over that and we will get the same results
})


//for doing it for the styling purpose
const list2=document.querySelector("ul");
list2.addEventListener("mouseover",(e)=>{
e.target.style.color="red"
})
