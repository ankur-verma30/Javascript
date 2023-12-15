const posts=[
    {'title':'Post One', body:'This is post one'},
    {'title':'Post Two', body:'This is Post two'}
];

function creatpost(post){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let error=false;
            if(!error){
                posts.push(post);
                resolve(); 
            }
            else{
                reject("Something went wrong");
            }
        }, 2000);
    });
}

function getposts(){
    setTimeout(()=>{
    posts.forEach(function(post){
        const div=document.createElement('div');
        div.innerHTML=`<strong>${post.title}</strong>-${post.body}`;
        document.querySelector('#posts').appendChild(div);
     
});
},1000);//total time wate is 3seconds
};

function ShowError(error){
    const h3=document.createElement('h3');
    h3.innerHTML = `<strong>${error}</strong>`
    document.getElementById('posts').appendChild(h3); 
} 

creatpost({title: 'Post three',body: 'This is post three'}).then(getposts).catch(ShowError);