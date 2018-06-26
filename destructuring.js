var arr = [1, 2, 3];
// var first = arr[0];
// var second = arr[1];
// var third = arr[2];
var [first, second, third] = arr;
console.log(first, second, third);

let apiResponse = {
  username: "baluragala",
  url: "https://github.com/baluragala"
};

let { type: subscriptionType = "free", username, url } = apiResponse;
console.log(username, url, subscriptionType);

let members = ["Jack", "Jill", "Hill", "Bill", "Chill"];

let [manager, lead, ...team] = members;
console.log(manager, lead, team);
