// index.js - variables and recall 
// Author: Maggie Dougherty
// Date: oct 25 2023

// Constants
function showPage(pageName) {
  // Hide all content sections
  var contentSections = document.querySelectorAll('.content-section');
  contentSections.forEach(function(section) {
    section.style.display = 'none';
  });

  // Show the selected content section
  var selectedSection = document.getElementById(pageName);
  if (selectedSection) {
    selectedSection.style.display = 'block';
  }
}