console.log(100);
// console is th object and the log is the method used with the console
console.log("Hello world!");
console.log(20, 'Hello', true);
const x = 100;
console.log(x);
console.error('Alert');
// console is for the developers not for the users
console.warn("Warning");

//uses of table 
console.table({
    name:'Ankur',email:"ankurverma7619@gmail.com"
});

// uses of the group
console.group("simple");
console.log(x);
console.error('Alert');
// console is for the developers not for the users
console.warn("Warning");
console.groupEnd();
// can change the css of the console data
const style="padding:10px;background-color:yellow;color:red;"
console.log("%cHello World",style);