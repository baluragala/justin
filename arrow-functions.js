var arr = [1, 2, 3];
var squares = arr.map(x => x * x);

function Person(age) {
  this.age = age;
  this.describre = () => {
    console.log(`Age of person is ${this.age}`);
  };
}
