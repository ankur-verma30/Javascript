function toggle(e){
    e.target.classList.toggle('danger');
}

document.querySelector('button').addEventListener('click',toggle);//no parenthesis is required for toggle

const posts=[
    {'title':'Post One', body:'This is post one'},
    {'title':'Post Two', body:'This is Post two'}
];

function creatpost(post,cb){//calling the callback function
    setTimeout(() => {
        posts.push(post);
        cb();
    }, 2000);
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
creatpost({title: 'Post three',body: 'This is post three'},getposts);//ths will not work because the create post function took longer time then the get post function hence we have passed getposts as callback function
// getposts();