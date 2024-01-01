function Rectangle(name, width, height) {
  this.name = name;
  this.width = width;
  this.height = height;
  this.area = function () {
    return this.width * this.height;
  };
}

//accessing properties with different methods

const rect1 = new Rectangle("Rectangle1", 20, 20);
console.log(rect1.name); //using dot operator
console.log(rect1["width"]); //using square brackets

//adding another property
rect1.color = "red";
console.log(rect1["color"]);
console.log(rect1); //color is also added

//when we add the fuction property inside the object literal then we cannot use this operator for reffering to the object because outside the scope of the object literal it is window object so instead we have to use instance name

rect1.perimeter = () => 2 * (rect1.height + rect1.width);

console.log(rect1.perimeter());
console.log(rect1);

//deletion of any property
delete rect1.perimeter;
console.log(rect1);

//for checking the property that it contains or not

console.log(rect1.hasOwnProperty('color'));//gives true means it owns it


///we can get keys of the object as arrays
console.log(Object.keys(rect1));

//we can get values same ways
console.log(Object.values(rect1));

//get enteries it get the array of the arrays like keys and its values 
console.log(Object.entries(rect1));

//looping to get the enteries of the object
for(let[key, value] of Object.entries(rect1)){
    //if we want to log only properties not the functions then
    if(typeof value !== 'function')
    console.log(key,value);
}