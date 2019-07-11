/*//Declaration notation
function min(x, y) {
  return x < y ? x : y;
}*/

//Variable notation
var min = function(x, y) {
  return x < y ? x : y;
}

console.log(min(1, 2));
console.log(min(2, 1));
console.log(min(1, -2));
console.log(min(1, 1));
