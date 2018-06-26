function foo(x, y) {
  x = x || 0;
  y = y || 0;
  console.log(x, y);
}

function foo1(x = 0, y = 0, z) {
  console.log(x, y);
}
