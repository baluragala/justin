class Person {
  constructor(age) {
    this.age = age;
  }

  describe() {
    console.log(`Age of person is ${this.age}`);
  }
}

class Employee extends Person {
  constructor(age, company) {
    super(age);
    this.company = company;
  }

  describe() {
    console.log(
      `Age of person is ${this.age} and he works for ${this.company}`
    );
  }
}

let e = new Employee(23, "acb");
e.describe();

function Person1(age) {
  this.age = age;
  this.describre = () => {
    console.log(`Age of person is ${this.age}`);
  };
}
