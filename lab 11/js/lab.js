// index.js - create a chat generator 
// Author: Maggie Dougherty
// Date: nov 15 2023

//find the element adn give it a function 
function generateRandomText() {
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}


// click listener for button
$("#make-convo").click(function(){
  // Generate random text using the function
  const newText = generateRandomText();
 
  // Append a new div to the output div
  $("#output").append('<div class="text"><p>' + newText + '</p></div>');
});
//credit to Wes Modes and chatgpt