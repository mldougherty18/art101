// index.js - Understand functions
// Author: Maggie Dougherty
// Date: nov 1 2023

// Creating a function to compare the strings and sort them alphabetically regardless of case
// Credit to Stack Overflow - How Do You Sort Letters in JavaScript with Capital & Lowercase Letters Combined?
function caseSensitive(stringA,_string ) {
  return stringA. toLowerCase(). localeCompare(stringA. toLowerCase());
}

//create a function to get user input and sort their name
//credit to Wes Modes ART101 lab 7 canvas page and Percilla for helping us! 
function sortingUserName(){
  //creating a variable to get user input
  var userName = window.prompt ("hello world. what is your name?");
  console. log ("userName = ", userName);
  //splitting string into array 
  var nameArray = userName.split('');
  console.log ("nameArray = ", nameArray);
  //sorting array 
  var nameSortArray = nameArray.sort ();
  console.log ("nameSortArray = ", nameSortArray);
  //using function - caseSenstitive to sort through string 
  var caseSens = nameSortArray.sort (caseSensitive);
  console.log ("caseSens = ", caseSens) ;
  //joining array into string 
  var nameSorted = caseSens. join('');
  console.log ("nameSorted = ", nameSorted);
  // returning the sorted name 
  return nameSorted;
}

//output
document.writeln("I fixed your name: ",
sortingUserName (),"</br>");