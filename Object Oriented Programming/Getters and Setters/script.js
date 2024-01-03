class Person {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  //getters
  get firstName() {
    return this.capitalize(this._firstName);
  }

  get lastName() {
    return this.capitalize(this._lastName);
  }

  //setters
  set firstName(value) {
    this._firstName = this.capitalize(value);
  }

  set lastName(value) {
    this._lastName = this.capitalize(value);
  }

  capitalize(value) {
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}

const person1 = new Person("john", "Doe");
console.log(person1.firstName);

person1.firstName = "joe";
person1.lastName = "smith";
console.log(person1);

//Getters and Setters Using defineProperty()
