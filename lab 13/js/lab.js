// index.js - Using jquery adn javascript to create a sorting house function 
// Author: Maggie Dougherty
// Date: nov 20 2023

$(document).ready(function () {
  // Initialize an empty string to store the output
  let oneLongString = "";

  // Loop through numbers 1 to 200
  for (let num = 1; num <= 200; num++) {
      // Initialize an empty string for each iteration
      let str = num + " ";

      // Check if the number is a multiple of 3
      if (num % 3 === 0) {
          str += "Fizz";
      }

      // Check if the number is a multiple of 5
      if (num % 5 === 0) {
          str += "Buzz";
      }

      // Check if the number is a multiple of 7
      if (num % 7 === 0) {
          str += "Boom";
      }

      // Append the current string to the long string
      oneLongString += str + "<br>";
  }

  // Output the long string to the output div
  $("#output").html(oneLongString);
});
//thank you Wes Modes and chatgpt!