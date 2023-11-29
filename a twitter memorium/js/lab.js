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
}const Twit = require('twit');

const T = new Twit({
  consumer_key: 'your_consumer_key',
  consumer_secret: 'your_consumer_secret',
  access_token: 'your_access_token',
  access_token_secret: 'your_access_token_secret',
});
T.get('statuses/user_timeline', { screen_name: 'twitter', count: 200 }, function (err, data, response) {
  if (err) {
    console.error(err);
  } else {
    // Process the tweets (e.g., store in a file or database)
    console.log(data);
  }
});
const fs = require('fs');

fs.writeFileSync('tweets.json', JSON.stringify(data), 'utf-8');
// Fetch and display tweets
fetch('tweets.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(tweet => {
      const tweetElement = document.createElement('p');
      tweetElement.textContent = tweet.text;
      tweetsContainer.appendChild(tweetElement);
    });
  })
  .catch(error => console.error(error));