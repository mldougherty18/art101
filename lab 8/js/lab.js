// index.js - Understand functions
// Author: Maggie Dougherty
// Date: nov 1 2023

//create a function 
function isEven(x) {
  return (x % 2 == 0);
}
// test function 
console.log("is 1 even? ", isEven (1));
console.log("is 2 even? ", isEven(2));
array = [100,81,5,56,99,125,200,600]
console.log("my array", array);
var result = array.map(isEven);
//should return [true, false, true, true, true, true, true]
console.log("Test of evenness of array:", result);
var results = array.map(function(x){
  return x ** 0.5;
})
//should return [10,11,3,5,3.1257,13,25]
console.log("squareroot of array:")