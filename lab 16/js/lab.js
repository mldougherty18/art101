// index.js - debug
// Author: Maggie Dougherty
// Date: dec 6 2023

//THANK YOU WES AND CHATGPT! 
// Function to fetch XKCD comic by number
function fetchComic(comicNumber) {
    $.ajax({
        url: `https://xkcd.com/${comicNumber}/info.0.json`,
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
  }

  // Initial XKCD comic number
  var currentComicNumber = 614;

  // Display the initial comic
  fetchComic(currentComicNumber);

  // Event handler for the "Next" button
  $("#next").on("click", function() {
      currentComicNumber++; 
      fetchComic(currentComicNumber);
  });

  // Event handler for the "Previous" button
  $("#prev").on("click", function() {
      if (currentComicNumber > 1) {
          currentComicNumber--;
          fetchComic(currentComicNumber);
      }
  });