Math.min(-0, -2, 3, -30, 45);
var args = [-0, -2, 3, -30, 45];

Math.min(args);

Math.min.apply(Math, args);
Math.min(...args);

let name1 = "zeolearn";
let name2 = "bala";
let chars = [];
chars.push(...name1);
chars.push(...name2);
