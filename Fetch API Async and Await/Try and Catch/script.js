try{
    console.log(x);
}catch(error){
    console.log('Erorr received '+ error);
}

function double(number){
    if(isNaN(number)){
        throw new Error(number+' is not a number');
    }
    return number*2;
    
}
try{
    const y= double('jello');
}catch(error){
    console.log('Erorr received '+ error);
}finally{
    console.log('Erorr considered and taken action successfully');
}
 