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

// function* doWork() {
//   console.log(1);
//   console.log(2);
//   yield 1;
//   console.log(3);
//   console.log(4);
//   yield 2;
//   console.log(5);
//   console.log(6);
//   return 344;
// }

async function doWork() {
  await step1();
  step2();
  await step3();
  step4();
}

doWork();
