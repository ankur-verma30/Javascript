if(true){
    console.log("This is true");
}
if(false){
    console.log("This is false");
}



const x=10;
const y=5;
if(x===y)
{
    console.log(`${x} is equal to ${y}`);
}
else{
    console.log(`${x} is not equal to ${y}`);
}
//using the nested if else same as the other programminng languages


//using the switch statement

const month=new Date( 2022,1,10,8,0,0);
const d=month.getMonth();

switch(d){
    case 1:{
        console.log("It is january");
        break;
    }
    default:
        console.log("It is not january");
}