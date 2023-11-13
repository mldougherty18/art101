// index.js - Understand jquery and button functions
// Author: Maggie Dougherty
// Date: nov 8 2023

//some code is thanks to the examples in the lab and some is from ChatGPT

$(document).ready(function() {
  // Adds buttons to each section
  $(".minor-section").append("<button id='challenge-button'>Go 4 it Jbrony</button>");

  // Adds an event listener that toggles the class "special" for each section
  $("#challenge-button").click(function(){
      $(".minor-section").toggleClass("special");
  });
});