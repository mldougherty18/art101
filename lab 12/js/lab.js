// index.js - Using jquery adn javascript to create a sorting house function 
// Author: Maggie Dougherty
// Date: nov 20 2023

// Function to sort into Hogwarts houses
//Thank you ChatGPT!
function sortingHat(str) {
  var length = str.length;
  var mod = length % 4;
 
  // Use a switch statement to determine the house
  switch (mod) {
    case 0:
      return "Gryffindor";
    case 1:
      return "Ravenclaw";
    case 2:
      return "Slytherin";
    case 3:
      return "Hufflepuff";
    default:
      return "Error Sorting Hat";
  }
}

// Click listener
$('#button').on('click', function() {
  // Get the value of #input
  var name = $('#input').val();
 
  // Run sortingHat function
  var house = sortingHat(name);
 
  // Append a new styled paragraph to #output
  $('#output').html("The Sorting Hat has sorted you into " + house);
});
