function sum(p1, p2, p3) {
  return p1 + p2 + p3;
}

function sum1(p1, p2, p3, ...params) {
  let t = 0;
  for (let p of params) {
    t += p;
  }
  return t;
}
