// index.js - debug
// Author: Maggie Dougherty
// Date: dec 3 2023

// jQuery code to handle button click and make AJAX call
$(document).ready(function() {
  $("#activate").on("click", function() {
      // Make an AJAX call to XKCD API
      $.ajax({
          url: "https://xkcd.com/info.0.json",
          method: "GET",
          dataType: "json",
          success: function(data) {
              // Create HTML content with specific information
              var outputHtml = `
                  <h2>${data.title}</h2>
                  <img src="${data.img}" alt="${data.alt}" style="max-width: 100%; height: auto;">
                  <p>${data.alt}</p>
              `;
              // Display the HTML content in the output div
              $("#output").html(outputHtml);
          },
          error: function(xhr, status, error) {
              console.log("Error fetching data:", status, error);
              $("#output").text("Error fetching data");
          }
      });
  });
});
//THANK YOU WES AND CHATGPT! 