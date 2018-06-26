// function step1(next) {
//   console.log(1);
//   console.log(2);
//   console.log(3);
//   setTimeout(function() {
//     console.log(4);
//     console.log(5);
//     next(step3);
//   }, 1000);
// }

// function step2(next) {
//   console.log(6);
//   next(step4);
// }

// function step3(next) {
//   setTimeout(function() {
//     console.log(7);
//     console.log(8);
//     next();
//   }, 1000);
// }

// function step4() {
//   console.log(9);
//   console.log(10);
// }

// function doWork() {
//   step1(step2);
// }

// doWork();

let p = new Promise((resolve, reject) => {
  setTimeout(function() {
    resolve({ message: "done" });
  }, 3000);
});

p.then(data => console.log(data)).catch(err => console.log(err));

function step1() {
  return new Promise((resolve, reject) => {
    console.log(1);
    console.log(2);
    console.log(3);
    setTimeout(function() {
      console.log(4);
      console.log(5);
      resolve();
    }, 1000);
  });
}

function step2() {
  console.log(6);
}

function step3() {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      console.log(7);
      console.log(8);
      resolve();
    }, 1000);
  });
}

function step4() {
  console.log(9);
  console.log(10);
}

function doWork() {
  step1()
    .then(() => step2())
    .then(() => step3())
    .then(() => step4());
}

doWork();
