let d;
d=new Date;
console.log(d,typeof d);

d=d.toString();
console.log(d );
//both will give the current date and time 
 d=new Date();
 console.log(d.toString());

 //customized date and time
 d=new Date(2003,7,30,4,50,45);
 //helps to get to know the time and day of the particular date
 console.log(d.toString());

 //can pass strings also
 d=new Date("2021-07-10T12:20:20");//this will return months as 1 indexed based
 console.log(d.toString());
 //for getting the exact milliseconds 
/* ---------------------------------------DR. STONE------------------*/     
 d=Date.now();
 console.log(d);

 //
 d=new Date("07-08-2013 2:20:23");
 d=d.getTime();//can be used d=d.valueOf() gives the same result    
 console.log(d);//what was the milliseconds till now have been recorded
//can tell what was the time and date with the help of the milliseconds
 d=new Date(1234567899);
 console.log(d.toString());



