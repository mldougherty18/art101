// index.js - debug
// Author: Maggie Dougherty
// Date: nov 29 2023

// Credit to Stack Overflow - How Do You Sort Letters in JavaScript with Capital & Lowercase Letters Combined?
function caseSensitive(stringA, stringB) {
  return stringA.toLowerCase().localeCompare(stringB.toLowerCase());
}

//create a function to get user input and sort their name
//credit to Wes Modes ART101 lab 7 canvas page and Percilla for helping us! 
function sortingUserName() {
  //creating a variable to get user input
  var userName = window.prompt("hello world. what is your name?");

  // Check if the user clicked "Cancel" or closed the prompt
  if (userName === null) {
    console.log("User canceled the prompt");
    return null; // Or handle it in a way that makes sense for your application
  }

  console.log("userName = ", userName);

  //splitting string into array 
  var nameArray = userName.split('');
  console.log("nameArray = ", nameArray);

  //sorting array using function - caseSensitive
  var caseSens = nameArray.sort(caseSensitive);
  console.log("caseSens = ", caseSens);

  //joining array into string 
  var nameSorted = caseSens.join('');
  console.log("nameSorted = ", nameSorted);

  // returning the sorted name 
  return nameSorted;
}

//output
var sortedName = sortingUserName();

// Check if sortedName is not null before using it
if (sortedName !== null) {
  // Create a paragraph element
  var resultParagraph = document.createElement('p');

  // Set the content of the paragraph
  resultParagraph.textContent = "I fixed your name: " + sortedName;

  // Append the paragraph to the body or another appropriate container
  document.body.appendChild(resultParagraph);
} else {
  console.log("You canceled the prompt. No name to fix.");
}