//constructor function
function Person(firstName, lastName) {
  this._firstName = firstName;
  this._lastName = lastName;

  Object.defineProperty(this, "firstName", {
    get: function () {
      return this.capitalize(this._firstName);
    },
    set: function (value) {
      this._firstName = this.capitalize(value);
    },
  });
  //for lastName
  Object.defineProperty(this, "lastName", {
    get: function () {
      return this.capitalize(this._lastName);
    },
    set: function (value) {
      this._lastName = this.capitalize(value);
    },
  });

  //fullName

  Object.defineProperty(this, "fullName", {
    get: function () {
      return this.firstName + " " + this.lastName;
    },
  });
}

Person.prototype.capitalize = function (value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
};

//Object Literal

const PersonObj={
    _firstName: 'John',
    _lastName: 'Snow',

    get firstName(){
        return Person.prototype.capitalize(this._firstName);
    },

    set firstName(value){
        this._firstName = value;
    },

    get lastName(){
        return Person.prototype.capitalize(this._lastName);
    },

    set lastName(value){
        this._lastName = value;
    },
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
}

const person1 = new Person("john", "doe");
console.log(person1);
console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.fullName);

person1.firstName = "mark";
person1.lastName = "twain";

console.log(person1);


const person2=Object.create(PersonObj);
console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.fullName);



